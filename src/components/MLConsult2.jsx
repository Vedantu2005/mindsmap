import React from 'react';

const services = [
    {
        title: "Deep Learning Solutions Development",
        description: "We provide our clients with quality assistance to streamline business processes and significantly improve business metrics by fine-tuning the performance of algorithms powered by artificial neural networks.",
        icon: "icon-deep-learning.svg", // Assumed icon for neural network
    },
    {
        title: "Custom Web Application Development",
        description: "Our customers get expert assistance in matters related to custom machine learning-based web development services to enhance their business efficiency and gain results unseen before.",
        icon: "icon-custom-software.svg", // Assumed icon for software/gear
    },
    {
        title: "Enterprise Machine Learning as a Service",
        description: "Our hand-picked team builds machine learning solutions for enterprises to help business owners automate and optimize business operations through deriving valuable insights from raw data with human intervention eliminated.",
        icon: "icon-enterprise.svg", // Placeholder icon for enterprise/building
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

const MLDevService = () => {
    return (
        <section className="py-4 px-4 sm:px-6 lg:px-8 bg-white font-sans antialiased">
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold mb-16 text-gray-900">
                Our Machine Learning Development Services
            </h2>

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

export default MLDevService;
