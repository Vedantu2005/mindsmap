import React from 'react';

const services = [
  {
    icon: '/message.svg',
    title: 'On-Demand Consultancy',
    description: 'Having a business challenge? Turn it into an opportunity! Get help from our AI consultants with experience in the sports and wellness industry.',
  },
  {
    icon: '/wellness.svg',
    title: 'AI Wellness and Sports Solutions Development',
    description: 'Let our data scientists and engineers develop bespoke sport and fitness solutions that will cater to your specific needs and give an advantage to your sports business.',
  },
  {
    icon: '/quality.svg',
    title: 'Quality Assurance',
    description: 'We put quality first. We make sure that your AI fitness solution is user-friendly, simple-to-use and functions as expected.',
  },
];

const Sport5 = () => {
  return (
    <div className="bg-white font-sans antialiased text-gray-800">
      <div className="container mx-auto px-4 py-5 sm:py-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            What We Can Do for You
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            Services that offer value to sports organizations and businesses.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <div 
              key={service.title} 
              className="p-8 text-center bg-white rounded-xl border border-[#77bce8] shadow-lg transition-shadow duration-300 hover:shadow-blue-200"
            >
              <img 
                src={service.icon} 
                alt={`${service.title} icon`} 
                className="h-20 w-20 mx-auto mb-6"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600">
            Need an artificial intelligence-based solution for the fitness industry?
          </p>
          <button 
            className="mt-4 px-8 py-3 border border-[#77bce8] cursor-pointer text-base font-medium 
                       rounded-lg text-gray-700 bg-white hover:bg-[#77bce8] 
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                       transition-colors"
          >
            Contact Us
          </button>
        </div>

      </div>
    </div>
  );
};

export default Sport5;
