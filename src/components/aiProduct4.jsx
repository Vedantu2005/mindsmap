// DataSciencePage.jsx

import React from 'react';

// Data for the expertise cards
const expertiseData = [
  {
    icon: '/icon-iot-2.svg', // Replace with your icon path
    title: 'Data Analytics',
  },
  {
    icon: '/icon-generative-ai.svg', // Replace with your icon path
    title: 'Generative AI',
  },
  {
    icon: '/icon-ai-chatbot.svg', // Replace with your icon path
    title: 'AI Chatbots',
  },
  {
    icon: '/icon-visualization.svg', // Replace with your icon path
    title: 'Predictive Analytics',
  },
  {
    icon: '/bi-icon-analysis.svg', 
    title: 'BI & Data Visualisation',
  },
  {
    icon: '/icon-vision-1.svg', // Replace with your icon path
    title: 'Computer Vision',
  },
];

const DataSciencePage = () => {
  return (
    <div className="bg-white font-sans">
      <main className="container mx-auto px-4 py-10 max-w-6xl">

        {/* Section 1: Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          
          {/* Left Column: Text Content */}
          <div className="text-gray-600 leading-relaxed">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              World-Class Data Scientists and Machine Learning Consultants
            </h1>
            <p className="mb-4">
              We cooperate with businesses of all sizes, from startups to large enterprises.
              Our experience tells us that, regardless of the size of a company, business
              owners face similar challenges when planning new data initiatives.
            </p>
            <p className="mb-4">
              Our clients either don’t have their own data science teams, or their team is too
              small to cope with all the tasks in the environment of a fast-growing company.
            </p>
            <p>
              With Mindsmap AI, you’ll save time on looking for top-notch specialists. Our team
              of world-class data scientists, AI consultants, advisors, and ML engineers will
              bring consultancy, technical know-how to your project from day one.
            </p>
          </div>

          {/* Right Column: Illustration */}
          <div className="flex justify-center items-center">
            {/* Replace with the actual path to your illustration */}
            <img 
              src="/ml-engineers.svg" 
              alt="Data Scientists and Machine Learning Consultants Illustration" 
              className="max-w-full h-auto"
            />
          </div>
        </section>

        {/* Section 2: How We Apply Our Expertise */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              How We Apply Our Data Science Expertise
            </h2>
          </div>

          {/* Grid of Expertise Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {expertiseData.map((item, index) => (
              <div 
                key={index}
                className="group  bg-white rounded-lg p-6 text-center flex flex-col justify-center items-center h-40 border border-[#77bce8] shadow-lg transition-shadow duration-300 hover:shadow-blue-200 cursor-pointer"
              >
                <img src={item.icon} alt={`${item.title} icon`} className="w-14 h-14 mb-3" />
                <p className="font-semibold text-blue-500 text-base">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
};

export default DataSciencePage;