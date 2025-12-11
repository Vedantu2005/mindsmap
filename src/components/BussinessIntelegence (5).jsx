import React from "react";

const Page4 = () => {
  return (
    <div className="px-6 py-12 bg-gray-50">
      {/* Content Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-24">
        {/* Left - Text */}
        <div className="max-w-xl text-left">
          <h2 className="text-2xl font-bold mb-4 text-center lg:text-left">
            Intelligent Manufacturing Solutions
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed text-sm md:text-base">
            Want to gain better insights into cost management, operations, and
            profitability? Inject our custom BI tools paired with predictive
            analysis to achieve visibility and proactive management across the
            entire manufacturing process.
          </p>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            Adopt smart BI end-user reports for streamlined inventory and
            invoice management. Visualize massive data for faster and easier
            decision-making. Detect anomalies and avoid equipment failures using
            disruptive technologies.
          </p>
        </div>

        {/* Right - Image */}
        <div className="flex justify-center">
          <img
            src="/BussinessIntelegence/page4-1.webp"
            alt="NLP Services"
            className="w-72 h-48 sm:w-80 sm:h-56 md:w-96 md:h-64 rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Page4;
