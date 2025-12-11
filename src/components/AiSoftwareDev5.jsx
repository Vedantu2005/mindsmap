// TakeAdvantageSection.js

import React from 'react';

/**
 * Reusable Card Component for the Service Options
 * @param {object} props
 * @param {number} props.number - The large number (1 or 2)
 * @param {string} props.title - The main service title
 * @param {string} props.description - The detailed description
 * @param {string} props.iconSrc - Path to the decorative background image/icon
 */
const ServiceCard = ({ number, title, description, iconSrc }) => {
  return (
    <div className="relative p-8 border border-blue-100 rounded-xl shadow-sm bg-white overflow-hidden
                    transition-all duration-300 ease-in-out transform hover:scale-[1.01]
                    hover:shadow-[0_10px_30px_-5px_rgba(59,130,246,0.3)]"> {/* Added custom blue shadow here */}

      {/* Large Faded Number */}
      <span className="absolute top-0 left-0 text-[10rem] font-extrabold text-blue-500 opacity-10 leading-none pointer-events-none z-0">
        {number}
      </span>

      {/* Decorative Background Icon/Illustration (Positioned to match the image) */}
      <img
        src={iconSrc}
        alt=""
        className={`absolute z-0 opacity-50 h-full object-contain pointer-events-none transition-opacity duration-300
        ${number === 1 ? 'right-[-10%] bottom-0' : 'right-[-10%] bottom-0'}`}
        style={{
          width: '50%', // Adjust width for better visual control
          top: '30%', // Fine-tune vertical position
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 pt-4 pl-4">
        <div className="text-2xl font-bold text-gray-900 mb-3 tracking-wide">
          <span className="text-blue-500 mr-2">{number}</span>
          {title}
        </div>
        <p className="text-gray-600 leading-relaxed text-base max-w-[90%]">
          {description}
        </p>
      </div>
    </div>
  );
};

/**
 * Main Section Component
 */
const TakeAdvantageSection = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          Take Advantage of Our Services
        </h2>

        {/* Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          <ServiceCard
            number={1}
            title="HIRE YOUR AI DEVELOPER"
            description="Hand-pick your artificial intelligence development company. We are ready to set up a dedicated multidisciplinary team of highly-qualified machine learning engineers to deliver solutions that have the power to transform your business."
            iconSrc="/icon-medal.svg" // Replace with your actual image path for the first card
          />

          <ServiceCard
            number={2}
            title="OUTSOURCE AI SOFTWARE DEVELOPMENT"
            description="Entrust our machine learning engineers with the development of your next AI-driven product idea into a custom-made product, giving you extra time to focus on the business tasks that required your attention."
            iconSrc="/icon-hospitality.svg" // Replace with your actual image path for the second card
          />
        </div>

        {/* Get Started Button */}
        <button
          className="px-10 py-3 text-lg font-semibold border-2 border-blue-500 text-blue-600 rounded-lg bg-white
                     transition-all duration-300 ease-in-out hover:bg-blue-600 hover:text-white hover:shadow-md"
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default TakeAdvantageSection;