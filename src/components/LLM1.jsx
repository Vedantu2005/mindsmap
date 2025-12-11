import React from 'react';

// --- Reusable Icon Component for background icons ---
const BackgroundIcon = ({ src, className }) => (
    <div className={`absolute -bottom-6 right-0  ${className}`}>
        <img src={src} alt="" className="w-20 h-20" />
    </div>
);

const LLM1 = () => {
    return (
        <div className="bg-white flex items-center justify-center p-4">
            <div className="container mx-auto max-w-6xl text-center py-1 sm:py-10">

                {/* --- Header Section --- */}
                <h1 className="text-3xl sm:text-4xl  font-bold text-gray-800 tracking-tight">
                    Benefits of On-Premise and Private-Cloud LLM Models
                </h1>
                <p className="mt-4 max-w-6xl mx-auto text-base sm:text-lg text-gray-600">
                    We deploy language models locally to keep your proprietary data secure.
                </p>

                {/* --- Benefits Grid --- */}
                <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 text-left">
                    
                    {/* --- Card 1: Strong Security --- */}
                    <div className="relative  rounded-xl p-8 border border-[#77bce8] shadow-lg transition-shadow duration-300 hover:shadow-blue-200 overflow-hidden">
                        <BackgroundIcon src="/icon-shield.svg" />
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold text-gray-800">Strong Security</h3>
                            <p className="mt-4 text-gray-600">
                                We help you keep a tight rein on your data storage and security by using our custom solutions built on language models that can be deployed on-premise and on private clouds exclusively.
                            </p>
                        </div>
                    </div>

                    {/* --- Card 2: Custom Functionality --- */}
                    <div className="relative     border border-[#77bce8] shadow-lg transition-shadow duration-300 hover:shadow-blue-200 rounded-xl p-8 overflow-hidden">
                        <BackgroundIcon src="/icon-quality-2.svg" />
                         <div className="relative z-10">
                            <h3 className="text-xl font-bold text-gray-800">Custom Functionality</h3>
                            <p className="mt-4 text-gray-600">
                                Our developers adjust foundational models to match your unique business and functional needs and improve the accuracy of outputs by training large language models on your custom dataset.
                            </p>
                        </div>
                    </div>

                </div>

                {/* --- Action Button --- */}
                <div className="mt-12 sm:mt-16">
                    <button className="px-8 py-3 border text-[#77bce8] font-semibold rounded-lg cursor-pointer hover:bg-[#77bce8] hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                       Request Demo
                    </button>
                </div>

            </div>
        </div>
    );
};

export default LLM1;
