import React from 'react';
import { MonitorCog, History, UserCog } from 'lucide-react';

// Reusable component for each feature
const FeatureCard = ({ icon, children }) => (
    <div className="flex flex-col md:flex-row items-center text-center md:text-left space-y-4 md:space-y-0 md:space-x-6">
        <div className="flex-shrink-0">
            {icon}
        </div>
        <p className="text-gray-600 leading-relaxed">
            {children}
        </p>
    </div>
);


const Partner2 = () => {
    const iconClass = "h-16 w-16 text-[#77bce8]";

    const features = [
        {
            icon: <MonitorCog className={iconClass} />,
            text: "Strong expertise in the development & support of AI solutions and products."
        },
        {
            icon: <History className={iconClass} />,
            text: "Transparency of all workflows and project progress."
        },
        {
            icon: <UserCog className={iconClass} />,
            text: "Staff augmentation program."
        }
    ];

  return (
    <section className="bg-white font-sans py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Header Content */}
        <h2 className="text-3xl md:text-3xl font-bold text-gray-800 mb-6">
          Build a Strong Partnership
        </h2>
        <div className="max-w-4xl mx-auto text-gray-600 space-y-4 text-lg leading-relaxed mb-16">
          <p>
            Of any scale, and from anywhere in the world, businesses can receive a boost in partnership with Mindsmap AI.
          </p>
          <p>
            We implement the latest AI development methodologies and offer reliable co-development services to enhance business opportunities.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
                <FeatureCard key={index} icon={feature.icon}>
                    {feature.text}
                </FeatureCard>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Partner2;
