import React, { useState } from 'react';

const faqData = [
  {
    question: "What's machine learning project cost?",
    answer:
      "Every project is unique. Factors like time, development and integration, maintenance, and deliverables determine the price. The average cost starts from $15,000 and can reach $40,000–$90,000 or more.",
  },
  {
    question: "What technologies do you use in machine learning projects?",
    answer:
      "We use a range of modern ML and AI technologies, including Python, TensorFlow, scikit-learn, Apache Spark, Keras, Kafka, PostgreSQL, Elasticsearch, and more.",
  },
  {
    question: "What machine learning development services do you provide?",
    answer:
      "Our consulting services include:\n" +
      "- Exploratory data analysis (EDA)\n" +
      "- ML algorithm development and implementation\n\n" +
      "Development services include:\n" +
      "- Deep learning solution development\n" +
      "- Custom web application development\n" +
      "- Enterprise machine learning as a service (MLaaS)",
  },
  {
    question: "What are the key use cases for machine learning?",
    answer:
      "Machine learning has a wide range of applications across industries, including:\n" +
      "- Advanced analytics\n" +
      "- User behavior prediction\n" +
      "- Product recommendations\n" +
      "- Fraud detection\n" +
      "- Personalized treatment\n" +
      "- Targeting and customer behavior analysis\n" +
      "- Dynamic pricing and sales optimization",
  },
];



const PlusMinusIcon = ({ isOpen }) => (
  <div className="relative w-4 h-4 transition-transform duration-300 transform">
    <div className="absolute top-1/2 left-0 h-0.5 w-full bg-[#1a66cc] transform -translate-y-1/2" />
    <div 
      className={`absolute top-0 left-1/2 w-0.5 h-full bg-[#1a66cc] transform -translate-x-1/2 transition-transform duration-300 ${
        isOpen ? 'rotate-90' : 'rotate-0'
      }`}
    />
  </div>
);

const FaqItem = ({ faq, index, isOpen, toggleFaq }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className={`flex justify-between items-start w-full py-5 text-left transition-colors duration-200 
          ${isOpen ? 'text-gray-800' : 'text-gray-700 hover:text-gray-900'}`}
        onClick={() => toggleFaq(index)}
        aria-expanded={isOpen}
      >
        <span className={`text-lg font-medium pr-4 ${isOpen ? 'text-[#1a66cc]' : 'text-gray-800'}`}>
          {faq.question}
        </span>
        <PlusMinusIcon isOpen={isOpen} />
      </button>

      <div 
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 text-gray-600 leading-relaxed text-base">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const MLCFaqs = () => {
  const [openIndex, setOpenIndex] = useState(0); 

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-2 bg-white font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          FAQ
        </h2>

        <div className="w-full text-left">
          {faqData.map((faq, index) => (
            <FaqItem
              key={index}
              faq={faq}
              index={index}
              isOpen={index === openIndex}
              toggleFaq={toggleFaq}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MLCFaqs;
