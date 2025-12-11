import React, { useState } from 'react';

// --- Icon Component ---
const Icon = ({ src }) => (
    <img src={src} alt="" className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
);

const LLM2 = () => {
    // --- Data for Use Cases ---
    const useCases = [
        {
            id: 1,
            title: 'Chatbots and Virtual Assistants',
            description: 'Move from generic bot interactions to personalized messaging, automate upselling, and create edgy, digital avatar experiences that guide your customers through the purchase.',
            iconSrc: '/icon-accordion-mobile.svg',
            imageSrc: '/chatbots_and_virtual_assistants.webp', // Example image for Chatbots
        },
        {
            id: 2,
            title: 'Content Generation',
            description: 'Generate high-quality articles, blog posts, marketing copy, and more in a fraction of the time.',
            iconSrc: '/icon-accordion-chat.svg',
            imageSrc: '/content_generation.webp', // Example image for Content Generation
        },
        {
            id: 3,
            title: 'Translation and Language Services',
            description: 'Instantly translate text between languages with high accuracy and nuance.',
            iconSrc: '/icon-accordion-language.svg',
            imageSrc: '/translation_and_language_services.webp', // Example image for Translation
        },
        {
            id: 4,
            title: 'Personalized Recommendations',
            description: 'Analyze user data to provide highly relevant product or content recommendations.',
            iconSrc: '/icon-accordion-star.svg',
            imageSrc: '/personalized_recommendations.webp', // Example image for Recommendations
        },
        {
            id: 5,
            title: 'Text Analysis',
            description: 'Extract insights, sentiment, and key topics from large volumes of text data.',
            iconSrc: '/icon-accordion-text.svg',
            imageSrc: '/text_analysis.webp', // Example image for Text Analysis
        },
        {
            id: 6,
            title: 'Educational Tools',
            description: 'Create interactive learning experiences, generate quizzes, and provide instant feedback.',
            iconSrc: '/icon-accordion-education.svg',
            imageSrc: '/educational_tools.webp', // Example image for Educational Tools
        },
        {
            id: 7,
            title: 'Script Writing',
            description: 'Assist in writing scripts for videos, podcasts, and other creative projects.',
            iconSrc: '/icon-accordion-writing.svg',
            imageSrc: '/script_writing.webp', // Example image for Script Writing
        },
    ];

    // --- State to track the selected use case ---
    const [selectedUseCase, setSelectedUseCase] = useState(useCases[0]);

    return (
        <div className="items-center justify-center p-4 -mt-12 lg:-mt-15">
            <div className="container mx-auto max-w-6xl py-10 lg:py-5">

                {/* --- Header Section --- */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
                        Large Language Models Use Cases
                    </h1>
                    <p className="mt-4 sm:text-lg text-gray-600">
                        Gain a competitive advantage in the market by being AI-first.
                    </p>
                </div>

                {/* --- Main Content: Two-Column Layout --- */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-start">
                    
                    {/* --- Left Column: Use Case List --- */}
                    <div className="w-full lg:w-1/3 space-y-2">
                        {useCases.map((useCase) => (
                            <div
                                key={useCase.id}
                                onClick={() => setSelectedUseCase(useCase)}
                                className={`p-4 rounded-lg cursor-pointer transition-all duration-300 group ${
                                    selectedUseCase.id === useCase.id
                                        ? 'bg-[#eef7fc] border-l-4 border-blue-500 shadow-sm'
                                        : 'border-l-4 border-transparent hover:bg-gray-100'
                                }`}
                            >
                                <div className="flex items-center gap-4">
                                    <Icon src={useCase.iconSrc} />
                                    <h3 className={`font-semibold ${
                                        selectedUseCase.id === useCase.id ? 'text-blue-700' : 'text-gray-700'
                                    }`}>{useCase.title}</h3>
                                </div>
                                {selectedUseCase.id === useCase.id && (
                                    <p className="mt-2 ml-10 text-gray-600 text-sm">
                                        {useCase.description}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* --- Right Column: Dynamic Image --- */}
                    <div className="w-full lg:w-2/3 mt-8 lg:mt-0">
                         <img 
                            src={selectedUseCase.imageSrc} // Dynamically set image source
                            alt={`Screenshot for ${selectedUseCase.title}`} 
                            className="rounded-xl shadow-2xl object-cover w-full h-auto"
                         />
                    </div>
                </div>

                {/* --- Footer Section --- */}
                <div className="text-center mt-16">
                    <p className="text-gray-600 mb-6">Enhance your business with top-notch technology!</p>
                    <button className="px-8 py-3 border text-[#77bce8] font-semibold rounded-lg cursor-pointer hover:bg-[#77bce8] hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                       Request Demo
                    </button>
                </div>

            </div>
        </div>
    );
};

export default LLM2;

