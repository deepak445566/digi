import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: "https://courageous-druid-7eb911.netlify.app",
  credentials: true
}));

app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/digital_express', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Form Submission Schema
const formSubmissionSchema = new mongoose.Schema({
  businessName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  businessExistence: { type: String, required: true },
  websiteUrl: { type: String, default: '' },
  hasSocialMedia: { type: String, required: true },
  socialMediaLinks: { type: String, default: '' },
  serviceId: { type: String, required: true },
  serviceName: { type: String, required: true },
  planName: { type: String, required: true },
  planPrice: { type: Number, required: true },
  submittedAt: { type: Date, default: Date.now },
  status: { type: String, default: 'New' }
});

const FormSubmission = mongoose.model('FormSubmission', formSubmissionSchema);

// Owner Authentication Middleware
const authenticateOwner = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({ success: false, message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.owner = decoded;
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: 'Invalid token' });
  }
};

// Routes

// Owner Login
app.post('/api/owner/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check against .env credentials
    if (email !== process.env.OWNER_EMAIL || password !== process.env.OWNER_PASSWORD) {
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid credentials' 
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      { email: process.env.OWNER_EMAIL }, 
      process.env.JWT_SECRET, 
      { expiresIn: '24h' }
    );

    res.json({
      success: true,
      message: 'Login successful',
      token,
      owner: { email: process.env.OWNER_EMAIL }
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
});

// Submit Form
app.post('/api/submissions', async (req, res) => {
  try {
    const formData = req.body;
    
    const submission = new FormSubmission(formData);
    await submission.save();

    res.status(201).json({
      success: true,
      message: 'Form submitted successfully',
      data: submission
    });
  } catch (error) {
    console.error('Error saving submission:', error);
    res.status(500).json({
      success: false,
      message: 'Error submitting form'
    });
  }
});

// Get All Submissions (Owner only)
app.get('/api/submissions', authenticateOwner, async (req, res) => {
  try {
    const submissions = await FormSubmission.find().sort({ submittedAt: -1 });
    
    res.json({
      success: true,
      data: submissions
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching submissions'
    });
  }
});

// Get Single Submission
app.get('/api/submissions/:id', authenticateOwner, async (req, res) => {
  try {
    const submission = await FormSubmission.findById(req.params.id);
    
    if (!submission) {
      return res.status(404).json({
        success: false,
        message: 'Submission not found'
      });
    }

    res.json({
      success: true,
      data: submission
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching submission'
    });
  }
});

// Update Submission
app.put('/api/submissions/:id', authenticateOwner, async (req, res) => {
  try {
    const submission = await FormSubmission.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!submission) {
      return res.status(404).json({
        success: false,
        message: 'Submission not found'
      });
    }

    res.json({
      success: true,
      message: 'Submission updated successfully',
      data: submission
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating submission'
    });
  }
});

// Delete Submission
app.delete('/api/submissions/:id', authenticateOwner, async (req, res) => {
  try {
    const submission = await FormSubmission.findByIdAndDelete(req.params.id);

    if (!submission) {
      return res.status(404).json({
        success: false,
        message: 'Submission not found'
      });
    }

    res.json({
      success: true,
      message: 'Submission deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting submission'
    });
  }
});

// Update Submission Status
app.patch('/api/submissions/:id/status', authenticateOwner, async (req, res) => {
  try {
    const { status } = req.body;
    const submission = await FormSubmission.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!submission) {
      return res.status(404).json({
        success: false,
        message: 'Submission not found'
      });
    }

    res.json({
      success: true,
      message: 'Status updated successfully',
      data: submission
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating status'
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});