import React from "react";

const Page4 = () => {
  return (
    <div className="px-6 py-12 bg-gray-50">
      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
        {/* left - Text */}
        <div className="max-w-xl text-left">
          <h2 className="text-2xl font-bold mb-4 text-center lg:text-left">
            BI and Visualizations
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed text-sm md:text-base">
            Communicate complex insights, identify patterns, and enable easy
            insight discovery with our business intelligence services. Turn
            information into value with industry-best BI tools and smart data
            science models.
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm md:text-base">
            <li>Design actionable analytics</li>
            <li>Adopt custom dashboards</li>
            <li>Enhance dashboard performance</li>
            <li>Employ data marts and catalogs</li>
          </ul>
        </div>

        {/* right - Image */}
        <div className="flex justify-center">
          <img
            src="/DataWareHouse/page4-1.webp"
            alt="NLP Services"
            className="w-72 h-48 sm:w-80 sm:h-56 md:w-96 md:h-64 rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Page4;
