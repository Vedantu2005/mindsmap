import React, { useState, useEffect } from 'react';

export default function LLMIntegrationSteps() {
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    // Reveal cards one by one
    const timer1 = setTimeout(() => setVisibleCards([0]), 0);
    const timer2 = setTimeout(() => setVisibleCards([0, 1]), 1000);
    const timer3 = setTimeout(() => setVisibleCards([0, 1, 2]), 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Integrating Large Language Learning Models, Friction-Free
          </h2>
          <p className="text-gray-600 text-lg">
            Our developers seamlessly weave conversational AI into your infrastructure.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection arrows */}
          <div className="hidden md:block absolute top-48 left-1/3 transform -translate-x-1/2">
            <svg width="60" height="40" viewBox="0 0 60 40" fill="none" className="text-blue-400">
              <path d="M0 20h50M50 20l-10-10M50 20l-10 10" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <div className="hidden md:block absolute top-48 left-2/3 transform -translate-x-1/2">
            <svg width="60" height="40" viewBox="0 0 60 40" fill="none" className="text-blue-400">
              <path d="M0 20h50M50 20l-10-10M50 20l-10 10" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>

          {/* Step 1 */}
          <div 
            className={`border-2 border-dashed border-blue-300 rounded-2xl p-8 hover:border-blue-500 hover:shadow-lg transition-all duration-300 transform ${
              visibleCards.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' }}
          >
            <div className="text-center mb-6">
              <p className="text-gray-600 font-semibold mb-2">Step 1</p>
              <h3 className="text-xl font-bold text-gray-900">
                DATA<br/>PREPARATION
              </h3>
            </div>

            <div className="space-y-4">
              <div className="bg-blue-400 text-white rounded-lg py-4 px-6 text-center font-semibold hover:bg-blue-500 transition-colors duration-300 cursor-pointer">
                Client dataset
              </div>

              <div className="text-center text-gray-700 italic py-2">
                and/or
              </div>

              <div className="bg-blue-400 text-white rounded-lg py-4 px-6 text-center font-semibold hover:bg-blue-500 transition-colors duration-300 cursor-pointer">
                Indexed documents
              </div>

              <div className="mt-6">
                <p className="text-sm text-gray-700 italic text-center leading-relaxed">
                  If the client does not have data, we can offer different solutions: for example, parsing or buying datasets
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div 
            className={`border-2 border-dashed border-blue-300 rounded-2xl p-8 hover:border-blue-500 hover:shadow-lg transition-all duration-300 transform ${
              visibleCards.includes(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transition: 'opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s' }}
          >
            <div className="text-center mb-6">
              <p className="text-gray-600 font-semibold mb-2">Step 2</p>
              <h3 className="text-xl font-bold text-gray-900">
                MODEL DEPLOYMENT AND<br/>TRAINING
              </h3>
            </div>

            <div className="space-y-4">
              <div className="bg-blue-400 text-white rounded-lg py-4 px-6 text-center font-semibold hover:bg-blue-500 transition-colors duration-300 cursor-pointer">
                Arbitration model
              </div>

              <div className="my-4">
                <p className="text-sm text-gray-700 italic text-center leading-relaxed">
                  Limits the functionality so that the client does not chat on any topics
                </p>
              </div>

              <div className="bg-blue-400 text-white rounded-lg py-4 px-6 text-center font-semibold hover:bg-blue-500 transition-colors duration-300 cursor-pointer">
                LLM Model
              </div>

              <div className="mt-6">
                <p className="text-sm text-gray-700 italic text-center leading-relaxed">
                  Ground of idea
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div 
            className={`border-2 border-dashed border-blue-300 rounded-2xl p-8 hover:border-blue-500 hover:shadow-lg transition-all duration-300 transform ${
              visibleCards.includes(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transition: 'opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s' }}
          >
            <div className="text-center mb-6">
              <p className="text-gray-600 font-semibold mb-2">Step 3</p>
              <h3 className="text-xl font-bold text-gray-900">
                CONNECTING WITH<br/>ENVIRONMENT
              </h3>
            </div>

            <div className="space-y-4">
              <div className="bg-blue-400 text-white rounded-lg py-4 px-6 text-center font-semibold hover:bg-blue-500 transition-colors duration-300 cursor-pointer">
                I/O interfaces
              </div>

              <div className="my-4">
                <p className="text-sm text-gray-700 italic text-center leading-relaxed">
                  Where the user will interact with the model. This is usually a chat interface or API.
                </p>
              </div>

              {/* Network diagram illustration */}
              <div className="flex justify-center items-center h-40 relative">
                <svg viewBox="0 0 200 150" className="w-full h-full">
                  {/* Network nodes */}
                  <circle cx="100" cy="75" r="8" fill="#93C5FD" className="opacity-60"/>
                  <circle cx="50" cy="50" r="6" fill="#93C5FD" className="opacity-60"/>
                  <circle cx="150" cy="50" r="6" fill="#93C5FD" className="opacity-60"/>
                  <circle cx="50" cy="100" r="6" fill="#93C5FD" className="opacity-60"/>
                  <circle cx="150" cy="100" r="6" fill="#93C5FD" className="opacity-60"/>
                  <circle cx="100" cy="30" r="6" fill="#93C5FD" className="opacity-60"/>
                  <circle cx="100" cy="120" r="6" fill="#93C5FD" className="opacity-60"/>
                  
                  {/* Connection lines */}
                  <line x1="100" y1="75" x2="50" y2="50" stroke="#93C5FD" strokeWidth="1" className="opacity-40"/>
                  <line x1="100" y1="75" x2="150" y2="50" stroke="#93C5FD" strokeWidth="1" className="opacity-40"/>
                  <line x1="100" y1="75" x2="50" y2="100" stroke="#93C5FD" strokeWidth="1" className="opacity-40"/>
                  <line x1="100" y1="75" x2="150" y2="100" stroke="#93C5FD" strokeWidth="1" className="opacity-40"/>
                  <line x1="100" y1="75" x2="100" y2="30" stroke="#93C5FD" strokeWidth="1" className="opacity-40"/>
                  <line x1="100" y1="75" x2="100" y2="120" stroke="#93C5FD" strokeWidth="1" className="opacity-40"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}