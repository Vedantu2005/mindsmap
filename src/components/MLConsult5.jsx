// MLKeyUses.jsx
import React, { useState, useRef, useEffect } from 'react';

// Custom hook for smooth height transition
const useCollapseTransition = (isOpen) => {
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  useEffect(() => {
    if (contentRef.current) {
      // Set max-height to the scroll height when open, or 0 when closed
      setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [isOpen]);

  return { contentRef, maxHeight };
};

const MLKeyUses = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (sectionName) => {
    setOpenSection(openSection === sectionName ? null : sectionName);
  };

  const sections = [
    {
      name: 'Healthcare & Pharma',
      details: (
        <>
          <p className="mb-2">
            Harness machine learning technology for <span className="text-blue-600">better patient outcomes</span>. Forecast
            health risks and prevent diseases.
          </p>
          <ul className="list-disc list-inside text-gray-700 ml-4">
            <li>disease prediction and prevention</li>
            <li>efficient diagnosis and anomaly detection</li>
            <li>healthcare record and workflow analysis</li>
            <li>clinical trial opportunity identification</li>
            <li>drug development</li>
          </ul>
        </>
      ),
    },
    {
      name: 'Sport & Wellness',
      details: (
        <>
          <p className="mb-2">
            Optimize physical activity with top-notch technology. Enhance patient physical therapy outcomes through error detection algorithms.
          </p>
          <ul className="list-disc list-inside text-gray-700 ml-4">
            <li>human pose estimation for injury-free workouts with personalized real-time feedback</li>
            <li>action recognition for fall detection</li>
            <li>automated ball tracking</li>
            <li>object tracking for players to train movements</li>
            <li>sports performance analysis</li>
          </ul>
        </>
      ),
    },
    {
      name: 'Manufacturing',
      details: (
        <>
          <p className="mb-2">
            Optimize the production processes, reduce costs and produce products of high demand and quality.
          </p>
          <ul className="list-disc list-inside text-gray-700 ml-4">
            <li>predictive maintenance on equipment and machinery to predict failures</li>
            <li>analog gauge data reading</li>
            <li>visual defect detection</li>
            <li>forklift collision prevention</li>
            <li>supply chain optimization</li>
          </ul>
        </>
      ),
    },
    {
      name: 'E-commerce & Retail',
      details: (
        <>
          <p className="mb-2">
            Increase sales and predict customer retention with smart ML technology.
          </p>
          <ul className="list-disc list-inside text-gray-700 ml-4">
            <li>customer review analysis</li>
            <li>customer retention prediction</li>
            <li>inventory management</li>
          </ul>
        </>
      ),
    },
    {
      name: 'Marketing',
      details: (
        <>
          <p className="mb-2">
            Use ML to boost marketing strategies and increase sales.
          </p>
          <ul className="list-disc list-inside text-gray-700 ml-4">
            <li>lead qualification</li>
            <li>customer analytics</li>
            <li>customer sentiment analysis</li>
            <li>personalized offers</li>
          </ul>
        </>
      ),
    },
    {
      name: 'Supply Chain & Logistics',
      details: (
        <>
          <p className="mb-2">
            Implementing machine learning custom solutions, you improve operational efficiency and automation.
          </p>
          <ul className="list-disc list-inside text-gray-700 ml-4">
            <li>inventory management</li>
            <li>order management and freight control</li>
            <li>demand and sales prediction</li>
            <li>equipment damage prediction</li>
            <li>route optimization</li>
            <li>freight rates prediction</li>
          </ul>
        </>
      ),
    },
    {
      name: 'Game & Entertainment',
      details: (
        <>
          <p className="mb-2">
            Uncover behavioral insights and retain your players with ML analytics.
          </p>
          <ul className="list-disc list-inside text-gray-700 ml-4">
            <li>analytical insights</li>
            <li>user behavior analysis</li>
            <li>churn prediction</li>
            <li>user sentiment analysis</li>
          </ul>
        </>
      ),
    },
    {
      name: 'Fintech',
      details: (
        <>
          <p className="mb-2">
            Advance financial decision making and strengthen security in your organization with machine learning.
          </p>
          <ul className="list-disc list-inside text-gray-700 ml-4">
            <li>fraud detection</li>
            <li>credit scoring analytics</li>
            <li>customer retention prediction</li>
            <li>violent behavior detection</li>
            <li>paperwork automation</li>
            <li>customer service analytics</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-normal text-center mb-10">Key Use Cases for Industries</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
        {sections.map((section) => (
          <AccordionItem
            key={section.name}
            name={section.name}
            isOpen={openSection === section.name}
            toggle={() => toggleSection(section.name)}
          >
            {section.details}
          </AccordionItem>
        ))}
      </div>
    </div>
  );
};

// Sub-Component to handle the UI and Transition logic for each item
const AccordionItem = ({ name, children, isOpen, toggle }) => {
  const { contentRef, maxHeight } = useCollapseTransition(isOpen);

  return (
    <div className="mb-0">
      <div
        className="flex justify-between items-center py-4 cursor-pointer"
        onClick={toggle}
      >
        <h3 className="text-lg font-normal">{name}</h3>
        {/* SVG icon with thicker stroke and rotate transition */}
        <div className="w-6 h-6 flex items-center justify-center">
          <svg
            className={`w-6 h-6 text-blue-500 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-45' : 'rotate-0'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            strokeWidth="2.5" // Thicker cross/plus sign
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </div>

      {/* Content wrapper for smooth height transition */}
      <div
        ref={contentRef}
        style={{ maxHeight: maxHeight }}
        className="overflow-hidden transition-all duration-300 ease-in-out"
      >
        {/* Inner content with final padding */}
        <div className="pb-4 text-gray-700 text-sm leading-relaxed pr-4">
          {children}
        </div>
      </div>

      <hr className="border-t border-gray-300" />
    </div>
  );
};


export default MLKeyUses;