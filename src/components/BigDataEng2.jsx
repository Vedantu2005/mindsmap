import React from "react";

const Page1 = () => {
  return (
    <div className="flex justify-center items-center px-4 py-12">
      <div className="max-w-6xl w-full text-center">
        {/* Intro Section */}
        <div className="mb-20">
          <p className="text-gray-700 text-lg leading-relaxed">
            Manage your business in a rapidly changing world with data analytics
            solutions. Keep an eye on your data, collect it from various sources
            and analyze it to reshape the strategy and strengthen the brand on
            the market.
          </p>
        </div>

        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-3">Our Services</h2>
          <p className="text-gray-600 text-lg">
            Leverage top data science & engineering services to improve business
            efficiency.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left">
          {/* Card 1 */}
          <div className="">
            <img
              src="/BigDataEng/page1-1.svg"
              alt=""
              className="w-16 h-16 mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold mb-3 text-center">
              Data Architecture
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Data engineering consulting on improvements & automation</li>
              <li>Infrastructure upgrade roadmap development</li>
              <li>Implementing automation into the existing infrastructure</li>
              <li>Automating manual processes with CI/CD pipelines</li>
              <li>Data quality or data health</li>
              <li>Implementing serverless solutions</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="">
            <img
              src="/BigDataEng/page1-2.svg"
              alt=""
              className="w-16 h-16 mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold mb-3 text-center">
              Data Pipelines
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Data-driven app design & development</li>
              <li>Extract data, transform, integrate it with other sources</li>
              <li>Designing end-to-end data flow architecture</li>
              <li>Implementation cloud ETL processes</li>
              <li>
                Implementing DataOps services for automation and improving data
                flows
              </li>
              <li>
                Enabling data observability to monitor your data in the data
                warehouse
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="">
            <img
              src="/BigDataEng/page1-3.svg"
              alt=""
              className="w-16 h-16 mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold mb-3 text-center">
              Data Analytics
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Using Big data engineering tools for enhanced decision making</li>
              <li>
                Creating dashboard & reports visualization for analyzing Big data
              </li>
              <li>Storing & processing data, extracting insights</li>
              <li>
                Implementing & deploying solutions in the public cloud, or on-prem
              </li>
              <li>
                Providing efficient data cataloging to understand the data
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12">
          <p className="text-lg text-gray-700 mb-4">
            Looking for a data engineering service provider?
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-all">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page1;
