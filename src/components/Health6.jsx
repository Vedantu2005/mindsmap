import React from 'react';
import { BarChart4, FileText, FlaskConical, ScanSearch, Database } from 'lucide-react';


// This component represents a single feature link.
const FeatureLink = ({ children, isActive = false, icon }) => {
  const baseClasses = "flex items-center space-x-4 p-4 rounded-lg cursor-pointer transition-all duration-300";
  const activeClass = isActive ? 'bg-white/20 text-white font-bold shadow-lg' : 'text-gray-300 hover:bg-white/10 hover:text-white';
  
  return (
    <div className={`${baseClasses} ${activeClass}`}>
      {icon}
      <p className="text-md">{children}</p>
    </div>
  );
};

// This is the main component structure.
const Health6 = () => {
  const featureData = [
    {
      title: 'Advanced RWE Analytics',
      icon: <BarChart4 className="h-6 w-6" />,
      description: 'Uncover insights from advanced real-world evidence across the whole pharma value chain to inform R&D decisions and improve trial design, achieve better patient access, implement smart targeting and data-driven commercial activities, as well as improve pharmacovigilance to be able to respond promptly to adverse events and unmet patient needs.'
    },
    {
      title: 'NLP: Scientific Literature and Patents Analysis',
      icon: <FileText className="h-6 w-6" />,
      description: 'Implement artificial intelligence in pharmacy in a safe and controlled way with AI. Use custom NLP solutions for data mining and analysis including smart collection, labeling pharma studies, highlighting relevant information to your queries, and enhancing modeling.'
    },
    {
      title: 'AI Drug Development and Analytics',
      icon: <FlaskConical className="h-6 w-6" />,
      description: 'Uncover opportunities in drug development with AI. Produce drug-like molecules, optimize for binding affinity to your protein target, choose most chemically promising leads for further validation using generative modeling, reinforcement learning, and evolutionary algorithms.\n\nImprove your QSAR prediction of ADMET сompound properties with Graph Networks, it’s easy to approximate ADMET properties from the 3D compound structure or SMILES-like molecular representations.'
    },
    {
      title: 'Cell Image Capture and Analysis',
      icon: <ScanSearch className="h-6 w-6" />,
      description: 'Want to make cell analysis easier? Implement automated image capture and analysis for cell imaging. With that, you’ll detect anomalous tissues, segment various types of cells, detect cancerous tissues, and what is the effect of a drug.'
    },
    {
      title: 'Big Data Analytics for Pharma Companies',
      icon: <Database className="h-6 w-6" />,
      description: 'With custom Big Data solutions, you can easily manage the wealth of data. Gather, store, transit and extract data in a click. Use emerging pharma tech to run analytics and machine learning models with ease. Get the most of data analytics to ensure the success of your pharma company.'
    }
  ];

  const [activeFeature, setActiveFeature] = React.useState(featureData[0]);

  return (
    <div className="flex w-full items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 p-4 font-sans sm:p-6 md:p-4">
      <div className="w-full rounded-lg p-4">
        <h1 className="mb-16 text-center text-4xl font-bold text-white md:text-5xl tracking-wide">
          AI and Big Data for Pharma
        </h1>

        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-16">
          <div className="space-y-4">
            {featureData.map((feature) => (
              <div key={feature.title} onClick={() => setActiveFeature(feature)}>
                <FeatureLink 
                  isActive={activeFeature.title === feature.title}
                  icon={feature.icon}
                >
                  {feature.title}
                </FeatureLink>
              </div>
            ))}
          </div>

          <div className="flex h-full w-full items-center rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 p-8 shadow-2xl">
            <div key={activeFeature.title} className="animate-fade-in">
                <p className="text-base leading-relaxed text-gray-200 whitespace-pre-line">
                {activeFeature.description}
                </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Adding keyframes for the fade-in animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Health6;

