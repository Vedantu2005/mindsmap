import React from 'react';

// Data for the service sections to keep the JSX clean and scalable
const servicesData = [
  {
    title: 'Strategy and Consulting',
    description: (
      <>
        Our generative AI development company offers <a href="#" className="text-blue-600 hover:underline">AI technology consulting</a> services that help you strategize, plan, and kick-start your project. Our experts estimate the impact of innovation on your operations, calculate your ROI, and provide all the levers needed to boost AI acceptance across your company.
      </>
    ),
    features: [
      'Business case analysis',
      'Proof of Concept',
      'Data analysis',
      'Project estimation and planning',
    ],
    imageSrc: '/videoframe_1767.png', // Replace with your image path
    imageAlt: 'AI Strategy and Consulting Illustration',
  },
  {
    title: 'Generative AI Development',
    description: (
      <>
        Our engineers design and implement custom language models based on the capabilities of GPT, DALL·E 2 and more. We bring our NLP, machine learning, and data science expertise to create robust solutions designed specifically for your business.
      </>
    ),
    features: [
      'GPT Solutions Development',
      'NLP software development',
      'Business automation solutions',
      'Data analytics software implementation',
    ],
    imageSrc: '/videoframe_2175.png', // Replace with your image path
    imageAlt: 'Generative AI Development Illustration',
  },
  {
    title: 'Model Training and Customization',
    description: (
      <>
        We customize generative AI tools and fine-tune LLMs with your own proprietary data. This helps the models to support your unique downstream tasks, operate with high accuracy within your business case, and deliver innovation to your company at less cost.
      </>
    ),
    features: [
      'Large language model fine-tuning',
      'API integration',
      'Data architecture modernization',
      'Cloud migration',
    ],
    imageSrc: '/videoframe_2440.png', // Replace with your image path
    imageAlt: 'Model Training and Customization Illustration',
  },
  {
    title: 'Upgrade and Maintenance',
    description: (
      <>
        Our support team monitors the performance of your language model, introduces updates, and prevents model drilling. We ensure the long-term value of your AI applications and help them grow according to evolving market needs and your business requirements.
      </>
    ),
    features: [
      'Model monitoring',
      'Model updates',
      'Data retraining pipeline',
      'Risk management and compliance',
    ],
    imageSrc: '/videoframe_495.png', // Replace with your image path
    imageAlt: 'Upgrade and Maintenance Illustration',
  },
];

const AIDevelopmentServices = () => {
  return (
    <section className="py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Main Section Header --- */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Innovate Faster with Our AI Development Services
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We provide full-scale generative AI services that transform your business.
          </p>
        </div>

        {/* --- Services Grid --- */}
        <div className="space-y-24">
          {servicesData.map((service, index) => (
            <div
              key={service.title}
              className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-24"
            >
              {/* Text Content */}
              {/* The 'lg:order-last' class is used on the second item to reverse the order on large screens */}
              <div className={index % 2 !== 0 ? 'lg:order-last' : ''}>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <span className="flex-shrink-0 mt-1.5 w-2 h-2 bg-blue-500 rounded-sm mr-3"></span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image Content */}
              <div className="flex justify-center items-center">
                <img
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  className="max-w-md w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIDevelopmentServices;