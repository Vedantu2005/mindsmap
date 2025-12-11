import React from "react";

const Page2 = () => {
  return (
    <div className="px-6 py-12 bg-gray-50">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-xl md:text-3xl font-bold mb-4">
          BI Implementation Strategy Key Use Cases
        </h1>
        <p className="text-gray-700 text-sm md:text-base">
          We design smart business intelligence implementation solutions for a
          wide range of domains to address unique industry challenges.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-24">
        {/* Left - Text */}
        <div className="max-w-xl text-left">
          <h2 className="text-2xl font-bold mb-4 text-center lg:text-left">
            BI Warehousing for Intelligent Marketing & Sales
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed text-sm md:text-base">
            Analyze and consolidate large volumes of customer data in single
            storage to uniquely position your products and services in line with
            customer preferences and needs. Use dynamic dashboards and reports
            to spot potential selling opportunities and drive more revenue.
          </p>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            Become a top performer and whip your KPIs in shape through a fast
            and agile decision-making hub designed specifically for marketing
            and sales.
          </p>
        </div>

        {/* Right - Image */}
        <div className="flex justify-center">
          <img
            src="/BussinessIntelegence/page2-1.webp"
            alt="NLP Services"
            className="w-72 h-48 sm:w-80 sm:h-56 md:w-96 md:h-64 rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Page2;
