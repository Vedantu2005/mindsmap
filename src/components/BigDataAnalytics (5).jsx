import React from "react";

const Page4 = () => {
  return (
    <div className="flex justify-center px-4 py-10">
      <div className="max-w-6xl w-full">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">
            How We Help Scale Up Your Business
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Create data stories and generate transformative insights to be ahead
            of the competition.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Card 1 */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <img
              src="/BigDataAnalytics/page4-1.svg"
              alt=""
              className="w-14 sm:w-16 md:w-20 flex-shrink-0"
            />
            <div>
              <h3 className="text-lg font-semibold mb-2">Data Management</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Let our experts show you the power of high-quality data. As a
                leading Big data analytics company, we guide our clients in
                maintaining a robust data framework. Our team of engineers has
                deep expertise in ingesting, storing, and organizing your
                corporate data through cutting-edge functionality.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <img
              src="/BigDataAnalytics/page4-2.svg"
              alt=""
              className="w-14 sm:w-16 md:w-20 flex-shrink-0"
            />
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Data Warehouse Services
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Request our big data analytics consulting services to ensure
                your data consistency. We assist our clients in a full suite of
                DWH practices, including implementation, upgrades, and migration
                of data warehouses. Mindsmap AI’ engineers can also build a
                full-fledged DWH solution or consult on optimizing current DWH
                performance.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <img
              src="/BigDataAnalytics/page4-3.svg"
              alt=""
              className="w-14 sm:w-16 md:w-20 flex-shrink-0"
            />
            <div>
              <h3 className="text-lg font-semibold mb-2">
                DataOps for Enterprise Data Management
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                We merge best agile practices with data analytics to enable your
                data transformation journey. Our DataOps services allow
                companies to automate and streamline data flows, unleashing
                relevant insights. DataOps implementation also renovates the
                data life cycle, from data retrieval to analysis by creating a
                unified flow of data.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <img
              src="/BigDataAnalytics/page4-4.svg"
              alt=""
              className="w-14 sm:w-16 md:w-20 flex-shrink-0"
            />
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Business Intelligence and Analytics Solutions
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Business Intelligence and analytics services at Mindsmap AI help
                our clients transform data into smart visualizations. We
                leverage robust BI solutions and build bespoke platforms to
                amplify the intelligence lifeblood of your business. Make
                informed decisions with our BI services and handle end-to-end
                processes from data storage to delivery.
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <img
              src="/BigDataAnalytics/page4-5.svg"
              alt=""
              className="w-14 sm:w-16 md:w-20 flex-shrink-0"
            />
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Artificial Intelligence for Big Data
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                We link your data ecosystem with intelligent algorithms to
                unearth actionable insights and automate decision-making. Smart
                systems also allow you to leverage advanced analytics
                capabilities like augmented or predictive analytics and process
                vast stores of data. At Mindsmap AI, we build all types of AI
                functionality - from deep learning models to Robotic Process
                Automation.
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <img
              src="/BigDataAnalytics/page4-6.svg"
              alt=""
              className="w-14 sm:w-16 md:w-20 flex-shrink-0"
            />
            <div>
              <h3 className="text-lg font-semibold mb-2">Data Science</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Mindsmap AI renders data science services with Machine Learning,
                Artificial Intelligence, and Deep Learning seamlessly baked into
                it. Our team of expert data scientists creates powerful
                analytical modules to address your data challenges. Respond more
                effectively to market changes and customer needs with our data
                science expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;
