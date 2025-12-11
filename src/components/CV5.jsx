import React from 'react';

const ServicesIcon = ({ src, alt }) => (
    <div className=" p-4  inline-block mb-4">
        <img src={src} alt={alt} className="w-20 h-20" />
    </div>
);


const CV5 = () => {

    const services = [
        {
            icon: '/icon-data-analysis-2.svg',
            title: 'Validating Data',
            description: 'We check and analyze the data provided. And if needed, clean, and relabel it.'
        },
        {
            icon: '/icon-design-optimization.svg',
            title: 'Design and Optimization',
            description: 'According to the client’s requirements, we can design and optimize the solution for the specific platforms and devices.'
        },
        {
            icon: '/icon-engine-mobile-app.svg',
            title: 'Developing an App',
            description: 'We develop solid computer vision-powered applications catered to your business’ specifics and needs.'
        },
        {
            icon: '/icon-engine-integration.svg',
            title: 'System Integration',
            description: 'We help integrate our solution into the client’s infrastructure and offer post production support.'
        }
    ];

    const tools = {
        'Deep Learning': [
            { name: 'TensorFlow', logo: '/technologies-tensorflow.webp' },
            { name: 'Keras', logo: '/technologies-keras.webp' }
        ],
        'Computer Vision': [
            { name: 'OpenCV', logo: '/technologies-opencv.webp' },
            { name: 'PCL', logo: '/technologies-pcl.webp' }
        ],
        'Software Development': [
            { name: 'C++', logo: '/technologies-cplusplus.webp' },
            { name: 'Python', logo: '/technologies-python.webp' }
        ]
    };


    return (
        <div className="bg-white text-gray-800 py-12 md:py-10 -mt-5">
            <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Services Section */}
                <div className="text-center mb-16 md:mb-10">
                    <h2 className="text-3xl md:text-3xl font-bold text-gray-900">
                        Computer Vision Software Development Services
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-8 rounded-lg border border-[#77bce8] shadow-lg transition-shadow duration-300 hover:shadow-blue-200 text-center">
                            <ServicesIcon src={service.icon} alt={`${service.title} icon`} />
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>

                {/* Tools Section */}
                <div className="mt-20 md:mt-18">
                     <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-3xl font-bold text-gray-900">
                            Computer Vision Development Tools
                        </h2>
                        <p className="mt-4 text-gray-600 max-w-4xl mx-auto">
                           We use the latest tools & technologies for computer vision development to help you overcome your challenges.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        {Object.entries(tools).map(([category, items]) => (
                            <div key={category}>
                                <h3 className="text-xl font-bold text-gray-800 mb-6">{category}</h3>
                                <div className="flex flex-col items-center gap-8">
                                    {items.map((tool) => (
                                        <img key={tool.name} src={tool.logo} alt={tool.name} className={`h-16 ${tool.name === 'PCL' ? 'w-22 object-contain' : 'w-auto'}`} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                     <p className="text-center text-gray-500 mt-16 max-w-3xl mx-auto">
                        Implementation of a custom-built solution will generate additional value, automate the workflow and facilitate difficult tasks.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CV5;
