import React from 'react';
import { useState, useEffect, useCallback } from 'react';

const Testimonial = () => {
    // Kept the updated testimonials array with unique entries
    const testimonials = [
        {
            name: 'Pavel Nurminskiy',
            title: 'Head of Machine Learning at Creative Research, Wargaming',
            quote: "If you want to have a stable and efficient product, I recommend working with Mindsmap AI. They created an anti-fraud solution for our company, implemented and improved algorithms, and collaborated to deliver a working product. Mindsmap AI' work helped us save a significant percentage of our marketing budget. Clients can expect a partner who excels at delivering products.",
            avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80',
        },
        {
            name: 'Ivan Akulovich',
            title: 'Project Manager of Business Development Department, AsstrA',
            quote: "The competitiveness of Mindsmap AI in the field of data science impressed us. More importantly, we learned many things from them. Mindsmap AI built a new freight rates prediction software for our company. The increased quality of the data results we received dramatically improved our metrics. Mindsmap AI did an excellent job and became our trusted data science partner.",
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80',
        },
        {
            name: 'Vishal Gurbuxani',
            title: 'Co-Founder & CTO, Captiv8',
            quote: "Without Mindsmap AI we wouldn’t have gotten all the exclusive data from social media that we offer to our customers today. With no doubt, I highly recommend Mindsmap AI for any big data related projects.",
            avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80',
        },
        {
            name: 'Elena Rodriguez',
            title: 'Chief Innovation Officer, HealthForward',
            quote: "Mindsmap AI's predictive analytics model has been a game-changer for our patient outcome predictions. Their team is professional, brilliant, and deeply committed to our success. The ROI was evident within the first quarter.",
            avatar: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80',
        },
        {
            name: 'Kenji Tanaka',
            title: 'Lead Supply Chain Analyst, Nexus Logistics',
            quote: "The route optimization algorithms developed by Mindsmap AI reduced our fuel costs by 18%. Their ability to translate complex data into actionable insights is unparalleled. They are a true partner in innovation.",
            avatar: 'https://images.unsplash.com/photo-1590086782792-42dd2350160d?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80',
        },
        {
            name: 'Aisha Mohammed',
            title: 'E-commerce Director, UrbanBloom',
            quote: "Their custom recommendation engine increased our average order value by over 25%. Mindsmap AI delivered a seamless integration that felt like an extension of our own team. We couldn't be happier with the results.",
            avatar: 'https://images.unsplash.com/photo-1542596768-5d1d6bf68458?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80',
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = useCallback(() => {
        const isLastSlide = currentIndex === testimonials.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }, [currentIndex, testimonials.length]);

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    // Kept the auto-play functionality
    useEffect(() => {
        const intervalId = setInterval(goToNext, 5000);
        return () => clearInterval(intervalId);
    }, [goToNext]);

    return (
        <div className="bg-white font-sans w-full py-10 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center overflow-hidden">
            <div className="w-full max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-3xl font-bold text-gray-800 mb-16">
                    Let Our Clients Do the Talking
                </h2>

                <div className="relative w-full flex items-center justify-center">
                    {/* Left Arrow - Restored your original style */}
                    <button
                        onClick={goToPrevious}
                        className="absolute left-0 md:left-30 z-20 p-4 cursor-pointer group"
                        aria-label="Previous testimonial"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="44"
                            height="44"
                            viewBox="0 0 24 24"
                            fill="none"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="stroke-sky-500 group-hover:stroke-sky-700 transition-colors duration-300"
                        >
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                    </button>

                    <div className="w-full relative flex items-center justify-center min-h-[520px] md:min-h-[380px]">
                        {testimonials.map((testimonial, index) => {
                            // Restored your original positioning logic
                            const offset = index - currentIndex;
                            const isLeft = offset === -1 || (currentIndex === 0 && index === testimonials.length - 1);
                            const isRight = offset === 1 || (currentIndex === testimonials.length - 1 && index === 0);
                            const isCenter = offset === 0;

                            let classes = 'absolute top-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out';
                            
                            // Restored your original responsive classes
                            if (isCenter) {
                                classes += ' left-1/2 -translate-x-1/2 scale-100 opacity-100 z-10';
                            } else if (isRight) {
                                classes += ' left-full -translate-x-full md:-translate-x-[20%] opacity-0 md:opacity-40 scale-75 z-0';
                            } else if (isLeft) {
                                classes += ' right-full translate-x-full md:translate-x-[20%] opacity-0 md:opacity-40 scale-75 z-0';
                            } else {
                                classes += ' opacity-0 scale-50';
                            }

                            return (
                                <div key={index} className={`${classes} w-[90%] md:w-3/4 lg:w-[60%]`}>
                                    <div className="bg-white border-2 border-sky-200/80 rounded-3xl p-8 md:p-12 mx-auto relative shadow-xl shadow-sky-100/70">
                                        <div className="flex items-start gap-6 mb-6">
                                            <img
                                                src={testimonial.avatar}
                                                alt={testimonial.name}
                                                className="w-20 h-20 rounded-full object-cover border-2 border-sky-200"
                                                onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/80x80/e0f2fe/38bdf8?text=${testimonial.name.charAt(0)}`; }}
                                            />
                                            <div className='flex m-5'>
                                                {/* <h3 className="text-xl font-bold text-gray-800 text-left">{testimonial.name}</h3> */}
                                                <p className="text-slate-500  text-left">{testimonial.title}</p>
                                            </div>
                                        </div>
                                        <p className="text-slate-600 text-left text-lg leading-relaxed">
                                            {testimonial.quote}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right Arrow - Restored your original style */}
                    <button
                        onClick={goToNext}
                        className="absolute right-0 md:right-30 z-20 p-4 cursor-pointer group"
                        aria-label="Next testimonial"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="44"
                            height="44"
                            viewBox="0 0 24 24"
                            fill="none"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="stroke-sky-500 group-hover:stroke-sky-700 transition-colors duration-300"
                        >
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </button>
                </div>

                {/* Dots */}
                <div className="flex justify-center mt-12 space-x-2">
                    {testimonials.map((_, slideIndex) => (
                        <button
                            key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}
                            className={`w-3 h-3 rounded-full transition-colors cursor-pointer duration-300 ${currentIndex === slideIndex ? 'bg-sky-500' : 'bg-sky-200 hover:bg-sky-300'}`}
                            aria-label={`Go to slide ${slideIndex + 1}`}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonial;