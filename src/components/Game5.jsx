import React from 'react';
import { Target, Zap, Smartphone, History, View } from 'lucide-react';

const services = [
  {
    icon: <img src="/personalization.svg" alt="Consulting Icon" className="w-16 h-16 mx-auto" />,
    title: 'In-Game Personalization',
    description: 'Analytic tools for game parameters tuning catered to the player.',
  },
  {
    icon: <img src="/lightning.svg" alt="Consulting Icon" className="w-16 h-16 mx-auto" />,
    title: 'Game Experience Booster',
    description: 'Gaming technology solutions for game enjoyment and achievement.',
  },
  {
    icon: <img src="/phone.svg" alt="Consulting Icon" className="w-16 h-16 mx-auto" />,
    title: 'AI for Mobile App Development',
    description: 'Utilize AI for better gameplay experience, app performance, and efficiency.',
  },
  {
    icon: <img src="/time.svg" alt="Consulting Icon" className="w-16 h-16 mx-auto" />,
    title: 'Player Churn Prediction',
    description: 'ML models to identify player churn and increase the player\'s lifetime.',
  },
  {
    icon: <img src="/cube.svg" alt="Consulting Icon" className="w-16 h-16 mx-auto" />,
    title: 'Immersive Experiences with AR',
    description: 'Real first-person experience and more immersive game possibilities.',
  },
];

const Game5 = () => {
  return (
    <div className="bg-white font-sans antialiased text-gray-800">
      <div className="container mx-auto px-4 py-5    sm:py-5">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Enhance Your Gamedev Business with AI Technology
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            A few examples of how you can use Artificial Intelligence in games.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className={`
                p-6 flex items-start space-x-6 bg-white 
                border border-[#77bce8] shadow-lg shadow-[#77bce8]/40 rounded-xl 
                transition-all duration-300 ease-in-out cursor-pointer
                hover:border-solid hover:border-cyan-400 hover:shadow-xl hover:-translate-y-2
                ${index === services.length - 1 ? 'md:col-span-2 md:max-w-md md:mx-auto w-full' : ''}
              `}
            >
              <div className="flex-shrink-0">
                {service.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                <p className="mt-1 text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600">
            Need to develop an AI game solution?
          </p>
          <button 
            className="mt-4 px-8 py-3 border border-[#77bce8] text-base font-medium rounded-lg text-gray-700 cursor-pointer bg-white hover:bg-[#77bce8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-colors"
          >
            Get an Estimate
          </button>
        </div>

      </div>
    </div>
  );
};

export default Game5;
