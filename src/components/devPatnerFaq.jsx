import React, { useState } from "react";

// Data for the FAQ items, matching the questions in the image
const faqItems = [
  {
    question: "What is the price to develop generative AI solutions?",
    answer:
      "It's difficult to pin down an exact figure as the accurate pricing depends on a large number of factors. At our generative AI company, the average cost starts from $10,000 and more depending on the project requirements.\n \nThe cost varies based on the complexity of your solution (consume vs. customize), a particular business case, and a specific service (consulting vs development). As we typically build on top of the existing large language models (GPT, DALL-E, etc) and customize them for your unique business needs, the costs are lower than training an AI model from scratch.",
  },
  {
    question: "What does generative AI do?",
    answer:
      "Generative AI refers to algorithms that can generate new content, including text, images, and audio, based on the data they have been trained on. This technology is used in various applications, such as creating realistic images, generating human-like text, and even composing music. By leveraging large datasets and advanced machine learning techniques, generative AI can produce outputs that are often indistinguishable from those created by humans.",
  },
  {
    question: "What are the common applications of generative AI?",
    answer: `Generative AI use cases span the following areas:

            Generative AI customer service
            Marketing and sales
            Administrative tasks
            Recruitment
            Business and customer analysis
            Fraud detection
            Top generative AI companies rely on language models to automate their customer support and enable personalized interactions with customers. Other high performers apply the technology to analyze vast amounts of data, generate reports and alerts, and handle documentation.

            Language models also power chatbots, summarize texts to enable detailed social listening, and track consumer sentiment across channels.`,
  },
];

// Reusable component for a single FAQ item
const FaqItem = ({ question, answer, isOpen, toggleOpen }) => {
  const blueColor = "#36A2EB"; // Light blue for the line and icon

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-4 text-left font-semibold text-gray-800 focus:outline-none transition-colors duration-200"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        {/* Plus/Minus Icon */}
        <div
          className="p-1 rounded-full flex items-center justify-center transition-transform duration-300"
          style={{ color: blueColor }}
        >
          <svg
            className="w-6 h-6 transform transition-transform duration-300"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </div>
      </button>

      {/* Answer Content - Uses max-h transition for smooth opening/closing */}
      <div
        className={`overflow-hidden transition-max-height duration-500 ease-in-out`}
        style={{ maxHeight: isOpen ? "300px" : "0" }}
      >
        <div className="pb-4 text-gray-600 pr-10 text-sm">{answer}</div>
      </div>

      {/* Blue Separator Line - This is the key visual element matching the image */}
      <div
        className="h-px w-full transition-all duration-300"
        style={{ backgroundColor: blueColor }}
      ></div>
    </div>
  );
};

const Call7 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-10 px-4 -mt-15">
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <h2 className="text-3xl font-normal text-center text-gray-800 mb-12">
          Frequently Asked Questions
        </h2>

        {/* Accordion List */}
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

export default Call7;
