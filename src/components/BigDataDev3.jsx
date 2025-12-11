import React from "react";

const roadmapSteps = [
  {
    id: 1,
    title: "Business Challenge Review",
    description:
      "We analyze your business environment and domain specifics, performance, data sources, define the challenges and set up goals. Our team of skilled business analysts and engineers brainstorm to suggest to you the solutions that address your challenges and take your business to new heights.",
  },
  {
    id: 2,
    title: "Data Collection and Preparation",
    description:
      "We aggregate data into representations adapted for storage and processing. Preparation includes standardization, missing values handling, outliers filtering and other operations, e.g. specific to textual/visual information. We collect business data and transform it into a form processable by available intelligent tools.",
  },
  {
    id: 3,
    title: "Data Analysis",
    description:
      "To analyze data we use cutting-edge statistical methods, and various machine learning and data science algorithms. The insights we get during data analysis help the business owner see roadblocks or unobvious things in the business process and get them improved promptly.",
  },
  {
    id: 4,
    title: "Business Implementation",
    description:
      "We use data science tools and cloud platforms like AWS, Azure, and Google Cloud. If the client prefers an on-premise solution, we’re ready to create a custom system based on Python Scientific and ML Stack and integrate it into the client's business infrastructure using tools (databases, containerization, web frameworks, etc.) appropriate for the use case.",
  },
];

const BigDataApproach = () => {
  return (
    <div className="py-20 bg-white font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16">
          Our Approach
        </h2>

        <div className="relative flex flex-col items-center">
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-[3px] bg-[#ff9900] h-full z-0" />

          <div className="lg:hidden absolute left-7 w-[3px] bg-[#ff9900] h-full z-0" />

          {roadmapSteps.map((step, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={step.id}
                className={`relative flex flex-col lg:flex-row items-center w-full mb-24 last:mb-0 ${
                  isLeft ? "" : "lg:flex-row-reverse"
                }`}
              >
                <div
                  className={`absolute bg-white border-[4px] border-[#ff9900] rounded-full h-5 w-5 z-10 
                  lg:left-1/2 lg:transform lg:-translate-x-1/2
                  ${isLeft ? "left-5" : "left-5 lg:left-1/2"} `}
                />

                <div
                  className={`flex items-start w-full lg:w-1/2 px-8 mt-10 lg:mt-0 z-10 ${
                    isLeft ? "lg:text-left" : "lg:text-right"
                  }`}
                >
                  <div className="block lg:hidden w-8" />

                  <div className="text-left lg:text-inherit">
                    <div
                      className={`relative inline-block mb-4 ${
                        isLeft ? "" : "lg:ml-auto"
                      }`}
                    >
                      <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 flex items-center">
                        <span className="text-[#ff9900] mr-1">{step.id}.</span>{" "}
                        {step.title}
                      </h4>

                      <div
                        className={`absolute bg-[#ff9900] h-[2px] w-12 top-full mt-1 ${
                          isLeft ? "left-0" : "lg:right-0"
                        }`}
                      />
                    </div>

                    <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-md lg:max-w-none">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center space-y-4">
          <p className="text-lg text-gray-700">Get the most of your data</p>
          <button className="px-8 py-3 border border-[#1a66cc] text-[#1a66cc] rounded-md hover:bg-[#1a66cc] hover:text-white transition duration-300 cursor-pointer text-base font-medium">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default BigDataApproach;
