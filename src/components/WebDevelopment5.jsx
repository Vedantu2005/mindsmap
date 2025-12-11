import React from "react";

export default function FutureWeb() {
  const features = [
    {
      icon: "/icon-scoring.svg",
      title: "Excellent Performance",
      desc: "To be robust and work smoothly.",
    },
    {
      icon: "/icon-process-alt.svg",
      title: "Well-designed Architecture",
      desc: "To be able to evolve according to your growing business.",
    },
    {
      icon: "/icon-diamond.svg",
      title: "Eye-catching Design",
      desc: "To win your users’ hearts with a proper user interface.",
    },
    {
      icon: "/icon-productivity-2.svg",
      title: "Vast Functionality",
      desc: "To cover all your business requirements and needs.",
    },
  ];

  return (
    <section className="w-full flex flex-col items-center py-10 bg-white -mt-5">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">
        Your Future Web App Will Have
      </h2>

      <div className="w-[90%] md:w-[70%] lg:w-[60%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-start p-6 bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.03)] border border-transparent hover:border-blue-100 hover:shadow-[0_6px_16px_rgba(0,0,0,0.05)] transition duration-300"
          >
            <img
              src={feature.icon}
              alt={feature.title}
              className="w-18 h-18 mr-4 object-contain"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                {feature.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
