import React from 'react';

const techniques = [
    {
        icon: 'icon-data-security.svg', // Placeholder, assuming this matches the database icon
        title: 'Advanced Data Analysis',
        description: 'Advanced Data Analysis',
    },
    {
        icon: 'icon-cost.svg', // Placeholder, assuming this matches the chart icon
        title: 'Predictive Analytics Solutions',
        description: 'Predictive Analytics Solutions',
    },
    {
        icon: 'icon-five-stars.svg',
        title: 'Automated Review Collection and Analysis Engine',
        description: 'Automated Review Collection and Analysis Engine',
    },
    {
        icon: 'icon-fraud.svg',
        title: 'Fraud Detection',
        description: 'Fraud Detection',
    },
    {
        icon: 'icon-engine.svg', // Assuming this matches the gears icon
        title: 'Recommendation Engines',
        description: 'Recommendation Engines',
    },
    {
        icon: 'icon-vision.svg', // Assuming this matches the eye icon
        title: 'Computer Vision and Visual Search',
        description: 'Computer Vision and Visual Search',
    },
    {
        icon: 'icon-k-2.svg', // Assuming this matches the K box icon
        title: 'Data Capture, Extraction, and Processing',
        description: 'Data Capture, Extraction, and Processing',
    },
    {
        icon: 'icon-jpg.svg', // Assuming this matches the document icon
        title: 'Text Analysis and Natural Language Processing',
        description: 'Text Analysis and Natural Language Processing',
    },
];

const CECTechniques = () => {
    return (
        <section className="py-4 px-4 sm:px-6 lg:px-8 bg-white text-gray-800 font-sans antialiased">
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-12 sm:mb-16">
                Data Science Techniques We Apply
            </h2>

            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
                    {techniques.map((tech, index) => (
                        <div key={index} className="flex flex-col items-center text-center px-2">
                            {/* Icon */}
                            <div className="mb-4 h-20 w-20 flex items-center justify-center">
                                <img
                                    src={`/${tech.icon}`}
                                    alt={tech.title}
                                    className="w-full h-full object-contain text-blue-400"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        // Placeholder icon in case the specific file fails to load
                                        e.target.src = `https://placehold.co/64x64/E0F2FE/3B82F6?text=Icon`;
                                        e.target.style.filter = 'none'; // Clear any potential filters
                                        console.error(`Failed to load icon: /${tech.icon}`);
                                    }}
                                />
                            </div>
                            
                            {/* Title */}
                            <p className="text-sm sm:text-base font-medium leading-relaxed max-w-[180px]">
                                {tech.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CECTechniques;
