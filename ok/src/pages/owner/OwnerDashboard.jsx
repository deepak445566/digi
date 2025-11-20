import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const OwnerDashboard = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingSubmission, setEditingSubmission] = useState(null);
  const [editFormData, setEditFormData] = useState({});
  const [viewingSubmission, setViewingSubmission] = useState(null);
  const [stats, setStats] = useState({ total: 0, new: 0, contacted: 0, completed: 0 });
  const navigate = useNavigate();

  // Direct API URL define karein
  const API_URL = 'https://digi-ijuk.onrender.com';

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const token = localStorage.getItem('ownerToken');
      const response = await axios.get(
        `${API_URL}/api/submissions`,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      if (response.data.success) {
        setSubmissions(response.data.data);
        calculateStats(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching submissions:', error);
      if (error.response?.status === 401) {
        localStorage.removeItem('ownerToken');
        localStorage.removeItem('ownerEmail');
        navigate('/owner/login');
      }
    } finally {
      setLoading(false);
    }
  };

  const calculateStats = (data) => {
    const total = data.length;
    const newCount = data.filter(s => s.status === 'New').length;
    const contacted = data.filter(s => s.status === 'Contacted').length;
    const completed = data.filter(s => s.status === 'Completed').length;
    
    setStats({ total, new: newCount, contacted, completed });
  };

  const handleViewDetails = (submission) => {
    setViewingSubmission(submission);
  };

  const handleEdit = (submission) => {
    setEditingSubmission(submission._id);
    setEditFormData(submission);
  };

  const handleEditChange = (e) => {
    setEditFormData({
      ...editFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdate = async (id) => {
    try {
      const token = localStorage.getItem('ownerToken');
      const response = await axios.put(
        `${API_URL}/api/submissions/${id}`,
        editFormData,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      if (response.data.success) {
        setSubmissions(submissions.map(s => 
          s._id === id ? response.data.data : s
        ));
        setEditingSubmission(null);
        calculateStats(submissions.map(s => 
          s._id === id ? response.data.data : s
        ));
      }
    } catch (error) {
      console.error('Error updating submission:', error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this submission?')) {
      return;
    }

    try {
      const token = localStorage.getItem('ownerToken');
      const response = await axios.delete(
        `${API_URL}/api/submissions/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      if (response.data.success) {
        setSubmissions(submissions.filter(s => s._id !== id));
        calculateStats(submissions.filter(s => s._id !== id));
      }
    } catch (error) {
      console.error('Error deleting submission:', error);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      const token = localStorage.getItem('ownerToken');
      const response = await axios.patch(
        `${API_URL}/api/submissions/${id}/status`,
        { status: newStatus },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      if (response.data.success) {
        setSubmissions(submissions.map(s => 
          s._id === id ? response.data.data : s
        ));
        calculateStats(submissions.map(s => 
          s._id === id ? response.data.data : s
        ));
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('ownerToken');
    localStorage.removeItem('ownerEmail');
    navigate('/owner/login');
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading submissions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className=" text-xl lg:text-3xl font-bold text-gray-900">Owner Dashboard</h1>
              <p className="text-gray-600">Manage form submissions</p>
            </div>
            <div className="flex items-center space-x-4 flex-col">
              <span className="text-gray-700">
                {localStorage.getItem('ownerEmail')}
              </span>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition duration-200"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-lg">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Submissions</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.total}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-lg">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">New</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.new}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 bg-yellow-100 rounded-lg">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Contacted</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.contacted}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 bg-purple-100 rounded-lg">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.completed}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Submissions Table */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">Form Submissions</h2>
            <p className="text-sm text-gray-600 mt-1">
              Total {stats.total} submissions • {stats.new} new • {stats.contacted} contacted • {stats.completed} completed
            </p>
          </div>
          
          {submissions.length === 0 ? (
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No submissions yet</h3>
              <p className="text-gray-500">Form submissions will appear here once customers submit them.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Business Details
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Service & Plan
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contact Info
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Submitted
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {submissions.map((submission) => (
                    <tr key={submission._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {submission.businessName}
                        </div>
                        <div className="text-sm text-gray-500">
                          {submission.businessExistence === 'yes' ? 'Existing Business' : 'New Business'}
                        </div>
                        {submission.websiteUrl && (
                          <div className="text-sm text-blue-600">
                            <a href={submission.websiteUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                              Website
                            </a>
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {submission.serviceName}
                        </div>
                        <div className="text-sm text-gray-500">
                          {submission.planName}
                        </div>
                        <div className="text-sm font-semibold text-green-600">
                          {formatPrice(submission.planPrice)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {submission.phoneNumber}
                        </div>
                        <div className="text-sm text-gray-500 truncate max-w-xs">
                          {submission.address}
                        </div>
                        {submission.socialMediaLinks && (
                          <div className="text-sm text-blue-600 truncate max-w-xs">
                            Social Media: Yes
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <select
                          value={submission.status}
                          onChange={(e) => handleStatusChange(submission._id, e.target.value)}
                          className={`text-sm px-2 py-1 rounded border ${
                            submission.status === 'New' ? 'bg-blue-100 text-blue-800 border-blue-200' :
                            submission.status === 'Contacted' ? 'bg-yellow-100 text-yellow-800 border-yellow-200' :
                            'bg-green-100 text-green-800 border-green-200'
                          }`}
                        >
                          <option value="New">New</option>
                          <option value="Contacted">Contacted</option>
                          <option value="Completed">Completed</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(submission.submittedAt)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-3">
                          <button
                            onClick={() => handleViewDetails(submission)}
                            className="text-blue-600 hover:text-blue-900 transition duration-200"
                            title="View Full Details"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </button>
                          <button
                            onClick={() => handleEdit(submission)}
                            className="text-indigo-600 hover:text-indigo-900 transition duration-200"
                            title="Edit"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </button>
                          <button
                            onClick={() => handleDelete(submission._id)}
                            className="text-red-600 hover:text-red-900 transition duration-200"
                            title="Delete"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* View Details Modal */}
        {viewingSubmission && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Submission Details</h3>
                  <button
                    onClick={() => setViewingSubmission(null)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    &times;
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Business Information */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-800 border-b pb-2">Business Information</h4>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-600">Business Name</label>
                      <p className="text-lg font-semibold text-gray-900">{viewingSubmission.businessName}</p>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-600">Business Type</label>
                      <p className="text-gray-900">
                        {viewingSubmission.businessExistence === 'yes' ? 'Existing Business' : 'New Business'}
                      </p>
                    </div>
                    
                    {viewingSubmission.websiteUrl && (
                      <div>
                        <label className="block text-sm font-medium text-gray-600">Website</label>
                        <a 
                          href={viewingSubmission.websiteUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 break-all"
                        >
                          {viewingSubmission.websiteUrl}
                        </a>
                      </div>
                    )}
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-600">Social Media Presence</label>
                      <p className="text-gray-900">
                        {viewingSubmission.hasSocialMedia === 'yes' ? 'Yes' : 'No'}
                      </p>
                    </div>
                    
                    {viewingSubmission.socialMediaLinks && (
                      <div>
                        <label className="block text-sm font-medium text-gray-600">Social Media Links</label>
                        <p className="text-gray-900 whitespace-pre-wrap break-words">
                          {viewingSubmission.socialMediaLinks}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Contact & Service Information */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-800 border-b pb-2">Contact & Service</h4>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-600">Phone Number</label>
                      <p className="text-lg font-semibold text-gray-900">{viewingSubmission.phoneNumber}</p>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-600">Business Address</label>
                      <p className="text-gray-900 whitespace-pre-wrap">{viewingSubmission.address}</p>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-600">Service</label>
                      <p className="text-lg font-semibold text-gray-900">{viewingSubmission.serviceName}</p>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-600">Selected Plan</label>
                      <p className="text-gray-900">{viewingSubmission.planName}</p>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-600">Plan Price</label>
                      <p className="text-xl font-bold text-green-600">{formatPrice(viewingSubmission.planPrice)}</p>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-600">Submission Date</label>
                      <p className="text-gray-900">{formatDate(viewingSubmission.submittedAt)}</p>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-600">Current Status</label>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        viewingSubmission.status === 'New' ? 'bg-blue-100 text-blue-800' :
                        viewingSubmission.status === 'Contacted' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {viewingSubmission.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-3 mt-6 pt-6 border-t">
                  <button
                    onClick={() => {
                      setViewingSubmission(null);
                      handleEdit(viewingSubmission);
                    }}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md transition duration-200"
                  >
                    Edit Submission
                  </button>
                  <button
                    onClick={() => setViewingSubmission(null)}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-6 py-2 rounded-md transition duration-200"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Edit Modal */}
        {editingSubmission && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Edit Submission</h3>
                  <button
                    onClick={() => setEditingSubmission(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
                    <input
                      type="text"
                      name="businessName"
                      value={editFormData.businessName}
                      onChange={handleEditChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="text"
                      name="phoneNumber"
                      value={editFormData.phoneNumber}
                      onChange={handleEditChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                    <textarea
                      name="address"
                      value={editFormData.address}
                      onChange={handleEditChange}
                      rows="3"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div className="flex space-x-3 pt-4">
                    <button
                      onClick={() => handleUpdate(editingSubmission)}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition duration-200"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => setEditingSubmission(null)}
                      className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-md transition duration-200"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OwnerDashboard;