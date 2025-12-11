// WhyWorkWithUsSection.js

import React from 'react';

/**
 * Reusable Card Component for "Why Work with Us" reasons.
 * @param {object} props
 * @param {string} props.iconSrc - Path to the icon image
 * @param {string} props.title - The title of the reason
 * @param {string} props.description - The detailed description
 */
const ReasonCard = ({ iconSrc, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 group
                    transition-transform duration-300 ease-in-out hover:-translate-y-2">
      {/* Icon */}
      <div className="mb-6">
        <img
          src={iconSrc}
          alt={`${title} icon`}
          className="w-24 h-24 object-contain group-hover:scale-110 transition-transform duration-300 ease-in-out"
        />
      </div>
      
      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-gray-600 leading-relaxed max-w-[280px]">
        {description}
      </p>
    </div>
  );
};

/**
 * Main Section Component for "Why Work with Us".
 */
const WhyWorkWithUsSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
          Why Work with Us
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Our artificial intelligence developers build beneficial products and software solutions.
        </p>

        {/* Grid of Reason Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <ReasonCard
            iconSrc="/icon-medal.svg" // Replace with your actual image path
            title="Top-Notch Team"
            description="We're a strong AI software engineering team with years of experience in AI-driven solutions development."
          />

          <ReasonCard
            iconSrc="/icon-like.svg" // Replace with your actual image path
            title="Strong Tech Expertise"
            description="We have solid technical know-how in custom AI application development and AI software design for different domains."
          />

          <ReasonCard
            iconSrc="/icon-hospitality.svg" // Replace with your actual image path
            title="Reliable Technology Provider"
            description="We guarantee transparent AI development processes and steady communication during the project."
          />

          <ReasonCard
            iconSrc="/icon-productivity.svg" // Replace with your actual image path
            title="Favorable Cooperation Terms"
            description="We offer flexible terms of cooperation that will be the most suitable for your project needs and goals."
          />

        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUsSection;