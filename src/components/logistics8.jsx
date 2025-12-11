import React from 'react';

const reasons = [
    {
        icon: '/medal.svg',
        title: '80+ Professionals',
        description: 'The in-house team of AI and data engineers that deliver tailored tech solutions for logistics businesses. They dedicate full attention to providing value for your logistics company.',
    },
    {
        icon: '/global.svg',
        title: 'Global Presence',
        description: 'We boast a global stand in the tech world. Originating from Cyprus, Mindsmap AI has a distributed team of experts from the USA and across Europe.',
    },
    {
        icon: '/productivity.svg',
        title: 'Complete Transparency',
        description: "Our team of software engineers and data scientists will act as your reliable technology partner and maintain full visibility of development processes at all stages.",
    },
];

const Logistics8 = () => {
    return (
        <div className="bg-white font-sans antialiased text-gray-800">
            <div className="container mx-auto px-4 py-16 sm:py-10 -mt-15">

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-3xl sm:text-3xl font-bold tracking-tight text-gray-900">
                        Why Us as an AI Solutions Provider in Logistics?
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
                        We offer deep expertise in artificial intelligence for transportation and logistics.
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
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{reason.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                        </div>
                    ))}
                </div>

                <p className='mt-10 max-w-5xl mx-auto text-center justify-center'>
                    Learn all about the most disruptive technologies in logistics that can make a difference in your company's success.<br />
                    Download our <span className='text-[#77bce8] cursor-pointer'>free logistics infographic</span> about AI technologies in logistics.
                </p>

            </div>
        </div>
    );
};

export default Logistics8;
