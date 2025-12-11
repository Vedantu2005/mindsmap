import React, { useState } from "react";

const faqItems = [
  {
    question: "Who uses Big data?",
    answer: `Big data analytics service providers deliver data-focused solutions for a wide range of industries and use cases. Data-laden solutions are universal which makes them applicable to almost any industry. They can be used to uncover hidden patterns and trends in retail and optimize transportation costs in logistics. Data intelligence is also widely popular in banking, healthcare, and education. Manufacturing and natural resources also embrace the analytical potential to support decisions and balance demand. It’s also a great fit for other industries like public services and banking.`,
  },
  {
    question: "Why do we need a Big data solution?",
    answer: `
    You need a Big data solution, when:
-The amount of incoming data incurs technical and economic challenges
-Your enterprise data does not deliver business insights
-You want to augment your existing data infrastructure
-Your current data environment needs to be expanded
-You have lots of unused low-value data
-You’re looking for more cost-effective ways of data analytics
-You’re looking for hidden business opportunities and costly processes
-You have a specific use case in mind for your data`,
  },
  {
    question: "What is the purpose of Big data analytics?",
    answer:
      `The overriding objective of Big data for development is to uncover trends, patterns, and hidden relationships in vast datasets. Analytical solutions can process any type of data, whether it’s structured or unstructured. They also help devise new business opportunities and the optimum strategic moves.`,
  },
  {
    question: `How does Big Data Analytics benefit from Artificial Intelligence?`,
    answer:
      `
    Big data analytics provides the raw material for AI-enabled systems to surface actionable insights from your data. With this synergy, you can embrace advanced analytics capabilities more easily, including augmented or predictive analytics solutions.
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
const Page10 = () => {
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

export default Page10;
