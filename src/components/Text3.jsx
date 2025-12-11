import React from 'react';

// A simple dot icon for the list items
const BulletIcon = () => (
    <div className="w-2 h-2 bg-[#77bce8] rounded-full mr-3 mt-2 flex-shrink-0"></div>
);

const Text3 = () => {
  return (
    <div className="bg-white font-sans">
      <div className="container mx-auto max-w-6xl px-4">

        {/* Section 1: NLP API for social media analytics */}
        <div className="py-12 md:py-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* Left Column: Content */}
          <div className="order-2 md:order-1">
            <h2 className="text-2xl md:text-2xl font-bold text-gray-800 mb-4 leading-tight">
              NLP API for social media analytics
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-6">
              An easy-to-use Natural Language Processing API to analyze text data from social media and unlock rich audience insights including demographic information and even more:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <BulletIcon />
                <span>Gender</span>
              </li>
              <li className="flex items-start">
                <BulletIcon />
                <span>Age</span>
              </li>
              <li className="flex items-start">
                <BulletIcon />
                <span>Location</span>
              </li>
              <li className="flex items-start">
                <BulletIcon />
                <span>Interests</span>
              </li>
              <li className="flex items-start">
                <BulletIcon />
                <span>Language, etc.</span>
              </li>
            </ul>
            <a href="#" className="mt-8 inline-block px-8 py-3 text-base font-semibold text-black bg-white border-2 border-[#77bce8] rounded-lg hover:bg-[#77bce8] hover:text-white transition-colors">
              Contact Us
            </a>
          </div>

          {/* Right Column: Illustration */}
          <div className="order-1 md:order-2 px-8">
             <img src="/nlp-audience.svg" alt="Social Media Analytics Illustration" className="w-full h-auto max-w-sm mx-auto" />
          </div>

        </div>

        {/* Section 2: Custom NLP models for customer feedback analysis */}
        <div className="py-12 md:py-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Left Column: Illustration */}
          <div className="order-1 md:order-1 px-8">
             <img src="/nlp-opinions.svg" alt="Customer Feedback Analysis Illustration" className="w-full h-auto max-w-sm mx-auto" />
          </div>
          
          {/* Right Column: Content */}
          <div className="order-2 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
              Custom NLP models for customer feedback analysis
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-6">
              Customer feedback analysis software powered by custom models that go beyond simple domain adoption. Perfect for companies whose customers and prospects use distinctive language.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <BulletIcon />
                <span>Sentiment analysis</span>
              </li>
              <li className="flex items-start">
                <BulletIcon />
                <span>Topic detection</span>
              </li>
              <li className="flex items-start">
                <BulletIcon />
                <span>Sentiment scored topic extraction</span>
              </li>
              <li className="flex items-start">
                <BulletIcon />
                <span>Semantic ontology development</span>
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

export default Text3;
