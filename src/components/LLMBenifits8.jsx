import React from 'react';
import Company from './Company';

// Data for the feature blocks
const features = [
  {
    icon: '/icon-cup.svg',
    title: 'Experience You Can Trust',
    description:
      'Over 150 global companies have chosen us to deliver AI solutions at scale — and the results speak for themselves.',
  },
  {
    icon: '/icon-five-stars.svg',
    title: 'Speed-To-Market',
    description:
      'We owe our immaculate delivery record to calibrated processes and a mature product development approach.',
  },
  {
    icon: '/icon-medal.svg',
    title: 'High-Grade Solutions',
    description:
      'No matter the challenge, our team of 40+ developers finds an optimal solution that propels your business to new heights.',
  },
];

const WhyMindmapAi = () => {
  return (
    <>
    <section className="bg-white py-14 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Mindmap AI?
          </h2>
          <p className="mt-1 text-lg leading-8 text-gray-600">
            As one of the leading AI companies, we help you leverage the power of LLMs in your web and mobile applications.
          </p>
        </div>

        {/* Features Section */}
        <div className="mx-auto mt-6 max-w-none sm:mt-20 lg:mt-24 lg:max-w-7xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col items-center text-center">
                
                {/* Icon */}
                <div className="flex h-24 w-24 items-center justify-center">
                  <img
                    src={feature.icon}
                    alt="" // Decorative
                    className="h-20 w-20 object-contain"
                  />
                </div>
                
                {/* Title */}
                <dt className="mt-4 font-semibold text-xl text-gray-900">
                  {feature.title}
                </dt>
                
                {/* Description */}
                <dd className="mt-2 text-base leading-7 text-gray-700 max-w-xs">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        
      </div>
    </section>
    <Company />
    </>

  );
};

export default WhyMindmapAi;