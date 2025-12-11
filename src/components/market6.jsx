import React from 'react';

const Market6 = () => {

  const marketingSolutions = [
    {
      icon: <img src="/man.svg" alt="Customer Segmentation Icon" className="w-16 h-16 mx-auto" />,
      title: 'Customer Segmentation',
      description: 'Target potential customers and provide them with customized offers, increasing conversion rates.'
    },
    {
      icon: <img src="/person.svg" alt="Customer Churn Prediction Icon" className="w-16 h-16 mx-auto" />,
      title: 'Customer Churn Prediction',
      description: 'Get the business back on track by identifying potential root causes of customer churn and retaining the loyalty of customers.'
    },
    {
      icon: <img src="/target.svg" alt="Personalized User Experiences Icon" className="w-16 h-16 mx-auto" />,
      title: 'Personalized User Experiences',
      description: 'We\'ve embraced predictive analytics to enable personalized advertisements by targeting each specific client.'
    },
    {
      icon: <img src="/glass.svg" alt="Sentiment Analysis Icon" className="w-16 h-16 mx-auto" />,
      title: 'Sentiment Analysis',
      description: 'Our cutting-edge NLP solutions deliver real-time data-driven sentiment analysis to stay in tune with current trends and your customer\'s preferences.'
    },
    {
      icon: <img src="/screen.svg" alt="Product Demand Forecasting Icon" className="w-16 h-16 mx-auto" />,
      title: 'Product Demand Forecasting',
      description: 'We build custom demand forecasting models that can reduce inventory and boost service levels based on accumulated data.'
    },
    {
      icon: <img src="/setting.svg" alt="Automated Routine Tasks Icon" className="w-16 h-16 mx-auto" />,
      title: 'Automated Routine Tasks',
      description: 'Automate and upgrade mundane processes letting your customer service agents and data science experts focus on complex tasks.'
    }
  ];

  return (
    <div className="bg-white font-sans py-10">
      {/* Added horizontal padding for mobile devices */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* --- Header Section --- */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          {/* Made heading font size scale better from mobile to desktop */}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Have an Upper Hand with Leveraging AI Software Development for Marketing
          </h2>
          {/* Adjusted paragraph font size for better mobile readability */}
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            We are ready to help you add value to your business with AI software development for reliable marketing solutions. You can give up guesswork with our predictive analytics technology for precise data-driven forecasts and better communication with your clients. Automate business processes to reduce marketing expenses and increase client satisfaction.
          </p>
        </div>

        {/* --- Services Grid --- */}
        {/* This grid was already perfectly responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-4xl mx-auto">
          {marketingSolutions.map((solution, index) => (
            <div 
              key={index} 
              className="text-center px-6 py-10 border border-[#77bce8] rounded-lg transition-shadow duration-300 bg-white shadow-[0px_4px_16px_rgba(119,188,232,0.3)] hover:shadow-[0px_8px_24px_rgba(119,188,232,0.5)]"
            >
              <div className="mb-5 flex items-center justify-center h-16">{solution.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{solution.title}</h3>
              <p className="text-gray-600 leading-relaxed">{solution.description}</p>
            </div>
          ))}
        </div>

        {/* --- Footer CTA --- */}
        <div className="text-center mt-16">
          {/* Adjusted font size for mobile */}
          <p className="text-gray-700 font-medium text-base md:text-lg mb-6">
            Ramp up your business with our artificial intelligence marketing solutions
          </p>
          <button className="py-3 px-8 text-[#77bce8] font-semibold rounded-md transition-all duration-300 ease-in-out cursor-pointer border-2 border-[#77bce8] hover:bg-[#77bce8] hover:text-white">
            Let's Talk
          </button>
        </div>

      </div>
    </div>
  );
};

export default Market6;