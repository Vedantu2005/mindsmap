import React from 'react';

// Placeholder imports for your assets
// REMINDER: Replace these with your actual image and icon paths
import heroImage from '/generative-ai-consulting-desktop.webp'; // Replace with your actual hero image path
import DigitalIcon from '/icon-data.svg'; // Placeholder for AI Digital icon
import DataIcon from '/icon-data.svg'; // Placeholder for AI Data icon
import SolutionsIcon from '/icon-data.svg'; // Placeholder for AI Solutions icon

// --- Service Card Component ---
const ServiceCard = ({ icon, title, description }) => {
  return (
    <div
      className="
        flex flex-col items-start p-6 
        bg-white rounded-lg transition-transform duration-300 ease-in-out
        hover:scale-[1.02] hover:shadow-xl
        cursor-pointer
      "
    >
      {/* Icon and Title Container */}
      <div className="flex flex-col items-center mb-4">
        {/* The icon has a light blue background circle in the image. */}
        <div className="p-3 bg-[#e8f1f7] rounded-full mb-4"> 
          {/* Actual Icon - You should replace the placeholder image below */}
          <img 
            src={icon} 
            alt={`${title} Icon`} 
            className="w-8 h-8 text-blue-600" // Adjust size as needed
          />
        </div>
        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {title}
        </h3>
      </div>
      
      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed text-left">
        {description}
      </p>
    </div>
  );
};

// --- Main Page Component ---
const GenerativeAIServices = () => {
  const serviceData = [
    {
      icon: DigitalIcon,
      title: "AI Digital Transformation Consulting",
      description: "Looking for a smart way to automate repetitive tasks, streamline business processes, and enhance your overall operational efficiency? Our team will analyze the specifics of your business and the industry you are in, ensure alignment with your goals, and decide how you can implement generative AI technologies to stay ahead of the curve, fostering innovation in your organization.",
    },
    {
      icon: DataIcon,
      title: "AI Data Consulting",
      description: "Need help with data quality & governance? Our generative AI consultants can help you establish robust data governance, ensuring that data is accurate, consistent, and meets quality standards. We can evaluate your data infrastructure and recommend improvements like upgrading hardware, implementing cloud solutions or adopting big data technologies to support your future AI initiatives.",
    },
    {
      icon: SolutionsIcon,
      title: "Generative AI Solutions Development",
      description: "Our generative AI consulting company selects the right AI tools and fine-tunes LLMs with your data, or enables ChatGPT integration into your infrastructure to help you drive optimization and growth. With generative AI development, you can benefit from custom virtual assistants and chatbots, personalized recommender engines, customer sentiment analysis, and business automation solutions.",
    },
  ];

  return (
    <div className="font-sans bg-white">
      {/* Header/Title Section */}
      <header className="py-16 text-center">
        <h1 className="text-4xl font-light text-gray-800 mb-4">
          Generative AI Consulting Services
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Explore the AI frontier with our generative AI consulting company. Embark on the GenAI journey with **MindSmap AI**.
        </p>
      </header>

      {/* Hero Image Section (People Walking) */}
      <section className="px-4 sm:px-8 lg:px-16 mb-16">
        <div 
          className="h-64 md:h-80 bg-gray-200 rounded-lg shadow-lg overflow-hidden" 
          // Use an actual image. This style uses a placeholder background.
          style={{
            backgroundImage: `url('${heroImage}')`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
          }}
        >
          {/* For the real image from your public folder, you can use:
          <img src="/path/to/your/image.jpg" alt="People walking" className="w-full h-full object-cover" /> 
          */}
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="px-4 sm:px-8 lg:px-16 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {serviceData.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon}
              title={service.title} 
              description={service.description} 
            />
          ))}
        </div>
      </section>

      {/* Contact Button Section */}
      <section className="text-center pb-5">
        <button
          className="
            px-12 py-3 border border-gray-400 text-gray-700 
            rounded-md text-base font-medium 
            transition duration-300 ease-in-out
            hover:bg-gray-50 hover:border-gray-600 hover:shadow-md
            animate-pulse-once // Custom animation to draw attention
          "
          onClick={() => console.log('Contact button clicked')}
        >
          Contact us for a consultation
        </button>
      </section>
    </div>
  );
};

// Optional: Define a simple keyframe animation in your global CSS file (e.g., index.css)
/*
@keyframes pulse-once {
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.1); }
  50% { transform: scale(1.02); box-shadow: 0 0 0 10px rgba(0, 0, 0, 0); }
  100% { transform: scale(1); box-shadow: none; }
}

.animate-pulse-once {
  animation: pulse-once 1s ease-out 1; // Play once on load
}
*/

export default GenerativeAIServices;