import React from "react";

const Mission_Vission = () => {
  const items = [
    {
      icon: "🎯",
      title: "Our Mission",
      description:
        "To empower businesses with innovative digital solutions that drive growth, enhance efficiency, and create lasting competitive advantages.",
    },
    {
      icon: "🔭",
      title: "Our Vision",
      description:
        "To be the most trusted digital transformation partner globally, recognized for our technical excellence, innovation, and client-centric approach.",
    },
    {
      icon: "🚀",
      title: "Our Goals",
      description:
        "To continually adopt next-gen technologies, deliver world-class solutions, and build long-term relationships that redefine digital success.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF2D8] via-[#A7C5FF] to-[#7CA6FF] relative overflow-hidden py-20 px-6">

      {/* Floating Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-indigo-400/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-cyan-400/20 rounded-full blur-2xl animate-float-slow"></div>

      {/* Banner Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1350&q=80')",
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-black text-gray-900 drop-shadow-lg">
          Mission, Vision & Goals
        </h1>
        <p className="text-xl text-gray-700 mt-4 font-medium max-w-3xl mx-auto">
          Empowering brands with technology, creativity, and innovation.
        </p>
      </div>

      {/* Grid Section */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white/40 backdrop-blur-xl rounded-3xl p-10 border border-white/60 shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-6">{item.icon}</div>
            <h3 className="text-3xl font-black text-gray-900 mb-4">
              {item.title}
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Floating Animations */}
      <style jsx>{`
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 10s ease-in-out infinite 2s;
        }
        .animate-float-slow {
          animation: float 12s ease-in-out infinite 4s;
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.08);
          }
        }
      `}</style>
    </div>
  );
};

export default Mission_Vission;