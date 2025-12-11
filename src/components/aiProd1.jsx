import React from 'react';


// Data for the AI Product Development and Consulting Services Grid
const servicesData = [
  {
    icon: '/icon-data-analysis-2.svg', // Replace with your icon path
    title: 'Market Research and Analysis',
    description: 'Let Mindsmap AI carry out in-depth market research to gain meaningful insights into your user needs. By understanding them, we can ensure an efficient AI-driven product development process for building scalable AI solutions.',
  },
  {
    icon: '/icon-productivity.svg', // Replace with your icon path
    title: 'Product Use Cases',
    description: 'Pinpoint the specific scenarios where AI-driven product development can be effectively implemented to generate considerable business value. Our strategic focus ensures that our initiatives are impactful and sustainable in your organization.',
    
  },
  {
    icon: '/icon-engineering.svg', // Replace with your icon path
    title: 'Feasibility and Proof-of-Concept',
    description: 'Evaluate infrastructure and data requirements necessary for the development and validation of the AI solution feasibility. Through assessment, we ensure the robustness of AI features in new products.',
    
  },
  {
    icon: '/icon-design.svg', // Replace with your icon path
    title: 'Design',
    description: 'Let us develop initial product designs, including architecture, data architecture, and detailed implementation specifications. This phase lays the groundwork for a scalable and novel approach to the design process.',
    
  },
  {
    icon: '/icon-mvp.svg', // Replace with your icon path
    title: 'Minimum Viable Product (MVP)',
    description: 'Create an MVP with core features to test among selected segments of users and the market. The early validation allows us to refine the AI product concept, ensuring a more robust alignment with market demands and enhancing the competitive edge.',
    
  },
  {
    icon: '/icon-person-check.svg', // Replace with your icon path
    title: 'User Testing',
    description: 'Let us develop a full-scale and agile AI product that incorporates distinctive features derived from market research, testing, and user feedback. This iterative approach ensures that the final AI solution fosters a competitive edge.',
    
  },
  {
    icon: '/icon-design.svg', // Replace with your icon path
    title: 'Full-Scale Product Launch',
    description: 'Let us develop a full-scale and agile AI product that incorporates distinctive features derived from market research, testing, and user feedback. This iterative approach ensures that the final AI solution fosters a competitive edge.',
    
  },
  {
    icon: '/icon-24hours.svg', // Replace with your icon path
    title: 'Post-Launch Support and Maintenance',
    description: 'Implement enhancements, monitoring, and management of the AI model to address user concerns and optimize performance. Ensure that our solutions remain responsive to evolving user needs.',
    
  },
];

const ProductDevelopmentPage = () => {
  return (
    <div className="bg-white font-sans text-gray-700">
      <main className="container mx-auto px-4 py-16">

        {/* Section 2: AI Product Development and Consulting Services */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            AI Product Development and Consulting Services
          </h2>
          <p className="max-w-4xl mx-auto text-gray-600 text-lg leading-relaxed mb-12">
            Mindsmap AI is a trusted partner in the AI product development space, offering custom solutions with a
            focus on novelty. We're a future-focused powerhouse, crafting comprehensive, end-to-end experiences
            that propel your product to industry leadership.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {servicesData.map((service, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-start text-left p-6 rounded-lg border border-gray-100 shadow-sm
                            hover:shadow-xl hover:border-blue-300 transform hover:-translate-y-1 transition-all duration-300 ${service.className}`}
              >
                {/* Icon with Check/Pencil Overlay */}
                <div className="relative mb-4">
                  {/* Base Icon */}
                  <img src={service.icon} alt={`${service.title} icon`} className="w-10 h-10 text-blue-500" />
                  
                  {/* The checkmark/pencil icon is part of the image in the original,
                      but if we needed to layer it, we'd use:
                      <FaCheck className="absolute bottom-0 right-0 w-4 h-4 text-blue-500 bg-white rounded-full p-0.5" />
                      Assuming the provided icon images already include the check/pencil.
                  */}
                </div>

                <h3 className="text-lg font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
};

export default ProductDevelopmentPage;