import React from 'react';

// Placeholder for the ai-two-people graphic. If this is a complex JSX component,
// you would import it directly. For this example, I'll assume it's an SVG.
// If you have a specific ai-two-people.jsx file with its own content,
// you would replace this with the actual import and usage.
const AiTwoPeopleGraphic = () => (
    <img
        src="/ai-two-people.svg" // Assuming it's an SVG that you place in /public
        alt="AI customer experience consultants"
        className="max-w-full h-auto"
        // Updated fallback to use a reliable external placeholder image and log the error
        onError={(e) => {
            console.error("Failed to load /ai-two-people.svg. Check file path and existence.");
            e.target.onerror = null;
            e.target.src = 'https://placehold.co/400x250/3b82f6/ffffff?text=AI+Graphic+Missing';
        }}
    />
);

const CECGlobalState = () => {
    // Utility to handle image errors and log to the console
    const handleImageError = (e, filename) => {
        console.warn(`Could not load decorative SVG: /${filename}. Using fallback.`);
        e.target.onerror = null;
        e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100%" height="100%" fill="%23f3f4f6"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="12" fill="%239ca3af">DECO</text></svg>';
    };

    return (
        <div className="bg-white text-gray-800 font-sans antialiased">
            {/* Section 1: MindsMap AI Introduction - Constrained max-width to 4xl for a tighter (~70%) look */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <p className="text-center text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                    MindsMap AI, a customer experience consulting company, harnesses the power of AI and machine learning
                    technologies with a view to implement a cutting-edge approach to ensure an exceptional customer experience.
                </p>
            </section>

            {/* Section 2: AI & Machine Learning with Graphic - Constrained max-width to 4xl for a tighter (~70%) look */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto flex flex-col lg:flex-row items-center lg:justify-between gap-12">
                {/* Left Content */}
                <div className="lg:w-1/2 text-left pr-0 lg:pr-12 order-2 lg:order-1">
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                        We ease the adoption and use of <strong className="font-semibold">predictive analytics, text/sentiment analysis, and AI & machine learning models</strong> for customer analytics.
                        We offer AI consulting services and custom solutions that aid our
                        clients in gaining knowledge of the needs and behavior of their
                        prospects and loyal users. With a five-star custom-made solution at
                        their disposal, our clients turn customer experience into their main
                        advantage over the competitors.
                    </p>
                </div>

                {/* Right Image */}
                <div className="lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2">
                    {/* Assuming ai-two-people.jsx is a graphic you want to render */}
                    <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl">
                        <AiTwoPeopleGraphic />
                    </div>
                </div>
            </section>

            {/* Section 3: Global State of CX & Statistics */}
            {/* Constrained max-width to 4xl for a tighter (~70%) look */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto bg-white">
                <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-12">
                    Global State of CX
                </h2>

                <div className="relative flex flex-col items-center">
                    {/* Background SVGs - Now hidden on mobile (hidden) and displayed on medium screens and up (md:block) */}
                    <img
                        src="/vs-1.svg"
                        alt="Decoration"
                        className="absolute top-0 right-0 w-24 h-auto md:w-40 lg:w-48 md:top-[-1rem] md:right-[-1rem] opacity-70 z-0 hidden md:block"
                        onError={(e) => handleImageError(e, 'vs-1.svg')}
                    />
                    <img
                        src="/vs-3.svg"
                        alt="Decoration"
                        className="absolute bottom-10 left-0 w-24 h-auto md:w-40 lg:w-48 md:left-[-1rem] opacity-70 z-0 hidden md:block"
                        onError={(e) => handleImageError(e, 'vs-3.svg')}
                    />
                    <img
                        src="/vs-4.svg"
                        alt="Decoration"
                        className="absolute bottom-0 right-0 w-24 h-auto md:w-40 lg:w-48 md:bottom-[-1rem] md:right-[-1rem] opacity-70 z-0 hidden md:block"
                        onError={(e) => handleImageError(e, 'vs-4.svg')}
                    />


                    {/* Reduced size of boxes container (max-w-xl) and ensured Z-index priority (z-10) */}
                    <div className="space-y-4 max-w-xl w-full relative z-10">
                        {/* Card 1 - Reduced padding (p-4) and vertical spacing (space-y-4) */}
                        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                            <p className="text-base sm:text-lg">
                                By 2035, AI technologies are projected to increase business
                                productivity by up to 40%.
                            </p>
                            <a href="#" className="text-blue-600 hover:underline text-sm sm:text-base mt-2 block">
                                Accenture
                            </a>
                        </div>

                        {/* Card 2 - Reduced padding (p-4) */}
                        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                            <p className="text-base sm:text-lg">
                                By 2030, 69% of decisions made during customer engagement will be
                                completed by smart machines.
                            </p>
                            <a href="#" className="text-blue-600 hover:underline text-sm sm:text-base mt-2 block">
                                Business Review
                            </a>
                        </div>

                        {/* Card 3 - Reduced padding (p-4) */}
                        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                            <p className="text-base sm:text-lg">
                                United States businesses are losing $75 billion per year through poor
                                customer service.
                            </p>
                            <a href="#" className="text-blue-600 hover:underline text-sm sm:text-base mt-2 block">
                                NewVoiceMedia
                            </a>
                        </div>
                    </div>

                    {/* Request a Free Quote Button */}
                    <button className="mt-12 px-8 py-3 bg-white border border-blue-500 text-blue-600 hover:bg-blue-50 transition-colors duration-200 rounded-md shadow-sm text-base sm:text-lg font-medium">
                        Request a Free Quote
                    </button>
                </div>
            </section>
        </div>
    );
};

export default CECGlobalState;
