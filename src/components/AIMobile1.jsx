import React from "react";

export default function AIMobileAppPath() {
  return (
    <div className="w-full bg-white font-inter py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto text-center space-y-5 mb-12">
        <p className="text-gray-700 leading-relaxed">
          AI-based mobile apps are becoming the smarter way to serve business purposes and boost revenue. Personalized user experiences, security, effective design, feature-richness, and performance are the key elements of a successful app. And that’s where AI comes into play. AI has proven extremely useful in mobile app development.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Mindsmap AI can turn your idea into reality. Let our team create an app that climbs the download charts and brings the highest business revenue.
        </p>
        <div>
          <button className="px-8 py-3 border border-[#1a66cc] text-[#1a66cc] rounded-md hover:bg-[#1a66cc] hover:text-white transition cursor-pointer">
            Let's Start
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Step-by-Step AI Mobile App Development
        </h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          The process of AI mobile software development involves various stages. Each of them is important — by skipping any one of them, a powerful solution cannot be built.
        </p>
      </div>

      <div className="w-full max-w-6xl mx-auto overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        <div className="min-w-[900px] md:min-w-0 flex justify-center">
          <img
            src="/Step-by-Step AI Mobile App Development.png"
            alt="Step-by-Step AI Mobile App Development roadmap"
            className="w-full max-w-none md:max-w-4xl rounded-lg shadow-md object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
