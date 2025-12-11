import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export default function CaseStudiesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const caseStudies = [
    {
      image: "/food-supply-chain-management.webp", // Replace with your image path
      title: "Food Supply Chain Management – Digitization with Azure Data Lake & IoT",
      description: "The client works in the food sector. They were looking for a smart tech solution in supply chain management. They asked the Mindsmap AI team to help with migration to Azure-based data lake.",
      details: "Our team has created an Azure-based cloud infrastructure for efficient data analysis and business process visualization."
    },
    {
      image: "/delivering-data-intelligence-for-chemical-industry.webp", // Replace with your image path
      title: "Delivering Data Intelligence for Chemical Industry",
      description: "The client works in the chemical production sector. They needed a tech solution for smart chemical mixture composition analysis.",
      details: "Our engineers have developed an analytical solution to review chemical mixture compositions, glean data insights and visualize it for easier decision making, and analyze sales in real time."
    },
    {
      image: "/bi-solution-for-unification.webp", // Replace with your image path
      title: "BI Solution for Unification & Construction Projects Analysis",
      description: "The client is a data management company. They contacted Mindsmap AI to develop complex analytical solution for several construction projects.",
      details: "We've created a solution for efficient data aggregation and analysis, insight extraction and visualization, and smart unified reporting. Using our software, the client visualizes business efficiency with ease."
    },
    {
      image: "/data-lake-implementation-big-data-processing.webp", // Replace with your image path
      title: "Data Lake Implementation for Big Data Processing and Visualization",
      description: "The client is a UK construction company. They wanted to upscale their AI-based platform for data extraction and analytics. They asked our team to ease the process of data collection, processing, and analysis.",
      details: "We've suggested BI for real-time workflow monitoring. As a result, our solution has significantly improved the client's KPIs through streamlined document gathering,and order processing."
    },
    {
      image: "/bi-implementation.webp", // Replace with your image path
      title: "BI Implementation for Baby Care Mobile Application",
      description: "The client develops mobile apps for the babycare industry. The client needed to ease data collection, reporting, and enhance the UI with technology. Our tech team has implemented a robust BI solution to eliminate data anomalies and handle incomplete issues. We also offered some changes to the reporting functionality.",
      details: "It resulted in improved UI, reporting options and personalized user recommendations."
    },
    {
      image: "/ml-for-player-retention-prediction.webp", // Replace with your image path
      title: "ML for Player Retention Prediction in a Mobile Game",
      description: "The client is a top game developer. They develop F2P games. They asked the Mindsmap AI team to help with player retention prediction. We managed user behavior data collection and analysis to predict the next move of the users with AI.",
      details: "We've built an AI-powered module for efficient player churn prediction. As a result, the player prediction accuracy has increased by 92 percent."
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(caseStudies.length / 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(caseStudies.length / 3)) % Math.ceil(caseStudies.length / 3));
  };

  const visibleCards = caseStudies.slice(currentIndex * 3, currentIndex * 3 + 3);

  return (
    <div className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Customer Success
          </h2>
          <p className="text-gray-600 text-lg">
            See how our clients benefit from real-time analytics.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors duration-300"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors duration-300"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {visibleCards.map((study, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 leading-tight min-h-[4rem] group-hover:text-blue-600 transition-colors duration-300">
                    {study.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {study.description}
                  </p>

                  <p className="text-gray-700 text-sm leading-relaxed">
                    {study.details}
                  </p>

                  {/* View Details Link */}
                  <button className="flex items-center gap-2 text-blue-500 font-semibold hover:text-blue-700 transition-colors duration-300 group/link">
                    View Details
                    <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <button className="px-8 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:scale-105">
            View all case studies
          </button>
        </div>
      </div>
    </div>
  );
}