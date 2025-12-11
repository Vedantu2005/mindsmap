import React from 'react';

const NLP7 = () => {
  return (
    <div className="px-6 py-10 bg-white font-sans">
      {/* --- Desktop View (visible from md screens and up) --- */}
      <div className="hidden md:flex items-center justify-center gap-16 max-w-6xl mx-auto">
        {/* Left - Text */}
        <div className="max-w-xl text-left">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Audience Analysis</h2>
          <p className="text-gray-700 leading-relaxed">
            Looking for ways to get to know your audience better and see eye to
            eye with them? Use NLP-based audience analysis solutions to earn who
            your target audience is – their age, gender, location, nationality,
            language, and interests. Monitor your social media brand awareness
            and reputation. Work on your brand’s weaknesses to get it on top of
            your industry.
          </p>
        </div>

        {/* Right - Image */}
        <div className="flex-shrink-0">
          <img
            src="/nlp-cpc-6.webp"
            alt="Audience Analysis"
            className="w-72 h-auto "
          />
        </div>
      </div>

      {/* --- Mobile View (visible on screens smaller than md) --- */}
      <div className="md:hidden max-w-xl mx-auto text-center">
        {/* 1. Heading */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Audience Analysis
        </h2>

        {/* 2. Image */}
        <div className="flex justify-center mb-6">
          <img
            src="/nlp-cpc-6.webp"
            alt="Audience Analysis"
            className="w-72 h-auto "
          />
        </div>

        {/* 3. Paragraph */}
        <div className="text-gray-700 leading-relaxed text-left">
          <p>
            Looking for ways to get to know your audience better and see eye to
            eye with them? Use NLP-based audience analysis solutions to earn who
            your target audience is – their age, gender, location, nationality,
            language, and interests. Monitor your social media brand awareness
            and reputation. Work on your brand’s weaknesses to get it on top of
            your industry.
          </p>
        </div>
      </div>

      {/* --- Call to Action Button (Visible on all screen sizes) --- */}
      <div className="flex flex-col justify-center items-center mt-16 text-center">
        <p className='text-lg text-gray-800'>Need consultation on our NLP services?</p>
        <div className="mt-5">
          <button className="border border-[#77bce8] text-[#0b87d7] font-semibold px-6 py-3 rounded-lg cursor-pointer hover:bg-[#77bce8] hover:text-white transition duration-300">
            Let's Connect
          </button>
        </div>
      </div>
    </div>
  );
};

export default NLP7;
