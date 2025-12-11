import React from 'react';

// Placeholder imports for your assets
// REMINDER: Replace these with your actual icon paths from the public folder
import EfficiencyIcon from '/icon-accuracy-2.svg'; 
import DecisionIcon from '/icon-person-decision.svg'; 
import CostIcon from '/icon-dollar-increase.svg'; 
import ScalabilityIcon from '/icon-data-processing.svg'; 
import InnovationIcon from '/icon-idea.svg'; 
import ComplianceIcon from '/icon-list.svg'; 
import ExperienceIcon from '/icon-vip.svg'; 
import RiskIcon from '/icon-cost-4.svg'; 


// --- Reusable Benefit Card Component ---
const BenefitCard = ({ icon, title, description, animationDelay }) => {
  return (
    <div 
      className="
        flex flex-col items-start p-6 rounded-lg border border-gray-100 
        bg-white transition-all duration-300 ease-in-out
        hover:shadow-lg hover:border-blue-500 transform hover:-translate-y-1
        cursor-pointer
      "
      // Added a subtle delay for a nice loading effect if placed in a main view
      style={{ animationDelay: `${animationDelay}ms` }} 
    >
      {/* Icon Placeholder (Assuming your icons have the look from the image) */}
      <div className="mb-4">
        {/* Replace the src with your actual icon path */}
        <img 
          src={icon} 
          alt={`${title} Icon`} 
          className="w-16 h-16 object-contain" // Adjusted size to fit the look
        />
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed text-left">
        {description}
      </p>
    </div>
  );
};

// --- Call-to-Action Banner Component ---
const CTABanner = () => {
  return (
    <div  
      className="
        max-w-6xl mx-auto rounded-xl shadow-2xl overflow-hidden
        relative h-64 flex items-center justify-center text-center
        bg-cover bg-center
      "
      // This is a placeholder for the dark blue/gradient background
      style={{ 
        backgroundImage: 'linear-gradient(to right, #0a1f44 0%, #1e5a8f 100%)',
        // In a real application, you might use an image:
        // backgroundImage: `url('/path/to/your/banner-bg.jpg')`, 
      }}
    >
      <div className="p-8 relative z-10">
        <h2 className="text-2xl md:text-3xl font-light text-white mb-4">
          Generative AI Consulting for Your Business Growth
        </h2>
        <p className="text-sm text-gray-200 mb-6">
          Get a consultation on how your business can achieve greater productivity with GenAI.
        </p>
        <button
          className="
            px-8 py-3 bg-[#00bfff] text-white font-semibold rounded-full 
            transition duration-300 ease-in-out shadow-md
            hover:bg-[#0099cc] hover:shadow-lg hover:scale-[1.05]
          "
          onClick={() => console.log('Let\'s talk button clicked')}
        >
          Let's talk
        </button>
      </div>
    </div>
  );
};


// --- Main Page Component ---
const AIBenefitsSection = () => {
  const benefitsData = [
    { 
      icon: EfficiencyIcon, 
      title: "Improved Efficiency", 
      description: "Streamline workflow, and enhance operational efficiency.",
    },
    { 
      icon: DecisionIcon, 
      title: "Enhanced Decision Making", 
      description: "Provide valuable insights for informed decision-making.",
    },
    { 
      icon: CostIcon, 
      title: "Cost Savings", 
      description: "Automate tiresome tasks and minimize expenses.",
    },
    { 
      icon: ScalabilityIcon, 
      title: "Scalability", 
      description: "Easily adapt to changing business environments and workloads.",
    },
    { 
      icon: InnovationIcon, 
      title: "Innovation", 
      description: "Transform the way you operate, and make strategic decisions.",
    },
    { 
      icon: ComplianceIcon, 
      title: "Regulatory Compliance", 
      description: "Stay compliant with regulations by automating compliance monitoring.",
    },
    { 
      icon: ExperienceIcon, 
      title: "Enhanced Customer Experience", 
      description: "Provide round-the-clock support and increase customer loyalty.",
    },
    { 
      icon: RiskIcon, 
      title: "Risk Management", 
      description: "Mitigate risks by analyzing data patterns and detecting anomalies.",
    },
  ];

  return (
    <div className="font-sans min-h-screen bg-white pb-20 pt-10">
      
      {/* 1. Call-to-Action Banner */}
      <section className="px-4 sm:px-8 lg:px-16 mb-20">
        <CTABanner />
      </section>

      {/* 2. Benefits Header */}
      <header className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-3">
          Benefits of Generative AI Consulting
        </h2>
        <p className="text-gray-600 max-w-4xl mx-auto text-base">
          Embracing generative AI in consulting to beat your competition in today's evolving digital landscape.
        </p>
      </header>

      {/* 3. Benefits Grid */}
      <section className="px-4 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefitsData.map((benefit, index) => (
            <BenefitCard 
              key={index} 
              icon={benefit.icon}
              title={benefit.title} 
              description={benefit.description} 
              animationDelay={index * 50} // Staggered animation delay
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AIBenefitsSection;