import React from 'react'

const Senti2 = () => {
    const steps = [
        {
            title: "Aggregate",
            iconSrc: "./icon-structured-data.svg", // Adjust path if necessary
            description:
                "Cast your nets wide when analyzing consumer behavior. Collect sentiments across sources and consolidate sentiment data into a unified view.",
        },
        {
            title: "Analyze",
            iconSrc: "./icon-data-analysis-2.svg", // Adjust path if necessary
            description:
                "Add smart algorithms to check the vibe of emerging trends. Track crucial behavior shifts and hidden opportunities in sentiments.",
        },
        {
            title: "Activate",
            iconSrc: "./icon-idea.svg", // Adjust path if necessary
            description:
                "Communicate insights through interactive dashboards, act on your data, and make informed decisions about the trends to pursue.",
        },
    ];

    const Card = ({ title, iconSrc, description }) => (
        <div className="flex flex-col rounded-lg items-center p-6 border border-[#77bce8] shadow-lg transition-shadow duration-300 hover:shadow-blue-200 h-full w-full max-w-sm mx-auto">
            {/* Icon Area - Placeholder based on the structure */}
            <div className="mb-4">
                <img
                    src={iconSrc || "/placeholder-icon.png"} // Use a default if needed
                    alt={`${title} Icon`}
                    className="h-20 w-20 object-contain mx-auto"
                />
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
            <p className="text-center text-gray-600 leading-relaxed">{description}</p>
        </div>
    );

    return (
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl sm:text-3xl font-bold text-gray-800 tracking-wide">
                        Refine Your Business Strategy with User Sentiment
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        Sentiment analytics is a cutting-edge NLP-based technology that
                        identifies the underlying emotional tone of consumer sentiment data.
                    </p>
                </div>
                {/* Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                    {steps.map((step) => (
                        <Card key={step.title} {...step} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Senti2
