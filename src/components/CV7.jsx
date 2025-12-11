import React from 'react';

const FeatureItem = ({ icon, title, description }) => (
    <div className="flex items-start gap-6 md:gap-8">
        <div className="flex-shrink-0">
            <img src={icon} alt={`${title} icon`} className="w-16 h-16 opacity-80" />
        </div>
        <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
    </div>
);

const CV7 = () => {

    const features = [
        {
            icon: '/icon-deep-learning.svg',
            title: 'Complex Computer Vision Models',
            description: 'We use convolutional neural networks to train efficient algorithms inspired by biological neural activities.'
        },
        {
            icon: '/icon-customizable-solutions.svg',
            title: 'Customizable Solutions',
            description: 'We don’t settle for average. The solutions that we deliver are tailored to fit our customers’ needs and the nature of their data.'
        },
        {
            icon: '/icon-cloud.svg',
            title: 'Cloud Infrastructure',
            description: 'Our leading ML engineers, consultants, and infrastructure architects work together to achieve the best performance for our customers.'
        },
        {
            icon: '/icon-medal.svg',
            title: 'A Highly Experienced Team',
            description: 'We pursue greatness in everything we do to provide our customers with best-in-class solutions in computer vision applications development.'
        }
    ];

    return (
        <div className="bg-white text-gray-800 py-12 md:py-10">
            <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-3xl font-bold text-gray-900">
                        Why Work With Us?
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                        We make it easy to build excellent machine vision software. Discover the reasons to choose us as your computer vision technology partner.
                    </p>
                </div>

                {/* Features List */}
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-10 md:space-y-12">
                        {features.map((feature, index) => (
                            <FeatureItem
                                key={index}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CV7;
