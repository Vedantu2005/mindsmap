import React from 'react';

// Data for the alternating sections
const cxBenefits = [
    {
        title: "Delve Into the Needs of Customers",
        description: "Implementing AI allows you to extract massive amounts of data from multiple sources. With the help of comprehensive data, you will be able to better understand the behavior of your customers and offer them the most relevant goods and services.",
        image: 'improve-cx-1.svg', // Top-right image
        align: 'left',
    },
    {
        title: "Personalization",
        description: "AI helps you enhance data-driven opportunities and multiply the uses of data to revamp your existing practices. With AI, you can go one step further in creating unique and personalized experiences for every single customer based on user historical data and behavior.",
        image: 'improve-cx-2.svg', // Mid-left image
        align: 'right',
    },
    {
        title: "Smart Interactions With Customers",
        description: "With the aid of an AI-led solution, not a single customer interaction or conversation will happen in isolation. You can turn collected data on interactions into rich datasets to work with across multiple databases. Data-based advice on improvement actions will help you push your business forward.",
        image: 'improve-cx-3.svg', // Mid-right image
        align: 'left',
    },
    {
        title: "Increasingly Efficient Human Interactions",
        description: "Good customer experience requires investing a lot of effort. You need to shift the focus from routine and repetitive tasks to meaningful and unique operations. By adopting AI technology, you enable long-lasting, customer-centered cooperation, which is more, need-focused, and fruitful.",
        image: 'improve-cx-4.svg', // Bottom-left image (Handshake)
        align: 'right',
    },
];

// Component for a single alternating feature item
const FeatureItem = ({ title, description, image, align }) => {
    // Determine the order for desktop layout
    const isImageLeft = align === 'right';
    const contentOrder = isImageLeft ? 'lg:order-2' : 'lg:order-1';
    const imageOrder = isImageLeft ? 'lg:order-1' : 'lg:order-2';
    const textAlignment = isImageLeft ? 'lg:text-right' : 'lg:text-left';

    return (
        <div className="flex flex-col lg:flex-row items-center lg:items-start py-8 lg:py-12 gap-4 lg:gap-10 border-b border-gray-100 last:border-b-0">
            {/* Text Content (Left on desktop for odd items, Right for even items) */}
            <div className={`w-full lg:w-1/2 ${contentOrder} ${textAlignment}`}>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900">
                    {title}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                    {description}
                </p>
            </div>

            {/* Image (Right on desktop for odd items, Left for even items) */}
            {/* Reduced justify-center padding on desktop by changing the gap */}
            <div className={`w-full lg:w-1/2 flex justify-center ${isImageLeft ? 'lg:justify-center' : 'lg:justify-center'} ${imageOrder}`}>
                <img
                    src={`/${image}`}
                    alt={title}
                    className="max-w-[250px] w-full h-auto opacity-90 object-contain"
                    onError={(e) => { 
                        e.target.onerror = null; 
                        e.target.src = 'https://placehold.co/250x200/e0f2ff/60a5fa?text=AI+Graphic'; 
                    }}
                />
            </div>
        </div>
    );
};

const WhyCEC = () => {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white text-gray-800 font-sans antialiased">
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-12 sm:mb-16 max-w-2xl mx-auto">
                Why Implement Artificial Intelligence to Improve CX?
            </h2>

            <div className="max-w-6xl mx-auto divide-y divide-gray-200">
                {cxBenefits.map((item, index) => (
                    <FeatureItem
                        key={index}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        align={item.align}
                    />
                ))}
            </div>
        </section>
    );
};

export default WhyCEC;
