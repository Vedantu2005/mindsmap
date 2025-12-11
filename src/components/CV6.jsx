import React from 'react';

const BenefitCard = ({ icon, title, description }) => (
    <div className="bg-white p-4 rounded-lg border border-[#77bce8] shadow-lg transition-shadow duration-300 hover:shadow-blue-200 flex items-start gap-5">
        <div>
             <img src={icon} alt={`${title} icon`} className="w-20 h-20 " />
        </div>
        <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
    </div>
);


const CV6 = () => {

    const benefits = [
        {
            icon: '/real-time.svg',
            title: 'Simpler and Faster Processes',
            description: 'Automate a number of working processes and check your products faster.'
        },
        {
            icon: '/icon-analytics-2.svg',
            title: 'Cost Reduction',
            description: 'Reduce expenses and increase the profitability of your services and products.'
        },
        {
            icon: '/icon-goal.svg',
            title: 'Higher Accuracy',
            description: 'Increase the accuracy of data-based operations and reduce errors.'
        },
        {
            icon: '/icon-diamond.svg',
            title: 'High-Quality Results',
            description: 'Optimize the working process and increase the quality of customer service.'
        }
    ];

    return (
        <div className="text-gray-800 py-12 md:py-10 -mt-5">
            <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-3xl font-bold text-gray-900">
                        Benefits
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                        The use of custom-built computer vision solutions allow you to derive many practical benefits with minimal efforts.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                    {benefits.map((benefit, index) => (
                        <BenefitCard 
                            key={index}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CV6;
