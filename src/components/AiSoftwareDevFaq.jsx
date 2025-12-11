import React, { useState } from 'react';

// Data for the FAQ items, matching the questions in the image
const faqItems = [
    {
        question: "What is AI in software development?",
        answer: "AI is used in software development to help write code faster and more effectively, automate manual tasks, and speed up the testing process. Using AI in software app development, one can expect the app to be more robust, speedy, and almost error-free."
    },
    {
        question: "How much does an app with AI cost?",
        answer: "Custom AI apps may cost from $15 K up to $70-100K and more. The cost usually comes from complexity, functionality, and exclusiveness."
    },
    {
        question: "What is an AI development company?",
        answer: "An AI company is an AI technology vendor who has got broad expertise under their belt, an impressive project portfolio in various business domains. AI, data scientists, software engineers, quality assurance specialists can usually work on an average project.  "
    },
];

// Reusable component for a single FAQ item
const FaqItem = ({ question, answer, isOpen, toggleOpen }) => {
    const blueColor = '#36A2EB'; // Light blue for the line and icon

    return (
        <div className="border-b  border-gray-200">
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
        <div className="bg-white py-10 px-4 mt-10">
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
