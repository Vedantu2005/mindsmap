import React, { useState } from 'react';

// Data for the FAQ items, matching the questions in the image
const faqItems = [
    {
        question: "How to make an AI chatbot? What is the price ?",
        answer: "The cost can vary depending on several factors, such as the complexity of the bot, the platform or language model chosen, and whether you decide to develop it in-house or hire a professional. The set of technologies also impacts the total as a chatbot with sentiment analysis, voice recognition, and other add-ons will cost more than a pre-trained conversational interface with no advanced technologies built in. \n Overall, you would need between $10,000 to $30,000 to build a custom chatbot from scratch."
    },
    {
        question: "What is AI chatbot development?",
        answer: "AI chatbot development is the process of developing conversational interfaces supported with artificial intelligence such as customer support AI chatbot development service for ecommerce. The development includes machine learning algorithms, natural language processing, and other AI techniques to enable chatbots to converse with the user in a human-like manner.\n The ultimate goal of adding AI into a chatbot is to create systems that can understand and respond to user queries with a high level of contextual understanding. This involves training the chatbot on a wide range of data and continuously improving its performance through iterative development and feedback."
    },
    {
        question: "How is chatbot developed?",
        answer: "There are several steps involved in making an AI chatbot, and the first step is to determine the purpose and functionality of the chatbot. Once the purpose is defined, the next step is to gather the necessary data and develop the chatbot's conversational flow.\n \n At MindsmapLabs, we build chatbots on the back of large language models such as GPT, LLaMA, PaLM, and others to enable them to produce human-like responses to inputs. We fine-tune the model with your data to make it fit for your business process. We also have language models pre-trained by our experts to accelerate the development process for our clients. Once the chatbot is trained and ready to be deployed, we integrate it with your preferred messaging platform or website."
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
