import React from 'react'

const reasons = [
    {
        icon: '/cup.svg',
        title: 'Top-Rated AI Company',
        description: 'Mindsmap AI is among the leading automotive AI companies of 2021 with a global presence and deep expertise.',
    },
    {
        icon: '/target.svg',
        title: 'Industry-Focused',
        description: 'We stay on top of the latest AI auto works. We focus on the unique needs of our clients and provide AI automotive solutions that address their pains.',
    },
    {
        icon: '/hospitality.svg',
        title: 'Reliable Tech Partner',
        description: "Efficient communication, strict deadlines, and innovative ideas to set up your project for success.",
    },
];

const Auto8 = () => {
  return (
        <div className="bg-white font-sans antialiased text-gray-800">
            <div className="container mx-auto px-4 py-10 sm:py-10 ">

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-3xl sm:text-3xl font-bold tracking-tight text-gray-900">
                        Why Work With Mindsmap AI?
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
                       Bridging the gap between intelligence and technology.
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

export default Auto8
