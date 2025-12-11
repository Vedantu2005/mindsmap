import React from 'react';
import { Users, BrainCog, Lightbulb, BrainCircuit, Trophy, Sparkles } from 'lucide-react';

// Reusable component for each feature
const FeatureCard = ({ icon, children }) => (
    <div className="flex flex-col items-center text-center p-4">
        <div className="mb-4">
            {icon}
        </div>
        <p className="text-gray-600 leading-relaxed text-sm">
            {children}
        </p>
    </div>
);


const Partner3 = () => {
    const iconClass = "h-12 w-12 text-[#77bce8]";

    const features = [
        {
            icon: <Users className={iconClass} />,
            text: "A robust machine learning engineering team"
        },
        {
            icon: <BrainCog className={iconClass} />,
            text: "Ownership of an R&D center"
        },
        {
            icon: <Lightbulb className={iconClass} />,
            text: "Continuous self-improvement"
        },
        {
            icon: <BrainCircuit className={iconClass} />,
            text: "Rich experience in data science, machine learning, and developing AI projects"
        },
        {
            icon: <Trophy className={iconClass} />,
            text: "A top data science company and researcher into AI and big data"
        },
        {
            icon: <Sparkles className={iconClass} />,
            text: "A proven track record of creating top-notch custom solutions and services"
        }
    ];

  return (
    <section className="font-sans py-40 px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[500px]">
        
        {/* Decorative Circles and Dots */}
        <div className="absolute inset-0 flex items-center justify-center">
            {/* Outer dotted circle */}
            <div className="w-[800px] h-[800px] border-2 border-dotted border-[#77bce8] rounded-full relative flex items-center justify-center">
                 <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#77bce8] rounded-full"></div>
                {/* Inner solid circle */}
                <div className="w-[620px] h-[620px] border-2 border-[#77bce8] rounded-full relative">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#77bce8] rounded-full"></div>
                </div>
            </div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8 z-10">
            Why Mindsmap AI?
        </h2>

        {/* Content Card */}
        <div className="relative bg-white/80 backdrop-blur-sm p-10 md:p-12 rounded-2xl shadow-lg border border-cyan-100/50 w-full z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10">
                {features.map((feature, index) => (
                    <FeatureCard key={index} icon={feature.icon}>
                        {feature.text}
                    </FeatureCard>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default Partner3;

