import React from 'react';
import { Globe, DatabaseBackup, Users, Sparkles, CalendarClock } from 'lucide-react';

// Reusable component for each reason
const ReasonCard = ({ icon, title, description }) => (
  <div className="flex items-start space-x-6">
    <div className="flex-shrink-0 bg-cyan-100/60 p-4 rounded-full">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

const About5 = () => {
  const iconClass = "h-10 w-10 text-[#77bce8]";

  const reasons = [
    {
      icon: <CalendarClock className={iconClass} />,
      title: "Since 2022",
      description: "We are one of the leading companies with 6+ years of experience in Big Data, Machine Learning and Artificial Intelligence."
    },
    {
      icon: <Globe className={iconClass} />,
      title: "Global Experience",
      description: "We have a solid track record of successful Big Data and AI projects completed for a variety of companies all over the world and multiple industries."
    },
    {
      icon: <DatabaseBackup className={iconClass} />,
      title: "Value for Results",
      description: "Our highly qualified team will take care of all your data needs ensuring high accuracy and quick turnaround."
    },
    {
      icon: <Users className={iconClass} />,
      title: "Favorable/Convenient Terms of Cooperation",
      description: "We are always ready to offer such terms of cooperation that will be the most suitable for your project needs and goals. T&M and Fixed Price models are offered."
    },
    {
      icon: <Sparkles className={iconClass} />,
      title: "High-Quality Results",
      description: "Our focus is on compelling results. We build our solutions to address your unique requirements and business-specific challenges."
    }
  ];

  return (
    <section className="bg-white font-sans py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-3xl font-bold text-gray-800">
            Why Clients Choose Mindsmap AI
          </h2>
        </div>

        <div className="space-y-12">
            {reasons.map((reason, index) => (
              <React.Fragment key={index}>
                <ReasonCard {...reason} />
                {index < reasons.length - 1 && <hr className="border-gray-200" />}
              </React.Fragment>
            ))}
        </div>
      </div>
    </section>
  );
};

export default About5;

