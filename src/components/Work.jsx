import React from 'react';

const Work = () => {
  const stats = [
    { 
      color: 'text-orange-500', 
      label: 'Years of applied experience', 
      description: 'in data science, AI consulting and development.' 
    },
    { 
      color: 'text-cyan-500', 
      label: 'Implemented projects', 
      description: 'worldwide with key clients from: USA, UK, GCC.' 
    },
    { 
      color: 'text-green-500', 
      label: 'Qualified employees', 
      description: "with master's deagrees in: Applied Math, System Analytics, Computer Science" 
    },
  ];

  return (
    <div className="bg-white font-sans w-full py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-3xl font-bold text-gray-800 mb-16">
          Why Work With Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Count Removed */}
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