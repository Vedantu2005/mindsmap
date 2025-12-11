import React from "react";

// --- Reusable Stat Card Component ---
const StatCard = ({
  percent,
  title,
  citation,
  bgColor,
  percentColor,
  citationColor,
}) => (
  <div
    // Styling the card with inline hex colors via Tailwind's bracket notation
    className={`
 flex flex-col items-center p-6 m-2 sm:m-4 rounded-xl shadow-lg border border-gray-100 h-full
 transition-all duration-300 ease-in-out transform hover:scale-[1.03] hover:shadow-2xl 
 cursor-pointer
 ${bgColor}
 [box-shadow:0_4px_15px_rgba(0,0,0,0.08)]
 `}
  >
    <div className={`text-5xl lg:text-6xl font-extrabold mb-4 ${percentColor}`}>
      {percent}
    </div>
    <p className="text-center text-base lg:text-lg mb-6 leading-relaxed text-[#666666] flex-grow">
      {title}
    </p>
    {/* Citation link with hover underline effect */}
    <a
      href="#"
      className={`text-base font-semibold ${citationColor} hover:underline`}
    >
      {citation}
    </a>
  </div>
);

// --- Reusable Benefit Card Component ---
const BenefitCard = ({ title, description }) => {
  // Inline SVG for a clean, reliable Checkmark icon
  const CheckmarkIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#40BFFF" // Blue color from the design
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );

  return (
    <div className="flex flex-col items-center text-center px-4 pt-8 pb-4 w-full sm:w-1/4 relative">
      {/* Checkmark Icon Container with Hover Animation */}
      <div
        className={`
     w-10 h-10 rounded-full flex items-center justify-center mb-4 
     bg-white border-2 border-[#40BFFF] shadow-md transition-transform duration-300 
     hover:scale-110 cursor-pointer z-10 // z-10 ensures it overlaps the lines
  `}
      >
        {/* Using the inline SVG for the checkmark icon */}
        <CheckmarkIcon />
      </div>

      <h3 className="text-lg font-bold mb-2 text-[#333333] whitespace-nowrap">
        {title}
      </h3>
      <p className="text-base text-[#666666]">{description}</p>
    </div>
  );
};

// --- Main Component ---
const TransformativeAI = () => {
  // Data for the statistics cards
  const statData = [
    {
      percent: "90%",
      title:
        "Businesses are implementing AI into their products to gain an edge over their competitors.",
      citation: "DemandSage",
      bgColor: "bg-[#E5F6FF]",
      percentColor: "text-[#007FFF]",
      citationColor: "text-[#00A6FF]",
    },
    {
      percent: "120%",
      title:
        "The expansion of the artificial intelligence market size is predicted for last year.",
      citation: "Exploding Topics",
      bgColor: "bg-[#FFF8E5]",
      percentColor: "text-[#FF8800]",
      citationColor: "text-[#FFA500]",
    },
    {
      percent: "99%",
      title:
        "of Fortune 500 firms are already using AI for product enhancement.",
      citation: "DemandSage",
      bgColor: "bg-[#E5FFF4]",
      percentColor: "text-[#00B060]",
      citationColor: "text-[#00D189]",
    },
    {
      percent: "30%",
      title:
        "30% of the expected business cost reductions will be due to AI adoption.",
      citation: "Quixy",
      bgColor: "bg-[#F5E5FF]",
      percentColor: "text-[#9900FF]",
      citationColor: "text-[#B300FF]",
    },
  ];

  // Data for the benefits cards
  const benefitData = [
    {
      title: "Refined Workflows",
      description:
        "Enhance the performance and productivity of your product by integrating AI into it.",
    },
    {
      title: "Personalized Customer Service",
      description:
        "Implement AI to deliver personalized responses and recommend tailored products and services.",
    },
    {
      title: "Improved Decision-Making",
      description:
        "Navigate from sentiment analysis to detailed real-time customer analytics effortlessly with AI.",
    },
    {
      title: "Sped up Innovation",
      description:
        "Utilize AI to drive product innovation and catalyze your industry, building a technological edge.",
    },
  ];

  return (
    <div className="font-sans py-16 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* --- Section 1: The Transformative Power of AI (Statistics) --- */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-4 text-[#333333]">
          The Transformative Power of AI
        </h2>
        <p className="text-center text-lg max-w-3xl mx-auto mb-12 text-[#666666]">
          We present the statistics that highlight the transformative impact of
          AI on modern business operations. It shows how machine learning is
          transforming the business landscape and driving meaningful value
          across sectors.
        </p>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statData.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </section>

      {/* --- Section 2: Benefits of AI Integration --- */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-4 text-[#333333]">
          Benefits of AI Integration Into Your Product
        </h2>
        <p className="text-center text-lg max-w-4xl mx-auto mb-16 text-[#666666]">
          Unleash disruptive efficiency and forget incremental improvements by
          wielding cutting-edge applications that go beyond streamlining
          operations — they eradicate inefficiencies at their root.
        </p>

        {/* Benefits Flow Container: This container manages the items and the line breaks */}
        <div className="flex flex-col sm:flex-row justify-between items-start relative mt-12">
          {/* The primary connector line (Only visible on larger screens) */}
          <div
            className="hidden sm:block absolute top-[53px] w-full h-0.5 bg-gray-200 z-0"
            style={{
              // This creates the continuous background line that the circles will overlap
              // We use custom calculated percentages to ensure it spans across the inner part of the four columns
              width: "75%",
              left: "12.5%",
              backgroundColor: "#87CEEB", // Light Blue color for the line
            }}
          />

          {/* Benefits Cards */}
          {benefitData.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default TransformativeAI;
