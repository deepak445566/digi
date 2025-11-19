import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  const container = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.header
          initial="hidden"
          animate="visible"
          variants={container}
          className="text-center mb-12"
        >
          <Link to="/" className="inline-block mb-6">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20 inline-block">
              <h1 className="text-4xl font-black tracking-wide text-gray-900">
                DIGITAL <span className="text-indigo-600">EXPRESS</span>
              </h1>
              <p className="text-indigo-500 text-sm font-semibold mt-1">INDIA</p>
            </div>
          </Link>
          
          <h1 className="text-5xl font-black text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Last updated: {new Date().toLocaleDateString('en-IN', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </motion.header>

        {/* Main Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 p-8 lg:p-12"
        >
          {/* Introduction */}
          <motion.section variants={item} className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">
              Introduction
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              At <strong>Digital Express India</strong> ("we," "our," or "us"), we are committed to protecting 
              your privacy and ensuring the security of your personal information. This Privacy Policy 
              explains how we collect, use, disclose, and safeguard your information when you use our 
              digital marketing services.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              By accessing our website and using our services, you consent to the practices described 
              in this Privacy Policy.
            </p>
          </motion.section>

          {/* Information We Collect */}
          <motion.section variants={item} className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">
              Information We Collect
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-indigo-600 mb-3">Personal Information</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Name and contact details (email, phone number, address)</li>
                  <li>Business information and company details</li>
                  <li>Payment and billing information</li>
                  <li>Communication preferences</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-indigo-600 mb-3">Automatically Collected Information</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>IP address and browser type</li>
                  <li>Device information and operating system</li>
                  <li>Website usage data and analytics</li>
                  <li>Cookies and tracking technologies</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-indigo-600 mb-3">Service-Related Information</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Marketing campaign data and performance metrics</li>
                  <li>Customer preferences and service requirements</li>
                  <li>Communication history and support tickets</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* How We Use Your Information */}
          <motion.section variants={item} className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">
              How We Use Your Information
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100">
                <h4 className="font-semibold text-indigo-700 mb-3">Service Delivery</h4>
                <p className="text-gray-700">To provide and manage our digital marketing services</p>
              </div>
              
              <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100">
                <h4 className="font-semibold text-indigo-700 mb-3">Communication</h4>
                <p className="text-gray-700">To respond to inquiries and provide customer support</p>
              </div>
              
              <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100">
                <h4 className="font-semibold text-indigo-700 mb-3">Improvement</h4>
                <p className="text-gray-700">To enhance and optimize our services and website</p>
              </div>
              
              <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100">
                <h4 className="font-semibold text-indigo-700 mb-3">Marketing</h4>
                <p className="text-gray-700">To send promotional materials and updates (with consent)</p>
              </div>
            </div>
          </motion.section>

          {/* Data Sharing and Disclosure */}
          <motion.section variants={item} className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">
              Data Sharing and Disclosure
            </h2>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share 
              your information in the following circumstances:
            </p>
            
            <ul className="list-disc list-inside text-gray-700 space-y-3 ml-4">
              <li><strong>Service Providers:</strong> With trusted partners who assist in delivering our services</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with mergers or acquisitions</li>
              <li><strong>With Your Consent:</strong> When you explicitly authorize us to share information</li>
            </ul>
          </motion.section>

          {/* Data Security */}
          <motion.section variants={item} className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">
              Data Security
            </h2>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              We implement appropriate technical and organizational security measures to protect your 
              personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
            
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="font-semibold text-green-700 mb-3">Security Measures Include:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>SSL encryption for data transmission</li>
                <li>Secure servers and firewalls</li>
                <li>Regular security assessments</li>
                <li>Limited access to personal data</li>
                <li>Employee training on data protection</li>
              </ul>
            </div>
          </motion.section>

          {/* Your Rights */}
          <motion.section variants={item} className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">
              Your Rights
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-indigo-100 text-indigo-600 rounded-lg p-3">
                  <span className="font-semibold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Access and Correction</h4>
                  <p className="text-gray-700">Right to access and update your personal information</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-indigo-100 text-indigo-600 rounded-lg p-3">
                  <span className="font-semibold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Data Portability</h4>
                  <p className="text-gray-700">Right to receive your data in a structured format</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-indigo-100 text-indigo-600 rounded-lg p-3">
                  <span className="font-semibold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Withdraw Consent</h4>
                  <p className="text-gray-700">Right to withdraw consent for data processing</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-indigo-100 text-indigo-600 rounded-lg p-3">
                  <span className="font-semibold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Deletion</h4>
                  <p className="text-gray-700">Right to request deletion of your personal data</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Cookies and Tracking */}
          <motion.section variants={item} className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">
              Cookies and Tracking Technologies
            </h2>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              We use cookies and similar tracking technologies to enhance your experience on our website. 
              You can control cookie preferences through your browser settings.
            </p>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <h4 className="font-semibold text-yellow-700 mb-3">Types of Cookies We Use:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our site</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
              </ul>
            </div>
          </motion.section>

         

          {/* Policy Updates */}
          <motion.section variants={item}>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-purple-700 mb-3">Policy Updates</h3>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. We will notify you of any changes 
                by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </div>
          </motion.section>
        </motion.div>

        {/* Back to Home */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="text-center mt-8"
        >
          <Link
            to="/"
            className="inline-flex items-center space-x-2 bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition-colors duration-300 font-semibold"
          >
            <span>← Back to Home</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;