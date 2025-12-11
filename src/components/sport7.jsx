import React from 'react';

const reasons = [
  {
    icon: '/medal.svg',
    title: 'Proven Experience',
    description: 'We have a team of 60+ engineers with senior-level tech expertise and dozens of sports and wellness related projects.',
  },
  {
    icon: '/learning.svg', 
    title: 'Proprietary Technologies',
    description: 'At Mindsmap AI, we work with convolutional neural networks driven by AI.',
  },
  {
    icon: '/chat.svg',
    title: 'Clear Communication',
    description: "We’re transparent, flexible, and always keeping clients in the loop.  ",
  },
];

const Sport7 = () => {
  return (
    <div className="bg-white font-sans antialiased text-gray-800">
      <div className="container mx-auto px-4 py-16 sm:py-10 -mt-15">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-3xl font-bold tracking-tight text-gray-900">
            Why Mindsmap AI?
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            We’ve got plenty of sports projects under the belt, and ready to help you with yours.
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

export default Sport7;
