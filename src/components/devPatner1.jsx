import React from 'react';
import Company from './Company';
const GenerativeAIValueSection = () => {
  // --- Data for Company Logos ---
  const trustedCompanies = [
    { src: "/logo-company-8.png", alt: "Company 8" },
    { src: "/logo-gsma.png", alt: "GSMA" },
    { src: "/logo-extrance.png", alt: "Extrance" },
    { src: "/logo-interprefy.png", alt: "Interprefy" },
    { src: "/logo-nae.png", alt: "Nae" },
    // Add all your logo paths here
  ];

  // --- Data for Value Cards ---
  const valueCards = [
    {
      title: "Streamline Business Processes",
      description: (
        <>
          Implement generative AI Algorithms into your digital core to build up human capabilities, and maximize the efficiency of your back-office operations. Our <span className="text-blue-600 font-semibold">ML engineers</span> embed generative AI models in your automation solutions to set new performance frontiers.
        </>
      ),
      icon: "/icon-iot-alt.svg", // Replace with your icon path
      cardColor: "border-blue-200 bg-blue-50/50",
    },
    {
      title: "Improve Customer Satisfaction",
      description: (
        <>
          Solve your customer care problem by having an always-on conversational model. Have a generative AI tool that produces personalized responses to customer queries, <span className="text-blue-600 font-semibold">recommends</span> relevant products, and provides self-service options across channels.
        </>
      ),
      icon: "/icon-like-2.svg", // Replace with your icon path
      cardColor: "border-green-200 bg-green-50/50",
    },
    {
      title: "Perform Large-Scale Analysis",
      description: (
        <>
          From <span className="text-blue-600 font-semibold">sentiment analysis</span> to market research, generative AI platforms support your enterprise sense-making with fast, effort-free analytics. Change the way you interrogate your data, augment existing data products, and get millions of insights with a few clicks.
        </>
      ),
      icon: "/icon-data-analysis-alt.svg", // Replace with your icon path
      cardColor: "border-yellow-200 bg-yellow-50/50",
    },
    {
      title: "Accelerate Innovation Pace",
      description: (
        <>
          Bring unprecedented speed of innovation to all areas of your business - from production design to visual identity to real-time personalization. Leverage our <span className="text-blue-600 font-semibold">AI development services</span> to stimulate new product creation and get into the fast lane of your industry.
        </>
      ),
      icon: "/icon-analytics-3.svg", // Replace with your icon path
      cardColor: "border-purple-200 bg-purple-50/50",
    },
  ];

  return (
    <div className="font-sans antialiased text-gray-800 bg-white">
      {/* ========================================================================= */}
      {/* Trusted By Companies Section */}
      {/* ========================================================================= */}
      <section className="pt-24">
        <Company />
      </section>

      {/* ========================================================================= */}
      {/* Capture Accelerating Value Section */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Capture Accelerating Value of Generative Artificial Intelligence
          </h2>
          <p className="text-lg text-gray-600">
            Fend off inefficiencies and reinvent your business models through generative AI applications.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {valueCards.map((card, index) => (
            <div
              key={index}
              // Card Styling: rounded, shadow, border, background color based on cardData
              className={`
                relative p-6 md:p-8 rounded-xl shadow-lg border-2
                ${card.cardColor} 
                text-left overflow-hidden
                transition-all duration-500 ease-in-out
                hover:shadow-2xl hover:scale-[1.02]
              `}
            >
              {/* Card Content */}
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                {card.title}
              </h3>
              <p className="text-md text-gray-700 leading-relaxed pr-8">
                {card.description}
              </p>

              {/* Background Icon/Graphic (for illustrative effect) */}
              {/* Note: I'm using a simple SVG structure placeholder here. Replace with your exact image path if you have complex graphics. */}
              <div className="absolute bottom-0 right-0 p-4 opacity-50 transition-transform duration-500 group-hover:scale-110">
                <img src={card.icon} alt={`${card.title} icon`} className="w-16 h-16 md:w-20 md:h-20" />
                {/* For the visual fidelity, you might need to use background images or complex positioning with your actual graphic assets. 
                    I've provided a simple image placeholder here. */}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GenerativeAIValueSection;