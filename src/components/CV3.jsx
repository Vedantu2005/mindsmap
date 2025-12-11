import React from 'react';

const CV3 = () => {

    const contentData = [
        {
            title: 'Adopt Multi-Object Detection Models for Automatic Image Tagging',
            description: [
                'We use convolutional neural networks to teach machines what different objects look like and train algorithms to automatically identify people and objects in the picture.',
                'Multi-object detection can be a great asset for E-commerce organizations and social media platforms. It can be used to enhance the customer experience in retail, logistics, and supply chain.'
            ],
            image: '/deepl-multi-object-detection.webp',
            imagePosition: 'right'
        },
        {
            title: 'Extract More Insights from Visual Data with Image Segmentation Models',
            description: [
                'Image segmentation splits an image into meaningful parts to make it easier for machines to understand, process, and analyze.',
                'Image segmentation can be widely applied for object tracking, medical image processing, face recognition, and more.'
            ],
            image: '/home.png',
            imagePosition: 'left'
        }
    ];


    return (
        <div className="bg-white  text-gray-800 py-12 md:py-10">
            <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {contentData.map((section, index) => (
                    <div 
                        key={index} 
                        className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 ${index < contentData.length - 1 ? 'mb-16 md:mb-24' : ''}`}
                    >
                        {/* Image Section */}
                        <div className={`w-full md:w-1/2 ${section.imagePosition === 'right' ? 'md:order-2' : 'md:order-1'}`}>
                            <div className="bg-white p-3 md:p-4 rounded-lg shadow-2xl border border-gray-100 relative">
                                <img 
                                    src={section.image} 
                                    alt={section.title} 
                                    className="w-full h-auto object-cover rounded-md" 
                                />
                            </div>
                        </div>

                        {/* Text Content Section */}
                        <div className={`w-full md:w-1/2 ${section.imagePosition === 'right' ? 'md:order-1' : 'md:order-2'}`}>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{section.title}</h2>
                            {section.description.map((paragraph, pIndex) => (
                                <p key={pIndex} className="text-gray-600 mb-4 leading-relaxed">{paragraph}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CV3;
