import React, { useEffect, useRef } from "react";

export default function BenefitsCarousel() {
  const trackRef = useRef(null);

  const benefits = [
    "Data Architecture Consulting",
    "Data Automation",
    "Data Safety & Scalability",
    "Low-Cost Data Storage",
    "Better Operational Efficiency",
    "Top-Performing Business",
    "Insights from Data in Seconds",
    "Easy Analytics for Everyone",
    "Smart Data Visualization",
  ];

  useEffect(() => {
    const track = trackRef.current;
    let index = 0;

    const slide = () => {
      index++;
      if (index >= benefits.length) index = 0;
      track.style.transform = `translateX(-${index * 260}px)`;
    };

    const interval = setInterval(slide, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-white py-16 text-center overflow-hidden">
      {/* Title */}
      <h2 className="text-4xl font-bold mb-3">Benefits for Your Business</h2>
      <p className="text-gray-600 max-w-3xl mx-auto mb-12">
        Get the most of modern data architecture consulting and unlock the power of your data with clarity and speed.
      </p>

      {/* Carousel Area */}
      <div className="relative max-w-6xl mx-auto">
        {/* Single Horizontal Dashed Line */}
        <div className="absolute top-[50%] left-0 right-0 border-t-[5px] border-dashed border-orange-500 "></div>

        <div className="overflow-hidden py-14">
          <div
            ref={trackRef}
            className="flex transition-transform duration-700 ease-in-out"
            style={{ width: "max-content" }}
          >
            {[...benefits, ...benefits].map((text, i) => (
              <div key={i} className="w-[260px] flex flex-col items-center relative">
                {/* alternate positioning */}
                {i % 2 === 0 ? (
                  <>
                    <p className="mb-6 font-medium text-gray-800">{text}</p>
                    <div className="w-6 h-6 bg-white border-[6px] border-orange-500 rounded-full relative top-[0px]"></div>
                  </>
                ) : (
                  <>
                    <div className="w-6 h-6 bg-white border-[6px] border-orange-500 rounded-full relative top-[0px]"></div>
                    <p className="mt-6 font-medium text-gray-800">{text}</p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Button */}
      <button className="mt-12 px-8 py-3 border border-blue-500 text-blue-600 rounded-md hover:bg-blue-50 transition">
        Contact us
      </button>
    </div>
  );
}
