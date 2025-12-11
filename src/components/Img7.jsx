import React from 'react'

// Data for the feature cards
const offerings = [
    {
        number: '1',
        title: 'Improved Accuracy',
        description: 'Automate different manual operations, reduce errors, and improve your business efficiency with ML algorithms powering image recognition solutions.',
    },
    {
        number: '2',
        title: 'Lower Operational Costs',
        description: 'Eliminate simple errors and cost overrun by adopting a cost-efficient custom solution to help with workflow automation and acceleration.',
    },
    {
        number: '3',
        title: 'Revamped Services',
        description: 'Cut time spent on routine tasks, improve service provision and redistribute your intellectual resources to focus on tasks requiring a human touch.',
    },
    {
        number: '4',
        title: 'Automated Workflow',
        description: 'Boost employee productivity, increase budget savings with minimal efforts through implementing custom recognition and analysis algorithms into your business workflow.',
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


const Img7 = () => {
    return (
        <div className="bg-white font-sans py-1 md:py-5">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* Header Section */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Benefits
                    </h2>
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

export default Img7
