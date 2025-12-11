import React from 'react';

// Data structure for the process steps
const processSteps = [
  {
    number: 1,
    title: "Advisory",
    description: "Strategize your adoption, migration, or infrastructure optimization. Reduce operational risks, employ the best-fit migration strategy, and elevate your distributed architecture. We balance technology, risks, and costs to let you capture the full cloud potential.",
  },
  {
    number: 2,
    title: "Infrastructure Migration",
    description: "Move your workloads off-premises to optimize costs of data processing and access innovation agility with our migration IT clouds services. Let us help you securely migrate to a new infrastructure with the least disruption and minimized risks.",
  },
  {
    number: 3,
    title: "Managed Services",
    description: "Shuffle off the burden of managing your cloud assets. Hand over data governance, automate yourself out of performance monitoring, and transfer your configuration management to our skilled team of cloud developers.",
  },
  {
    number: 4,
    title: "Cloud Software Development",
    description: "Scale your business with custom elastic solutions that grow in line with your needs. Tap into our deep cloud development expertise and domain proficiency to deploy complex public, private, or hybrid distributed infrastructures with ease.",
  },
];

// Component for a single step in the timeline
const TimelineItem = ({ step, isLast }) => {
  return (
    <div className="relative w-full py-6 md:py-8 flex flex-col md:flex-row items-center justify-center">
      {/* LEFT SIDE: Title and Number (Right-aligned for large screens) */}
      <div className="md:w-1/2 w-full md:pr-16 text-center md:text-right mb-4 md:mb-0">
        <h4 className="font-bold text-base sm:text-lg text-gray-800 hidden md:block">
          {step.number}. {step.title}
        </h4>
      </div>

      {/* CENTER: Dot Marker */}
      <div className="absolute md:static left-1/2 transform md:transform-none -translate-x-1/2 md:-translate-x-0 top-6 md:top-auto h-4 w-4 rounded-full bg-amber-500 border-4 border-white z-10 shadow-lg"></div>

      {/* RIGHT SIDE: Description */}
      <div className="md:w-1/2 w-full md:pl-16 text-center md:text-left">
        {/* Title for mobile view */}
        <h4 className="font-bold text-base sm:text-lg text-gray-800 mb-2 md:hidden">
          {step.number}. {step.title}
        </h4>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-sm mx-auto md:mx-0">
          {step.description}
        </p>
      </div>
    </div>
  );
};

// Main Application Component
const App = () => {
  return (
    <div className="min-h-screen bg-white font-sans p-4 sm:p-6 md:p-12">
      {/* Header Section */}
      <header className="text-center mb-8 sm:mb-10 md:mb-16 max-w-3xl mx-auto px-2">
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
          How can we help your company?
        </h1>
        <p className="text-sm sm:text-base text-gray-600">
          A certified cloud development partner, Mindssmap AI supports companies at each stage of their digital transformation journey.
        </p>
      </header>

      {/* Timeline Section */}
      <div className="max-w-4xl mx-auto relative">
        {/* Vertical Line */}
        <div
          className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-amber-400"
          aria-hidden="true"
        ></div>

        {/* Timeline Items */}
        <div className="flex flex-col items-center space-y-8 sm:space-y-10 md:space-y-12">
          {processSteps.map((step, index) => (
            <TimelineItem
              key={step.number}
              step={step}
              isLast={index === processSteps.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
