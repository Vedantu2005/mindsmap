import React from 'react'

const Ecom3 = () => {
    return (
        <div className="bg-white font-sans">
            <div className="max-w-6xl mx-auto py-10 px-4 sm:px-6 lg:py-10 -mt-5 lg:-mt-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-10 text-center md:hidden">
                    NLP for Customer Analysis
                </h3>

                {/* Content Section - Top margin is reduced on mobile as the heading above now has it */}
                <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    <div className="text-center md:text-left order-2 md:order-1">

                        <h3 className="hidden md:block text-2xl font-bold text-gray-800 mb-4">
                            NLP for Customer Analysis
                        </h3>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Check your brand health with <a href="" className="text-[#77bce8] hover:underline font-medium">customer sentiment analysis.</a> Analyze what your customers say about your products in both store and socials, track E-commerce trends through reviews and comments.
                        </p>
                        <p className="text-gray-600  mb-4 leading-relaxed">
                            Try AI in E-commerce for fast and accurate client segmentation. Get to know your customer better to provide the best service they can dream of. Boost your brand perception and increase conversions.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Mind the customer gap with NLP. Collect and analyze customer feedback to understand the challenges the customers have and line up with their expectations.
                        </p>
                        <button className="mt-8 px-8 py-3 border border-[#77bce8] text-base font-medium rounded-md text-black cursor-pointer bg-white hover:bg-[#77bce8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Let's Talk
                        </button>
                    </div>

                    {/* Right Image Content (Order is swapped on mobile) */}
                    <div className="relative flex items-center justify-center order-1 md:order-2">
                        <div className="relative w-full max-w-sm">
                                            <div className="absolute top-4 -right-4 w-full h-full bg-blue-100 rounded-xl"></div>

                            <img
                                className="relative w-full aspect-square object-cover rounded-xl shadow-lg"
                                src="/Analysis.webp"
                                alt="Aspect-based sentiment analysis on a laptop screen"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Ecom3
