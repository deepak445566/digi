// src/components/FeatureList.jsx
export default function FeatureList({ features }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {features.map((feature, i) => (
        <div 
          key={i}
          className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white hover:from-blue-50 hover:to-white border border-gray-100 hover:border-blue-200 transition-all duration-300 group"
        >
          <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mt-0.5">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
            {feature}
          </span>
        </div>
      ))}
    </div>
  );
}