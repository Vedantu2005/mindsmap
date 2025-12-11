import React from 'react';

const FinTech2 = () => {
    return (
        <div className="bg-white font-sans">
            <div className="max-w-6xl mx-auto py-1 px-4 lg:py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">

                    <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center md:hidden">
                        Data Capture/OCR for Paper Work Automation
                    </h3>

                    {/* Left Image Content */}
                    <div className="relative flex items-center justify-center ">
                        <div className="absolute w-full lg:w-90 h-full hidden md:block bg-blue-100 rounded-lg transform -translate-x-4 translate-y-4 sm:-translate-x-6 sm:translate-y-6"></div>
                        <div className="relative z-10">
                            <img
                                className="object-cover h-full rounded-lg lg:h-90"
                                src="/Work.webp"
                                alt="Basketball players in action during a game"
                            />
                        </div>
                    </div>

                    <div className="text-center md:text-left">

                        {/* --- HEADING FOR DESKTOP --- */}
                        <h3 className="hidden md:block text-2xl font-bold text-gray-800 mb-4">
                            Data Capture/OCR for Paper Work Automation
                        </h3>

                        <div className="space-y-4 text-gray-600 leading-relaxed mt-5 lg:mt-0">
                            <p>
                                Use <span className='text-[#0b87d7] cursor-pointer'>ML-powered financial solutions</span> to secure private data. Prevent mishandling, misusing and losing data with solid data entry and capture solutions.
                            </p>
                            <p>
                                <span className='text-[#0b87d7] cursor-pointer'>Automate your work processes</span> with advanced invoice data capture. Capture, recognize and retrieve large volumes of data in no time. Reduce invoice processing time and improve efficiencies. Make Fintech OCR software a part of your daily operations and automate routine tasks and lower labour costs.
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

export default FinTech2;

