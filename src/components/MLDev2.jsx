import React from 'react';

// Data structure for the four service steps
const approachSteps = [
  {
    icon: '/icon-consulting-2.svg',
    title: 'Free consultation',
    description: "First: a no-obligation consultation to understand your business needs and goals. Next: a tech call to dig to the core of your project and choose the best starting point for it.",
  },
  {
    icon: '/icon-data-alt.svg',
    title: 'Data Preparation',
    description: "We clean and validate your data, to ensure its usefulness, make sure nothing is missing, and that private data is masked.",
  },
  {
    icon: '/icon-quality-2.svg',
    title: 'Model Building',
    description: "Based on your requirements, we can create an ML model dedicated to your needs and adapted to the data you use. We can also fine-tune your open-source model at request.",
  },
  {
    icon: '/icon-testing-qa.svg',
    title: 'Testing',
    description: "ML models created at Mindsmap AI are comprehensively tested to ensure their high performance based on KPIs set.",
  },
];

const MLApproach = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">
            Our Approach to ML Development Services
          </h1>
          <p className="max-w-3xl mx-auto text-gray-500 text-lg">
            Our unique Mindsmap AI approach was designed through years of experience to solve pitfalls hindering 
            business performance and outcomes and make the most out of automation and innovation.
          </p>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {approachSteps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 md:p-8 rounded-3xl border-2 border-blue-100 shadow-md transition duration-300 hover:shadow-xl hover:border-blue-200"
              style={{ minHeight: '220px' }} // Ensure a consistent height for alignment
            >
              <div className="flex flex-col sm:flex-row gap-6">
                
                {/* Icon Column (left) */}
                <div className="flex-shrink-0">
                  <img 
                    src={step.icon} 
                    alt={`${step.title} icon`} 
                    className="w-16 h-16 text-blue-500" // Increased size to w-16 h-16 (64px)
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/64x64/F0F8FF/1F8AFF?text=SVG'; }} 
                  />
                </div>

                {/* Content Column (right) */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2 mt-0 sm:mt-1">
                    {step.title}
                  </h2>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MLApproach;
