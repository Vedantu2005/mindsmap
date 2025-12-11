import React from 'react';

const engineeringData = [
  {
    title: 'Data Analysis for Smart Design Engineering',
    problem: 'Automotive manufacturers perform complex simulations and numerous design iterations to stay competitive and compliant. These requirements generate a need to process huge information and get useful insights in an automated way.',
    solution: 'Process the simulation results in an automated way with machine learning systems. An end-to-end data pipeline handles vast amounts of data and produces valuable insights like parameters affecting simulation results.',
    imageUrl: '/data.webp',
    imageLeft: true,
  },
  {
    title: 'Visual Inspection for Automated Defect Detection',
    problem: 'High-quality standards are essential to achieve the longevity and reliability of vehicles. However, manual inspection is error-prone and expensive, thus decreasing the accuracy of malfunction analysis.',
    solution: 'Non-destructive visual testing that relies on 3D Geometry-based vision systems, enabling reliable and automated quality inspection. This AI automotive solution improves efficiency at your production sites and ensures traceability with low human intervention.',
    imageUrl: '/visual.webp',
    imageLeft: false,
  },
];

const Auto3 = () => {
  return (
    <div className="bg-white font-sans text-gray-800 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-20">
          {engineeringData.map((item, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-center">
              
              {/* Heading */}
              {/* Mobile: Row 1. Desktop: Row 1, column determined by imageLeft. */}
              <h2 className={`text-3xl font-bold mb-6 lg:mb-0 ${item.imageLeft ? 'lg:col-start-2' : 'lg:col-start-1'}`}>
                {item.title}
              </h2>

              {/* Image Section */}
              {/* Mobile: Row 2. Desktop: Spans 2 rows, column determined by imageLeft. */}
              <div className={`w-full my-6 lg:my-0 lg:row-span-2 ${item.imageLeft ? 'lg:col-start-1 lg:row-start-1' : 'lg:col-start-2 lg:row-start-1'}`}>
                <div className="relative ">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="rounded-xl w-full object-cover"
                  />
                </div>
              </div>

              {/* Text Content Section */}
              {/* Mobile: Row 3. Desktop: Row 2, column determined by imageLeft. */}
              <div className={`w-full ${item.imageLeft ? 'lg:col-start-2' : 'lg:col-start-1'}`}>
                <p className="mb-4">
                  <span className="font-semibold">Problem:</span> {item.problem}
                </p>
                <p>
                  <span className="font-semibold">Solution:</span> {item.solution}
                </p>
              </div>
            </div>
          ))}
          
          {/* Contact Us Section */}
          <div className="text-center lg:pt-5">
            <p className="text-gray-600 mb-6">Having another challenge?</p>
            <button className="px-8 py-3 border border-[#77bce8] rounded-lg cursor-pointer text-gray-700 hover:bg-[#77bce8] hover:border-[#77bce8] transition-colors">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auto3;

