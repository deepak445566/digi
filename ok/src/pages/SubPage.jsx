// src/pages/SubServicesPage.jsx
import { useParams, Link } from "react-router-dom";
import { servicesData } from "../data/servicesdata";

export default function SubServicesPage() {
  const { id } = useParams();

  // Find the main service
  const mainService = servicesData.find(
    (service) => service.id === id && service.isMainService
  );

  if (!mainService) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 flex items-center justify-center px-4">
        <div className="text-center max-w-md mx-auto">
          {/* Animated 404 Illustration */}
          <div className="relative mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-red-500/25 animate-pulse">
              <span className="text-6xl font-bold text-white">!</span>
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-400 rounded-full animate-bounce delay-300"></div>
          </div>
          
          <h1 className="text-5xl font-bold bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
            Service Not Found
          </h1>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            The service category you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white font-semibold px-8 py-4 rounded-2xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 transform active:scale-95"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  // Get sub-services data based on IDs
  const subServicesData = servicesData.filter((service) =>
    mainService.subServices.includes(service.id)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50/30 py-16">
      {/* Enhanced Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center relative">
          {/* Background Decoration */}
          <div className="absolute inset-0 -top-20 -z-10 opacity-10">
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
            <div className="absolute top-0 right-1/4 w-32 h-32 bg-purple-400 rounded-full blur-3xl"></div>
          </div>
          
          {/* Main Icon */}
          <div className="relative inline-flex mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/25 transform group hover:scale-105 transition-all duration-500">
              <span className="text-3xl font-bold text-white">
                {mainService.icon}
              </span>
            </div>
            {/* Floating Badge */}
            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
              {subServicesData.length} Services
            </div>
          </div>

          {/* Title & Description */}
          <div className="space-y-6 max-w-4xl mx-auto">
            <h1 className="text-6xl font-bold bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight">
              {mainService.heading}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {mainService.description}
            </p>
            
            {/* Stats Bar */}
            <div className="flex justify-center items-center gap-8 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{subServicesData.length}</div>
                <div className="text-sm text-gray-500">Services</div>
              </div>
              <div className="w-1 h-8 bg-gray-300/50 rounded-full"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">
                  {Math.min(...subServicesData.flatMap(service => service.plans.map(plan => plan.price)))}
                </div>
                <div className="text-sm text-gray-500">Starting Price</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Sub Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {subServicesData.map((subService, index) => {
            const startingPrice = Math.min(
              ...subService.plans.map((plan) => plan.price)
            );

            const formatPrice = (price) => {
              return new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
                maximumFractionDigits: 0,
              }).format(price);
            };

            return (
              <div
                key={subService.id}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200/60 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-3"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                
                {/* Content Container */}
                <div className="relative p-8">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">
                        {subService.heading}
                      </h3>
                      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-blue-500/25">
                        {subService.plans.length} Plans
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-base line-clamp-2">
                      {subService.description}
                    </p>
                  </div>

                  {/* Features Preview */}
                  <div className="mb-6 space-y-3">
                    {subService.features.slice(0, 3).map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center text-sm text-gray-700 group/feature"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3 flex-shrink-0 group-hover/feature:scale-125 transition-transform duration-300"></div>
                        <span className="group-hover/feature:text-gray-900 transition-colors duration-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                    {subService.features.length > 3 && (
                      <div className="text-xs text-gray-500 font-medium pl-5">
                        +{subService.features.length - 3} more features
                      </div>
                    )}
                  </div>

                  {/* Pricing & CTA Section */}
                  <div className="space-y-4">
                    {/* Pricing Badge */}
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100/60">
                      <div>
                        <div className="text-gray-500 text-sm font-medium">Starting from</div>
                        <div className="text-2xl font-bold bg-gradient-to-br from-blue-600 to-purple-700 bg-clip-text text-transparent">
                          {formatPrice(startingPrice)}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="inline-flex items-center gap-1 bg-white/80 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full border border-gray-200/60">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                          Best Value
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <Link to={`/services/${subService.id}/detailed`}>
                      <button className="w-full group/btn relative bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-[1.02] active:scale-95 overflow-hidden">
                        {/* Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                        
                        <span className="flex items-center justify-center gap-3 relative z-10">
                          View Details
                          <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Enhanced Border Effects */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/80 transition-all duration-500 pointer-events-none"></div>
                <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-blue-300/30 transition-all duration-700 pointer-events-none"></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Enhanced Back Button */}
      <div className="text-center mt-16">
        <Link
          to="/services"
          className="inline-flex items-center gap-3 group bg-white/80 backdrop-blur-sm text-gray-600 hover:text-gray-900 font-semibold px-8 py-4 rounded-2xl border border-gray-200/60 hover:border-gray-300/80 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform"
        >
          <svg
            className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300"
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
          Back to All Services
        </Link>
      </div>
    </div>
  );
}