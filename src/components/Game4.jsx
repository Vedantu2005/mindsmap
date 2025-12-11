import React from 'react';

const Game4 = () => {
  return (
    <div className="bg-white font-sans py-5 px-4 sm:px-6 lg:py-10 ">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Services for Your Needs
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            Make use of artificial intelligence in games to pull ahead of your competitors.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: Consulting */}
          <div className="relative p-6 bg-white rounded-lg border border-[#77bce8] shadow-lg shadow-[#77bce8]/40 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl overflow-hidden">
            {/* --- IMAGE IS NOW ABSOLUTELY POSITIONED --- */}
            <img
              src="/consulting.svg"
              alt="Consulting Icon"
              className="absolute top-1/2 -translate-y-1/2 -left-14 w-32 h-32 " // Example classes for styling the SVG
            />
            {/* --- TEXT DIV HAS LEFT MARGIN --- */}
            <div className="ml-20">
              <h3 className="text-lg font-bold text-gray-900">Consulting</h3>
              <p className="mt-2 text-base text-gray-600">
                Need a recommender system to increase in-app purchases? Or want to implement ChatGPT into your gaming business? Talk to our AI experts to see how we can help.

              </p>
            </div>
          </div>

          {/* Card 2: AI in Game Development */}
          <div className="relative p-6 bg-white rounded-lg border border-[#77bce8] shadow-lg shadow-[#77bce8]/40 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl overflow-hidden">
            <img
              src="/ai.svg"
              alt="Consulting Icon"
              className="absolute top-1/2 -translate-y-1/2 -left-14 w-32 h-32 " // Example classes for styling the SVG
            />
            <div className="ml-20">
              <h3 className="text-lg font-bold text-gray-900">Artificial Intelligence in Game Development</h3>
              <p className="mt-2 text-base text-gray-600">
                Planning to utilize AI in the gaming industry? Let us apply our expertise for your game to make it onto the top charts and bring insane profits.
              </p>
            </div>
          </div>

          {/* Card 3: Mobile Gaming Analytics */}
          <div className="relative p-6 bg-white rounded-lg border border-[#77bce8] shadow-lg shadow-[#77bce8]/40 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl overflow-hidden">
            <img
              src="/phones.svg"
              alt="Consulting Icon"
              className="absolute top-1/2 -translate-y-1/2 -left-14 w-32 h-32 " // Example classes for styling the SVG
            />
            <div className="ml-20">
              <h3 className="text-lg font-bold text-gray-900">Mobile Gaming Analytics</h3>
              <p className="mt-2 text-base text-gray-600">
                Use Machine Learning models for smart player analysis. Extract insights from gameplay data for player behavior prediction.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600">
            Planning to use AI in game development?
          </p>
          <button className="mt-4 px-8 py-3 border border-[#77bce8] text-base cursor-pointer font-medium rounded-md text-gray-700 bg-white hover:bg-[#77bce8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Contact Us
          </button>
        </div>

      </div>
    </div>
  );
};

export default Game4;
