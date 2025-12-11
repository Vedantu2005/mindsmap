import React from "react";


const servicesData = [
  {
    icon: "/icon-person-check.svg",
    title: "Agile Client Data Strategy",
    description:
      "From data vision to actionable insights: define how your data will be collected, stored, processed, and used.",
  },
  {
    icon: "/icon-data.svg",
    title: "Data Ecosystem Implementation",
    description:
      "Develop a high-performing data ecosystem to create business value and increase revenue.",
  },
  {
    icon: "/icon-data-architecture.svg",
    title: "Data Warehouse Strategy",
    description:
      "Implement modern data architecture services to make your data reliable, consistent, and complete.",
  },
  {
    icon: "/icon-structured-data.svg",
    title: "Data Catalog",
    description:
      "Enhance your data accessibility across your whole business and enable actionable insights for every department.",
  },
  {
    icon: "/icon-data-engineering.svg",
    title: "Data Management",
    description:
      "Increase your business datasets' visibility, enabling smooth data search and analysis with **Big Data engineering**.",
  },
  {
    icon: "/icon-bi-analytics.svg",
    title: "Analytics Process Optimization",
    description:
      "Prevent data errors and rework with modern data services architecture developed according to your needs.",
  },
];

// --- Service Card Component ---
const ServiceCard = ({ icon, title, description }) => {
  // Function to render the description with bold formatting for the specific term
  const renderDescription = () => {
    // Splits the string by the bold markers (**) and processes parts
    return description.split("**").map((part, index) => {
      // Every odd index (1, 3, 5, ...) is the bolded text
      if (index % 2 !== 0) {
        return <strong key={index}>{part}</strong>;
      }
      // Every even index (0, 2, 4, ...) is plain text
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="p-6 h-full bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-lg transition duration-300 flex flex-col items-center text-center">
      {/* Replaced IconComponent with img tag pointing to the public path */}
      <img
        src={icon}
        alt={`${title} icon`}
        // Updated size to w-[72px] h-[80px] as requested
        className="w-[72px] h-[80px] mb-4 mx-auto"
      />
      <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-1">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        {renderDescription()}
      </p>
    </div>
  );
};

// --- Main Component ---
const ArchitectureServices = () => {
  // Custom styles for the new button and background colors
  const bannerBgStyle = {
    backgroundColor: "#E0F7FA", // Lighter shade of #00B4D8 (Cyan 50 from Tailwind palette, but customized)
    borderColor: "#00B4D8", // Use the main button color for the border
  };

  const buttonStyle = {
    backgroundColor: "#00B4D8", // New requested button color
    boxShadow:
      "0 10px 15px -3px rgba(0, 180, 216, 0.5), 0 4px 6px -2px rgba(0, 180, 216, 0.05)",
  };

  return (
    <div className="font-sans antialiased bg-gray-50 min-h-screen">
      {/* Container with max width and padding */}
      <div className="max-w-6xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        {/* Top Global Description */}
        <p className="text-center text-gray-600 max-w-xl mx-auto mb-10 text-sm">
          Modern data architecture consultants design scalable data architecture
          to accelerate your time to insights.
        </p>

        {/* Blue Banner Section - Revised with custom colors */}
        <div
          className="p-8 sm:p-12 rounded-xl shadow-lg mb-16 relative overflow-hidden text-center border-2"
          style={bannerBgStyle}>
          {/* Background graphics: Left Graph (Faded Bars and Line) */}
          <div className="absolute left-0 bottom-0 h-full w-1/4 opacity-50 z-0">
            <svg
              className="h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none">
              {/* Bars - Colors adjusted to be in the light cyan/blue family */}
              <rect
                x="10"
                y="55"
                width="10"
                height="40"
                className="fill-[#B2EBF2]"></rect>
              <rect
                x="25"
                y="40"
                width="10"
                height="55"
                className="fill-[#80DEEA]"></rect>
              <rect
                x="40"
                y="65"
                width="10"
                height="30"
                className="fill-[#4DD0E1]"></rect>
              {/* Line Graph */}
              <path
                d="M 10 60 C 20 20, 40 40, 50 25"
                fill="none"
                stroke="#00B4D8"
                strokeWidth="2.5"
                strokeLinecap="round"></path>
              <circle cx="10" cy="60" r="2" fill="#00B4D8"></circle>
              <circle cx="50" cy="25" r="2" fill="#00B4D8"></circle>
            </svg>
          </div>

          {/* Background graphics: Right Squares */}
          <div className="absolute top-0 right-0 h-full w-1/4 opacity-50 z-0 flex items-start justify-end p-4">
            <div className="grid grid-cols-4 gap-1 transform scale-y-125">
              <div className="w-3 h-3 bg-[#80DEEA]"></div>
              <div className="w-3 h-3 bg-[#B2EBF2]"></div>
              <div className="w-3 h-3 bg-[#4DD0E1]"></div>
              <div className="w-3 h-3 bg-[#4DD0E1]"></div>

              <div className="w-3 h-3 bg-[#B2EBF2]"></div>
              <div className="w-3 h-3 bg-[#80DEEA]"></div>
              <div className="w-3 h-3 bg-[#B2EBF2]"></div>
              <div className="w-3 h-3 bg-[#B2EBF2]"></div>
            </div>
          </div>

          {/* Foreground Content: Centered */}
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
              Store Data in Various Silos? Need Data Aggregation to Do
              Analytics?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Develop adaptable data architecture for fast and easy generation
              of business value from your data.
            </p>
            {/* Updated Button Style: Custom color and shadow */}
            <button
              className="text-white font-semibold text-lg py-3 px-8 rounded-lg hover:brightness-110 transition duration-300"
              style={buttonStyle}>
              Consult an expert
            </button>
          </div>
        </div>

        {/* Main Services Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
            Modern Data Architecture Engineering Services
          </h2>
          <p className="text-center text-gray-500 max-w-2xl mx-auto mb-10">
            Modern data architecture engineering services to level up your
            business and unlock success.
          </p>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </section>

        {/* Data Lake Footer Section */}
        <section className="mt-16 text-center max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Data Lake Architecture Development and Integration
          </h2>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            Strong data storage and management by implementing data architecture
            services and{" "}
            <span className="text-blue-600 font-semibold">
              Big Data development
            </span>
            . Develop data lakes to add robustness and reliability to your data,
            and provide performance at scale and real-time analytics. Leave
            stale data concerns and start getting value from your data.
          </p>

          <button className="px-8 py-3 border border-[#1a66cc] text-[#1a66cc] rounded-md hover:bg-[#1a66cc] hover:text-white transition cursor-pointer">
            Talk to an expert
          </button>
        </section>
      </div>
    </div>
  );
};

export default ArchitectureServices;
