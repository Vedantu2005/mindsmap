import React from 'react'

const benefits = [
    {
        title: 'Data Collection & Analysis',
        description: 'Digitize all data work in one click.',
        imagePlaceholder: '/icon-data-analysis-2.svg',
    },
    {
        title: 'Simplified Decision Making',
        description: 'Get customer insights and adjust your offer.',
        imagePlaceholder: '/icon-list.svg',
    },
    {
        title: 'Customer Analytics',
        description: 'Get to know your customer better with analytics.',
        imagePlaceholder: '/icon-bi-analytics.svg',
    },
    {
        title: 'Sentiment Analysis',
        description: 'Mine customer opinions on your products and services.',
        imagePlaceholder: '/icon-face-recognition.svg',
    },
    {
        title: 'Cost Reduction',
        description: 'Reduce costs with reliable data automation solutions.',
        imagePlaceholder: '/icon-dollar-reduce.svg',
    },
    {
        title: 'Manual Work Automation',
        description: 'Automate manual tasks, and engage in intelligent ones.',
        imagePlaceholder: '/icon-engine.svg',
    },
];

// Reusable component for each benefit card
const BenefitCard = ({ title, description, imagePlaceholder }) => (
    <div className="flex flex-col items-center text-center p-4 sm:p-3">
        {/* Image/Icon */}
        <div className="mb-3 w-20 h-20 flex items-center justify-center">
            <img src={imagePlaceholder} alt={title} className="w-20 h-20" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-800 mb-1 leading-snug">
            {title}
        </h3>

        {/* Description */}
        <p className=" text-gray-500 max-w-[180px] leading-snug">
            {description}
        </p>
    </div>
);

const NLP9 = () => {
    return (
        <div className="bg-white py-10 px-4 ">
            {/* Header Section */}
            <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">
                    Benefits For Your Business
                </h2>
                <p className="text-gray-500">
                    Bring Success to Your Business with Effective NLP Solutions.
                </p>
            </div>

            {/* Benefits Grid */}
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
                    {benefits.map((benefit, index) => (
                        <BenefitCard
                            key={index}
                            title={benefit.title}
                            description={benefit.description}
                            imagePlaceholder={benefit.imagePlaceholder}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NLP9
