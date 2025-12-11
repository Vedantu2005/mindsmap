import React from 'react'

const Pre5 = () => {
    return (
        <div className="text-center px-4 sm:px-6 py-10">
            {/* Heading */}
            <div className="mb-10">
                <h1 className="text-2xl sm:text-3xl font-bold">
                    Industries
                </h1>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Card 1 */}
                <div className="flex flex-col items-center">
                    <img
                        src="/icon-ecommerce-alt.svg"
                        alt="Real-time"
                        className="w-20 h-20 mb-4"
                    />
                    <h2 className="text-lg font-semibold">
                        Retail / E-com
                    </h2>
                    <p className="text-gray-600 text-sm">
                        Customer analysis
                    </p>
                    <p className="text-gray-600 text-sm">
                        Churn prediction
                    </p>
                    <p className="text-gray-600 text-sm">
                        Demand forecasting
                    </p>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col items-center">
                    <img
                        src="/icon-healtcare.svg"
                        alt="Personalization"
                        className="w-20 h-20 mb-4"
                    />
                    <h2 className="text-lg font-semibold">
                        Healthcare
                    </h2>
                    <p className="text-gray-600 text-sm">
                        Medicaments stockout prevention
                    </p>
                    <p className="text-gray-600 text-sm">
                        Hospital workforce load prediction
                    </p>
                    <p className="text-gray-600 text-sm">
                        EHR analytics
                    </p>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col items-center">
                    <img
                        src="/icon-agriculture.svg"
                        alt="Customized"
                        className="w-20 h-20 mb-4"
                    />
                    <h2 className="text-lg font-semibold">
                        Agriculture
                    </h2>
                    <p className="text-gray-600 text-sm">
                        Forecasting and planning
                    </p>
                    <p className="text-gray-600 text-sm">
                        Yield prediction
                    </p>
                    <p className="text-gray-600 text-sm">
                        Irrigation optimization
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        src="/icon-manufacturing.svg"
                        alt="Customized"
                        className="w-20 h-20 mb-4"
                    />
                    <h2 className="text-lg font-semibold">
                        Manufacturing
                    </h2>
                    <p className="text-gray-600 text-sm">
                        Predictive maintenance
                    </p>
                    <p className="text-gray-600 text-sm">
                        Carbon emissions
                    </p>
                    <p className="text-gray-600 text-sm">
                        Warranty reserve estimation
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        src="/icon-car.svg"
                        alt="Customized"
                        className="w-20 h-20 mb-4"
                    />
                    <h2 className="text-lg font-semibold">
                        Logistics
                    </h2>
                    <p className="text-gray-600 text-sm">
                        Route optimization
                    </p>
                    <p className="text-gray-600 text-sm">
                        Predictive maintenance
                    </p>
                    <p className="text-gray-600 text-sm">
                        Inventory management
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        src="/icon-finance-banking-alt.svg"
                        alt="Customized"
                        className="w-20 h-20 mb-4"
                    />
                    <h2 className="text-lg font-semibold">
                        Fintech
                    </h2>
                    <p className="text-gray-600 text-sm">
                        Payment fee analytics
                    </p>
                    <p className="text-gray-600 text-sm">
                        Credit scoring
                    </p>
                    <p className="text-gray-600 text-sm">
                        Fraud detection
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Pre5
