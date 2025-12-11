// IndustriesPage.jsx (Focusing only on the tab section for brevity)

import React, { useState } from 'react';
import { FaBullhorn, FaShoppingCart, FaHeartbeat, FaTruck, FaEuroSign, FaCar } from 'react-icons/fa';

// Data for the tabbed section
const industriesData = [
  {
    id: 'marketing',
    title: 'Marketing and Advertising',
    IconComponent: FaBullhorn, // Use a React Icon component
    description: 'We leverage artificial intelligence to speed up your marketing transformation and fuel sales. Analyze marketing campaigns, forecast demand and nurture data-based decision-making.',
    features: [
      'Campaign performance forecasting',
      'Customer churn prediction',
      'Personalized advertising',
      'AI-led price optimization',
      'User-centric reporting',
      'Demand forecasting',
      'Smart data analytics',
      'Lead identification',
      'Sentiment analysis',
    ],
  },
  {
    id: 'ecommerce',
    title: 'E-commerce and Retail',
    IconComponent: FaShoppingCart,
    description: 'Enhance the retail experience by implementing AI for personalized recommendations, inventory management, and customer service automation to boost sales and customer loyalty.',
    features: ['Personalized product recommendations', 'Dynamic pricing strategies', 'Inventory and stock forecasting', 'AI-powered chatbots for support', 'Fraud detection'],
  },
  {
    id: 'healthcare',
    title: 'Healthcare and Wellness',
    IconComponent: FaHeartbeat,
    description: 'Transform healthcare with AI-driven diagnostics, personalized treatment plans, and operational efficiency improvements, leading to better patient outcomes.',
    features: ['Predictive diagnostics', 'Personalized treatment plans', 'Medical imaging analysis', 'Hospital operations optimization', 'Drug discovery acceleration'],
  },
  {
    id: 'logistics',
    title: 'Logistics and Supply Chain',
    IconComponent: FaTruck,
    description: 'Optimize your supply chain with AI for route planning, demand forecasting, and warehouse automation, reducing costs and improving delivery times.',
    features: ['Route optimization', 'Warehouse automation', 'Predictive maintenance for fleets', 'Real-time shipment tracking', 'Inventory management'],
  },
  {
    id: 'fintech',
    title: 'Fintech',
    IconComponent: FaEuroSign, // Using Euro sign for currency representation
    description: 'Secure and innovate your financial services with AI for fraud detection, algorithmic trading, and personalized financial advice.',
    features: ['Algorithmic trading', 'Credit scoring models', 'Robo-advisors', 'Anti-money laundering (AML)', 'Enhanced fraud detection'],
  },
   {
    id: 'automotive',
    title: 'Automotive',
    IconComponent: FaCar,
    description: 'Drive the future of automotive technology with AI, from autonomous driving systems to predictive maintenance and enhanced manufacturing processes.',
    features: ['Autonomous driving systems', 'Predictive maintenance alerts', 'Manufacturing process optimization', 'In-car user experience', 'Quality control automation'],
  },
];


const IndustryTabsSection = () => {
  // State to keep track of the active tab, 'marketing' is the default
  const [activeTab, setActiveTab] = useState('marketing');

  // Find the content for the currently active tab
  const activeTabData = industriesData.find(tab => tab.id === activeTab);

  return (
    <div className="bg-white font-sans py-10 -mt-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-12">
          Implementing AI Across Industries
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 ">
          
          {/* Left Column: Tab Buttons */}
          <div className="flex-shrink-0 md:w-1/3">
            <div className="flex flex-col">
              {industriesData.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center text-left w-full p-4 my-1 cursor-pointer transition-all duration-300
                    ${
                      activeTab === tab.id
                        ? 'bg-[#CAF0F8] text-[#00B4D8] font-semibold' // Active state matching the image
                        : 'text-gray-700 hover:text-[#00B4D8] ' // Hover effect for inactive
                    }
                  `}
                >
                  <tab.IconComponent className="w-6 h-6 mr-4 flex-shrink-0" />
                  <span className="text-lg">{tab.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Tab Content */}
          <div className="flex-grow md:w-2/3 p-2 pt-4">
            {activeTabData && (
              <div className="animate-fadeIn">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {activeTabData.description}
                </p>
                <ul className="space-y-3">
                  {activeTabData.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-600 text-base">
                      {/* Custom bullet point styling */}
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#77bce8] rounded-full mt-2.5 mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
// Data for the "Why Work With Us" section
const whyWorkData = [
    {
        icon: '/real-time.svg', // Replace with your icon path
        title: 'Flexible Cooperation Models',
        description: 'We offer flexible terms of cooperation that are the best fit for your business needs.',
    },
    {
        icon: '/personalization.svg', // Replace with your icon path
        title: 'Innovative Approach',
        description: 'The use of the latest tools and technologies with innovative approaches.',
    },
    {
        icon: '/icon-custom-software.svg', // Replace with your icon path
        title: 'Extensive Experience',
        description: 'Extensive experience and deep domain know-how in ML and AI development.',
    },
];


const IndustriesPage = () => {
  
  return (
    <div className="bg-white font-sans">
      <main className="container mx-auto px-4 py-20">

        {/* Section 1: Implementing AI Across Industries */}
        <IndustryTabsSection />

        {/* Section 2: Why Work With Mindsmap AI? */}
        <section>
          <h2 className="text-center text-3xl font-bold text-gray-800 mb-12">
            Why Work With Mindsmap AI?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whyWorkData.map((card, index) => (
                <div key={index} className="border border-sky-200 rounded-lg p-6 flex items-start gap-4
                                            hover:shadow-lg hover:border-blue-400 transform hover:-translate-y-1 transition-all duration-300">
                    <img src={card.icon} alt="" className="w-16 h-16 mt-1 flex-shrink-0"/>
                    <div>
                        <h3 className="font-bold text-lg text-gray-800 mb-2">{card.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
                    </div>
                </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
};

export default IndustriesPage;