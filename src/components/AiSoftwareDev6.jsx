import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const HowWeSolveProblems = () => {
  const [visibleSteps, setVisibleSteps] = useState([]);
  
  useEffect(() => {
    // Animate steps appearing one by one
    const timers = [];
    [0, 1, 2, 3].forEach((index) => {
      const timer = setTimeout(() => {
        setVisibleSteps(prev => [...prev, index]);
      }, index * 500);
      timers.push(timer);
    });
    
    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  const steps = [
    {
      number: 1,
      title: "Strategy & Consulting",
      description: "Reviewing your current capabilities and business goals to create your digital transformation and AI implementation plan.",
      color: "from-orange-400 to-orange-500"
    },
    {
      number: 2,
      title: "Proof of Value",
      description: "Rapidly develop a proof-of-concept (PoC) to validate and confirm the value of AI-driven business cases.",
      color: "from-red-400 to-red-500"
    },
    {
      number: 3,
      title: "Minimum Viable Product",
      description: "Building an MVP solution to make it available for your customers and allow you to test your product idea and gather customer feedback.",
      color: "from-yellow-400 to-yellow-500"
    },
    {
      number: 4,
      title: "Maintenance",
      description: "Improvements to ensure product performance, enhance user experience and continuously keep up with the changing environment.",
      color: "from-orange-400 to-yellow-500"
    }
  ];

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16 animate-fade-in">
          How We Solve Problems
        </h1>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-400 via-red-400 to-yellow-500 rounded-full opacity-30"></div>
          
          {/* Animated Timeline Progress */}
          <div 
            className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-orange-400 via-red-400 to-yellow-500 rounded-full transition-all duration-2000 ease-out"
            style={{
              height: `${(visibleSteps.length / steps.length) * 100}%`,
              boxShadow: '0 0 20px rgba(251, 146, 60, 0.5)'
            }}
          ></div>
          
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-20 last:mb-0 transition-all duration-700 transform ${
                visibleSteps.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              {/* Mobile Layout */}
              <div className="md:hidden flex items-start w-full">
                {/* Step Circle */}
                <div className="relative z-10 mr-6">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} shadow-lg flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:rotate-12`}>
                    <span className="text-white font-bold text-xl">{step.number}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <ChevronDown className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-gray-400 animate-bounce" size={20} />
                  )}
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-white p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
                </div>
              </div>
              
              {/* Desktop Layout */}
              <div className="hidden md:flex items-center w-full">
                {index % 2 === 0 ? (
                  <>
                    {/* Left Content */}
                    <div className="w-5/12 pr-8 text-right">
                      <div className="bg-white p-6 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
                        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-red-500 transition-all duration-300">
                          {step.number}. {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                    
                    {/* Center Circle */}
                    <div className="w-2/12 flex justify-center">
                      <div className="relative">
                        <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} shadow-lg flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:rotate-12 cursor-pointer group`}>
                          <span className="text-white font-bold text-2xl group-hover:scale-110 transition-transform duration-300">{step.number}</span>
                        </div>
                        
                      </div>
                    </div>
                    
                    {/* Right Empty Space */}
                    <div className="w-5/12"></div>
                  </>
                ) : (
                  <>
                    {/* Left Empty Space */}
                    <div className="w-5/12"></div>
                    
                    {/* Center Circle */}
                    <div className="w-2/12 flex justify-center">
                      <div className="relative">
                        <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} shadow-lg flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:rotate-12 cursor-pointer group`}>
                          <span className="text-white font-bold text-2xl group-hover:scale-110 transition-transform duration-300">{step.number}</span>
                        </div>
                        
                      </div>
                    </div>
                    
                    {/* Right Content */}
                    <div className="w-5/12 pl-8">
                      <div className="bg-white p-6  transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
                        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-500 group-hover:to-orange-500 transition-all duration-300">
                          {step.number}. {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
          
          {/* End Arrow */}
          <div className={`flex justify-center mt-8 transition-all duration-700 ${
            visibleSteps.includes(3) ? 'opacity-100' : 'opacity-0'
          }`}>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default HowWeSolveProblems;