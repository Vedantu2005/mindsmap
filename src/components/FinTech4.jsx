import React from 'react';

const FinTech4 = () => {
    return (
        <div className="bg-white font-sans">
            <div className="max-w-6xl mx-auto py-1 px-4 lg:py-10">

                <div className="text-center mb-12">
                    <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                        AI Solutions for Investment Management
                    </h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg leading-6 text-gray-500">
                       Augment the capabilities of investment managers by providing them with AI solutions for data analysis, prediction, risk management, and decision-making.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">

                    <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center md:hidden">
                        Face Recognition for Crime Prevention
                    </h3>

                    {/* Left Image Content */}
                    <div className="relative flex items-center justify-center ">
                        <div className="absolute w-full lg:w-90 h-full hidden md:block bg-blue-100 rounded-lg transform -translate-x-4 translate-y-4 sm:-translate-x-6 sm:translate-y-6"></div>
                        <div className="relative z-10">
                            <img
                                className="object-cover h-full rounded-lg lg:h-90"
                                src="/Prevention.webp"
                                alt="Basketball players in action during a game"
                            />
                        </div>
                    </div>

                    <div className="text-center md:text-left">

                        {/* --- HEADING FOR DESKTOP --- */}
                        <h3 className="hidden md:block text-2xl font-bold text-gray-800 mb-4">
                           Face Recognition for Crime Prevention
                        </h3>

                        <div className="space-y-4 text-gray-600 leading-relaxed mt-5 lg:mt-0">
                            <p>
                                Uncover the potential of computer vision in Fintech. Secure your premises with bespoke face recognition solutions. <span className='text-[#0b87d7] cursor-pointer'>Identifying human faces</span>, it’s easy to detect unauthorized access and keep track of your employees on the bank premises. AI finance solutions based on facial recognition allow restricting which employees have access to key floors and rooms. You can also create a database of people banned from the building. Surveillance systems will identify them informing the security team immediately.
                            </p>
                        </div>
                        <button className="mt-8 px-8 py-3 cursor-pointer border border-[#77bce8] text-base font-medium rounded-md text-black bg-white hover:bg-[#77bce8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinTech4;

