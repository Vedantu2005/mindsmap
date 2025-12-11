import React from "react";

const Page2 = () => {
  const data = [
    {
      title: "Architecture Analysis",
      points: [
        "Analyzing the app and its needs along with business requirements",
        "Consulting on improvements and automation",
        "Building a plan for on-prem to cloud migration",
        "Designing solutions for a cloud-native app",
        "Creating an infrastructure upgrade roadmap",
        "Getting an action plan on future improvements.",
      ],
      img: "/BigDataAnalytics/page2-1.svg",
    },
    {
      title: "Architecture Improvement",
      points: [
        "Implementing best practices and automation processes into the existing infrastructure",
        "Automating all manual processes with CI/CD pipelines to reduce the cost of operation and minimize human errors",
        "Building robust and scalable infrastructure including on-prem integration on demand",
        "Implementing serverless solutions to reduce the cost of infrastructure and improve the overall performance of the application.",
      ],
      img: "/BigDataAnalytics/page2-2.svg",
    },
    {
      title: "Big Data Pipelines",
      points: [
        "Designing Big data analytics software solutions based on business requirements",
        "Developing, testing, evaluating and maintaining Big data analytics tools Preparing data for analysis including cleaning, data quality checks, and merging data to the single point of analysis",
        "Building event-based infrastructure for data processing",
        "End-to-end solutions including delivery to required Data Warehouses (including on-prem).",
      ],
      img: "/BigDataAnalytics/page2-3.svg",
    },
    {
      title: "Data Analysis and Visualization",
      points: [
        "Processing the data to the point of analysis with all data points required",
        "Preparing reports for stakeholders, including insights and predictions",
        "Creating custom algorithms for specific client’s needs",
        "Visualizing all reports and insights",
        "Creating visual dashboards, including deployments to the client’s side.",
      ],
      img: "/BigDataAnalytics/page2-4.svg",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
      {/* Header */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[rgb(23,50,77)] mb-4">
        Big Data Analytics Services for Digital Transformation
      </h1>
      <p className="text-gray-600 text-base sm:text-lg mb-12">
        Make analytical processes faster and more efficient with real-time Big
        data analytics.
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative bg-white border border-gray-200 rounded-2xl shadow-md p-6 text-left overflow-hidden transition hover:shadow-lg"
          >
            <h3 className="text-lg font-semibold mb-3 text-[rgb(23,50,77)]">
              {item.title}
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 marker:text-blue-400">
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <img
              src={item.img}
              alt=""
              className="absolute bottom-0 right-0 w-[80px] sm:w-[100px] md:w-[120px] opacity-60 translate-y-1/2"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page2;
