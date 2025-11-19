import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const texts = [
    "Best Digital Marketing Agency in India",
    "Helping MSMEs, Business Owners & Institutions",
    "Get SEO in Multiple Cities & Countries",
    "Grow Your Business Online",
    "Drive More Traffic & Revenue"
  ];

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % texts.length;
      const fullText = texts[current];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, texts]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF2D8] via-[#A7C5FF] to-[#7CA6FF]">
      
      {/* Sticky Contact Icons */}
      <div className="fixed bottom-30 right-8 z-50">
        {/* Phone Icon */}
        <a href="tel:9667277348" className="block group">
          <div className="bg-[#83ABFF] text-white p-4 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 hover:rotate-12 animate-bounce-slow border-2 border-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-black text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Call Us: 9667277348
          </div>
        </a>
      </div>

      <div className="fixed bottom-8 right-8 z-50">
        {/* WhatsApp Icon */}
        <a 
          href="https://wa.me/919667277348" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block group"
        >
          <div className="bg-[#83ABFF] text-white p-4 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 hover:rotate-12 animate-pulse-slow border-2 border-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.18-1.24-6.169-3.495-8.418"/>
            </svg>
          </div>
          <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-black text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Chat on WhatsApp
          </div>
        </a>
      </div>

      {/* Hero Section - Redesigned */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content - Text Section */}
            <div className="text-left space-y-8">
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-tight">
                  Digital
                  <span className="block text-indigo-700">Express</span>
                </h1>
                <div className="w-24 h-2 bg-indigo-600 rounded-full"></div>
              </div>

              {/* Animated Typing Text */}
              <div className="min-h-[80px] flex items-start">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-relaxed">
                  <span className="typewriter-text bg-gradient-to-r from-indigo-600 to-purple-600">{text}</span>
                  <span className="blinking-cursor ml-1">|</span>
                </h2>
              </div>

              {/* Supporting Text */}
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium max-w-2xl">
                Transforming businesses with cutting-edge digital solutions backed by 
                <span className="text-indigo-600 font-semibold"> 50+ years of combined expertise</span> in digital marketing and brand growth.
              </p>

              {/* CTA Buttons - Stacked */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                <button className="bg-white/90 backdrop-blur-md text-indigo-700 px-8 py-4 rounded-xl font-bold text-lg shadow-2xl border border-white/40 hover:scale-105 transform transition-all duration-300 hover:shadow-2xl flex items-center justify-center space-x-2">
                  <span>Get Free Consultation</span>
                  <span className="text-xl">→</span>
                </button>
                <button className="bg-indigo-700/90 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl border border-white/40 hover:scale-105 transform transition-all duration-300 hover:shadow-2xl">
                  View Case Studies
                </button>
              </div>
            </div>

            {/* Right Content - Stats Card */}
            <div className="relative">
              <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/40 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="text-center space-y-8">
                  <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-8">
                    Our Impact in Numbers
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { number: '637+', label: 'Happy Clients', emoji: '😊' },
                      { number: '50+', label: 'Cities Served', emoji: '🏙️' },
                      { number: '5+', label: 'Countries', emoji: '🌎' },
                      { number: '98%', label: 'Success Rate', emoji: '📈' }
                    ].map((stat, index) => (
                      <div key={index} className="text-center group hover:scale-110 transform transition-all duration-300">
                        <div className="text-4xl mb-2 group-hover:scale-110 transform transition-transform duration-300">
                          {stat.emoji}
                        </div>
                        <div className="text-3xl md:text-4xl font-black text-indigo-700 mb-1">
                          {stat.number}
                        </div>
                        <div className="text-gray-800 font-semibold text-sm">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Trust Badge */}
                  <div className="mt-8 p-4 bg-indigo-600/20 rounded-2xl border border-indigo-400/30">
                    <p className="text-gray-800 font-bold text-lg">
                      Trusted by 700+ Businesses Across India
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Elements on Card */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-indigo-500/40 rounded-full blur-lg animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500/30 rounded-full blur-md animate-bounce delay-75"></div>
            </div>
          </div>
        </div>

        {/* Background Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/30 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-indigo-400/30 rounded-full blur-lg animate-float-delayed"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-purple-400/20 rounded-full blur-xl animate-float-slow"></div>

        {/* Floating Dots */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-3 h-3 bg-indigo-500/40 rounded-full blur-sm animate-dot-1"></div>
          <div className="absolute top-1/3 right-20 w-2 h-2 bg-purple-500/40 rounded-full blur-sm animate-dot-2"></div>
          <div className="absolute top-1/2 left-10 w-4 h-4 bg-blue-500/40 rounded-full blur-md animate-dot-3"></div>
          <div className="absolute bottom-24 right-1/3 w-2 h-2 bg-indigo-400/50 rounded-full blur-sm animate-dot-4"></div>
          <div className="absolute bottom-40 left-1/2 w-3 h-3 bg-pink-400/40 rounded-full blur-[2px] animate-dot-5"></div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute hidden lg:block bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-gray-700 font-semibold text-sm">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-gray-700 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-700 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .typewriter-text {
          background: linear-gradient(135deg, #4F46E5, #7E22CE);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .blinking-cursor {
          animation: blink 1s infinite;
          color: #4F46E5;
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 7s ease-in-out infinite 1s;
        }
        
        .animate-float-slow {
          animation: float 8s ease-in-out infinite 2s;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        /* Custom Animations for Contact Icons */
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s infinite;
        }

        /* Dot Animations */
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

        @keyframes dotFloat4 {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(14px) translateX(12px); }
          100% { transform: translateY(0) translateX(0); }
        }

        @keyframes dotFloat5 {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-10px) translateX(-10px); }
          100% { transform: translateY(0) translateX(0); }
        }

        .animate-dot-1 { animation: dotFloat1 5s ease-in-out infinite; }
        .animate-dot-2 { animation: dotFloat2 6s ease-in-out infinite; }
        .animate-dot-3 { animation: dotFloat3 7s ease-in-out infinite; }
        .animate-dot-4 { animation: dotFloat4 5.5s ease-in-out infinite; }
        .animate-dot-5 { animation: dotFloat5 6.5s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default HomePage;