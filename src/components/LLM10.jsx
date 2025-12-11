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
                className={`grid overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
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

const LLM10 = () => {
    const [open, setOpen] = useState({});

    const toggleFAQ = (index) => {
        setOpen(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const faqs = [
        {
            question: "What is a large language model?",
            answer: "A large language model (LLM) is a type of artificial intelligence (AI) that has been trained on vast amounts of text data. It learns patterns, grammar, and information, allowing it to understand and generate human-like text for tasks such as answering questions, writing content, and translating languages."
        },
        {
            question: "What are the major large language models?",
            answer: "Some of the most prominent large language models include Google's Gemini family, OpenAI's GPT series (like GPT-4), Meta's Llama models, and Anthropic's Claude. Each has its own strengths and is used in a wide variety of applications."
        },
        {
            question: "How is a large language model created?",
            answer: "An LLM is created by training a massive neural network on a huge dataset of text and code. During this 'pre-training' phase, the model learns to predict the next word in a sentence. This process requires significant computational power and is later fine-tuned for specific tasks like conversation or instruction following."
        },
        {
            question: "Is GPT an LLM?",
            answer: "Yes, GPT is a prime example of an LLM. GPT stands for 'Generative Pre-trained Transformer,' which describes the architecture and function of the model. It is a family of large language models developed by OpenAI."
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
}

export default LLM10
