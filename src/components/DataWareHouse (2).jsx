import React from 'react';
import Company from './Company';


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
          Mindsmap AI offers a full suite of data warehouse (DWH) services, refining existing data management tools, engineering, and implementing an enterprise data warehouse.
        </p>
      </div>

      {/* Logo Scroller */}
      <Company />

      <div className=""></div>
    </div>
  );
};

export default Page1;
