import React from "react";

const Page8 = () => {
  return (
    <div className="px-4 py-12">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Why Work With Mindsmap AI?</h2>
        <p className="text-gray-700 text-lg md:text-xl">
          We put customer satisfaction at the center of our services.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center p-4">
          <img src="/BigDataAnalytics/page8-1.svg" alt="" className="w-14- md:w-16 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Team of Experts</h3>
          <p className="text-gray-600">
            A team of 40+ experts will take care of your Big data project and create a robust data-focused solution tailored to your needs.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center p-4">
          <img src="/BigDataAnalytics/page8-2.svg" alt="" className="w-24 md:w-32 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Leading Big Data Vendor</h3>
          <p className="text-gray-600">
            Being a top-rated Big data and analytics cloud consultant, Mindsmap AI assists various industries in hassle-free data transformation.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center p-4">
          <img src="/BigDataAnalytics/page8-3.svg" alt="" className="w-14 md:w-20 mb-4" />
          <h3 className="text-xl font-semibold mb-2">High-Grade Solutions</h3>
          <p className="text-gray-600">
            No matter the complexity, we keep the bar high and deliver performant, value-laden solutions with innovative functionality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page8;
