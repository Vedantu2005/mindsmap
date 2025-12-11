import React from 'react';

export default function Health8() {
  const values = [
    {
      title: 'Diagnosis Made Easy',
      description: 'A helping hand to analyze large volumes of medical data.',
      icon: "/value-1.svg"
    },
    {
      title: 'Enhanced Patient Care',
      description: 'Patient-centric care and better patient outcomes.',
     icon: "/value-2.svg"
    },
    {
      title: 'Data Privacy',
      description: 'Your data is safe with you. You process it locally.',
      icon: "/value-3.svg"
    },
    {
      title: 'Simple-to-Use Solutions',
      description: 'Quick to adapt, easy to use for non-tech audiences.',
      icon: "/value-4.svg"
    },
    {
      title: 'Business Process Automation',
      description: 'Higher level of operational efficiency and reduced human error in the workplace.',
      icon: "/value-5.svg"
    },
    {
      title: 'Custom Solutions for Your Needs',
      description: 'Haven\'t found the right fit? Need a healthcare IT solution tailored to your specific needs?',
      link: 'Let\'s Talk',
    icon: "/value-6.svg"
    }
  ];

  return (
    <div className="py-10 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-3xl font-bold tracking-tight text-gray-900 text-center mb-4">
          Value You Get
        </h2>
        <p className="text-center  text-lg text-gray-500 mb-12">
          We offer our experience in Artificial Intelligence for healthcare organizations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md  py-7 px-7  border border-[#77bce8] shadow-lg shadow-[#77bce8]/40 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl overflow-hidden flex flex-col items-center text-center"
            >
              <div className="mb-6">
                  <img src={value.icon} alt="value image" /> 
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
              {value.link && (
                <a href="#" className="text-blue-500 hover:text-blue-600 font-medium flex items-center gap-1">
                  {value.link}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}