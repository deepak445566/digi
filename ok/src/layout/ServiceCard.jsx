// src/components/ServiceCard.jsx
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ServiceCard({ service }) {
  const [isHovered, setIsHovered] = useState(false);

  // Get starting price from plans
  const startingPrice = Math.min(...service.plans.map(plan => plan.price));
  
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div 
      className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl border border-gray-200/60 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
      
      {/* Header Section */}
      <div className="relative p-8 pb-6">
        <div className="flex items-start justify-between mb-6">
          <div className="relative">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-xl">
                {service.heading.charAt(0)}
              </span>
            </div>
            {/* Floating decoration */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
          </div>
          
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-semibold px-3 py-2 rounded-full shadow-lg shadow-green-500/25">
            {service.plans.length} Plans
          </div>
        </div>
        
        {/* Title & Description */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">
            {service.heading}
          </h3>
          <p className="text-gray-600 leading-relaxed text-base line-clamp-3">
            {service.description}
          </p>
        </div>
      </div>

      {/* Features List */}
      <div className="relative px-8 pb-6">
        <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-100/80 shadow-sm">
          <ul className="space-y-3">
            {service.features.slice(0, 4).map((feature, index) => (
              <li key={index} className="flex items-center text-gray-700 text-sm group/feature">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3 flex-shrink-0 group-hover/feature:scale-125 transition-transform duration-300"></div>
                <span className="group-hover/feature:text-gray-900 transition-colors duration-300">{feature}</span>
              </li>
            ))}
            {service.features.length > 4 && (
              <li className="text-xs text-gray-500 font-medium pl-5">
                +{service.features.length - 4} more features
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* Pricing & CTA Section */}
      <div className="relative p-8 pt-4">
        {/* Pricing Badge */}
        <div className="flex items-center justify-between mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100/60">
          <div>
            <div className="text-gray-500 text-sm font-medium mb-1">
              Starting from
            </div>
            <div className="text-3xl font-bold bg-gradient-to-br from-blue-600 to-purple-700 bg-clip-text text-transparent">
              {formatPrice(startingPrice)}
            </div>
          </div>
          
          <div className="text-right">
            <div className="inline-flex items-center gap-1 bg-white/80 text-gray-700 text-sm font-semibold px-3 py-2 rounded-full border border-gray-200/60 shadow-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              {service.plans.length} Options
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="space-y-4">
          <Link to={`/services/${service.id}`}>
            <button className="w-full group/btn relative bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-[1.02] active:scale-95 overflow-hidden">
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
              
              <span className="flex items-center justify-center gap-3 relative z-10">
                View Services
                <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </Link>
          
          {/* Price Range Preview */}
          <div className="flex items-center justify-between text-xs">
            {service.plans.slice(0, 3).map((plan, index) => (
              <div key={index} className="text-center flex-1">
                <div className="text-gray-500 font-medium mb-1">
                  {plan.name}
                </div>
                <div className="text-gray-900 font-semibold">
                  {formatPrice(plan.price)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Border Effects */}
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/80 transition-all duration-500 pointer-events-none"></div>
      <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-blue-300/30 transition-all duration-700 pointer-events-none"></div>
    </div>
  );
}