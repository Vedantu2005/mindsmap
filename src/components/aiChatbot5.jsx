import React, { useState, useEffect } from 'react';

const LLMUseCases = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const useCases = [
    {
      title: 'Content Generation',
      description: 'Create a virtual assistant that streamlines text and video content generation, facilitates content distribution across channels, and provides tailored experiences to customers.'
    },
    {
      title: 'Customer Support',
      description: 'Leverage our AI chatbot development service for websites to get a custom virtual assistant for your clients that is always on to answer complex questions with no human input.'
    },
    {
      title: 'Self-Service Environments',
      description: 'Make self-service capabilities a part of your business strategy and enable your clients to explore your services at their own pace and automate transactions — all within the chat.'
    },
    {
      title: 'Product Recommendations',
      description: 'Tap into our conversational AI chatbot development service for E-commerce to enable personalized buying experiences, with your chatbot acting as a dedicated shop assistant.',
      hasLink: true
    },
    {
      title: 'Analysis and Summarization',
      description: 'Let our business development virtual assistants automate time-consuming analysis tasks, including report generation, SWOT analysis, market trend and ICP analysis, and more.'
    },
    {
      title: 'Scraping',
      description: 'Support your strategy with a wealth of actionable insights by automating data scraping process with our custom chatbots cut out for your business workflows.'
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Large Language Models Use Cases
          </h1>
          <p className="text-gray-700 text-lg">
            Gain a competitive advantage in the market by being AI-first.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className={`transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Yellow accent line */}
              <div className="w-12 h-1 bg-yellow-400 mb-4"></div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {useCase.title}
              </h3>
              
              <p className="text-gray-700 leading-relaxed">
                {useCase.hasLink ? (
                  <>
                    Tap into our conversational AI chatbot{' '}
                    <span className="text-blue-600 hover:text-blue-700 cursor-pointer underline">
                      development service for E-commerce
                    </span>{' '}
                    to enable personalized buying experiences, with your chatbot acting as a dedicated shop assistant.
                  </>
                ) : (
                  useCase.description
                )}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`relative bg-gradient-to-r from-cyan-100 to-blue-100 rounded-3xl p-12 overflow-hidden transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
          {/* Decorative circles */}
          <div className="absolute left-8 bottom-8 w-16 h-16 rounded-full bg-blue-200 opacity-40"></div>
          <div className="absolute left-16 bottom-16 w-12 h-12 rounded-full bg-blue-300 opacity-40"></div>
          <div className="absolute left-12 bottom-24 w-10 h-10 rounded-full bg-blue-200 opacity-40"></div>
          <div className="absolute left-24 bottom-12 w-8 h-8 rounded-full bg-blue-300 opacity-40"></div>
          <div className="absolute left-6 bottom-32 w-14 h-14 rounded-full bg-blue-200 opacity-40"></div>

          {/* Chat icon */}
          <div className="absolute right-12 top-1/2 transform -translate-y-1/2">
            <div className="relative">
              <div className="w-20 h-16 bg-blue-300 rounded-xl opacity-60 flex items-center justify-center">
                <div className="space-y-1">
                  <div className="w-10 h-1.5 bg-white rounded"></div>
                  <div className="w-10 h-1.5 bg-white rounded"></div>
                  <div className="w-6 h-1.5 bg-white rounded"></div>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center text-white text-xs font-bold opacity-60">
                ?
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Add a Layer of Automation to Your Mission-Critical Workflows
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              Transform your business processes with custom AI-powered chatbots.
            </p>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LLMUseCases;