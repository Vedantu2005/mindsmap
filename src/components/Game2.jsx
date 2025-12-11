import React from 'react';

const Game2 = () => {
  return (
    <div className="bg-white font-sans">
      <div className="max-w-7xl mx-auto py-1 px-4 lg:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center md:hidden">
            Predictive Analytics in Games for Player Churn Prediction
          </h3>

          {/* Left Image Content */}
          <div className="relative flex items-center justify-center">
            <div className="relative z-10">
              <img 
                className=" object-cover" 
                src="success.webp" 
                alt="Professional gaming setup" 
              />
            </div>
          </div>

          <div className="text-center md:text-left">

            {/* --- HEADING FOR DESKTOP --- */}
            <h3 className="hidden md:block text-2xl font-bold text-gray-800 mb-4">
              Predictive Analytics in Games for Player Churn Prediction
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Want to boost your game revenue? Detect early signs of player churn to increase a player's lifetime and revenue contribution with <a href="#" className="text-[#77bce8] hover:underline font-medium">effective predictive analytics solutions</a> in games. Analyze log data and player behavior to get valuable cues on game enjoyment and retention strategies. Incentivize high-value players or cross-link them to other games to maintain a stable income.
            </p>
            <button className="mt-8 px-8 py-3 cursor-pointer border border-[#77bce8] text-base font-medium rounded-md text-black bg-white hover:bg-[#77bce8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game2;