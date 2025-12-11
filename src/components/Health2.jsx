import React from 'react'

const Health2 = () => {
    return (
        <div className="bg-white font-sans">
            <div className="max-w-6xl mx-auto py-10 px-4 sm:px-6 lg:py-10 -mt-5 lg:-mt-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-10 text-center md:hidden">
                    OCR & Healthcare Business Processes Optimization
                </h3>

                {/* Content Section */}
                <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    <div className="text-center md:text-left order-2 md:order-1">
                        <h3 className="hidden md:block text-2xl font-bold text-gray-800 mb-4">
                            OCR & Healthcare Business Processes Optimization
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Tired of <a href="#" className="text-[#77bce8] hover:underline font-medium">managing paper documents</a>? Make a smooth transition from paper to digital with our custom OCR solutions. Optimize healthcare business processes through data capture, retrieval, and extraction. With OCR solutions it’s easy to digitize all kinds of healthcare documents including patients’ records, prescriptions, claims, reports, <a href="#" className="text-[#77bce8] hover:underline font-medium">invoices</a>, etc.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Allow automatic data entry and smooth health data transfer between organizations. Deploy bespoke OCR software into your hospital for laborious tasks to save time and money.
                        </p>
                        <p>
                            Develop an AI pharma EHR for smooth clinical predictions and analytics. Allow for smart workload forecasting and resource management, medication demand. Get insights to promote better patient outcomes with artificial intelligence in pharmacy.
                        </p>
                        <button className="mt-8 px-8 py-3 border border-[#77bce8] text-base font-medium rounded-md text-black cursor-pointer bg-white hover:bg-[#77bce8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Get Started
                        </button>
                    </div>

                    {/* Right Image Content with Background Square */}
                    <div className="relative flex items-center justify-center order-1 md:order-2">

                        {/* This is the new background square */}
                        <div className="absolute w-full lg:w-80 h-full bg-blue-100 rounded-lg hidden md:block -top-6 right-14"></div>

                        {/* This is your existing image container */}
                        <div className="relative z-10">
                            <img
                                className="object-cover lg:h-110 rounded-lg"
                                src="/business.webp"
                                alt="Aspect-based sentiment analysis on a laptop screen"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Health2;