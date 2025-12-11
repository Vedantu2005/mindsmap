import React from 'react';

const CV4 = () => {
    const contentData = [
        {
            title: 'Provide Better Experiences with Our Pose Estimation Model',
            description: [
                'Human pose estimation is one of the most burning issues in today’s computer vision community.',
                'Our team is ready to aid you with a pose estimation model that can be implemented into your app or any other 3rd party tool. It’s aimed to predict, identify, and track the presence and location of a person and their movement to help you provide better services.'
            ],
            list: {
                title: 'This functionality will empower:',
                items: [
                    'Crowd counting and tracking systems',
                    'AR experiences (ex. AI-powered coaches)',
                    'Gaming and entertainment',
                    'Robotics'
                ]
            },
            image: '/deepl-image-pose-esimation-girl.webp',
            imagePosition: 'right'
        },
        {
            title: 'Automate Manual and Repetitive Tasks with OCR & Data Capturing',
            description: [
                'Businesses deal with big data on a daily basis, and the volume is growing exponentially. Services such as data capture, retrieval, and extraction have become integral parts of organizations’ workflows.',
                'We deliver high-end computer vision solutions to find, capture, and extract data automatically from unstructured documents and cut down on manual operations.',
                'Contact us to discuss your would-be solution!',
            ],
            image: '/deepl-image-task-automation.webp',
            imagePosition: 'left'
        },
        {
            title: 'Use Product Matching and Provide Accurate Recommendations with Image Similarity Search',
            description: [
                'Image similarity search allows customers to quickly find similar products based on visual attributes such as color, shape, texture, etc., across the web. This technology is becoming increasingly important in the era of big data that businesses exploit for growth.',
                'We will help you implement the product-matching and recommendation technology to tackle massive amounts of unstructured data more efficiently, increase ROI, prevent cost overruns, and add value to your work.'
            ],
            image: '/deepl-image-similarity-search.webp',
            imagePosition: 'right'
        },
        {
            title: 'Create Unique Content with Generative Adversarial Network (GAN)',
            description: [
                'Animation, entertainment and other visual content creation industries can benefit from GAN to generate creative interpretations of data. It can change sketches into realistic scenes, synthesize characters or scenes similar to the original ones, autocorrect artifacts in drawings, simulate and animate body physics, and generate 3D objects from pictures.'
            ],
            list: {
                title: 'GAN is used for images to:',
                items: [
                    'Enhance – restore quality, correct the color and lighting, upsample or remove background.',
                    'Stylize – change the way the image is painted, borrowing from visual artists and styles.',
                    'Transform – make your users look younger or older, or maybe even zombies or athletes.',
                    'Generate – build your own portfolio of concept arts, designs or even imagined humans.',
                    'Visualize – paint a realistic (or not really) picture from the textual description.',
                    'Edit – vary poses, clothing and facial features such as smiles, eyes, noses or hair.'
                ]
            },
            image: '/deepl-image-gan.webp',
            imagePosition: 'left'
        },
        {
            title: 'Boost Brand Visibility with Logo Detection & Brand Monitoring Solution',
            description: [
                'Object detection algorithms facilitate specifying object presence and location in an image, based on the set of categories used to train a custom algorithm.',
                'We assist organizations and individuals by delivering machine learning-based logo detection systems. Our solutions help automate real-time recognition of brand logos in an image or in broadcast video streams and show accurate brand visibility analytics.'
            ],
            image: '/deepl-image-brand-monitoring.webp',
            imagePosition: 'right'
        },
        {
            title: 'Harness Big Data with Object Segmentation in 3D Point Clouds',
            description: [
                'Point clouds are used in 3D modeling to generate accurate models of real-world items or scenes. This technology is in high demand for computer graphics, VR, and communication.',
                'Our computer vision developers and infrastructure architects will help you generate immersive 3D models of the physical world easily and with great speed.'
            ],
            image: '/deepl-image-real-time.webp',
            imagePosition: 'left'
        }
    ];

    return (
        <div className="bg-white text-gray-800 py-12 md:py-10">
            <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {contentData.map((section, index) => (
                    <div 
                        key={index} 
                        className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 ${index < contentData.length - 1 ? 'mb-16 md:mb-24' : ''}`}
                    >
                        {/* Image Section */}
                        <div className={`w-full md:w-1/2 ${section.imagePosition === 'right' ? 'md:order-2' : 'md:order-1'}`}>
                            <div className="bg-white p-3 md:p-4 rounded-lg shadow-2xl border border-gray-100">
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
                            {section.list && (
                                <div className="mt-4">
                                    <h3 className="font-semibold text-gray-700 mb-2">{section.list.title}</h3>
                                    <ul className="space-y-2">
                                        {section.list.items.map((item, itemIndex) => (
                                            <li key={itemIndex} className="flex items-start">
                                                <span className="flex-shrink-0 w-2 h-2 bg-[#77bce8] rounded-full mt-2 mr-3"></span>
                                                <span className="text-gray-600">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
                 <div className="text-center mt-16 md:mt-12">
                    <button className="bg-white text-black font-semibold py-3 cursor-pointer px-8 border-2 border-[#77bce8] rounded-lg hover:bg-[#77bce8] hover:text-white transition-colors duration-300 shadow-md">
                        Let's Talk
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CV4;
