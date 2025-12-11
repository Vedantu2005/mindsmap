// /src/components/market2.jsx

import React from 'react';

const Market2 = () => {
  const data = {
    image: '/market1.webp',
    title: 'Data Analytics: Better Conversions with User-Centric Reporting',
    description: 'Looking for a way to increase your conversion rates and review marketing metrics, forecast campaign performance, and manage the entire marketing budget with ease? Apply Big data analytics to your business for complex customer data analysis.',
    points: [
      'Audience analysis, segmentation and personalized ad targeting',
      'Real-time user behavior patterns analysis and predictive analytics',
      'Marketing metrics tracking and next best action',
      'Automated competitive analysis',
      'Smart content analysis'
    ]
  };

  return (
    <div className="bg-white font-sans py-16 md:py-10 px-4">
      <div className="container mx-auto max-w-6xl">

        {/* --- Header Section --- */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Areas of Expertise
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Leverage our expertise to speed up your digital transformation, reduce ad costs and enhance your
            customer experience with top-notch AI technologies.
          </p>
        </div>

        {/* --- Content Section --- */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          
          {/* Image Column */}
          <div className="w-full md:w-1/2">
            <img 
              src={data.image} 
              alt={data.title}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Text Content Column */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{data.title}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">{data.description}</p>
            <ul className="space-y-3">
              {data.points.map((point, index) => (
                <li key={index} className="flex items-start">
                  {/* Custom blue square bullet point */}
                  <span className="flex-shrink-0 w-2 h-2 bg-[#77bce8] rounded-sm mr-3 mt-[9px]"></span>
                  <span className="text-gray-600">{point}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Market2;