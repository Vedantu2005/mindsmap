import React from 'react';

const Text1 = () => {
  return (
    <div className="bg-white font-sans">
      <div className="container mx-auto max-w-6xl px-4 py-5 md:py-10">

        {/* Header Section */}
        <div className="text-center max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-3xl font-bold text-gray-800 mb-4">
            Text analysis software built with your unique requirements in mind
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            We build custom text analysis software that helps you extract meaning from text data and speed up reporting and analysis. We use our proprietary natural language processing technology to accelerate project delivery for our customers. Our NLP solutions were designed to propel your customer-centric initiatives such as customer feedback analysis, customer support automation, information access, semantic search.
          </p>
        </div>

        {/* Cards Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Card 1 */}
          <div className="text-center p-8 bg-white rounded-xl border border-[#77bce8] shadow-lg transition-shadow duration-300 hover:shadow-blue-200 flex flex-col items-center">
            <div className="flex items-center justify-center mx-auto mb-6">
              <img src="/nlp-icon-products.svg" alt="Power your product with ChatGPT technology" className="h-20 w-20" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 flex-grow">
              Power your product with ChatGPT technology
            </h3>
            <a href="#" className="mt-6 inline-block px-6 py-2 text-sm font-semibold text-[#00a5ff]">
              Learn More
            </a>
          </div>

          {/* Card 2 */}
          <div className="text-center p-8 bg-white rounded-xl border border-[#77bce8] shadow-lg transition-shadow duration-300 hover:shadow-blue-200 flex flex-col items-center">
            <div className="flex items-center justify-center  mx-auto mb-6">
               <img src="/nlp-icon-audience.svg" alt="NLP API for social media analytics" className="h-20 w-20" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 flex-grow">
              NLP API for social media analytics
            </h3>
            <a href="#" className="mt-6 inline-block px-6 py-2 text-sm font-semibold text-[#00a5ff]">
              Learn More
            </a>
          </div>
          
          {/* Card 3 */}
          <div className="text-center p-8 bg-white rounded-xl border border-[#77bce8] shadow-lg transition-shadow duration-300 hover:shadow-blue-200 flex flex-col items-center">
            <div className="flex items-center justify-center  mx-auto mb-6">
              <img src="/nlp-icon-opinions.svg" alt="Custom NLP models for customer feedback analysis" className="h-20 w-20" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 flex-grow">
              Custom NLP models for customer feedback analysis
            </h3>
            <a href="#" className="mt-6 inline-block px-6 py-2 text-sm font-semibold text-[#00a5ff]">
              Learn More
            </a>
          </div>
          
        </div>

      </div>
    </div>
  );
};

export default Text1;

