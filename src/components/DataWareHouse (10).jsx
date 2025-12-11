import React from "react";

const Page9 = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-12 py-12 bg-gray-50 text-center">
      {/* Heading */}
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-900">
          Industries We Work With
        </h2>
        <p className="mb-2 text-gray-900">
          Our data warehousing consultants set the bedrock of decision-making to support your company’s needs.
        </p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {[
          { src: "/DataWareHouse/page9-1.svg", title: "E-Commerce" },
          { src: "/DataWareHouse/page9-2.svg", title: "Marketing & Advertising" },
          { src: "/DataWareHouse/page9-3.svg", title: "Supply Chain & Logistics" },
          { src: "/DataWareHouse/page9-4.svg", title: "Financial Services" },
          { src: "/DataWareHouse/page9-5.svg", title: "Healthcare & Pharma" },
          { src: "/DataWareHouse/page9-6.svg", title: "Manufacturing" },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow text-center transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <img
              src={item.src}
              alt={item.title}
              className="mx-auto mb-4 w-16 h-16 sm:w-20 sm:h-20"
            />
            <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page9;
