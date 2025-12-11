import React from 'react'

const Call2 = () => {
  return (
    <div className="px-4 sm:px-6 py-5 sm:py-12">
      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-10">
        {/* Right - Text */}
        <div className="max-w-xl text-left order-2 lg:order-1">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            Smart Contact Center with Amazon Connect
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed text-sm sm:text-base">
            Make your call center technology-driven with Amazon Connect
            implementation. Let us implement and tune it in according to your
            needs for better customer service and operational efficiency.
          </p>
          <ul className="list-disc list-inside marker:text-[#00B4D8] mt-3 space-y-1 text-sm sm:text-base">
            <li>Implement and maintain Amazon Connect call center solutions</li>
            <li>Migrate your call center to Amazon Connect</li>
            <li>Integrate your call center with 3rd party tools</li>
            <li>Develop, deploy and manage complex call center solutions</li>
          </ul>
        </div>

        {/* Left - Image */}
        <div className="w-full sm:w-4/5 md:w-2/3 lg:w-96 order-1 lg:order-2">
          <img
            src="/page2.webp"
            alt="NLP Services"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-8 sm:mt-9">
        <button className="border border-[#00B4D8] px-5 py-2 sm:px-6 sm:py-3 rounded-lg text-sm cursor-pointer sm:text-base hover:bg-[#00B4D8] hover:text-white transition">
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default Call2
