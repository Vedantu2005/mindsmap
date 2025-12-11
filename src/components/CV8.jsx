import React, { useState } from 'react';

// Data for the FAQ items, matching the questions in the image

const faqItems = [
        {
            question: "What's computer vision cost?",
            answer: "The cost of a computer vision project depends on various factors like complexity, data requirements, and the specific models used. We provide custom quotes based on a thorough analysis of your needs."
        },
        {
            question: "What technologies do you use to develop computer vision solutions?",
            answer: "We leverage a wide range of technologies including Python, TensorFlow, Keras, OpenCV, and PCL. Our team stays updated with the latest advancements to deliver state-of-the-art solutions."
        },
        {
            question: "What computer vision apps can you develop?",
            answer: "We can develop a variety of applications, including object detection systems, facial recognition software, OCR and data capture tools, pose estimation models, and automated surveillance systems."
        },
        {
            question: "How does R&D product development work?",
            answer: "Our R&D process involves understanding the problem, data collection and preparation, model selection and training, rigorous testing, and deployment. We work collaboratively with clients at each stage to ensure the solution meets their objectives."
        },
        {
            question: "What domains do you work with?",
            answer: "We have experience across multiple domains including healthcare, manufacturing, retail, e-commerce, and security. Our solutions are adaptable to the specific challenges of each industry."
        },
        {
            question: "My project requires work with sensitive data. How do you ensure data privacy?",
            answer: "Data privacy and security are our top priorities. We adhere to strict data protection protocols, employ encryption, and follow industry best practices to ensure your sensitive information is handled securely."
        },
        {
            question: "What are the key stages of a computer-vision-based project?",
            answer: "A typical project involves several key stages: initial consultation and requirement analysis, data acquisition and annotation, model development and training, evaluation and testing, deployment, and ongoing support and maintenance."
        }
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

const CV8 = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleOpen = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-white py-10 px-4 -mt-5">
            <div className="max-w-3xl mx-auto">

                {/* Header Section */}
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
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

export default CV8
