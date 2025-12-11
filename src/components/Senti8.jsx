import React from 'react'

// Data for the four feature blocks
const featuresData = [
    {
        title: "Monitor Your Brand's Social Media",
        description:
            "Make a health check of public opinion about your brand and verify if it's in the green or the red zone. We build custom opinion tracking solutions that run opinion mining on unstructured data from the brand's social media channels.",
        imageName: './icon-like-alt.svg', 
    },
    {
        title: 'Focus on The Voice of the Customer (VoC)',
        description:
            "Gain insight into consumer expectations, preferences, and pain points to gain competitive intelligence. Our VoC solutions analyze and derive insight from all types of VoC data using a variety of analytical and visualization techniques.",
        imageName: './icon-conversation.svg', 
    },
    {
        title: 'Get Insights from Product Analysis',
        description:
            'Convert negative comments into positive interactions and keep customers satisfied during product changes. Uncover gaps between your product and the competition and predict your customers’ response to new products.',
        imageName: './icon-cost-4.svg', 
    },
    {
        title: 'Track Your Competitors',
        description:
            'Benchmark the strengths and weaknesses of your brand against competitors and detect reputation risks before they break loose. Lift your business ranking, get a better handle on your competition, and position your products strategically.',
        imageName: './icon-data-analysis.svg', 
    },
];

const FeatureItem = ({ feature }) => {
    const { title, description, imageName } = feature;

    // This component is naturally responsive. The flex layout works well 
    // on all screen sizes as text will wrap automatically.
    return (
        <div className="flex space-x-5 py-6">
            {/* Icon Area */}
            <div className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0  p-2">
                <img
                    src={imageName}
                    alt={title}
                    className="w-full h-full object-contain"
                />
            </div>

            {/* Text Content */}
            <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-800 mb-1.5">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
        </div>
    );
};

const Senti8 = () => {
    return (
        <section className="bg-white">
            {/* Added horizontal padding (px-4) for mobile responsiveness */}
            <div className="max-w-6xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 tracking-tight mb-2">
                        Sentiment Analysis for Brand Building
                    </h1>
                    <p className="mt-2 text-lg text-gray-600 max-w-3xl mx-auto">
                        Get a leg up in the competition through innovative technologies for sentiment tracking.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12">
                    {featuresData.map((feature, index) => (
                        <div key={index}>
                            <FeatureItem feature={feature} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Senti8;