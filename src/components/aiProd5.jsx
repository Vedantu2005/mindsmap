import React from 'react';

// --- Reusable Feature Card Component (Top Section) ---
const FeatureCard = ({ iconSrc, title, subtitle, description, iconColorClass }) => {
  return (
    <div 
      className="flex flex-col items-center text-center p-6 sm:p-8 rounded-xl h-full
                bg-[#E0F7FF] border border-[#B3E5FC] 
                transition-all duration-300 ease-in-out transform hover:scale-[1.03] hover:shadow-xl cursor-pointer"
    >
      <div className={`w-22 h-22 flex items-center justify-center mb-4 ${iconColorClass}`}>
        {/* Icon from public folder */}
        <img src={iconSrc} alt={`${title} icon`} className="w-full h-full object-contain" />
      </div>
      <h3 className="text-xl font-bold text-[#0073B4] mb-2 leading-snug">
        {title}
      </h3>
      <h4 className="text-lg font-semibold text-[#005F92] mb-4">
        {subtitle}
      </h4>
      <p className="text-base text-[#444444] flex-grow leading-relaxed">
        {description}
      </p>
    </div>
  );
};

// --- Reusable Industry Card Component (Bottom Section) ---
const IndustryCard = ({ iconSrc, name }) => {
  return (
    <div 
      className="flex flex-col items-center text-center p-4 m-2 
                transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:text-[#0073B4] cursor-pointer"
    >
      <div className="w-22 h-22 sm:w-16 sm:h-16 flex items-center justify-center mb-2">
        {/* Icon from public folder */}
        <img src={iconSrc} alt={`${name} icon`} className="w-full h-full object-contain" />
      </div>
      <p className="text-base font-medium text-[#666666]">
        {name}
      </p>
    </div>
  );
};

// --- Main Component ---
const WhyWorkWithMindsmapAI = () => {
  // Data for the five feature cards
  const featureData = [
    {
      iconSrc: '/icon-badge-quality.svg', // Placeholder path
      title: '10 Years',
      subtitle: 'Experience',
      description: "Since 2018, we have been leading the way in innovation and empowering our clients' businesses.",
    },
    {
      iconSrc: '/icon-implementing.svg', // Placeholder path
      title: 'Strong',
      subtitle: 'Background',
      description: 'We started as part of Wargaming, which has given us extensive experience in AI consulting and integration into the product.',
    },
    {
      iconSrc: '/icon-vip.svg', // Placeholder path
      title: '150+ Unique',
      subtitle: 'Projects',
      description: 'An accomplished team with a strong expertise and a proven history of successful solutions across plenty of industries.',
    },
    {
      iconSrc: '/icon-three-man-2.svg', // Placeholder path
      title: '100+ Employees',
      subtitle: '', // Subtitle is empty for this card
      description: 'A rapidly expanding staff specializing in AI consulting and development, engineering and solutions integration.',
    },
    {
      iconSrc: '/icon-global.svg', // Placeholder path
      title: 'Global Name',
      subtitle: '', // Subtitle is empty for this card
      description: 'A prominent pioneer in world-class artificial intelligence and data science software development.',
    },
  ];

  // Data for the industry icons (8 items)
  const industryData = [
    { iconSrc: '/icon-finance-banking-alt.svg', name: 'Finance' }, // Placeholder path
    { iconSrc: '/icon-car.svg', name: 'Logistics & Transportation' }, // Placeholder path
    { iconSrc: '/icon-manufacturing.svg', name: 'Manufacturing & Automotive' }, // Placeholder path
    { iconSrc: '/icon-advertising-2.svg', name: 'E-commerce' }, // Placeholder path
    { iconSrc: '/icon-healtcare.svg', name: 'Pharma & Healthcare' }, // Placeholder path
    { iconSrc: '/icon-marketing-h.svg', name: 'Marketing' }, // Placeholder path
    { iconSrc: '/icon-gaming.svg', name: 'Gaming & Entertainment' }, // Placeholder path
    { iconSrc: '/icon-ecommerce-alt.svg', name: 'Retail' }, // Placeholder path
  ];

  return (
    <div className="font-sans py-16 px-4 sm:px-8 max-w-7xl mx-auto">
      
      {/* Section 1: Why Work With Mindsmap AI (Features) */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-4 text-[#333333]">
          Why Work With Mindsmap AI
        </h2>
        <p className="text-center text-lg max-w-4xl mx-auto mb-12 text-[#666666]">
          With a proven track record of providing pioneering technology and specialist insight, we enable companies to innovate, optimize operations, and achieve sustainable growth.
        </p>

        {/* Feature Cards Grid (5 columns on large screens) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {featureData.map((feature, index) => (
            <FeatureCard 
              key={index} 
              {...feature} 
            />
          ))}
        </div>
      </section>

      
      {/* Section 2: Industries We Work with */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-4 text-[#333333]">
          Industries We Work with
        </h2>
        <p className="text-center text-base max-w-4xl mx-auto mb-12 text-[#666666]">
          Since 2018, we've been helping businesses from various industries adopt AI.
        </p>

        {/* Industry Icons Grid (4 columns, then 4 columns) */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 justify-items-center">
          {/* The grid is setup with 4 columns on small screens, and 8 columns on medium screens+ 
              to ensure the 8 items span two rows of 4 perfectly as shown in the image. */}
          {industryData.map((industry, index) => (
            <IndustryCard 
              key={index} 
              {...industry} 
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default WhyWorkWithMindsmapAI;