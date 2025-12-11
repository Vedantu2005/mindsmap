import React from 'react';

const Page5 = () => {
  return (
    <div className="bg-white shadow-lg py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">How You Can Benefit from It</h3>
          <p className="text-gray-700 text-base md:text-lg">
            Get the most of your data oceans with data engineering and advanced analytics.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              img: "/BigDataAnalytics/page5-1.svg",
              title: "Enhanced decision-making",
              desc: "Eliminate the tedious guesswork and take informed steps into the future."
            },
            {
              img: "/BigDataAnalytics/page5-2.svg",
              title: "Optimize costs",
              desc: "Real-time forecasting and monitoring for higher ROI and revenues."
            },
            {
              img: "/BigDataAnalytics/page5-3.svg",
              title: "Proactive problem-solving",
              desc: "Identify the potential roots of failures and asset breakdowns in real-time."
            },
            {
              img: "/BigDataAnalytics/page5-4.svg",
              title: "Enhanced customer experience",
              desc: "Generate personalized customer offers based on behavior."
            },
            {
              img: "/BigDataAnalytics/page5-5.svg",
              title: "Advanced analytic capabilities",
              desc: "High-level methods and tools to project future trends."
            },
            {
              img: "/BigDataAnalytics/page5-6.svg",
              title: "Risk mitigation",
              desc: "Minimized risks by optimizing complex decisions at scale and speed."
            },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl border-blue-200 border-2 p-6 text-center shadow-md shadow-blue-300 hover:shadow-xl transition-shadow">
              <img src={item.img} alt="" className="mx-auto mb-4 w-16 h-16 md:w-20 md:h-20"/>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm md:text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page5;
