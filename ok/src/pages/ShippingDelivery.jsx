// src/pages/ShippingDelivery.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ShippingDelivery() {
  const [activeSection, setActiveSection] = useState('shipping-info');

  const shippingOptions = [
    {
      name: "Standard Shipping",
      duration: "5-7 business days",
      price: "₹49",
      freeAbove: "Free above ₹499",
      features: ["Trackable", "Safe packaging", "Email updates"],
      icon: "🚚"
    },
    {
      name: "Express Shipping",
      duration: "2-3 business days",
      price: "₹149",
      freeAbove: "Free above ₹999",
      features: ["Priority handling", "Real-time tracking", "Signature confirmation"],
      icon: "⚡"
    },
    {
      name: "Next Day Delivery",
      duration: "1 business day",
      price: "₹299",
      freeAbove: "Free above ₹1999",
      features: ["Guanteed delivery", "Dedicated support", "Early morning delivery"],
      icon: "🏃"
    }
  ];

  const deliveryAreas = [
    {
      zone: "Metro Cities",
      cities: ["Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata", "Hyderabad"],
      delivery: "1-2 days",
      color: "green"
    },
    {
      zone: "Tier 2 Cities",
      cities: ["Pune", "Ahmedabad", "Jaipur", "Lucknow", "Chandigarh", "Kochi"],
      delivery: "2-4 days",
      color: "blue"
    },
    {
      zone: "Tier 3 Cities & Towns",
      cities: ["All other cities and towns"],
      delivery: "4-7 days",
      color: "orange"
    },
    {
      zone: "Remote Areas",
      cities: ["North East regions", "Himalayan regions", "Islands"],
      delivery: "7-10 days",
      color: "purple"
    }
  ];

  const sections = [
    { id: 'shipping-info', title: 'Shipping Information', icon: '📦' },
    { id: 'delivery-areas', title: 'Delivery Areas', icon: '🗺️' },
    { id: 'tracking', title: 'Order Tracking', icon: '📍' },
    { id: 'international', title: 'International Shipping', icon: '✈️' },
    { id: 'faq', title: 'FAQ', icon: '❓' }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50/30 to-blue-50/30">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200/60 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              to="/"
              className="flex items-center gap-3 group"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-teal-600 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DE</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Digital Express India
              </span>
            </Link>
            
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300 font-medium"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="sticky top-32 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/60 shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Quick Navigation</h3>
              <nav className="space-y-3">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 ${
                      activeSection === section.id
                        ? 'bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200/60 text-teal-700 font-semibold shadow-sm'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50/80'
                    }`}
                  >
                    <span className="text-lg">{section.icon}</span>
                    <span className="text-sm">{section.title}</span>
                  </button>
                ))}
              </nav>

              {/* Support Info */}
              <div className="mt-8 p-4 bg-gradient-to-br from-teal-500/5 to-blue-500/5 rounded-xl border border-teal-200/40">
                <h4 className="font-semibold text-gray-900 mb-2">Need Help?</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Track your order or contact delivery support.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium text-sm transition-colors"
                >
                  Contact Support
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Header Section */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-teal-600 to-blue-700 rounded-2xl shadow-lg mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22l9-12-9-12-9 12 9 12z" />
                </svg>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
                Shipping & Delivery
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Fast, reliable delivery services across India with real-time tracking
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-200/60 shadow-lg">
                <div className="text-2xl font-bold text-teal-600 mb-2">24-48 Hrs</div>
                <div className="text-sm text-gray-600">Metro Cities Delivery</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-200/60 shadow-lg">
                <div className="text-2xl font-bold text-blue-600 mb-2">5000+</div>
                <div className="text-sm text-gray-600">Cities Covered</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-200/60 shadow-lg">
                <div className="text-2xl font-bold text-green-600 mb-2">₹49</div>
                <div className="text-sm text-gray-600">Standard Shipping</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-200/60 shadow-lg">
                <div className="text-2xl font-bold text-purple-600 mb-2">Real-time</div>
                <div className="text-sm text-gray-600">Order Tracking</div>
              </div>
            </div>

            {/* Shipping Information */}
            <section id="shipping-info" className="scroll-mt-24 mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-teal-100 rounded-2xl flex items-center justify-center">
                  <span className="text-2xl">📦</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Shipping Options</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {shippingOptions.map((option, index) => (
                  <div key={index} className="group relative bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/60 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-3xl">{option.icon}</div>
                        <div className="bg-teal-100 text-teal-800 text-xs font-bold px-3 py-1 rounded-full">
                          {option.duration}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{option.name}</h3>
                      <div className="text-2xl font-bold text-gray-900 mb-2">{option.price}</div>
                      <div className="text-green-600 text-sm font-semibold mb-4">{option.freeAbove}</div>
                      
                      <ul className="space-y-2">
                        {option.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <svg className="w-4 h-4 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Delivery Areas */}
            <section id="delivery-areas" className="scroll-mt-24 mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <span className="text-2xl">🗺️</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Delivery Areas & Timelines</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {deliveryAreas.map((area, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/60 shadow-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{area.zone}</h3>
                      <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        area.color === 'green' ? 'bg-green-100 text-green-800' :
                        area.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                        area.color === 'orange' ? 'bg-orange-100 text-orange-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {area.delivery}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {area.cities.map((city, idx) => (
                        <div key={idx} className="flex items-center text-gray-600">
                          <div className={`w-2 h-2 rounded-full mr-3 ${
                            area.color === 'green' ? 'bg-green-500' :
                            area.color === 'blue' ? 'bg-blue-500' :
                            area.color === 'orange' ? 'bg-orange-500' :
                            'bg-purple-500'
                          }`}></div>
                          {city}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Order Tracking */}
            <section id="tracking" className="scroll-mt-24 mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
                  <span className="text-2xl">📍</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Track Your Order</h2>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/60 shadow-lg p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">How to Track</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-xs font-bold">1</span>
                        </div>
                        <p className="text-gray-700">Check your email for order confirmation with tracking number</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-xs font-bold">2</span>
                        </div>
                        <p className="text-gray-700">Use the tracking number on our website or mobile app</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-xs font-bold">3</span>
                        </div>
                        <p className="text-gray-700">Get real-time updates on your delivery status</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-6 border border-teal-200/60">
                    <h3 className="font-semibold text-gray-900 mb-4">Track Your Package</h3>
                    <div className="space-y-4">
                      <input
                        type="text"
                        placeholder="Enter tracking number"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                      />
                      <button className="w-full bg-gradient-to-r from-teal-600 to-blue-700 text-white font-semibold py-3 px-6 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105">
                        Track Package
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* International Shipping */}
            <section id="international" className="scroll-mt-24 mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center">
                  <span className="text-2xl">✈️</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">International Shipping</h2>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/60 shadow-lg p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Global Delivery</h3>
                    <p className="text-gray-700 mb-4">
                      We ship to over 50 countries worldwide with reliable international shipping partners.
                    </p>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-600">Delivery Time</span>
                        <span className="font-semibold text-gray-900">7-15 business days</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-600">Shipping Cost</span>
                        <span className="font-semibold text-gray-900">Starts from ₹999</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-600">Customs & Duties</span>
                        <span className="font-semibold text-gray-900">Customer responsibility</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-200/60">
                    <h3 className="font-semibold text-gray-900 mb-4">Popular Destinations</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {['USA', 'UK', 'Canada', 'Australia', 'UAE', 'Singapore'].map((country) => (
                        <div key={country} className="flex items-center gap-2 text-gray-700">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          {country}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="scroll-mt-24">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center">
                  <span className="text-2xl">❓</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
              </div>

              <div className="space-y-4">
                {[
                  {
                    question: "How long does shipping take?",
                    answer: "Standard shipping takes 5-7 business days, express takes 2-3 days, and next-day delivery is available for most metro cities."
                  },
                  {
                    question: "Do you offer free shipping?",
                    answer: "Yes! Free standard shipping on orders above ₹499 and free express shipping on orders above ₹999."
                  },
                  {
                    question: "Can I change my delivery address?",
                    answer: "Address changes are possible before the order is shipped. Contact our customer service immediately for assistance."
                  },
                  {
                    question: "What if I'm not available during delivery?",
                    answer: "Our delivery partner will attempt delivery 3 times. After that, the package will be returned to our warehouse."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/60 shadow-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}