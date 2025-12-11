import React, { useEffect } from "react";

const services = [
  {
    title: "Big Data Consulting",
    icon: "/icon-conversation.svg",
    description:
      "We review your business processes vs business goals set and offer the best way to digitize it. As a big data development service provider, we'll make it data-driven and transparent in terms of decision-making. We'll provide project assessment, design, implementation, testing, deployment, and support on-demand.",
  },
  {
    title: "Data Infrastructure & Engineering",
    icon: "/icon-data-engineering.svg",
    description:
      "We'll collect, clean and structure your data for analysis and visualisation. We'll design a data pipeline with real-time data streaming, batch data streaming or lambda architecture, build data lakes and warehouses. Big data implementation services include data warehouse architecture consulting and development, implementation, advancement or migration.",
  },
  {
    title: "Data Analytics",
    icon: "/icon-data-analysis-2.svg",
    description:
      "We'll arrange data lakes and warehouses for effective data storage, retrieval, and insights mining. We get raw data coming from businesses' various sources. Considering business's specifics, we clean and analyze data, and yet find new ways of using it to enhance the business' value.",
  },
  {
    title: "Data Visualization",
    icon: "/icon-media-monitoring-2.svg",
    description:
      "We visualise insights mined, so it's easy-to-understand for the business' owner. We agree on reports and dashboards, and develop a system to generate them based on data from data lakes and warehouses. Data visualisation is insightful and valuable for reshaping business strategy and improving its competitiveness on the market.",
  },
  {
    title: "Artificial Intelligence",
    icon: "/icon-implementing.svg",
    description:
      "Based on the data, we build custom AI models that simplify decision-making. Outsourcing big data analysis to artificial intelligence, you prevent human error, improve business efficiency and cut costs.",
  },
];

const logos = [
  "bdc1.svg",
  "bdc2.svg",
  "bdc3.svg",
  "bdc4.svg",
  "bdc5.svg",
  "bdc6.svg",
  "bdc7.svg",
  "bdc8.svg",
  "bdc9.svg",
  "bdc10.svg",
];

const BigDataTrust = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="min-h-screen bg-[#F7FAFC] flex flex-col items-center text-center font-sans">

      <section className="py-12 w-full max-w-6xl px-4">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-8">
          Trusted by Innovative Companies
        </h2>

        <div className="overflow-hidden w-full relative">
          <div
            className="flex gap-10 w-max"
            style={{
              animation: "scroll 25s linear infinite",
            }}
          >
            {logos.concat(logos).map((logo, index) => (
              <img
                key={index}
                src={`/${logo}`}
                alt={`logo-${index}`}
                className="h-10 md:h-12 object-contain opacity-80 hover:opacity-100 transition"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full max-w-6xl px-4 pb-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
            Big Data Development for Your Company
          </h3>
          <p className="text-gray-700 leading-relaxed text-base mb-8">
            We provide insights-as-a-service: you get actionable business insights
            out of your data based on specific data pipelines designed to achieve
            your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mx-auto w-full max-w-6xl mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white p-6 rounded-lg shadow-md transition-all duration-300 overflow-hidden text-left min-h-[204px] w-full
                hover:bg-blue-100 hover:shadow-xl cursor-pointer"
            >
              <div className="flex flex-col h-full justify-center items-start space-y-4 transition-opacity duration-300 group-hover:opacity-0 group-hover:invisible absolute inset-0 p-6">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="h-16 w-16 object-contain"
                />
                <span className="text-2xl font-semibold text-gray-800">
                  {service.title}
                </span>
              </div>

              <div className="absolute inset-0 p-6 flex flex-col justify-center items-start text-left transition-opacity duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-700 text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center space-y-6 mt-8">
            <p className="text-lg text-gray-700">
                Need big data app development?
            </p>
            <button 
                className="px-8 py-3 border border-[#1a66cc] text-[#1a66cc] rounded-md hover:bg-[#1a66cc] hover:text-white transition cursor-pointer"
                onClick={() => console.log("Contact us clicked")} // Placeholder action
            >
              Contact us 
            </button>
        </div>
      </section>
    </div>
  );
};

export default BigDataTrust;
