import React from 'react'

const reasons = [
    {
        icon: '/icon-prize.svg',
        title: 'State of the Art Models',
        description: 'We are always looking for new ways to improve our predictions and get the best possible results.',
    },
    {
        icon: '/icon-customizable-solutions.svg',
        title: 'Customizable Solutions',
        description: 'We don’t settle for average. Our solutions are tailored to fit in with customers’ specific needs and the nature of their data.',
    },
    {
        icon: '/icon-data-processing.svg',
        title: 'Scalable Results',
        description: "We plan for the future. Our recommendation systems and solutions will grow with your business constantly increasing your capabilities.",
    },
    {
        icon: '/medal.svg',
        title: 'Highly Professional Team',
        description: "We are determined to pursue greatness in everything we do for our clients.",
    },
];

const Recomand6 = () => {
    return (
        <div className="bg-white font-sans antialiased text-gray-800">
            <div className="container mx-auto px-4 py-16 sm:py-10 -mt-15">

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-3xl sm:text-3xl font-bold tracking-tight text-gray-900">
                        Why Work With Us
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
                        We make it easy to build awesome recommendation systems.
                    </p>
                </div>

                {/* Reasons Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
                    {reasons.map((reason) => (
                        <div
                            key={reason.title}
                            className="text-center flex flex-col items-center"
                        >
                            <img
                                src={reason.icon}
                                alt={`${reason.title} icon`}
                                className="h-16 w-16 mb-6"
                                // Adding a fallback style in case the SVG doesn't load
                                onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.textContent = 'Icon failed to load'; }}
                            />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{reason.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Recomand6
