import React from 'react';

const reasons = [
  {
    icon: '/implementing.svg',
    title: 'AI Financial and Legal Services Development',
    description: 'We develop industry-specific and client-centric software that boosts business growth.',
  },
  {
    icon: '/cup.svg', 
    title: 'Top Tech Talent',
    description: 'A strong team of 60+ engineers ready to turn your project idea into reality.',
  },
  {
    icon: '/five-stars.svg',
    title: 'Trustworthy Tech Vendor',
    description: "Transparency, on-time delivery and unbeatable ideas for your project to become a success.",
  },
];

const FinTech8 = () => {
  return (
    <div className="bg-white font-sans antialiased text-gray-800">
      <div className="container mx-auto px-4 py-10 sm:py-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-3xl font-bold tracking-tight text-gray-900">
            Why Mindsmap AI?
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            Let our team of experts help you make use of AI in legal and financial services.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {reasons.map((reason) => (
            <div 
              key={reason.title} 
              className="text-center flex flex-col items-center"
            >
              <img 
                src={reason.icon} 
                alt={`${reason.title} icon`} 
                className="h-16 w-16 mb-6"
                // Adding a fallback style in case the SVG doesn't load
                onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.textContent = 'Icon failed to load'; }}
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FinTech8;
