import React from 'react';

// --- Data for Industry Blocks ---
const industryBlocks = [
  { title: 'FinTech', icon: '/bi-fin-service.svg' },
  { title: 'Retail & E-commerce', icon: '/icon-ecommerce-alt.svg' },
  { title: 'Marketing & Advertising', icon: '/bi-marketing.svg' },
  { title: 'Telecommunication', icon: '/icon-telecommunications.svg' },
  { title: 'Consulting services', icon: '/bi-icon-conslng.svg' },
  { title: 'Insurance', icon: '/icon-security.svg' },
];

// --- Data for Why Mindsmaps AI? (Bottom Section) ---
const mindsmapsFeaturesBottom = [
  {
    icon: '/icon-five-stars.svg', // Placeholder for the 3 stars icon
    title: 'We Hire Top Engineers',
    description: 'We have a cross-functional team of 40+ AI experts with thorough domain knowledge and proficiency in chatbot technologies.',
  },
  {
    icon: '/icon-three-man-2-alt.svg', // Placeholder for the people icon
    title: 'We Boost Time-Tested Expertise',
    description: 'Our clientele includes over 100 businesses that solved their challenges with our custom-made solutions.',
  },
  {
    icon: '/icon-engine-head.svg', // Placeholder for the gear head icon
    title: 'We Build Solutions That Bring Value',
    description: 'We focus on long-term value over short-term gains by delivering a great product and an unrivaled experience that users love.',
  },
];


const IndustryAndWhyUs = () => {
  return (
    <div className="bg-white font-sans text-gray-700">
      <div className="container mx-auto px-4 py-16 sm:py-20">

        {/* ======================================================= */}
        {/* SECTION 1: BUILD A CUSTOM LLM MODEL FOR YOUR INDUSTRY   */}
        {/* ======================================================= */}
        <section className="text-center mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Build a Custom LLM Model for Your Industry
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-12">
            Our virtual assistant web developers are strategic in building solutions that overcome your business challenges.
          </p>

          {/* Industry Grid (3 columns) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
            {industryBlocks.map((block, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-lg p-6 text-center transition-shadow duration-300 ease-in-out hover:shadow-lg hover:border-blue-300 cursor-pointer"
              >
                <div className="flex justify-center mb-3">
                  <img src={block.icon} alt={`${block.title} icon`} className="h-20 w-20 object-contain text-blue-600" />
                </div>
                <p className="text-base font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {block.title}
                </p>
              </div>
            ))}
          </div>

          {/* Your Industry Button */}
          <button className="text-gray-600 border border-gray-400 hover:border-blue-600 hover:text-blue-600 font-medium py-3 px-8 rounded-lg text-lg transition-all duration-300 ease-in-out">
            Your Industry
          </button>
        </section>

        {/* ======================================================= */}
        {/* SECTION 2: WHY MINDMAPS AI? (Bottom Features)           */}
        {/* ======================================================= */}
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Mindsmaps AI?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
            Our company is a tech partner of choice for global organizations that require solid knowledge and competencies to innovate.
          </p>

          {/* Feature Cards Grid (3 columns) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {mindsmapsFeaturesBottom.map((feature, index) => (
              <div
                key={index}
                className="group bg-white p-4 text-center"
              >
                <div className="flex justify-center mb-4">
                  <img src={feature.icon} alt={`${feature.title} icon`} className="h-18 w-18 object-contain" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default IndustryAndWhyUs;