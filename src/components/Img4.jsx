import React from 'react'

const ExpertiseColumn = ({ iconSrc, title, description, linkText = null }) => (
    <div className="flex flex-col items-center text-center px-4">
        {/* The icon image */}
        <img
            src={iconSrc}
            alt={`${title} icon`}
            className="w-40 h-40 object-contain mb-4 " // Use text-blue-500 for color if using SVG/font icon
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

const Img4 = () => {
    const expertiseData = [
        {
            iconSrc: "/box-with-picture.svg",
            title: "Collect",
            description: "We collect datasets, label images, and add meta tags to each unlabeled picture.",
        },
        {
            iconSrc: "/brain-with-connection.svg",
            title: "Train",
            description: "We use collected and labeled data to train an algorithm to process and analyze image datasets."
        },
        {
            iconSrc: "/big-eye.svg",
            title: "Evaluate",
            description: "We provide a ready-made model with REST API calls to work with new datasets by using a computer vision model.",
        },
    ];

    return (
        <section className="bg-white py-10 -mt-15 px-4">
            <div className="max-w-6xl mx-auto">

                {/* Header Section */}
                <header className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">
                        How We Build Custom Image Recognition Solutions
                    </h2>
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

export default Img4
