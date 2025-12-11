import React from 'react';

// Data can be managed in an array for easier mapping and maintenance
const features = [
  {
    icon: "/icon-person-no.svg",
    title: "Churn Prediction",
    description: "Predict customer churn and take effective actions to retain customers before it is too late."
  },
  {
    icon: "/icon-like.svg",
    title: "Recommendation System",
    description: "Leverage machine learning to tailor recommendations to each of your customers."
  },
  {
    icon: "/icon-sector.svg",
    title: "Customer Segmentation",
    description: "Achieve more profound customer understanding and improve customer marketing."
  },
  {
    icon: "/icon-cost.svg",
    title: "Lifetime Value Optimization",
    description: "Leverage CRM data with predictive analytics to optimize customer lifetime value (LTV)."
  },
  {
    icon: "/icon-dollar-update.svg",
    title: "Dynamic Pricing",
    description: "Optimize your pricing strategies to stay competitive and reduce revenue leaks."
  },
  {
    icon: "/icon-speed.svg",
    title: "Credit Scoring",
    description: "Improve the quality of your credit scoring models."
  },
  {
    icon: "/icon-data-analysis-2.svg",
    title: "Demand Forecasting",
    description: "Respond to your business supply needs faster and more accurately."
  },
  {
    icon: "/bi-icon-analysis.svg",
    title: "Marketing Campaign Optimization",
    description: "Boost your marketing campaign profitability with predictive analytics consulting."
  }
];

// Reusable Card Component
const FeatureCard = ({ icon, title, description }) => (
  <div className="flex flex-col text-center p-6 bg-white rounded-lg border border-[#77bce8] shadow-lg transition-shadow duration-300 hover:shadow-blue-200">
    <img
      src={icon}
      alt={`${title} icon`}
      className="mx-auto mb-4 w-16 h-16"
    />
    <h3 className="font-bold text-xl text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 leading-relaxed">
      {description}
    </p>
  </div>
);

const Pre8 = () => {
  return (
    <div className="px-4 sm:px-6 py-10 text-center ">
      {/* Heading */}
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          How Our Predictive Analytics Models Can Augment Your Business
        </h2>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
        {features.map((feature) => (
          <FeatureCard 
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <p className="text-gray-700 text-base mb-4">
          Need a consultation?
        </p>
        <button className="border border-[#77bce8] text-[#0b87d7] font-semibold px-8 py-3 rounded-lg cursor-pointer hover:bg-[#77bce8] hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#77bce8]">
          Contact us
        </button>
      </div>
    </div>
  );
};

export default Pre8;
