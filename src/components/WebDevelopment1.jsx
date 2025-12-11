import React from 'react';
import { Link } from 'react-router-dom';
import { FaBrain, FaWandMagicSparkles, FaDatabase } from "react-icons/fa6";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { IoLanguage } from "react-icons/io5";

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-600">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

// --- Main Expertise Component ---
const Expertise = () => {
  const expertiseItems = [
    {
    icon: <FaBrain />,
    title: "AI Consulting",
    href:"/ai-consulting"
  },
  {
    icon: <AiOutlineDeploymentUnit />,
    title: "Machine Learning Solutions",
    href:"/ml-consulting"
  },
  {
    icon: <FaWandMagicSparkles />,
    title: "Generative AI",
    href:"/generative-ai-consulting"
  },
  {
    icon: <IoLanguage />,
    title: "NLP Solutions",
    href:"/nlp"
  },
    {
    icon: <FaDatabase />,
    title: "Data Engineering Services",
    href:"/big-data-development"
  }
  ];

  return (
    <div className="bg-white font-sans w-full  flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-3xl font-bold text-center text-gray-800 mb-16">
          Our Expertise
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">

          {/* Left Side: Video Player */}
          <div className="w-full lg:w-5/12 flex-shrink-0">
             <div className="relative" style={{paddingBottom: '100%'}}>
                 <video 
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl shadow-2xl shadow-sky-100" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    src="/mindsmapai.mp4" 
                >
                    Your browser does not support the video tag.
                </video>
             </div>
          </div>

          {/* Right Side: Expertise List */}
          <div className="w-full lg:w-7/12 space-y-5">
            {expertiseItems.map((item, index) => (
              <Link
                to={item.href}
                key={index}
                className="group flex items-center bg-white border-2 border-sky-50 rounded-xl p-4 transition-all duration-300 ease-in-out cursor-pointer hover:scale-[1.03] hover:shadow-lg hover:border-sky-200"
                aria-label={item.title}
              >
                <div className="bg-sky-50 p-4 rounded-lg mr-5">
                  {item.icon}
                </div>
                <h2 className="text-lg font-semibold text-slate-700">{item.title}</h2>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRightIcon />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Expertise;

