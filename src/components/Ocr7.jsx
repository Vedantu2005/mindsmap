import React, { useState } from 'react';

// Data for the different industry tabs
const industryData = [
    {
        id: 'gaming',
        title: 'Gaming',
        content: {
            paragraphs: [
                'Player metrics have always been the most valuable resource for game developers and analysts. They want to understand players, monitor and improve gameplay, test design hypotheses, and release products based on thoroughly gathered research.',
                'We provide our customers with the best OCR services and help them:',
            ],
            list: ['improve accuracy', 'reduce errors', 'eliminate manual tasks'],
        },
    },
    {
        id: 'education',
        title: 'Education',
        content: {
            paragraphs: [
                'The educational sphere deals with huge amounts of paperwork every day. Almost all crucial documents are in a paper format and it can be difficult to find necessary information quickly and store it in a convenient format.',
                'This makes it difficult and challenging for educational institutions to offer the best student experience.',
                'Our automated data capture services:',
            ],
            list: ['optimize educational process', 'eliminate manual data entry errors', 'improve the overall accuracy', 'improve the students experience'],
        },
    },
    {
        id: 'retail',
        title: 'Retail',
        content: {
            paragraphs: [
                'The use of automated data capture services give you an overview of your customers’ behavior. Additionally, you can easily scan and extract data from various sources.',
                'This will give you some interesting insights and ways in which some areas can be optimized.',
                'You will be able to:',
            ],
            list: ['reduce costs', 'improve customer services', 'increase the efficiency of store operations'],
        },
    },
    {
        id: 'travel',
        title: 'Travel',
        content: {
            paragraphs: [
                'Big data can bring endless opportunities for the travel industry.',
                'We help our clients collect and analyze valuable information from different sources at every stage of their customers’ journey. We help them improve the customer experience and enhance the service provided.',
                'The use of our solution will allow you to:',
            ],
            list: ['collect and structure valuable data', 'improve services provided', 'improve customer experience'],
        },
    },
];


const Ocr7 = () => {
    // State to track the currently active tab
    const [activeTab, setActiveTab] = useState('gaming');

    // Find the content for the currently active tab
    const activeContent = industryData.find(item => item.id === activeTab)?.content;

    return (
        <div className="bg-white font-sans py-10 sm:py-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Other Industries
                    </h2>
                    <p className="max-w-3xl mx-auto text-gray-600">
                        As a data extraction company, we provide optical character recognition services and help companies across multiple industries optimize their business processes with the help of our automated data capture software.
                    </p>
                </div>

                {/* Main Interactive Section */}
                <div className="flex flex-col md:flex-row gap-8">

                    {/* Left Column: Tab Buttons */}
                    <div className="w-full md:w-1/3 flex flex-col space-y-4">
                        {industryData.map((item) => (
                            <div key={item.id}>
                                <button
                                    onClick={() => setActiveTab(item.id)}
                                    className={`w-full text-left p-4 rounded-lg text-lg font-semibold transition-colors duration-300 ${activeTab === item.id
                                            ? 'bg-[#00B4D8] text-white shadow-lg'
                                            : 'bg-[#deeff9] cursor-pointer text-gray-700 hover:bg-cyan-100'
                                        }`}
                                >
                                    {item.title}
                                </button>

                                {/* Mobile Content: Show content below the active button on mobile */}
                                {activeTab === item.id && (
                                    <div className="md:hidden mt-4 p-6 bg-white border-l-4 border-[#00B4D8] rounded-r-lg shadow">
                                        {activeContent?.paragraphs.map((p, index) => (
                                            <p key={index} className="text-gray-600 mb-4">{p}</p>
                                        ))}
                                        <ul className="space-y-2">
                                            {activeContent?.list.map((listItem, index) => (
                                                <li key={index} className="flex items-center text-gray-600">
                                                    <span className="w-2 h-2 bg-[#00B4D8] rounded-full mr-3 flex-shrink-0"></span>
                                                    <span>{listItem}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right Column: Desktop Content */}
                    <div className="hidden md:block w-full md:w-2/3 p-8 bg-white border-l-4 border-cyan-400 rounded-r-lg shadow-lg">
                        {activeContent?.paragraphs.map((p, index) => (
                            <p key={index} className="text-gray-700 mb-4">{p}</p>
                        ))}
                        <ul className="space-y-2 mt-4">
                            {activeContent?.list.map((listItem, index) => (
                                <li key={index} className="flex items-center text-gray-700">
                                    <span className="w-2.5 h-2.5 bg-[#00B4D8] rounded-full mr-3 flex-shrink-0"></span>
                                    <span>{listItem}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Footer Text & Button */}
                <div className="text-center mt-16">
                    <p className="text-gray-600 mb-6">
                        Outsource your data extraction services to experts.
                    </p>
                    <button className="px-8 py-3 border text-[#77bce8] font-semibold rounded-lg cursor-pointer hover:bg-[#77bce8] hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                        Contact Us
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Ocr7;
