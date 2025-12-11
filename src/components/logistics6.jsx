import React from 'react';

// Data for the feature cards
const offerings = [
  {
    number: '1',
    title: 'Consulting',
    description: 'Looking to invest in AI? Our data scientists and software engineers will help you jump-start your intelligent revolution by analyzing your business needs and matching them with a tech solution.',
  },
  {
    number: '2',
    title: 'Logistics and Transportation IT Solutions',
    description: 'Be it a small business logistics solution or a large-scale transport management system, our engineers will deliver customized software that aligns with your objectives and embraces the latest tech trends.',
  },
  {
    number: '3',
    title: 'Analytics in The Logistics Industry',
    description: 'Make efficient use of company data by analyzing it and enabling faster decision-making. Reshape your business strategy and reap the benefits with data-driven solutions.',
  },
  {
    number: '4',
    title: 'Testing and QA',
    description: 'We put product quality at the core of your software services. That is why our QA team makes sure your product is reliable and error-free before launching it.',
  },
];

// Reusable card component for each offering
const OfferingCard = ({ number, title, description }) => (
  <div className="relative bg-white p-8 rounded-lg border border-[#77bce8] shadow-lg transition-shadow duration-300 hover:shadow-blue-200 overflow-hidden cursor-pointer">
    
    {/* Number: Centered at top on mobile, positioned left on desktop */}
    <div 
      className="absolute -top-6 lg:-top-2 left-1/2 -translate-x-1/2 md:left-12 md:transform-none text-[120px] font-black text-[#77bce8]/50 select-none z-0" 
      aria-hidden="true"
    >
      {number}
    </div>
    
    {/* Text: Padded at the top on mobile, has left margin on desktop */}
    <div className="relative z-10 pt-24 md:pt-0 md:ml-16">
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
);


// Main component for the "What We Offer" section
const Logistics6 = () => {
  return (
    <div className="bg-white font-sans py-1 md:py-5">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What We Offer
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Innovative AI solutions in logistics for your business digital transformation.
          </p>
        </div>

        {/* Grid of Offerings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offerings.map((offering, index) => (
            <OfferingCard key={index} {...offering} />
          ))}
        </div>

        {/* Footer Section */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-gray-600 mb-4">
            Need a digital solution for logistics?
          </p>
          <button className="border border-[#77bce8] text-gray-700 py-3 px-8 rounded-md hover:bg-[#77bce8] hover:border-[#77bce8] cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200">
            Contact us
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Logistics6;