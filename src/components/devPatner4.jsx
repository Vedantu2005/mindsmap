import React from 'react';

// --- Data for the Cross-Functional Skills Section ---
const skillsData = [
  {
    icon: '/icon-implementing.svg', // Replace with your icon path
    title: 'Machine Learning',
    description: (
      <>
        Our developers enhance the intelligence of your language model and expand its capacity to <a href="#" className="text-blue-600 hover:underline">predictive analytics</a>, fraud detection, trend analysis, and more - to help you generate higher value from your digital transformation initiatives.
      </>
    )
  },
  {
    icon: '/icon-deep-learning.svg', // Replace with your icon path
    title: 'Natural Language Processing',
    description: (
      <>
        With almost a decade of experience in NLP tools, we deliver market leverage packed into sentiment analysis and customer analysis applications that will make your language model even more intelligent and customer-centered.
      </>
    )
  },
  {
    icon: '/icon-cloud-2.svg', // Replace with your icon path
    title: 'Cloud Computing',
    description: (
      <>
        Our <a href="#" className="text-blue-600 hover:underline">cloud engineers</a> set up modern enterprise data platforms built on the cloud to fuel your applications of generative AI, enable enterprise-wide analytics, unlock seamless streams of information, and democratize data access.
      </>
    )
  },
  {
    icon: '/icon-data-engineering.svg', // Replace with your icon path
    title: 'Data Engineering',
    description: (
      <>
        We improve the maturity of your company’s data lifecycle to promote AI adoption at scale, enhance the quality and reliability of your enterprise data, and prepare your company for a leap to generative artificial intelligence.
      </>
    )
  }
];


const CrossFunctionalSkillsSection = () => {
  return (
    <div className="font-sans antialiased bg-white text-gray-800">
      {/* ========================================================================= */}
      {/* CTA Banner Section */}
      {/* ========================================================================= */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto bg-blue-50 rounded-2xl p-12 md:p-16 relative overflow-hidden text-center">
          {/* Decorative background icons */}
          <div className="absolute -top-8 -left-8 w-48 h-48 text-blue-200 opacity-50">
            {/* Placeholder for left-side graphic */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-full h-full">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
            </svg>
          </div>
          <div className="absolute -top-4 -right-4 w-24 h-24 text-blue-200 opacity-50">
             {/* Placeholder for right-side graphic */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-full h-full">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
            </svg>
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to implement your generative AI projects?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Navigate the latest AI trends with confidence and get tangible business value from your next AI solution.
            </p>
            <a
              href="#" // Your contact link
              className="inline-block px-10 py-4 text-lg font-semibold text-white rounded-lg shadow-xl 
                         bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600
                         transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Consult an expert
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* Cross-Functional Skills Section */}
      {/* ========================================================================= */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Bring Cross-Functional Skills to Your Generative AI Projects
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              We magnify your language model performance with a spectrum of smart capabilities.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            {skillsData.map((skill) => (
              <div key={skill.title} className="flex items-start gap-5">
                {/* Icon */}
                <div className="flex-shrink-0 w-25 h-25 flex items-center justify-center p-3">
                  <img src={skill.icon} alt={`${skill.title} icon`} className="w-full h-full object-contain"/>
                </div>
                {/* Text Content */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CrossFunctionalSkillsSection;