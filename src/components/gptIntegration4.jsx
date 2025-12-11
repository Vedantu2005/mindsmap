import React, { useState, useEffect } from 'react';

const IndustriesSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const industries = [
    {
      icon: <img src="/icon-e-commerce.svg" alt="E-commerce Icon" className="w-16 h-16" />,
      title: 'E-commerce',
      color: 'text-blue-400'
    },
    {
      icon: <img src="/icon-advertising-2.svg" alt="Marketing Icon" className="w-16 h-16" />,
      title: 'Marketing & Advertising',
      color: 'text-blue-500'
    },
    {
      icon: <img src="/bi-logistic.svg" alt="Supply Chain Icon" className="w-16 h-16" />,
      title: 'Supply Chain & Logistics',
      color: 'text-blue-400'
    },
    {
      icon: <img src="/bi-fin-service.svg" alt="Financial Services Icon" className="w-16 h-16" />,
      title: 'Financial Services',
      color: 'text-blue-500'
    },
    {
      icon: <img src="/bi-health.svg" alt="Healthcare Icon" className="w-16 h-16" />,
      title: 'Healthcare & Pharma',
      color: 'text-blue-500'
    },
    {
      icon: <img src="/icon-manufacturing.svg" alt="Manufacturing Icon" className="w-16 h-16" />,
      title: 'Manufacturing',
      color: 'text-blue-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Industries</h1>
          <p className="text-gray-700 text-lg">
            We make generative AI work for your specific business case.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`flex flex-col items-start text-left p-6 rounded-lg border-4 border border-gray-100 shadow-sm
                          hover:shadow-xl hover:border-blue-300 transform hover:-translate-y-1 transition-all duration-300
                          ${industry.color}
                          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{
                transitionDelay: `${index * 100}ms`,
                minHeight: '180px'
              }}
            >
              <div className={`mb-4 transition-transform duration-300 hover:scale-110`}>
                {industry.icon}
              </div>
              <h3
                className={`text-xl font-semibold text-left ${
                  industry.title === 'Manufacturing' ? 'text-blue-500' : industry.color
                }`}
              >
                {industry.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Your Industry Button */}
        <div
          className={`flex justify-center transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <button className="px-8 py-3 border-2 border-gray-300 rounded-lg text-gray-700 font-medium text-lg hover:border-blue-500 hover:text-blue-500 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Your Industry
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndustriesSection;
