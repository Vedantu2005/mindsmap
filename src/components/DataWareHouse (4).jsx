import React from "react";

const Page3 = () => {
  return (
    <div className="px-6 py-12 bg-gray-50">
      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
        {/* Left - Image */}
        <div className="flex justify-center">
          <img
            src="/DataWareHouse/page3-1.webp"
            alt="NLP Services"
            className="w-72 h-48 sm:w-80 sm:h-56 md:w-96 md:h-64 rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Right - Text */}
        <div className="max-w-xl text-left">
          <h2 className="text-2xl font-bold mb-4 text-center lg:text-left">
            Data Lake and Warehouse Engineering
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed text-sm md:text-base">
            Consolidate your ever-growing volumes of information into a
            consolidated hub and enable stream analytics for faster and more
            accurate insights.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed text-sm md:text-base">
            Bring added value to your assets with our data warehouse development services:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm md:text-base">
            <li>Design, build, and maintain DWHs</li>
            <li>Build custom API integrations</li>
            <li>Set up an ETL/ELT pipeline</li>
            <li>Evolve with Databricks lakehouse</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page3;
