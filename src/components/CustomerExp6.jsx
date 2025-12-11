import React from 'react';

// Data for the numbered benefit cards
const benefits = [
    {
        number: 1,
        text: "We are a cross-functional team of 40+ experts in data science and machine learning ready to assist with the specific needs of your business.",
    },
    {
        number: 2,
        text: "We always strive to find the most suitable, innovative, and cutting-edge technologies tailored to meet your business needs.",
    },
    {
        number: 3,
        text: "Our team maintains a collaborative and communicative approach throughout the cooperation with every client.",
    },
    {
        number: 4,
        text: "Mindsmap AI has over 6 years of proven experience in CX automation.",
    },
    {
        number: 5,
        text: "We work with inspiration and create solutions based on a thought-out strategy and carefully selected data.",
    },
    {
        number: 6,
        text: "We have certified, agile experts in our midst.",
    },
];

// Component for a single benefit card
const BenefitCard = ({ number, text }) => {
    return (
        <div className="relative flex items-center p-6 sm:p-8 bg-white rounded-xl h-full shadow-lg border border-transparent 
                        hover:border-blue-300 transition-all duration-300">
            
            {/* Large Number Background (Size increased slightly on mobile for clarity) */}
            <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20
                            flex items-center justify-center text-6xl sm:text-7xl font-extrabold text-blue-100 z-0">
                {number}
            </div>

            {/* Text Content (Margin adjusted for larger number on mobile) */}
            <p className="ml-12 sm:ml-16 text-sm sm:text-base leading-relaxed text-gray-700 relative z-10">
                {text}
            </p>
        </div>
    );
};


const CECNeeds = () => {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 font-sans antialiased">
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-gray-800">
                Why You Need MindsMap AI for Customer Experience Consulting
            </h2>

            <div className="max-w-4xl mx-auto">
                {/* Grid Layout: Stacks on mobile (grid-cols-1) and goes to 2 columns on medium screens (md:grid-cols-2). 
                    Vertical gap (gap-y-6) handles spacing when stacked. */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-x-10">
                    {benefits.map((benefit) => (
                        <BenefitCard
                            key={benefit.number}
                            number={benefit.number}
                            text={benefit.text}
                        />
                    ))}
                </div>

                {/* Contact Us Button */}
                <div className="mt-12 text-center">
                    <button className="px-8 py-3 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 
                                       hover:border-blue-400 hover:text-blue-600 transition-colors duration-200 
                                       rounded-md shadow-sm text-base font-medium">
                        Contact Us
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CECNeeds;
