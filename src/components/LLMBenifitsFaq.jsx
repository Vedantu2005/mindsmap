import React, { useState } from 'react';

// Data for the FAQ items, matching the questions in the image
const faqItems = [
    {
        question: "What is a large language model?",
        answer: "A large language model is a type of artificial intelligence that relies on a wide range of NLP, deep learning, and ML algorithms to understand the structure of the language. It is trained on a very large dataset to generate accurate responses and catch up with conversations. Large language models have been shown to outperform traditional models on a variety of tasks, including machine translation, question answering, and sentiment analysis. Also, unlike traditional chatbots and virtual assistants, LLMs can come in handy for a variety of tasks, including text generation, image captioning, summarization, and other large language models use cases."
    },
    {
        question: "What are the major large language models?",
        answer: "Large language models examples include the GPT model which is trained on a dataset of 570 GB and fine-tuned for a variety of language tasks, such as translation, summarization, and question-answering. The model is 175 billion parameters in size, which makes it the largest language model ever trained. Megatron is another example of a large, powerful transformer with 11 billion parameters. Our team also works with OpenLLaMA, StableLM, PaL, and other major conversational AI solutions. We select the right LLM that suits your business needs and workloads."
    },
    {
        question: "How is a large language model created?",
        answer: "A large language model is created by training a neural network on a large corpus of text. The neural network learns to predict the next word in a sequence, based on the previous words in the sequence. The more parameters the mode has, the more capable it is, and the more training data it needs to score a high accuracy rate. Unlike traditional AI software, LLMs are general purpose and can be fine-tuned to match the specific needs of a given business. From sentiment analysis to content generation to granular recommendations, language models can support business operations across multiple areas."
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
