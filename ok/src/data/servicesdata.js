// src/data/servicesData.js
export const servicesData = [
  // Main Service Categories
  {
    id: "website-development",
    heading: "Website Development",
    description: "Complete website development solutions for all business needs.",
    category: "development",
    icon: "💻",
    features: [
      "Responsive Design",
      "SEO Friendly",
      "Fast Loading",
      "Mobile Optimized"
    ],
    isMainService: true,
    subServices: ["small-website", "business-website", "ecommerce-website", "customized-website", "web-development"]
  },

  {
    id: "digital-marketing",
    heading: "Digital Marketing",
    description: "Comprehensive digital marketing solutions to grow your business online.",
    category: "marketing",
    icon: "📈",
    features: [
      "Targeted Campaigns",
      "Data-Driven Strategies",
      "Multi-Channel Approach",
      "Performance Analytics"
    ],
    isMainService: true,
    subServices: [
      "gmb-seo",
      "seo-services", 
      "social-media-marketing",
      "paid-ads-ppc",
      "email-marketing",
      "voice-marketing",
      "political-campaign-marketing",
      "youtube-promotion",
      "whatsapp-marketing",
      "sms-marketing",
      "content-marketing",
      "digital-marketing-by-industry"
    ]
  },

  {
    id: "branding",
    heading: "Branding",
    description: "Complete branding solutions to build and enhance your brand identity.",
    category: "branding",
    icon: "🎨",
    features: [
      "Brand Strategy",
      "Visual Identity",
      "Brand Consistency",
      "Market Positioning"
    ],
    isMainService: true,
    subServices: [
      "online-reputation-management",
      "pr-agency",
      "press-release-distribution",
      "brand-image-building",
      "digital-branding-agency",
      "corporate-film-makers",
      "corporate-video-production",
      "tv-ads",
      "influencer-marketing",
      "celebrity-management",
      "graphic-designing"
    ]
  },
  {
  id: "social-media-management",
  heading: "Social Media Management",
  description: "Managing your business's social media pages can be time-consuming—but staying active online is crucial for visibility, customer engagement, and brand trust. That's where we come in.",
  category: "social-media",
  icon: "📱",
  features: [
    "Professional Page Management",
    "Content Strategy & Creation",
    "Audience Engagement",
    "Performance Analytics",
    "Multi-Platform Expertise",
    "Brand Consistency"
  ],
  isMainService: true,
  subServices: [
    "google-page-handling",
    "facebook-page-handling",
    "instagram-page-handling",
    "fb-campaign"
  ]
},

{
  id: "google-map-listing",
  heading: "Google Map Listing",
  description: "If your business isn't showing up on Google Maps, you're missing out on customers who are actively searching for what you offer—right in your area. At Digital Express India, we specialize in Google Map Listing optimization to help you rank higher in local search and attract more nearby customers.",
  category: "local-seo",
  icon: "🗺️",
  features: [
    "Google My Business Optimization",
    "Local Search Ranking",
    "Review Management",
    "Map Visibility Improvement",
    "Local Citation Building",
    "Customer Engagement"
  ],
  isMainService: true,
  subServices: [
    "gmb-optimization",
    "local-seo-service"
  ]
},




  // Sub Services - Website Development
  {
    id: "small-website",
    heading: "Small Website",
    description: "Perfect for small businesses, portfolios, and startups.",
    category: "development",
    parentId: "website-development",
    features: [
      "Up to 5 Pages",
      "Mobile Responsive Design",
      "Basic SEO Setup",
      "Fast Delivery"
    ],
    plans: [
      {
        planName: "Basic",
        price: 1999,
        paymentLink: "https://rzp.io/l/small-basic",
        planFeatures: [
          "3 Pages Website",
          "Responsive Design",
          "Contact Form",
          "Basic SEO"
        ]
      },
      {
        planName: "Premium",
        price: 2999,
        paymentLink: "https://rzp.io/l/small-premium",
        planFeatures: [
          "5 Pages Website",
          "Premium Design",
          "WhatsApp Integration",
          "Google Map Embed"
        ]
      },
      {
        planName: "Gold",
        price: 3999,
        paymentLink: "https://rzp.io/l/small-gold",
        planFeatures: [
          "7 Pages Website",
          "Advanced SEO",
          "Chat Support",
          "Speed Optimization"
        ]
      }
    ]
  },

  {
    id: "business-website",
    heading: "Business Website",
    description: "Professional website for proper business branding.",
    category: "development",
    parentId: "website-development",
    features: [
      "Up to 10 Pages",
      "Business Email Setup",
      "Google Map Integration",
      "SEO Optimized"
    ],
    plans: [
      {
        planName: "Basic",
        price: 4999,
        paymentLink: "https://rzp.io/l/business-basic",
        planFeatures: [
          "6 Pages",
          "Business Email Setup",
          "Basic Branding",
          "SEO Lite"
        ]
      },
      {
        planName: "Premium",
        price: 6999,
        paymentLink: "https://rzp.io/l/business-premium",
        planFeatures: [
          "10 Pages",
          "Premium Branding",
          "Blog Setup",
          "Google Analytics"
        ]
      },
      {
        planName: "Gold",
        price: 9999,
        paymentLink: "https://rzp.io/l/business-gold",
        planFeatures: [
          "Unlimited Pages",
          "CRM Integration",
          "Advanced SEO",
          "Priority Support"
        ]
      }
    ]
  },

  {
    id: "ecommerce-website",
    heading: "E-Commerce Website",
    description: "Sell products online with a secure shopping cart.",
    category: "development",
    parentId: "website-development",
    features: [
      "Product Upload System",
      "Secure Payment Gateway",
      "Order Dashboard",
      "Admin Panel"
    ],
    plans: [
      {
        planName: "Basic",
        price: 9999,
        paymentLink: "https://rzp.io/l/ecom-basic",
        planFeatures: [
          "Up to 20 Products",
          "Basic Admin Panel",
          "Cash on Delivery",
          "Order Notifications"
        ]
      },
      {
        planName: "Premium",
        price: 14999,
        paymentLink: "https://rzp.io/l/ecom-premium",
        planFeatures: [
          "Up to 50 Products",
          "Full Admin Panel",
          "Payment Gateway",
          "Stock Management"
        ]
      },
      {
        planName: "Gold",
        price: 19999,
        paymentLink: "https://rzp.io/l/ecom-gold",
        planFeatures: [
          "Unlimited Products",
          "Advanced Dashboard",
          "Coupons & Discounts",
          "Advanced Reports"
        ]
      }
    ]
  },

  {
    id: "customized-website",
    heading: "Customized Website",
    description: "Fully personalized website according to your specific requirements.",
    category: "development",
    parentId: "website-development",
    features: [
      "Custom UI/UX Design",
      "Advanced Functionality",
      "Interactive Animations",
      "Fully Editable CMS"
    ],
    plans: [
      {
        planName: "Basic",
        price: 14999,
        paymentLink: "https://rzp.io/l/customized-basic",
        planFeatures: [
          "Basic Custom Design",
          "5 Custom Pages",
          "5 Revisions",
          "Basic CMS Integration"
        ]
      },
      {
        planName: "Premium",
        price: 24999,
        paymentLink: "https://rzp.io/l/customized-premium",
        planFeatures: [
          "Premium UI/UX Design",
          "10 Custom Pages",
          "10 Revisions",
          "Advanced CMS Integration"
        ]
      },
      {
        planName: "Enterprise",
        price: 39999,
        paymentLink: "https://rzp.io/l/customized-enterprise",
        planFeatures: [
          "Complete Custom Solution",
          "Unlimited Pages",
          "Unlimited Revisions",
          "Full Admin Panel"
        ]
      }
    ]
  },

  {
    id: "web-development",
    heading: "Web Development",
    description: "End-to-end web application development with modern technologies.",
    category: "development",
    parentId: "website-development",
    features: [
      "Full Stack Development",
      "API Integration",
      "Database Design",
      "Deployment & Hosting"
    ],
    plans: [
      {
        planName: "Basic",
        price: 29999,
        paymentLink: "https://rzp.io/l/webdev-basic",
        planFeatures: [
          "Frontend Development",
          "Basic Backend API",
          "Single Database",
          "Basic Hosting Setup"
        ]
      },
      {
        planName: "Premium",
        price: 49999,
        paymentLink: "https://rzp.io/l/webdev-premium",
        planFeatures: [
          "Full Stack Development",
          "REST API Integration",
          "Advanced Database",
          "Cloud Deployment"
        ]
      },
      {
        planName: "Enterprise",
        price: 79999,
        paymentLink: "https://rzp.io/l/webdev-enterprise",
        planFeatures: [
          "Enterprise Web Application",
          "Microservices Architecture",
          "Multiple Databases",
          "Scalable Cloud Infrastructure"
        ]
      }
    ]
  },

// Digital Marketing Sub Services
  {
    id: "gmb-seo",
    heading: "GMB SEO",
    description: "Optimize your Google My Business profile for better local visibility.",
    category: "marketing",
    parentId: "digital-marketing",
    features: [
      "GMB Profile Optimization",
      "Local SEO Strategy",
      "Review Management",
      "Local Citation Building"
    ],
    plans: [
      {
        planName: "Basic",
        price: 4999,
        paymentLink: "https://rzp.io/l/gmb-seo-basic",
        planFeatures: [
          "GMB Profile Setup",
          "Basic Optimization",
          "Review Monitoring",
          "Monthly Reporting"
        ]
      },
      {
        planName: "Premium",
        price: 8999,
        paymentLink: "https://rzp.io/l/gmb-seo-premium",
        planFeatures: [
          "Advanced GMB Optimization",
          "Local Citation Building",
          "Review Response Management",
          "Competitor Analysis"
        ]
      },
      {
        planName: "Enterprise",
        price: 14999,
        paymentLink: "https://rzp.io/l/gmb-seo-enterprise",
        planFeatures: [
          "Complete Local SEO",
          "Multiple Location Management",
          "Advanced Analytics",
          "Dedicated Account Manager"
        ]
      }
    ]
  },

  {
    id: "seo-services",
    heading: "SEO Services",
    description: "Comprehensive search engine optimization to rank higher on Google.",
    category: "marketing",
    parentId: "digital-marketing",
    features: [
      "Keyword Research",
      "On-Page Optimization",
      "Technical SEO",
      "Performance Tracking"
    ],
    plans: [
      {
        planName: "Starter",
        price: 7999,
        paymentLink: "https://rzp.io/l/seo-starter",
        planFeatures: [
          "Basic Keyword Research",
          "On-Page SEO",
          "Monthly Reporting",
          "Google Analytics Setup"
        ]
      },
      {
        planName: "Professional",
        price: 14999,
        paymentLink: "https://rzp.io/l/seo-professional",
        planFeatures: [
          "Advanced Keyword Research",
          "Technical SEO Audit",
          "Content Optimization",
          "Competitor Analysis"
        ]
      },
      {
        planName: "Enterprise",
        price: 24999,
        paymentLink: "https://rzp.io/l/seo-enterprise",
        planFeatures: [
          "Comprehensive SEO Strategy",
          "Link Building Campaign",
          "Advanced Analytics",
          "Dedicated SEO Expert"
        ]
      }
    ]
  },

  {
    id: "social-media-marketing",
    heading: "Social Media Marketing",
    description: "Boost your brand presence across all social media platforms.",
    category: "marketing",
    parentId: "digital-marketing",
    features: [
      "Content Strategy",
      "Platform Management",
      "Audience Engagement",
      "Performance Analytics"
    ],
    plans: [
      {
        planName: "Basic",
        price: 6999,
        paymentLink: "https://rzp.io/l/smm-basic",
        planFeatures: [
          "2 Platforms Management",
          "Content Calendar",
          "Basic Analytics",
          "Monthly Reporting"
        ]
      },
      {
        planName: "Premium",
        price: 12999,
        paymentLink: "https://rzp.io/l/smm-premium",
        planFeatures: [
          "4 Platforms Management",
          "Content Creation",
          "Paid Campaign Management",
          "Advanced Analytics"
        ]
      },
      {
        planName: "Enterprise",
        price: 19999,
        paymentLink: "https://rzp.io/l/smm-enterprise",
        planFeatures: [
          "All Major Platforms",
          "Video Content Creation",
          "Influencer Collaboration",
          "Dedicated Social Media Manager"
        ]
      }
    ]
  },

  {
    id: "paid-ads-ppc",
    heading: "Paid Ads/PPC",
    description: "Drive immediate traffic and conversions with targeted paid advertising.",
    category: "marketing",
    parentId: "digital-marketing",
    features: [
      "Campaign Strategy",
      "Ad Creation & Optimization",
      "Budget Management",
      "ROI Tracking"
    ],
    plans: [
      {
        planName: "Starter",
        price: 4999,
        paymentLink: "https://rzp.io/l/ppc-starter",
        planFeatures: [
          "1 Platform Campaign",
          "Basic Ad Creation",
          "Monthly Optimization",
          "Performance Report"
        ]
      },
      {
        planName: "Professional",
        price: 9999,
        paymentLink: "https://rzp.io/l/ppc-professional",
        planFeatures: [
          "2 Platform Campaigns",
          "Advanced Ad Creation",
          "Weekly Optimization",
          "Conversion Tracking"
        ]
      },
      {
        planName: "Enterprise",
        price: 17999,
        paymentLink: "https://rzp.io/l/ppc-enterprise",
        planFeatures: [
          "Multi-Platform Campaigns",
          "A/B Testing",
          "Daily Optimization",
          "Advanced Analytics Dashboard"
        ]
      }
    ]
  },

  {
    id: "email-marketing",
    heading: "Email Marketing",
    description: "Engage your audience with personalized email campaigns.",
    category: "marketing",
    parentId: "digital-marketing",
    features: [
      "Email Campaign Design",
      "Subscriber Management",
      "Automation Workflows",
      "Performance Analytics"
    ],
    plans: [
      {
        planName: "Basic",
        price: 3999,
        paymentLink: "https://rzp.io/l/email-basic",
        planFeatures: [
          "Email Template Design",
          "Basic Automation",
          "Up to 5000 Subscribers",
          "Monthly Campaigns"
        ]
      },
      {
        planName: "Premium",
        price: 7999,
        paymentLink: "https://rzp.io/l/email-premium",
        planFeatures: [
          "Custom Email Design",
          "Advanced Automation",
          "Up to 15000 Subscribers",
          "A/B Testing"
        ]
      },
      {
        planName: "Enterprise",
        price: 12999,
        paymentLink: "https://rzp.io/l/email-enterprise",
        planFeatures: [
          "Strategic Campaign Planning",
          "Multi-channel Integration",
          "Unlimited Subscribers",
          "Advanced Segmentation"
        ]
      }
    ]
  },

  {
    id: "voice-marketing",
    heading: "Voice Marketing",
    description: "Optimize for voice search and smart assistant platforms.",
    category: "marketing",
    parentId: "digital-marketing",
    features: [
      "Voice Search Optimization",
      "Alexa Skill Development",
      "Voice Content Strategy",
      "Performance Analytics"
    ],
    plans: [
      {
        planName: "Basic",
        price: 5999,
        paymentLink: "https://rzp.io/l/voice-basic",
        planFeatures: [
          "Voice SEO Audit",
          "Basic Optimization",
          "Content Adaptation",
          "Monthly Reporting"
        ]
      },
      {
        planName: "Premium",
        price: 11999,
        paymentLink: "https://rzp.io/l/voice-premium",
        planFeatures: [
          "Advanced Voice SEO",
          "Alexa Skill Development",
          "Voice Content Strategy",
          "Performance Analytics"
        ]
      },
      {
        planName: "Enterprise",
        price: 19999,
        paymentLink: "https://rzp.io/l/voice-enterprise",
        planFeatures: [
          "Complete Voice Strategy",
          "Multi-Platform Integration",
          "Custom Voice App Development",
          "Dedicated Voice Marketing Expert"
        ]
      }
    ]
  },

  {
    id: "political-campaign-marketing",
    heading: "Political Campaign Marketing",
    description: "Digital marketing strategies tailored for political campaigns.",
    category: "marketing",
    parentId: "digital-marketing",
    features: [
      "Campaign Strategy",
      "Voter Engagement",
      "Social Media Management",
      "Analytics & Reporting"
    ],
    plans: [
      {
        planName: "Local Campaign",
        price: 24999,
        paymentLink: "https://rzp.io/l/political-local",
        planFeatures: [
          "Social Media Management",
          "Content Creation",
          "Local Targeting",
          "Basic Analytics"
        ]
      },
      {
        planName: "Regional Campaign",
        price: 49999,
        paymentLink: "https://rzp.io/l/political-regional",
        planFeatures: [
          "Multi-platform Strategy",
          "Paid Advertising",
          "Voter Database Management",
          "Advanced Analytics"
        ]
      },
      {
        planName: "National Campaign",
        price: 99999,
        paymentLink: "https://rzp.io/l/political-national",
        planFeatures: [
          "Comprehensive Digital Strategy",
          "Influencer Partnerships",
          "Real-time Analytics",
          "Dedicated Campaign Manager"
        ]
      }
    ]
  },

  {
    id: "youtube-promotion",
    heading: "YouTube Promotion",
    description: "Grow your YouTube channel with targeted promotion strategies.",
    category: "marketing",
    parentId: "digital-marketing",
    features: [
      "Channel Optimization",
      "Content Strategy",
      "Audience Growth",
      "Performance Analytics"
    ],
    plans: [
      {
        planName: "Starter",
        price: 6999,
        paymentLink: "https://rzp.io/l/youtube-starter",
        planFeatures: [
          "Channel SEO Optimization",
          "Thumbnail Design",
          "Basic Promotion",
          "Monthly Analytics"
        ]
      },
      {
        planName: "Growth",
        price: 12999,
        paymentLink: "https://rzp.io/l/youtube-growth",
        planFeatures: [
          "Content Strategy",
          "Video SEO",
          "Paid Promotion",
          "Audience Engagement"
        ]
      },
      {
        planName: "Pro",
        price: 19999,
        paymentLink: "https://rzp.io/l/youtube-pro",
        planFeatures: [
          "Complete Channel Management",
          "Advanced Analytics",
          "Influencer Collaborations",
          "Monetization Strategy"
        ]
      }
    ]
  },

  {
    id: "whatsapp-marketing",
    heading: "WhatsApp Marketing",
    description: "Leverage WhatsApp for business communication and marketing.",
    category: "marketing",
    parentId: "digital-marketing",
    features: [
      "Broadcast Campaigns",
      "Automated Responses",
      "Customer Engagement",
      "Analytics & Reporting"
    ],
    plans: [
      {
        planName: "Basic",
        price: 3999,
        paymentLink: "https://rzp.io/l/whatsapp-basic",
        planFeatures: [
          "Broadcast Setup",
          "Basic Automation",
          "Up to 1000 Contacts",
          "Monthly Campaigns"
        ]
      },
      {
        planName: "Business",
        price: 7999,
        paymentLink: "https://rzp.io/l/whatsapp-business",
        planFeatures: [
          "Advanced Automation",
          "Chatbot Integration",
          "Up to 5000 Contacts",
          "Custom Templates"
        ]
      },
      {
        planName: "Enterprise",
        price: 14999,
        paymentLink: "https://rzp.io/l/whatsapp-enterprise",
        planFeatures: [
          "Complete WhatsApp Solution",
          "API Integration",
          "Unlimited Contacts",
          "Advanced Analytics"
        ]
      }
    ]
  },

  {
    id: "sms-marketing",
    heading: "SMS Marketing",
    description: "Reach customers directly with targeted SMS campaigns.",
    category: "marketing",
    parentId: "digital-marketing",
    features: [
      "Bulk SMS Campaigns",
      "Personalized Messages",
      "Delivery Reports",
      "ROI Tracking"
    ],
    plans: [
      {
        planName: "Starter",
        price: 2999,
        paymentLink: "https://rzp.io/l/sms-starter",
        planFeatures: [
          "Up to 5000 SMS",
          "Basic Personalization",
          "Delivery Reports",
          "Monthly Campaigns"
        ]
      },
      {
        planName: "Professional",
        price: 5999,
        paymentLink: "https://rzp.io/l/sms-professional",
        planFeatures: [
          "Up to 15000 SMS",
          "Advanced Personalization",
          "Scheduling",
          "Performance Analytics"
        ]
      },
      {
        planName: "Enterprise",
        price: 9999,
        paymentLink: "https://rzp.io/l/sms-enterprise",
        planFeatures: [
          "Unlimited SMS",
          "API Integration",
          "Advanced Segmentation",
          "Real-time Analytics"
        ]
      }
    ]
  },

  {
    id: "content-marketing",
    heading: "Content Marketing",
    description: "Create and distribute valuable content to attract and engage your audience.",
    category: "marketing",
    parentId: "digital-marketing",
    features: [
      "Content Strategy",
      "Blog Writing",
      "Content Distribution",
      "Performance Analytics"
    ],
    plans: [
      {
        planName: "Basic",
        price: 8999,
        paymentLink: "https://rzp.io/l/content-basic",
        planFeatures: [
          "4 Blog Posts/Month",
          "Basic SEO Optimization",
          "Social Media Sharing",
          "Monthly Content Calendar"
        ]
      },
      {
        planName: "Premium",
        price: 15999,
        paymentLink: "https://rzp.io/l/content-premium",
        planFeatures: [
          "8 Blog Posts/Month",
          "Advanced SEO",
          "Content Promotion",
          "Performance Analytics"
        ]
      },
      {
        planName: "Enterprise",
        price: 24999,
        paymentLink: "https://rzp.io/l/content-enterprise",
        planFeatures: [
          "15+ Blog Posts/Month",
          "Comprehensive Content Strategy",
          "Multi-format Content",
          "Dedicated Content Manager"
        ]
      }
    ]
  },

  {
    id: "digital-marketing-by-industry",
    heading: "Digital Marketing By Industry",
    description: "Industry-specific digital marketing strategies for maximum impact.",
    category: "marketing",
    parentId: "digital-marketing",
    features: [
      "Industry Analysis",
      "Customized Strategy",
      "Competitor Research",
      "Performance Optimization"
    ],
    plans: [
      {
        planName: "Small Business",
        price: 14999,
        paymentLink: "https://rzp.io/l/industry-small",
        planFeatures: [
          "Industry Research",
          "Basic Strategy",
          "3 Channels Management",
          "Monthly Reporting"
        ]
      },
      {
        planName: "Corporate",
        price: 29999,
        paymentLink: "https://rzp.io/l/industry-corporate",
        planFeatures: [
          "Advanced Industry Analysis",
          "Multi-channel Strategy",
          "Competitor Analysis",
          "Advanced Analytics"
        ]
      },
      {
        planName: "Enterprise",
        price: 49999,
        paymentLink: "https://rzp.io/l/industry-enterprise",
        planFeatures: [
          "Comprehensive Market Research",
          "Full-funnel Strategy",
          "Custom KPI Dashboard",
          "Dedicated Marketing Team"
        ]
      }
    ]
  },

  // Branding Sub Services
  {
    id: "online-reputation-management",
    heading: "Online Reputation Management",
    description: "Manage and improve your online reputation across digital platforms.",
    category: "branding",
    parentId: "branding",
    features: [
      "Reputation Monitoring",
      "Review Management",
      "Crisis Management",
      "Positive Content Promotion"
    ],
    plans: [
      {
        planName: "Basic",
        price: 8999,
        paymentLink: "https://rzp.io/l/reputation-basic",
        planFeatures: [
          "Social Media Monitoring",
          "Basic Review Management",
          "Monthly Reports",
          "Crisis Alert System"
        ]
      },
      {
        planName: "Premium",
        price: 15999,
        paymentLink: "https://rzp.io/l/reputation-premium",
        planFeatures: [
          "Comprehensive Monitoring",
          "Review Response Management",
          "Weekly Reports",
          "Crisis Management Plan"
        ]
      },
      {
        planName: "Enterprise",
        price: 24999,
        paymentLink: "https://rzp.io/l/reputation-enterprise",
        planFeatures: [
          "24/7 Monitoring",
          "Proactive Reputation Building",
          "Real-time Reports",
          "Dedicated Reputation Manager"
        ]
      }
    ]
  },

  {
    id: "pr-agency",
    heading: "PR Agency",
    description: "Professional public relations services to build your brand image.",
    category: "branding",
    parentId: "branding",
    features: [
      "Media Relations",
      "Press Coverage",
      "Crisis Communication",
      "Brand Storytelling"
    ],
    plans: [
      {
        planName: "Starter",
        price: 19999,
        paymentLink: "https://rzp.io/l/pr-starter",
        planFeatures: [
          "Media Outreach",
          "Press Release Writing",
          "Basic Media Monitoring",
          "Monthly Coverage Report"
        ]
      },
      {
        planName: "Professional",
        price: 34999,
        paymentLink: "https://rzp.io/l/pr-professional",
        planFeatures: [
          "Strategic PR Planning",
          "Media Relationship Building",
          "Crisis Communication",
          "Quarterly PR Campaigns"
        ]
      },
      {
        planName: "Enterprise",
        price: 59999,
        paymentLink: "https://rzp.io/l/pr-enterprise",
        planFeatures: [
          "Comprehensive PR Strategy",
          "National Media Coverage",
          "24/7 Crisis Management",
          "Dedicated PR Manager"
        ]
      }
    ]
  },

  {
    id: "press-release-distribution",
    heading: "Press Release Distribution",
    description: "Distribute your news to relevant media outlets and journalists.",
    category: "branding",
    parentId: "branding",
    features: [
      "Wide Media Coverage",
      "Targeted Distribution",
      "SEO Optimization",
      "Analytics & Reporting"
    ],
    plans: [
      {
        planName: "Basic",
        price: 4999,
        paymentLink: "https://rzp.io/l/press-basic",
        planFeatures: [
          "Local Media Distribution",
          "Basic Press Release Writing",
          "Up to 50 Outlets",
          "Distribution Report"
        ]
      },
      {
        planName: "Premium",
        price: 9999,
        paymentLink: "https://rzp.io/l/press-premium",
        planFeatures: [
          "National Distribution",
          "Professional Writing",
          "Up to 200 Outlets",
          "Media Coverage Report"
        ]
      },
      {
        planName: "Enterprise",
        price: 19999,
        paymentLink: "https://rzp.io/l/press-enterprise",
        planFeatures: [
          "Global Distribution",
          "Expert Writing & Optimization",
          "500+ Outlets",
          "Comprehensive Analytics"
        ]
      }
    ]
  },

  {
    id: "brand-image-building",
    heading: "Brand Image Building",
    description: "Build a strong and positive brand image in the market.",
    category: "branding",
    parentId: "branding",
    features: [
      "Brand Positioning",
      "Visual Identity",
      "Brand Guidelines",
      "Market Research"
    ],
    plans: [
      {
        planName: "Basic",
        price: 24999,
        paymentLink: "https://rzp.io/l/brand-image-basic",
        planFeatures: [
          "Brand Audit",
          "Basic Positioning Strategy",
          "Logo Design",
          "Brand Color Palette"
        ]
      },
      {
        planName: "Premium",
        price: 44999,
        paymentLink: "https://rzp.io/l/brand-image-premium",
        planFeatures: [
          "Comprehensive Brand Strategy",
          "Visual Identity System",
          "Brand Guidelines",
          "Market Research"
        ]
      },
      {
        planName: "Enterprise",
        price: 79999,
        paymentLink: "https://rzp.io/l/brand-image-enterprise",
        planFeatures: [
          "Complete Brand Transformation",
          "Multi-channel Implementation",
          "Brand Training",
          "Ongoing Brand Management"
        ]
      }
    ]
  },

  {
    id: "digital-branding-agency",
    heading: "Digital Branding Agency",
    description: "Complete digital branding solutions for the modern business.",
    category: "branding",
    parentId: "branding",
    features: [
      "Digital Identity",
      "Social Media Branding",
      "Website Branding",
      "Digital Campaigns"
    ],
    plans: [
      {
        planName: "Startup",
        price: 29999,
        paymentLink: "https://rzp.io/l/digital-branding-startup",
        planFeatures: [
          "Digital Brand Audit",
          "Social Media Branding",
          "Website Brand Integration",
          "Basic Digital Guidelines"
        ]
      },
      {
        planName: "Corporate",
        price: 59999,
        paymentLink: "https://rzp.io/l/digital-branding-corporate",
        planFeatures: [
          "Comprehensive Digital Strategy",
          "Multi-platform Branding",
          "Content Strategy",
          "Brand Monitoring"
        ]
      },
      {
        planName: "Enterprise",
        price: 99999,
        paymentLink: "https://rzp.io/l/digital-branding-enterprise",
        planFeatures: [
          "End-to-end Digital Branding",
          "Custom Digital Assets",
          "Ongoing Strategy Refinement",
          "Dedicated Brand Manager"
        ]
      }
    ]
  },

  {
    id: "corporate-film-makers",
    heading: "Corporate Film Makers",
    description: "Professional corporate film production for brand storytelling.",
    category: "branding",
    parentId: "branding",
    features: [
      "Script Writing",
      "Professional Shooting",
      "Editing & Post-production",
      "Multi-format Delivery"
    ],
    plans: [
      {
        planName: "Basic",
        price: 49999,
        paymentLink: "https://rzp.io/l/corporate-film-basic",
        planFeatures: [
          "3-5 Minute Corporate Film",
          "Basic Script",
          "Single Location Shoot",
          "Standard Editing"
        ]
      },
      {
        planName: "Premium",
        price: 89999,
        paymentLink: "https://rzp.io/l/corporate-film-premium",
        planFeatures: [
          "5-10 Minute Film",
          "Professional Script",
          "Multiple Locations",
          "Advanced Editing & Effects"
        ]
      },
      {
        planName: "Enterprise",
        price: 149999,
        paymentLink: "https://rzp.io/l/corporate-film-enterprise",
        planFeatures: [
          "10+ Minute Film",
          "Expert Script Writing",
          "Multi-day Shoot",
          "Cinematic Quality Production"
        ]
      }
    ]
  },

  {
    id: "corporate-video-production",
    heading: "Corporate Video Production",
    description: "High-quality corporate videos for various business needs.",
    category: "branding",
    parentId: "branding",
    features: [
      "Professional Videography",
      "4K Quality",
      "Audio Enhancement",
      "Multi-purpose Videos"
    ],
    plans: [
      {
        planName: "Starter",
        price: 29999,
        paymentLink: "https://rzp.io/l/video-production-starter",
        planFeatures: [
          "2-3 Minute Video",
          "HD Quality",
          "Basic Editing",
          "2 Revisions"
        ]
      },
      {
        planName: "Professional",
        price: 59999,
        paymentLink: "https://rzp.io/l/video-production-professional",
        planFeatures: [
          "3-5 Minute Video",
          "4K Quality",
          "Advanced Editing",
          "5 Revisions"
        ]
      },
      {
        planName: "Enterprise",
        price: 99999,
        paymentLink: "https://rzp.io/l/video-production-enterprise",
        planFeatures: [
          "5-10 Minute Video",
          "Cinematic 4K",
          "Premium Effects & Animation",
          "Unlimited Revisions"
        ]
      }
    ]
  },

  {
    id: "tv-ads",
    heading: "TV Ads",
    description: "Create and broadcast compelling television advertisements.",
    category: "branding",
    parentId: "branding",
    features: [
      "Creative Development",
      "Professional Production",
      "Channel Placement",
      "Performance Tracking"
    ],
    plans: [
      {
        planName: "Local",
        price: 199999,
        paymentLink: "https://rzp.io/l/tv-ads-local",
        planFeatures: [
          "30-second TVC",
          "Local Channel Placement",
          "Basic Production",
          "2-week Campaign"
        ]
      },
      {
        planName: "Regional",
        price: 499999,
        paymentLink: "https://rzp.io/l/tv-ads-regional",
        planFeatures: [
          "45-second TVC",
          "Regional Channel Network",
          "Professional Production",
          "4-week Campaign"
        ]
      },
      {
        planName: "National",
        price: 999999,
        paymentLink: "https://rzp.io/l/tv-ads-national",
        planFeatures: [
          "60-second TVC",
          "National Channels",
          "Premium Production Quality",
          "8-week Campaign"
        ]
      }
    ]
  },

  {
    id: "influencer-marketing",
    heading: "Influencer Marketing",
    description: "Leverage influencers to amplify your brand message.",
    category: "branding",
    parentId: "branding",
    features: [
      "Influencer Identification",
      "Campaign Management",
      "Content Collaboration",
      "ROI Measurement"
    ],
    plans: [
      {
        planName: "Micro",
        price: 24999,
        paymentLink: "https://rzp.io/l/influencer-micro",
        planFeatures: [
          "5-10 Micro Influencers",
          "Social Media Posts",
          "Basic Campaign Management",
          "Performance Report"
        ]
      },
      {
        planName: "Macro",
        price: 59999,
        paymentLink: "https://rzp.io/l/influencer-macro",
        planFeatures: [
          "2-5 Macro Influencers",
          "Dedicated Content Creation",
          "Advanced Campaign Strategy",
          "Detailed Analytics"
        ]
      },
      {
        planName: "Celebrity",
        price: 149999,
        paymentLink: "https://rzp.io/l/influencer-celebrity",
        planFeatures: [
          "Celebrity Endorsement",
          "Multi-platform Campaign",
          "Professional Content Production",
          "Comprehensive ROI Analysis"
        ]
      }
    ]
  },

  {
    id: "celebrity-management",
    heading: "Celebrity Management",
    description: "Professional celebrity management and endorsement services.",
    category: "branding",
    parentId: "branding",
    features: [
      "Celebrity Partnerships",
      "Contract Negotiation",
      "Appearance Management",
      "Brand Alignment"
    ],
    plans: [
      {
        planName: "Basic",
        price: 99999,
        paymentLink: "https://rzp.io/l/celebrity-basic",
        planFeatures: [
          "Regional Celebrity",
          "Single Endorsement",
          "Basic Contract Management",
          "Appearance Coordination"
        ]
      },
      {
        planName: "Premium",
        price: 249999,
        paymentLink: "https://rzp.io/l/celebrity-premium",
        planFeatures: [
          "National Celebrity",
          "Multiple Appearances",
          "Contract Negotiation",
          "Campaign Integration"
        ]
      },
      {
        planName: "Enterprise",
        price: 499999,
        paymentLink: "https://rzp.io/l/celebrity-enterprise",
        planFeatures: [
          "A-list Celebrity",
          "Long-term Partnership",
          "Complete Management",
          "Strategic Brand Alignment"
        ]
      }
    ]
  },

  {
    id: "graphic-designing",
    heading: "Graphic Designing",
    description: "Creative graphic design solutions for all your branding needs.",
    category: "branding",
    parentId: "branding",
    features: [
      "Creative Design",
      "Brand Consistency",
      "Multiple Formats",
      "Quick Turnaround"
    ],
    plans: [
      {
        planName: "Basic",
        price: 9999,
        paymentLink: "https://rzp.io/l/graphic-basic",
        planFeatures: [
          "Logo Design",
          "Business Card",
          "Social Media Graphics",
          "5 Design Concepts"
        ]
      },
      {
        planName: "Professional",
        price: 19999,
        paymentLink: "https://rzp.io/l/graphic-professional",
        planFeatures: [
          "Complete Brand Identity",
          "Stationery Design",
          "Marketing Collaterals",
          "Unlimited Revisions"
        ]
      },
      {
        planName: "Enterprise",
        price: 39999,
        paymentLink: "https://rzp.io/l/graphic-enterprise",
        planFeatures: [
          "Comprehensive Design Package",
          "UI/UX Design",
          "Packaging Design",
          "Dedicated Designer"
        ]
      }
    ]
  }


,
//google//

{
  id: "google-page-handling",
  heading: "Google Page Handling",
  description: "Professional management of your Google My Business profile to maximize local visibility and customer engagement.",
  category: "social-media",
  parentId: "social-media-management",
  features: [
    "GMB Profile Optimization",
    "Review Response Management",
    "Regular Post Updates",
    "Photo Gallery Optimization",
    "Q&A Management",
    "Performance Analytics"
  ],
  plans: [
    {
      planName: "Basic",
      price: 3999,
      paymentLink: "https://rzp.io/l/google-page-basic",
      planFeatures: [
        "GMB Profile Optimization",
        "Weekly Post Updates",
        "Basic Review Monitoring",
        "Photo Upload & Optimization",
        "Monthly Performance Report",
        "Business Information Updates"
      ]
    },
    {
      planName: "Premium",
      price: 6999,
      paymentLink: "https://rzp.io/l/google-page-premium",
      planFeatures: [
        "Advanced GMB Management",
        "Daily Post Updates",
        "Review Response Management",
        "Q&A Response Service",
        "Competitor Analysis",
        "Weekly Performance Reports",
        "Google Posts with Offers & Events"
      ]
    },
    {
      planName: "Enterprise",
      price: 11999,
      paymentLink: "https://rzp.io/l/google-page-enterprise",
      planFeatures: [
        "Complete Google Business Management",
        "Multiple Location Handling",
        "24/7 Review Monitoring",
        "Strategic Content Planning",
        "Advanced Analytics Dashboard",
        "Monthly Strategy Sessions",
        "Dedicated Account Manager"
      ]
    }
  ]
},

// Facebook Page Handling Service
{
  id: "facebook-page-handling",
  heading: "Facebook Page Handling",
  description: "Professional Facebook page management to boost your social media presence and engage with your audience effectively.",
  category: "social-media",
  parentId: "social-media-management",
  features: [
    "Page Optimization",
    "Content Creation & Posting",
    "Audience Engagement",
    "Review Management",
    "Analytics & Reporting",
    "Community Building"
  ],
  plans: [
    {
      planName: "Basic",
      price: 4999,
      paymentLink: "https://rzp.io/l/facebook-page-basic",
      planFeatures: [
        "Facebook Page Setup & Optimization",
        "3 Posts Per Week",
        "Basic Comment Response",
        "Review Monitoring",
        "Monthly Analytics Report",
        "Cover Photo & Profile Updates"
      ]
    },
    {
      planName: "Premium",
      price: 8999,
      paymentLink: "https://rzp.io/l/facebook-page-premium",
      planFeatures: [
        "Advanced Page Management",
        "Daily Posting (5-7 posts/week)",
        "Active Comment Engagement",
        "Review Response Management",
        "Weekly Performance Reports",
        "Facebook Story Updates",
        "Basic Content Creation"
      ]
    },
    {
      planName: "Enterprise",
      price: 14999,
      paymentLink: "https://rzp.io/l/facebook-page-enterprise",
      planFeatures: [
        "Complete Facebook Management",
        "Strategic Content Calendar",
        "24/7 Community Management",
        "Advanced Analytics & Insights",
        "Facebook Live Sessions",
        "Custom Graphics & Content",
        "Dedicated Social Media Manager"
      ]
    }
  ]
},

// Instagram Page Handling Service
{
  id: "instagram-page-handling",
  heading: "Instagram Page Handling",
  description: "Grow your Instagram presence with professional page management, engaging content, and strategic posting.",
  category: "social-media",
  parentId: "social-media-management",
  features: [
    "Profile Optimization",
    "Content Strategy",
    "Hashtag Research",
    "Story Management",
    "Engagement Growth",
    "Performance Analytics"
  ],
  plans: [
    {
      planName: "Basic",
      price: 5999,
      paymentLink: "https://rzp.io/l/instagram-page-basic",
      planFeatures: [
        "Instagram Profile Optimization",
        "3 Posts Per Week",
        "Daily Story Updates",
        "Basic Hashtag Research",
        "Comment Response",
        "Monthly Growth Report"
      ]
    },
    {
      planName: "Premium",
      price: 9999,
      paymentLink: "https://rzp.io/l/instagram-page-premium",
      planFeatures: [
        "Advanced Instagram Management",
        "Daily Posting (5-7 posts/week)",
        "Strategic Story Content",
        "Advanced Hashtag Strategy",
        "Active Engagement Management",
        "Weekly Performance Analytics",
        "Reels Creation & Management"
      ]
    },
    {
      planName: "Enterprise",
      price: 16999,
      paymentLink: "https://rzp.io/l/instagram-page-enterprise",
      planFeatures: [
        "Complete Instagram Strategy",
        "Content Calendar Planning",
        "IGTV & Reels Management",
        "Influencer Collaboration",
        "Advanced Analytics Dashboard",
        "Monthly Strategy Refinement",
        "Dedicated Instagram Manager"
      ]
    }
  ]
},

// FB Campaign Service
{
  id: "fb-campaign",
  heading: "FB Campaign",
  description: "Strategic Facebook advertising campaigns to reach your target audience and drive conversions.",
  category: "social-media",
  parentId: "social-media-management",
  features: [
    "Campaign Strategy",
    "Audience Targeting",
    "Ad Creation & Optimization",
    "Budget Management",
    "Performance Tracking",
    "ROI Analysis"
  ],
  plans: [
    {
      planName: "Starter",
      price: 7999,
      paymentLink: "https://rzp.io/l/fb-campaign-starter",
      planFeatures: [
        "Basic Campaign Setup",
        "Audience Research",
        "Ad Creative Development",
        "Daily Budget Management",
        "Basic Performance Tracking",
        "Weekly Optimization",
        "Monthly Report"
      ]
    },
    {
      planName: "Professional",
      price: 14999,
      paymentLink: "https://rzp.io/l/fb-campaign-professional",
      planFeatures: [
        "Advanced Campaign Strategy",
        "Custom Audience Creation",
        "A/B Testing",
        "Retargeting Campaigns",
        "Advanced Analytics",
        "Daily Optimization",
        "Weekly Detailed Reports"
      ]
    },
    {
      planName: "Enterprise",
      price: 24999,
      paymentLink: "https://rzp.io/l/fb-campaign-enterprise",
      planFeatures: [
        "Comprehensive Facebook Strategy",
        "Multi-campaign Management",
        "Lookalike Audiences",
        "Conversion Tracking Setup",
        "Real-time Performance Dashboard",
        "24/7 Campaign Monitoring",
        "Dedicated Campaign Manager"
      ]
    }
  ]
}
 ,

// Sub-service 1: GMB Optimization
{
  id: "gmb-optimization",
  heading: "GMB Optimization",
  description: "Complete Google My Business profile optimization to maximize your local visibility and attract more customers.",
  category: "local-seo",
  parentId: "google-map-listing",
  features: [
    "Profile Completion & Verification",
    "Category & Attribute Optimization",
    "Photo Gallery Management",
    "Review Response System",
    "Google Posts Strategy",
    "Q&A Management"
  ],
  plans: [
    {
      planName: "Basic GMB",
      price: 3999,
      paymentLink: "https://rzp.io/l/gmb-basic",
      planFeatures: [
        "GMB Profile Setup & Verification",
        "Basic Information Optimization",
        "Category Selection",
        "Photo Upload (5 photos)",
        "Monthly Post Updates",
        "Basic Review Monitoring"
      ]
    },
    {
      planName: "Premium GMB",
      price: 6999,
      paymentLink: "https://rzp.io/l/gmb-premium",
      planFeatures: [
        "Advanced GMB Optimization",
        "Multiple Category Selection",
        "Professional Photo Gallery",
        "Review Response Management",
        "Weekly Google Posts",
        "Q&A Response Service",
        "Competitor Analysis"
      ]
    },
    {
      planName: "Enterprise GMB",
      price: 11999,
      paymentLink: "https://rzp.io/l/gmb-enterprise",
      planFeatures: [
        "Complete GMB Management",
        "Multiple Location Setup",
        "Premium Photo Optimization",
        "24/7 Review Monitoring",
        "Strategic Content Calendar",
        "Advanced Analytics Dashboard",
        "Dedicated GMB Manager"
      ]
    }
  ]
},

// Sub-service 2: Local SEO Service
{
  id: "local-seo-service",
  heading: "Local SEO Service",
  description: "Comprehensive local SEO strategies to dominate local search results and drive more foot traffic to your business.",
  category: "local-seo",
  parentId: "google-map-listing",
  features: [
    "Local Keyword Research",
    "Citation Building",
    "Local Link Building",
    "NAP Consistency",
    "Local Directory Submissions",
    "Geo-Targeted Content"
  ],
  plans: [
    {
      planName: "Local Starter",
      price: 5999,
      paymentLink: "https://rzp.io/l/local-seo-starter",
      planFeatures: [
        "Basic Local Keyword Research",
        "25 Local Citations",
        "NAP Consistency Check",
        "Google Map Optimization",
        "Monthly Local Ranking Report",
        "Basic Directory Submissions"
      ]
    },
    {
      planName: "Local Pro",
      price: 9999,
      paymentLink: "https://rzp.io/l/local-seo-pro",
      planFeatures: [
        "Advanced Local Keyword Research",
        "50+ Local Citations",
        "Local Link Building",
        "Competitor Local Analysis",
        "Weekly Ranking Reports",
        "Geo-Targeted Content Strategy",
        "Local Schema Markup"
      ]
    },
    {
      planName: "Local Dominator",
      price: 15999,
      paymentLink: "https://rzp.io/l/local-seo-dominator",
      planFeatures: [
        "Comprehensive Local Strategy",
        "100+ Premium Citations",
        "Advanced Local Link Building",
        "Multiple Location Management",
        "Real-time Local Analytics",
        "Custom Local Content Creation",
        "Dedicated Local SEO Expert"
      ]
    }
  ]
}
];