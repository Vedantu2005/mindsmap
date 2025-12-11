import React from 'react';

const CV1 = () => {
    const expertiseData = [
        {
            icon: '/icon-segment-cube.svg',
            title: 'Object Detection, Tracking and Labeling',
            description: 'We extract insights from visual data for various needs: medical image processing, virtual try-ons, visual search, etc.',
        },
        {
            icon: '/icon-like.svg',
            title: 'Recommender Systems Based on Visual Search',
            description: 'Recommender systems for personalized offers and increased customer engagement and loyalty.',
        },
        {
            icon: '/icon-defect-detection.svg',
            title: 'Visual Inspection for Defect Detection',
            description: 'Automated visual inspection solutions to look for defects on the production line and cargo damage detection.',
        },
        {
            icon: '/icon-digitalization.svg',
            title: 'OCR & Data Capture',
            description: 'Custom data capture and extraction solutions developed for document process automation.',
        },
        {
            icon: '/icon_pose-estimation.svg',
            title: 'Pose Estimation',
            description: 'Solutions to track and analyze human movement and activity, and give feedback on user’s workouts.',
        },
        {
            icon: '/icon-entertainment-3.svg',
            title: 'Video Analysis for Automated Surveillance',
            description: 'We develop video analytics solutions for violent behavior detection in real time.',
        },
    ];

    return (
        <div className="bg-white text-gray-700">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-10 max-w-6xl mx-auto">

                <div className="max-w-6xl mx-auto text-center mb-16">
                    <p className="text-lg leading-relaxed text-gray-600">
                        Our team of experts at Mindsmap AI helps businesses in Healthcare, Manufacturing, Fitness and Sports, E-commerce, Marketing and Logistics, and other industries solve business challenges and fuel growth with the help of computer vision technology. No matter what solution you need – a surveillance video system, building a visual inspection system, invoice processing app, or pose estimation implementation for enhancing your customer experience and automating business processes, we’ll find the right way to address it.
                    </p>
                </div>

                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-3xl font-bold text-gray-800 tracking-tight">
                        Computer Vision Expertise
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        Our computer vision software development team builds custom solutions that perform:
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {expertiseData.map((item, index) => (
                        <div key={index} className="rounded-lg p-8 text-center flex flex-col items-center border border-[#77bce8] shadow-lg transition-shadow duration-300 hover:shadow-blue-200">
                            <div className="mb-6 flex items-center justify-center h-16">
                               <img src={item.icon} alt={item.title} className="w-16 h-16" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CV1;

