// BusinessServicesPage.jsx

import React from 'react';

// Data for the "Consulting Services for Businesses" section
const consultingServices = [
  {
    icon: '/icon-web-dev.svg', // Replace with your actual icon path
    title: 'UI/UX Design',
    description: 'Our design specialists can help you develop engaging and intuitive user design for your product ideas. We analyze requirements, do market research, and use the latest design principles to craft creative digital experiences.',
  },
  {
    icon: '/icon-deep-learning.svg', // Replace with your actual icon path
    title: 'Data Science and Analytics',
    description: 'Our experts in data science and analytics are equipped to help you maximize the potential of your data sources. We analyze existing sources and infrastructure, identify risks, and support our customers to develop future-proof architectures.',
  },
  {
    icon: '/icon-quality-2.svg', // Replace with your actual icon path
    title: 'Technology Consulting',
    description: 'Our team of technology experts and AI consultants can help you choose scalable and cost-effective AI tools and technologies to accelerate your business growth and enhance your products or services in a short period of time.',
  },
  {
    icon: '/icon-implementing.svg', // Replace with your actual icon path
    title: 'AI Integration',
    description: 'We provide support in creating AI implementation plans and develop a Proof of Concept (PoC) to validate if AI technology can effectively be integrated into your project. Our team will be accompanying you throughout your AI journey.',
  },
];

// Data for the "Areas of Expertise" section
const expertiseAreas = [
  { icon: '/icon-deep-learning.svg', title: 'Data Science & Analytics' }, // Replace with your actual icon path
  { icon: '/icon-roadmap.svg', title: 'Data Strategy' }, // Replace with your actual icon path
  { icon: '/icon-bi-analytics.svg', title: 'Business Intelligence' }, // Replace with your actual icon path
  { icon: '/icon-custom-software.svg', title: 'AI Software Development' }, // Replace with your actual icon path
  { icon: '/icon-implementing.svg', title: 'Artificial Intelligence Consulting' }, // Replace with your actual icon path
  { icon: '/icon-data-engineering.svg', title: 'Data Engineering & Architecture' }, // Replace with your actual icon path
];

const BusinessServicesPage = () => {
  return (
    <div className="bg-white text-gray-700">
      <main className="container mx-auto max-w-6xl px-4 py-10">

        {/* Consulting Services for Businesses Section */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Consulting Services for Businesses
          </h2>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed">
            We help you create scalable products and services with intuitive design and robust implementation, aiming
            to meet both your business objectives and your customers' expectations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {consultingServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-6 flex flex-col items-start text-left border border-[#77bce8] shadow-lg transition-shadow duration-300 hover:shadow-blue-200"
              >
                <img src={service.icon} alt={service.title} className="w-22 h-22 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Areas of Expertise Section */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Areas of Expertise
          </h2>
          <p className="max-w-4xl mx-auto text-lg leading-relaxed">
            Custom-tailored AI solutions and <span className="text-[#77bce8] font-medium">AI Software Development</span> services by Mindsmap AI help our clients to solve
            complex issues and add value to their business efficiency.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12 max-w-5xl mx-auto">
            {expertiseAreas.map((area, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center p-4 rounded-lg 
                           hover:bg-blue-50 hover:text-blue-700 transform hover:-translate-y-1 transition-all duration-300"
              >
                <img src={area.icon} alt={area.title} className="w-16 h-16 mb-3" />
                <p className="text-sm font-medium text-gray-700 group-hover:text-blue-700">
                  {area.title}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Text Section */}
        <section className="text-center max-w-4xl mx-auto text-gray-600 leading-relaxed text-lg mt-8">
          <p>
            In order to help our customers grow their business, we also offer <span className="text-[#77bce8] font-medium">customer experience consulting</span> services.
            Whether you need the aid of expert consultants, or want to enhance your customer experience management
            software, we are here to help!
          </p>
        </section>

      </main>
    </div>
  );
};

export default BusinessServicesPage;