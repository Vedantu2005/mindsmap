import React from "react";

const Page1 = () => {
  return (
    <div className="px-6 sm:px-12 lg:px-24 py-10 text-center">
      {/* Intro Section */}
      <div className="max-w-4xl mx-auto mb-10">
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          Mindsmap AI is a mature BI implementation partner with end-to-end
          expertise in BI project implementation, data modeling, ETL processes,
          and a whole suite of other decision-making tools needed for
          operational efficiency.
        </p>
      </div>

      {/* What We Can Do Section */}
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
          What We Can Do For You
        </h2>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          Building on considerable years of hands-on experience of BI Solution
          lifecycle implementation, Mindsmap AI provides a whole suite of BI
          services designed to step up your business decision-making.
        </p>
      </div>

      {/* 3-Column Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto place-items-center text-left">
        {/* Card 1 */}
        <div className="w-full max-w-sm">
          <img
            src="/BussinessIntelegence/page1-1.svg"
            alt="BI Consulting Services"
            className="w-16 h-16 mb-4 mx-auto sm:mx-0"
          />
          <h2 className="text-xl font-semibold mb-3 text-center sm:text-left">
            BI Consulting Services
          </h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>BI implementation roadmap</li>
            <li>Power BI implementation plan</li>
            <li>Solution architecture development</li>
            <li>Big data synchronization algorithms</li>
            <li>BI architecture audit</li>
            <li>BI architecture blueprinting</li>
            <li>Architecture enhancement planning</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="w-full max-w-sm">
          <img
            src="/BussinessIntelegence/page1-2.svg"
            alt="BI Complete Solution Development"
            className="w-16 h-16 mb-4 mx-auto sm:mx-0"
          />
          <h2 className="text-xl font-semibold mb-3 text-center sm:text-left">
            BI Complete Solution Development
          </h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Business requirement & BI solution design</li>
            <li>ETL processes design and implementation</li>
            <li>Data quality assurance</li>
            <li>Data modeling for analytical performance</li>
            <li>Data visualization design</li>
            <li>Reports, dashboards, and apps development</li>
            <li>Hands-on UX validation</li>
            <li>Key users training</li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="w-full max-w-sm">
          <img
            src="/BussinessIntelegence/page1-3.svg"
            alt="Microsoft Power BI Services"
            className="w-16 h-16 mb-4 mx-auto sm:mx-0"
          />
          <h2 className="text-xl font-semibold mb-3 text-center sm:text-left">
            Microsoft Power BI Services
          </h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Performance analysis and optimization</li>
            <li>Power BI training and consultancy</li>
            <li>Data visualization & UX design reshape</li>
            <li>Reporting automation</li>
            <li>Power apps development</li>
            <li>Process automation with Power Automate</li>
            <li>Data governance consultancy</li>
          </ul>
        </div>
      </div>

      {/* Contact Button */}
      <div className="mt-12 flex justify-center">
        <button className="border-2 border-blue-600 text-black px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-600 hover:text-white transition">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Page1;
