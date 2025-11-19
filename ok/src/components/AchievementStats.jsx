import React, { useState, useEffect, useRef } from 'react';

const AchievementStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { number: 777, suffix: '+', label: 'Clients and Brands', duration: 2000 },
    { number: 478, suffix: '+', label: 'The Product Delivered', duration: 2000 },
    { number: 637, suffix: '+', label: 'Happy Customer', duration: 2000 },
    { number: 10, suffix: '+', label: 'Award Wins', duration: 2000 }
  ];

  // Intersection Observer to trigger animation when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#FFF2D8] via-[#A7C5FF] to-[#7CA6FF]"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            What We <span className="text-indigo-700">Achieve</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto font-medium">
            Years of excellence and trust reflected in our growing numbers
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/50 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/40 text-center group hover:scale-105 transform transition-all duration-300"
            >
              {/* Animated Number */}
              <div className="mb-4">
                <CountUpNumber
                  end={stat.number}
                  suffix={stat.suffix}
                  duration={stat.duration}
                  isVisible={isVisible}
                />
              </div>

              {/* Label */}
              <h3 className="text-lg md:text-xl font-black text-gray-900 group-hover:text-indigo-700 transition-colors duration-300">
                {stat.label}
              </h3>

              {/* Bottom Line Animation */}
              <div className="w-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mt-4 mx-auto group-hover:w-full transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Supporting Text */}
        <div className="text-center mt-12">
          <div className="bg-white/40 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/40 max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-700 font-medium">
              For over a decade, we've been delivering exceptional results and building lasting relationships with our clients across India and beyond.
            </p>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute left-10 w-20 h-20 bg-white/30 rounded-full blur-xl animate-float"></div>
        <div className="absolute right-20 w-16 h-16 bg-indigo-400/30 rounded-full blur-lg animate-float-delayed"></div>
        
        {/* Floating Dots */}
        <div className="pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-indigo-500/40 rounded-full blur-sm animate-dot-1"></div>
          <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-purple-500/40 rounded-full blur-sm animate-dot-2"></div>
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

        .animate-dot-1 { animation: dotFloat1 5s ease-in-out infinite; }
        .animate-dot-2 { animation: dotFloat2 6s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

// CountUp Component for animated numbers - FIXED VERSION
const CountUpNumber = ({ end, suffix, duration, isVisible }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const countRef = useRef(0);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
      
      const startTime = Date.now();
      const startValue = 0;
      const endValue = end;
      
      const updateCount = () => {
        const now = Date.now();
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(startValue + (endValue - startValue) * easeOutQuart);
        
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          setCount(endValue);
        }
      };
      
      requestAnimationFrame(updateCount);
    }
  }, [isVisible, hasAnimated, end, duration]);

  // Reset animation when component becomes invisible and then visible again
  useEffect(() => {
    if (!isVisible) {
      setHasAnimated(false);
      setCount(0);
    }
  }, [isVisible]);

  return (
    <div className="text-4xl md:text-5xl lg:text-6xl font-black text-indigo-700">
      {count}
      {suffix}
    </div>
  );
};

export default AchievementStats;