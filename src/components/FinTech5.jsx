import React from 'react'

const FinTech5 = () => {
    return (
        <div className="bg-white font-sans">
            <div className="max-w-6xl mx-auto py-10 px-4  lg:py-10 -mt-5 lg:-mt-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-10 text-center md:hidden">
                    Pose Estimation for Violent Behavior Detection
                </h3>

                {/* Content Section - Top margin is reduced on mobile as the heading above now has it */}
                <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    <div className="text-center md:text-left order-2 md:order-1">

                        <h3 className="hidden md:block text-2xl font-bold text-gray-800 mb-4">
                            Pose Estimation for Violent Behavior Detection
                        </h3>

                        <p className="text-gray-600 leading-relaxed">
                            Unleash the benefits of AI in Fintech with pose estimation algorithms. Recognize human actions and detect violent behavior from the surveillance system’s video. Streamline security management and prevent bank robbery through finance artificial intelligence solutions.
                        </p>
                        <button className="mt-8 px-8 py-3 border border-[#77bce8] text-base font-medium rounded-md text-black cursor-pointer bg-white hover:bg-[#77bce8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Let's Talk
                        </button>
                    </div>

                    {/* Right Image Content (Order is swapped on mobile) */}
                    <div className="relative flex items-center justify-center order-1 md:order-2">

                        <div className="relative w-full max-w-sm">
                            {/* Decorative background shape */}
                            <div className="absolute top-4 -right-4 w-full h-full bg-blue-100 rounded-xl"></div>

                            {/* The actual square image */}
                            <img
                                src="/Insights.webp"
                                alt="imag"
                                className="relative w-full aspect-square object-cover rounded-xl shadow-lg"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FinTech5;
