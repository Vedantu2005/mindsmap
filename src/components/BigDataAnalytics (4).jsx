import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Mock data for the carousel card, now with 6 use cases
const useCases = [
  {
    id: 1,
    industry: 'Retail',
    description: "Lagging behind your competitors? Establish a data-driven strategy and leave competitors behind. Uncover hidden opportunities of yield increase and predict future customer buying habits. Attract new customers and retain regulars with personalized offers and on-point recommendations.",
    points: [
      'Predictive inventory planning',
      'Recommendation engines',
      'Upsell and cross channel marketing',
      'Market segmentation and targeting',
      'Customer ROI and lifetime value',
      'Customer service analytics.',
    ],
    imagePlaceholder: 'Retail Analytics',
    imageUrl: '/es-retail.webp',
  },
  {
    id: 2,
    industry: 'Finance',
    description: "Mitigate risk and enhance customer trust by leveraging real-time data analysis. Detect fraudulent transactions instantly, personalize investment advice, and ensure regulatory compliance with advanced models.",
    points: [
      'Fraud detection and prevention',
      'Algorithmic trading optimization',
      'Customer lifetime value prediction',
      'Risk modeling and regulatory reporting',
      'Personalized banking services',
      'Credit scoring and loan default prediction.',
    ],
    imagePlaceholder: 'Financial Services',
    imageUrl: '/es-financial.webp',
  },
  {
    id: 3,
    industry: 'Healthcare',
    description: "Improve patient outcomes and streamline operations. Analyze electronic health records (EHR) to identify high-risk patients, optimize resource allocation, and accelerate disease diagnosis and drug discovery.",
    points: [
      'Predictive disease outbreak modeling',
      'Optimizing patient pathways and scheduling',
      'Personalized medicine and treatment plans',
      'EHR data management and analysis',
      'Supply chain efficiency for medical equipment',
      'Remote patient monitoring and alerts.',
    ],
    imagePlaceholder: 'Healthcare Analytics',
    imageUrl: '/es-healthcare.webp',
  },
  {
    id: 4,
    industry: 'Travel and Hospitality',
    description: "Looking for a disruption to maximize financial results? Adopt a data-first strategy for your business to promote customer loyalty. Set tailored hotel or ticket prices to meet different levels of demand. Spot your weaknesses and manage brand reputation by monitoring customer feedback online.",
    points: [
      'Aircraft scheduling',
      'Dynamic pricing',
      'Social media Consumer feedback and interaction analysis',
      'Customer complaint resolution',
      'Traffic patterns and congestion management',
    ],
    imagePlaceholder: 'Travel and Hospitality',
    imageUrl: '/es-travel.webp',
  },
  {
    id: 5,
    industry: 'Energy',
    description: "Manage smart grid data and optimize resource distribution. Forecast demand accurately, detect energy fraud, and integrate renewable sources efficiently to ensure grid stability and compliance.",
    points: [
      'Smart grid data analysis and management',
      'Predictive demand forecasting',
      'Optimizing power generation and dispatch',
      'Asset performance management',
      'Energy theft detection',
      'Integration of renewable energy sources.',
    ],
    imagePlaceholder: 'Energy Grid',
    imageUrl: '/es-energy.webp',
  },
];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentCase = useCases[currentIndex];
  const numCases = useCases.length;

  // Mock carousel navigation functions
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % numCases);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + numCases) % numCases);
  };

  return (
    // Outer container with light gray background to mimic the surrounding space
    <div className="min-h-screen bg-white py-16 px-4">
      
      {/* Global Header Section */}
      <header className="text-center mb-12 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
          Big Data Analytics Use Cases
        </h1>
        <p className="text-gray-500 text-base md:text-lg tracking-wide">
          Implement robust analytical capabilities to solve your challenges across the industries and amplify your decision support at each business stage.
        </p>
      </header>

      {/* Carousel Container - Centered and constrained */}
      <div className="relative max-w-6xl mx-auto">
        
        {/* Navigation Arrow - Left */}
        <button 
          onClick={goToPrev} 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 text-gray-400 hover:text-gray-600 transition duration-150 z-10 hidden sm:block"
          aria-label="Previous Use Case"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        {/* Content Card (The Main Feature Box) */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden p-4 md:p-8 lg:p-12 border-t-4 border-cyan-500/50">
          
          {/* Main Content: Explicitly flex-row for all screens */}
          <div className="flex flex-col md:flex-row items-stretch"> 
            
            {/* Left Column: Text Content */}
            <div className="md:w-1/2 p-4 flex flex-col justify-center order-2 md:order-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-cyan-500/30 pb-2 inline-block">
                {currentCase.industry}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {currentCase.description}
              </p>

              {/* Bulleted List */}
              <ul className="space-y-2 text-gray-700 list-none pl-0">
                {currentCase.points.map((point, index) => (
                  <li key={index} className="flex items-start text-sm md:text-base">
                    {/* Small bullet point (mimics the image's style) */}
                    <span className="text-cyan-500 font-bold mr-2 mt-1">•</span> 
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Image Placeholder */}
            <div className="md:w-1/2 p-4 flex items-center justify-center order-1 md:order-2">
              <div className="w-full h-full min-h-[300px] bg-gray-200 rounded-lg overflow-hidden shadow-lg border border-gray-300 flex items-center justify-center">
                {/* Image Placeholder - uses a unique color for each slide */}
                <img
                  src={currentCase.imageUrl}
                  alt={currentCase.imagePlaceholder}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/600x400/cccccc/333333?text=Image+Missing";
                  }}
                />
              </div>
            </div>

          </div>
        </div>
        
        {/* Navigation Arrow - Right */}
        <button 
          onClick={goToNext} 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 text-gray-400 hover:text-gray-600 transition duration-150 z-10 hidden sm:block"
          aria-label="Next Use Case"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        {/* Carousel Indicators (Dots) */}
        <div className="flex justify-center mt-8 space-x-2">
          {useCases.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-cyan-500 w-4 h-4' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
