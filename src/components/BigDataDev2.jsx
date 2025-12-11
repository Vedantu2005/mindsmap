import React from 'react';

const benefits = [
  {
    icon: "/icon-three-man-2-alt.svg",
    title: "Better Insights into Customers",
  },
  {
    icon: "/icon-speed.svg",
    title: "Increased Operational Efficiency",
  },
  {
    icon: "/icon-engineering.svg",
    title: "Business Process Automation",
  },
  {
    icon: "/icon-data-security.svg",
    title: "Data-Driven Product Innovation and Promotion",
  },
  {
    icon: "/icon-cost-2.svg",
    title: "Cut Costs from Smart Decision Making",
  },
  {
    icon: "/icon-ecommerce-alt.svg",
    title: "Improved Market Intelligence",
  },
];

const BigDataBenefit = () => {
  return (
    <div className="py-16 bg-white font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header Content */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          How You Can Benefit from It
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-16 leading-relaxed">
          Our cross-functional team of data scientists, big data engineers,
          solution architects and consultants provide big data consulting and big
          data development services to help you leverage your data and the latest
          AI technologies for business value and get the most out of your
          investment.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-start h-full p-4"
            >
              <img
                src={benefit.icon}
                alt={benefit.title}
                className="h-20 w-20 object-contain text-blue-500 mb-6" 
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/80x80/a5c9f5/1f4f88?text=ICON"; }}
              />
              
              <p className="text-lg font-semibold text-gray-800 max-w-[200px] leading-snug">
                {benefit.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BigDataBenefit;
