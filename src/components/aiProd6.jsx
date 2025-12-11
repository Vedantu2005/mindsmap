import React, { useState } from 'react';

// --- Reusable Testimonial Card Component ---
// This component displays a single testimonial and applies the active style.
const TestimonialCard = ({ name, title, quote, avatarSrc, isActive }) => {
  // Define the styling for the active card
  const activeClasses = 'shadow-2xl border-2 border-opacity-70 border-[#00BFFF] transform scale-100 opacity-100 z-10';
  // Define the styling for the inactive cards (faded and slightly scaled)
  const inactiveClasses = 'opacity-50 blur-sm pointer-events-none transform scale-[0.95] z-0';

  return (
    <div 
      className={`
        relative flex flex-col p-8 sm:p-10 rounded-xl bg-white h-full max-w-lg mx-4
        transition-all duration-500 ease-in-out
        ${isActive ? activeClasses : inactiveClasses}
        
        // Custom border/glow effect for the active card using a box shadow or outline mimic
        ${isActive ? '[box-shadow:0_0_50px_rgba(0,191,255,0.2),_0_0_20px_rgba(0,191,255,0.1)]' : ''}
      `}
    >
      
      {/* Profile Section */}
      <div className="flex items-center mb-6">
        <img 
          src={avatarSrc} 
          alt={`${name}'s avatar`} 
          className="w-14 h-14 rounded-full mr-4 object-cover" 
        />
        <div>
          <h3 className="text-lg font-bold text-[#333333]">{name}</h3>
          <p className="text-sm text-[#666666]">{title}</p>
          {/* Stars/Rating Placeholder */}
          <div className="text-yellow-500 text-sm">★★★★★</div>
        </div>
      </div>
      
      {/* Quote Text */}
      <p className="text-base text-[#444444] leading-relaxed flex-grow">
        {quote}
      </p>

      {/* Large Quote Mark Icon (Bottom Right) */}
      <div 
        className="absolute bottom-4 right-6 text-7xl font-extrabold text-[#00BFFF] opacity-10 
                  select-none pointer-events-none"
      >
        &rdquo;
      </div>
    </div>
  );
};

// --- Navigation Arrow Component ---
const CarouselArrow = ({ direction, onClick }) => {
  // SVG for the chevron icon (left or right)
  const ChevronIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor" 
      className="w-6 h-6"
    >
      {direction === 'left' ? (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      )}
    </svg>
  );

  return (
    <button
      onClick={onClick}
      className={`
        absolute top-1/2 -translate-y-1/2 p-3 rounded-full text-[#00BFFF] bg-white border border-gray-200
        opacity-80 hover:opacity-100 transition duration-300 ease-in-out
        shadow-md hover:shadow-lg
        ${direction === 'left' ? 'left-4 md:left-12' : 'right-4 md:right-12'}
        z-20 // Ensures arrow is clickable
      `}
      aria-label={direction === 'left' ? 'Previous Testimonial' : 'Next Testimonial'}
    >
      <ChevronIcon />
    </button>
  );
};


// --- Main Testimonial Section Component ---
const ClientTestimonials = () => {
  // Dummy data for testimonials
  const testimonials = [
    // The active testimonial shown in the image
    { 
      id: 1, 
      name: 'Vishal Gurbuxani', 
      title: 'Co-Founder & CTO, Captiv8', 
      avatarSrc: '/main-vishal-gurbuxani.webp', // Placeholder path
      quote: "Without Mindsmap AI we wouldn't have gotten all the exclusive data from social media that we offer to our customers today. With no doubt, I highly recommend Mindsmap AI for any big data related projects." 
    },
    // Previous slide (content partially visible on left)
    { 
      id: 2, 
      name: 'Eliza Fanning', 
      title: 'CEO, E-Corp', 
      avatarSrc: '/avatars/eliza-fanning.png', // Placeholder path
      quote: 'More importantly, increased quality did an excellent job. They helped us achieve unprecedented growth in half the time we expected.' 
    },
    // Next slide (content partially visible on right)
    { 
      id: 3, 
      name: 'John Smith', 
      title: 'Head of Data, TechCo', 
      avatarSrc: '/avatars/john-smith.png', // Placeholder path
      quote: 'Mindsmap AI completely transformed our internal processes. The improvements resulted in a 30% increase in customer engagement within the first quarter.' 
    },
    // Add more for the pagination to work
    { id: 4, name: 'Client 4', title: 'Title 4', avatarSrc: '/avatars/client4.png', quote: 'A fourth excellent review.' },
    { id: 5, name: 'Client 5', title: 'Title 5', avatarSrc: '/avatars/client5.png', quote: 'A fifth excellent review.' },
    { id: 6, name: 'Client 6', title: 'Title 6', avatarSrc: '/avatars/client6.png', quote: 'A sixth excellent review.' },
  ];

  // State for tracking the active slide index
  const [activeIndex, setActiveIndex] = useState(0); 

  // Functions to handle navigation
  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const goToPrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Function to get the indices of the slides to be displayed
  const getSlideIndices = () => {
    const length = testimonials.length;
    const prevIndex = (activeIndex - 1 + length) % length;
    const nextIndex = (activeIndex + 1) % length;
    return [prevIndex, activeIndex, nextIndex];
  };
  
  const [prevIndex, activeSlideIndex, nextIndex] = getSlideIndices();


  return (
    <div className="font-sans py-16 sm:py-24 bg-white">
      
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center mb-16 text-[#333333]">
        Let Our Clients Do the Talking
      </h2>
      
      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <div className="flex justify-center items-center">
          
          {/* Map and display only the visible slides */}
          {[prevIndex, activeSlideIndex, nextIndex].map((index, position) => {
            const testimonial = testimonials[index];
            return (
              // The following classes position the cards side-by-side
              <div 
                key={testimonial.id}
                className="w-[85%] sm:w-1/3 flex-shrink-0" // Controls card width for 3-column view
              >
                <TestimonialCard 
                  {...testimonial} 
                  isActive={index === activeIndex}
                />
              </div>
            );
          })}
        </div>
        
        {/* Navigation Arrows */}
        <CarouselArrow direction="left" onClick={goToPrev} />
        <CarouselArrow direction="right" onClick={goToNext} />
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-12 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`
              w-3 h-3 rounded-full transition-all duration-300
              ${index === activeIndex ? 'bg-[#00BFFF] w-4' : 'bg-gray-200 hover:bg-gray-300'}
            `}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientTestimonials;