import React from "react";

const Page10 = () => {
  return (
    <div className="bg-white py-10 px-4 sm:px-8 flex justify-center text-center">
      {/* Centered Container */}
      <div className="w-full max-w-4xl mx-auto">
        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Technologies
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            We employ a wide range of data warehouse, BI, and cloud technologies
            to deliver a high-performing, scalable, and robust solution.
          </p>
        </div>

        {/* Data Science Section */}
        <div className="mb-8">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4 text-left">
            DWH services and databases
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 place-items-center">
            <img src="/DataWareHouse/page10-1.svg" alt="" className="h-8 sm:h-10" />
            <img src="/DataWareHouse/page10-2.svg" alt="" className="h-8 sm:h-10" />
            <img src="/DataWareHouse/page10-3.webp" alt="" className="h-8 sm:h-10" />
            <img src="/DataWareHouse/page10-4.svg" alt="" className="h-8 sm:h-10" />
          </div>
        </div>

        {/* Divider line */}
        <div className="border-t border-gray-300 my-8"></div>

        {/* Amazon AWS Section */}
        <div className="mb-8">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4 text-left">
            Business intelligence
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 place-items-center">
            <img src="/DataWareHouse/page10-5.webp" alt="" className="h-8 sm:h-10" />
            <img src="/DataWareHouse/page10-6.webp" alt="" className="h-8 sm:h-10" />
            <img src="/DataWareHouse/page10-7.webp" alt="" className="h-8 sm:h-10" />
          </div>
        </div>

        {/* Divider line */}
        <div className="border-t border-gray-300 my-8"></div>

        {/* Microsoft Azure Section */}
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4 text-left">
            Cloud services
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 place-items-center">
            <img src="/DataWareHouse/page10-8.svg" alt="" className="h-8 sm:h-10" />
            <img src="/DataWareHouse/page10-9.svg" alt="" className="h-8 sm:h-10" />
            <img src="/DataWareHouse/page10-10.svg" alt="" className="h-8 sm:h-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page10;
