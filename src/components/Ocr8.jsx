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

const Ocr8 = () => {
    const expertiseData = [
        {
            iconSrc: "/icon-professional-team.svg",
            title: "Top-Notch R&D Team",
            description: "We are a seasoned development team of over 80 members with years of production experience in artificial intelligence projects and expertise in various domains.",
        },
        {
            iconSrc: "/icon-customizable-solutions.svg",
            title: "Customizable Solutions",
            description: "We don’t settle for average. Our solutions are tailored to fit our clients’ exact needs, the nature of their data and the specifics of their business area."
        },
        {
            iconSrc: "/icon-quality-results.svg",
            title: "High-Quality Results",
            description: "We build automated data capture solutions to help you improve data accuracy, reduce input errors, cut paper document processing costs, and concentrate on more creative tasks.",
        },
    ];

    return (
        <section className="bg-white py-10 -mt-10 px-4">
            <div className="max-w-6xl mx-auto">

                {/* Header Section */}
                <header className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">
                       Why Work With Mindsmap AI?
                    </h2>
                    <p className="text-gray-600">
                        At Mindsmap AI, we invest time and effort into delivering the best solutions to our clients and providing first-class data capture and extraction services.
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

                <p className='text-center mt-15'>
                    Automated data capture and machine learning data extraction will generate additional value, increase ROI, automate the workflow, and facilitate tedious tasks. If you want to outsource data capture or extraction services, Mindsmap AI is at your service to offer the best solutions for your business.
                </p>
            </div>
        </section>
    );
}

export default Ocr8
