// ConsultingPage.jsx

import React from 'react';

// Data for the 'Why You Need' section cards
const whyConsultingData = [
  {
    number: 1,
    text: "We provide expertise to identify and select the right AI business case.",
    bgColor: 'bg-sky-400',
  },
  {
    number: 2,
    text: "We provide support to select the scalable AI tools for your projects.",
    bgColor: 'bg-sky-400',
  },
  {
    number: 3,
    text: "We develop a robust plan to implement AI into your business.",
    bgColor: 'bg-cyan-400', // A slightly different blue as in the image
  },
  {
    number: 4,
    text: "We implement quality-proof AI solutions to help you achieve your business goals.",
    bgColor: 'bg-sky-500',
  },
];

const ConsultingPage = () => {
  return (
    <div className="bg-white font-sans">
      <main className="container mx-auto">

        {/* Section 1: Why You Need Consulting Services (UPDATED) */}
        <section className="bg-[#EBF7FF] py-10 px-6 sm:px-10 ">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Why You Need Consulting Services
            </h2>
            <p className="text-gray-600 text-lg">
              Align your business objectives with the right AI solutions with our consulting services.
            </p>
          </div>

          {/* Grid container for the cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mt-20 mx-auto max-w-6xl">
            {whyConsultingData.map((item) => (
              <div
                key={item.number}
                className="relative pt-6" // Added relative positioning and top padding
              >
                {/* The Number Box - Positioned absolutely */}
                <div className={`absolute -top-4 left-4 flex items-center justify-center w-12 h-12 ${item.bgColor} text-white font-bold text-2xl rounded-lg shadow-md`}>
                  {item.number}
                </div>

                {/* The Card Content */}
                <div
                  className="bg-white p-6 pt-10 rounded-2xl shadow-md  transition-all duration-300 ease-in-out h-full"
                >
                  <p className="text-gray-700 text-base">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: AI Consulting Services */}
        <section className="py-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              AI Consulting Services
            </h2>
            <p className="text-gray-600 text-lg">
              Leverage the best of AI expertise to expand your markets and generate revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 max-w-6xl mx-auto">

            {/* Card 1: New AI Product Development */}
            <div className="rounded-2xl p-8 relative overflow-hidden border border-[#77bce8] shadow-lg transition-shadow duration-300 hover:shadow-blue-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                New AI Product Development
              </h3>
              <p className="text-gray-600 mb-4">
                Validate your idea at an early stage, minimizing the risks of a project failure and reducing development costs.
              </p>
              <p className="text-gray-600 mb-4">
                Our AI consultants will help you get ready for a successful product launch by identifying the scope of work, selecting appropriate tools and technologies, and estimating the costs and resources.
              </p>
              <p className="text-gray-600 z-10">
                With 10 years of experience in AI consulting and development, we'll be glad to accompany you at all stages from an idea to support.
              </p>
              <img src="/icon-ml-model-dev.svg" alt="Decorative Icon" className="absolute bottom-[-12px] right-[-25px] w-28 h-28" />
            </div>

            {/* Card 2: AI Integration into Existing Product */}
            <div className="rounded-2xl p-8 relative overflow-hidden border border-[#77bce8] shadow-lg transition-shadow duration-300 hover:shadow-blue-200">
              <img src="/icon-quality-2.svg" alt="Decorative Icon" className="absolute bottom-[-15px] right-[-15px] w-24 h-24" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                AI Integration into Existing Product
              </h3>
              <p className="text-gray-600 mb-4">
                Meet market demands and stay ahead of your competitors by strengthening your existing solution with AI.
              </p>
              <p className="text-gray-600 mb-4">
                Let our AI experts do an exploratory analysis, review data processes and IT infrastructure to offer the best solution to empower your business.
              </p>
              <p className="text-gray-600">
                Mindswap AI² AI engineers will bring their expertise and knowledge to make sure your digital transformation goes smoothly.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: CTA Button */}
        <div className="text-center py-5">
          <button className="bg-white text-black font-semibold py-3 cursor-pointer px-8 border-2 border-[#77bce8] rounded-lg hover:bg-[#77bce8] hover:text-white transition-colors duration-300 shadow-md">
            Get a consultation
          </button>
        </div>

      </main>
    </div>
  );
};

export default ConsultingPage;