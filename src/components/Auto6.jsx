import React from 'react';

// Data for the benefits section. 
// Using local paths for icons as requested.
const benefitsData = [
  {
    icon: '/engineering.svg',
    title: 'Data-driven Production',
    subtitle: 'Processes'
  },
  {
    icon: '/visualization.svg',
    title: 'Improved Manufacturing',
    subtitle: 'Yield'
  },
  {
    icon: '/cost-2.svg',
    title: 'Reduced Operational',
    subtitle: 'Costs'
  },
  {
    icon: '/design.svg',
    title: 'Advanced Simulation',
    subtitle: 'Design'
  },
  {
    icon: '/like.svg',
    title: 'Proactive Quality-issue',
    subtitle: 'Management'
  },
  {
    icon: '/productivity.svg',
    title: 'Safer Operational',
    subtitle: 'Environment'
  }
];

const BenefitItem = ({ icon, title, subtitle }) => (
  <div className="flex flex-col items-center text-center p-4">
    <div className="flex items-center justify-center mb-4">
       {/* The image source now directly uses the icon path from benefitsData */}
      <img src={icon} alt={`${title} icon`} className="w-18 h-18" />
    </div>
    <h3 className="text-lg font-medium text-gray-800">{title}</h3>
    <p className="text-lg font-medium text-gray-800">{subtitle}</p>
  </div>
);


const Auto6 = () => {
  return (
    <div className="bg-white font-sans py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl md:text-3xl font-bold text-gray-800  mb-4">
            Benefits for Your Business
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Gain unrivaled AI capabilities to remain competitive in the complex manufacturing landscape.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mt-12">
          {benefitsData.map((benefit, index) => (
            <BenefitItem key={index} {...benefit} />
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="border border-[#77bce8] cursor-pointer text-[#141414] hover:bg-[#77bce8] hover:text-white transition-colors duration-300 font-medium py-3 px-8 rounded-md text-lg">
            Start getting value from AI now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Auto6;