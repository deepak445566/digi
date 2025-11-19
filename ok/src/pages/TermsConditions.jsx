// src/pages/TermsConditions.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function TermsConditions() {
  const [activeSection, setActiveSection] = useState('introduction');

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'user-responsibilities', title: 'User Responsibilities' },
    { id: 'services-usage', title: 'Services & Usage' },
    { id: 'payments-refunds', title: 'Payments & Refunds' },
    { id: 'dispute-resolution', title: 'Dispute Resolution' }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200/60 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              to="/"
              className="flex items-center gap-3 group"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-700 rounded-lg flex items-center justify-center">
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
              <h3 className="text-lg font-bold text-gray-900 mb-6">Contents</h3>
              <nav className="space-y-3">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                      activeSection === section.id
                        ? 'bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/60 text-blue-700 font-semibold shadow-sm'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50/80'
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>

              {/* Contact Info */}
              <div className="mt-8 p-4 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl border border-blue-200/40">
                <h4 className="font-semibold text-gray-900 mb-2">Need Help?</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Contact us for any questions about these terms.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
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
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl shadow-lg mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
                Terms & Conditions
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Last updated: {new Date().toLocaleDateString('en-IN', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>

            {/* Terms Content */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200/60 shadow-lg overflow-hidden">
              <div className="p-8 lg:p-12 space-y-12">
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Introduction
                  </h2>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      These Terms and Conditions, along with privacy policy or other terms ("Terms") constitute a binding agreement by and between Digital Express India, ("Website Owner" or "we" or "us" or "our") and you ("you" or "your") and relate to your use of our website, goods (as applicable) or services (as applicable) (collectively, "Services").
                    </p>
                    <p>
                      By using our website and availing the Services, you agree that you have read and accepted these Terms (including the Privacy Policy). We reserve the right to modify these Terms at any time and without assigning any reason. It is your responsibility to periodically review these Terms to stay informed of updates.
                    </p>
                  </div>
                </section>

                {/* User Responsibilities */}
                <section id="user-responsibilities" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    User Responsibilities
                  </h2>
                  <div className="space-y-6">
                    <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-200/40">
                      <h3 className="font-semibold text-gray-900 mb-3">Account Registration</h3>
                      <p className="text-gray-700">
                        To access and use the Services, you agree to provide true, accurate and complete information to us during and after registration, and you shall be responsible for all acts done through the use of your registered account.
                      </p>
                    </div>
                    
                    <div className="bg-orange-50/50 rounded-2xl p-6 border border-orange-200/40">
                      <h3 className="font-semibold text-gray-900 mb-3">Information Accuracy</h3>
                      <p className="text-gray-700">
                        Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials offered on this website or through the Services, for any specific purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Services & Usage */}
                <section id="services-usage" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    Services & Usage
                  </h2>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-2xl p-6 border border-gray-200/60 shadow-sm">
                        <h3 className="font-semibold text-gray-900 mb-3">Risk Acknowledgement</h3>
                        <p className="text-gray-700 text-sm">
                          Your use of our Services and the website is solely at your own risk and discretion. You are required to independently assess and ensure that the Services meet your requirements.
                        </p>
                      </div>
                      
                      <div className="bg-white rounded-2xl p-6 border border-gray-200/60 shadow-sm">
                        <h3 className="font-semibold text-gray-900 mb-3">Intellectual Property</h3>
                        <p className="text-gray-700 text-sm">
                          The contents of the Website and the Services are proprietary to Us and you will not have any authority to claim any intellectual property rights, title, or interest in its contents.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-red-50/50 rounded-2xl p-6 border border-red-200/40">
                      <h3 className="font-semibold text-gray-900 mb-3">Prohibited Use</h3>
                      <p className="text-gray-700 mb-4">
                        You agree not to use the website and/or Services for any purpose that is unlawful, illegal or forbidden by these Terms, or Indian or local laws that might apply to you.
                      </p>
                      <p className="text-gray-700">
                        You acknowledge that unauthorized use of the Website or the Services may lead to action against you as per these Terms or applicable laws.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50/50 rounded-2xl p-6 border border-gray-200/40">
                      <h3 className="font-semibold text-gray-900 mb-3">Third Party Links</h3>
                      <p className="text-gray-700">
                        You agree and acknowledge that website and the Services may contain links to other third party websites. On accessing these links, you will be governed by the terms of use, privacy policy and such other policies of such third party websites.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Payments & Refunds */}
                <section id="payments-refunds" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    Payments & Refunds
                  </h2>
                  <div className="space-y-6">
                    <div className="bg-green-50/50 rounded-2xl p-6 border border-green-200/40">
                      <h3 className="font-semibold text-gray-900 mb-3">Payment Obligation</h3>
                      <p className="text-gray-700">
                        You agree to pay us the charges associated with availing the Services. You understand that upon initiating a transaction for availing the Services you are entering into a legally binding and enforceable contract with the us for the Services.
                      </p>
                    </div>
                    
                    <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-200/40">
                      <h3 className="font-semibold text-gray-900 mb-3">Refund Policy</h3>
                      <p className="text-gray-700 mb-4">
                        You shall be entitled to claim a refund of the payment made by you in case we are not able to provide the Service. The timelines for such return and refund will be according to the specific Service you have availed or within the time period provided in our policies (as applicable).
                      </p>
                      <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                        <p className="text-amber-800 text-sm font-medium">
                          ⚠️ In case you do not raise a refund claim within the stipulated time, than this would make you ineligible for a refund.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Dispute Resolution */}
                <section id="dispute-resolution" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    Dispute Resolution
                  </h2>
                  <div className="space-y-6">
                    <div className="bg-gray-50/50 rounded-2xl p-6 border border-gray-200/40">
                      <h3 className="font-semibold text-gray-900 mb-3">Force Majeure</h3>
                      <p className="text-gray-700">
                        Notwithstanding anything contained in these Terms, the parties shall not be liable for any failure to perform an obligation under these Terms if performance is prevented or delayed by a force majeure event.
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-2xl p-6 border border-gray-200/60 shadow-sm">
                        <h3 className="font-semibold text-gray-900 mb-3">Governing Law</h3>
                        <p className="text-gray-700">
                          These Terms and any dispute or claim relating to it, or its enforceability, shall be governed by and construed in accordance with the laws of India.
                        </p>
                      </div>
                      
                      <div className="bg-white rounded-2xl p-6 border border-gray-200/60 shadow-sm">
                        <h3 className="font-semibold text-gray-900 mb-3">Jurisdiction</h3>
                        <p className="text-gray-700">
                          All disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in Ghaziabad, Uttar Pradesh.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200/40">
                      <h3 className="font-semibold text-gray-900 mb-3">Contact & Communications</h3>
                      <p className="text-gray-700">
                        All concerns or communications relating to these Terms must be communicated to us using the contact information provided on this website.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            {/* Acceptance Footer */}
            <div className="mt-8 text-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/60 shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Acceptance of Terms</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-700 text-white font-semibold px-8 py-3 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Contact Us
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