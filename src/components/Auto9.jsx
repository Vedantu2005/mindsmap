import React, { useState } from 'react';

// You can easily modify the questions and answers here
const faqData = [
  {
    question: "How is AI used in car manufacturing?",
    answer: "AI is used in car manufacturing for various tasks, including predictive maintenance on machinery, quality control through computer vision to detect defects, optimizing supply chains, and powering robots on the assembly line for tasks like welding and painting."
  },
  {
    question: "When do I need AI for the automotive industry?",
    answer: "You need AI when you want to enhance efficiency, safety, and innovation. This includes developing autonomous driving systems, creating intelligent in-car assistants, improving manufacturing processes, personalizing the customer experience, and analyzing vehicle data for predictive insights."
  },
  {
    question: "What are the challenges of adopting artificial intelligence in the automotive industry?",
    answer: "Key challenges include the high cost of implementation, the complexity of integrating AI with existing legacy systems, a shortage of skilled AI talent, ensuring the safety and reliability of AI-driven systems (especially in autonomous vehicles), and addressing data privacy and cybersecurity concerns."
  }
];


// Individual FAQ Item Component
const FaqItem = ({ faq, index, openIndex, setOpenIndex }) => {
  const isOpen = index === openIndex;

  const toggleOpen = () => {
    setOpenIndex(isOpen ? null : index);
  };

  return (
    <div className="border-b border-[#92c9ec]">
      <button
        onClick={toggleOpen}
        className="w-full flex justify-between cursor-pointer items-center text-left py-4 px-2 focus:outline-none focus-visible:ring focus-visible:ring-cyan-500 focus-visible:ring-opacity-75 rounded-md"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <span className="text-base md:text-lg text-gray-800">{faq.question}</span>
        <span className="text-[#92c9ec] flex-shrink-0 ml-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-8 w-8 transition-transform duration-300 ${isOpen ? 'transform rotate-45' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </span>
      </button>
      <div
        id={`faq-answer-${index}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-4 pt-0 text-gray-600">
          <p>{faq.answer}</p>
        </div>
      </div>
    </div>
  );
};


const Auto9 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="flex items-center justify-center font-sans">
      <div className="w-full max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-normal text-gray-700 text-center mb-8">
          Frequently Asked Questions
        </h1>
        <div className="bg-white ">
          {faqData.map((faq, index) => (
            <FaqItem
              key={index}
              faq={faq}
              index={index}
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Auto9;

