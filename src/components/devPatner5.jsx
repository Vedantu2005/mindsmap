import React, { useState, useEffect } from 'react';

const GenerativeAIUseCases = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const useCases = [
    {
      number: '1',
      title: 'Generative AI Customer Service',
      description: 'Ease the strain on your customer support team, enable your chatbots to create more natural interactions with customers, and provide lightning-fast responses to customer issues.',
      color: 'bg-blue-100 text-blue-300'
    },
    {
      number: '2',
      title: 'Real-Time Personalization',
      description: 'Automate personalized messaging, target specific customer segments, generate high-converting sales copy, and serve tailored marketing offers based on thorough analysis of customer data.',
      color: 'bg-blue-100 text-blue-300'
    },
    {
      number: '3',
      title: 'Customer and Business Analytics',
      description: 'Broaden your scope of analysis by combing through troves of data, automate insight generation, pave the way for cost-effective data analysis, and turn your dashboards into your own data consultant.',
      color: 'bg-blue-100 text-blue-300'
    },
    {
      number: '4',
      title: 'Business Process Automation',
      description: 'Complete business processes with minimal human intervention. From document management to procurement, generative AI apps automate resource-intensive tasks across all functional areas.',
      color: 'bg-blue-100 text-blue-300'
    }
  ];

  const approachSteps = [
    {
      title: 'Requirements',
      subtitle: 'Identification',
      icon: '📄',
      color: 'from-orange-400 to-orange-500'
    },
    {
      title: 'Data Audit',
      subtitle: 'and Analysis',
      icon: '🔍',
      color: 'from-orange-400 to-orange-500'
    },
    {
      title: 'Data Collection',
      subtitle: '',
      icon: '💾',
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Model Design',
      subtitle: 'and Training',
      icon: '🧠',
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Model Fine-Tuning',
      subtitle: 'and Testing',
      icon: '⚙️',
      color: 'from-orange-600 to-red-500'
    },
    {
      title: 'Deployment',
      subtitle: '',
      icon: '🚀',
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'Maintenance',
      subtitle: '',
      icon: '🔧',
      color: 'from-red-500 to-red-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
      {/* Use Cases Section */}
      <div className="max-w-7xl mx-auto mb-24">
        <div className={`text-center mb-12 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Generative AI Use Cases
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Reimagine your application landscape with granular personalization and at-scale analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start space-x-6">
                <div className={`${useCase.color} rounded-2xl w-24 h-24 flex items-center justify-center flex-shrink-0 text-6xl font-bold transition-transform duration-300 hover:scale-110`}>
                  {useCase.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How We Approach Section */}
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How We Approach Your AI Project
          </h2>
          <p className="text-gray-600 text-lg">
            Following your project requirements, we build custom generative AI solutions with added business value.
          </p>
        </div>

        {/* Process Flow */}
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="relative">
            {/* Background Progress Bar */}
            <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-200 transform -translate-y-1/2 z-0" 
                 style={{ left: '4rem', right: '4rem' }}></div>
            
            {/* Animated Progress Bar */}
            <div 
              className="absolute top-1/2 h-2 bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 transform -translate-y-1/2 z-0 transition-all duration-2000 ease-out"
              style={{ 
                left: '4rem',
                width: isVisible ? 'calc(100% - 8rem)' : '0%'
              }}
            ></div>

            {/* Steps */}
            <div className="flex items-center justify-between relative z-10">
              {approachSteps.map((step, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${800 + index * 100}ms` }}
                >
                  {/* Top Label (for alternating steps) */}
                  {index % 2 === 1 && (
                    <div className="text-center mb-6 h-16 flex flex-col justify-end">
                      <h4 className="font-semibold text-gray-900 text-sm leading-tight">
                        {step.title}
                      </h4>
                      {step.subtitle && (
                        <p className="text-gray-900 text-sm leading-tight">
                          {step.subtitle}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Circle */}
                  <div className={`w-32 h-32 rounded-full bg-white border-8 ${
                    index < 3 ? 'border-orange-500' : index < 5 ? 'border-orange-600' : 'border-red-500'
                  } flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:shadow-xl shadow-lg`}>
                    <span className="text-4xl">{step.icon}</span>
                  </div>

                  {/* Bottom Label (for alternating steps) */}
                  {index % 2 === 0 && (
                    <div className="text-center mt-6 h-16 flex flex-col justify-start">
                      <h4 className="font-semibold text-gray-900 text-sm leading-tight">
                        {step.title}
                      </h4>
                      {step.subtitle && (
                        <p className="text-gray-900 text-sm leading-tight">
                          {step.subtitle}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerativeAIUseCases;