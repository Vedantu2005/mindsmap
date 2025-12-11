import React, { useState } from 'react';

const problemsData = [
  {
    category: "Computer Vision",
    description: "Automate monitoring processes for reduced costs and better productivity.",
    points: [
      "Visual defect detection with deep learning",
      "Object tracking",
      "Forklift collision prevention",
      "Analog gauge data reading",
      "Reinforced safety measures on-site"
    ]
  },
  {
    category: "Predictive Analytics",
    description: "Predict critical future outcomes, reduce risks, and improve manufacturing operations.",
    points: [
      "Predictive maintenance",
      "Anomaly detection",
      "Workplace accident prevention",
      "Demand planning",
      "Warehouse capacity planning"
    ]
  },
  {
    category: "Natural Language Processing",
    description: "Facilitate regulation consistency and eliminate administrative burdens.",
    points: [
      "SOP documents search automation",
    ]
  },
  {
    category: "Optical Character Recognition",
    description: "Hand over text-based processes and increase documentation efficiency.",
    points: [
      "Automated documents processing",
      "Automated invoice processing"
    ]
  }
];

const Auto5 = () => {
  // Default to the first tab being open. null would mean all are closed.
  const [activeTab, setActiveTab] = useState(0);

  // This function will now toggle the view, which works for both accordion and tabs
  const handleTabClick = (index) => {
    setActiveTab(activeTab === index ? null : index);
  };

  // A helper component to render the content box to avoid repetition
  const ContentBox = ({ item }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#00B4D8] h-full">
      <p className="text-gray-700 text-xl mb-6">
        {item.description}
      </p>
      <ul className="space-y-4">
        {item.points.map((point, i) => (
          <li key={i} className="flex items-start">
            <span className="flex-shrink-0 w-2.5 h-2.5 bg-[#00B4D8] rounded-full mt-2 mr-4"></span>
            <span className="text-gray-600">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="font-sans p-8 md:p-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-3xl text-gray-800 font-bold mb-4">
            Problems We Solve in Manufacturing
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Revolutionize your manufacturing flow with automated capabilities of artificial intelligence.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Side: Tabs / Accordion Headers */}
          <div className="w-full md:w-1/3 flex-shrink-0">
            <div className="flex flex-col gap-2">
              {problemsData.map((item, index) => (
                <div key={index}>
                  <button
                    onClick={() => handleTabClick(index)}
                    className={`w-full text-left text-lg font-medium p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                      activeTab === index
                        ? 'bg-[#00B4D8] text-white shadow-md'
                        : 'bg-[#deeff9] text-cyan-800 '
                    }`}
                  >
                    {item.category}
                  </button>
                  {/* Accordion Content: Visible only on mobile (md:hidden) when tab is active */}
                  {activeTab === index && (
                    <div className="md:hidden mt-2">
                       <ContentBox item={item} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Content (Desktop Only) */}
          <div className="w-full md:w-2/3 hidden md:block">
            {/* Show content only if a tab is selected */}
            {activeTab !== null && <ContentBox item={problemsData[activeTab]} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auto5;

