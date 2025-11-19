// src/pages/Detailed.jsx
import { useParams, Link } from "react-router-dom";
import { servicesData } from "../data/servicesdata.js";
import PlanCard from "../layout/PlanCard";
import FeatureList from "../layout/FeatureList";


export default function Detailed() {
  const { id } = useParams();

  // Find the service - could be main service or sub-service
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
            The service you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold"
          >
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
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Services
          </Link>
        </div>
      </div>
    );

  // Check if this is a main service (has subServices but no plans)
  const isMainService =
    service.isMainService && service.subServices && !service.plans;

  if (isMainService) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <span className="text-4xl font-bold text-white">ℹ️</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Service Category
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            This is a service category. Please select a specific service from
            the sub-services.
          </p>
          <Link
            to={`/services/${id}`}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold"
          >
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
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            View Sub Services
          </Link>
        </div>
      </div>
    );
  }

  // Check if service has plans
  if (!service.plans || service.plans.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <span className="text-4xl font-bold text-white">📝</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            No Plans Available
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            Plans for this service are not available yet. Please check back
            later.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold"
          >
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30">
      {/* Enhanced Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-pink-600/5">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="text-center">
            {/* Animated Icon */}
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl shadow-2xl mb-8 transform hover:scale-110 transition-transform duration-300">
              <span className="text-3xl font-bold text-white drop-shadow-lg">
                {service.heading.charAt(0)}
              </span>
            </div>

            {/* Service Title */}
            <div className="mb-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                {service.heading}
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
            </div>

            {/* Description */}
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              {service.description}
            </p>
          </div>
        </div>
      </div>

      {/* Horizontal Plans Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select the package that best fits your needs and budget
          </p>
        </div>

        {/* Horizontal Plans Container */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-center items-stretch">
          {service.plans.map((plan, index) => (
            <div
              key={plan.planName}
              className={`flex-1 min-w-[300px] max-w-[400px] lg:max-w-none transform transition-all duration-500 hover:scale-105 ${
                index === 1 ? "lg:-translate-y-4" : ""
              }`}
            >
              <PlanCard serviceId={id} plan={plan} />
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex justify-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/60 max-w-2xl">
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-green-600"
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
                <div>
                  <div className="font-semibold text-gray-900">
                    30-Day Guarantee
                  </div>
              
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-blue-600"
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
                <div>
                  <div className="font-semibold text-gray-900">
                    Secure Payment
                  </div>
                  <div className="text-sm text-gray-600">Razorpay</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-purple-600"
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
                <div>
                  <div className="font-semibold text-gray-900">
                    24/7 Support
                  </div>
                  <div className="text-sm text-gray-600">Always Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/60 p-8 lg:p-12">
          {/* Features Header */}
          <div className="flex items-center gap-4 mb-12">
            <div className="w-3 h-12 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full shadow-lg"></div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900">
                What's Included
              </h2>
              <p className="text-gray-600 mt-2">
                Everything you need to succeed with our service
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <FeatureList features={service.features} />

        
        </div>
      </div>
    </div>
  );
}
