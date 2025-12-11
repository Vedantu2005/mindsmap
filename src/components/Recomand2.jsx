import React from 'react'

const Recomand2 = () => {
  return (
    <div className='-mt-5'>
      {/* Top Section - No changes needed here */}
      <div className="text-center px-4 sm:px-6 py-8 sm:py-10">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Why Personalize</h2>
        <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed">
          Customer engagement is getting more and more difficult for online and brick-and-mortar businesses alike. Empowered their social networks and their devices, digital era consumers are increasingly controlling shopping process and dictating WHAT they want and WHERE and WHEN they want it.
        </p>
      </div>

      <div className="px-4 sm:px-6 py-10 sm:py-10 ">
        <h1 className="text-center mb-14 font-bold text-black text-3xl">We Develop Solutions That Can Help Your Business</h1>

        <h2 className="text-xl sm:text-2xl font-bold mb-8 text-center lg:hidden">
          Content Recommendations
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-10">
          
          <div className="max-w-xl text-center lg:text-left order-2 lg:order-1">
            
            <h2 className="text-xl sm:text-2xl font-bold mb-4 hidden lg:block">
              Content Recommendations
            </h2>

            <p className="mb-4 text-gray-700 leading-relaxed">
              Increase engagement and decrease bounce rate with personalized content recommendations. This advanced capability automatically selects the right content for each visitor. Recommendations are based on real-time behavior, visitor profiles, and similar journeys.
            </p>
            <div>
              <h1 className="text-3xl text-[#77bce8]">25% faster</h1>
              <p className="text-[#a6a6a6]">users can find desired content</p>
            </div>
          </div>

          <div className="w-full sm:w-4/5 md:w-2/3 lg:w-96 order-1 lg:order-2">
            <img
              src="/RS2.webp"
              alt="NLP Services"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recomand2;