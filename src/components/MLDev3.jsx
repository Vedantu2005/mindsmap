import React from 'react';

// Data structure for the eight benefits/features
const modelBenefits = [
  {
    icon: '/icon-like.svg',
    title: 'Better Decision-Making',
    description: "Exploit vast amounts of information to enhance your business processes, optimize the workforce & deliver strategic growth.",
  },
  {
    icon: '/icon-accuracy-2.svg', // This is icon-accuracy-2.svg which visually matches the "Boost in Production Efficiency"
    title: 'Boost in Production Efficiency',
    description: "Identify patterns, make accurate predictions about market trends and customer behavior, and build the best-fit products accordingly.",
  },
  {
    icon: '/icon-person-check.svg',
    title: 'Reduced Human Error',
    description: "Harness machine learning to eliminate the human factor, prevent analysis errors, and maximize performance with lightning speed.",
  },
  {
    icon: '/icon-five-stars.svg',
    title: 'Enhanced Customer Experience',
    description: "By developing AI-powered chatbots and virtual assistants using machine learning, you can improve customer satisfaction and increase conversions.",
  },
  {
    icon: '/icon-security.svg',
    title: 'Better Security',
    description: "Integrating machine learning helps predict malicious activities (malware, phishing, app & authentication attacks), detect and prevent security threats.",
  },
  {
    icon: '/icon-chat.svg',
    title: 'Sales Support',
    description: "Anticipating and responding to users' demands, AI chatbots have the potential to provide quality real-time human-like support increasing sales.",
  },
  {
    icon: '/icon-cost-alt.svg', // Assuming icon-cost-alt.svg visually matches the "Higher Employee Productivity" icon
    title: 'Higher Employee Productivity',
    description: "Automated jobs can be performed by machine learning algorithms, freeing up human resources to focus on higher-value and more complex work.",
  },
  {
    icon: '/bi-icon-analysis.svg',
    title: 'Comprehensive Research',
    description: "A machine learning app can decide on the best delivery date and pricing, as well as analyze customers' buying habits and act upon them.",
  },
];

const MLModel = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">
            Implement Machine Learning Model and Scale Up
          </h1>
          <p className="max-w-3xl mx-auto text-gray-500 text-lg">
            Boundless opportunities opened up for you with the right-suited custom machine learning app development.
          </p>
        </div>

        {/* Grid of Cards (4 columns on large screens) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modelBenefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-start transition duration-300 hover:shadow-lg hover:border-blue-200"
              style={{ minHeight: '300px' }} // Ensure a consistent height for visual alignment
            >
              {/* Icon and Title Wrapper */}
              <div className="mb-4">
                <img 
                  src={benefit.icon} 
                  alt={`${benefit.title} icon`} 
                  className="w-12 h-12 text-blue-500 mb-4"
                  // Fallback for missing images
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/48x48/F0F8FF/1F8AFF?text=Icon'; }} 
                />
                <h2 className="text-xl font-semibold text-gray-800">
                  {benefit.title}
                </h2>
              </div>
              
              {/* Description */}
              <p className="text-gray-600 text-base leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MLModel;
