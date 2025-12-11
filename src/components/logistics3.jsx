import React from 'react';

// Main component for the Cargo Damage Detection section
const Logistics3 = () => {
  return (
    <div className="bg-white font-sans text-gray-800">
      <div className="container mx-auto max-w-6xl px-4 py-1 md:py-10">
        
        {/* Main Content Section */}
        {/* Uses flex for mobile and grid for desktop to allow for reordering */}
        <div className="flex flex-col md:grid md:grid-cols-2 md:items-start md:gap-x-12">

          {/* Heading - Appears first on mobile */}
          <h2 className="text-2xl md:text-3xl font-bold md:col-start-2 md:row-start-1">
            Cargo Damage Detection with Computer Vision
          </h2>
          
          {/* Image Section - Appears second on mobile */}
          <div className="w-full my-6 md:my-0 md:col-start-1 md:row-start-1 md:row-span-2">
            <img 
              src="/vision.webp" 
              alt="Shipping containers with one highlighted for damage detection" 
              className="w-full h-auto object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/e2e8f0/4a5568?text=Cargo+Containers'; }}
            />
          </div>
          
          {/* Text Content Section - Appears third on mobile */}
          <div className="w-full md:col-start-2 md:row-start-2">
            <p className="text-gray-600 mb-4 leading-relaxed">
              It's easy to redefine your daily transportation tasks with computer vision and imaging in intelligent transportation systems. Adding another set of eyes with cutting-edge capabilities, you enable better visual cargo inspection. Get automated defect detection to prove the integrity of goods on incoming containers. By assessing and detecting cargo damage, you'll avoid rework loops and additional costs.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Identifying non-compliance in the container's attributes quickly ensures regulatory compliance. Implement computer vision systems to optimize space in freighters and ships and yield maximum revenue potential. Using computer vision and imaging, perform hands-free smart warehouse analysis. Use camera-based systems to make goods identification easier when you most need it. Enable faster and more accurate handling of goods.
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

export default Logistics3;