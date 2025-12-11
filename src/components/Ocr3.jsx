import React from 'react';

const Ocr3 = () => {
  return (
    <div className="bg-white -mt-10 py-10 sm:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            How Our Data Capture and Extraction Services Work
          </h2>
        </div>

        {/* Workflow Image */}
        <div className="flex justify-center">
          <img 
            src="/ocr.png" 
            alt="Data capture and extraction workflow" 
            className="w-full h-auto max-w-5xl" 
          />
        </div>

      </div>
    </div>
  );
};

export default Ocr3;

