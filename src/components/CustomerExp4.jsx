import React from 'react';

// Data structure for the industry boxes. The 'graphic' field holds the filename for the faint background image.
const industries = [
    { name: 'E-COMMERCE', graphic: 'icon-energy.svg' },
    { name: 'FINANCE', graphic: 'icon-finance-2.svg' },
    { name: 'LOGISTICS', graphic: 'icon-logistics-3.svg' },
    { name: 'RETAIL', graphic: 'icon-retail-4.svg' },
    { name: 'ENTERTAINMENT', graphic: 'icon-entertainment-2.svg' },
    { name: 'HEALTHCARE', graphic: 'icon-beauty.svg' },
];

// --- New List of Decorative Corner Icons (Assuming these are available in assets) ---
const cornerIcons = [
    'icon-star.svg',    // Used for index 0, 2, 4 (Right Corner)
    'icon-cloud.svg',   // Used for index 1, 3, 5 (Left Corner)
];

// --- Component to render the Background Graphics from public ---

const IndustryBackgroundGraphic = ({ src, index }) => {
    // Alternate sides: even index → right, odd index → left
    const isRight = index % 2 === 0;

    // Base size and position
    const sizeClass = "w-[80px] h-[100px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px]";
    const offset = "-translate-x-1/2";

    const positionStyle = isRight
        ? { right: 0, top: 0, transform: `translate(20%, -20%)` }
        : { left: 0, bottom: 0, transform: `translate(-10%, 10%)` };

    return (
        <div className="absolute z-0 pointer-events-none" style={positionStyle}>
            <img
                src={`/${src}`}
                alt="Industry background graphic"
                className={`${sizeClass} opacity-60 object-contain`}
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://placehold.co/200x200/e0f2ff/60a5fa?text=SVG+Fail`;
                    e.target.className = `${sizeClass} opacity-50 object-contain`;
                }}
            />
        </div>
    );
};





const IndustryBox = ({ name, graphicName, index }) => {
    // Determine position: right corner for even index (0, 2, 4...) and left corner for odd index (1, 3, 5...)
    const positionClass = (index % 2 === 0) ? 'right-3' : 'left-3';

    return (
        <div className="relative w-full h-[120px] sm:h-[150px] p-4 flex items-center justify-center bg-white 
                    border-2 border-blue-200 rounded-lg overflow-hidden 
                    shadow-lg hover:shadow-xl transition-shadow duration-300">
            
            {/* Background Graphic Element (Faint outline) */}
            <IndustryBackgroundGraphic src={graphicName} />



            {/* Industry Text */}
            <p className="relative z-10 text-xl sm:text-2xl md:text-3xl font-extrabold text-blue-200 tracking-wide select-none">
                {name}
            </p>
        </div>
    );
};

const IndustriesSection = () => {
    return (
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white text-gray-800 font-sans antialiased">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                    Industries
                </h2>
                <p className="text-base sm:text-lg leading-relaxed mb-12">
                    The Mindsmap AI team is ready to design, implement, and integrate custom AI systems. We offer transformative
                    power that adds value to our clients' businesses and helps improve customer experience across a range of
                    industries.
                </p>
            </div>

            {/* Grid Layout (2x3 on desktop, 1x6 or 2x3 on mobile for responsiveness) */}
            <div className="max-w-4xl mx-auto">
                {/* Desktop: 2 columns | Mobile: 1 column, stacking vertically */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-y-4 gap-x-8">
                    {industries.map((industry, index) => (
                        <IndustryBox
                            key={index}
                            name={industry.name}
                            graphicName={industry.graphic}
                            index={index} // Pass the index to determine corner position
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustriesSection;
