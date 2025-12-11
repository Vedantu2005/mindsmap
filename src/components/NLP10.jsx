import React from 'react'

const NLP10 = () => {
    return (
        <div className="flex justify-center items-center py-10 px-4">
            <div
                className="w-full max-w-6xl p-12 md:p-16 bg-[#103654] rounded-xl shadow-2xl text-center relative overflow-hidden"
            >
                <div className="absolute bottom-[-20px] left-[-20px]  w-32 h-32 hidden md:block">
                    <img
                        src="/art-banner-dark-brain-before.svg"
                        alt="Analytics network icon"
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Background Icon (Right) - Using actual img tag */}
                <div className="absolute top-4 right-4  w-24 h-24 hidden md:block">
                    <img
                        src="/art-banner-dark-net-after.svg"
                        alt="Chat question icon"
                        className="w-full h-full object-contain"
                    />
                </div>
                {/* Headline */}
                <h2 className="text-2xl md:text-3xl font-bold text-[#ff9c00] mb-4">
                    Keep your data safe with fine-tuned LLMs
                </h2>

                {/* Subtext */}
                <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                    Accelerate sales and ROIs and ensure your data security with large language models trained for your business needs.
                </p>

                {/* CTA Button */}
                <button
                    className="px-8 py-3 text-base text-white cursor-pointer rounded-lg bg-[#00B4D8] shadow-lg transition duration-300 ease-in-out transform hover:scale-[1.03]"
                    onClick={() => console.log('Explore LLM development clicked')}
                >
                    Explore LLM development
                </button>
            </div>
        </div>
    );
}

export default NLP10
