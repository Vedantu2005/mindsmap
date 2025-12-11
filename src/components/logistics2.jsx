import React from 'react';

// A simple blue square icon component for the list items
const BulletIcon = () => (
  <span className="flex-shrink-0 w-2 h-2 bg-[#77bce8] rounded-sm mr-3 mt-[9px]"></span>
);


// Main component for the logistics section
const Logistics2 = () => {
  return (
    <div className="bg-white font-sans -mt-25">
      <div className="container mx-auto max-w-6xl px-4 py-10 md:py-10">

        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Areas of Expertise
          </h1>
          <p className="max-w-4xl mx-auto text-gray-600 leading-relaxed">
            Deliver goods on time, budget, and at the speed your customers expect with smart logistics and transport solutions. Optimize delivery routes and ensure driver safety on the road with full suite software and services to carriers, freight forwarders, and logistics companies.
          </p>
        </div>

        {/* Main Content Section: Smart Logistics */}
        <div className="flex flex-col md:grid md:grid-cols-2 md:items-start md:gap-x-12">

          {/* Heading - Appears first on mobile */}
          <h2 className="text-2xl md:text-3xl font-bold md:col-start-1 md:row-start-1">
            Smart Logistics with Predictive Analytics
          </h2>

          {/* Image Section - Appears second on mobile */}
          <div className="w-full my-6 md:my-0 md:col-start-2 md:row-start-1 md:row-span-2">
            <img
              src="/analytics.webp"
              alt="Dashboard on a laptop showing predictive analytics for logistics"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Text Content Section - Appears third on mobile */}
          <div className="w-full md:col-start-1 md:row-start-2">
            <p className="text-gray-600 mb-4 leading-relaxed">
              Need efficient management solutions to drive business growth? Amplify your decision-making with predictive analytics in transportation. Be one-step ahead and plan future buying patterns with predictive analytics-based solutions.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Decrease inventory costs, boost sales, and enable more accurate reporting.
            </p>

            {/* List of features */}
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <BulletIcon />
                <span>Forecast goods demand, anticipate sales and seasonality</span>
              </li>
              <li className="flex items-start">
                <BulletIcon />
                <span>Use smart inventory management, enable your inventory sync and stock transparency with custom logistic software solutions</span>
              </li>
              <li className="flex items-start">
                <BulletIcon />
                <span>Execute order management and freight control easily with AI-enabled transport software solutions</span>
              </li>
              <li className="flex items-start">
                <BulletIcon />
                <span>Predict prices and make data-driven decisions with the custom freight rates prediction software.</span>
              </li>
            </ul>

            {/* Contact Button */}
            <div className="mt-8">
              <button className="border border-[#77bce8] text-gray-700 py-2 px-6 rounded-md hover:bg-[#77bce8] cursor-pointer hover:border-[#77bce8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200">
                Contact us
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Logistics2;
