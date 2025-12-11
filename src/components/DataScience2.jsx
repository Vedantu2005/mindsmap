import React from 'react';

// Data for the alternating sections. 
// Note: Sections alternate between image-right (isImageRight: true) and image-left (isImageRight: false) layouts.
const casesData = [
    {
        title: "AI Language Models",
        content: "Stay at the edge of innovation with our custom language models based on the robust combination of AI and NLP. Automate customer service with human-like interaction, tap into the minds of customers, and reduce your admin burden with artificial intelligence.",
        points: [
            "Smart solutions based on GPT",
            "Sentiment analysis",
            "Natural language generation",
            "Document processing",
        ],
        image: "dss-ai-language-models.webp",
        isImageRight: true,
    },
    {
        title: "Customer Analytics and Personalization",
        content: "Our data science developers combine analytics and AI to create custom models that help you size up your customers and markets—and operate accordingly. Adapt to your changing behaviors in real time and drive value from interactions.",
        points: [
            "Unified analytics for omnichannel",
            "Customer behavior analytics and predictions",
            "Customer segmentation",
            "Advanced analytics for CRM",
        ],
        image: "dss-customer-analytics-and-personalization.webp",
        isImageRight: false,
    },
    {
        title: "Predictive Analytics",
        content: "Identify future trends, bring clarity to resource allocation, and increase production capacity by spotting emerging issues. Leverage our data analytics services to build custom predictive analytics models that move your company up the ladder.",
        points: [
            "Demand forecasting",
            "Risk calculation",
            "Fraud detection",
            "Predictive maintenance",
        ],
        image: "dss-predictive-analytics.webp",
        isImageRight: true,
    },
    {
        title: "Recommendation Systems",
        content: "Connect with your customers on a deep level, make smarter sales decisions, and put the focus on the right products or services. Enrich your CX with a tailored recommendation system built by our certified software developers.",
        points: [
            "Collaborative filtering",
            "Content-based filtering",
            "Hybrid recommendation systems",
            "Integration with existing software",
        ],
        image: "dss-recommendation-systems.webp",
        isImageRight: false,
    },
    {
        title: "Embedded Operational Intelligence",
        content: "Benefit from our professional services to get a better handle on real-time data and reduce your time-to-insight. Record and deliver performance analytics in a split second and act on dynamic insights instead of historical ones.",
        points: [
            "Real-time analysis",
            "Analysis of imagery and video",
            "IoT input analysis",
            "Stream processing systems and Big data platforms",
        ],
        image: "dss-embedded-operational-intelligence.webp",
        isImageRight: true,
    },
    {
        title: "Optical Character Recognition",
        content: "Simplify data entry, facilitate document classification, and streamline the back-end of your business. Our data science development services include OCR solution development for multiple business cases and formats.",
        points: [
            "Unstructured OCR scanning",
            "Structured data capture",
            "Optical barcode recognition",
            "Character recognition on raw images.",
        ],
        image: "dss-optical-character-recognition.webp",
        isImageRight: false,
    },
];


// Component for a single case study block (alternating layout)
const CaseStudyBlock = ({ data }) => {
    const { title, content, points, image, isImageRight } = data;

    // Determine the order of image and content based on isImageRight prop
    const imageElement = (
        <div 
            className={`w-full md:w-1/2 p-6 md:p-0 flex ${isImageRight ? 'md:justify-end' : 'md:justify-start'} relative order-1 md:order-none`}
        >
            {/* Image Wrapper: This handles the positioning of the image and the background element */}
            <div className="relative w-full max-w-lg lg:max-w-xl h-72 sm:h-96">
                
                {/* The blue-ish background element / shadow */}
                <div 
                    className={`absolute w-full h-full bg-blue-100 rounded-2xl`}
                    style={{ 
                        // Positioning to act as a background offset
                        top: '10px', 
                        left: isImageRight ? '20px' : '-20px', 
                        transform: 'rotate(-2deg)', 
                        opacity: 0.8,
                        borderRadius: '20px',
                    }}
                ></div>

                {/* The image container, positioned on top */}
                <div 
                    className="relative w-full h-full rounded-2xl overflow-hidden z-10"
                    style={{
                        borderRadius: '20px', // Matches the desired image radius
                        boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1), 0px 4px 15px rgba(0, 0, 0, 0.05)', // Custom shadow
                    }}
                >
                    <img
                        src={`/${image}`}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );

    const contentElement = (
        <div className={`w-full md:w-1/2 p-4 md:p-8 flex flex-col justify-center order-2 md:order-none ${isImageRight ? 'md:pr-16 lg:pr-24' : 'md:pl-16 lg:pl-24'}`}>
            <h3 className="text-3xl font-semibold text-gray-900 mb-4">{title}</h3>
            <p className="text-base text-gray-600 mb-6 leading-relaxed">{content}</p>
            
            <ul className="space-y-3">
                {points.map((point, i) => (
                    <li key={i} className="flex items-start text-gray-700 text-sm">
                        <svg className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <circle cx="10" cy="10" r="2.5" />
                        </svg>
                        {point}
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <div className="flex flex-col md:flex-row items-center my-16 md:my-20">
            {isImageRight ? (
                <>
                    {contentElement}
                    {imageElement}
                </>
            ) : (
                <>
                    {imageElement}
                    {contentElement}
                </>
            )}
        </div>
    );
};


const DataScienceCases = () => {
    return (
        <div className="w-full font-['Inter'] bg-white py-16">
            <header className="text-center max-w-4xl mx-auto px-4 mb-16">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    Delivering Data Science Solutions Across Business Cases
                </h1>
                <p className="text-lg text-gray-600">
                    Our data science company equips you with the right tools to solve business challenges of any complexity.
                </p>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {casesData.map((data, index) => (
                    <CaseStudyBlock key={index} data={data} />
                ))}
            </div>
        </div>
    );
};

export default DataScienceCases;
