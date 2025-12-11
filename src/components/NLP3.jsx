import React from 'react';

const NLP3 = () => {
  return (
    <div className="px-6 py-10 bg-white font-sans">
      {/* --- Desktop View (visible from md screens and up) --- */}
      <div className="hidden md:flex items-center justify-center gap-16 max-w-6xl mx-auto">
        {/* Left - Text Content */}
        <div className="max-w-xl text-left">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Customer Feedback Analysis
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Overwhelmed with masses of data? Can’t translate it into meaningful
              insights about your business’ strengths and weaknesses? Make use of
              bespoke NLP models for customer feedback analysis. By integrating
              them into your app or infrastructure, you enable automated data
              collection and analysis of unstructured data. Detect and extract
              topics, analyze sentiments, and then alter your business plan.
            </p>
            <p>
              Use the uncovered insights to make sure your products or services
              line with the customer’s expectations and solves their business
              problems with NLP consulting.
            </p>
          </div>
        </div>

        {/* Right - Image */}
        <div className="flex-shrink-0">
          <img
            src="/nlp-cpc-1.webp"
            alt="Customer Feedback Analysis"
            className="w-72 h-auto"
          />
        </div>
      </div>

      {/* --- Mobile View (visible on screens smaller than md) --- */}
      <div className="md:hidden max-w-xl mx-auto text-center">
        {/* 1. Heading */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Customer Feedback Analysis
        </h2>

        {/* 2. Image */}
        <div className="flex justify-center mb-6">
          <img
            src="/nlp-cpc-1.webp"
            alt="Customer Feedback Analysis"
            className="w-72 h-auto "
          />
        </div>

        {/* 3. Paragraphs */}
        <div className="space-y-4 text-gray-700 leading-relaxed text-left">
          <p>
            Overwhelmed with masses of data? Can’t translate it into meaningful
            insights about your business’ strengths and weaknesses? Make use of
            bespoke NLP models for customer feedback analysis. By integrating
            them into your app or infrastructure, you enable automated data
            collection and analysis of unstructured data. Detect and extract
            topics, analyze sentiments, and then alter your business plan.
          </p>
          <p>
            Use the uncovered insights to make sure your products or services
            line with the customer’s expectations and solves their business
            problems with NLP consulting.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NLP3;
