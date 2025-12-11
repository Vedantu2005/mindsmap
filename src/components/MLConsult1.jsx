import React from 'react';

const mlFeatures = [
    {
        title: "Big Data Visualization",
        description: "Extract valuable insights from unstructured data from multiple sources.",
        icon: "icon-data.svg",
    },
    {
        title: "NLP & ChatGPT",
        description: "Collect, process, and analyze data to reshape business strategies and make more informed decisions with ChatGPT.",
        icon: "icon-aaa.svg",
    },
    {
        title: "Predictive Analytics",
        description: "Anticipate trends, sales and costs, reveal anomalies to mitigate risks and steer your business in the right direction.",
        icon: "icon-visualization.svg",
    },
    {
        title: "Computer Vision",
        description: "Extract more insights from visual data, and detect and classify images according to their features into topic groups.",
        icon: "icon-vision.svg",
    },
];

const FeatureCard = ({ title, description, icon }) => {
    // Placeholder URL for image fallback if the asset is missing
    const fallbackSrc = `https://placehold.co/80x80/e6f3ff/007bff?text=Icon`;

    return (
        <div className="flex flex-col items-center p-6 text-center bg-white rounded-xl border border-gray-200 shadow-md transition-shadow hover:shadow-lg">
            
            {/* Icon */}
            <div className="mb-4 h-20 w-20 flex items-center justify-center">
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
            <h3 className="text-lg font-bold mb-2 text-gray-800">
                {title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed">
                {description}
            </p>
        </div>
    );
};

const MLStart = () => {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 font-sans antialiased">
            
            {/* Top Descriptive Paragraph */}
            <div className="max-w-4xl mx-auto text-center mb-16">
                <p className="text-base leading-relaxed text-gray-700">
                    The Mindsmap AI team of seasoned data scientists and machine learning engineers experienced with 
                    unsupervised learning, supervised learning and reinforcement learning cooperates with clients to provide 
                    cutting-edge solutions for businesses of any size. We delve into each case and select best-fit innovative tools 
                    and proprietary technologies. The output is our custom machine learning models and solutions created in line 
                    with our clients’ business requirements and goals.
                </p>
            </div>

            {/* Main Title */}
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-gray-900 max-w-2xl mx-auto">
                Start Your Next Machine Learning Project With Mindsmap AI
            </h2>

            {/* Feature Grid (4 columns on desktop, responsive stack on mobile) */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {mlFeatures.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        title={feature.title}
                        description={feature.description}
                        icon={feature.icon}
                    />
                ))}
            </div>

            {/* Call to Action */}
            <div className="text-center">
                <p className="text-base text-gray-600 mb-6">
                    Have an idea of a breakthrough ML solution in mind? Let our machine learning consulting company help!
                </p>
                <button className="px-8 py-3 bg-white border-2 border-blue-500 text-blue-600 hover:bg-blue-50 transition-colors duration-200 rounded-md shadow-sm text-base font-medium">
                    Let's Discuss Your Project
                </button>
            </div>
        </section>
    );
};

export default MLStart;
