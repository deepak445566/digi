import React from 'react';

const WhyDigitalExpress = () => {
  const reasons = [
    {
      icon: "🚀",
      title: "Cutting-Edge Technology",
      description: "We stay ahead of the curve with the latest technologies and frameworks",
      features: ["React/Next.js", "Node.js", "Cloud Native", "AI Integration"],
      gradient: "from-indigo-400 to-blue-400"
    },
    {
      icon: "⭐",
      title: "Proven Excellence",
      description: "777+ successful projects delivered with 98% client satisfaction rate",
      features: ["777+ Projects", "98% Satisfaction", "600+ Clients", "10+ Team"],
      gradient: "from-purple-400 to-indigo-400"
    },
    {
      icon: "💡",
      title: "Innovation First",
      description: "We don't just follow trends - we create them with innovative solutions",
      features: ["Custom Solutions", "Creative Approach", "Future-Proof", "Scalable"],
      gradient: "from-blue-400 to-cyan-400"
    },
    {
      icon: "🤝",
      title: "Partnership Approach",
      description: "We work as your strategic partner, not just a service provider",
      features: ["Long-term Relationships", "Transparent Communication", "Dedicated Support", "Growth Focused"],
      gradient: "from-cyan-400 to-teal-400"
    }
  ];

  const stats = [
    { number: "777+", label: "Projects Completed" },
    { number: "600+", label: "Happy Clients" },
    { number: "98%", label: "Success Rate" },
    { number: "10+", label: "Expert Team" },
    { number: "24/7", label: "Support" },
    { number: "8+", label: "Years Experience" }
  ];

  const process = [
    {
      step: "01",
      title: "Discover & Plan",
      description: "We deeply understand your business goals and create a strategic plan",
      icon: "🔍"
    },
    {
      step: "02",
      title: "Design & Prototype",
      description: "Create stunning designs and interactive prototypes for your approval",
      icon: "🎨"
    },
    {
      step: "03",
      title: "Develop & Test",
      description: "Agile development with continuous testing and quality assurance",
      icon: "⚡"
    },
    {
      step: "04",
      title: "Launch & Scale",
      description: "Deploy your solution and provide ongoing support for growth",
      icon: "🚀"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF2D8] via-[#A7C5FF] to-[#7CA6FF] relative overflow-hidden">

      {/* Soft Blurred Background Balls (Company Profile Style) */}
      <div className="absolute top-10 left-10 w-52 h-52 bg-white/50 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-white/40 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute top-1/2 left-1/3 w-60 h-60 bg-white/30 rounded-full blur-2xl opacity-20"></div>

      {/* Grid Overlay (Kept Same, but softer) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 bg-white/50 backdrop-blur-md rounded-2xl px-6 py-3 border border-white/40 shadow-xl mb-8">
            <div className="w-3 h-3 bg-green-600 rounded-full animate-pulse"></div>
            <span className="text-gray-900 font-bold text-lg tracking-wide">
              Why Choose Us
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Digital Express</span> India?
          </h1>

          <p className="text-xl md:text-2xl text-gray-800 max-w-4xl mx-auto leading-relaxed font-light">
            We're not just another digital agency. We’re your innovation partners.
          </p>
        </div>

        {/* Reason Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <div key={index} className="group relative bg-white/40 backdrop-blur-xl rounded-3xl p-8 border border-white/50 hover:border-white transition-all duration-500 hover:scale-105">

              <div className={`absolute inset-0 bg-gradient-to-r ${reason.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>

              <div className="relative z-10">
                <div className="text-5xl mb-6">{reason.icon}</div>

                <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
                  {reason.title}
                </h3>

                <p className="text-gray-800 text-lg mb-6">{reason.description}</p>

                <div className="flex flex-wrap gap-3">
                  {reason.features.map((f, i) => (
                    <span key={i} className="bg-white/60 text-gray-900 px-4 py-2 rounded-xl text-sm font-medium border border-white">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/50 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 text-center mb-16">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">Proven</span> Process
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {process.map((step, index) => (
            <div key={index} className="group relative bg-white/40 backdrop-blur-xl rounded-3xl p-8 border border-white/50">

              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center text-white font-black text-lg shadow-lg">
                {step.step}
              </div>

              <div className="text-4xl mb-4">{step.icon}</div>

              <h3 className="text-xl font-black text-gray-900 mb-3">{step.title}</h3>

              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Highlight Section */}
        <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-12 border border-white/50 mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            What Makes Us <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">Different?</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-gray-800 text-lg">
              <p><strong>Deep Technical Expertise</strong> — industry experts with 5+ years experience</p>
              <p><strong>Business-First Approach</strong> — real growth focused solutions</p>
              <p><strong>Continuous Innovation</strong> — always exploring new technologies</p>
              <p><strong>Global Standards</strong> — world-class workflows and quality</p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: "🔒", text: "Secure & Reliable" },
                { icon: "⚡", text: "Fast Delivery" },
                { icon: "💎", text: "Premium Quality" },
                { icon: "🌍", text: "Global Reach" }
              ].map((item, index) => (
                <div key={index} className="bg-white/50 backdrop-blur-xl rounded-2xl p-6 text-center border border-white/50">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <div className="text-gray-900 font-semibold">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        {/* <div className="text-center bg-white/50 backdrop-blur-xl rounded-3xl p-12 border border-white/50">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Ready to Experience the Difference?
          </h2>

          <p className="text-xl text-gray-700 mb-8">
            Join 200+ clients who transformed their digital presence with us.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition">
              Start Your Project Today
            </button>

            <button className="bg-white/70 backdrop-blur-md text-gray-900 px-8 py-4 rounded-2xl font-bold border border-gray-300 hover:scale-105 transition">
              Schedule a Call
            </button>
          </div>
        </div> */}

      </div>
    </div>
  );
};

export default WhyDigitalExpress;