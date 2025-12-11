import React from "react";

const Page7 = () => {
  return (
    <div className="px-4 sm:px-6 py-10 bg-gray-50 text-center mt-7">
      {/* Heading */}
      <div className="max-w-4xl mx-auto mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">
          Benefits For Your Business
        </h2>
        <p className="text-gray-700 text-sm sm:text-base">
          Build a solid base for critical analysis that turns traditional
          intuitive decision-making into informed governance.
        </p>
      </div>

      {/* Responsive Grid for Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow text-center transition transform hover:scale-105 hover:shadow-lg">
          <img
            src="/DataWareHouse/page7-1.svg"
            alt=""
            className="mx-auto mb-4 w-16 h-16"
          />
          <h3 className="font-semibold mb-2">Improved performance</h3>
          <p className="text-gray-700 text-sm sm:text-base">
            Cast your nets wide and make sound decisions at all levels based on
            complete and comprehensive insights.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow text-center transition transform hover:scale-105 hover:shadow-lg">
          <img
            src="/DataWareHouse/page7-2.svg"
            alt=""
            className="mx-auto mb-4 w-16 h-16"
          />
          <h3 className="font-semibold mb-2">Data quality improvement</h3>
          <p className="text-gray-700 text-sm sm:text-base">
            Amplify your decision-making with standardized, accurate, and
            real-time information from all touchpoints.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow text-center transition transform hover:scale-105 hover:shadow-lg">
          <img
            src="/DataWareHouse/page7-3.svg"
            alt=""
            className="mx-auto mb-4 w-16 h-16"
          />
          <h3 className="font-semibold mb-2">Automated task management</h3>
          <p className="text-gray-700 text-sm sm:text-base">
            Hand over manual tasks to pre-defined flows so that you can focus on
            what matters the most for your company.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-6 rounded-lg shadow text-center transition transform hover:scale-105 hover:shadow-lg">
          <img
            src="/DataWareHouse/page7-4.svg"
            alt=""
            className="mx-auto mb-4 w-16 h-16"
          />
          <h3 className="font-semibold mb-2">
            A strong foundation for analytics
          </h3>
          <p className="text-gray-700 text-sm sm:text-base">
            Employ predictive analysis, establish cause-and-effect relationships
            and adapt to changes with what-if scenarios.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-white p-6 rounded-lg shadow text-center transition transform hover:scale-105 hover:shadow-lg">
          <img
            src="/DataWareHouse/page7-5.svg"
            alt=""
            className="mx-auto mb-4 w-16 h-16"
          />
          <h3 className="font-semibold mb-2">Proactive asset management</h3>
          <p className="text-gray-700 text-sm sm:text-base">
            Flag anomalies to prevent disruptions and identify improvement areas
            to increase ROI and stand out among competitors.
          </p>
        </div>

        {/* Card 6 */}
        <div className="bg-white p-6 rounded-lg shadow text-center transition transform hover:scale-105 hover:shadow-lg">
          <img
            src="/DataWareHouse/page7-6.svg"
            alt=""
            className="mx-auto mb-4 w-16 h-16"
          />
          <h3 className="font-semibold mb-2">
            Governed data access and management
          </h3>
          <p className="text-gray-700 text-sm sm:text-base">
            Increase knowledge sharing and promote collaborative workflows
            without compromising security.
          </p>
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center">
        <button className="border-2 border-blue-500 text-blue-500 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors text-sm sm:text-base md:text-lg">
          Share Your Data Challenges
        </button>
      </div>
    </div>
  );
};

export default Page7;
