import React from 'react'

const ExpertiseColumn = ({ iconSrc, title, description, linkText = null }) => (
    <div className="flex flex-col items-center text-center px-4">
        {/* The icon image */}
        <img
            src={iconSrc}
            alt={`${title} icon`}
            className="w-16 h-16 object-contain mb-4 text-blue-500" // Use text-blue-500 for color if using SVG/font icon
        />
        <h3 className="text-lg font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
            {description}
            {linkText && (
                <>
                    {' '}
                    <span className="text-blue-500 hover:text-blue-600 cursor-pointer">
                        {linkText}
                    </span>
                </>
            )}
        </p>
    </div>
);


const Img8 = () => {
    const expertiseData = [
        {
            iconSrc: "/icon-medal.svg",
            title: "Strong R&D Team",
            description: "We are a team of 80+ experts delivering successful custom solutions over the years.",
        },
        {
            iconSrc: "/icon-three-man.svg",
            title: "Cross-Domain Experts",
            description: "We bring our vast experience in multiple areas – from brand detection and security to intelligent search and predictive analysis – to solve your business challenges"
        },
        {
            iconSrc: "/icon-five-stars.svg",
            title: "Five-Star Results",
            description: "Our focus is on compelling results. We build our custom solutions to address business-specific challenges and uphold our clients' trust",
        },
    ];

    return (
        <section className="bg-white py-10  px-4">
            <div className="max-w-6xl mx-auto">

                {/* Header Section */}
                <header className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">
                        Why Work with Mindsmap AI
                    </h2>
                    <p className="text-gray-600">
                        At Mindsmap AI, we invest time and efforts in finding the best custom solution for working with each client’s visual data. We provide comprehensive custom image recognition and analysis software development services
                    </p>
                </header>

                {/* Expertise Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-7 gap-y-12">
                    {expertiseData.map((data, index) => (
                        <ExpertiseColumn
                            key={index}
                            iconSrc={data.iconSrc}
                            title={data.title}
                            description={data.description + (data.suffix || '')} // Combine description and suffix
                            linkText={data.linkText}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Img8
