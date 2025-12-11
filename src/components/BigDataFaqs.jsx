import React, { useState } from 'react';

const faqData = [
  {
    question: "What is Big data development?",
    answer:
      "Big Data implies an enormous and steadily expanding set of data which cannot be processed and analyzed only by human intelligence. The significant advantages of Big data development include not only data processing, but also the possibility to visualize the obtained information.",
  },
  {
    question: "What are the 3 types of Big data?",
    answer:
      "Big Data is divided into Structured Data, Unstructured Data and Semi-Structured Data. Any information that can be saved and processed in a fixed format is described as “structured” data. This type of data is the one that enables you to analyze information in the shortest time frame. Unstructured data has no predefined structure and can be represented in text, video, audio or image form. Such information tends to be a bit more challenging to analyze, but it often provides the most relevant insights. Semi-structured data does not have to be represented in any particular, clearly fixed form, but it should have tags or other markers to differentiate the presented items.",
  },
  {
    question: "How can a web development company use Big data?",
    answer:
      "Big Data is extensively applied to process information in an effective manner and provide a superior competitive advantage in the marketplace. Big Data analysis helps to systematize information and identify invisible cause and effect relationships. Using Big Data, a web development company is able to optimize communication with its clients, improve operational efficiency, enhance service quality and minimize expenses.",
  },
  {
    question: "What is Big data technology?",
    answer:
      "Big data technologies refers to modern software tools that are used to operate and analyze various types of information. Big data technology can be categorized into Operational Big Data Technologies, that interact with real-time activity and maintain the required data, and Analytical Big Data Technologies, which in turn analyze a larger amount of information and offer the most appropriate business solutions for the ongoing business operation.",
  },
  {
    question: "What do Big data developers do?",
    answer:
      "A Big data developer is a specialist who designs and tracks data processing systems, creates the interface of the Big data model and upgrades it. The main aim of such a professional is to implement data management strategies and principles in order to tackle a concrete task.",
  },
  // Placeholder questions to match the total count in the image
  {
    question: "How will the use of Big data help a web development company with value and profits?",
    answer: "Big data analytics tools predict the results of your strategic decisions, thereby optimizing operational efficiency and minimizing your company’s risks. Ongoing market research enables you to explore the existing trends in detail, as well as foresee the preferences of potential clients.Using Big Data in the working process of a web development company you can enhance customer service, boost the competitiveness of your business and not only increase your income, but also prevent any possible crucial errors.",
  },
  { 
    question: "What is the price of Big data development?",
    answer: "Any modern technological solution required to simplify a number of business processes implies considerable expenses, particularly at the first stages of implementation. The final sum may vary, as it directly depends on the expertise of the chosen developer.",
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

const BigDataFaqs = () => {
  const [openIndex, setOpenIndex] = useState(0); 

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-20 bg-white font-sans">
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

export default BigDataFaqs;
