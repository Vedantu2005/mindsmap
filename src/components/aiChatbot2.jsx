import React from 'react';

// 3. AI Chatbot Development Services (Strategy, Fine-Tuning, Implementation, Support)
const serviceSections = [
    {
        title: 'Strategy and Consulting',
        text: 'Our team of virtual assistant development experts analyzes the challenges of your business and develops a solid strategy to solve them through AI chatbots. Our experts define a use case, validate your idea, and deliver actionable recommendations on your solution.',
        list: ['Business case analysis', 'QA sessions with our experts', 'Proof of Concept', 'ROI estimation and project roadmap'],
        image: '/Screenshot 2025-10-16 140223.png',
        reverse: false, // Text on left, Image on right
    },
    {
        title: 'Foundation Model Selection',
        text: 'We help you make the right choice among a variety of language models and choose the one that best fits your chatbot requirements. Our AI chatbot development company has pre-trained models based on ChatGPT integration and other Gen AI that can help kickstart your project.',
        list: ['Requirement analysis', 'Large language model selection', 'Tech stack selection', 'Chatbot architecture'],
        image: '/Screenshot 2025-10-16 140234.png',
        reverse: true, // Text on right, Image on left
    },
    {
        title: 'Fine-Tuning and Model Training',
        text: 'We adjust ready-made LLM models to make them a suitable core for your AI chatbot development project. Our machine learning engineers can train your chatbot both with your company’s data and enrich it with third-party insights to maximize accuracy and accelerate its performance.',
        list: ['Fine-tuning of the core model', 'Customization and personalization', 'API integration', 'Data gathering and management'],
        image: '/Screenshot 2025-10-16 140256.png',
        reverse: false, // Text on left, Image on right
    },
    {
        title: 'Implementation',
        text: 'Our developers handle the end-to-end AI-powered chatbots development services to design, develop, and deploy a market-ready conversational interface. On demand, we integrate the solution with internal business systems and augment it with predictive analytics, NLP, or sentiment analysis.',
        list: ['Model testing', 'Integration (ECM, ERP, CRM, and more)', 'Sophisticated AI-based capabilities', 'Risk management and compliance'],
        image: '/Screenshot 2025-10-16 140306.png',
        reverse: true, // Text on right, Image on left
    },
    {
        title: 'Support and Maintenance',
        text: 'Our support team keeps your chatbot at its peak performance, improves its conversational flow, and helps you evolve the solution to support other tasks. We perform the upkeep of the solution throughout the post launch period ensuring successful user adoption and a high return on investment.',
        list: ['Chatbot monitoring', 'Scheduled maintenance', 'Performance optimization', 'Chatbot evolution'],
        image: '/Screenshot 2025-10-16 140317.png',
        reverse: false, // Text on left, Image on right
    },
];


// --- Helper Components ---

// Component for the main alternating service blocks
const ServiceBlock = ({ title, text, list, image, reverse }) => {
  const contentOrder = reverse ? 'lg:flex-row-reverse' : 'lg:flex-row';

  return (
    <div className={`flex flex-col ${contentOrder} items-center gap-12 py-3 lg:py-6 `}>
      {/* Text Content */}
      <div className={`w-full lg:w-1/2 ${reverse ? 'lg:pr-12' : 'lg:pl-12'}`}>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          {title}
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          {text}
        </p>
        <ul className="">
          {list.map((item, index) => (
            <li key={index} className="flex items-start text-gray-700">
              <span className="text-blue-600 mr-2 mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Image/Illustration */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img src={image} alt={`${title} illustration`} className="max-w-xs md:max-w-sm lg:max-w-md" />
      </div>
    </div>
  );
};


// --- Main Component ---

const AllInOneChatbotServices = () => {
  return (
    <div className="bg-white font-sans text-gray-700">
      <div className="container mx-auto px-4 sm:py-24">
        <section className="">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-5">
            Our AI Chatbot Development Services
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto">
            Our team of skilled AI experts guides you throughout your Generative AI journey with rigor and hands-on expertise.
          </p>

          <div className="max-w-7xl mx-auto">
            {serviceSections.map((section, index) => (
              <ServiceBlock key={index} {...section} />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default AllInOneChatbotServices;