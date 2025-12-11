import React from 'react';

// Data for the benefits cards, now with image file paths
const benefitsData = [
  { 
    imageSrc: '/accuracy.svg', 
    title: 'Increased warehouse productivity', 
    description: 'A smart assistant for warehouse inventory management.' 
  },
  { 
    imageSrc: '/person1.svg', 
    title: 'Enhanced customer service', 
    description: 'Increase the supply chain visibility to win the customers.' 
  },
  { 
    imageSrc: '/car.svg', 
    title: 'New delivery capabilities', 
    description: 'Precise delivery windows in any weather conditions and traffic situation.' 
  },
  { 
    imageSrc: '/lists.svg', 
    title: 'Inventory optimization', 
    description: 'Minimized stock-outs, automatic inventory replenishment, and real-time visibility.' 
  },
  { 
    imageSrc: '/arrows.svg', 
    title: 'Increased supply chain efficiency', 
    description: 'Bypass supply chain complexities with analytical capabilities.' 
  },
  { 
    imageSrc: '/cost.svg', 
    title: 'Reduced freight costs', 
    description: 'Save costs on fuel consumption and asset maintenance.' 
  },
  { 
    imageSrc: '/like.svg', 
    title: 'Efficient route planning', 
    description: 'Pave the way for timely deliveries and lower shipping costs.' 
  },
  { 
    imageSrc: '/roadmap.svg', 
    title: 'Real-time fleet and driver monitoring', 
    description: 'Prioritize driver safety and keep track of all the fleet operations.' 
  },
];

// Reusable card component for each benefit
const BenefitCard = ({ imageSrc, title, description }) => (
  <div className="bg-white p-6 rounded-lg border border-[#77bce8] shadow-lg transition-shadow duration-300 hover:shadow-blue-200 overflow-hidden cursor-pointer flex flex-col items-center text-center">
    <div className=" mb-4">
      <img src={imageSrc} alt={`${title} icon`} className="h-12 w-12" />
    </div>
    <h3 className="font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

// Main component for the "Benefits" section
const Logistics7 = () => {
  return (
    <div className="bg-white font-sans py-12 md:py-10">
      <div className="container mx-auto px-4 max-w-6xl">

        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Benefits of AI Software in Logistics and Transportation
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitsData.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <button className="border border-[#77bce8] text-gray-700 py-3 cursor-pointer px-8 rounded-md hover:bg-[#77bce8] hover:border-[#77bce8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200">
            Get started
          </button>
        </div>

      </div>
    </div>
  );
};

export default Logistics7;

