import React from 'react';

const CompanyProfile = () => {
  const companyInfo = {
    name: "Digital Express India",
    tagline: "Transforming Businesses Through Digital Innovation",
    founded: "2017",
    employees: "10+",
    projects: "777+",
    clients: "600+",
    satisfaction: "98%"
  };

  const services = [
  { icon: "🔍", title: "SEO Optimization", description: "Improve rankings and drive organic traffic with advanced SEO strategies." },
  { icon: "🌐", title: "Website", description: "Professional, responsive, and high-performance website development." },
  { icon: "📄", title: "Google Page Handling", description: "Complete management of your Google Business Profile for better visibility." },
  { icon: "💻", title: "Development", description: "Custom web and app development tailored to your business needs." },
  { icon: "📍", title: "Google Map Listing", description: "Boost local visibility with optimized Google Maps business listings." },
  { icon: "📢", title: "Digital Marketing", description: "End-to-end digital marketing solutions that generate real results." },
  { icon: "🎨", title: "Branding", description: "Build a strong brand identity with creative and strategic branding solutions." },
  { icon: "📰", title: "Public Relations", description: "Strengthen your brand reputation with professional PR strategies." },
  { icon: "📱", title: "Social Media Marketing", description: "Grow your audience and engagement with targeted social media campaigns." },
  { icon: "✍️", title: "Content Marketing", description: "High-quality content that attracts, engages, and converts customers." }
];


  const milestones = [
    { year: "2017", event: "Company Founded" },
    { year: "2018", event: "First 100 Clients" },
    { year: "2020", event: "Expanded to 25+ Team Members" },
    { year: "2021", event: "Founded swadeshi bharat" },
    { year: "2022", event: "500+ Projects Delivered" },
    { year: "2023", event: "International Client Expansion" },
    { year: "2024", event: "Started Soorveer Yuva Sangathan/WhatsApp Summit" },
    { year: "2025", event: "NDTV Summit" }
  ];

  const values = [
    { icon: "🚀", title: "Innovation", description: "We embrace cutting-edge technologies and creative solutions" },
    { icon: "🤝", title: "Partnership", description: "We build long-term relationships based on trust and results" },
    { icon: "⭐", title: "Excellence", description: "We deliver exceptional quality in every project" },
    { icon: "💡", title: "Transparency", description: "We maintain open communication and honest practices" }
  ];

  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80')`
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFF2D8]/80 via-[#A7C5FF]/70 to-[#7CA6FF]/80 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* HERO SECTION */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-white/40 backdrop-blur-md rounded-2xl px-6 py-3 border border-white/60 shadow-xl mb-6">
            <div className="w-3 h-3 bg-indigo-600 rounded-full animate-pulse"></div>
            <span className="text-gray-900 font-bold text-lg">{companyInfo.name}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Company <span className="text-indigo-700">Profile</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
            {companyInfo.tagline}
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: "Founded", value: companyInfo.founded },
            { label: "Team Members", value: companyInfo.employees },
            { label: "Projects", value: companyInfo.projects },
            { label: "Happy Clients", value: companyInfo.clients }
          ].map((stat, i) => (
            <div key={i} className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/60 shadow-xl">
              <div className="text-3xl font-black text-indigo-700 mb-2">{stat.value}</div>
              <div className="text-gray-700 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ABOUT SECTION */}
        <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 mb-16 shadow-2xl border border-white/60">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Story */}
            <div>
              <h2 className="text-4xl font-black text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Founded in {companyInfo.founded}, <strong>Digital Express India</strong> started with a vision to help businesses grow digitally.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Our expert team delivers technology-driven solutions that elevate businesses globally.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                With {companyInfo.projects}+ completed projects and {companyInfo.clients}+ clients, we continue to innovate.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-6">
              {values.map((v, i) => (
                <div key={i} className="bg-white/70 rounded-2xl p-6 shadow-lg border border-white/60 backdrop-blur-md text-center">
                  <div className="text-4xl mb-3">{v.icon}</div>
                  <h3 className="text-xl font-black text-gray-900 mb-2">{v.title}</h3>
                  <p className="text-gray-700 text-sm">{v.description}</p>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* SERVICES */}
        <div className="mb-16">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-white/60 rounded-2xl p-6 border border-white/60 shadow-xl backdrop-blur-lg hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-700">{s.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* MILESTONES */}
        <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/60 mb-16">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-12">Our Journey</h2>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-indigo-200/60"></div>
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-4 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className="w-1/2">
                    <div className={`bg-white/70 p-6 rounded-2xl shadow-lg border border-white/60 ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                      <div className="text-2xl font-black text-indigo-700 mb-2">{m.year}</div>
                      <div className="text-gray-900 font-semibold">{m.event}</div>
                    </div>
                  </div>

                  <div className="w-8 h-8 bg-indigo-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        {/* <div className="text-center">
          <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-12 border border-white/60 shadow-xl">
            <h2 className="text-4xl font-black mb-6 text-gray-900">Ready to Start Your Digital Journey?</h2>
            <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Let's collaborate to turn your business goals into digital success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-indigo-700 text-white px-8 py-4 rounded-2xl font-bold hover:bg-indigo-800">
                Get Free Consultation
              </button>
              <button className="bg-white text-indigo-700 px-8 py-4 rounded-2xl font-bold border border-white/60">
                View Our Work
              </button>
            </div>
          </div>
        </div> */}

      </div>
    </div>
  );
};

export default CompanyProfile;