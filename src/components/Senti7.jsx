import React from 'react'

// Data for the feature cards
const offerings = [
    {
        number: '1',
        title: 'Get Live Insights',
        description:'Use our custom sentiment analytics solutions to recognize emotions behind texts across the web and integrate customer interaction into a single source of truth.',
    },
    {
        number: '2',
        title: 'Provide Better Services',
        description:'Gain a clear picture of the level of customer happiness, close the gap between your company and your customers, and maintain high service quality.',
        
    },
    {
        number: '3',
        title: 'Reduce Customer Churn',
        description:'Gather unsolicited feedback to surface what’s truly top of mind for your clients, identify frustrated customers, and respond with the right retention strategy.',

    },
    {
        number: '4',
        title: 'Detect Changes in Customer Opinion',
        description:'Detect drops and rises in optimism about your brand, monitor recurring trends, and align messages to consumer mindsets to build a positive brand image.',
    },
];

// Reusable card component for each offering
const OfferingCard = ({ number, title, description }) => (
    <div className="relative bg-white p-8 rounded-lg border border-[#77bce8] shadow-lg transition-shadow duration-300 hover:shadow-blue-200 overflow-hidden cursor-pointer">

        {/* Number: Centered at top on mobile, positioned left on desktop */}
        <div
            className="absolute -top-6 lg:-top-2 left-1/2 -translate-x-1/2 md:left-12 md:transform-none text-[120px] font-black text-[#77bce8]/50 select-none z-0"
            aria-hidden="true"
        >
            {number}
        </div>

        {/* Text: Padded at the top on mobile, has left margin on desktop */}
        <div className="relative z-10 pt-24 md:pt-0 md:ml-16">
            <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
    </div>
);

const Senti7 = () => {
    return (
        <div className="bg-white  py-1 md:py-10 -mt-12">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* Header Section */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Capture the Whole Picture with Sentiment Analytics

                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Transform emotions into quantitative metrics and deliver the right products at the right time.

                    </p>
                </div>

                {/* Grid of Offerings */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {offerings.map((offering, index) => (
                        <OfferingCard key={index} {...offering} />
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Senti7
