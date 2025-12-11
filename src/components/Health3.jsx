import React from 'react';

const Health3 = () => {
    return (
        <div className="bg-white font-sans">
            <div className="max-w-6xl mx-auto py-1 px-4 lg:py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">

                    <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center md:hidden">
                        NLP for Personalised Care
                    </h3>

                    {/* Left Image Content */}
                    <div className="relative flex items-center justify-center ">
                        <div className="absolute w-full lg:w-90 h-full hidden md:block bg-blue-100 rounded-lg transform -translate-x-4 translate-y-4 sm:-translate-x-6 sm:translate-y-6"></div>
                        <div className="relative z-10">
                            <img
                                className="object-cover h-full lg:h-110"
                                src="/document.webp"
                                alt="Basketball players in action during a game"
                            />
                        </div>
                    </div>

                    <div className="text-center md:text-left">

                        {/* --- HEADING FOR DESKTOP --- */}
                        <h3 className="hidden md:block text-2xl font-bold text-gray-800 mb-4">
                            NLP for Personalised Care
                        </h3>

                        <div className="space-y-4 text-gray-600 leading-relaxed mt-5 lg:mt-0">
                            <p>
                                Analyze medical documents to predict conditions. Use NLP to extract data from clinical documents for intelligent diagnostics.
                            </p>
                            <p>
                                Get to know your clients better with <a href="#" className="text-[#77bce8] hover:underline font-medium">NLP API software</a>. Find out who your target audience is–age, gender, interests, specifics, etc. Use the data to better market yourself, keep old customers, and attract new ones.
                            </p>
                            <p>
                                Analyze comments on social media about customer experiences to see how they rate your services. Score comments into people, places, and services to see if your patients are happy with your brand or there’s room for development. Use the insights to improve the overall quality of services and care.
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

export default Health3;