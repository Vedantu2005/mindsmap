import React from 'react'

const Call5 = () => {
    return (
        <section className="py-10 px-4">
            <div className="max-w-7xl mx-auto">

                {/* --- 1. CTA Banner --- */}
                <div className="max-w-5xl mx-auto p-8 sm:p-12 bg-[#CAF0F8] rounded-lg border border-blue-100 relative overflow-hidden mb-16">

                    {/* Background Illustration/Icon (Left) - Using actual img tag */}
                    <div className="absolute bottom-[-20px] left-[-20px]  w-32 h-32 text-blue-300 hidden md:block">
                        <img
                            src="/art-banner-net-before.svg"
                            alt="Analytics network icon"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Background Icon (Right) - Using actual img tag */}
                    <div className="absolute top-0 right-4  w-28 h-28 text-blue-300 hidden md:block">
                        <img
                            src="/chart.svg"
                            alt="Chat question icon"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Content */}
                    <div className="text-center relative z-20">
                        <h2 className="text-3xl font-bold text-gray-800 mb-3">
                            Ready to Transform Your Business?
                        </h2>
                        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                            Want to lower costs, be more agile, and get to market faster? Our custom AI solutions will enable your call center
                            to reduce errors, improve CX, and drive efficiencies in your business.
                        </p>
                        <button className="px-8 py-3 text-white font-medium bg-[#00B4D8] cursor-pointer rounded-md shadow-lg hover:bg-[#00B4D8] transition duration-300">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Call5
