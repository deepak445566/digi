import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const container = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const footerLinks = [
    {
      title: "Pages",
      links: [
        { name: "Home", url: "/" },
        { name: "Products", url: "/products" },
        { name: "Services", url: "/services" },
        { name: "About", url: "/about" },
        { name: "Contact", url: "/contact" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Terms & Conditions", url: "/term" },
        { name: "Privacy Policy", url: "/privacy" },
        { name: "Cancellation & Refund Policy", url: "/cancel" },
           { name: "Shipping & Delivery", url: "/ship" },
        { name: "Customer Help", url: "/help" }
      ]
    },
    {
      title: "Contact",
      links: [
        { name: "Digitalexpressindia@gmail.com", url: "mailto:Digitalexpressindia@gmail.com" },
        { name: "096672 77348", url: "tel:+9109667277348" }
      ]
    },
  ];

  // Social media links
  const socialLinks = [
    { name: "Facebook", url: "https://facebook.com/yourpage" },
    { name: "Twitter", url: "https://twitter.com/yourprofile" },
    { name: "Instagram", url: "https://instagram.com/yourprofile" },
    { name: "LinkedIn", url: "https://linkedin.com/company/yourcompany" }
  ];

  // Bottom links
  const bottomLinks = [
    { name: "Privacy Policy", url: "/privacy" },
    { name: "Terms of Service", url: "/terms" },
    { name: "Sitemap", url: "/sitemap" }
  ];

  // Function to handle link clicks
  const handleLinkClick = (url) => {
    if (url.startsWith('http') || url.startsWith('mailto') || url.startsWith('tel')) {
      window.open(url, '_blank');
    } else {
      // For internal links, you can use your router here
      // Example with React Router: navigate(url);
      window.location.href = url;
    }
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
      className="w-full bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white px-4 sm:px-6 lg:px-8 py-16 mt-5 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div 
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20 inline-block mb-6 cursor-pointer hover:bg-white/20 transition-all duration-300"
              onClick={() => handleLinkClick("/")}
            >
              <h2 className="text-4xl font-black tracking-wide text-white">
                DIGITAL <span className="text-indigo-400">EXPRESS</span>
              </h2>
              <p className="text-indigo-300 text-sm font-semibold mt-1">INDIA</p>
            </div>

            <p className="text-gray-300 leading-relaxed text-lg font-medium max-w-2xl">
              Digital marketing uses online platforms & technologies to promote
              products or services — including SEO, social media marketing,
              content creation & paid advertising to drive business growth.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <div
                  key={social.name}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-2 hover:bg-white/20 hover:scale-110 transform transition-all duration-300 cursor-pointer border border-white/20"
                  onClick={() => handleLinkClick(social.url)}
                >
                  <span className="text-white font-semibold text-sm">{social.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((item, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 h-fit">
              <h3 className="font-black text-xl mb-6 text-white tracking-wide border-b border-white/20 pb-2">
                {item.title}
              </h3>
              <ul className="space-y-3">
                {item.links.map((link, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 5 }}
                    className="text-gray-300 hover:text-white transition-all duration-300 cursor-pointer group"
                    onClick={() => handleLinkClick(link.url)}
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="font-medium text-lg break-all">{link.name}</span>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-lg font-medium">
              © {new Date().getFullYear()} Digital Express India — All Rights Reserved.
            </div>

            {/* Additional Links */}
            <div className="flex space-x-6">
              {bottomLinks.map((item) => (
                <span
                  key={item.name}
                  className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300 font-medium"
                  onClick={() => handleLinkClick(item.url)}
                >
                  {item.name}
                </span>
              ))}
            </div>

            {/* Trust Badge */}
            <div 
              className="bg-indigo-600/20 backdrop-blur-md rounded-xl px-4 py-2 border border-indigo-400/30 cursor-pointer hover:bg-indigo-600/30 transition-all duration-300"
              onClick={() => handleLinkClick("/testimonials")}
            >
              <span className="text-indigo-300 font-semibold text-sm">🚀 Trusted by 3000+ Businesses</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-indigo-500/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-40 right-20 w-12 h-12 bg-purple-500/20 rounded-full blur-lg animate-float-delayed"></div>

      <style>{`
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 9s ease-in-out infinite 2s;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
        }
      `}</style>
    </motion.footer>
  );
};

export default Footer;