import React from "react";

const Page10 = () => {
  return (
    <div className="px-4 sm:px-6 py-10 bg-gray-50 text-center">
      {/* Heading */}
      <div className="max-w-4xl mx-auto mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">
          Develop an Ultimate BI Implementation Plan With Mindsmap AI
        </h2>
        <p className="text-gray-700 text-sm sm:text-base">
          We always invest time and effort into finding the most suitable
          solutions for our customers’ needs and complementing them with the
          latest BI technologies.
        </p>
      </div>

      {/* Features */}
      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto mb-8">
        <div className="flex-1 min-w-[200px] hover:shadow-lg">
          <img
            src="/BussinessIntelegence/page10-1.svg"
            alt=""
            className="mx-auto mb-4 w-16 h-16"
          />
          <h3 className="font-semibold mb-2">Savvy BI Engineering Team</h3>
          <p className="text-gray-700 text-sm sm:text-base">
            40+ members of a hand-picked development team to bring years of
            experience into business intelligence implementation projects to
            help you achieve a competitive edge.
          </p>
        </div>

        <div className="flex-1 min-w-[200px] text-center hover:shadow-lg">
          <img
            src="/BussinessIntelegence/page10-2.svg"
            alt=""
            className="mx-auto mb-4 w-16 h-16"
          />
          <h3 className="font-semibold mb-2">Customizable BI Solutions</h3>
          <p className="text-gray-700 text-sm sm:text-base">
            We strive for the best, and we delve into customer’s Power BI
            implementation challenges and business requirements to create the
            best-fit adoption strategy and implementation roadmap.
          </p>
        </div>

        <div className="flex-1 min-w-[200px] text-center hover:shadow-lg">
          <img
            src="/BussinessIntelegence/page10-3.svg"
            alt=""
            className="mx-auto mb-4 w-16 h-16"
          />
          <h3 className="font-semibold mb-2">High-Quality Results</h3>
          <p className="text-gray-700 text-sm sm:text-base">
            Our BI implementation services help our clients improve their
            performance, reduce errors, and align the decision-making process
            with business targets to reduce operational risks and promote
            growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page10;
