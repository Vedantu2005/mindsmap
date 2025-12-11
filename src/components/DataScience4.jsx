import React from "react";

// Define the data for the industry cards
const industryCardsData = [
  {
    title: "E-commerce",
    icon: "/icon-ecommerce-alt.svg",
  },
  {
    title: "Marketing & Advertising",
    // Assuming 'bi-marketing.svg' means a marketing-related icon
    icon: "/bi-marketing.svg",
  },
  {
    title: "Supply Chain & Logistics",
    // Assuming 'bi-logistic.svg' means a logistics-related icon
    icon: "/bi-logistic.svg",
  },
  {
    title: "Financial Services",
    // Assuming 'bi-fin-service.svg' means a financial services-related icon
    icon: "/bi-fin-service.svg",
  },
  {
    title: "Healthcare & Pharma",
    // Assuming 'bi-health.svg' means a health-related icon
    icon: "/bi-health.svg",
  },
  {
    title: "Manufacturing",
    // The user provided 'icon-manufacturing.svg' twice; using it once.
    icon: "/icon-manufacturing.svg",
  },
];

// Helper component for the individual industry cards
const IndustryCard = ({ title, icon }) => (
  <div className="flex flex-col items-center justify-center p-6 border border-gray-100 rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-lg hover:border-cyan-200 cursor-pointer h-full">
    {/* Industry Icon */}
    <img
      src={icon}
      alt={`${title} Icon`}
      // The images in the screenshot are a light blue/cyan color
      className="w-16 h-16 mb-4 text-cyan-500"
      onError={(e) => {
        // Fallback for missing images
        e.target.onerror = null;
        e.target.src = "/placeholder-icon.svg";
      }}
    />
    {/* Industry Title */}
    <h3 className="text-base font-semibold text-cyan-600 text-center">
      {title}
    </h3>
  </div>
);

// Main component for the industry section
const DataScienceIndustry = () => {
  return (
    <div className="bg-gray-50 py-16 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Title and Subtitle Section */}
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Industries
        </h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
          Implementing data science for development across business domains.
        </p>

        {/* 6-Column Grid of Industry Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {industryCardsData.map((card, index) => (
            <IndustryCard
              key={index}
              title={card.title}
              icon={card.icon}
            />
          ))}
        </div>

        {/* "Your Industry" Button - Styled to match the original UI image */}
        <div className="mt-12">
          <button className="inline-block px-10 py-3 text-gray-700 font-semibold text-base border-2 border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-100 transition duration-150 transform hover:scale-[1.02]">
            Your Industry
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataScienceIndustry;
