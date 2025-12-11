import React from 'react';

const NLP5 = () => {
  return (
    <div className="px-6 py-10 bg-white font-sans">
      {/* --- Desktop View (visible from md screens and up) --- */}
      <div className="hidden md:flex items-center justify-center gap-16 max-w-6xl mx-auto">
        {/* Left - Text */}
        <div className="max-w-xl text-left">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Data Collection and Analysis, Categorization and Clasterization
          </h2>
          <p className="text-gray-700 leading-relaxed">
            With Mindsmap AI data collection and analysis custom solutions, you
            save the trouble of collecting and extracting value from data
            manually. If you still process and label customer reviews manually,
            it’s time you automated it. Smart data analysis, automated review
            categorization, customer base clustering, saved time, and error
            elimination – are the benefits you’ll get. Soothe the burden of
            working with customer reviews and save time for more intelligent
            tasks.
          </p>
        </div>

        {/* Right - Image */}
        <div className="flex-shrink-0">
          <img
            src="/nlp-cpc-3.webp"
            alt="Data Collection and Analysis"
            className="w-72 h-auto"
          />
        </div>
      </div>

      {/* --- Mobile View (visible on screens smaller than md) --- */}
      <div className="md:hidden max-w-xl mx-auto text-center">
        {/* 1. Heading */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Data Collection and Analysis, Categorization and Clasterization
        </h2>

        {/* 2. Image */}
        <div className="flex justify-center mb-6">
          <img
            src="/nlp-cpc-3.webp"
            alt="Data Collection and Analysis"
            className="w-72 h-auto"
          />
        </div>

        {/* 3. Paragraph */}
        <div className="text-gray-700 leading-relaxed text-left">
          <p>
            With Mindsmap AI data collection and analysis custom solutions, you
            save the trouble of collecting and extracting value from data
            manually. If you still process and label customer reviews manually,
            it’s time you automated it. Smart data analysis, automated review
            categorization, customer base clustering, saved time, and error
            elimination – are the benefits you’ll get. Soothe the burden of
            working with customer reviews and save time for more intelligent
            tasks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NLP5;
