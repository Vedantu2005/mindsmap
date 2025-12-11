import React, { useState, useEffect } from 'react';

const caseStudies = [
    {
        title: 'Smart Client Service Solution',
        description:
            'Our client, a US FMCG company, needed a smart solution to mine actionable insights from emails and audio using NLP. The Mindsnap AI team set up a data analysis pipeline for sentiment analysis that became a central tool for the customer strategy of our client.',
        imageName: 'ai-cooking-assistant.webp',
        details: 'View Details >',
    },
    {
        title: 'Automated Customer Feedback Analysis',
        description:
            'Our team was hired by an international game publisher to build a cost-effective feedback analytics tool. Our engineers delivered a custom, NLP-powered solution that reduced the costs and time of analysis and minimized the bias in the decision-making process.',
        imageName: 'game-dev.webp',
        details: 'View Details >',
    },
    {
        title: 'Emotion Intelligence Monitoring',
        description:
            'The project was delivered for a large US e-commerce platform that strived to improve the quality of its customer experience with automated sentiment analytics. Our team has implemented an ML-powered emotion analysis software that identifies the tone in customer reviews.',
        imageName: 'customer-review-analytics-solution-case.webp',
        details: 'View Details >',
    },
    {
        title: 'Smart Cooking Assistant',
        description:
            'Our team provided project rescue services to our client to improve the existing product and fix the speech recognition functionality. We addressed all client’s concerns and delivered a revamped version of an AI cooking software with hands-free control and other smart add-ons.',
        imageName: 'game-dev.webp',
        details: 'View Details >',
    },
    {
        title: 'Brand Reputation Tracker',
        description:
            'Developed a solution for a major clothing retailer to track real-time public sentiment on social media platforms, providing immediate alerts for negative spikes and allowing proactive damage control.',
        imageName: 'ai-cooking-assistant.webp',
        details: 'View Details >',
    },
];

const CaseStudyCard = ({ study }) => (
    <div className="flex flex-col border border-blue-200 shadow-lg transition-shadow duration-300 hover:shadow-blue-300 rounded-xl bg-white h-full">
        <div className="relative h-48 overflow-hidden rounded-t-xl">
            <img
                src={study.imageName}
                alt={study.title}
                className="w-full h-full object-cover"
            />
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-lg font-bold text-gray-800 mb-3">{study.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-grow">{study.description}</p>
            <a href="#" className="text-sm font-medium text-blue-500 hover:text-blue-700 transition duration-150">
                {study.details}
            </a>
        </div>
    </div>
);

// Custom hook to detect screen size and return the current breakpoint
const useBreakpoint = () => {
    const [breakpoint, setBreakpoint] = useState('lg');
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) setBreakpoint('sm');
            else if (window.innerWidth < 1024) setBreakpoint('md');
            else setBreakpoint('lg');
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return breakpoint;
};


const Senti4 = () => {
    const breakpoint = useBreakpoint();
    const [startIndex, setStartIndex] = useState(0);

    // Dynamically set the number of cards to show based on the breakpoint
    const cardsPerView = { sm: 1, md: 2, lg: 3 }[breakpoint] || 3;

    // Reset the slider to the beginning if the number of cards per view changes
    useEffect(() => {
        setStartIndex(0);
    }, [cardsPerView]);

    const totalItems = caseStudies.length;
    const lastIndex = Math.max(0, totalItems - cardsPerView);

    const visibleCards = caseStudies.slice(startIndex, startIndex + cardsPerView);

    const handleNext = () => {
        setStartIndex((prev) => Math.min(prev + 1, lastIndex));
    };

    const handlePrev = () => {
        setStartIndex((prev) => Math.max(prev - 1, 0));
    };

    const isPrevDisabled = startIndex === 0;
    const isNextDisabled = startIndex >= lastIndex;

    const arrowClasses = "absolute top-1/2 -translate-y-1/2 p-2 rounded-full border border-gray-300 bg-white shadow-md text-gray-700 cursor-pointer transition-all duration-300 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed";

    return (
        <section className="py-12 sm:py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 tracking-tight mb-12">
                    Sentiment Analysis Use Cases
                </h1>

                <div className="relative max-w-5xl mx-auto">
                    {/* The grid layout is already responsive, and now the slider logic matches it */}
                    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-transform duration-300`}>
                        {visibleCards.map((study, index) => (
                            <CaseStudyCard key={`${startIndex}-${index}`} study={study} />
                        ))}
                    </div>

                    {/* Previous Arrow - with responsive positioning */}
                    <button
                        onClick={handlePrev}
                        disabled={isPrevDisabled}
                        className={`${arrowClasses} left-2 md:-left-4 z-10`}
                        aria-label="Previous Case Study"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                    </button>

                    {/* Next Arrow - with responsive positioning */}
                    <button
                        onClick={handleNext}
                        disabled={isNextDisabled}
                        className={`${arrowClasses} right-2 md:-right-4 z-10`}
                        aria-label="Next Case Study"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                </div>

                <div className="mt-12">
                    <button className="px-8 py-2.5 text-black cursor-pointer font-medium border border-[#77bce8] rounded-lg hover:text-white hover:bg-[#77bce8] transition duration-300">
                        View All Case Studies
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Senti4;