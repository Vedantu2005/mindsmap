import React from 'react'

const reasons = [
    {
        icon: '/learning.svg',
        title: 'Recognized Leader for Top Data Analytics',
        description: 'We’ve been listed among top data analytics companies on Clutch in 2020.',
    },
    {
        icon: '/medal.svg',
        title: '6 Years of Expertise in E-commerce Solutions Development',
        description: 'We can consult you on the most popular AI use cases in E-commerce to define yours.',
    },
    {
        icon: '/check.svg',
        title: 'Focused on Innovation',
        description: "We’ve been on the frontline of tech since 2018. Quality, reliability, and sharp mind — that’s what our clients say about us.",
    },
];

const Ecom6 = () => {
    return (
        <div className="bg-white font-sans antialiased text-gray-800">
            <div className="container mx-auto px-4 py-10 sm:py-10 ">

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-3xl sm:text-3xl font-bold tracking-tight text-gray-900">
                        Why Choose Mindsmap AI?
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
                        We offer AI and Machine Learning for the E-commerce industry.
                    </p>
                </div>

                {/* Reasons Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
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
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{reason.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Ecom6
