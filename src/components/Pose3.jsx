import React from 'react';

const Pose3 = () => {
    return (
        <div className="bg-white text-gray-700 py-5 sm:py-10 px-4 sm:px-6 lg:px-8 -mt-5 lg:mt-0 lg:-mb-12">
            <div className="max-w-6xl mx-auto">
                {/* --- Main Heading --- */}
                <h2 className="text-3xl sm:text-3xl font-bold text-gray-800 mb-10 sm:-mb-10">
                    How You Can Use It
                </h2>

                {/* --- First Section --- */}
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mb-16 sm:mb-20">
                    {/* Text content */}
                    <div className="lg:w-1/2 order-2 lg:order-1">
                        <p className="text-base sm:text-lg leading-relaxed">
                            Our team of experts creates effective human pose estimation solutions from scratch. They help track and analyze human movement or activity. This technology has great potential for both the healthcare and sports industries. It can improve fitness or therapy apps including human body joint localization and pose tracking in real-time. It can provide fast and accurate motion analysis and activity recognition, giving prompt feedback on how to exercise the right way to avoid injury.
                        </p>
                    </div>
                    {/* Image */}
                    <div className="lg:w-1/2 order-1 lg:order-2">
                        <img
                            src="/how-u-can-use-it-1-640x399.webp"
                            alt="Woman doing yoga with pose estimation overlay"
                            className="rounded-2xl shadow-lg w-full h-auto"
                        />
                    </div>
                </div>

                {/* --- Second Section --- */}
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                    {/* Image */}
                    <div className="lg:w-1/2">
                        <img
                            src="/how-u-can-use-it-2.webp"
                            alt="Airport security gates with people walking"
                            className="rounded-2xl shadow-lg w-full h-auto"
                        />
                    </div>
                    {/* Text content */}
                    <div className="lg:w-1/2">
                        <p className="text-base sm:text-lg leading-relaxed mb-6">
                            Human body pose detection based on deep learning can be of much help in the surveillance industry. This innovation can be used at sports venues, airports, train stations and other crowded places to enhance security. Human pose estimation coupled with other data science algorithms for activity recognition and analysis is the perfect combination to help prevent violence.
                        </p>
                        <p className="text-base sm:text-lg leading-relaxed">
                            The technology has the power to transform Entertainment and Media with exciting AR effects. It helps render and align human body parts in a fast and accurate way, making it look lifelike.
                        </p>
                    </div>
                </div>

                {/* --- Call to Action Section --- */}
                <div className="text-center mt-20 sm:mt-12">
                    <p className="text-lg sm:text-lg font-medium text-gray-800 mb-6">
                        Need help in developing a human body pose estimation model?
                    </p>

                    <button className="px-8 py-3 border text-[#77bce8] font-semibold rounded-lg cursor-pointer hover:bg-[#77bce8] hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                        Request a Free Quote

                    </button>
                </div>
            </div>
        </div>
    );
};

export default Pose3;
