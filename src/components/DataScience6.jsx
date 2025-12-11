import React, { useState } from 'react';

const faqData = [
  {
    question: "What is data science technology?",
    answer:
      "Data science technology is a term used to describe the various tools and techniques used to extract insights from the existing input. This includes everything from visualization and machine learning to more traditional methods such as statistical analysis. The technology is constantly evolving, and new tools and techniques are being developed all the time. Our company selects a custom combination of methods and techniques to address the unique needs of a particular client.",
  },
  {
    question: "What is data science as a service used for?",
    answer:
      "Data science as a service is used for a variety of purposes, from analyzing customer insights to understanding satellite images. It is a way to outsource the data science model development process to data science as a service companies that can share their expertise and reduce the costs of hiring an in-house team.",
  },
  {
    question: "What is the price of Data Science service?",
    answer:
      "The exact amount of upfront investment into data science in software development differs by project size, complexity, and location of your data analytics firm. It may cost you from $20,000 to $100,000 for PoC to validate the idea and guarantee the scalability of a project. Contact our company to get an accurate estimation of your project.",
  },
  {
    question: "What services does a data scientist provide?",
    answer:
      "Some of the services that a data scientist can provide include data mining service, analysis, predictive modeling, and more. They can help organizations to make better decisions by providing insights that would not be apparent from looking at the input alone. Data experts can also help to improve the efficiency of decision-making by automating the process of input analysis.",
  },
  {
    question: "What does data science do for companies?",
    answer:
      "Many companies are using data science technology and innovation to make better decisions and improve their businesses. Here are some of the benefits that data science service providers can deliver for your company: Improved decision making by analyzing input and finding patterns. Improved customer service by understanding customers better. Improved efficiency through automation. Improved financial performance by optimizing business operations.",
  },
  {
    question: "When should I hire a data scientist?",
    answer:
      "Hiring a data scientist can be a strategic decision for many businesses, but the timing can vary depending on several factors. You should consider hiring one when you need: data-driven decision making, complex data analysis, building intelligent products, identifying business opportunities, improving efficiency and automation, or staying competitive with innovation.",
  },
  {
    question: "What type of talent does Mindsmap AI have?",
    answer:
      "Mindsmap AI is known for its expertise in data science, machine learning, and artificial intelligence. Some of the capabilities include: Generative AI consulting and development, NLP and virtual assistant development, Big data consulting and development, Data engineering and data architecture, and Data visualization and warehousing.",
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

const DataScienceFaqs = () => {
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

export default DataScienceFaqs;
