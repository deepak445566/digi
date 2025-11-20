// src/pages/PlanPage.jsx
import { useParams } from "react-router-dom";
import { servicesData } from "../data/servicesdata";
import { useState } from "react";
import axios from "axios";

export default function PlanPage() {
  const { id, planName } = useParams();
  const [formData, setFormData] = useState({
    businessName: "",
    phoneNumber: "",
    address: "",
    businessExistence: "",
    websiteUrl: "",
    hasSocialMedia: "",
    socialMediaLinks: ""
  });
  
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Direct API URL define karein
  const API_URL = "https://digi-ijuk.onrender.com";

  // Find service
  const service = servicesData.find((s) => s.id === id);

  if (!service)
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <span className="text-4xl font-bold text-white">!</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Service Not Found
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            The service you're looking for doesn't exist.
          </p>
          <a
            href="/services"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold"
          >
            Back to Services
          </a>
        </div>
      </div>
    );

  // Find plan
  const plan = service.plans.find(
    (p) => p.planName.toLowerCase().replace(/\s+/g, "-") === planName
  );

  if (!plan)
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <span className="text-4xl font-bold text-white">?</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Plan Not Found
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            The selected plan is not available.
          </p>
          <a
            href={`/services/${id}`}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold"
          >
            Back to Service
          </a>
        </div>
      </div>
    );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      // Reset websiteUrl if business existence is "no"
      ...(name === 'businessExistence' && value === 'no' && { websiteUrl: '' }),
      // Reset socialMediaLinks if hasSocialMedia is "no"
      ...(name === 'hasSocialMedia' && value === 'no' && { socialMediaLinks: '' })
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const submissionData = {
        ...formData,
        serviceId: id,
        serviceName: service.heading,
        planName: plan.planName,
        planPrice: plan.price,
        submittedAt: new Date().toISOString()
      };

      // Send data to backend using hardcoded API_URL
      const response = await axios.post(
        `${API_URL}/api/submissions`,
        submissionData,
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );

      if (response.data.success) {
        setMessage("Form submitted successfully! We'll contact you soon.");
        // Reset form
        setFormData({
          businessName: "",
          phoneNumber: "",
          address: "",
          businessExistence: "",
          websiteUrl: "",
          hasSocialMedia: "",
          socialMediaLinks: ""
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("Error submitting form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Ready to Get Started
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            {plan.planName} Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            You're about to get started with our{" "}
            <span className="font-semibold text-blue-600">
              {service.heading}
            </span>{" "}
            service
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Order Summary Card */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Order Summary
            </h2>

            {/* Service Info */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-6 border border-blue-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-xl font-bold text-white">
                    {service.heading.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {service.heading}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            </div>

            {/* Plan Details */}
            <div className="space-y-6">
              <div className="flex justify-between items-center py-4 border-b border-gray-200">
                <span className="text-lg font-semibold text-gray-700">
                  Selected Plan:
                </span>
                <span className="text-xl font-bold text-blue-600">
                  {plan.planName}
                </span>
              </div>

              <div className="flex justify-between items-center py-4 border-b border-gray-200">
                <span className="text-lg font-semibold text-gray-700">
                  Price:
                </span>
                <span className="text-3xl font-bold text-gray-900">
                  {formatPrice(plan.price)}
                </span>
              </div>

              {/* Plan Features */}
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  What's Included:
                </h4>
                <div className="space-y-3">
                  {plan.planFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-green-500 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call Button */}
              <div className="mt-8">
                <a href="tel:9667277348">
                  <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95">
                    <span className="flex items-center justify-center gap-3">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      Call Now 
                    </span>
                  </button>
                </a>
                <p className="text-center text-sm text-gray-500 mt-3">
                  Tap to call our support team
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Business Details
            </h2>
            <p className="text-gray-600 mb-8">
              Tell us about your business
            </p>

            {message && (
              <div className={`mb-6 p-4 rounded-xl ${
                message.includes("Error") 
                  ? "bg-red-100 text-red-700 border border-red-200" 
                  : "bg-green-100 text-green-700 border border-green-200"
              }`}>
                {message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Business Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Business Name *
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your business name"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="+91 12345 67890"
                />
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Business Address *
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Enter your complete business address"
                />
              </div>

              {/* Business Existence */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Does your business already exist? *
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="businessExistence"
                      value="yes"
                      checked={formData.businessExistence === "yes"}
                      onChange={handleInputChange}
                      required
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-gray-700">Yes</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="businessExistence"
                      value="no"
                      checked={formData.businessExistence === "no"}
                      onChange={handleInputChange}
                      required
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-gray-700">No</span>
                  </label>
                </div>
              </div>

              {/* Website URL (Conditional) */}
              {formData.businessExistence === "yes" && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Website URL (if any)
                  </label>
                  <input
                    type="url"
                    name="websiteUrl"
                    value={formData.websiteUrl}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="https://yourbusiness.com"
                  />
                </div>
              )}

              {/* Social Media Presence */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Do you have social media profiles? *
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="hasSocialMedia"
                      value="yes"
                      checked={formData.hasSocialMedia === "yes"}
                      onChange={handleInputChange}
                      required
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-gray-700">Yes</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="hasSocialMedia"
                      value="no"
                      checked={formData.hasSocialMedia === "no"}
                      onChange={handleInputChange}
                      required
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-gray-700">No</span>
                  </label>
                </div>
              </div>

              {/* Social Media Links (Conditional) */}
              {formData.hasSocialMedia === "yes" && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Social Media Links
                  </label>
                  <textarea
                    name="socialMediaLinks"
                    value={formData.socialMediaLinks}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Please provide links to your Facebook, Instagram, LinkedIn, etc."
                  />
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-3">
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-3">
                    Submit Business Details
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </span>
                )}
              </button>
            </form>

            {/* Trust Badges */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap justify-center gap-6 text-center">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>Secure Form</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>Privacy Protected</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                      />
                    </svg>
                  </div>
                  <span>Quick Response</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}