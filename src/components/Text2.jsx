import React from 'react';

// A simple dot icon for the list items
const BulletIcon = () => (
    <div className="w-2 h-2 bg-[#77bce8] rounded-full mr-3 mt-2 flex-shrink-0"></div>
);

const Text2 = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto max-w-6xl px-4 py-5 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* Left Column: Illustration */}
          <div className="order-2 md:order-1 px-8">
            <img src="/nlp-products.svg" alt="NLP Technology Illustration" className="w-full h-auto max-w-md mx-auto" />
          </div>

          {/* Right Column: Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-2xl md:text-2xl font-bold text-gray-800 mb-4 leading-tight">
              Power your product with NLP technology
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-6">
              Increase your products' customer engagement and satisfaction rates with the power of Natural Language Processing.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <BulletIcon />
                <span>Semantic search</span>
              </li>
              <li className="flex items-start">
                <BulletIcon />
                <span>Speech recognition</span>
              </li>
              <li className="flex items-start">
                <BulletIcon />
                <span>Text categorization</span>
              </li>
              <li className="flex items-start">
                <BulletIcon />
                <span>Information extraction (from topic classification to entity extraction)</span>
              </li>
            </ul>
            <a href="#" className="mt-8 inline-block px-8 py-3 text-base font-semibold text-black bg-white border-2 border-[#77bce8] rounded-lg hover:bg-[#77bce8] hover:text-white transition-colors">
              Contact Us
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Text2;

