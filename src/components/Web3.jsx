import React from 'react'

const ExpertiseColumn = ({ iconSrc, title, description, linkText = null }) => (
    <div className="flex flex-col items-center text-center px-4">
        {/* The icon image */}
        <img
            src={iconSrc}
            alt={`${title} icon`}
            className="w-16 h-16 object-contain mb-4 text-blue-500" // Use text-blue-500 for color if using SVG/font icon
        />
        <h3 className="text-lg font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
            {description}
            {linkText && (
                <>
                    {' '}
                    <span className="text-blue-500 hover:text-blue-600 cursor-pointer">
                        {linkText}
                    </span>
                </>
            )}
        </p>
    </div>
);

const Web3 = () => {
  // Data for the 4 expertise columns
    const expertiseData = [
    {
        iconSrc: "/icon-implementing.svg",
        title: "Excellent Team",
        description: "Our talented IT specialists with broad experience in web development dive deep into your business needs and ideas to bring true value to your business through a comprehensive working solution.",
    },
    {
        iconSrc: "/icon-cup.svg",
        title: "Deep Expertise",
        description: "We have a proven record of projects that we have delivered to our customers from different business domains across the globe. So, you can be sure we put all our talent and experience to meet all your needs.",
    },
    {
        iconSrc: "/icon-five-stars.svg",
        title: "Modern Technologies",
        description: "We leverage Artificial Intelligence and Machine Learning to help you solve business problems, stay competitive and conquer your market share in a constantly changing business environment.",
    },
    
];

    return (
        <section className="bg-white py-10 -mt-12 px-4">
            <div className="max-w-6xl mx-auto">

                {/* Header Section */}
                <header className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">
                        Why Work with Mindsmap AI
                    </h2>
                    <p className="text-gray-600">
                       We help to transform your business with state of the art solutions.
                    </p>
                </header>

                {/* Expertise Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12 mb-20">
                    {expertiseData.map((data, index) => (
                        <ExpertiseColumn
                            key={index}
                            iconSrc={data.iconSrc}
                            title={data.title}
                            description={data.description + (data.suffix || '')} // Combine description and suffix
                            linkText={data.linkText}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Web3
