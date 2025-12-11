import React from 'react';

// Data for the logo carousel
const logos = [
    "bdc1.svg",
    "bdc2.svg",
    "bdc3.svg",
    "bdc4.svg",
    "bdc5.svg",
    "bdc6.svg",
    "bdc7.svg",
    "bdc8.svg",
    "bdc9.svg",
    "bdc10.svg",
];

// Data for the three feature cards
const features = [
    {
        icon: "icon-medal.svg",
        title: "Strong Data Architecture Skills",
        description: "We offer modern data architecture consulting services and develop solutions to accelerate clients' digital transformation."
    },
    {
        icon: "icon-cup.svg",
        title: "Your Reliable Technology Provider",
        description: "Since 2018, we've been delivering reliable solutions, investing in customer relationships, and most importantly, building brand trust."
    },
    {
        icon: "icon-five-stars.svg",
        title: "Top Big Data Company According to Clutch",
        description: "Mindmap AI gets regularly featured among the key Big Data & AI market players on Clutch."
    },
];

// Component for a single feature card
const FeatureCard = ({ icon, title, description }) => (
    <div className="flex flex-col items-center text-center p-4">
        {/* Icon */}
        <div className="mb-4 w-20 h-20">
            <img 
                src={`/${icon}`} 
                alt={`${title} icon`} 
                className="w-full h-full object-contain"
            />
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
        
        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed max-w-xs">{description}</p>
    </div>
);

// Main Component
const WhyArchitecture = () => {
    return (
        <div className="w-full font-['Inter'] bg-white pb-20">

            {/* --- CSS for Logo Animation --- */}
            <style>
                {`
                    @keyframes scroll {
                        from { transform: translateX(0); }
                        to { transform: translateX(-50%); }
                    }
                `}
            </style>

            {/* --- Logo Carousel Section --- */}
            <section className="py-12 w-full max-w-6xl mx-auto px-4">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-8 text-center">
                    Trusted by Innovative Companies
                </h2>

                <div className="overflow-hidden w-full relative">
                    <div
                        className="flex gap-10 w-max"
                        style={{
                            animation: "scroll 25s linear infinite",
                        }}
                    >
                        {/* Duplicate logos for seamless infinite scroll effect */}
                        {logos.concat(logos).map((logo, index) => (
                            <img
                                key={index}
                                src={`/${logo}`}
                                alt={`logo-${index}`}
                                className="h-10 md:h-12 object-contain opacity-80 hover:opacity-100 transition flex-shrink-0"
                                style={{ width: '120px' }} // Give logos a fixed width to ensure predictable animation
                            />
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Top Section (Features) */}
            <div className="max-w-6xl mx-auto px-4 pt-16 pb-12 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    Why Hire Mindmap AI as a Modern Data Architecture Consultant?
                </h2>
                <p className="text-base text-gray-600 max-w-4xl mx-auto mb-12">
                    Mindmap AI' expertise spans the full spectrum of Big Data & data architecture from data strategy development and ecosystem implementation to analytics process optimization.
                </p>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-10">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>

            {/* Bottom Call to Action Card (Dark Blue Section) */}
            <div className="mt-16 mx-auto max-w-6xl bg-[#002B49] text-white p-8 sm:p-12 rounded-lg shadow-2xl relative overflow-hidden">
                
                {/* Background Shapes/Icons (simplified representation) */}
                <div className="absolute inset-0 opacity-10">
                    {/* Headset/Support Icon - Large, semi-transparent */}
                    <div className="absolute -left-10 bottom-0 text-7xl opacity-50">
                        {/* Placeholder for Headset SVG or similar large icon */}
                        <svg className="w-40 h-40 fill-current text-blue-300/50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-8h2v4h-2zm0-6h2v2h-2z" fill="#03A9F4" opacity="0.5"/>
                            <path d="M12 14h-1v-4h2v4h-1zM11 8h2V6h-2z" fill="#fff"/>
                        </svg>
                    </div>
                    {/* Chat Bubble Icon - Large, semi-transparent */}
                    <div className="absolute -right-10 top-5 text-7xl opacity-50">
                        {/* Placeholder for Chat Bubble SVG or similar large icon */}
                        <svg className="w-40 h-40 fill-current text-blue-300/50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" fill="#03A9F4" opacity="0.5"/>
                            <path d="M11 11H9V9h2v2zm3 0h-2V9h2v2zm3 0h-2V9h2v2z" fill="#fff"/>
                        </svg>
                    </div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#F4A800] mb-4">
                        Modern Data Architecture Consulting
                    </h3>
                    <p className="text-base sm:text-lg text-gray-200 max-w-3xl mx-auto mb-8">
                        Explore the benefits service-oriented data architecture holds for your business and let Mindmap AI implement it.
                    </p>
                    <button className="px-8 py-3 bg-[#03A9F4] text-white font-semibold rounded-md shadow-lg hover:bg-[#039BE5] transition duration-300">
                        Hire a consultant
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WhyArchitecture;

