import React from 'react'

// Data for the four feature/benefit cards
const insightCards = [
    {
        number: 1,
        title: 'Get Live Insights',
        description:'Use our custom sentiment analytics solutions to recognize emotions behind texts across the web and integrate customer interaction into a single source of truth.',
    },
    {
        number: 2,
        title: 'Provide Better Services',
        description:'Gain a clear picture of the level of customer happiness, close the gap between your company and your customers, and maintain high service quality.',
        
    },
    {
        number: 3,
        title: 'Reduce Customer Churn',
        description:'Gather unsolicited feedback to surface what’s truly top of mind for your clients, identify frustrated customers, and respond with the right retention strategy.',

    },
    {
        number: 4,
        title: 'Detect Changes in Customer Opinion',
        description:'Detect drops and rises in optimism about your brand, monitor recurring trends, and align messages to consumer mindsets to build a positive brand image.',
    },
];

// Reusable component for a single numbered insight card
const InsightCard = ({ data }) => {
    const { number, title, description, highlightText } = data;

    // Function to conditionally highlight text in the description
    const renderDescription = () => {
        if (!highlightText || !description.includes(highlightText)) {
            return description;
        }

        const parts = description.split(highlightText);
        return (
            <>
                {parts[0]}
                <span className="text-blue-600 font-semibold">{highlightText}</span>
                {parts.slice(1).join(highlightText)}
            </>
        );
    };

    return (
        <div className="p-6 border border-gray-200 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl flex flex-col h-full">
            <div className="flex items-start mb-4">
                {/* Large Thick Number Styling */}
                <div className="text-[120px] font-bold text-[#77bce8]/50 mr-4 leading-none pt-2"> {/* Added font-extrabold and pt-2 for better alignment */}
                    {number}
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-semibold text-gray-800 pt-3">{title}</h3>
            </div>

            {/* Description Content */}
            <p className="text-gray-600 leading-relaxed text-sm pl-16">
                {renderDescription()}
            </p>
        </div>
    );
};

const Senti6 = () => {
    return (<>
        <section>
            <div className="text-center mb-12">
                <h1 className="text-3xl sm:text-3xl font-bold text-gray-800 tracking-wide">
                    Sentiment Analysis Steps

                </h1>
                <p className="mt-2 text-gray-600 max-w-4xl mx-auto">
                    Let our experts guide you on the path to market success through calibrated flows and well-balanced processes.
                </p>
            </div>
            <div className='flex justify-center items-center'>
                <img src='./image.png' className='' />
            </div>
        </section>
        <section className="py-10 px-4">
            <div className="max-w-7xl mx-auto">

                {/* --- 1. CTA Banner --- */}
                <div className="max-w-5xl mx-auto p-8 sm:p-12 bg-[#CAF0F8] rounded-lg border border-blue-100 relative overflow-hidden mb-16">

                    {/* Background Illustration/Icon (Left) - Using actual img tag */}
                    <div className="absolute bottom-[-20px] left-[-20px]  w-32 h-32 text-blue-300 hidden md:block">
                        <img
                            src="/before.svg" 
                            alt="Analytics network icon"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Background Icon (Right) - Using actual img tag */}
                    <div className="absolute top-4 right-4  w-24 h-24 text-blue-300 hidden md:block">
                        <img
                            src="/chart.svg" 
                            alt="Chat question icon"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Content */}
                    <div className="text-center relative z-20">
                        <h2 className="text-3xl font-bold text-gray-800 mb-3">
                            Need sentiment analysis services?
                        </h2>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Supplement your strategy with robust tools for customer analysis from a leading sentiment analysis company.
                        </p>
                        <button className="px-8 py-3 text-white font-medium bg-[#00B4D8] cursor-pointer rounded-md shadow-lg hover:bg-[#00B4D8] transition duration-300">
                            Consult an expert
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </>
    );
}

export default Senti6
