import React from 'react';

// Component for the bottom education level bar graph
const EducationBar = ({ segments, labels }) => (
     <div className="w-full">
        {/* Bar */}
        <div className="flex w-full h-16 rounded-md overflow-hidden shadow-inner bg-gray-200">
             {segments.map((segment, index) => (
                <div 
                    key={index} 
                    style={{ width: `${segment.percentage}%` }} 
                    className={`flex items-center justify-center text-white font-bold text-2xl ${segment.color} transition-all duration-500`}
                >
                    {segment.percentage}%
                </div>
            ))}
        </div>
        {/* Bottom Labels */}
        <div className="flex mt-2">
            {labels.map((label, index) => (
                 <div key={index} style={{ width: `${segments[index].percentage}%` }} className="text-center text-sm text-cyan-700 font-semibold px-2">
                    {label}
                </div>
            ))}
        </div>
     </div>
);


const About2 = () => {
    
    return (
        <div className="bg-white font-sans w-full py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-3xl font-bold text-gray-800 text-center mb-16">
                    Core Competencies and Educational Level
                </h2>

                <div className="">
                    <img src="/bar.png" alt="Core Competencies Chart" className="w-full h-auto" />
                </div>

            </div>
        </div>
    );
};

export default About2;

