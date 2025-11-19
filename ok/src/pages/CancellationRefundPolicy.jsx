// src/pages/CancellationRefundPolicy.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CancellationRefundPolicy() {
  const [activeSection, setActiveSection] = useState('cancellation');

  const sections = [
    { id: 'cancellation', title: 'Cancellation Policy', icon: '🚫' },
    { id: 'refund-process', title: 'Refund Process', icon: '💰' },
    { id: 'damaged-items', title: 'Damaged Items', icon: '📦' },
    { id: 'warranty', title: 'Warranty Claims', icon: '🛡️' },
    { id: 'timelines', title: 'Important Timelines', icon: '⏰' }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50/30 to-red-50/30">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200/60 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              to="/"
              className="flex items-center gap-3 group"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-orange-600 to-red-700 rounded-lg flex items-center justify-center">
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
                        ? 'bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200/60 text-orange-700 font-semibold shadow-sm'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50/80'
                    }`}
                  >
                    <span className="text-lg">{section.icon}</span>
                    <span className="text-sm">{section.title}</span>
                  </button>
                ))}
              </nav>

              {/* Support Info */}
              <div className="mt-8 p-4 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-xl border border-orange-200/40">
                <h4 className="font-semibold text-gray-900 mb-2">Need Help?</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Contact our support team for cancellation or refund requests.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium text-sm transition-colors"
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
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-600 to-red-700 rounded-2xl shadow-lg mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
                </svg>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
                Cancellation & Refund Policy
              </h1>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-orange-200/60 shadow-lg p-6 inline-block">
                <p className="text-lg text-gray-600">
                  Last updated: <span className="font-semibold text-gray-900">16-04-2025 15:34:36</span>
                </p>
              </div>
            </div>

            {/* Policy Content */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200/60 shadow-lg overflow-hidden">
              <div className="p-8 lg:p-12 space-y-12">
                {/* Introduction */}
                <div className="text-center mb-8">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200/60">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Liberal Cancellation Policy</h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Digital Express India believes in helping its customers as far as possible, and has therefore a liberal cancellation policy.
                    </p>
                  </div>
                </div>

                {/* Cancellation Policy */}
                <section id="cancellation" className="scroll-mt-24">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center">
                      <span className="text-2xl">🚫</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Cancellation Policy</h2>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-2xl p-6 border border-green-200/60 shadow-sm">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <h3 className="font-semibold text-gray-900">When Cancellation is Possible</h3>
                        </div>
                        <p className="text-gray-700 text-sm">
                          Cancellations will be considered only if the request is made immediately after placing the order.
                        </p>
                      </div>
                      
                      <div className="bg-white rounded-2xl p-6 border border-red-200/60 shadow-sm">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                            <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                          <h3 className="font-semibold text-gray-900">When Cancellation May Not Be Possible</h3>
                        </div>
                        <p className="text-gray-700 text-sm">
                          Cancellation request may not be entertained if orders have been communicated to vendors/merchants and they have initiated shipping.
                        </p>
                      </div>
                    </div>

                    {/* Perishable Items */}
                    <div className="bg-amber-50/50 rounded-2xl p-6 border border-amber-200/60">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                          <span className="text-lg">🥗</span>
                        </div>
                        <h3 className="font-semibold text-gray-900">Perishable Items Policy</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Digital Express India does not accept cancellation requests for perishable items like flowers, eatables etc.
                      </p>
                      <div className="bg-white rounded-xl p-4 border border-amber-200">
                        <p className="text-amber-800 text-sm font-medium">
                          ✅ However, refund/replacement can be made if the customer establishes that the quality of product delivered is not good.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Damaged Items */}
                <section id="damaged-items" className="scroll-mt-24">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                      <span className="text-2xl">📦</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Damaged or Defective Items</h2>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-200/60">
                      <h3 className="font-semibold text-gray-900 mb-4">Reporting Procedure</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-white text-xs font-bold">1</span>
                          </div>
                          <p className="text-gray-700">
                            In case of receipt of damaged or defective items please report the same to our Customer Service team.
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-white text-xs font-bold">2</span>
                          </div>
                          <p className="text-gray-700">
                            The request will be entertained once the merchant has checked and determined the same at his own end.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-2xl p-6 border border-orange-200/60 shadow-sm">
                        <h3 className="font-semibold text-gray-900 mb-3">Damaged Items</h3>
                        <p className="text-gray-700 text-sm mb-3">
                          Should be reported within <span className="font-bold text-orange-600">same day</span> of receipt of the products.
                        </p>
                        <div className="bg-orange-50 rounded-lg p-3">
                          <p className="text-orange-800 text-xs font-medium">
                            ⚠️ Report immediately upon delivery
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-2xl p-6 border border-purple-200/60 shadow-sm">
                        <h3 className="font-semibold text-gray-900 mb-3">Product Not as Expected</h3>
                        <p className="text-gray-700 text-sm mb-3">
                          Report within <span className="font-bold text-purple-600">same day</span> of receiving the product.
                        </p>
                        <div className="bg-purple-50 rounded-lg p-3">
                          <p className="text-purple-800 text-xs font-medium">
                            📞 Customer Service will review your complaint
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Warranty Claims */}
                <section id="warranty" className="scroll-mt-24">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
                      <span className="text-2xl">🛡️</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Warranty Claims</h2>
                  </div>
                  
                  <div className="bg-green-50/50 rounded-2xl p-6 border border-green-200/60">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-900">Manufacturer Warranty</h3>
                    </div>
                    <p className="text-gray-700">
                      In case of complaints regarding products that come with a warranty from manufacturers, please refer the issue to them directly.
                    </p>
                  </div>
                </section>

                {/* Refund Process */}
                <section id="refund-process" className="scroll-mt-24">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center">
                      <span className="text-2xl">💰</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Refund Process</h2>
                  </div>
                  
                  <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-8 border border-emerald-200/60">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Refund Processing Time</h3>
                      <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-sm border border-emerald-200">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-lg font-bold text-gray-900">16-30 Days</span>
                      </div>
                    </div>
                    <p className="text-gray-700 text-center">
                      In case of any Refunds approved by Digital Express India, it'll take 16-30 days for the refund to be processed to the end customer.
                    </p>
                  </div>
                </section>

                {/* Important Timelines */}
                <section id="timelines" className="scroll-mt-24">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
                      <span className="text-2xl">⏰</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Important Timelines</h2>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center bg-white rounded-2xl p-6 border border-blue-200/60 shadow-sm">
                      <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-xl">⚡</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Cancellation</h3>
                      <p className="text-sm text-gray-600">Immediately after order</p>
                    </div>
                    
                    <div className="text-center bg-white rounded-2xl p-6 border border-orange-200/60 shadow-sm">
                      <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-xl">📞</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Damage Report</h3>
                      <p className="text-sm text-gray-600">Same day of delivery</p>
                    </div>
                    
                    <div className="text-center bg-white rounded-2xl p-6 border border-green-200/60 shadow-sm">
                      <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-xl">💸</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Refund Processing</h3>
                      <p className="text-sm text-gray-600">16-30 days</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            {/* Support Footer */}
            <div className="mt-8 text-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/60 shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Need Immediate Assistance?</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Our customer service team is here to help you with cancellation requests, refund status, or any other concerns.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-red-700 text-white font-semibold px-8 py-3 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Contact Support
                  </Link>
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors duration-300"
                  >
                    Return to Homepage
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}