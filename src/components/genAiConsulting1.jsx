import React from 'react';
import Company from '../components/Company'
// --- Placeholder Data for Logos and Stats ---


const statsData = [
    {
      percentage: '48%',
      description: (
        <>
          the projected <span className="font-semibold text-blue-600">CAGR</span> of 
          the global generative AI market by 2030
        </>
      ),
    },
    {
      percentage: '62%',
      description: (
        <>
          of companies with 11-1000 employees use <span className="font-semibold text-blue-600">GenAI</span> 
          in the workplace
        </>
      ),
    },
    {
      percentage: '75%',
      description: (
        <>
          of users are looking to automate tasks with <span className="font-semibold text-blue-600">GenAI</span>
        </>
      ),
    },
];

// --- Sub-Component for the Statistics Card ---

const StatCard = ({ percentage, description, index }) => {
  // Staggered delay for a smooth, sequential loading animation
  const delay = (index * 100) + 'ms'; 

  // **UPDATED CARD STYLING FOR SMOOTHER TRANSITIONS**
  const newCardClasses = `
    w-full max-w-xs text-center cursor-default
    rounded-2xl p-8 relative overflow-hidden 
    border border-[#77bce8] shadow-lg 
    
    // Explicitly adding transition for smoother hover effects
    transition-all duration-300 ease-in-out
    
    hover:shadow-blue-200/90 hover:scale-[1.03]
    opacity-0 custom-fadeIn
  `;

  return (
    <div 
      className={newCardClasses} 
      style={{ animationDelay: delay }}
    >
      <div className="text-5xl font-light text-blue-600 mb-4 tracking-tight">
        {percentage}
      </div>
      {/* Blue line separator */}
      <div className="w-1/4 h-0.5 bg-blue-400 mx-auto mb-6"></div> 
      
      <p className="text-base text-gray-600 font-medium leading-relaxed">
        {description}
      </p>
    </div>
  );
};


// --- Main Component ---

const GenAIWebpage = () => {
  return (
    <>
      {/* Adjusted animation duration to 0.6s for a snappier, smoother feel.
        The 'ease-out' ensures the animation slows down as it finishes.
      */}
      <style global jsx>{`
        @keyframes customFadeIn {
          0% { opacity: 0; transform: translateY(15px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .custom-fadeIn {
          animation: customFadeIn 0.6s ease-out forwards;
        }
      `}</style>
      
      <div className="bg-white font-sans text-gray-800 p-8 md:p-16">
        
        {/* 1. Trusted Companies Section */}
        <section className="text-center mt-6">
          <Company />
        </section>

        {/* 2. GenAI Statistics Section */}
        <section className="">
          <h2 className="text-xl mb-4 font-normal text-gray-700 text-center">
            GenAI Statistics: Key Facts
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 md:gap-12 px-4">
            {statsData.map((stat, index) => (
              <StatCard 
                key={index} 
                percentage={stat.percentage} 
                description={stat.description} 
                index={index}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default GenAIWebpage;