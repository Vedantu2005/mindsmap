import React from 'react'

const Recomand3 = () => {
    return (
        <div className="px-4 sm:px-6 py-10">

            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center lg:hidden">
                Product Recommendations
            </h2>

            {/* Content Section */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-10">

                <div className="w-full sm:w-4/5 md:w-2/3 lg:w-96">
                    <img
                        src="/RS3.webp"
                        alt="NLP Services"
                        className="w-full h-auto object-cover"
                    />
                </div>

                <div className="w-full lg:w-1/2 text-center lg:text-left max-w-2xl">

                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 hidden lg:block">
                        Product Recommendations
                    </h2>

                    <p className="mb-4 text-gray-700 leading-relaxed ">
                        Increase online revenue and average order values with personalized product recommendations. This advanced capability recommends products based on real-time behavior, order history, and similar journeys. Add it to product and checkout pages to increase upsells and cross-sells.
                    </p>
                    <h1 className="text-3xl text-[#77bce8]">
                        up to 5 times faster
                    </h1>
                    <p className="text-[#a6a6a6]">users can find desired products</p>
                </div>
            </div>

            {/* CTA Section - No changes needed */}
            <div className="flex flex-col justify-center items-center mt-16 text-center px-4">
                <p className="text-lg">
                    Need help creating personalized user experience?
                </p>
                <div className="mt-5">
                    <button className="border border-[#77bce8] px-6 py-3 cursor-pointer rounded-lg hover:bg-[#77bce8] hover:text-white transition duration-300 ">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Recomand3