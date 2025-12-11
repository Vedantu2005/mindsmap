import React from "react";

const MLLifeCycle = () => {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 text-gray-800 font-sans antialiased">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-16">
        {/* Left Content Column */}
        <div className="lg:pr-10">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-gray-900">
            The Machine Learning Project Lifecycle at a Glance
          </h2>

          <p className="text-base leading-relaxed mb-6 text-gray-700">
            We take care of your entire project from day one, starting with
            clarifying the requirements and culminating with the delivery of a
            fully automated system.
          </p>

          <p className="text-base leading-relaxed mb-8 text-gray-700">
            As one of the leading machine learning consulting and development
            companies, Mindsmap AI presents a world-class data science team and
            machine learning consultants. Our experts have hands-on experience
            in applying cutting-edge ML tools and development approaches. They
            also use Cross-Industry Standard Process for Data Mining (CRISP-DM)
            to ensure the highest quality solutions and services that meet your
            requirements.
          </p>
        </div>

        {/* Right Image Column */}
        <div className="mt-12 lg:mt-0 flex justify-center">
          <img
            src="/machine-learning-cube-data.svg"
            alt="Machine Learning Project Lifecycle Diagram"
            className="max-w-full h-auto w-[700px] object-contain"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/500x500/e6f3ff/007bff?text=ML+Lifecycle+Diagram";
            }}
          />
        </div>
      </div>
                  <div className="text-center">
                <button className="px-8 py-3 bg-white border-2 border-blue-500 text-blue-600 hover:bg-blue-50 transition-colors duration-200 rounded-md shadow-sm text-base font-medium">
                    Start Your Project
                </button>
            </div>
    </section>
  );
};

export default MLLifeCycle;
