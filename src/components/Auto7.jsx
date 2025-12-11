import React from 'react'

const offerings = [
    {
        number: '1',
        title: 'Consulting',
        description: 'Need a robust AI-based solution but don’t know where to start? Or looking for a tailored model for complex data analysis? Reach out to our AI experts to get expert advice.',
    },
    {
        number: '2',
        title: 'Analytics',
        description: 'Adopt Machine Learning models and Big Data development for smarter operational analysis. Extract valuable insights from operational data for averting asset downtimes.',
    },
    {
        number: '3',
        title: 'AI Development',
        description: 'Looking for a tailored AI solution to deliver better products? Kick-start AI development with our experts and get a bespoke smart solution.',
    },
    {
        number: '4',
        title: 'Post-Production Support',
        description: 'Make sure your solution operates at its peak and meets evolving needs after it goes live. Our team monitors and manages your software in the post-production stage.',
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

const Auto7 = () => {
    return (
        <div className="bg-white font-sans py-1 md:py-5">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* Header Section */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-3xl font-bold text-gray-800 mb-4">
                        Our Services
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Combining the power of AI and automotive manufacturing.
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

export default Auto7
