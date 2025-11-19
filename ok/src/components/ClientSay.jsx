import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const reviews = [
  {
    id: 1,
    name: "AMAN SINGH",
    role: "PHOTOGRAPHER AND CEO",
    review:
      "Working with Digital Express India was a pleasure! Their attention to detail and creativity brought our packaging to life.",
  },
  {
    id: 2,
    name: "RAGHAV SHARMA",
    role: "THE MEDIUM BUSINESS CEO",
    review:
      "I can't recommend Digital Express India enough! Their expertise helped us stand out and exceed expectations.",
  },
  {
    id: 3,
    name: "NISHANT GAUR",
    role: "CYBERTHRONE HEAD CTO",
    review:
      "Choosing Digital Express India was the best decision! Their innovative approach transformed our packaging.",
  },
  {
    id: 4,
    name: "PREETI SHARMA",
    role: "INKWELL WRITER PRESIDENT",
    review:
      "Exceptional creativity and professionalism — their work truly captures our brand's essence.",
  },
];

export default function ClientSay() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const slide = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(slide);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-[#FFF2D8] via-[#A7C5FF] to-[#7CA6FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            What Our <span className="text-indigo-700">Clients Say</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto font-medium">
            Don't just take our word for it - hear from businesses we've helped grow
          </p>
        </div>

        {/* Animated Box */}
        <div className="flex justify-center items-center px-4">
          <div className="relative w-full max-w-2xl h-80 md:h-72">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 80, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -80, scale: 0.9 }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-white/60 backdrop-blur-xl shadow-2xl rounded-3xl border border-white/40 p-8 flex flex-col justify-between"
              >
                {/* Quote Icon */}
                <div className="text-5xl text-indigo-500 font-serif">"</div>
                
                {/* Review Text */}
                <div className="flex-1 flex items-center">
                  <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-medium text-center">
                    {reviews[index].review}
                  </p>
                </div>

                {/* Client Info */}
                <div className="text-center mt-6">
                  <h3 className="text-xl font-black text-gray-900 mb-2">
                    {reviews[index].name}
                  </h3>
                  <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-xl text-sm font-semibold inline-block">
                    {reviews[index].role}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="mt-8 flex justify-center gap-3">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === i 
                  ? "bg-indigo-600 scale-125" 
                  : "bg-white/70 hover:bg-white/90"
              }`}
            ></button>
          ))}
        </div>

        {/* Floating Elements */}
        <div className="absolute left-10 w-20 h-20 bg-white/30 rounded-full blur-xl animate-float"></div>
        <div className="absolute right-20 w-16 h-16 bg-indigo-400/30 rounded-full blur-lg animate-float-delayed"></div>
        
        {/* Floating Dots */}
        <div className="pointer-events-none">
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-purple-400/20 rounded-full blur-xl animate-float-slow"></div>
          <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-indigo-500/40 rounded-full blur-sm animate-dot-1"></div>
        </div>
      </div>

      <style jsx>{`
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

        @keyframes dotFloat1 {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-15px) translateX(10px); }
          100% { transform: translateY(0) translateX(0); }
        }

        .animate-dot-1 { animation: dotFloat1 5s ease-in-out infinite; }
      `}</style>
    </section>
  );
}