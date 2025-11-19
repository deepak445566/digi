// src/components/PlanCard.jsx
import { Link } from "react-router-dom";

export default function PlanCard({ serviceId, plan }) {
  const planURL = plan.planName.toLowerCase().replace(/\s+/g, "-");
  const isPopular = plan.planName === "Premium";

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className={`relative bg-white rounded-2xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
      isPopular 
        ? 'border-blue-500 shadow-lg' 
        : 'border-gray-200 shadow-sm hover:border-blue-300'
    }`}>
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-bold px-4 py-1 rounded-full shadow-lg">
            Most Popular
          </div>
        </div>
      )}

      <div className="p-6">
        {/* Plan Header */}
        <div className="text-center mb-6">
          <h3 className={`text-2xl font-bold ${
            isPopular ? 'text-blue-600' : 'text-gray-900'
          }`}>
            {plan.planName}
          </h3>
          <div className="mt-4">
            <span className="text-3xl font-bold text-gray-900">
              {formatPrice(plan.price)}
            </span>
          </div>
        </div>

        {/* Plan Features from dataset */}
        <div className="space-y-3 mb-6">
          {plan.planFeatures.map((feature, index) => (
            <div key={index} className="flex items-start gap-3 text-sm">
              <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 font-medium">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Link to={`/services/${serviceId}/plan/${planURL}`}>
          <button className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
            isPopular
              ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl'
              : 'bg-gray-900 hover:bg-gray-800 text-white shadow hover:shadow-lg'
          } hover:scale-105 active:scale-95`}>
            <span className="flex items-center justify-center gap-2">
              Choose {plan.planName}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        </Link>

        {/* Payment Info */}
        <div className="text-center mt-4">
          <p className="text-xs text-gray-500">
            Secure payment via Razorpay
          </p>
        </div>
      </div>
    </div>
  );
}