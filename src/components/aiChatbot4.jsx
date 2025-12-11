import React, { useState, useEffect } from 'react';

const ProjectApproach = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const phases = [
    {
      number: '1',
      title: 'Discovery',
      items: ['Idea assessments', 'Business analysis', 'Strategy']
    },
    {
      number: '2',
      title: 'Design',
      items: ['Proof of concept', 'Architecture', 'Project roadmap']
    },
    {
      number: '3',
      title: 'Model training',
      items: ['Model selection', 'Data gathering', 'Fine-tuning']
    },
    {
      number: '4',
      title: 'Development',
      items: ['Chatbot implementation', 'Testing', 'Performance analysis']
    },
    {
      number: '5',
      title: 'Evolution',
      items: ['Chatbot maintenance', 'New features implementation', 'New business case']
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How We Approach Your Project
          </h1>
          <p className="text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed">
            With over 150 projects under our belt, we have developed a calibrated development process that drives your project forward swiftly yet thoroughly through five key phases.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-300 via-orange-400 to-orange-500"></div>

          {/* Phases */}
          <div className="space-y-12">
            {phases.map((phase, index) => (
              <div
                key={index}
                className={`relative flex items-start transition-all duration-700 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Number Circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center text-white text-4xl font-bold shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl">
                    {phase.number}
                  </div>
                </div>

                {/* Content */}
                <div className="ml-8 flex-1 pt-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {phase.title}
                  </h3>
                  <ul className="space-y-2">
                    {phase.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start transition-all duration-500 hover:translate-x-2"
                        style={{ transitionDelay: `${index * 150 + itemIndex * 100}ms` }}
                      >
                        <span className="inline-block w-2 h-2 rounded-full bg-orange-400 mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700 text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectApproach;