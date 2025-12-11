import React from "react";

const Page2 = () => {
  return (
    <div className="flex justify-center items-center px-4 py-12">
      <div className="max-w-4xl w-full text-center">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-3">
            Big Data Engineering: Benefits for Your Business
          </h2>
          <p className="text-gray-600 text-lg">
            Embrace data-driven decision-making with custom data engineering
            solutions.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <img
              src="/BigDataEng/page2-1.svg"
              alt=""
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Streamlined Decision Making
            </h3>
            <p className="text-gray-700">
              Develop bespoke data engineering software for data analysis and
              insight extraction.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <img
              src="/BigDataEng/page2-2.svg"
              alt=""
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              New Business Opportunities
            </h3>
            <p className="text-gray-700">
              Use data insights to uncover new business opportunities and
              scale-up.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <img
              src="/BigDataEng/page2-3.svg"
              alt=""
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Improved Product Quality
            </h3>
            <p className="text-gray-700">
              Analyze customer data to learn about their needs and preferences
              and deliver the best possible experience.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <img
              src="/BigDataEng/page2-4.svg"
              alt=""
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Cost Reduction</h3>
            <p className="text-gray-700">
              Drive down costs by automating information collection, extraction,
              and analysis.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <img
              src="/BigDataEng/page2-5.svg"
              alt=""
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Business Workflow Automation
            </h3>
            <p className="text-gray-700">
              Automate monotonous tasks and make internal processes more
              efficient.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <img
              src="/BigDataEng/page2-6.svg"
              alt=""
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Speed up Processes</h3>
            <p className="text-gray-700">
              Automate whatever you can, improve practices, and boost business
              efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
