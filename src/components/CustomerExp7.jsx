import React from 'react';

// Placeholder for the dotted line decorative element
const DottedLineGraphic = () => (
    <svg className="absolute top-0 right-0 w-20 h-20 opacity-50 text-yellow-500" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
        <pattern id="dotPattern" width="5" height="5" patternUnits="userSpaceOnUse">
            <circle cx="2.5" cy="2.5" r="1" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#dotPattern)" mask="url(#rectMask)" />
        <mask id="rectMask">
            <rect x="0" y="0" width="100" height="100" fill="white" />
        </mask>
    </svg>
);

// Placeholder for the large blue background shape (Simulates the soft gradient shape)
const BlueShapeGraphic = () => (
    <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[120%] h-full transform translate-x-1/4 -translate-y-1/2 
                        bg-blue-100/50 rounded-l-[50%] blur-3xl opacity-70">
        </div>
        {/* A second layer for better coloring */}
        <div className="absolute top-1/2 left-1/2 w-full h-[80%] transform translate-x-1/2 -translate-y-1/2 
                        bg-blue-200/50 rounded-l-[50%] opacity-50">
        </div>
    </div>
);

const CECPitch = () => {
    // UPDATED: Changed from placeholder URL to the actual asset path
    const imageUrl = "/tablet-with-graphic.webp"; 

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white font-sans antialiased">
            <div className="max-w-6xl mx-auto relative bg-white rounded-xl shadow-2xl p-6 sm:p-10 md:p-12 overflow-hidden">
                
                {/* Background Graphics */}
                <BlueShapeGraphic />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 md:gap-16">
                    
                    {/* Left Column: Text and Button */}
                    <div className="lg:pr-10">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 leading-tight">
                            Want to Enhance Your CX Services and Grow Your Business?
                        </h2>

                        <p className="text-base leading-relaxed text-gray-700 mb-4">
                            Exceptional CX is key to success and growth. Drop us a line if you want to enhance your CX services and gain a competitive edge.
                        </p>

                        <p className="text-base leading-relaxed text-gray-700 mb-8">
                            Our team will be happy to help you improve your business efficiency. Whether you need the aid of expert consultants, or want to enhance your customer experience management software, we are here to help!
                        </p>

                        <button className="px-6 py-3 bg-white border-2 border-blue-500 text-blue-600 hover:bg-blue-50 transition-colors duration-200 rounded-md shadow-sm text-base font-medium">
                            Let's Discuss Your Project
                        </button>
                    </div>

                    {/* Right Column: Image and Decorative Elements */}
                    <div className="relative w-full h-80 sm:h-96 lg:h-full min-h-[300px] flex items-center justify-center">
                        
                        {/* Dotted Line Graphic - Top Right Corner */}
                        <div className="absolute -top-10 right-0 w-24 h-24 hidden md:block">
                             {/* Small, positioned graphic for top right corner of image container */}
                            <div className="absolute top-0 right-0 w-20 h-20 opacity-50 transform rotate-180">
                                <DottedLineGraphic />
                            </div>
                        </div>

                        {/* Main Image */}
                        <img
                            src={imageUrl}
                            alt="Professional holding a tablet with business charts"
                            className="w-full h-full object-cover rounded-lg shadow-xl"
                            onError={(e) => { 
                                e.target.onerror = null; 
                                e.target.src = 'https://placehold.co/400x300/f0f4f8/000000?text=Business+Data+Chart'; 
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CECPitch;
