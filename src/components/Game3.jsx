import React, { useState } from 'react';

// --- Data for the 4 Carousel Cards ---
const cardsData = [
  {
    title: 'Predictive Analytics: Product Price Optimisation',
    description: 'Optimise your prices to set optimal prices for your customers and keep your profit margins. Implement AI-led price optimisation to free up your team from monotonous work and switch to high-level customer-focused decision making.',
    image: '/market2.webp'
  },
  {
    title: 'Demand Forecasting: Stock Management',
    description: 'Accurately predict future product demand to optimize inventory levels, reduce carrying costs, and prevent stockouts. Ensure you have the right products available at the right time to meet customer needs.',
    image: '/market3.webp'
  },
  {
    title: 'Customer Churn Prediction: Retention Strategy',
    description: 'Identify customers who are at a high risk of leaving. Proactively engage them with targeted retention campaigns and personalized offers to improve loyalty and reduce revenue loss from customer churn.',
    image: '/market4.webp'
  },
  {
    title: 'Lifetime Value Analysis: High-Value Customers',
    description: 'Calculate the total revenue a customer is expected to generate over their entire relationship with your business. Focus your marketing efforts on acquiring and retaining your most profitable customer segments.',
    image: '/market5.webp'
  }
];

const Game3 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev === cardsData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? cardsData.length - 1 : prev - 1));
  };
  
  return (
    <div className="bg-white font-sans py-8 md:py-10 mt-5 lg:mt-0">
      <div className="container mx-auto max-w-6xl relative px-4">
        
        {/* --- HEADING FOR MOBILE --- */}
        {/* This heading is visible only on mobile and updates with the current slide */}
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center md:hidden">
          {cardsData[currentSlide].title}
        </h3>

        {/* Carousel container */}
        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform ease-out duration-700"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {/* Map through the data to create each card */}
            {cardsData.map((card, index) => (
              <div key={index} className="w-full flex-shrink-0 px-2">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
                  
                  {/* Text Content - Reordered for mobile */}
                  <div className="w-full md:w-5/12 text-center md:text-left order-2 md:order-1">
                    <h3 className="hidden md:block text-3xl font-bold text-gray-800 mb-4">{card.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{card.description}</p>
                  </div>

                  {/* Image Content - Reordered for mobile */}
                  <div className="w-full md:w-6/12 flex items-center justify-center p-4 order-1 md:order-2">
                    <div className="relative w-full max-w-sm">
                      {/* Decorative background shape */}
                      <div className="absolute top-4 -right-4 w-full h-full bg-blue-100 rounded-xl"></div>
                      
                      {/* The actual square image */}
                      <img
                        src={card.image}
                        alt={card.title}
                        className="relative w-full aspect-square object-cover rounded-xl shadow-lg"
                      />
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Navigation Arrows - Repositioned for mobile */}
          <button 
            onClick={prevSlide} 
            className="absolute top-1/2 left-0 transform -translate-y-1/2 text-gray-500 hover:text-gray-800 transition p-2 z-10 md:-left-12"
            aria-label="Previous Slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button 
            onClick={nextSlide} 
            className="absolute top-1/2 -right-1 transform -translate-y-1/2 text-gray-500 hover:text-gray-800 transition p-2 z-10 md:right-10"
            aria-label="Next Slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>

      </div>
    </div>
  );
};

export default Game3;
