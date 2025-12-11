// IndustriesSection.js

import React from 'react';

/**
 * Reusable Card Component for Industries
 * @param {object} props
 * @param {string} props.iconSrc - Path to the icon image (e.g., "/images/banking-finance.png")
 * @param {string} props.title - The title of the industry
 * @param {React.ReactNode} props.children - The description content, allowing for JSX (like links)
 */
const IndustryCard = ({ iconSrc, title, children }) => {
  return (
    <div className="flex items-start p-6 rounded-lg transition-all duration-300 ease-in-out group hover:bg-gray-50 hover:shadow-md">
      {/* Icon */}
      <div className="flex-shrink-0 mr-5">
        <img
          src={iconSrc}
          alt={`${title} icon`}
          className="w-16 h-16 object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      {/* Text Content */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {children}
        </p>
      </div>
    </div>
  );
};

/**
 * Main Section Component for Industries
 * This component renders the entire "Industries" section.
 */
const IndustriesSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
          Industries
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-4xl mx-auto">
          We have proven track records of helping businesses in different niches to reach a new
          level. And we keep on enhancing our expertise across domains with AI algorithms.
        </p>

        {/* Grid of Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
          
          <IndustryCard
            iconSrc="/icon-bank.svg" // Update with your actual image path
            title="Banking & Finance"
          >
            Harness AI to power smart assistants that help with
            enhanced decision-making, <a href="#" className="text-blue-600 hover:underline">financial apps</a> to plan budgets,
            score credits, and detect anomalous transactions for fraud
            prevention.
          </IndustryCard>

          <IndustryCard
            iconSrc="/icon-manufacturing.svg" // Update with your actual image path
            title="Automotive Manufacturing"
          >
            Adopt AI solutions for smooth <a href="#" className="text-blue-600 hover:underline">vehicle production</a>. Perform
            complex simulations and design iterations, enable robust
            visual inspection and equipment defect detection with
            efficient AI automotive software.
          </IndustryCard>

          <IndustryCard
            iconSrc="/icon-car.svg" // Update with your actual image path
            title="Supply Chain & Logistics"
          >
            Facilitate supply planning, <a href="#" className="text-blue-600 hover:underline">invoice and receipt processing</a>,
            automate warehouse analysis, cargo damage detection,
            and optimize routes.
          </IndustryCard>

          <IndustryCard
            iconSrc="/icon-insurance-2.svg" // Update with your actual image path
            title="Insurance"
          >
            Manage claims with the help of AI and ChatGPT, predict
            high loss claims and detect fraud claims, evaluate insurance
            property cost, offer more customer-focused services.
          </IndustryCard>

          <IndustryCard
            iconSrc="/icon-retail-5.svg" // Update with your actual image path
            title="Retail & E-commerce"
          >
            Predict customer behavior with the help of your AI
            developer. Enable personalized recommendations, <a href="#" className="text-blue-600 hover:underline">provide
            customer experience consulting services</a>, increase the
            efficiency of in-store operations, and cut customer churn.
          </IndustryCard>

          <IndustryCard
            iconSrc="/icon-healtcare.svg" // Update with your actual image path
            title="Healthcare & Pharma"
          >
            Let medical professionals use <a href="#" className="text-blue-600 hover:underline">AI-assisted analytics</a> for more
            effective diagnosis, personalized treatment, and to make
            better data-based predictions and recommendations, allow
            advanced evidence analytics to meet life-saving needs.
          </IndustryCard>

        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;