import React from 'react'

const benefits = [
    { icon: '/stars.svg', title: 'Great Customer Experience', description: 'Simplified customer experiences for great brand reputation and increased conversions.' },
    { icon: '/hand.svg', title: 'Customer Personalization', description: 'Relevant offers and recommendations that resonate with each of your customers.' },
    { icon: '/graphic.svg', title: 'Increased Sales', description: 'More profits out of analytical insights.' },
    { icon: '/cart.svg', title: 'Exceptional Performance and Data Safety', description: 'Real-time anomaly detection for your online store.' },
];

const Ecom5 = () => {
    return (
        <div className="bg-white font-sans antialiased text-gray-800">
            <div className="container mx-auto px-4 py-5 sm:py-5">

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-3xl sm:text-3xl font-bold tracking-tight text-gray-900">
                        How It Can Benefit Your Business
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
                        We unlock the power of AI in the E-commerce industry.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {benefits.map((benefit, index) => (
                        <div
                            key={benefit.title}
                            className={`relative p-8 ${index % 2 !== 0 ? 'pl-22' : 'pr-22'} bg-white rounded-xl border border-[#77bce8] shadow-lg transition-shadow duration-300 hover:shadow-blue-200 overflow-hidden`}
                        >
                            <img
                                src={benefit.icon}
                                alt={`${benefit.title} icon`}
                                className={`absolute top-4 ${index % 2 !== 0 ? '-left-14' : '-right-14'} h-35 w-40`}
                                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/160x160/cccccc/ffffff?text=Error&font=inter'; }}
                            />
                            <div className={`relative z-10 ${index % 2 !== 0 ? 'text-right' : ''}`}>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center mt-16">
                    <p className="text-lg text-gray-600">
                        Need an AI solution for fitness?
                    </p>
                    <button
                        className="mt-4 px-8 py-3 border border-[#77bce8] text-base font-medium 
                       rounded-lg text-gray-700 bg-white hover:bg-[#77bce8] cursor-pointer 
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500
                       transition-colors"
                    >
                        Get Started
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Ecom5
