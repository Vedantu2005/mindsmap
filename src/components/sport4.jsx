import React from 'react'

const Sport4 = () => {
  return (
    <div className="bg-white font-sans">
      <div className="max-w-6xl mx-auto py-10 px-4 sm:px-6 lg:py-10 -mt-5 lg:-mt-10">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-10 text-center md:hidden">
         NLP for Feedback Analytics
        </h3>

        {/* Content Section - Top margin is reduced on mobile as the heading above now has it */}
        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <div className="text-center md:text-left order-2 md:order-1">
            
            <h3 className="hidden md:block text-2xl font-bold text-gray-800 mb-4">
              NLP for Feedback Analytics
            </h3>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Measure your sports team brand in social media in a click. Use NLP to know what your target audience thinks of your brand. Segment your fans by age, gender, interests and use these insights for cutting-edge fan sport engagement and brand promotion.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Find out how your rivalries are performing with AI in sports solutions. Gather and analyze sports fan feedback in social media to outsmart them.
            </p>
            <button className="mt-8 px-8 py-3 border border-[#77bce8] text-base font-medium rounded-md text-black cursor-pointer bg-white hover:bg-[#77bce8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Let's Talk
            </button>
          </div>

          {/* Right Image Content (Order is swapped on mobile) */}
          <div className="relative flex items-center justify-center order-1 md:order-2">
            <div className="relative z-10">
              <img 
                className="object-cover" 
                src="/market1.webp" 
                alt="Aspect-based sentiment analysis on a laptop screen" 
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Sport4;
