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
const Pre1 = () => {
    const [open, setOpen] = useState({});

    const toggleFAQ = (index) => {
        setOpen(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const faqs = [
        {
            question: "Why is predictive analytics important?",
            answer:"Predictive analytics technology helps businesses grow by implementing customer-centric strategy and gaining insights from business data to better understand customer behavior, personalize offers and retain customers in the long term perspective.",
        },
        {
            question: "Why is predictive analytics a game changer?",
            answer:"Predictive analytics solutions help analyze, grow and retain loyal customers. Moreover, analytics aims for effective data-driven business decision making and risk scoring. Predictive analytics gives business owners data for building proactive business strategies.",
        },
        {
            question: "Why use predictive analytics?",
            answer:"personalize recommendations,predict churn, score credits,segment customers,optimize prices,forecast demand,manage inventory,predict anomalies, fraud and many other",
        },
        {
            question: "What are examples of predictive analytics?",
            answer:"Predictive analytics is used for customer churn prediction, product demand forecasting, marketing campaign optimization, dynamic pricing, anomaly detection, etc.",
        },
        {
            question: "How can predictive analytics be used in business?",
            answer:"Every industry receives benefits from predictive analytics helping companies to act proactively and prevent risky events.  Businessmen can leverage predictive analytics for effective customer analysis, churn prediction, inventory management, crop yield prediction, predictive maintenance, fraud detection in warranty claims, anomalous transactions detection and more. The use of technology makes a business data-driven and better equipped for market volatility. To know more about it, hit the link.",
        },
        {
            question: "How does predictive analytics work?",
            answer:"Predictive analytics collects past historical and present data to make predictions.",
        },
        {
            question: "How much does a predictive analytics project cost?",
            answer:"An average predictive analytics project starts at $15k and can reach $100k and many more. Vision, complexity and data available define the price of the project of this kind.",
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

export default Pre1
