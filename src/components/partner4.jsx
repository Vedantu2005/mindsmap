import React from 'react';

const Partner4 = () => {
  return (
    <section className="bg-white font-sans overflow-hidden py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Side: Image with decorative elements */}
        <div className="relative flex justify-center items-center p-8">
          <img
            src="/part.webp"
            alt="Team member smiling"
            className="relative  w-full max-w-sm h-auto object-cover z-10"
          />
        </div>

        {/* Right Side: Text Content */}
        <div>
          <h2 className="text-3xl md:text-3xl font-bold text-gray-800 mb-6">
            Let's Start Cooperation
          </h2>
          <div className="text-gray-600 space-y-5 text-lg leading-relaxed">
            <p>
              Mindsmap AI is a data science consulting and AI software development company that is keen to cooperate equally with well-established companies and startups across different business niches.
            </p>
            <p>
              Our mission is to help companies worldwide leverage big data and useful insights, automate repetitive tasks, enhance overall performance, and prevent time and cost overruns.
            </p>
            <p>
              We eagerly await our cooperation with you and look forward to bringing value to both sides of the table.
            </p>
          </div>
          <a href="/contact">
            <button className="mt-8 bg-white text-gray-700 cursor-pointer font-semibold py-3 px-8 rounded-lg border-2 border-[#77bce8] hover:bg-[#77bce8] hover:border-[#77bce8] transition-colors duration-300">
              Let's Work Together
            </button>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Partner4;
