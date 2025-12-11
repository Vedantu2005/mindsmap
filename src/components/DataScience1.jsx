import React, { useEffect } from "react";

const services = [
  {
    title: "Data Transformation",
    icon: "/icon-data-science.svg",
    description:
      "Give your data its due by eliminating silos, democratizing access, and communicating insights across the organization. Our data analytics services company puts your infrastructure straight and lowers the cost of insights.",
  },
  {
    title: "Machine Learning",
    icon: "/icon-implementing.svg",
    description:
      "Our ML engineers match your analytics challenges with the right supervised, unsupervised, or reinforcement learning algorithms, deliver autonomous data science solutions, and provide comprehensive machine learning consulting.",
  },
  {
    title: "Neural Networks and Deep Learning",
    icon: "/icon-deep-learning.svg",
    description:
      "We bring in our expertise in neural nets to enable transformative data science consulting and data science model development for your company. We create accurate forecasting, fraud detection, speech recognition solutions, and more to meet your project needs.",
  },
  {
    title: "Natural Language Processing",
    icon: "/icon-voice-man.svg",
    description:
      "We help you make sense of customer insights across all touchpoints, no matter the format, volume, or complexity. Turn to our data science development company and get to know your customer with our custom NLP solutions.",
  },
  {
    title: "BI & Visualizations",
    icon: "/icon-data-analysis-2.svg",
    description:
      "Sharpen business performance, keep your teams focused on a single outcome, and contextualize insights to make them more actionable. We help your company tap into business intelligence and customize it to your unique needs.",
  },
  {
    title: "Cloud Environments",
    icon: "/icon-cloud-2.svg",
    description:
      "Migrate your assets to the cloud and get a scalable, secure, and innovation-ready foundation for your projects. Our certified cloud engineers help you adopt and right-size cloud resources for cost-effective solution development.",
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

const DataScienceTrust = () => {
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
            Solid Data Foundation for Your Business Model
          </h3>
          <p className="text-gray-700 leading-relaxed text-base mb-8">
            Cross-functional data science and analytics services at the intersection of next-gen technologies and ample capabilities.
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
      </section>
    </div>
  );
};

export default DataScienceTrust;
