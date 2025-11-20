import React from 'react';

const TrustedBy = () => {
  const clients = [
  { name: "Shiv Gauri", category: "Manufacturing" },
  { name: "Venus Geyser Service", category: "Residential" },
  { name: "Power Cruises", category: "Travel" },
  { name: "Mahesh Painter", category: "Painting" },
  { name: "Advocate Harsh Pandit", category: "Marriage" },
  { name: "Vivek Mehndi Artist", category: "Wedding" },
  { name: "Pranjal Nasha Mukti Kendra", category: "Social Work" },
  { name: "The Marriage Registration", category: "Marriage" },
  { name: "Sonu Balloon Decoration", category: "Party Decoration" },
];


  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#FFF2D8] via-[#A7C5FF] to-[#7CA6FF]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Trusted by <span className="text-indigo-700">3000+</span> High-Growth
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-gray-800">
            MSMEs / Clients
          </p>
        </div>

        {/* Clients Grid */}
<div>

  {/* Mobile View (3 boxes in one row, compact text) */}
  <div className="grid grid-cols-2 gap-3 md:hidden">
  {clients.map((client, index) => (
    <div
      key={index}
      className="bg-white/50 backdrop-blur-md rounded-lg p-3 shadow-lg border border-white/40"
    >
      <h3 className="text-xs font-bold text-gray-900 leading-tight line-clamp-2">
        {client.name}
      </h3>

      <div className="flex items-center justify-between mt-2">
        <span className="text-[9px] font-semibold text-indigo-600 bg-indigo-100 px-2 py-1 rounded">
          {client.category}
        </span>

        <div className="flex items-center space-x-1">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-[8px] text-gray-700 font-medium">Verified</span>
        </div>
      </div>
    </div>
  ))}
</div>
  {/* Desktop & Tablet View (Normal layout) */}
  <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {clients.map((client, index) => (
      <div
        key={index}
        className="bg-white/50 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/40 hover:scale-105 transition-all duration-300 group"
      >
        <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-indigo-700">
          {client.name}
        </h3>

        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full">
            {client.category}
          </span>

          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-600 font-medium">Verified</span>
          </div>
        </div>

        <div className="w-0 h-1 bg-indigo-600 mt-4 group-hover:w-full transition-all duration-500 rounded-full"></div>
      </div>
    ))}
  </div>

</div>




        {/* Stats Footer */}
        {/* <div className="text-center mt-16">
          <div className="bg-white/40 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/40 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '3000+', label: 'Active Clients' },
                { number: '50+', label: 'Industries' },
                { number: '98%', label: 'Retention Rate' },
                { number: '4.9/5', label: 'Client Rating' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-black text-indigo-700 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-800 font-semibold text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* Floating Elements */}
        <div className="absolute left-10 w-20 h-20 bg-white/30 rounded-full blur-xl animate-float"></div>
        <div className="absolute right-20 w-16 h-16 bg-indigo-400/30 rounded-full blur-lg animate-float-delayed"></div>
        
        {/* Floating Dots */}
        <div className="pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-indigo-500/40 rounded-full blur-sm animate-dot-1"></div>
          <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-purple-500/40 rounded-full blur-sm animate-dot-2"></div>
          <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-blue-500/40 rounded-full blur-md animate-dot-3"></div>
        </div>
      </div>

      <style jsx>{`
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 7s ease-in-out infinite 1s;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @keyframes dotFloat1 {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-15px) translateX(10px); }
          100% { transform: translateY(0) translateX(0); }
        }

        @keyframes dotFloat2 {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(12px) translateX(-8px); }
          100% { transform: translateY(0) translateX(0); }
        }

        @keyframes dotFloat3 {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-18px) translateX(5px); }
          100% { transform: translateY(0) translateX(0); }
        }

        .animate-dot-1 { animation: dotFloat1 5s ease-in-out infinite; }
        .animate-dot-2 { animation: dotFloat2 6s ease-in-out infinite; }
        .animate-dot-3 { animation: dotFloat3 7s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default TrustedBy;