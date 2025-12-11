import React, { useState, useEffect, useRef } from 'react';

// A custom component to handle the count-up animation
const CountUpNumber = ({ target, duration = 6000 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.1, // Start animation when 10% of the element is visible
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(ref.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isInView) return;

        let start = 0;
        const end = target;
        if (start === end) return;

        let startTime = null;

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const currentNum = Math.floor(progress * (end - start) + start);
            setCount(currentNum);
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isInView, target, duration]);

    return <span ref={ref}>{count}</span>;
};

const Beneficial = () => {
  const stats = [
    {
      percentage: 83,
      description: "of companies claim AI as a strategic business priority",
    },
    {
      percentage: 85,
      description: "of customer service interactions were responded to by chatbots",
    },
    {
      percentage: 40,
      description: "improved business efficiency with AI",
    },
  ];

  return (
    <div className="bg-white font-sans w-full  flex items-center justify-center py-10 px-4 relative overflow-hidden">
        {/* Dotted background pattern */}
        <div 
            className="absolute inset-0 z-0 bg-[radial-gradient(#fef08a_1px,transparent_1px)] [background-size:24px_24px] opacity-50"
        ></div>
        
        <div className="w-full max-w-6xl mx-auto text-center z-10">
            <h1 className="text-3xl md:text-3xl font-bold text-gray-800 mb-16">
                Beneficial Results of Artificial Intelligence in Business
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                    <div 
                        key={index} 
                        className="bg-white/80 backdrop-blur-sm border-2 border-sky-100 rounded-2xl p-8 shadow-xl shadow-sky-100/50 transition-all duration-300 hover:shadow-2xl hover:scale-105"
                    >
                        <div className="text-6xl font-bold text-sky-500 mb-4">
                            <CountUpNumber target={stat.percentage} />%
                        </div>
                        <div className="w-16 h-1 bg-cyan-400 mx-auto mb-4 rounded"></div>
                        <p className="text-slate-600 text-lg">
                            {stat.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Beneficial;
