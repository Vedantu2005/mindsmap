import React from 'react';

const NLP2 = () => {
  return (
    <div className="px-6 py-10 bg-white font-sans">
      {/* Top Section */}
      <div className="text-center max-w-6xl mx-auto mb-10">
        <h1 className="text-xl md:text-3xl font-bold text-gray-800 mb-4">
          We Offer NLP Software Development Services
        </h1>
        <p className="text-gray-700">
          We’re Pioneers in NLP Software Service Development. Whatever your
          business problem is, we’re part of the solution.
        </p>
      </div>

      {/* Content Section - Made responsive with flexbox and order utilities */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 max-w-6xl mx-auto">
        
        {/* Left - Image (Order changes on mobile) */}
        <div className="order-2 md:order-1 flex-shrink-0">
          <img
            src="/nlp-cpc-0.webp"
            alt="NLP Services"
            className="w-72 h-auto"
          />
        </div>

        {/* Right - Text (Order changes on mobile) */}
        <div className="order-1 md:order-2 max-w-xl text-center md:text-left">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            ChatGPT Implementation
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Emerge new business capabilities with custom ChatGPT-based solutions
              that use masses of data and machine learning algorithms to serve
              your business needs. Implementing ChatGPT, you can automate data
              management, improve customer service, reduce costs, and save time.
            </p>
            <p>
              Enable fast and accurate data search, extraction, and analysis with
              ChatGPT. Allow for more automated and efficient business processes
              and future-proof your business with the latest technology. Get more
              done in less time with ChatGPT.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NLP2;
