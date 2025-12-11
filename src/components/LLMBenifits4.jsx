// LLMBenefitsGridSection.js

import React from 'react';

// Data for the benefit cards
const benefitsData = [
  {
    iconSrc: '/icon-dollar-increase.svg', // Replace with your actual icon paths
    title: 'Increase Revenue',
    description: (
      <>
        Make your customers feel heard and increase sales with the unlimited potential of LLMs. <a href="#" className="text-blue-600 hover:underline">Custom-built AI software</a> streamlines customer support, generates tailored recommendations, and analyzes your customers, while you can focus on growing your business.
      </>
    ),
  },
  {
    iconSrc: '/icon-cost-2.svg',
    title: 'Reduce Operational Costs',
    description: (
      <>
        Cut costs by automating tasks that require human labor. From <a href="#" className="text-blue-600 hover:underline">customer experience services</a> to admin tasks, our custom LLM solutions do the heavy lifting of business management and optimize your operations across sales, marketing, customer service, and more.
      </>
    ),
  },
  {
    iconSrc: '/icon-accuracy-2.svg',
    title: 'Find Growth Opportunities',
    description: (
      <>
        From <a href="#" className="text-blue-600 hover:underline">sentiment analysis</a> to upselling, a custom large language model unlocks novel use cases for your business based on real-time conversation data. LLMs cast their nets wide to customer data, external market trends, and social media data to power your decision-making.
      </>
    ),
  },
  {
    iconSrc: '/icon-engine.svg',
    title: 'Strengthen Your Tech Core',
    description: `
        Embed Large Language Learning Models into your applications to ramp up their throughput and enable conversational search.
        With LLMs, you can request specific outputs from applications, make the most out of your data, and keep up with increasing workloads.
      `,
  },
];

/**
 * Reusable Benefit Card Component
 * Implements blue border and blue shadow on hover.
 */
const BenefitCard = ({ iconSrc, title, description }) => {
  return (
    <div className="flex flex-col items-start p-6 bg-white border border-gray-200 rounded-xl shadow-sm
                    transition-all duration-300 ease-in-out transform hover:scale-[1.02]
                    hover:border-blue-400 
                    hover:shadow-[0_10px_30px_-5px_rgba(59,130,246,0.3)]"> {/* Custom blue shadow on hover */}
      
      {/* Icon */}
      <div className="mb-4">
        <img
          src={iconSrc}
          alt={`${title} icon`}
          className="w-16 h-16 object-contain text-blue-500" // Tailwind's text-blue-500 won't affect img directly, but good for context
        />
      </div>
      
      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-gray-600 leading-relaxed text-base">
        {description}
      </p>
    </div>
  );
};

/**
 * Main Section Component
 */
const LLMBenefitsGridSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Seize the Distinctive Benefits of Large Language Learning Models
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          We help you get your arms around the value of LLMs in corporate settings.
        </p>

        {/* Grid of Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitsData.map((benefit, index) => (
            <BenefitCard
              key={index}
              iconSrc={benefit.iconSrc}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LLMBenefitsGridSection;