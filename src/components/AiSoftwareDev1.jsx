// OurExpertiseSection.js

import React from 'react';

/**
 * Reusable Card Component
 * This component is used for each item in the expertise grid.
 * @param {object} props
 * @param {string} props.iconSrc - Path to the icon image (e.g., "/images/machine-learning.png")
 * @param {string} props.title - The title of the card
 * @param {React.ReactNode} props.children - The description content, allowing for JSX (like links)
 */
const ExpertiseCard = ({ iconSrc, title, children }) => {
  return (
    <div className="flex items-start p-6 bg-white rounded-lg border-2 border-solid border-blue-200 shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg hover:border-blue-300">
      {/* Icon */}
      <img
        src={iconSrc}
        alt={`${title} icon`}
        className="w-16 h-16 mr-5 flex-shrink-0 object-contain"
      />
      {/* Text Content */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">
          {children}
        </p>
      </div>
    </div>
  );
};

/**
 * Main Section Component
 * This component renders the entire "Our Expertise" section.
 */
const OurExpertiseSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
          Our Expertise
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-4xl mx-auto">
          As an AI development company, we always keep track of emerging technologies and have developed our
          proprietary models and tools to deliver benefits to our clients.
        </p>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <ExpertiseCard
            iconSrc="/icon-ml-2.svg" // Replace with your actual image path
            title="Machine Learning"
          >
            Our team of <a href="#" className="text-blue-600 hover:underline">machine learning developers</a> helps our clients drive
            business growth and expand their
            businesses by extracting valuable
            insights from unstructured data from
            multiple resources.
          </ExpertiseCard>

          <ExpertiseCard
            iconSrc="/icon-analytics-3.svg" // Replace with your actual image path
            title="Business Intelligence"
          >
            We provide <a href="#" className="text-blue-600 hover:underline">BI & Data Warehouse</a> consulting services and offer <a href="#" className="text-blue-600 hover:underline">Big Data analytics</a> solutions to unlock
            the potential of your data available
            and set up efficient <a href="#" className="text-blue-600 hover:underline">data management</a> for enhanced
            decision-making.
          </ExpertiseCard>

          <ExpertiseCard
            iconSrc="/icon-analytics-2.svg" // Replace with your actual image path
            title="Predictive Analytics"
          >
            Our professionals create proprietary
            models for <a href="#" className="text-blue-600 hover:underline">personalized recommendations</a>, churn prediction,
            dynamic pricing, fraud detection,
            sentiment analysis, and customer
            segmentation.
          </ExpertiseCard>

          <ExpertiseCard
            iconSrc="/icon-doc.svg" // Replace with your actual image path
            title="Natural Language Processing"
          >
            We analyze text data from social
            media, emails and audio to uncover
            audience insights. With our <a href="#" className="text-blue-600 hover:underline">bespoke NLP solutions</a>, you get to know your
            users better by detecting sentiment,
            interests, gender, etc.
          </ExpertiseCard>

          <ExpertiseCard
            iconSrc="/icon-quality.svg" // Replace with your actual image path
            title="Generative AI"
          >
            We empower businesses with <a href="#" className="text-blue-600 hover:underline">ChatGPT solutions</a> for workflow
            automation, improved customer
            service and faster decision-making.
            We provide <a href="#" className="text-blue-600 hover:underline">integration</a> and
            customization on demand.
          </ExpertiseCard>

          <ExpertiseCard
            iconSrc="/icon-cv.svg" // Replace with your actual image path
            title="Computer Vision / OCR"
          >
            We develop <a href="#" className="text-blue-600 hover:underline">custom CV solutions to fuel business growth</a>. Our <a href="#" className="text-blue-600 hover:underline">data capture and & extraction</a> solutions
            automate document processing,
            help businesses improve accuracy
            and efficiency, and reduce errors.
          </ExpertiseCard>

        </div>
      </div>
    </section>
  );
};

export default OurExpertiseSection;