import React from 'react';


const FinTech6 = () => {
  const benefits = [
    {
      icon: <img src="/doc.svg" alt="Document Process Automation icon" className="w-16 h-16" />,
      title: 'Document Process Automation',
      description: 'Document capture, storage and extraction towards enhancing your efficiency.',
    },
    {
      icon: <img src="/alt.svg" alt="Prime Customer Service icon" className="w-16 h-16" />,
      title: 'Prime Customer Service',
      description: 'Customer segmentation to improve marketing results and boost sales.',
    },
    {
      icon: <img src="/predictive.svg" alt="Investment Analysis and Management icon" className="w-16 h-16" />,
      title: 'Investment Analysis and Management',
      description: 'Analytical insights for risk scoring and wise investment.',
    },
    {
      icon: <img src="/personali.svg" alt="Security Streamlined icon" className="w-16 h-16" />,
      title: 'Security Streamlined',
      description: 'Pose estimation and face recognition in Fintech for crime prevention.',
    },
  ];

  return (
    <div className="bg-white font-sans py-5 px-4 sm:px-6 lg:py-10">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Benefits
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Embed AI in simple custom solutions for the Fintech market.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-4 bg-white rounded-lg border border-[#77bce8] shadow-lg shadow-[#77bce8]/40 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl flex items-center space-x-6">
              <div className="flex-shrink-0 p-2 ">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">{benefit.title}</h3>
                <p className="mt-2 text-base text-gray-600">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-20 text-center">
            <p className="text-lg text-gray-600 mb-6">
              Need an AI solution for Finance?
            </p>
            <button className="px-10 py-3 border border-[#77bce8] cursor-pointer text-base font-medium rounded-lg text-sky-600 bg-white hover:bg-[#77bce8] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-colors duration-300">
              Let's Talk
            </button>
        </div>
      </div>
    </div>
  );
};

export default FinTech6;
