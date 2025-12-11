import React, { useState } from 'react';

// Data for the different logistic problems and solutions
const solutionsData = [
  {
    title: 'Cutting transportation logistics costs',
    content: {
      description: 'Logistics costs can easily make up for 50% of total costs in some industries. Rising fuel prices and increasing demand further aggravate this problem.',
      solution: {
        title: 'Fleet management software',
        text: 'This business transportation solution will help your company easily identify saving potentials whether it’s fuel consumption or vehicle maintenance. Improved route planning will also get the most of your resources, thus saving more resources in the long run.'
      }
    }
  },
  {
    title: 'Avoiding cargo damage',
    content: {
      description: 'Damaged cargo leads to significant financial losses, insurance claims, and a decline in customer satisfaction. Proper handling and monitoring are crucial.',
      solution: {
        title: 'IoT Sensors & Monitoring',
        text: 'Implement real-time monitoring with IoT sensors that track temperature, humidity, and shock. Get instant alerts for any deviations to prevent damage before it happens.'
      }
    }
  },
  {
    title: 'Inventory management',
    content: {
      description: 'Inaccurate inventory tracking results in stockouts or overstocking, tying up capital and affecting order fulfillment. Manual tracking is prone to errors.',
      solution: {
        title: 'Warehouse Management System (WMS)',
        text: 'A smart WMS automates inventory tracking, optimizes storage space, and streamlines the picking and packing process, ensuring accuracy and efficiency.'
      }
    }
  },
  {
    title: 'Ensuring end-to-end visibility',
    content: {
      description: 'Lack of visibility across the supply chain makes it difficult to track shipments, anticipate delays, and communicate effectively with stakeholders.',
      solution: {
        title: 'Centralized Tracking Platform',
        text: 'Gain a single source of truth with a platform that integrates data from carriers, GPS, and sensors, providing complete visibility from origin to destination.'
      }
    }
  },
  {
    title: 'Heavy city traffic and unpredictable ETA',
    content: {
      description: 'Urban congestion and unforeseen road events cause major delays, leading to missed delivery windows, and increased fuel consumption.',
      solution: {
        title: 'AI-Powered Route Optimization',
        text: 'Utilize AI algorithms that analyze real-time traffic data, weather conditions, and delivery constraints to calculate the most efficient routes and provide accurate ETAs.'
      }
    }
  }
];

// Main component for the interactive solutions section
const Logistics5 = () => {
  const [activeTab, setActiveTab] = useState(0);

  const ChevronIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-5 h-5 transition-transform duration-300 ${className}`}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  );

  return (
    <div className="bg-white font-sans text-gray-800 py-1 md:py-10">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Logistic Problems and Our Solutions
          </h1>
          <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
            Sinking in complex processes? Leverage our AI expertise for efficient supply chain management. Eliminate your logistics silos and boost your performance with smart systems.
          </p>
        </div>

        {/* Main Content Section */}
        
        {/* Desktop View: Tabs */}
        <div className="hidden md:flex flex-row gap-8">
          {/* Left Column: Tab Buttons */}
          <div className="w-full md:w-1/3 flex flex-col space-y-3">
            {solutionsData.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`text-left p-4 rounded-lg cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  activeTab === index 
                    ? 'bg-[#00B4D8] text-white shadow-lg' 
                    : 'bg-blue-50 hover:bg-blue-100 text-gray-700'
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
          
          {/* Right Column: Tab Content */}
          <div className="w-full md:w-2/3">
            <div className="bg-white p-8 rounded-lg border border-blue-100 shadow-sm min-h-[250px] md:min-h-full">
              {solutionsData[activeTab ?? 0] && (
                <>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {solutionsData[activeTab ?? 0].content.description}
                  </p>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Solution: {solutionsData[activeTab ?? 0].content.solution.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {solutionsData[activeTab ?? 0].content.solution.text}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Mobile View: Accordion */}
        <div className="md:hidden w-full space-y-2">
            {solutionsData.map((item, index) => (
                <div key={index} className="rounded-lg overflow-hidden bg-blue-50">
                    <button
                        onClick={() => setActiveTab(activeTab === index ? null : index)}
                        className="w-full flex justify-between items-center p-4 text-left"
                    >
                        <span className="font-medium text-gray-800">{item.title}</span>
                        <ChevronIcon className={activeTab === index ? 'rotate-180' : ''} />
                    </button>
                    <div className={`transition-all duration-500 ease-in-out ${activeTab === index ? 'max-h-screen' : 'max-h-0'}`}>
                       <div className="p-4 border-t border-blue-200 bg-white">
                         <p className="text-gray-600 mb-4 leading-relaxed">
                            {item.content.description}
                          </p>
                          <div>
                            <h3 className="font-bold text-gray-800 mb-2">Solution: {item.content.solution.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                              {item.content.solution.text}
                            </p>
                          </div>
                       </div>
                    </div>
                </div>
            ))}
        </div>

        {/* Footer Button */}
        <div className="text-center mt-12">
           <button className="border border-[#77bce8] text-gray-700 py-3 px-8 rounded-md hover:bg-[#77bce8] hover:border-[#77bce8] cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200">
            Tell us your problem!
          </button>
        </div>

      </div>
    </div>
  );
};

export default Logistics5;

