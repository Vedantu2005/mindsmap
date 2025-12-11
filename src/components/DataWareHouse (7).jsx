import React, { useState } from "react";

const Page6 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      title: "Marketing & Sales",
      description: (
        <>
          <p className="mb-3">
            Get a broad view of your customers to deliver granular offers and
            predict customer demand. Stay on top of market trends, identify
            prospects, and track the performance of your marketing campaigns.
            Let your customer feel heard with our data warehouse analysis
            services.
          </p>
          <p>
            Establishing unified customer analytics helps you compete more
            strategically and deliver the right message at the right time.
          </p>
        </>
      ),
    },
    {
      title: "Logistics & Transportation",
      description: (
        <>
          <p className="mb-3">
            Manage all aspects of transport operations within an all-in-one
            solution and gain a 360-degree view into your supply chains.
          </p>
          <p className="mb-3">
            Paired with analytics, data warehouse analysis services help achieve:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>End-to-end visibility</li>
            <li>Route optimization</li>
            <li>Effective inventory management</li>
            <li>Automated warehouse management</li>
            <li>Smart order management</li>
            <li>Optimum supplier performance</li>
          </ul>
        </>
      ),
    },
    {
      title: "Manufacturing",
      description: (
        <>
          <p className="mb-3">
            Eliminate silos across the factory floor and establish a unified
            knowledge hub for easier decision-making. Track inventory turnover,
            automate plant capacity management, and enable better manufacturing
            forecasts.
          </p>
          <p>
            Adopt big data analytics for sharper contract negotiations and
            easier product portfolio management. Identify and prevent costly
            outages and market fluctuations.
          </p>
        </>
      ),
    },
    {
      title: "Healthcare",
      description: (
        <>
          <p className="mb-3">
            Improve patient outcomes and increase the productivity of your
            healthcare teams by aggregating a complete patient’s journey in one
            place. Combine EHR/EMR information with diagnostic data, follow-ups,
            and long-term outcomes to personalize clinical decisions.
          </p>
          <p>
            Optimize insurance claims and payments, effectively monitor patient
            conditions, and adopt smart resource planning with data warehouse
            implementation.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8 flex flex-col gap-8">
      {/* Header Section */}
      <div className="text-center px-2">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
          Data Warehouse and BI Use Cases
        </h1>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          Our cloud data warehouse consultants deliver data warehouse projects
          across industries to help organizations solve unique business
          challenges.
        </p>
      </div>

      {/* Tabs Section */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Navigation */}
        <div className="flex flex-wrap md:flex-col gap-2 md:w-1/3">
          {items.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`flex items-center gap-3 px-3 sm:px-4 py-3 w-full rounded-lg border-l-4 transition-all text-left ${
                currentIndex === idx
                  ? "bg-blue-100 border-blue-500 font-semibold"
                  : "bg-white border-transparent hover:bg-gray-100"
              }`}
            >
              <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gray-300 rounded-full flex-shrink-0"></div>
              <span className="text-sm sm:text-base">{item.title}</span>
            </button>
          ))}
        </div>

        {/* Right Content */}
        <div className="md:w-2/3 bg-white p-4 sm:p-6 rounded-lg shadow-md">
          {items[currentIndex].description}
        </div>
      </div>
    </div>
  );
};

export default Page6;
