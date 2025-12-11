import React from 'react'

const Pre7 = () => {
    return (
        <div className="text-center px-4 sm:px-6 py-10 max-w-6xl mx-auto -mt-10">
            {/* Heading */}
            <div className="mb-10">
                <h1 className="text-2xl sm:text-3xl font-bold">
                    Explore the Benefits of Machine Failure Prediction with Predictive
                    Analytics What We Offer
                </h1>
                <p className="mt-4 mb-11">
                    We help our clients acquire the most suitable solutions and implement tailored tools to address their business needs.
                </p>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {/* Card 1 */}
                <div className="flex flex-col items-center">
                    <img
                        src="/icon-consulting.svg"
                        alt="Real-time"
                        className="w-20 h-20 mb-4"
                    />
                    <h2 className="text-lg font-bold">Predictive Analytics Consulting</h2>
                    <p className="text-gray-600 ">We’re ready to consult with you and determine how your ML product could be improved and enriched with our predictive analytics services.</p>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col items-center">
                    <img
                        src="/icon-pa-sw-dev.svg"
                        alt="Personalization"
                        className="w-20 h-20 mb-4"
                    />
                    <h2 className="text-lg font-bold">
                        Predictive Analytics Software Development
                    </h2>
                    <p className="text-gray-600">
                        The Mindsmap AI team can assist you in developing an advanced and innovative custom solution based on a proprietary model, which makes the development easier and less costly.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col items-center">
                    <img
                        src="/icon-ml-model-dev.svg"
                        alt="Customized"
                        className="w-20 h-20 mb-4"
                    />
                    <h2 className="text-lg font-bold">Machine Learning Model Development</h2>
                    <p className="text-gray-600">Our team of machine learning engineers and data science experts will help you to create a fully-automated model to address your business needs.</p>
                </div>
            </div>
        </div>
    );
}

export default Pre7
