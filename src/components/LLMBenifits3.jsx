// LLMDevelopmentServices.js

import React from 'react';

// --- 1. Data Array for all four services ---
const servicesData = [
  {
    id: 1,
    title: "Strategy and Consulting",
    description: "We help you get a better handle on your business vision and chalk out a step-by-step strategy for the adoption of language models. Our experts define a use case, assess your proprietary data, and provide actionable recommendations on the tech infrastructure.",
    imageSrc: "/Screenshot 2025-10-23 221334.png", // Replace with your image path
    imageAlt: "Strategy and Consulting Illustration",
    features: [
      'Business case analysis',
      'Proof of Concept',
      'Overview of proprietary data',
      'Project estimation and roadmap',
    ],
    // Layout will be determined by which functional component (CardRight or CardLeft) is used
  },
  {
    id: 2,
    title: "LLM Development",
    description: "Our engineers build custom LLM models on top of GPT, DALL·E 2, and other foundation models and make them a native part of your tech ecosystem. Our NLP, machine learning, and data science experts help tailor the model to your specific business needs.",
    imageSrc: "/Screenshot 2025-10-23 221343.png", // Replace with your image path
    imageAlt: "LLM Development Illustration",
    features: [
      'User workflow development',
      'Custom solutions development',
      'Dataset preparation',
      'LLM integration',
    ],
  },
  {
    id: 3,
    title: "Fine-Tuning",
    // Description containing the link logic
    description: (
      <>
        We customize off-the-shelf LLM language models with your data to maximize the value of base models for your business. Our <a href="#" className="text-blue-600 hover:underline">machine learning engineers</a> fine-tune them to your unique business needs, improve accuracy rates, and make the model more efficient.
      </>
    ),
    imageSrc: "/Screenshot 2025-10-23 221354.png", // Replace with your image path
    imageAlt: "Fine-Tuning Illustration",
    features: [
      'Large language model fine-tuning',
      'API integration',
      'Data architecture modernization',
      'Large language model automation',
    ],
  },
  {
    id: 4,
    title: "Support and Maintenance",
    // Description containing the link logic
    description: (
      <>
        Our support team keeps a close watch on your language learning model, making sure its performance is up to par. From model optimization to troubleshooting, our <a href="#" className="text-blue-600 hover:underline">generative AI company</a> is there for you 24/7, perfecting, enhancing, and evolving your AI solutions.
      </>
    ),
    imageSrc: "/Screenshot 2025-10-23 221404.png", // Replace with your image path
    imageAlt: "Support and Maintenance Illustration",
    features: [
      'Model monitoring',
      'Model updates',
      'Data retraining pipeline',
      'Risk management and compliance',
    ],
  },
];

// --- 2. Reusable list item component ---
const FeatureListItem = ({ children }) => (
  <li className="flex items-start mb-2">
    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0 mt-2.5 mr-3"></span>
    <p className="text-gray-700 leading-relaxed">{children}</p>
  </li>
);

// --- 3. Component for Text on Right, Image on Left (Reversed on Desktop) ---
const CardLeft = ({ data }) => {
  const content = (
    <div className="lg:w-1/2">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{data.title}</h3>
      <p className="text-gray-700 leading-relaxed mb-6">
        {data.description}
      </p>
      <ul className="list-none p-0 space-y-2">
        {data.features.map((feature, index) => (
          <FeatureListItem key={index}>{feature}</FeatureListItem>
        ))}
      </ul>
    </div>
  );

  const image = (
    <div className="lg:w-1/2 flex justify-center p-6">
      <div className="relative w-full max-w-md h-auto">
        <img
          src={data.imageSrc}
          alt={data.imageAlt}
          className="w-full h-full object-contain transition-transform duration-500 ease-in-out hover:scale-[1.03]"
        />
        <div className={`absolute inset-0 z-[-1] rounded-full opacity-0 blur-xl bg-yellow-100 transition-opacity duration-500 
                        group-hover:opacity-50`}></div>
      </div>
    </div>
  );

  return (
    // Default: Text is on the left. md:flex-row-reverse puts the Image on the Left.
    <div className="flex flex-col md:flex-row-reverse items-center justify-between py-5 px-4 group">
      {content}
      {image}
    </div>
  );
};

// --- 4. Component for Text on Left, Image on Right (Normal Order on Desktop) ---
const CardRight = ({ data }) => {
  const content = (
    <div className="lg:w-1/2">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{data.title}</h3>
      <p className="text-gray-700 leading-relaxed mb-6">
        {data.description}
      </p>
      <ul className="list-none p-0 space-y-2">
        {data.features.map((feature, index) => (
          <FeatureListItem key={index}>{feature}</FeatureListItem>
        ))}
      </ul>
    </div>
  );

  const image = (
    <div className="lg:w-1/2 flex justify-center p-6">
      <div className="relative w-full max-w-md h-auto">
        <img
          src={data.imageSrc}
          alt={data.imageAlt}
          className="w-full h-full object-contain transition-transform duration-500 ease-in-out hover:scale-[1.03]"
        />
        <div className={`absolute inset-0 z-[-1] rounded-full opacity-0 blur-xl bg-yellow-100 transition-opacity duration-500 
                        group-hover:opacity-50`}></div>
      </div>
    </div>
  );

  return (
    // Default: Text on the right, Image on the right (no flex-row-reverse)
    <div className="flex flex-col md:flex-row items-center justify-between py-5 px-4 group">
      {content}
      {image}
    </div>
  );
};


// --- 5. Main LLM Development Services Component ---
const LLMDevelopmentServices = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
          Our Expertise in Large Language Model Development
        </h2>
        <p className="text-lg text-gray-600 text-center mb-6 max-w-3xl mx-auto">
          We provide a broad spectrum of LLM Large Language Model services that meet your needs at scale.
        </p>
        
        {/* 1st Card: Text Left, Image Right (CardRight) */}
        <CardRight data={servicesData[0]} />

        {/* 2nd Card: Image Left, Text Right (CardLeft) */}
        <CardLeft data={servicesData[1]} />

        {/* 3rd Card: Text Left, Image Right (CardRight) */}
        <CardRight data={servicesData[2]} />

        {/* 4th Card: Image Left, Text Right (CardLeft) */}
        <CardLeft data={servicesData[3]} />
        
      </div>
    </section>
  );
};

export default LLMDevelopmentServices;