import React from 'react';

const Ecom1 = () => {
    return (
        <div className="bg-white font-sans">
            <div className="container mx-auto px-4 py-10 sm:py-10">

                {/* Header */}
                

                {/* Content Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center max-w-6xl mx-auto">

                    <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center md:hidden">
                        Computer Vision for Better Customer Experiences
                    </h3>

                    {/* Left Image Content */}
                    <div className="relative flex items-center justify-center ">
                        <div className="absolute w-full lg:w-90 h-full bg-blue-100 rounded-lg hidden md:block transform -translate-x-4 translate-y-4 sm:-translate-x-6 sm:translate-y-6"></div>
                        <div className="relative z-10">
                            <img
                                className="object-cover lg:h-110"
                                src="/Experiences.webp"
                                alt="Basketball players in action during a game"
                            />
                        </div>
                    </div>

                    <div className="text-center md:text-left">

                        {/* --- HEADING FOR DESKTOP --- */}
                        <h3 className="hidden md:block text-2xl font-bold text-gray-800 mb-4">
                            Computer Vision for Better Customer Experiences
                        </h3>

                        <div className="space-y-4 text-gray-600 mt-5 lg:mt-0 leading-relaxed">
                            <p>
                                <a href=""  className="text-[#77bce8] hover:underline font-medium">Integrate computer vision solutions</a> for E-commerce to outperform your competitors and let your users shop with a camera. Enable <a href="#" className="text-[#77bce8] hover:underline font-medium">AI-based visual search</a> in your e-store for seamless shopping experience. Automated Image detection and classification allow for fast and accurate item search, guaranteeing outstanding shopping experience. Implement Artificial Intelligence in your <a href="#" className="text-[#77bce8] hover:underline font-medium">mobile app</a> and make it easy-to-use and user-friendly.
                            </p>
                            <p>
                                Want to stand out from other E-commerce stores? Add AR visual effects into your mobile app. Whether you sell clothes, cosmetics, eyewear or toys, you can let your shoppers try it before they buy it. Offer them immersive experiences and fun and get loyal customers that return for more.
                            </p>
                            
                        </div>
                        <button className="mt-8 px-8 py-3 border border-[#77bce8] text-base font-medium cursor-pointer rounded-md text-gray-700 bg-white hover:bg-[#77bce8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                            Let's Talk
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Ecom1;
