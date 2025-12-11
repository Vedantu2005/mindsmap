import React from 'react';

const services = [
    "Churn Prediction and Customer Retention With AI",
    "Behavior-Based Audience Segmentation",
    "Recommendation Systems",
    "Customer Targeting and Advertising Optimization",
    "Customer Service and Customer Journey Analysis",
    "Predictive Personalization",
    "Customer Engagement Solutions Development",
    "Customer Review Analytics of Products/Services",
];

const CECServices = () => {
    // Array of objects for precise positioning and content for desktop
    // Positions are now set for text to be placed near the central image.
    const desktopServicePositions = [
        {   // 0. Churn Prediction (Top-Center)
            className: "top-[70px] left-1/2 -translate-x-1/2 text-center", // Text Position
        },
        {   // 1. Behavior-Based Audience Segmentation (Top-Left) - Adjusted left from 100 to 130
            className: "top-[150px] left-[130px] text-right", // Text Position
        },
        {   // 2. Recommendation Systems (Mid-Left-Top) - Adjusted top from 320 to 300, left from 40 to 80
            className: "top-[300px] left-[80px] text-right", // Text Position
        },
        {   // 3. Customer Targeting and Advertising Optimization (Mid-Left-Bottom) - Adjusted bottom from 170 to 150
            className: "bottom-[150px] left-[130px] text-right", // Text Position
        },
        {   // 4. Customer Service and Customer Journey Analysis (Bottom-Center)
            className: "bottom-[70px] left-1/2 -translate-x-1/2 text-center", // Text Position
        },
        {   // 5. Predictive Personalization (Bottom-Right) - Adjusted bottom from 170 to 150
            className: "bottom-[150px] right-[130px] text-left", // Text Position
        },
        {   // 6. Customer Engagement Solutions Development (Mid-Right-Bottom) - Adjusted top from 320 to 300, right from 40 to 80
            className: "top-[300px] right-[80px] text-left", // Text Position
        },
        {   // 7. Customer Review Analytics of Products/Services (Mid-Right-Top) - Adjusted right from 100 to 130
            className: "top-[150px] right-[130px] text-left", // Text Position
        },
    ];

    return (
        <section className="py-0 px-4 sm:px-6 lg:px-8 bg-white text-gray-800 font-sans antialiased">
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-12 sm:mb-16 md:mb-20 max-w-2xl mx-auto">
                Our AI-Driven Customer Experience Consulting Services
            </h2>

            {/* Desktop Layout (Radial/Orbital) - Hidden on mobile, visible on large screens */}
            {/* Height is maintained at h-[600px] to ensure the absolute positioning works */}
            <div className="hidden lg:block relative w-full max-w-5xl xl:max-w-6xl mx-auto h-[600px] flex items-center justify-center">

                {/* Service Items positioned around the central image */}
                {services.map((service, index) => {
                    const pos = desktopServicePositions[index];

                    // Base styles for positioning the text and translating it relative to the container
                    const textStyle = {
                        // Extracting 'top', 'bottom', 'left', 'right' values from className string
                        top: pos.className.includes('top-[') ? pos.className.match(/top-\[(\d+)px\]/)[1] + 'px' : undefined,
                        bottom: pos.className.includes('bottom-[') ? pos.className.match(/bottom-\[(\d+)px\]/)[1] + 'px' : undefined,
                        left: pos.className.includes('left-1/2') ? '50%' : pos.className.match(/left-\[(\d+)px\]/)?.[1] + 'px',
                        right: pos.className.match(/right-\[(\d+)px\]/)?.[1] + 'px',
                        transform: pos.className.includes('-translate-x-1/2') ? 'translateX(-50%)' : '',
                    };

                    return (
                        <React.Fragment key={index}>
                            {/* Service Text */}
                            <div
                                // Reduced width from w-[180px] to w-[150px] for tighter horizontal spacing
                                className={`absolute text-sm font-medium leading-tight w-[150px] z-10 ${pos.className.includes('text-right') ? 'text-right' : pos.className.includes('text-left') ? 'text-left' : 'text-center'}`}
                                style={textStyle}
                            >
                                {service}
                            </div>
                        </React.Fragment>
                    );
                })}

                {/* Central Data Stack Image - Rendered last to ensure it's on top of any overlapping text */}
                <img
                    src="/orange-data-bg.svg"
                    alt="Data Stack Background"
                    className="absolute w-[600px] h-[600px] object-contain z-20  ml-70" // Central image
                />
            </div>

            {/* Mobile Layout (Linear Timeline) - Visible on mobile, hidden on large screens */}
            <div className="lg:hidden max-w-md mx-auto relative pl-6">
                {/* Vertical Line for Timeline */}
                <div className="absolute left-[26px] top-0 bottom-0 w-0.5 bg-orange-300"></div>

                {services.map((service, index) => (
                    <div key={index} className="relative mb-6 last:mb-0">
                        {/* Orange Dot */}
                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                            <div className="w-2.5 h-2.5 bg-white rounded-full"></div> {/* Inner white dot for visual depth */}
                        </div>
                        {/* Service Text */}
                        <p className="ml-8 text-base font-medium leading-relaxed">
                            {service}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CECServices;
