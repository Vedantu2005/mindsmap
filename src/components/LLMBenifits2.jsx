// CustomLLMModelSection.js

import React from 'react';

// Data for the industry cards
const industryCardsData = [
  { iconSrc: '/bi-fin-service.svg', title: 'FinTech' }, // Replace with your actual icon paths
  { iconSrc: '/icon-ecommerce-alt.svg', title: 'Retail & E-commerce' },
  { iconSrc: '/bi-marketing.svg', title: 'Marketing & Advertising' },
  { iconSrc: '/icon-telecommunications.svg', title: 'Telecommunication' },
  { iconSrc: '/bi-icon-conslng.svg', title: 'Consulting services' },
  { iconSrc: '/icon-security.svg', title: 'Insurance' },
];

/**
 * Reusable Card Component for Industries
 * Implements blue border and blue shadow on hover.
 */
const IndustryLLMCard = ({ iconSrc, title }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white border border-gray-200 rounded-xl shadow-sm
                    transition-all duration-300 ease-in-out transform hover:scale-[1.03]
                    hover:border-blue-400 
                    hover:shadow-[0_10px_30px_-5px_rgba(59,130,246,0.3)]"> {/* Custom blue shadow on hover */}
      
      {/* Icon */}
      <img
        src={iconSrc}
        alt={`${title} icon`}
        className="w-20 h-20 mb-4 object-contain text-blue-500"
      />
      
      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800 text-center group-hover:text-blue-600 transition-colors duration-300">
        {title}
      </h3>
    </div>
  );
};

/**
 * Main Section Component
 */
const CustomLLMModelSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Build a Custom LLM Model for Your Industry
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Our generative AI company delivers custom models rooted in AI expertise & years of cross-domain expertise.
        </p>

        {/* Grid of Industry Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {industryCardsData.map((card, index) => (
            <IndustryLLMCard
              key={index}
              iconSrc={card.iconSrc}
              title={card.title}
            />
          ))}
        </div>

        {/* Your Industry Button */}
        <button
          className="px-10 py-3 text-lg font-semibold border-2 border-blue-500 text-blue-600 rounded-lg bg-white
                     transition-all duration-300 ease-in-out hover:bg-blue-600 hover:text-white hover:shadow-lg"
        >
          Your Industry
        </button>
      </div>
    </section>
  );
};

export default CustomLLMModelSection;