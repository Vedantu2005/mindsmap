import React from "react";

const Page11 = () => {
  return (
    <div className="px-4 sm:px-6 py-10 bg-gray-50 text-center">
      {/* Heading */}
      <div className="max-w-4xl mx-auto mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">
          Why Choose Mindsmap AI Data Warehouse Consulting
        </h2>
        <p className="text-gray-700 text-sm sm:text-base">
          As one of the leading data warehouse service providers, we foster DWH
          implementation success by employing a future-proof architecture that
          prioritizes autonomy and security.
        </p>
      </div>

      {/* Features */}
      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto mb-8">
        <div className="flex-1 min-w-[200px]">
          <img
            src="/DataWareHouse/page11-1.svg"
            alt=""
            className="mx-auto mb-4 w-16 h-16"
          />
          <h3 className="font-semibold mb-2">
            Certified Data Engineering Team
          </h3>
          <p className="text-gray-700 text-sm sm:text-base">
            The deep expertise of Mindsmap AI’ team is proven by industry
            certifications, partnerships with AWS and other providers and
            complemented with the domain experience.
          </p>
        </div>

        <div className="flex-1 min-w-[200px] text-center ">
          <img
            src="/DataWareHouse/page11-2.svg"
            alt=""
            className="mx-auto mb-4 w-16 h-16"
          />
          <h3 className="font-semibold mb-2">Acknowledged DWH Company</h3>
          <p className="text-gray-700 text-sm sm:text-base">
            Since 2018, Mindsmap AI has established itself as one of the top
            data solutions providers, according to the Clutch Leaders Matrix,
            GoodFirms, and other market leaders.
          </p>
        </div>

        <div className="flex-1 min-w-[200px] text-center">
          <img
            src="/DataWareHouse/page11-3.svg"
            alt=""
            className="mx-auto mb-4 w-16 h-16"
          />
          <h3 className="font-semibold mb-2">Diverse Expertise</h3>
          <p className="text-gray-700 text-sm sm:text-base">
            As a seasoned company, we have successfully delivered 100+ projects
            across industries, from logistics and finance to healthcare and
            retail, and beyond.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page11;
