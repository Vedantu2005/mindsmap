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

const Pose6 = () => {
    const expertiseData = [
        {
            iconSrc: "/icon-three-man-2-alt.svg",
            title: "A Proficient Team of 80+ Experts",
            description: "We have an excellent market reputation with our reliable human pose recognition solutions, and have completed many projects related to 2D and 3D human pose estimation in various niches.",
        },
        {
            iconSrc: "/icon-vip.svg",
            title: "6 Years on the Market",
            description: "We have more than 7 years of experience in delivering efficient human body position estimation development services."
        },
        {
            iconSrc: "/icon-customizable-solutions.svg",
            title: "Customized Solutions",
            description: "We work to develop cutting-edge solutions for a wide range of clients as per their requirements.",
        },
        {
            iconSrc: "/icon-prize.svg",
            title: "High-Quality Results",
            description: "Our quality-focused team of data scientists delivers reliable and robust customized pose recognition systems.",
        },
    ];

    return (
        <section className="bg-white py-10  px-4">
            <div className="max-w-6xl mx-auto">

                {/* Header Section */}
                <header className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">
                        Why Choose Us as Your CV Technology Provider?
                    </h2>
                    <p className="text-gray-600">
                        At Mindsmap AI, we put the client first. We understand that your business is one of a kind, which is why we build client-centric solutions specifically tailored to your business and the specifics of the industry.We use our multi-year expertise and top-notch technology to make sure your product stays relevant to the market for many years to come.
                    </p>
                </header>

                {/* Expertise Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-7 gap-y-12">
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

export default Pose6
