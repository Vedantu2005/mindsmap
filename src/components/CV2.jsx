import React, { useState } from 'react';

const CV2 = () => {
    const useCases = [
        {
            image: '/ensure-on-site-safety.webp', // Using the image from the screenshot
            title: 'Make Process-Chain Efficient with Analogue Meters Reading Automation',
            description: [
                'Harsh working conditions and human errors make manual analogue meters reading ineffective. Here, automation is a go-to solution to exponentially reduce the number of incorrect meter readings, cut down expenses, and optimize analogue meters reading on the whole.',
                'Switch to automated analogue meter reading to increase meters reading accuracy and prevent energy fraud and electrical losses.'
            ],
            benefits: [
                'Real-time and accurate gauge measurement',
                'Saving resources',
                'Reducing fraud instances'
            ]
        },
        {
            image: '/make-process-chain-efficient.webp',
            title: 'Automated Health Monitoring for Livestock',
            description: [
                'Continuous monitoring of cattle helps in early detection of diseases and ensures the well-being of the herd. Our computer vision models can detect subtle changes in behavior and posture.',
                'This proactive approach reduces veterinary costs and improves the overall productivity and welfare of the animals.'
            ],
            benefits: [
                'Early disease detection',
                'Improved herd management',
                'Reduced operational costs'
            ]
        },
        {
            image: '/automate-manufacturing-parts-search.webp',
            title: 'Optimizing Feed Distribution and Intake',
            description: [
                'Ensure optimal nutrition for every animal by automatically monitoring feed levels and consumption patterns. Our system helps prevent overfeeding and underfeeding.',
                'By analyzing intake data, you can adjust feed mixtures and schedules to maximize growth and health, leading to better resource allocation.'
            ],
            benefits: [
                'Prevents feed wastage',
                'Ensures balanced nutrition',
                'Increases farm profitability'
            ]
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? useCases.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === useCases.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };


    return (
        <div className="bg-white text-gray-800 py-12 md:py-5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                <div className="text-center mb-12">
                     <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                        Computer Vision Use Case for Cattle Industry
                    </h2>
                    <h1 className="text-3xl md:text-3xl font-bold text-gray-900 mt-2">
                        Computer Vision Software Development for Your Needs
                    </h1>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 p-4">
                        {/* Image Section */}
                        <div className="w-full md:w-1/2 relative">
                             <div className="overflow-hidden">
                                <img src={useCases[currentIndex].image} alt={useCases[currentIndex].title} className="w-full h-auto object-cover" />
                            </div>
                        </div>

                        {/* Text Content Section */}
                        <div className="w-full md:w-1/2">
                            <h3 className="text-2xl md:text-2xl font-bold text-gray-900 mb-4">{useCases[currentIndex].title}</h3>
                            {useCases[currentIndex].description.map((paragraph, index) => (
                                <p key={index} className="text-gray-600 mb-4 leading-relaxed">{paragraph}</p>
                            ))}
                            
                            <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Key benefits:</h4>
                            <ul className="space-y-2">
                                {useCases[currentIndex].benefits.map((benefit, index) => (
                                     <li key={index} className="flex items-center">
                                        <span className="w-2 h-2 bg-[#77bce8] rounded-full mr-3"></span>
                                        <span className="text-gray-700">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    
                    {/* Carousel Controls */}
                    <button onClick={prevSlide} className="absolute top-1/2 left-0 cursor-pointer md:-left-12 transform -translate-y-1/2 bg-white bg-opacity-75 rounded-full p-2 shadow-md hover:bg-gray-100 transition">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button onClick={nextSlide} className="absolute top-1/2 cursor-pointer right-0 md:-right-12 transform -translate-y-1/2 bg-white bg-opacity-75 rounded-full p-2 shadow-md hover:bg-gray-100 transition">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                </div>
                 {/* Pagination Dots */}
                <div className="flex justify-center mt-8">
                    {useCases.map((_, slideIndex) => (
                        <button key={slideIndex} onClick={() => goToSlide(slideIndex)} className={`w-3 h-3 rounded-full mx-1.5 transition-colors ${currentIndex === slideIndex ? 'bg-[#77bce8]' : 'bg-gray-300 hover:bg-gray-400'}`}></button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CV2;
