// src/components/ServicesList.jsx
import { servicesData } from "../data/servicesdata";
import { Link } from "react-router-dom";

export default function ServicesList() {
  // Get only main services (parent services)
  const mainServices = servicesData.filter((service) => service.isMainService);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-12 px-4">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Our{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Services
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Choose from our comprehensive range of services designed to grow your
          business
        </p>
      </div>

      {/* Main Services Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainServices.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Header Section with Icon */}
              <div className="relative p-8 pb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">
                      {service.icon}
                    </span>
                  </div>
                  <div className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {service.subServices?.length || 0} Services
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.heading}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  {service.description}
                </p>
              </div>

              {/* Features List */}
              <div className="relative px-8 pb-6">
                <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-1">
                  <ul className="space-y-3">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-700 text-sm"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="relative p-8 pt-4">
                <Link to={`/services/${service.id}`}>
                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 text-center group/btn">
                    <span className="flex items-center justify-center gap-2">
                      View Services
                      <svg
                        className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </button>
                </Link>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 rounded-2xl transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
}
