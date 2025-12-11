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

const LLM9 = () => {
    const expertiseData = [
        {
            iconSrc: "./icon-cup.svg",
            title: "Experience You Can Trust",
            description: "Over 150 global companies have chosen us to deliver AI solutions at scale – and the results speak for themselves.",
        },
        {
            iconSrc: "./icon-five-stars.svg",
            title: "Speed-To-Market",
            description: "We owe our immaculate delivery record to calibrated processes and a mature product development approach.",
        },
        {
            iconSrc: "./icon-medal.svg",
            title: "High-Grade Solutions",
            description: "No matter the challenge, our team of 80+ developers finds an optimal solution that propels your business to new heights.",
        },
    ];

    return (
        <section className="bg-white py-10  px-4">
            <div className="max-w-6xl mx-auto">

                {/* Header Section */}
                <header className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">
                        Why Partner with Mapsmap AI?
                    </h2>
                    <p className="text-gray-600">
                        As one of the leading AI companies, we help you leverage the power of LLMs in your web and mobile applications.
                    </p>
                </header>

                {/* Expertise Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12 mb-20">
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

export default LLM9
