import React, { useState } from 'react';

const industrySlides = [
  {
    title: "Manufacturing: Better Operational Efficiency",
    description:
      "Big data developers from Mindmap AI can help you harness your data for predictive maintenance or condition monitoring, warranty reserve estimation, workplace accident prevention, anomalous action detection, and supply chain optimization. Using big data development tools and services for manufacturing, it’s easy to forecast product demand and organize manufacturing planning for resource and capacity.",
    image: "/bdd-manufacturing.webp", 
  },
  {
    title: "Agriculture: Precision Farming and Yields’ Profitability",
    description:
      "Mindmap AI, a big data development company, provides tech services and solutions for field condition monitoring, crops monitoring AI, and precision agricultural decision-making. With big data solution services, farmers can gain insights on field irrigation, fertilization, pesticide prevention, etc. to achieve greater results.",
    image: "/bdd-agriculture.webp",
  },
  {
    title: "Retail & E-commerce: Understanding the Customer through Analytics",
    description:
      "Big data and mobile app development together with web custom solutions can help store owners leverage insights out of customers’ data (clicks, reactions, orders, bounce rate, abandoned carts, etc) and plan efficient targeting and cross channel marketing. Recommendation engines boost sales and enhance customer experience increasing customer ROI and lifetime value.",
    image: "/bdd-retail.webp",
  },
  {
    title: "Healthcare: Disease Identification And Risk Satisfaction",
    description:
      "Big data software development can help healthcare organizations in proactive health management. Predictive models based on the real-time patient data help assess risk patient profiles and help doctors with diagnosis. Patient triage optimization allows decreasing waiting time and risk of infection. With sentiment analysis the healthcare provider can track the patients’ satisfaction with the services provided.",
    image: "/bdd-healthcare.webp",
  },
  {
    title: "FinTech: Risk Analytics and Regulation",
    description:
      "Harness big data services for building effective customer-focus strategies, identifying high-risk client profiles, and detecting fraudulent financial activities and managing financial risks. Get insights out of data to forecast and assess ROI.",
    image: "/bdd-fintech.webp",
  },
  {
    title: "Logistics: Increased Operational Efficiency",
    description:
      "We, as a big data service provider, develop custom solutions for efficient warehouse (tracking available items) and inventory management (understock and overstock prevention). Big Data analytics allow real-time fleet tracking for routing optimization and improving delivery times. Data-driven logistics companies can save considerable costs, enhance operational efficiency and improve service level with AI and big data.",
    image: "/bdd-logistics.webp",
  },
  {
    title: "IoT: Business Insights Generation",
    description:
      "Glean and structure data from your IoT devices for smart analytics. Reap value from your IoT data for decision making and improving your practices. With the help of big data services, you can open new revenue opportunities.",
    image: "/bdd-iot.webp",
  },
  {
    title: "Energy and Utilities: Energy Demand and Supply Analytics",
    description:
      "Got strategic insights out of your data for smart and efficient use of energy. Forecast energy demand and prices with custom big data solutions. Key benefits: Power usage analytics, Seismic data processing, Carbon emissions and trading, Customer specific pricing, Smart grid management.",
    image: "/bdd-energy.webp",
  },
];

const BigDataIndustries = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = industrySlides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const currentData = industrySlides[currentSlide];

  // Utility function for Chevron icons
  const ChevronLeft = (props) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const ChevronRight = (props) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <div className="py-20 bg-[#f7f8f9] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <h2 className="text-3xl font-semibold text-gray-900 mb-2">
          Industries
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          See how big data software development services disrupt the Industries. Get inspired to enhance yours.
        </p>

        <div className="relative w-full max-w-5xl mx-auto rounded-lg shadow-xl bg-white overflow-hidden">
          <div className="flex w-full">
            <div className="w-full lg:w-1/2 p-8 text-left flex flex-col justify-center transition-opacity duration-500 ease-in-out">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {currentData.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-base">
                {currentData.description}
              </p>
            </div>

            <div className="w-full lg:w-1/2 h-80 lg:h-auto overflow-hidden">
              <img
                key={currentSlide} 
                src={currentData.image}
                alt={currentData.title}
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = "https://placehold.co/500x350/99C2FF/ffffff?text=Image+Missing"; 
                }}
                className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
              />
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 bg-white/70 rounded-full text-gray-700 hover:bg-white transition shadow-md z-20"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 bg-white/70 rounded-full text-gray-700 hover:bg-white transition shadow-md z-20"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {industrySlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentSlide ? 'bg-[#1a66cc]' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BigDataIndustries;
