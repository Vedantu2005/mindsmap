import React from 'react';

const Ocr4 = () => {
    return (
        <div className="bg-white font-sans py-10 sm:py-10 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">

                <div className="relative">
                    {/* Section Header */}
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                            How You Can Use It
                        </h2>
                    </div>

                    {/* Main Content Grid */}
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                        {/* Left Column: Image */}
                        <div className="w-full lg:w-1/2 flex items-center justify-center">
                            <img
                                src="/ocr-monoblock.svg"
                                alt="Computer screen showing OCR technologies like Textract, Tesseract, and Abbyy FlexiCapture"
                                className="w-full max-w-lg h-auto"
                            />
                        </div>

                        {/* Right Column: Text Content */}
                        <div className="w-full lg:w-1/2 text-gray-600 space-y-5 leading-relaxed">
                            <p>
                                Organizations face numerous challenges in modern competitive industries. By remaining stagnant and not improving processes over time, you can undermine both short- and long-term growth. Today, most business leaders have to be steadily on the lookout for the most effective ways to embrace technologies for workflow automation.
                            </p>
                            <p>
                                Mindswap AI employs Google's Tesseract OCR, Abbyy FlexiCapture, and Textract to provide real-time data capture, efficient processing of raw static images, and the categorization and storage of data in a single database.
                            </p>
                        </div>
                    </div>

                    {/* Concluding Text & Button */}
                    <div className="max-w-4xl mx-auto text-center space-y-6 mt-16">
                        <p className="text-gray-600 leading-relaxed">
                            We're also ready to build an automated data capture system to meet your requirements that will help you improve office efficiency and maximize productivity with minimal effort.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Looking for an efficient data extraction solution powered by machine learning?
                        </p>
                        <div className="pt-4">
                            <button className="px-8 py-3 border text-[#77bce8] font-semibold rounded-lg cursor-pointer hover:bg-[#77bce8] hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ocr4;
