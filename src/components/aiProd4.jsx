import React from 'react';

// --- Reusable Competence Card Component ---
const CompetenceCard = ({ iconSrc, title, description }) => {
  return (
    <div 
      className="flex items-start space-x-4 p-4 rounded-lg 
                transition-transform duration-300 ease-in-out transform 
                hover:scale-[1.02] hover:shadow-lg hover:bg-gray-50 cursor-pointer"
    >
      <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center">
        {/* Icon from public folder */}
        <img src={iconSrc} alt={`${title} icon`} className="w-full h-full object-contain" />
      </div>
      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-[#333333] mb-1">
          {title}
        </h3>
        <p className="text-base text-[#666666] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

// --- Main Competence Section Component ---
const OurCompetence = () => {
  // Data for the competence cards, with paths assuming icons are in the public folder
  const competenceItems = [
    {
      iconSrc: '/icon-deep-learning.svg', // Placeholder path
      title: 'Data Science and Analytical Insights',
      description: 'Dive into advanced data science and analytical insights with our expert-driven solutions. Harness the power of data to uncover actionable insights and drive informed decisions for your business.',
    },
    {
      iconSrc: '/icon-data-analysis.svg', // Placeholder path
      title: 'Data Strategies',
      description: 'Explore strategic data solutions designed to optimize your business operations and drive growth. From data collection and analysis to implementation, our tailored strategies empower you to leverage data effectively.',
    },
    {
      iconSrc: '/icon-cost-4.svg', // Placeholder path
      title: 'Business Analytics',
      description: 'Evaluate your business opportunities with our comprehensive business intelligence solutions. Gain actionable insights and make informed decisions that propel your organization forward.',
    },
    {
      iconSrc: '/icon-engine-mobile-app.svg', // Placeholder path
      title: 'AI In Product Development',
      description: 'Elevate your product development with AI-driven solutions tailored to meet market demands. Our software streamline processes, enhance efficiency, ensuring your products remain at the forefront of technological advancement.',
    },
    {
      iconSrc: '/icon-ai-call-center-alt.svg', // Placeholder path
      title: 'AI Product Consulting',
      description: 'Convert your business with an expert consultancy that transcreates complex problems into simple solutions. From strategy development to implementation, our consultancy provides a personalized approach to any sector.',
    },
    {
      iconSrc: '/icon-structured-data.svg', // Placeholder path
      title: 'Data Infrastructure Engineering',
      description: 'Strive to optimize your data infrastructure with our expert engineering services. Our design and deployment of scalable solutions will improve the management of any kind of database.',
    },
  ];

  return (
    <div className="font-sans py-16 px-4 sm:px-8 max-w-6xl mx-auto">
      {/* Section Title and Description */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-[#333333] mb-4">
          Our Competence
        </h2>
        <p className="text-lg text-[#666666] max-w-4xl mx-auto leading-relaxed">
          Mindsmap AI is your business AI product consultant and software developer to help you overcome complex challenges and improve business performance. Our expert team collaborates closely with clients to create distinctive strategies that add significant value and streamline operations.
        </p>
      </div>

      {/* Competence Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        {competenceItems.map((item, index) => (
          <CompetenceCard 
            key={index} 
            iconSrc={item.iconSrc} 
            title={item.title} 
            description={item.description} 
          />
        ))}
      </div>
    </div>
  );
};

export default OurCompetence;