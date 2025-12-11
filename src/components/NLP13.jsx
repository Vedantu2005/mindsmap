import React, { useState } from 'react';

// --- Data for the Case Study Cards ---
const caseStudies = [
  {
    image: '/ml-nlp-models-marketing-advertising-2.webp',
    title: 'ML and NLP Models For Marketing & Advertising',
    description: 'The client is a beauty company. They have difficulty processing and interpreting large volumes of data. They wanted to use ML for automating data collection and insight gathering.',
    points: [
      'Automated data collection and analysis',
      'Customer behavior prediction',
      'Beauty influencer search',
      'Multi-language sentiment analysis',
    ],
    result: 'As a result of the collaboration, the client has got customized software for prompt data collection and analysis, customer behavior prediction, brand health tracking.',
  },
  {
    image: '/game-dev (1).webp',
    title: 'Helping a Leading Game Developer Automate Customer Feedback Analysis',
    description: 'The client is a famous game developer. They spend much time collecting and analyzing their fans\' feedback on game releases in socials.',
    points: [
        'Automated review collection and analysis',
        'Sentiment and topic analysis',
        'Real-time feedback dashboard',
        'Integration with social media APIs',
    ],
    result: 'As a result, our customer feedback analysis solution allowed the client to get rid of manual topic retrieval and comments and reviews classification.',
  },
  {
    image: '/ai-customer-analytics-solution (1).webp',
    title: 'AI Customer Analytics Solution',
    description: 'The client is US medium-sized FMCG company. They were looking for a natural language processing service provider to help with data collection and analysis.',
    points: [
      'Clean data for analysis',
      'Develop data architecture',
      'Build NLP models',
      'Implement text mining and insight extraction',
    ],
    result: 'As a result, we\'ve provided the client with a solution for data analysis pipeline for insights gleaning. The software enables fast and accurate email and audio data mining and analysis.',
  },
  {
    image: '/customer-review-analytics-solution-case (1).webp',
    title: 'AI-Powered Fraud Detection for Financial Services',
    description: 'A leading fintech firm needed to reduce fraudulent transactions and improve security without compromising user experience.',
    points: [
        'Real-time transaction monitoring',
        'Predictive modeling for risk scoring',
        'Anomaly detection in user behavior',
        'Regulatory compliance reporting',
    ],
    result: 'Our solution decreased fraudulent transactions by 40% in the first quarter, significantly boosting customer trust and reducing financial losses.',
  },
];

// --- Individual Card Component ---
const CaseStudyCard = ({ study }) => (
  <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden h-full">
    <img src={study.image} alt={study.title} className="w-full h-58 object-cover" />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-gray-800 mb-3">{study.title}</h3>
      <p className="text-gray-600 text-sm mb-4">{study.description}</p>
      <ul className="space-y-2 mb-4">
        {study.points.map((point, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-500 mr-2 mt-1">&#8226;</span>
            <span className="text-gray-700 text-sm">{point}</span>
          </li>
        ))}
      </ul>
      <p className="text-gray-600 text-sm mb-6 flex-grow">{study.result}</p>
      <a href="#" className="mt-auto text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors duration-300 group">
        View Details
        <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
      </a>
    </div>
  </div>
);

// --- Main Section Component ---
const NLP13 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showAll, setShowAll] = useState(false);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + caseStudies.length) % caseStudies.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % caseStudies.length);
    };
    
    // --- Data for Desktop Carousel ---
    const displayedCarouselStudies = [];
    for (let i = 0; i < 3; i++) {
        displayedCarouselStudies.push(caseStudies[(currentIndex + i) % caseStudies.length]);
    }

    // --- Data for Mobile Carousel ---
    const currentMobileStudy = caseStudies[currentIndex];
    
  return (
    <div className="py-10 sm:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {showAll ? (
            // --- View All Grid (Already responsive) ---
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {caseStudies.map((study) => (
                    <CaseStudyCard key={study.title} study={study} />
                ))}
            </div>
        ) : (
            <>
                {/* --- Desktop Carousel (hidden on mobile) --- */}
                <div className="hidden md:block relative">
                    <button 
                        onClick={handlePrev} 
                        className="absolute top-1/2 cursor-pointer -left-3 sm:-left-6 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200 transition-colors duration-300 z-10"
                        aria-label="Previous case studies"
                    >
                        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {displayedCarouselStudies.map((study, index) => (
                            <CaseStudyCard key={study.title + index} study={study} />
                        ))}
                    </div>
                    <button 
                        onClick={handleNext}
                        className="absolute top-1/2 cursor-pointer -right-3 sm:-right-6 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200 transition-colors duration-300 z-10"
                        aria-label="Next case studies"
                    >
                        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>
                
                {/* --- Mobile Carousel (visible only on mobile) --- */}
                <div className="md:hidden relative">
                    <button 
                        onClick={handlePrev} 
                        className="absolute top-1/2 cursor-pointer -left-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200 transition-colors duration-300 z-10"
                        aria-label="Previous case study"
                    >
                        <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                     <CaseStudyCard study={currentMobileStudy} />
                    <button 
                        onClick={handleNext}
                        className="absolute top-1/2 cursor-pointer -right-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200 transition-colors duration-300 z-10"
                        aria-label="Next case study"
                    >
                        <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>
            </>
        )}
        <div className="text-center mt-16">
            <button
                onClick={() => setShowAll(!showAll)}
                className="px-8 py-3 border border-[#77bce8] rounded-lg text-black font-semibold hover:bg-[#77bce8] hover:border-[#77bce8] hover:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#77bce8] transition-all duration-300"
            >
                {showAll ? 'Show Less' : 'View All Case Studies'}
            </button>
        </div>
      </div>
    </div>
  );
};

export default NLP13;

