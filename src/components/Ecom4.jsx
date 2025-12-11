import React from 'react'

const services = [
  {
    icon: '/chat.svg',
    title: 'Consulting',
    description: 'Want to harness the power of AI in your E-commerce store but don’t know how? Or need a bespoke AI solution for retail? Talk to our AI experts to see how we can help.',
  },
  {
    icon: '/software.svg',
    title: 'Development',
    description: 'Need to develop an AI-based mobile app from scratch? Or to advance the existing one? Let our data scientists and engineers help you build your AI strategy. We’ve got excellent tech skills and industry-related experience to make your project a success.',
  },
  {
    icon: '/rise.svg',
    title: 'E-commerce Analytics',
    description: 'Keep an eye on churn rate and cart abandonment with predictive analytics. Use analytical insights to generate more profits from your e-store.',
  },
];

const Ecom4 = () => {
 return (
    <div className="bg-white font-sans antialiased text-gray-800">
      <div className="container mx-auto px-4 py-5 sm:py-5">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            How We Can Level Up Your Business
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            Artificial Intelligence for E-commerce made easy.
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
}

export default Ecom4
