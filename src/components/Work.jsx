import React, { useState, useEffect, useRef } from 'react';

const Work = () => {
  const stats = [
    { number: 4, color: 'text-orange-500', label: 'Years of applied experience', description: 'in data science, AI consulting and development.' },
    { number: 30, color: 'text-cyan-500', label: 'Implemented projects', description: 'worldwide with key clients from: USA, UK, GCC.' },
    { number: 50, color: 'text-green-500', label: 'Qualified employees', description: "with master's deagrees in: Applied Math, System Analytics, Computer Science" },
  ];

  const StatCounter = ({ end, color }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        {
          threshold: 0.1,
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
    }, []);
  
    useEffect(() => {
      if (isVisible) {
        let start = 0;
        const duration = 900;
        const frameRate = 1000 / 60;
        const totalFrames = Math.round(duration / frameRate);
        const increment = end / totalFrames;
  
        const counter = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(counter);
          } else {
            setCount(Math.ceil(start));
          }
        }, frameRate);
  
        return () => clearInterval(counter);
      }
    }, [isVisible, end]);
  
    return (
      <p ref={ref} className={`text-6xl md:text-7xl font-bold ${color}`}>
        {count}+
      </p>
    );
  };

  return (
    <div className="bg-white font-sans w-full py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-3xl font-bold text-gray-800 mb-16">
          Why Work With Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <StatCounter end={stat.number} color={stat.color} />
              <p className="mt-4 text-slate-600 text-lg max-w-xs">
                <span className={`${stat.color} font-medium`}>{stat.label}</span> {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
