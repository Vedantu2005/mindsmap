import React from "react";

const Page3 = () => {
  return (
    <div className="flex justify-center items-center px-4 py-12">
      <div className="max-w-6xl w-full text-center">
        {/* Header Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-2">
            Data Engineering Technologies We Work With
          </h2>
          <h3 className="text-xl text-gray-600">Open Source</h3>
        </div>

        {/* Logos Section */}
        <div className="flex flex-wrap justify-center gap-8">
          <img
            src="/BigDataEng/page3-1.svg"
            alt="Tech 1"
            className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
          />
          <img
            src="/BigDataEng/page3-2.svg"
            alt="Tech 2"
            className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
          />
          <img
            src="/BigDataEng/page3-3.svg"
            alt="Tech 3"
            className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
          />
          <img
            src="/BigDataEng/page3-4.svg"
            alt="Tech 4"
            className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
          />
          <img
            src="/BigDataEng/page3-5.svg"
            alt="Tech 5"
            className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
          />
          <img
            src="/BigDataEng/page3-6.svg"
            alt="Tech 6"
            className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
          />
          <img
            src="/BigDataEng/page3-7.svg"
            alt="Tech 7"
            className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Page3;
export function BigDataEng4() {
  return <div>{/* placeholder component: bigDataEng (4) */}</div>;
}
