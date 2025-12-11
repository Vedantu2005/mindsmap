import React from 'react';

// Define the expertise data in an array for easy mapping
const expertiseData = [
  {
    icon: '/icon-circle-ml.svg', // Image with brain & gear
    title: 'Machine Learning',
    description: (
      <>
        Our developers push the boundaries of generative AI and create
        innovative solutions with{' '}
        <a href="#" className="text-blue-600 hover:underline transition-colors duration-300">
          machine learning
        </a>
        . Be it predictive analytics
        or model training, we supplement your models with all the AI features
        your business needs.
      </>
    ),
  },
  {
    icon: '/icon-circle-nlp.svg', // Image with 'A' logo
    title: 'Natural Language Processing',
    description: (
      <>
        Drawing on our decade years of experience, we help your applications
        mine data across formats and platforms to unearth hidden insights.
        Our developers adapt your sentiment analysis and{' '}
        <a href="#" className="text-blue-600 hover:underline transition-colors duration-300">
          customer analysis
        </a>{' '}
        applications where it truly matters.
      </>
    ),
  },
  {
    icon: '/icon-circle-cloud.svg', // Image with cloud
    title: 'Cloud Computing',
    description: (
      <>
        Our{' '}
        <a href="#" className="text-blue-600 hover:underline transition-colors duration-300">
          cloud engineers
        </a>{' '}
        make sure you have the right tech infrastructure
        and operating model to embrace the benefits of language models
        and AI. When needed, we perform a full-scale cloud migration or
        optimize your existing cloud resources.
      </>
    ),
  },
  {
    icon: '/icon-circle-data-engineering.svg', // Image with database & gear
    title: 'Data Engineering',
    description: (
      <>
        We rethink your business model with data at its core and set the right{' '}
        <a href="#" className="text-blue-600 hover:underline transition-colors duration-300">
          data practices
        </a>{' '}
        in place to give you a long-term platform for AI innovation.
        Build the foundation for change and stay prepared for future
        transformations.
      </>
    ),
  },
];

const Expertise = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Broad Expertise Meets Your Needs at Scale
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Our cross-functional teams help you overcome the complexity of LLM development.
          </p>
        </div>

        {/* Expertise Items Section */}
        <div className="mx-auto mt-20 max-w-2xl space-y-16 lg:max-w-5xl">
          {expertiseData.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center gap-y-8 lg:flex-row lg:items-center lg:gap-x-12"
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <img
                  className="h-40 w-40 object-contain"
                  src={item.icon}
                  alt="" // Decorative images
                />
              </div>

              {/* Text Content */}
              <div>
                <h3 className="text-2xl font-semibold leading-9 text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-gray-700">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Expertise;