import React from 'react';

const services = [
    {
        title: "Unveiling Opportunities for Data Collection",
        description: "We’re aware of the data challenges that organizations face like data collection and storage for further analysis. We help companies pull together the requirements for data collection, identify issues, and uncover relevant opportunities.",
        icon: "icon-data-issues-2.svg", // Assumed icon for neural network
    },
    {
        title: "Conducting Exploratory Data Analysis (EDA)",
        description: "We plunge into step-by-step cooperation with organizations of any size, starting with EDA, to pass to the model development and training process. As a result of EDA, our clients retrieve valuable reports and data-based recommendations.",
        icon: "icon-data-analysis-2.svg", // Assumed icon for software/gear
    },
    {
        title: "Implementing Machine Learning Algorithms",
        description: "Whatever the challenges, our team’s here to help implement machine learning algorithms in business workflow. We offer the best-fit approach for implementing and processing the provided data.",
        icon: "icon-implementing.svg", // Placeholder icon for enterprise/building
    },
];

const ServiceCard = ({ title, description, icon }) => {
    // Placeholder URL for image fallback if the asset is missing
    const fallbackSrc = `https://placehold.co/100x100/e6f3ff/007bff?text=Icon`;

    return (
        <div className="flex flex-col items-center p-4 text-center">
            
            {/* Icon */}
            <div className="mb-4 h-24 w-24 flex items-center justify-center">
                <img
                    src={`/${icon}`}
                    alt={`${title} icon`}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = fallbackSrc;
                    }}
                />
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold mb-3 text-gray-800">
                {title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
                {description}
            </p>
        </div>
    );
};

const MLConService = () => {
    return (
        <section className="py-4 px-4 sm:px-6 lg:px-8 bg-white font-sans antialiased">
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold mb-16 text-gray-900">
                Our Machine Learning Consulting Services
            </h2>
            <p className="text-center mt-0">Machine learning consulting services according to your unique requirements, use cases, and dataset peculiarities.</p>

            {/* Service Grid (3 columns on desktop, responsive stack on mobile) */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 mb-16">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        title={service.title}
                        description={service.description}
                        icon={service.icon}
                    />
                ))}
            </div>

            {/* Contact Us Button */}
            <div className="text-center">
                <button className="px-8 py-3 bg-white border-2 border-blue-500 text-blue-600 hover:bg-blue-50 transition-colors duration-200 rounded-md shadow-sm text-base font-medium">
                    Contact Us
                </button>
            </div>
        </section>
    );
};

export default MLConService;
