import React from 'react'

const Virtual3 = () => {
    // Component for a single benefit card
    const BenefitCard = ({ iconSrc, title, description, subText = null }) => (
        <div className="p-6 md:p-8 border border-[#77bce8] shadow-lg transition-shadow duration-300 hover:shadow-blue-200 rounded-xl  text-center bg-white ">
            <div className="flex justify-center mb-4">
                {/* The icon image */}
                <img
                    src={iconSrc}
                    alt={`${title} icon`}
                    className="w-16 h-16 object-contain"
                />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
                {description}
            </p>
            {subText && (
                <p className="text-xs text-blue-500 font-medium mt-1">{subText}</p>
            )}
        </div>
    );

    // Data for the 6 benefit cards
    const benefits = [
        {
            iconSrc: "./icon-24hours.svg",
            title: "Effortless Customer Service",
            description: "Be there for your customers 24/7",
            subText: "24/7"
        },
        {
            iconSrc: "./icon-person-check.svg",
            title: "Personalized Experiences",
            description: "Increase retention and lifetime value",
        },
        {
            iconSrc: "./icon-engine.svg",
            title: "Routine Task Automation",
            description: "Free up time to stick to your priorities",
        },
        {
            iconSrc: "./icon-cost-alt.svg",
            title: "Increase Deflections and Agent Productivity",
            description: "Guide your customers to a chatbot for consultation",
        },
        {
            iconSrc: "./icon-dollar-reduce.svg",
            title: "Cost Reduction",
            description: "Fewer hiring hassles and reduced need for overtime pay",
        },
        {
            iconSrc: "./icon-bi-analytics.svg",
            title: "Insights and Analytics",
            description: "Analyze customer trends, needs, and pain points",
        },
    ];

    return (
        <div className="font-sans ">

            {/* Benefits of Virtual Assistant Section (Image 1) */}
            <section className="pt-16 pb-20 px-4">
                <div className="max-w-6xl mx-auto">

                    <header className="text-center mb-12">
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">
                            Benefits of Virtual Assistant
                        </h1>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Virtual assistant software development will enable you to delegate non-core tasks to a chatbot and focus on growing your business.
                        </p>
                    </header>

                    {/* Benefits Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {benefits.map((benefit, index) => (
                            <BenefitCard key={index} {...benefit} />
                        ))}
                    </div>

                    {/* Contact Us CTA (below the grid) */}
                    <div className="text-center mt-16">
                        <p className="text-gray-700 mb-4">
                            Ready to learn more about chatbot development?
                        </p>
                        <button
                            className="border cursor-pointer border-[#77bce8] text-black hover:bg-[#77bce8] hover:text-white transition duration-300 py-3 px-8 rounded-lg font-medium"
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </section>

            {/* --- */}
        </div>
    );
}

export default Virtual3
