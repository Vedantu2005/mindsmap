import React from "react";
import Company from "./Company";

const Page1 = () => {
  return (
    <div className="bg-white flex flex-col items-center pt-12 sm:pt-16 pb-16 sm:pb-24 font-sans">
      <style>
        {`
          @keyframes scrollRight {
            0% { transform: translateX(-33.3333%); }
            100% { transform: translateX(0); }
          }
          .scrolling-logos {
            animation: scrollRight 10s linear infinite;
          }
        `}
      </style>

      {/* Header Text */}
      <div className="mb-8 sm:mb-12 px-4 text-center max-w-3xl">
        <p className="text-sm sm:text-base text-gray-700">
          Let our cloud services avail your company by solving data and
          analytics challenges with on-demand scalability, unmatched security,
          and improved data accessibility.
        </p>
      </div>

      <header className="text-center mb-12 sm:mb-4 px-4 max-w-3xl">
        <h1 className="text-lg sm:text-xl md:text-2xl text-gray-900 tracking-wide font-bold">
          Trusted by Innovative Companies
        </h1>
      </header>

      {/* Logo Scroller */}
      <Company />

      <div className=""></div>
    </div>
  );
};

export default Page1;
