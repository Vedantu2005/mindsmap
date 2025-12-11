import React from 'react';

const Senti9 = () => {
    const bannerStyle = {
        backgroundImage: 'radial-gradient(36.96% 508.4% at 31.52% 50%, #4a6c86 0, #0e486a 100%)',
        boxShadow: '0 8px 10px rgba(16,54,84,.14),0 3px 14px rgba(16,54,84,.12),0 4px 5px rgba(16,54,84,.2)'
    };

    return (
        <section className="py-10 px-4 sm:px-6 lg:px-8 -mt-10">
            <div className="max-w-7xl mx-auto">
                <div
                    className="rounded-2xl overflow-hidden"
                    style={bannerStyle}
                >
                    <div className="flex flex-col md:flex-row items-center">

                        {/* Left Side: Text and Button */}
                        <div className="text-white text-center md:text-left p-8 md:p-12 lg:p-16 md:w-3/5">
                            <h2 className="text-3xl lg:text-3xl font-extrabold leading-tight drop-shadow-md">
                                More insights on Big data and brand management
                            </h2>
                            <p>
                                Download our latest report on the role of analytics in reputation management and capture the value of sentiment monitoring for your brand image.

                            </p>
                            <a
                                href="/contact"
                                className="mt-8 inline-block bg-[#00B4D8] text-white font-bold py-3 px-10 rounded-xl hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                                Download the report

                            </a>
                        </div>

                        {/* Right Side: Image */}
                        <div className="md:w-2/5 h-64 md:h-auto flex justify-center items-center">
                            <img
                                src="/sentiment-report.webp"
                                alt="Technology Trends Report"
                                className="w-full h-full md:w-auto md:h-80 object-contain transform md:scale-125 md:-rotate-6 transition-transform duration-500 "
                            />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Senti9;

