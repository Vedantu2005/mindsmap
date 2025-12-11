import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

// Custom hook for counting animation
const useCountUp = (end, duration = 2) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    let start = 0;
                    const endValue = parseInt(end);
                    if (start === endValue) return;

                    let totalDuration = duration * 1000;
                    let startTimestamp = null;
                    
                    const step = (timestamp) => {
                        if (!startTimestamp) startTimestamp = timestamp;
                        const progress = Math.min((timestamp - startTimestamp) / totalDuration, 1);
                        setCount(Math.floor(progress * (endValue - start) + start));
                        if (progress < 1) {
                            window.requestAnimationFrame(step);
                        }
                    };
                    window.requestAnimationFrame(step);
                    observer.unobserve(ref.current);
                }
            },
            {
                threshold: 0.5,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [end, duration]);

    return [count, ref];
};

const StatCard = ({ number, title, subtitle, items, linkText, linkHref }) => {
    const [count, ref] = useCountUp(number);

    return(
        <div 
          ref={ref} 
          className="bg-white p-2 border border-gray-200/90 rounded-xl h-full flex flex-col justify-center items-center text-center"
        >
            <h3 className="text-lg font-bold text-gray-800">{title}</h3>

            <div className="text-6xl font-bold text-[#00B4D8] mb-4">{count}+</div>
            <p className="text-gray-500 text-sm mb-4">{subtitle}</p>
            <div className="flex-grow">
                {title === 'Key Industries' ? (
                    // Custom layout for the 3rd card
                    <div>
                        <a href="#" className="block text-black-100 hover:underline font-small text-sm mb-1">
                            Data
                        </a>
                        <div className="font-small text-sm mb-1 text-black-100">
                            <a href="#" className="hover:underline">AI</a>,{' '}
                            <a href="#" className="hover:underline">Devops etc.</a>
                        </div>
                        {/* <a href="#" className="block text-black-100 hover:underline font-small text-sm mb-1">
                            Fintech
                        </a> */}
                    </div>
                ) : (
                    // Default layout for other cards
                    items && items.map((item, index) => (
                        <span key={index} className="block text-black-100 font-small text-sm mb-1">
                            {item}
                        </span>
                    ))
                )}
            </div>
            {linkText && (
                <a href={linkHref} className="text-sm font-semibold text-[#00B4D8] hover:text-cyan-600 mt-4 inline-flex items-center group">
                    {linkText}
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
            )}
        </div>
    );
}


const About1 = () => {

    const stats = [
        {
            number: 30,
            title: 'Employees',
            subtitle: 'We Are',
            items: ['Data Scientists, Engineers,', 'Architects, Analysts,', 'Designers'],
        },
        {
            number: 20,
            title: 'Projects Delivered',
            subtitle: 'Clients Geography',
            items: ['USA, UK, GCC'],
        },
        {
            number: 5,
            title: 'Key Industries',
            subtitle: 'Industry Focus',
            items: ['Data, AI, Devops'],
        },
        {
            number: 2,
            title: 'Locations',
            subtitle: 'Our Offices',
            items: ['Dubai, India'],
            linkText: 'Contact Us',
            linkHref: '/contact'
        }
    ];

 return (
    <div className="bg-white font-sans">
        {/* Hero Section */}
        <div className="relative bg-cover bg-center text-white py-50 px-4 sm:px-6 lg:px-8" style={{backgroundImage: "url('/about.jpg')"}}>
            <div className="absolute inset-0 bg-blue-900/80"></div>
            <div className="relative max-w-3xl mx-auto text-center z-10">
                <h1 className="text-4xl lg:text-5xl font-extrabold">
                    About Mindsmap AI
                </h1>
                <p className="mt-6 text-xl text-slate-200">
                    We are a Technology driven, Business focused Data & AI company delivering tangible results with agility & adaptability.
                </p>
            </div>
        </div>
        
        {/* Stats Section */}
        <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mt-10 relative z-20 pb-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map(stat => (
                        <StatCard key={stat.title} {...stat} />
                    ))}
                </div>
            </div>
        </div>

    </div>
  );
};

export default About1;