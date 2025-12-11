import React from 'react'

const FinTech3 = () => {
    return (
        <div className="bg-white font-sans">
            <div className="max-w-6xl mx-auto py-10 px-4  lg:py-10 -mt-5 lg:-mt-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-10 text-center md:hidden">
                    NLP for Customer Service & Insights
                </h3>

                {/* Content Section - Top margin is reduced on mobile as the heading above now has it */}
                <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    <div className="text-center md:text-left order-2 md:order-1">

                        <h3 className="hidden md:block text-2xl font-bold text-gray-800 mb-4">
                            NLP for Customer Service & Insights
                        </h3>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Empower decision-making with NLP in Fintech. Monitor social media posts, surveys, customer feedback forms to see what your customers are saying about the bank. Using <span className='text-[#0b87d7] cursor-pointer'>sentiment analysis</span>, get insights on customer needs and pain points, and come up with tailored offers. Use the data to readjust customer acquisition, experience and retention plans.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Want to beat up the competitors in the banking industry? Merge all types of social data to understand the current trends and customer preferences.
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

export default FinTech3;
