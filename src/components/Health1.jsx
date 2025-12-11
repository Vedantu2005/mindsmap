import React from 'react';

const Health1 = () => {
    return (
        <div className="bg-white font-sans">
            <div className="container mx-auto px-4 py-10 sm:py-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
                        Areas of Expertise
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
                        Unlocking the power of AI for healthcare and pharmaceutical organizations.
                    </p>
                </div>

                {/* Content Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center max-w-6xl mx-auto">

                    <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center md:hidden">
                        Predictive Analytics & Healthcare Delivery Enhancement
                    </h3>

                    {/* Left Image Content */}
                    <div className="relative flex items-center justify-center ">
                        <div className="absolute w-full lg:w-100 h-full bg-blue-100 rounded-lg hidden md:block transform -translate-x-4 translate-y-4 sm:-translate-x-6 sm:translate-y-6"></div>
                        <div className="relative z-10">
                            <img
                                className="object-cover lg:h-110"
                                src="/healthcare.webp"
                                alt="Basketball players in action during a game"
                            />
                        </div>
                    </div>

                    <div className="text-center md:text-left">

                        {/* --- HEADING FOR DESKTOP --- */}
                        <h3 className="hidden md:block text-2xl font-bold text-gray-800 mb-4">
                            Predictive Analytics & Healthcare Delivery Enhancement
                        </h3>

                        <div className="space-y-4 text-gray-600 mt-5 lg:mt-0 leading-relaxed">
                            <p>
                                Meet unique patients’ needs and enhance healthcare delivery with <a href="#" className="text-[#77bce8] hover:underline font-medium">stellar predictive analytics solutions.</a>
                            </p>
                            <p>
                               Diagnostics can be easier with big data analysis and <a href="#" className="text-[#77bce8] hover:underline font-medium">machine learning</a>. Use our ML-based predictive models for the automatic detection of anomalies in patient clinical data. Analyze the results to adjust the intended treatment plan and navigate medicine risks like adverse reactions and medication side effects.
                            </p>
                            <p>
                                Prevent chronic diseases and improve patient outcomes. Analyzing patient-generated data, you can predict disorders like diabetes or heart disease. Predictive analytics tools will help you identify high-risk patients and predict their future outcomes. Make personalized predictions and treatment plans reducing the risk for hospitalization.
                            </p>
                            
                        </div>
                        <button className="mt-8 px-8 py-3 border border-[#77bce8] text-base font-medium cursor-pointer rounded-md text-gray-700 bg-white hover:bg-[#77bce8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                            Contact Us
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Health1;
