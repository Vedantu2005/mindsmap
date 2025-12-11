import React from "react";

const Page5 = () => {
  return (
    <div className="px-6 py-12 bg-gray-50">
      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
        {/* Left - Image */}
        <div className="flex justify-center">
          <img
            src="/DataWareHouse/page5-1.webp"
            alt="NLP Services"
            className="w-72 h-48 sm:w-80 sm:h-56 md:w-96 md:h-64 rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Right - Text */}
        <div className="max-w-xl text-left">
          <h2 className="text-2xl font-bold mb-4 text-center lg:text-left">
            Data Warehouse Modernization
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed text-sm md:text-base">
            Adjust to evolving needs and business challenges with enhanced
            storage experience. Extend your DWH infrastructure and reap the
            benefits of the latest technologies.
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm md:text-base">
            <li>Cleanse and improve data quality</li>
            <li>Migrate workloads to the cloud</li>
            <li>Innovate with machine learning</li>
            <li>Implement master data management</li>
          </ul>
        </div>
      </div>

      {/* Fixed & Styled Button */}
      <div className="mt-16 flex justify-center">
        <button className="border-2 border-blue-500 text-black font-semibold px-6 py-3 rounded-lg hover:bg-blue-300 transition-colors text-sm sm:text-base md:text-lg">
          Talk to Our DWH & BI Consultant
        </button>
      </div>
    </div>
  );
};

export default Page5;
