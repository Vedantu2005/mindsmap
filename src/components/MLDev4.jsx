import React from 'react';

// Define the steps for the ML lifecycle
const cycleSteps = [
  {
    id: 1,
    title: '1. Discovery',
    description: 'You explain your business specifics and goals and share your pain points to gain insights into ML capabilities and an approach designed by our machine learning developers.',
    position: 'top-right', 
  },
  {
    id: 2,
    title: '2. Preparation of the ML model',
    description: 'This stage includes all activities aimed at preparing an effective ML model, such as data preparation, data mining, data engineering, model training, and verification.',
    position: 'bottom-right',
  },
  {
    id: 3,
    title: '3. Model evaluation',
    description: 'At this stage, we prove that chosen ML use cases can (or cannot) deliver tangible value to your organization — and to those choose those worth moving forward with.',
    position: 'bottom-center',
  },
  {
    id: 4,
    title: '4. Model deployment',
    description: 'Our team builds automated pipelines, scales, and deploys your machine learning app into production. We also adjust algorithms to meet your desired benchmarks.',
    position: 'bottom-left',
  },
  {
    id: 5,
    title: '5. Monitoring & maintenance',
    description: "Delivering the solution isn't the end of the journey. We'll continue to work with you and make updates and changes to the system's environment as required.",
    position: 'top-left',
  },
];

// Helper function to determine Tailwind classes based on position for the complex desktop layout
const getPositionClasses = (position) => {
  switch (position) {
    case 'top-right':
      return 'top-10 right-0 lg:text-left pt-0 pl-16'; 
    case 'bottom-right':
      return 'bottom-10 right-0 lg:text-left pt-20 pl-16'; 
    case 'bottom-center':
      // UPDATED: Increased top padding to pt-52 to ensure clear separation from the line.
      return 'bottom-0 left-1/2 transform -translate-x-1/2 pt-65'; 
    case 'bottom-left':
      return 'bottom-10 left-0 lg:text-right pt-20 pr-16'; 
    case 'top-left':
    default:
      return 'top-10 left-0 lg:text-right pt-0 pr-16'; 
  }
};

const MLCycle = () => {
  // Mobile/Stacked view component
  const StepCard = ({ step }) => (
    <div className="flex flex-col mb-8 p-4 border-l-4 border-yellow-500 bg-gray-50 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold text-gray-800 mb-1">{step.title}</h3>
      <p className="text-gray-600">{step.description}</p>
    </div>
  );
  
  // Custom SVG to draw the connecting lines and dots
  const CycleSVG = () => (
    <svg viewBox="0 0 500 500" className="w-full h-full">
        <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#FFB800" />
            </marker>
        </defs>

        {/* Outer dashed circle */}
        <circle cx="250" cy="250" r="200" stroke="#FFB800" fill="none" strokeDasharray="4 8" strokeWidth="2"/>
        
        {/* NEW: Solid circle in between the dashed ones (radius 150) */}
        <circle cx="250" cy="250" r="150" stroke="#FFB800" fill="none" strokeWidth="3"/>

        {/* Inner dashed circle */}
        <circle cx="250" cy="250" r="100" stroke="#FFB800" fill="none" strokeDasharray="4 4" strokeWidth="2"/>

        {/* Lines connecting text boxes to the cycle (using coordinates based on 500x500 viewBox) */}
        <g stroke="#FFB800" strokeWidth="2">
            {/* 1. Discovery (Top Right) - From text block (490, 150) to dot (382, 138) */}
            <line x1="490" y1="150" x2="390" y2="150" />
            <line x1="390" y1="150" x2="382" y2="138" />
            
            {/* 2. Preparation (Middle Right) - From text block (490, 360) to dot (423, 353) */}
            <line x1="490" y1="360" x2="430" y2="360" />
            <line x1="430" y1="360" x2="423" y2="353" />
            
            {/* 3. Evaluation (Bottom Center) - From dot (250, 405) straight down to the text block's approximate top edge (250, 500) */}
            <line x1="250" y1="405" x2="250" y2="500" />
            
            {/* 4. Deployment (Middle Left) - From text block (10, 360) to dot (77, 353) */}
            <line x1="10" y1="360" x2="70" y2="360" />
            <line x1="70" y1="360" x2="77" y2="353" />
            
            {/* 5. Monitoring (Top Left) - From text block (10, 150) to dot (118, 138) */}
            <line x1="10" y1="150" x2="110" y2="150" />
            <line x1="110" y1="150" x2="118" y2="138" />
        </g>
        
        {/* Place Markers (Dots on the circle) */}
        <g fill="#FFB800">
            {/* 1. Discovery (Top Right) */}
            <circle cx="382" cy="138" r="5" />
            {/* 2. Preparation (Middle Right) */}
            <circle cx="423" cy="353" r="5" />
            {/* 3. Evaluation (Bottom Center) */}
            <circle cx="250" cy="405" r="5" />
            {/* 4. Deployment (Middle Left) */}
            <circle cx="77" cy="353" r="5" />
            {/* 5. Monitoring (Top Left) */}
            <circle cx="118" cy="138" r="5" />
        </g>
    </svg>
  );

  return (
    // UPDATED: Reduced vertical padding from py-24 to py-16
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white font-sans">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Header Section */}
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">
          Machine Learning Model Development Life Cycle
        </h1>
        {/* UPDATED: Reduced bottom margin from mb-16 to mb-12 */}
        <p className="max-w-3xl mx-auto text-gray-500 text-lg mb-12">
          At Mindsmap AI, we have developed a streamlined system for turning your ML ideas into reality. From planning to 
          maintenance, we work to adhere to businesses' needs and help you scale up your presence in the market.
        </p>

        {/* --- Mobile View: Stacked Cards (Hidden on Large Screens) --- */}
        <div className="lg:hidden px-4">
          {cycleSteps.map(step => (
            <StepCard key={step.id} step={step} />
          ))}
        </div>

        {/* --- Desktop View: Cycle Diagram (Hidden on Mobile/Tablet) --- */}
        <div className="hidden lg:block relative w-full max-w-5xl mx-auto" style={{ height: '700px' }}>
          
          {/* Central Diagram: SVG for Circles, Dots, and Lines */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[500px] h-[500px] relative"> 
                <CycleSVG />
            </div>
          </div>

          {/* Step Text Blocks - positioned absolutely */}
          {cycleSteps.map((step) => (
            <div 
              key={step.id} 
              className={`absolute w-1/3 h-1/2 p-2 ${getPositionClasses(step.position)}`} 
              style={{ maxWidth: '300px' }} 
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2 leading-tight">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default MLCycle;
