import React from 'react'

// Define the data for the four service blocks
const servicesData = [
    {
        title: 'Real-Time Sentiment Monitoring',
        description:
            'Achieve an end-to-end view into your consumer preferences with our dynamic emotion tracking solutions. Detect consumer mood changes, prevent churn, and be the leader of proactive customer service.',
        listItems: [
            'Emotion AI model development',
            'Social media listening tools',
            'Smart customer service solutions',
            'ChatGPT conversational solutions',
        ],
        imageName: 'Screenshot 2025-10-02 223151.png', // Placeholder file name
        alignment: 'right', // Image on the right, text on the left
    },
    {
        title: 'Intent Classification',
        description:
            'Know exactly what your customers are up to with our user intent analytics solutions. Track and classify queries, comments, emails, and other data to reduce the time and costs of customer service.',
        listItems: [
            'Custom intent classifier development',
            'Sales and marketing campaign analysis',
            'Conversational AI applications',
        ],
        imageName: 'Screenshot 2025-10-02 223209.png', // Placeholder file name
        alignment: 'left', // Image on the left, text on the right
    },
    {
        title: 'Text Mining and Information Extraction',
        description:
            'Gain knowledge from unstructured content with and extract valuable information from all kinds of data. Make the most out of your emails, scripts, documents, and conversations - with less effort and quicker turnarounds.',
        listItems: [
            'Voice of the customer solutions',
            'Document analytics (CMS, RPA, ERP, and others)',
            'Text analytics for call centers',
        ],
        imageName: 'Screenshot 2025-10-02 223220.png', // Placeholder file name
        alignment: 'right', // Image on the right, text on the left
    },
    {
        title: 'Full-Cycle NLP Software Development',
        description:
            'Transform your business requirements into full-fledged smart solutions based on Natural Language Processing. Uncover insights buried in your data and transform opportunities into great products.',
        listItems: [
            'Topic modeling solutions',
            'Text categorization',
            'User feedback analysis',
        ],
        imageName: 'Screenshot 2025-10-02 223229.png', // Placeholder file name
        alignment: 'left', // Image on the left, text on the right
    },
];

// Reusable component for a single service block - NOW WITH RESPONSIVE CHANGES
const ServiceBlock = ({ service }) => {
    const { title, description, listItems, imageName, alignment } = service;
    const isImageRight = alignment === 'right';

    return (
        // The main container uses a single-column grid for mobile and a two-column grid for desktop.
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* --- TEXT CONTAINER --- */}
            {/* This div holds all the text content. On desktop, its order changes based on `alignment`. */}
            <div className={`p-4 md:p-6 lg:p-8 ${isImageRight ? 'md:order-1' : 'md:order-2'}`}>
                {/* 1. Title */}
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{title}</h3>
                
                {/* 2. Image (MOBILE ONLY) */}
                {/* This image is shown only on mobile screens (hidden on medium screens and up). */}
                <div className="my-4 md:hidden">
                    <img
                        src={imageName}
                        alt={title}
                        className="w-full max-w-lg h-auto object-contain "
                    />
                </div>
                
                {/* 3. Description and List */}
                <div>
                    <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
                    <ul className="space-y-2">
                        {listItems.map((item, i) => (
                            <li key={i} className="flex items-start text-sm text-gray-700">
                                <span className="w-2 h-2 mr-3 mt-1.5 bg-[#77bce8] rounded-full flex-shrink-0"></span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={`hidden md:flex items-center justify-center p-4 md:p-6 lg:p-8 ${isImageRight ? 'md:order-2' : 'md:order-1'}`}>
                <img
                    src={imageName}
                    alt={title}
                    className="w-full max-w-lg h-auto object-contain "
                />
            </div>
        </div>
    );
};

const Senti3 = () => {
    return (
        <section className="py-10 bg-white text-gray-800">
            <div className="max-w-6xl mx-auto px-4"> {/* Added horizontal padding for mobile */}
                {/* Header Section */}
                <div className="text-center mb-12"> {/* Increased margin-bottom */}
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 tracking-wide">
                        Our Services
                    </h1>
                    <p className="mt-2 text-md text-gray-600 max-w-3xl mx-auto">
                        Our company offers a full range of <span className="text-[#77bce8] cursor-pointer font-medium">NLP based services</span> to address the unique needs of your data.
                    </p>    
                </div>

                {/* Services Blocks */}
                <div className="space-y-6 md:space-y-2"> {/* Increased spacing between blocks */}
                    {servicesData.map((service) => (
                        <ServiceBlock key={service.title} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Senti3;