import React from 'react';

const Sport3 = () => {
    return (
        <div className="bg-white font-sans">
            <div className="max-w-6xl mx-auto py-1 px-4 lg:py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">

                    <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center md:hidden">
                        Predictive Analytics for Sports Performance Analysis
                    </h3>

                    {/* Left Image Content */}
                    <div className="relative flex items-center justify-center ">
                        <div className="absolute w-full lg:w-100 h-full hidden md:block bg-blue-100 rounded-lg transform -translate-x-4 translate-y-4 sm:-translate-x-6 sm:translate-y-6"></div>
                        <div className="relative z-10">
                            <img
                                className="object-cover h-full lg:h-110"
                                src="/sport1.webp"
                                alt="Basketball players in action during a game"
                            />
                        </div>
                    </div>

                    <div className="text-center md:text-left">

                        {/* --- HEADING FOR DESKTOP --- */}
                        <h3 className="hidden md:block text-2xl font-bold text-gray-800 mb-4">
                            Predictive Analytics for Sports Performance Analysis
                        </h3>

                        <div className="space-y-4 text-gray-600 leading-relaxed mt-5 lg:mt-0">
                            <p>
                                Want to become the team winning the competition in the world of sports? Use the power of artificial intelligence for sports performance analysis. <a href="#" className="text-[#77bce8] hover:underline font-medium">Predictive analytics solutions</a> offer insights based on player performance analysis and skill evaluation. With AI in sports analytics, analyzing and measuring specific skills, predicting recovery time is easier. Use custom predictive analytics solutions to adjust the training scheme and achieve greater results.
                            </p>
                            <p>
                                Utilize data mining for sporting event ticket sales prediction. Deploy ticket pricing based on past ticket purchase behavior, season trends, past and current ticket price. Leveraging artificial intelligence in sports ticket prediction, you’ll decrease empty seats and maximize the revenue.
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

export default Sport3;