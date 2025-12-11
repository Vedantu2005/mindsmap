import React from "react";

// Define the data for the four benefit cards
const benefitCardsData = [
  {
    title: "Strategy and Consulting",
    description:
      "Get professional advisory on data science and software development from experienced data science providers. We help our clients shape their business strategies, estimate upcoming projects, and select the right technologies.",
    points: [
      "Data science consulting",
      "Machine learning consulting",
      "Business case analysis",
      "Project planning",
    ],
    icon: "/icon-consulting.svg",
  },
  {
    title: "Data Engineering",
    description:
      "Establish high-performance infrastructure to make better decisions and add traceability to your information flow. Our engineers prepare your existing input for the model development process and optimize data management.",
    points: [
      "Optimization of database and data warehouse platforms",
      "Platform migration",
      "Data discovery and augmentation",
      "ETL pipeline development",
    ],
    icon: "/icon-data-alt.svg",
  },
  {
    title: "Solution Development",
    description:
      "Our machine learning engineers train and validate AI-based models and deploy them in a tailored app. Following the ModelOps approach, we initiate a continuous operational cycle leading to high-quality model production.",
    points: [
      "Collection and exploration",
      "Custom model development",
      "Model training and evaluation",
      "Data science app development",
    ],
    icon: "/icon-web-dev-2.svg",
  },
  {
    title: "Maintenance and Optimization",
    description:
      "Ensure the long-term value of data analytics investment, and build models to address evolving challenges. We monitor your model performance, enrich it with new input, and continually re-evaluate its accuracy.",
    points: [
      "Model performance monitoring",
      "Data consistency analysis",
      "Model enrichment",
      "Stability monitoring and drift prevention",
    ],
    icon: "/icon-data-analysis-alt.svg",
  },
];

// Helper component for the individual benefit cards
const BenefitCard = ({ title, description, points, icon }) => (
  <div className="relative p-6 bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col h-full transition-shadow duration-300 hover:shadow-2xl">
    <div className="flex items-start mb-4">
      {/* Main icon for the card title */}
      <img
        src={icon}
        alt={`${title} Icon`}
        className="w-8 h-8 mr-3 opacity-80"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/placeholder-icon.svg";
        }}
      />
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    </div>
    <p className="text-sm text-gray-600 mb-4 flex-grow">{description}</p>
    <ul className="space-y-2 text-sm text-gray-700 mt-auto">
      {points.map((point, index) => (
        <li key={index} className="flex items-start">
          <svg
            className="w-4 h-4 text-cyan-500 mt-1 mr-2 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.707-4.293a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L10 11.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2z"
              clipRule="evenodd"
              fillRule="evenodd"
            ></path>
          </svg>
          <span className="text-sm">{point}</span>
        </li>
      ))}
    </ul>
    {/* Abstract background illustration/icon placed at the bottom right */}
    <img
      src={icon} // Reusing the icon for the abstract design element
      alt=""
      className="absolute bottom-[-10px] right-[-10px] w-20 h-20 opacity-30 pointer-events-none" // Changed opacity-10 to opacity-30
      aria-hidden="true"
      onError={(e) => {
        e.target.style.display = "none";
      }}
    />
  </div>
);

// Main component
const DataScienceBenefits = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 1. Banner Section (Top Box) */}
        <div className="relative bg-gradient-to-r from-blue-50 to-cyan-50 p-8 sm:p-12 rounded-2xl shadow-xl overflow-hidden mb-16 border-b-4 border-cyan-400">
          {/* Illustration - art-banner-iot-before.svg (Left/Top) */}
          <img
            src="/art-banner-iot-before.svg" // Direct root-relative path
            alt="IoT illustration background"
            className="absolute top-0 left-0 w-32 h-auto opacity-70 transform -translate-x-1/4 -translate-y-1/4 sm:w-40"
            aria-hidden="true"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />

          {/* Illustration - art-banner-chat-after.svg (Right/Bottom) */}
          <img
            src="/art-banner-chat-after.svg" // Direct root-relative path
            alt="Chat illustration background"
            className="absolute bottom-0 right-0 w-24 h-auto opacity-70 transform translate-x-1/4 translate-y-1/4 sm:w-32"
            aria-hidden="true"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-4">
              Need data science talent for your project?
            </h1>
            <p className="text-base text-gray-600 mb-8 font-medium">
              Stand up to data complexities and turn your assets into revenue
              with our end-to-end data analysis services.
            </p>

            <button className="px-8 py-2 text-white font-semibold text-base bg-[#00B9CE] rounded-xl shadow-lg hover:bg-[#0092A8] transition duration-300 transform hover:scale-[1.02] active:scale-95">
              Consult an expert
            </button>
          </div>
        </div>

        {/* 2. Main Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Benefit from Our Data Science as a Service Model
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            Benefit from the latest analytics capabilities without investing in
            in-house competencies.
          </p>
        </div>

        {/* 3. 2x2 Grid Section (Benefit Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefitCardsData.map((card, index) => (
            <BenefitCard
              key={index}
              title={card.title}
              description={card.description}
              points={card.points}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataScienceBenefits;
