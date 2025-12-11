import React from 'react';

// --- Data for Industry Cards ---
const industryCards = [
  {
    icon: '/icon-ecommerce-alt.svg', // Replace with your icon path
    title: 'E-commerce',
  },
  {
    icon: '/bi-marketing.svg', // Replace with your icon path
    title: 'Marketing & Advertising',
  },
  {
    icon: '/bi-logistic.svg', // Replace with your icon path
    title: 'Supply Chain & Logistics',
  },
  {
    icon: '/bi-fin-service.svg', // Replace with your icon path
    title: 'Financial Services',
  },
  {
    icon: '/bi-health.svg', // Replace with your icon path
    title: 'Healthcare & Pharma',
  },
  {
    icon: '/icon-manufacturing.svg', // Replace with your icon path
    title: 'Manufacturing',
  },
];

// --- Data for Why Mindmap AI Section ---
const mindmapFeatures = [
  {
    icon: '/icon-five-stars.svg', // Replace with your icon path
    title: 'Vast Experience',
    description: 'Drawing on 6+ years of experience, we know how to make your AI solution a success story.',
  },
  {
    icon: '/icon-three-man-2-alt.svg', // Replace with your icon path
    title: 'Multidisciplinary Team',
    description: 'We have a team of senior AI developers with solid skills in AI, NLP, and Big Data.',
  },
  {
    icon: '/icon-innovate.svg', // Replace with your icon path
    title: 'Domain Expertise',
    description: 'We understand your unique challenges and offer optimal solutions based on your needs.',
  },
];

const GenerativeAISections = () => {
  return (
    <div className="font-sans antialiased bg-white text-gray-800">
      {/* ========================================================================= */}
      {/* Generative AI Algorithms Across Industries Section */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Generative AI Algorithms Across Industries
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Reap exceptional domain-specific benefits from our innovative language models.
          </p>

          {/* Industry Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            {industryCards.map((card, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 rounded-xl border border-gray-200 bg-white shadow-sm
                           transition-all duration-300 hover:shadow-lg hover:border-blue-300 transform hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-22 h-22 mb-4">
                  <img src={card.icon} alt={`${card.title} icon`} className="w-full h-full object-contain text-blue-500" />
                </div>
                {/* Title */}
                <h3 className="text-md font-medium text-gray-700 text-center">
                  {card.title}
                </h3>
              </div>
            ))}
          </div>

          {/* "Your Industry" Button */}
          <a
            href="#" // Replace with your link
            className="mt-12 inline-block px-8 py-3 text-md font-semibold text-blue-600 border border-blue-400 rounded-lg 
                       transition-colors duration-300 hover:bg-blue-50 hover:border-blue-600"
          >
            Your Industry
          </a>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* Why Mindmap AI Section */}
      {/* ========================================================================= */}
      <section className="px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Why Mindmap AI?
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Delivering innovative solutions to tackle your biggest business challenges.
          </p>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mindmapFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 transition-all duration-300 transform hover:scale-[1.03]"
              >
                {/* Icon */}
                <div className="w-20 h-20 mb-4">
                  <img src={feature.icon} alt={`${feature.title} icon`} className="w-full h-full object-contain" />
                </div>
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                {/* Description */}
                <p className="text-gray-600 max-w-xs leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GenerativeAISections;