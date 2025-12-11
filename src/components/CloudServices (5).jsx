import React from "react";

const Page2 = () => {
  return (
    <div className="px-6 sm:px-10 md:px-16 lg:px-24 bg-white text-center">
      {/* Header Section */}
      <div className="max-w-5xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Our Cloud Expertise
        </h2>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          As a certified cloud development partner, Mindsmap AI performs a wide
          range of cloud-based services across AWS and Azure cloud ecosystems
          and embeds BI tools to bring your data to life.
        </p>
      </div>

      {/* First Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto mb-16">
        {/* Each Box */}
        <div className="border border-gray-300 rounded-2xl p-6 hover:border-[rgb(11,135,215)] hover:shadow-lg transition-all duration-300 group">
          <img src="/CloudService/page2-1.svg" alt="" className="mx-auto mb-4 h-16" />
          <h2 className="text-xl font-semibold mb-2 text-[rgb(11,135,215)] group-hover:text-[rgb(11,135,215)]">
            AWS Data & Analytics
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Build, secure, and seamlessly scale your cloud service solutions
            within a diverse AWS ecosystem. Benefit from the broadest portfolio
            of purpose-built analytics services, scalable data lakes, and
            warehouses. Adjust to evolving data needs with our AWS cloud-based
            services.
          </p>
        </div>

        <div className="border border-gray-300 rounded-2xl p-6 hover:border-[rgb(11,135,215)] hover:shadow-lg transition-all duration-300 group">
          <img src="/CloudService/page2-2.svg" alt="" className="mx-auto mb-4 h-16" />
          <h2 className="text-xl font-semibold mb-2 text-[rgb(11,135,215)] group-hover:text-[rgb(11,135,215)]">
            AWS Machine Learning & AI
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Generate insights via a comprehensive suite of smart tools. Enhance
            your customer experience, optimize business processes, or identify
            new revenue streams with our AWS ML expertise. Our AI engineers
            deploy an intelligent architecture tailored to your business and
            infrastructure needs.
          </p>
        </div>

        <div className="border border-gray-300 rounded-2xl p-6 hover:border-[rgb(11,135,215)] hover:shadow-lg transition-all duration-300 group">
          <img src="/CloudService/page2-3.svg" alt="" className="mx-auto mb-4 h-16" />
          <h2 className="text-xl font-semibold mb-2 text-[rgb(11,135,215)] group-hover:text-[rgb(11,135,215)]">
            AWS Serverless
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Adapt faster to changes and market shifts with elastic file storage
            based on AWS Serverless infrastructure. Scale with real-time demand,
            lower your data processing costs and let the cloud do the heavy
            lifting. Go beyond traditional computing to innovate faster,
            smarter, and with fewer resources.
          </p>
        </div>

        <div className="border border-gray-300 rounded-2xl p-6 hover:border-[rgb(11,135,215)] hover:shadow-lg transition-all duration-300 group">
          <img src="/CloudService/page2-4.svg" alt="" className="mx-auto mb-4 h-16" />
          <h2 className="text-xl font-semibold mb-2 text-[rgb(11,135,215)] group-hover:text-[rgb(11,135,215)]">
            AWS IoT
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Connect your devices, tools, and applications into a unified
            distributed infrastructure for your IoT project. Process, secure,
            and act upon ample data from remotely connected devices and sensors.
            Establish a robust security posture across the whole IoT ecosystem
            and unlock uninterrupted information flows.
          </p>
        </div>
      </div>

      {/* Second Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        <div className="border border-gray-300 rounded-2xl p-6 hover:border-[rgb(11,135,215)] hover:shadow-lg transition-all duration-300 group">
          <img src="/CloudService/page2-5.svg" alt="" className="mx-auto mb-4 h-16" />
          <h2 className="text-xl font-semibold mb-2 text-[rgb(11,135,215)] group-hover:text-[rgb(11,135,215)]">
            Business Intelligence & Data Visualizations
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Uncover hidden patterns, enable data discovery, and communicate
            insights to decision-makers with custom dashboards and interactive
            reporting. Leverage visualization tools like Power BI, Tableau, and
            Qlik Sense to transform raw data into actionable guidelines.
          </p>
        </div>

        <div className="border border-gray-300 rounded-2xl p-6 hover:border-[rgb(11,135,215)] hover:shadow-lg transition-all duration-300 group">
          <img src="/CloudService/page2-6.svg" alt="" className="mx-auto mb-4 h-16" />
          <h2 className="text-xl font-semibold mb-2 text-[rgb(11,135,215)] group-hover:text-[rgb(11,135,215)]">
            Azure Data & Analytics
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Leverage enterprise-grade solutions for data warehousing, advanced
            analytics, and real-time streaming. Make your data management
            cost-effective and compliance-ready. Let our experts help you make
            the most of Azure cloud services and its unmatched capabilities for
            Big data analysis.
          </p>
        </div>

        <div className="border border-gray-300 rounded-2xl p-6 hover:border-[rgb(11,135,215)] hover:shadow-lg transition-all duration-300 group">
          <img src="/CloudService/page2-7.svg" alt="" className="mx-auto mb-4 h-16" />
          <h2 className="text-xl font-semibold mb-2 text-[rgb(11,135,215)] group-hover:text-[rgb(11,135,215)]">
            Databricks Implementation
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Bring vast amounts of data to work in a unified Databricks data
            storage. Eliminate data gaps, adopt business intelligence, and
            implement machine learning for automated insight generation. Cover
            your needs with a single cloud as a service solution and unleash
            seamless knowledge sharing within the company.
          </p>
        </div>

        <div className="border border-gray-300 rounded-2xl p-6 hover:border-[rgb(11,135,215)] hover:shadow-lg transition-all duration-300 group">
          <img src="/CloudService/page2-8.svg" alt="" className="mx-auto mb-4 h-16" />
          <h2 className="text-xl font-semibold mb-2 text-[rgb(11,135,215)] group-hover:text-[rgb(11,135,215)]">
            Snowflake Deployment
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Speed-to-insights with an enterprise-ready data warehouse that
            delivers simplicity without sacrificing functionality. Enable data
            sharing for decision-making, achieve supreme performance for faster
            processing, and tap into multiple integrations for a broader data
            view with our Snowflake expertise.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page2;
