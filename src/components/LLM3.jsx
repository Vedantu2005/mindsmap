import React from 'react';

const LLM3 = () => {
    const industries = [
        { name: 'FinTech', iconSrc: '/bi-fin-service.svg' },
        { name: 'Retail & E-commerce', iconSrc: '/icon-ecommerce-alt.svg' },
        { name: 'Marketing & Advertising', iconSrc: '/bi-marketing.svg' },
        { name: 'Telecommunication', iconSrc: '/icon-telecommunications.svg' },
        { name: 'Consulting services', iconSrc: '/bi-icon-conslng.svg' },
        { name: 'Insurance', iconSrc: '/icon-security.svg' },
    ];

    return (
        <div className="bg-white flex items-center justify-center">
            <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-1 -mt-4 lg:mt-0 sm:py-5 text-center">

                {/* --- Header Section --- */}
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 tracking-tight">
                    Build a Custom LLM Model for Your Industry
                </h1>
                <p className="mt-4 max-w-6xl mx-auto text-lg sm:text-lg text-gray-600">
                    Our generative AI company delivers custom models rooted in AI expertise & years of cross-domain expertise.
                </p>

                {/* --- Industries Grid --- */}
                <div className="mt-12 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {industries.map((industry) => (
                        <div
                            key={industry.name}
                            className="rounded-xl p-6 sm:p-8 flex flex-col items-center justify-center space-y-4  border border-[#77bce8] shadow-lg transition-shadow duration-300 hover:shadow-blue-200 cursor-pointer"
                        >
                            <div className="flex-shrink-0">
                                <img src={industry.iconSrc} alt={`${industry.name} icon`} className="w-16 h-16" />
                            </div>
                            <p className="font-semibold text-gray-700 text-center">{industry.name}</p>
                        </div>
                    ))}
                </div>

                {/* --- Action Button --- */}
                <div className="mt-12 sm:mt-16">
                    <button className="px-8 py-3 border text-[#77bce8] font-semibold rounded-lg cursor-pointer hover:bg-[#77bce8] hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                        Your Industry
                    </button>
                </div>

            </div>
        </div>
    );
};

export default LLM3;

