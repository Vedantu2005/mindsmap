import React from "react";

const Page5 = () => {
  return (
    <div className="min-h-[70%] bg-white flex flex-col items-center justify-center px-4 py-12">
      {/* Header Section */}
      <div className="text-center max-w-2xl mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Why Choose Us
        </h2>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          Our dedicated teams will help your company seamlessly migrate its
          databases to the cloud — or break the mold with a new, robust
          analytics solution that solves your toughest business problems.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full text-center">
        {/* Box 1 */}
        <div className="flex flex-col items-center px-4">
          <img src="CloudService/page5-1.svg" alt="" className="w-20 h-20 mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Years of Experience
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Since 2018, we’ve been assisting companies across industries in
            adopting cloud services, analytics suites, and business intelligence
            solutions - to pivot, grow, and adapt.
          </p>
        </div>

        {/* Box 2 */}
        <div className="flex flex-col items-center px-4">
          <img src="CloudService/page5-2.svg" alt="" className="w-20 h-20 mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Latest Technology
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            We put innovation at the core of our projects to let you benefit
            from cutting-edge technologies, future-proof your digital assets,
            and gain a competitive advantage.
          </p>
        </div>

        {/* Box 3 */}
        <div className="flex flex-col items-center px-4">
          <img src="CloudService/page5-3.svg" alt="" className="w-20 h-20 mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Certified Cloud Partner
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            The skills and proficiency of our team are validated by AWS
            certification and partnerships with leading providers to help you
            embrace the full potential of cloud architectures.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page5;
