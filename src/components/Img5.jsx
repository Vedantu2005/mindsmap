import React from 'react';

const Img5 = () => {
  const perks = [
    'Faster and safer visual data processing',
    'Optimized business processes',
    'Enhanced performance',
    'Increased profitability',
    'Reduced support costs',
  ];

  return (
    <div className="bg-white py-12 sm:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-10 sm:mb-16">
          How You Can Use It
        </h2>

        {/* Content Grid: flex-col for mobile, lg:flex-row for desktop */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Left Column: Image with Decorative Glow */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              
              {/* Image Placeholder: Replace src with your image path */}
              <img 
                src="/containers.webp" 
                alt="Container identification on a mobile screen" 
                className="relative w-full"
              />
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="w-full lg:w-1/2 text-gray-600">
            <p className="leading-relaxed mb-6">
              Implementation and integration of custom image recognition and picture analysis solutions empower machines to replicate human vision and the ability to identify objects in day-to-day reality. ML algorithms enable the recognition of objects and people on raw images with quite low error rates.
            </p>
            <p className="leading-relaxed mb-6">
              At Mindswap AI, we train powerful ML algorithms to fuel custom image object recognition software that helps gather, recognize, analyze visual data and present accurate statistics.
            </p>
            <p className="leading-relaxed mb-6">
              Custom image recognition software development by Mindswap AI can give your business the following perks:
            </p>
            
            {/* Perks List */}
            <ul className="space-y-3">
              {perks.map((perk, index) => (
                <li key={index} className="flex items-center">
                  <span className="flex-shrink-0 w-2.5 h-2.5 bg-[#77bce8] rounded-full mr-3"></span>
                  <span>{perk}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Img5;

