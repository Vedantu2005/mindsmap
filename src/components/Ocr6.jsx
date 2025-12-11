import React from 'react';

// Data for the list of perks
const perks = [
  'Automates manual input and cuts paper-based workflow',
  'Reduces input errors by more than 90%',
  'Enables remote data capture via mobile devices',
  'Reduces data capture costs and time by more than 90%',
  'Automates transferring captured data',
  'Provides efficient automated invoice processing',
  'Facilitates invoices and receipts processing',
  'Makes package registration, tracking, and delivery time-efficient',
  'Reduces overall delivery costs',
  'Provides web data extraction services if needed',
];

// Custom bullet point component for the list
const BulletIcon = () => (
  <svg className="w-5 h-5 text-[#77bce8] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
);


const Ocr6 = () => {
  return (
    <div className="bg-white font-sans py-10 sm:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            OCR and Data Capture for Logistics & Transportation
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left Column: Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="text-gray-600 space-y-1 leading-relaxed">
              <p>
                Optical character recognition systems aim to digitize paper documents to enable automated data search, retrieval, and processing with little to no human involvement. OCR systems can help optimize business workflow involving numerous manual tasks. Companies of different sizes can make the most of the technology to meet the consumers' needs for expedited and more secure goods' shipment at a lower delivery cost.
              </p>
              <p>
                OCR scanning services provide logistics industry representatives with significant perks:
              </p>
            </div>
            
            {/* Perks List */}
            <ul className="mt-8 space-y-2">
              {perks.map((perk, index) => (
                <li key={index} className="flex items-start text-gray-700">
                  <BulletIcon />
                  <span>{perk.includes('efficient automated invoice processing') ? 
                    <>Provides <a href="#" className="text-[#77bce8] hover:underline">efficient automated invoice processing</a></> : 
                    perk}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Image */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            {/* Replace this with your actual image component or path */}
            <img 
              src="/ocr-scanning.svg" 
              alt="Logistics and data capture illustration" 
              className="w-full max-w-md h-auto"
            />
          </div>
        </div>

        {/* Concluding Text */}
        <div className="max-w-4xl mx-auto text-center text-gray-600 mt-16">
          <p>
            By adopting custom OCR data extraction software, you invest in a solution that automates data capture, both locally and remotely, processes it with a low error rate, ensures timely order delivery, and increases customer loyalty.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Ocr6;
