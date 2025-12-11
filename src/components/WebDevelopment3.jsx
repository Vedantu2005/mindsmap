import React from "react";

export default function ProcessFlow() {
  const phases = [
    {
      number: 1,
      title: "Discovery Phase",
      description:
        "We gather all the information about your business processes, put all requirements together, dive into your business domain and analyze all the aspects to understand the scope of future work. We build a team for your project and kick it off.",
    },
    {
      number: 2,
      title: "Web App Development Phase",
      description:
        "We build up a framework of the future web application, then we perform design, back-end and front-end development, and provide quality assurance service for the solution stabilization.",
    },
    {
      number: 3,
      title: "Deployment Phase",
      description:
        "When the application is ready, the web development team deploys and sets it up in accordance with the customer's environment to make sure that the solution performs stable work.",
    },
    {
      number: 4,
      title: "Maintenance Phase",
      description:
        "We support and maintain the application after installation to make sure your app functions properly. In case any problems appear we make some improvements to eliminate them.",
    },
  ];

  return (
    <section className="w-full py-10 flex flex-col items-center bg-white -mt-10">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
        Web Development Process Flow
      </h2>

      <div className="relative w-[90%] md:w-[50%] mx-auto px-4">
        <div className="absolute left-[31px] md:left-[38px] top-0 bottom-0 w-[3px] bg-gradient-to-b from-orange-400 to-yellow-400 rounded-full"></div>

        <div className="absolute left-[29px] md:left-[36px] top-0 w-[7px] h-[7px] bg-orange-400 rounded-full shadow-sm"></div>

        <div className="absolute left-[29px] md:left-[36px] bottom-0 w-[7px] h-[7px] bg-yellow-400 rounded-full shadow-sm"></div>

        <div className="flex flex-col space-y-20">
          {phases.map((phase) => (
            <div
              key={phase.number}
              className="relative flex items-start gap-8 md:gap-10"
            >
              <div className="relative z-10 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white border-2 border-orange-400 rounded-full shadow-[0_4px_12px_rgba(255,165,0,0.4)] text-orange-500 font-semibold text-lg">
                {phase.number}
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 text-lg mb-2">
                  {phase.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-[15px]">
                  {phase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
