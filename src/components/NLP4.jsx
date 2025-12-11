import React from 'react';

const NLP4 = () => {
  return (
    <div className="px-6 py-10 bg-white font-sans">
      {/* --- Desktop View (visible from md screens and up) --- */}
      <div className="hidden md:flex items-center justify-center gap-16 max-w-6xl mx-auto">
        {/* Left - Image */}
        <div className="flex-shrink-0">
          <img
            src="/nlp-cpc-2.webp"
            alt="Sentiment Analysis"
            className="w-72 h-auto "
          />
        </div>

        {/* Right - Text */}
        <div className="max-w-xl text-left">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sentiment Analysis</h2>
          <p className="text-gray-700 leading-relaxed">
            Tried different marketing strategies but not getting the profit you
            want? Switch to a data-based strategy for more brand insights.
            Custom sentiment analysis software and natural language processing
            solutions allow you to mine socials, review platforms, and other
            important sources. Automatically interpreting hidden meanings behind
            tons of texts you’ll easily detect your audience’s moods and benefit
            from it. Use the technology to glean insights about your brand
            health and ongoing marketing campaigns for a stronger brand.
          </p>
        </div>
      </div>

      {/* --- Mobile View (visible on screens smaller than md) --- */}
      <div className="md:hidden max-w-xl mx-auto text-center">
        {/* 1. Heading */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Sentiment Analysis
        </h2>

        {/* 2. Image */}
        <div className="flex justify-center mb-6">
          <img
            src="/nlp-cpc-2.webp"
            alt="Sentiment Analysis"
            className="w-72 h-auto "
          />
        </div>

        {/* 3. Paragraph */}
        <div className="text-gray-700 leading-relaxed text-left">
          <p>
            Tried different marketing strategies but not getting the profit you
            want? Switch to a data-based strategy for more brand insights.
            Custom sentiment analysis software and natural language processing
            solutions allow you to mine socials, review platforms, and other
            important sources. Automatically interpreting hidden meanings behind
            tons of texts you’ll easily detect your audience’s moods and benefit
            from it. Use the technology to glean insights about your brand
            health and ongoing marketing campaigns for a stronger brand.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NLP4;
