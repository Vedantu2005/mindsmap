import React from "react";

const Page5 = () => {
  return (
    <div className="px-6 py-12 bg-gray-50">
      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
        {/* Left - Image */}
        <div className="flex justify-center">
          <img
            src="/BussinessIntelegence/page5-1.webp"
            alt="Logistics & Transportation"
            className="w-72 h-48 sm:w-80 sm:h-56 md:w-96 md:h-64 rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Right - Text */}
        <div className="max-w-xl text-left">
          <h2 className="text-2xl font-bold mb-4 text-center lg:text-left">
            Logistics & Transportation
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed text-sm md:text-base">
            Turn to Big Data development solutions to empower data-driven
            logistics processes for added operational efficiency and smarter
            flexibility. Ramp up order processing capabilities, optimize delivery
            routes, and forecast demand with easy-to-use BI solutions.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed text-sm md:text-base">
            The Mindsmap AI team assists logistics companies in devising a
            business intelligence implementation strategy to take advantage of
            logistics analytics and mold logistics data into valuable insights.
          </p>
        </div>
      </div>

      {/* Contact Button */}
      <div className="mt-10 flex justify-center">
        <button className="border-2 border-blue-400 text-black px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-400 hover:text-white transition">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Page5;
