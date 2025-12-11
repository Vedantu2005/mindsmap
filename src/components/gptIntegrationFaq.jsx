import React, { useState } from 'react';

// Data for the FAQ items, matching the questions in the image
const faqItems = [
    {
        question: "What is the price of ChatGPT integration?",
        answer: "The cost to integrate ChatGPT into a business application ranges from $10,000 to $50,000 and more depending on business needs. This includes the cost of the ChatGPT API license, the cost of the development team, the cost of the basic features and functionality, and the cost of ongoing maintenance. You can contact our company to get an accurate estimate for your project."
    },
    {
        question: "How long does ChatGPT integration take?",
        answer: "The timeline is based on the complexity of your project and the integration approach. Our developers first assess the project scope and training effort and then deliver a roadmap with deliverables and deadlines. Overall, our ChatGPT service can take from a week to a few months."
    },
    {
        question: "Is there an API for ChatGPT?",
        answer: "Yes, there is an API for ChatGPT that allows developers to integrate its capabilities into their applications. The API provides access to various features, including text generation, conversation management, and more."
    },
];

// Reusable component for a single FAQ item
const FaqItem = ({ question, answer, isOpen, toggleOpen }) => {
    const blueColor = '#36A2EB'; // Light blue for the line and icon

    return (
        <div className="border-b border-gray-200">
            <button
                className="flex justify-between items-center w-full py-4 text-left font-semibold text-gray-800 focus:outline-none transition-colors duration-200"
                onClick={toggleOpen}
                aria-expanded={isOpen}
            >
                <span>{question}</span>
                {/* Plus/Minus Icon */}
                <div className="p-1 rounded-full flex items-center justify-center transition-transform duration-300" style={{ color: blueColor }}>
                    <svg
                        className="w-6 h-6 transform transition-transform duration-300"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                    >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                </div>
            </button>

            {/* Answer Content - Uses max-h transition for smooth opening/closing */}
            <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out`}
                style={{ maxHeight: isOpen ? '300px' : '0' }}
            >
                <div className="pb-4 text-gray-600 pr-10 text-sm">
                    {answer}
                </div>
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
}

export default Call7
