import React from 'react';

// This is the chevron component for the DESKTOP view, restored to the original border-based design
const ChevronStep = ({ title, isFirst }) => {
  const baseClasses = "relative flex items-center justify-center h-12 text-sm font-semibold text-white uppercase tracking-wider";
  const colorClasses = "bg-[#92c9ec]";

  return (
    <div className="flex-1 min-w-[150px]">
      <div className={`${baseClasses} ${colorClasses} px-4`}>
        {title}
        {/* This creates the RIGHT arrow point for ALL steps */}
        <div className="absolute right-0 top-0 w-0 h-0 border-t-[24px] border-t-transparent border-b-[24px] border-b-transparent border-l-[24px] border-l-white transform translate-x-full z-10"></div>
        
        {/* This creates the LEFT cutout, but only if it's NOT the first step */}
        {!isFirst && (
           <div className="absolute left-0 top-0 w-0 h-0 border-t-[24px] border-t-white border-b-[24px] border-b-white border-l-[24px] border-l-transparent transform -translate-x-full z-10"></div>
        )}
      </div>
    </div>
  );
};

const NLP8 = () => {
  const steps = [
    {
      title: 'Discovery',
      description: 'Requirements analysis and project estimation',
    },
    {
      title: 'Project Setup',
      description: 'Roadmap development and team setup',
    },
    {
      title: 'Development',
      description: 'Iterative project delivery',
    },
    {
      title: 'Live Release',
      description: 'Testing and feedback collecting',
    },
    {
      title: 'Support',
      description: 'Post project support',
    },
  ];

  return (
    <div className="py-10 bg-white font-sans">
      {/* Header */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">How we work</h2>
        <p className="text-gray-600">This is how we turn your idea into a reality.</p>
      </div>

      {/* --- Desktop Timeline (hidden on mobile) --- */}
      <div className="hidden md:block relative max-w-6xl mx-auto px-4">
        <div className="flex justify-between relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
              style={{ width: `${100 / steps.length}%` }}
            >
              <p className="text-sm text-gray-700 h-16 flex items-end justify-center px-2 pb-2">
                {step.description}
              </p>
              <div className="w-px h-6 bg-gray-300"></div>
              <div className="w-3 h-3 rounded-full bg-[#92c9ec] border-2 border-white shadow-md relative z-10"></div>
            </div>
          ))}
        </div>
        {/* Added mt-2 back to preserve original desktop spacing */}
        <div className="flex mt-2">
          {steps.map((step, index) => (
            <ChevronStep
              key={index}
              title={step.title}
              isFirst={index === 0}
            />
          ))}
        </div>
      </div>

      {/* --- Mobile Timeline (hidden on desktop) --- */}
      <div className="md:hidden max-w-md mx-auto px-4">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative pl-12 pb-8">
              {/* Circle Marker */}
              <div className="absolute left-4 top-1 w-3 h-3 rounded-full bg-[#92c9ec] border-2 border-white shadow -translate-x-1/2"></div>
              <div className="ml-4">
                <h3 className="font-bold text-lg text-gray-800">{step.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NLP8;

