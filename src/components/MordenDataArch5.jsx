import React, { useState } from 'react';

const faqData = [
  {
    question: "What is modern data architecture?",
    answer:
      "Modern data architecture is designed to address complex data needs. It’s flexible, scalable, adaptable, and customer-centric, which means it supports a multiplicity of business needs, manages data flow wisely, and continuously evolves to meet new and changing customer information needs.",
  },
  {
    question: "Who is responsible for data architecture?",
    answer:
      "Data architects are the ones in charge of developing an overall organizational data strategy and designing its data management framework. The specialists in this field identify structural needs, create data models, and specify data standards. Thus, any company searching for a robust data strategy needs a data architect with skills in data analysis, machine learning, and managing large-scale systems with the use of programming languages.",
  },
  {
    question: "What is the difference between a data architect and a database architect?",
    answer:
      "Although both a data scientist and a database scientist work for a joint purpose and their functions overlap, these positions are not interchangeable. A data architect is involved at the outset where they look at a wider use of data and its design planning and establish suitable data models. Then a database architecture comes in to decide on the ways of implementing RDBMS and is responsible for its performance and further optimization.",
  },
  {
    question: "What makes Mindsmap AI different in data architecture development?",
    answer:
      "We cherry-pick the most suitable consultants for your business needs in no time. Our professionals are committed to working out a consistent, reliable, and scalable approach to ensure that you have a comprehensive profitable data strategy and are able to leverage the full value of your data.",
  },
  {
    question: "Is hiring data architecture consultants from your company in less than 2 days possible?",
    answer:
      "A few working days is the usual period required to find a suitable candidate for your goals. So, mostly it’s your goals, their complexity, and the availability of consultants that act as the key factors. As soon as we get to know your request, we make every effort to propose a consultant to you in a prompt manner.",
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

const ArchitectFaqs = () => {
  const [openIndex, setOpenIndex] = useState(0); 

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-20 bg-white font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          FAQ : Modern Data Architecture Consulting Services
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

export default ArchitectFaqs;
