import React, { useState } from 'react';

const FaqItem = ({ faq, index, toggleFAQ, isOpen }) => {
    return (
        <div className="border-b border-[#00B4D8]">
            {/* Question section - acts as the clickable header */}
            <header
                className="flex justify-between items-center py-4 cursor-pointer"
                onClick={() => toggleFAQ(index)}
            >
                <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                <span className="text-3xl font-light text-[#00B4D8]">
                    {isOpen ? '−' : '+'}
                </span>
            </header>

            {/* Answer section - animated with CSS grid and opacity */}
            <div
                className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
            >
                <div className="overflow-hidden">
                    <p className="pb-4 text-gray-600 leading-relaxed">
                        {faq.answer}
                    </p>
                </div>
            </div>
        </div>
    );
};
const Senti1 = () => {
    const [open, setOpen] = useState({});

    const toggleFAQ = (index) => {
        setOpen(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const faqs = [
        {
            question: "What is VA software?",
            answer: "VA (Virtual Assistant) software is a program designed to understand and respond to human commands (voice or text) to perform tasks, answer questions, and provide information. It automates administrative, technical, or creative assistance."
        },
        {
            question: "Which is the best virtual assistant technology?",
            answer: "The 'best' technology depends on the specific use case. Key technologies include Natural Language Processing (NLP) for understanding text, speech recognition for voice commands, and Machine Learning (ML) for improving responses over time. Major platforms include Google Assistant, Amazon Alexa, and Apple's Siri."
        },
        {
            question: "What is a CRM virtual assistant?",
            answer: "A CRM (Customer Relationship Management) virtual assistant is an AI-powered tool integrated into a CRM system. It helps automate tasks like data entry, scheduling follow-ups, logging calls, and providing quick insights about customer data, allowing sales and support teams to be more efficient."
        },
        {
            question: "What is an example of conversational AI?",
            answer: "A great example of conversational AI is a customer service chatbot on a website. It can understand user questions, provide answers from a knowledge base, guide users through processes like returns or order tracking, and hand over the conversation to a human agent if necessary."
        },
        {
            question: "Can I make my own virtual assistant?",
            answer: "Yes, you can. There are many platforms and frameworks available, such as Google's Dialogflow, Amazon's Lex, and Microsoft's Bot Framework, that provide the tools to build, train, and deploy your own custom virtual assistant with varying levels of complexity."
        }
    ];

    return (
        <div className="font-sans bg-white p-4 sm:p-6 md:p-8">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                    Frequently Asked Questions
                </h2>
                <section className="">
                    {faqs.map((faq, index) => (
                        <FaqItem
                            key={index}
                            faq={faq}
                            index={index}
                            toggleFAQ={toggleFAQ}
                            isOpen={!!open[index]} // Convert to boolean
                        />
                    ))}
                </section>
            </div>
        </div>
    );
};

export default Senti1;