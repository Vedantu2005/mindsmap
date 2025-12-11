import React from 'react';

const NLP6 = () => {
  return (
    <div className="px-6 py-10 bg-white font-sans">
      {/* --- Desktop View (visible from md screens and up) --- */}
      <div className="hidden md:flex items-center justify-center gap-16 max-w-6xl mx-auto">
        {/* Left - Image */}
        <div className="flex-shrink-0">
          <img
            src="/nlp-cpc-4.webp"
            alt="Context-Aware Search"
            className="w-72 h-auto "
          />
        </div>

        {/* Right - Text */}
        <div className="max-w-xl text-left">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Context-Aware Search, Summarization
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Whether it’s a web or a mobile app, make content search easy and
            relevant for your customers with language processing as a service.
            We build custom intelligent content search and filtering solutions
            that will allow your clients to get only up-to-date and
            theme-related content. Create customer loyalty by offering them
            user-friendly solutions and saving their time.
          </p>
        </div>
      </div>

      {/* --- Mobile View (visible on screens smaller than md) --- */}
      <div className="md:hidden max-w-xl mx-auto text-center">
        {/* 1. Heading */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Context-Aware Search, Summarization
        </h2>

        {/* 2. Image */}
        <div className="flex justify-center mb-6">
          <img
            src="/nlp-cpc-4.webp"
            alt="Context-Aware Search"
            className="w-72 h-auto "
          />
        </div>

        {/* 3. Paragraph */}
        <div className="text-gray-700 leading-relaxed text-left">
          <p>
            Whether it’s a web or a mobile app, make content search easy and
            relevant for your customers with language processing as a service.
            We build custom intelligent content search and filtering solutions
            that will allow your clients to get only up-to-date and
            theme-related content. Create customer loyalty by offering them
            user-friendly solutions and saving their time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NLP6;
