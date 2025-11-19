import React, { useState } from "react";

const ModernNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const navLinks = [
    { name: "Home", href: "/", type: "link" },
    {
      name: "Services",
      href: "/services",
      type: "link", // ❗ Not a dropdown anymore
    },
    {
      name: "Company",
      href: "/company",
      type: "dropdown", // ❗ Only Company has dropdown
      items: [
        { name: "CompanyProfile", href: "/company/companyprofile" },
        { name: "Mission_Vission", href: "/company/mission_vission" },
        { name: "Portfolio", href: "/company/portfolio" },
        { name: "Client Say's", href: "/company/clientsay" },
        { name: "WhyDigitalExpress", href: "/company/whydigitalexpress" },
      ],
    },
    { name: "Contact", href: "/contact", type: "link" },
  ];

  /** -------------- HANDLE DROPDOWN HOVER WITH DELAY -------------- **/
  const openDropdown = () => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setActiveDropdown(true);
  };

  const closeDropdown = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(false);
    }, 200); // 200ms delay prevents instant hiding
    setHoverTimeout(timeout);
  };

  return (
    <nav className="bg-gradient-to-r from-[#FFF2D8] via-[#A7C5FF] to-[#7CA6FF] shadow-2xl relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer">
            <div className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-xl flex items-center justify-center shadow-lg border border-white/40">
              <span className="text-indigo-700 font-extrabold text-xl">DE</span>
            </div>
            <a href="/" className="block">
              <h1 className="text-gray-900 text-lg lg:text-2xl font-bold tracking-tight drop-shadow-sm">
                Digital Express
              </h1>
              <p className="text-indigo-600 text-lg lg:text-2xl font-medium -mt-1">
                India
              </p>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.name === "Company" && openDropdown()}
                  onMouseLeave={() => link.name === "Company" && closeDropdown()}
                >
                  {/* Normal Links */}
                  {link.type === "link" && (
                    <a
                      href={link.href}
                      className="text-gray-900 hover:text-indigo-700 px-3 py-2 text-lg font-semibold transition-all duration-300 relative group"
                    >
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-700 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  )}

                  {/* Dropdown for COMPANY Only */}
                  {link.type === "dropdown" && (
                    <>
                      <button className="text-gray-900 hover:text-indigo-700 px-3 py-2 text-lg font-semibold transition-all duration-300 relative group flex items-center">
                        {link.name}
                        <svg
                          className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                            activeDropdown ? "rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {activeDropdown && (
                        <div className="absolute top-full left-0 mt-2 w-64 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/40 py-3 z-50 animate-fadeIn">
                          {link.items.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="block px-6 py-3 text-gray-800 hover:text-indigo-700 hover:bg-white/60 transition-all duration-300 font-medium group"
                            >
                              <div className="flex items-center">
                                <div className="w-2 h-2 bg-indigo-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-3"></div>
                                {item.name}
                              </div>
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-900 hover:text-indigo-700 hover:bg-white/40 backdrop-blur-md border border-white/40 transition-all"
            >
              <svg className="h-8 w-8" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-2 pt-2 pb-8 mt-3 bg-white/40 backdrop-blur-xl rounded-xl shadow-xl space-y-2">
            {navLinks.map((link) => (
              <div key={link.name}>
                {/* Normal Mobile Links */}
                {link.type === "link" && (
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-4 text-xl text-gray-900 font-semibold rounded-lg hover:bg-white/70 hover:text-indigo-700 transition-all duration-300 transform hover:translate-x-2"
                  >
                    {link.name}
                  </a>
                )}

                {/* Company Dropdown in Mobile */}
                {link.type === "dropdown" && (
                  <div>
                    <div className="px-3 py-4 text-xl text-gray-900 font-semibold rounded-lg bg-white/50">
                      {link.name}
                    </div>

                    <div className="ml-4 space-y-2">
                      {link.items.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-3 text-lg text-gray-700 font-medium rounded-lg hover:bg-white/70 hover:text-indigo-700 transition-all duration-300 transform hover:translate-x-2"
                        >
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-3"></div>
                            {item.name}
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
};

export default ModernNavbar;