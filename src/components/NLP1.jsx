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
const NLP1 = () => {
    const [open, setOpen] = useState({});

    const toggleFAQ = (index) => {
        setOpen(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const faqs = [
        {
            question: "What is NLP used for?",
            answer: "Natural Language Processing (NLP) is used to help computers understand, interpret, and generate human language. Common applications include sentiment analysis, machine translation, chatbots, text summarization, and data extraction from unstructured text."
        },
        {
            question: "What is a good NLP company?",
            answer: "A good NLP company should have proven expertise in machine learning and deep learning, a strong portfolio of successful projects (like custom LLMs or sentiment analysis tools), and experience integrating solutions into existing business workflows."
        },
        {
            question: "How can I benefit from using NLP?",
            answer: "NLP benefits businesses by automating customer service (chatbots), analyzing large volumes of customer feedback (sentiment analysis) to gain market insights, improving content searchability, and increasing overall data processing efficiency."
        },
        {
            question: "How much does NLP cost?",
            answer: "The cost of an NLP solution varies widely based on complexity, the required level of customization (e.g., training a custom Large Language Model vs. using an off-the-shelf API), the scope of data, and ongoing maintenance. A typical project starts in the thousands of dollars and can range higher."
        },
        {
            question: "Why do I need to use NLP in my business?",
            answer: "You need NLP to unlock value from unstructured data (emails, reviews, social media). It allows you to automate tasks that require language understanding, reduce manual labor, and make data-driven decisions based on genuine customer and market sentiment."
        },
        {
            question: "What are some examples of Natural Language Processing?",
            answer: "Examples include Google Translate (machine translation), spam filters in email (text classification), Amazon Alexa or Siri (voice-to-text and command understanding), and tools that automatically tag topics in news articles (topic modeling)."
        },
        {
            question: "What are NLP tools?",
            answer: "NLP tools are software frameworks and libraries that help developers build NLP applications. Examples include Python libraries like NLTK and SpaCy, cloud services from Google (Vertex AI), and open-source pre-trained models like BERT or Llama."
        },
    ];

    return (
        <div className="font-sans bg-white p-4 sm:p-6 md:p-8">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                    Frequently Asked Questions
                </h2>
                <section className="border-t border-blue-200">
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

export default NLP1
