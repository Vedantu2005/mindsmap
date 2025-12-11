import React from "react";

const Page3 = () => {
  return (
    <div className="px-6 py-12 bg-gray-50">
      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
        {/* Left - Image */}
        <div className="flex justify-center">
          <img
            src="/BussinessIntelegence/page3-1.webp"
            alt="NLP Services"
            className="w-72 h-48 sm:w-80 sm:h-56 md:w-96 md:h-64 rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Right - Text */}
        <div className="max-w-xl text-left">
          <h2 className="text-2xl font-bold mb-4 text-center lg:text-left">
            Smart Financial Planning
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed text-sm md:text-base">
            Using custom fintech business intelligence and Big Data analytics
            solutions, you can collect, organize and analyze data related to the
            current state of business along with forecasting financials and
            planning your budget in advance.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed text-sm md:text-base">
            Requesting our BI implementation services, you can benefit from:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm md:text-base">
            <li>Business process optimization</li>
            <li>Massive data analysis</li>
            <li>Data visualization and reporting</li>
            <li>Easier decision making</li>
            <li>Risk exposure reduction</li>
            <li>Trend predictions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page3;
