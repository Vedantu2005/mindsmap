import React from 'react'

const industries = [
    { name: 'E-commerce', imageName: 'icon-ecommerce-alt.svg' },
    { name: 'Marketing & Advertising', imageName: 'bi-marketing.svg' },
    { name: 'Supply Chain & Logistics', imageName: 'bi-logistic.svg' },
    { name: 'Financial Services', imageName: 'bi-fin-service.svg' },
    { name: 'Healthcare & Pharma', imageName: 'bi-health.svg' },
    { name: 'Manufacturing', imageName: 'icon-manufacturing.svg' },
];

const trustFeatures = [
    {
        title: 'Customizable Solutions',
        description:
            'Our solutions are tailored to fit the needs of our clients and overcome the challenges of their domain.',
        imageName: './icon-customizable-solutions.svg',
    },
    {
        title: 'Scalable Results',
        description:
            'We base your solutions on scalable architectures to let them grow in lockstep with your business.',
        imageName: './icon-data-processing.svg',
    },
    {
        title: 'State-of-The Art Models',
        description:
            'Our sentiment analysis services are based on cutting-edge AI algorithms to deliver results with high accuracy.',
        imageName: './icon-implementing.svg',
    },
];

const IndustryCard = ({ industry }) => (
    <div className="flex flex-col items-center justify-center p-6 border border-blue-200 shadow-md transition-shadow duration-300 hover:shadow-blue-300 rounded-xl h-full w-full bg-white">
        <div className="mb-4">
            <img
                src={industry.imageName}
                alt={industry.name}
                className="h-16 w-16 object-contain"
            />
        </div>
        <p className="text-gray-700 font-medium text-center text-sm">{industry.name}</p>
    </div>
);

const TrustFeature = ({ feature }) => (
    <div className="flex flex-col items-center text-center p-4">
        <div className="mb-4">
            <img
                src={feature.imageName}
                alt={feature.title}
                className="h-20 w-20 object-contain"
            />
        </div>
        <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
    </div>
);

const Senti5 = () => {
    return (
        <section className="bg-white py-12 sm:py-16">
            {/* Added horizontal padding (px-4) for mobile screens */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* --- 1. Industries Section --- */}
                <div className="text-center mb-16">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 tracking-tight mb-2">
                        Industries
                    </h1>
                    <p className="mt-2 text-gray-600 max-w-4xl mx-auto mb-10">
                        We inject our cross-domain experience into building custom solutions aligned with individual business needs.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
                        {industries.map((industry) => (
                            <IndustryCard key={industry.name} industry={industry} />
                        ))}
                    </div>

                    <button className="mt-10 px-8 py-2.5 text-blue-600 font-medium border border-blue-300 rounded-lg hover:bg-blue-50 hover:border-blue-400 transition duration-300 shadow-sm">
                        Your Industry
                    </button>
                </div>

                {/* --- 2. Your Trusted Sentiment Analysis Company Section --- */}
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 tracking-tight mb-4">
                        Your Trusted Sentiment Analysis Company
                    </h2>
                    <p className="mt-2 text-gray-600 max-w-3xl mx-auto mb-12">
                        Our team of problem solvers builds intelligent solutions with long-term value and added business benefits.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {trustFeatures.map((feature) => (
                            <TrustFeature key={feature.title} feature={feature} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Senti5;