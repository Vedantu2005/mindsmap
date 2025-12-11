import React, { useState } from "react";

const faqItems = [
  {
    question: "What is Big data engineering?",
    answer: `Data engineering means making unstructured data from different sources understandable and usable for data scientists and other individuals within the company for making data-driven decisions and achieving business goals.`,
  },
  {
    question: "What are data engineering services?",
    answer: `
    -Data architecture development
    -Data lakes and warehouses
    -Data pipelines
    -Data analysis, and more.`,
  },
  {
    question: "Why do companies need data engineers?",
    answer:
      `Data engineers help businesses collect, analyze and translate the masses of data into business insights.`,
  },
  {
    question: `What benefits do data engineering services provide?`,
    answer:
      `
    -Big data analysis
    -Data visualization
    -Improved decision making
    -Workflow optimization
    -Task automation
    -Cost reduction
    -Improve product or service quality.
      `,
  },
];

// Responsive FAQ Item
const FaqItem = ({ question, answer, isOpen, toggleOpen }) => {
  const blue = "#36A2EB";
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={toggleOpen}
        aria-expanded={isOpen}
        className="flex justify-between items-center w-full py-4 text-left font-semibold text-gray-800 focus:outline-none"
      >
        <span className="text-sm sm:text-base">{question}</span>
        <div
          className="p-1 text-blue-400 transition-transform duration-300"
          style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <div className="pb-4 text-gray-600 text-sm sm:text-base leading-relaxed pr-4 sm:pr-10">{answer}</div>
      </div>

      <div className="h-px w-full" style={{ backgroundColor: blue }}></div>
    </div>
  );
};

// FAQ Page
const Page7 = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleOpen = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="py-16 px-4 sm:px-8 lg:px-16 font-sans">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-medium text-center text-gray-800 mb-10">
          Frequently Asked Questions
        </h2>

        <div className="w-full">
          {faqItems.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleOpen(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page7;
