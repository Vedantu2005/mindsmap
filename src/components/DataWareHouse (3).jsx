import React from "react";

const Page2 = () => {
  return (
    <div className="px-6 py-12 bg-gray-50">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-xl md:text-3xl font-bold mb-4">
          Our Data Warehouse Services
        </h1>
        <p className="text-gray-700 text-sm md:text-base">
          As a mature data warehousing consultant, Mindsmap AI works with
          companies of all sizes to improve strategic decision-making, establish
          data consistency, and increase the power of analytics.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-24">
        {/* Left - Text */}
        <div className="max-w-xl text-left">
          <h2 className="text-2xl font-bold mb-4 text-center lg:text-left">
            Data Warehouse Consulting Services
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed text-sm md:text-base">
            Leveraging our multidisciplinary expertise, you get a consistent
            plan of action to help you start, enhance, or iterate your DWH
            journey. Enrich your data warehouse project implementation plan with
            a professional advisory.
          </p>
          <ul>
            <li>Assess and analyze your data infrastructure</li>
            <li>Optimize your costs and cloud resources</li>
            <li>Innovate with a custom architecture design</li>
            <li>Achieve DevOps/MLOps excellence</li>
          </ul>
        </div>

        {/* Right - Image */}
        <div className="flex justify-center">
          <img
            src="/DataWareHouse/page2-1.webp"
            alt="NLP Services"
            className="w-72 h-48 sm:w-80 sm:h-56 md:w-96 md:h-64 rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Page2;
