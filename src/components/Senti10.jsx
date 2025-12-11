import React from 'react'

// Data for the benefits section
const sentimentBenefits = [
    {
        title: 'Track Sentiment Across Channels',
        description:'Extract, analyze, and act on sentiments across multiple touch points. Make sure your product resonates with the consumers, score big on customer experience, and rely on real-user feedback to inform your strategy.',
        imageName: './icon-sentiment-1.svg', 
    },
    {
        title: 'Plan Product Improvements',
        description:'Take the pulse of public opinion and consumer sentiment data to analyze your latest product release. Collate user insights to identify gaps, add much-awaited features, and improve user experience.',
        imageName: './icon-sentiment-2.svg', 
    },
    {
        title: 'Prioritize Customer Service Issues',
        description: 'Identify critical customer issues and put top-priority service tickets at the head of the queue. Enable ChatGPT solutions to avoid escalations when consumer complaints arrive - based on users’ real-feelings.',
        imageName: './icon-sentiment-3.svg', 
    },
    {
        title: 'Monitor Brand Reputation',
        description: 'Let our sentiment analysis company help you establish a strong brand image through NLP and machine learning. Use sentiment data to spot negative mentions, react swiftly to alerts, and effectively manage your online reputation.',
        imageName: './icon-sentiment-4.svg', 
    },
];

/**
 * A single benefit item component.
 * It displays an icon, title, and description.
 * It's responsive, stacking vertically on mobile and horizontally on larger screens.
 */
const BenefitItem = ({ benefit }) => {
    const { title, description, imageName } = benefit;

    return (
        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 sm:gap-8 py-6 border-b border-gray-100 last:border-b-0">
            
            {/* Icon Section */}
            <div className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center ">
                <img
                    src={imageName}
                    alt={title}
                    className="h-24 w-24 sm:h-28 sm:w-28 object-contain"
                />
            </div>

            <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
        </div>
    );
};

const Senti10 = () => {
    return (
        <section className="py-2 sm:py-5 px-4 sm:px-6 lg:px-8 bg-white text-gray-800">
            <div className="max-w-5xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 tracking-tight">
                        Adopt Sentiment Tracking to Stay on the Edge
                    </h1>
                    <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
                        Put the customer’s perspective at the core of your operating model.
                    </p>
                </div>

                {/* Benefits List */}
                <div>
                    {sentimentBenefits.map((benefit, index) => (
                        <BenefitItem key={index} benefit={benefit} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Senti10;