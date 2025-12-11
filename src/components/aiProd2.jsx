// AIServicesPage.jsx

import React from 'react';

// Data for the AI Solutions Grid
const aiSolutionsData = [
    {
        image: '/ai-va-and-chatbots.webp', // Replace with your image path
        title: 'AI Virtual Assistants and Chatbots',
    },
    {
        image: '/gpt-integration.webp', // Replace with your image path
        title: 'GPT Integration',
    },
    {
        image: '/advanced-data-analytics-and-visualization.webp', // Replace with your image path
        title: 'Advanced Data Analytics and Visualization',
    },
    {
        image: '/gpt-integration.webp', // Replace with your image path
        title: 'Recommendation Systems',
    },
    {
        image: '/customer-sentiment-analysis.webp', // Replace with your image path
        title: 'Customer Sentiment Analysis',
    },
    {
        image: '/recommendation-systems.webp', // Replace with your image path
        title: 'Predictive Analytics',
    },
];

const AIServicesPage = () => {
  return (
    <div className="bg-white font-sans">
      <main className="container mx-auto">
        
        {/* Section 3: Main CTA Banner (from image_ef6061.jpg) */}
        <section>
            <div className="flex justify-center items-center p-4 "> {/* Outer padding and centering */}
            <div
                className="relative overflow-hidden rounded-lg shadow-xl p-8 md:p-12 lg:p-16 text-center w-full max-w-6xl mx-auto"
                style={{
                    backgroundImage: 'url(/netbanner.webp)', // Adjust path if needed
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="relative z-10"> {/* Wrap content in relative div to ensure it's above background img */}

                    <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
                        Are you in search of a trusted partner for AI product development?
                    </h2>
                    <p className="text-white text-base md:text-lg mb-8 max-w-2xl mx-auto ">
                        Let's get into your requirements and turn a concept into a reality created according to your business needs.
                    </p>
                    <button
                        className="bg-[#00B4D8] hover:bg-[#00B4D8] text-white font-bold py-3 px-10 rounded-md transition duration-300 ease-in-out shadow-lg"
                    >
                        Contact us
                    </button>
                </div>
            </div>
        </div>
        </section>

        {/* Section 4: AI Solutions Grid (from image_ef6061.jpg) */}
        <section className="px-4 py-12">
            <h2 className="text-center text-3xl font-bold text-gray-800 mb-12">
                AI Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {aiSolutionsData.map((solution, index) => (
                    <div 
                        key={index} 
                        className="group border border-gray-100 rounded-lg overflow-hidden shadow-md 
                                   hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                    >
                        {/* Image Container with Hover Zoom */}
                        <div className="overflow-hidden h-48">
                            <img 
                                src={solution.image} 
                                alt={solution.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                            />
                        </div>
                        {/* Title Box */}
                        <div className="p-4 bg-white">
                            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                                {solution.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>

      </main>
    </div>
  );
};

export default AIServicesPage;