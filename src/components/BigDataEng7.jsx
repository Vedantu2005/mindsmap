import React from "react";

const Page6 = () => {
  return (
    <div className="px-6 py-12 bg-white text-center">
      {/* Heading Section */}
      <div className="max-w-3xl mx-auto mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Why Work With Mindsmap AI?
        </h2>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          As a data engineering company, we follow tech essentials and expand
          our AI’s impact to ensure customer success.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center">
          <img src="/BigDataEng/page6-1.svg" alt="" className="w-20 h-20 mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            Strong Data Engineering Skills
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Since 2014, our data integration consultants have been helping
            clients across the globe optimize data and translate it into
            business insights.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center ">
          <img src="/BigDataEng/page6-2.svg" alt="" className="w-20 h-20 mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            Reliable Data Engineering Company
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Communication, commitment, and transparency is what our team
            guarantees during data engineering process development.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center ">
          <img src="/BigDataEng/page6-3.svg" alt="" className="w-20 h-20 mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            Top Big Data Company by Clutch
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Mindsmap AI, an engineering and data solutions provider, regularly
            makes it to the Clutch Leaders Matrix in Big data, AI, and other
            disruptive technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page6;
