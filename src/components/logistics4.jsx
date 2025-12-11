import React from 'react';

// Main component for the Automated Document Processing section
const Logistics4 = () => {
  return (
    <div className="bg-white font-sans text-gray-800">
      <div className="container mx-auto px-4 py-10 max-w-6xl">
        
        {/* Main Content Section */}
        {/* Uses flex for mobile and grid for desktop to allow for reordering */}
        <div className="flex flex-col md:grid md:grid-cols-2 md:items-start md:gap-x-12">

          {/* Heading - Appears first on mobile */}
          <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight md:col-start-1 md:row-start-1">
            Automated Document Processing with OCR & Data Capture
          </h2>

          {/* Image Section - Appears second on mobile */}
          <div className="w-full my-6 md:my-0 md:col-start-2 md:row-start-1 md:row-span-2">
            <img 
              src="/ocr.webp" 
              alt="Person scanning a document with a smartphone for OCR processing" 
              className="w-full h-auto object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/e2e8f0/4a5568?text=OCR+Scanning'; }}
            />
          </div>
          
          {/* Text Content Section - Appears third on mobile */}
          <div className="w-full md:col-start-1 md:row-start-2">
            <p className="text-gray-600 mb-4 leading-relaxed">
              Free up your resources by handing over your mundane tasks to custom OCR solutions. Using them, you do both - prevent human error and reduce labour costs. Want to automate invoice processing? OCR systems make it fast and error-free with minimal effort. Digitize your invoice handling to improve vendor relations and ensure audit readiness.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Looking to streamline back-office work? Implement OCR software to go digital with your paperwork. No manual input -- data extraction is made easier and faster with OCR. Take a click to capture, classify, and route data in a structured format. Focus on mission-critical tasks and let machines handle the rest.
            </p>

            {/* Contact Button */}
            <div className="mt-8">
              <button className="border border-[#77bce8] text-gray-700 py-2 px-6 rounded-md hover:bg-[#77bce8] hover:border-[#77bce8] cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200">
                Contact us
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Logistics4;