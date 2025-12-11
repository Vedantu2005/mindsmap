import React from 'react'

const Call6 = () => {
    return (
        <div className="px-4 sm:px-6 py-10 text-center -mt-25">
            {/* Heading */}
            <div className="max-w-4xl mx-auto mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">We are a trusted partner</h2>
                <p className="text-gray-700 text-sm sm:text-base">
                    We leverage high-level technical experience and proven development processes to ensure profitable outcomes.
                </p>
            </div>

            {/* Features */}
            <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto mb-8">
                <div className="flex-1 min-w-[200px] bg-white p-4 rounded-lg shadow text-center border border-[#77bce8] shadow-lg transition-shadow duration-300 hover:shadow-blue-200">
                    <img src="/page7-1.svg" alt="" className="mx-auto mb-4 w-16 h-16" />
                    <h3 className="font-semibold mb-2">Experts in AI</h3>
                    <p className="text-gray-700 text-sm sm:text-base">
                        We help you think intelligently and bring you the benefits of AI to ensure better business automation and operational efficiency.
                    </p>
                </div>

                <div className="flex-1 min-w-[200px] bg-white p-4 rounded-lg shadow text-center border border-[#77bce8] shadow-lg transition-shadow duration-300 hover:shadow-blue-200">
                    <img src="/page7-2.svg" alt="" className="mx-auto mb-4 w-16 h-16" />
                    <h3 className="font-semibold mb-2">Reliable AWS Vendor</h3>
                    <p className="text-gray-700 text-sm sm:text-base">
                        Need a reliable AWS provider? We have the knowledge, expertise, and certifications to guide you through your project.
                    </p>
                </div>

                <div className="flex-1 min-w-[200px] bg-white p-4 rounded-lg shadow text-center border border-[#77bce8] shadow-lg transition-shadow duration-300 hover:shadow-blue-200">
                    <img src="/page7-3.svg" alt="" className="mx-auto mb-4 w-16 h-16" />
                    <h3 className="font-semibold mb-2">Top Quality</h3>
                    <p className="text-gray-700 text-sm sm:text-base">
                        We provide high-quality solutions to our clients by making continual improvements in our processes and service delivery.
                    </p>
                </div>

                <div className="flex-1 min-w-[200px] bg-white p-4 rounded-lg shadow text-center border border-[#77bce8] shadow-lg transition-shadow duration-300 hover:shadow-blue-200">
                    <img src="/page7-4.svg" alt="" className="mx-auto mb-4 w-16 h-16" />
                    <h3 className="font-semibold mb-2">Industry Agnostics</h3>
                    <p className="text-gray-700 text-sm sm:text-base">
                        With 150+ completed projects, we have worked across different verticals and businesses operating in niche markets.
                    </p>
                </div>
            </div>

            {/* CTA */}
            <div className="mb-4">
                <p className="text-gray-700 text-sm sm:text-base mb-4">Ready to collaborate?</p>

                <button className="border border-[#00B4D8] px-6 py-3 rounded-lg text-sm sm:text-base hover:bg-[#00B4D8] cursor-pointer hover:text-white transition">
                    Drop us a line
                </button>
            </div>
        </div>
    );
}

export default Call6
