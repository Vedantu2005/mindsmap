import React from 'react'

const Call1 = () => {
    return (
        <div>
            {/* Top Banner */}
            <div className="text-center flex justify-center items-center bg-gray-200 w-full h-24 sm:h-28 px-4">
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
                    Set up omnichannel cloud contact center to drive better customer
                    experience with Amazon Connect
                </h2>
            </div>

            <div className="px-4 sm:px-6 py-10 sm:py-12">
                {/* Top Section */}
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
                    <h1 className="text-lg sm:text-xl md:text-3xl font-bold mb-4">
                        Custom Solutions We Can Develop for You
                    </h1>
                    <p className="text-gray-700 text-sm sm:text-base">
                        We provide services that help you deliver impactful solutions and make
                        your call center more efficient.
                    </p>
                </div>

                {/* Content Section */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-10">
                    {/* Left - Image */}
                    <div className="w-full sm:w-4/5 md:w-2/3 lg:w-96">
                        <img
                            src="/page1.webp"
                            alt="NLP Services"
                            className="w-full h-auto "
                        />
                    </div>

                    {/* Right - Text */}
                    <div className="max-w-xl text-left px-2 sm:px-0 mt-6 lg:mt-0">
                        <h2 className="text-xl sm:text-2xl font-bold mb-4">
                            Customer Care Call and Text Analytics
                        </h2>
                        <p className="mb-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                            Make use of Artificial intelligence solutions for call centers.
                            Analyze customer data to create better customer experience
                            strategies. Using well-rounded call and text analytics, you can
                            understand how customers feel at the moment, rate your services and
                            what you can do to upscale them.
                        </p>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                            Using customer care speech analytics, you can easily measure
                            customer’s emotions:
                        </p>
                        <ul className="list-disc list-inside marker:text-[#00B4D8] mt-3 space-y-1 text-sm sm:text-base">
                            <li>Speaker classification & identification</li>
                            <li>Tone identification</li>
                            <li>Deescalation identification</li>
                            <li>Sentiment analysis</li>
                            <li>Empathy/confidence/politeness check</li>
                            <li>Speaking-Clearly check</li>
                            <li>Customer satisfaction measure</li>
                            <li>Problem/next steps identification</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Call1
