import React from 'react';

const Sport1 = () => {
    return (
        <div className="bg-white font-sans">
            <div className="container mx-auto px-4 py-10 sm:py-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
                        Areas of Expertise
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
                        Using Artificial Intelligence to address sports and wellness challenges.
                    </p>
                </div>

                {/* Content Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center max-w-6xl mx-auto">

                    <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center md:hidden">
                        Pose Estimation for Personalized Real-time Feedback
                    </h3>

                    {/* Left Image Content */}
                    <div className="relative flex items-center justify-center ">
                        <div className="absolute w-full lg:w-100 h-full bg-blue-100 rounded-lg hidden md:block transform -translate-x-4 translate-y-4 sm:-translate-x-6 sm:translate-y-6"></div>
                        <div className="relative z-10">
                            <img
                                className="object-cover lg:h-110"
                                src="/sport.webp"
                                alt="Basketball players in action during a game"
                            />
                        </div>
                    </div>

                    <div className="text-center md:text-left">

                        {/* --- HEADING FOR DESKTOP --- */}
                        <h3 className="hidden md:block text-2xl font-bold text-gray-800 mb-4">
                            Pose Estimation for Personalized Real-time Feedback
                        </h3>

                        <div className="space-y-4 text-gray-600 mt-5 lg:mt-0 leading-relaxed">
                            <p>
                                Want to speed up the healing with physical therapy? <a href="#" className="text-[#77bce8] hover:underline font-medium">Enable human pose estimation</a> in hospital settings. Modernizing your practice with AI, patients stay injury-free and get personalized real-time feedback to optimize physical activity. AI wellness solutions guarantee better patient outcomes through error detection algorithms.
                            </p>
                            <p>
                                Need to improve your existing fitness app? Enhance it with real-time pose tracking and estimation. Let workouts be motivating and personalized through your sports IT solution.
                            </p>
                            <p>
                                Want to keep your sporting event safe? Go for <a href="#" className="text-[#77bce8] hover:underline font-medium">ML development</a> of violence detection solutions. Making a shift to digital security with a custom surveillance system, you’ll enable violent behavior detection, crowd monitoring and analysis.
                            </p>
                        </div>
                        <button className="mt-8 px-8 py-3 border border-[#77bce8] text-base font-medium cursor-pointer rounded-md text-gray-700 bg-white hover:bg-[#77bce8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                            Let's Talk
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Sport1;
