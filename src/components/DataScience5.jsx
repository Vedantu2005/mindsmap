import React from 'react';

// Data for the three feature cards
const features = [
    {
        icon: "icon-medal.svg",
        title: "Strong Expertise",
        description: "Since 2018, we’ve been delivering complex data-based solutions to solve different business challenges."
    },
    {
        icon: "icon-cup.svg",
        title: "Top Data Service Provider",
        description: "Our company is ranked in the top 1% of software solution partners according to industry ratings."
    },
    {
        icon: "icon-three-man-2-alt.svg",
        title: "Diverse Expertise",
        description: "We handle the entire process of software development as an autonomous, dedicated team."
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
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/placeholder-icon.svg";
                }}
            />
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
        
        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed max-w-xs">{description}</p>
    </div>
);

// Main Component
const WhyDataScience = () => {
    // Custom style to generate the background pattern based on the provided image
    const backgroundStyle = {
        backgroundColor: '#002B49', // Dark blue background color
        backgroundImage: `
            /* Gradient overlay for subtle light variation */
            linear-gradient(to right, rgba(0, 43, 73, 0.5) 0%, rgba(0, 43, 73, 0.1) 50%, rgba(0, 43, 73, 0.5) 100%),
            /* SVG pattern for the network of dots and lines */
            url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 100 0 L 0 0 0 100' fill='none' stroke='%23004C7A' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3Ccircle cx='50' cy='50' r='2' fill='%2303A9F4'/%3E%3Ccircle cx='150' cy='50' r='2' fill='%2303A9F4'/%3E%3Ccircle cx='50' cy='150' r='2' fill='%2303A9F4'/%3E%3Ccircle cx='150' cy='150' r='2' fill='%2303A9F4'/%3E%3Cline x1='50' y1='50' x2='150' y2='50' stroke='%23004C7A' stroke-width='0.5'/%3E%3Cline x1='50' y1='50' x2='50' y2='150' stroke='%23004C7A' stroke-width='0.5'/%3E%3Cline x1='150' y1='50' x2='150' y2='150' stroke='%23004C7A' stroke-width='0.5'/%3E%3Cline x1='50' y1='150' x2='150' y2='150' stroke='%23004C7A' stroke-width='0.5'/%3E%3Cline x1='50' y1='50' x2='150' y2='150' stroke='%23004C7A' stroke-width='0.5'/%3E%3Cline x1='150' y1='50' x2='50' y2='150' stroke='%23004C7A' stroke-width='0.5'/%3E%3C/svg%3E")
        `,
        backgroundSize: '200px 200px, cover', // Tile the SVG pattern
        backgroundBlendMode: 'overlay', // Blend the gradient with the pattern
    };

    return (
        <div className="w-full font-['Inter'] bg-white pb-20">

            {/* --- CSS for Logo Animation (Kept for completeness) --- */}
            <style>
                {`
                    @keyframes scroll {
                        from { transform: translateX(0); }
                        to { transform: translateX(-50%); }
                    }
                `}
            </style>

            
            {/* Top Section (Features) */}
            <div className="max-w-6xl mx-auto px-4 pt-6 pb-2 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    Why Mindsmap AI?
                </h2>
                <p className="text-base text-gray-600 max-w-4xl mx-auto mb-12">
                    We partner with global clients on targeted projects through to end-to-end transformations.
                </p>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-10">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>

            {/* Bottom Call to Action Card (Dark Blue Section with new Background) */}
                <section className="bg-white flex justify-center font-sans py-10 ">
                  <div className="w-[85%]">
                    <div 
                      className="rounded-2xl p-10 md:p-10 text-center text-white relative overflow-hidden"
                      style={{ 
                        backgroundImage: "url('/banner.webp')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    >
                      <div className="relative">
                        <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight drop-shadow-md">
                          Explore the potential of Generative AI for your industry

                        </h2>
                        <p className="mt-4 text-lg text-slate-200 max-w-2xl mx-auto">
                          Achieve breakthrough innovation in your industry by implementing custom intelligent technologies. 
                        </p>
                        <a 
                          href="/contact" 
                          className="mt-8 inline-block bg-cyan-500 text-white font-bold py-3 px-10 rounded-full hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                          Contact us
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
            
        </div>
    );
};

export default WhyDataScience;
