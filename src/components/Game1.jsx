import React from 'react'

const Game1 = () => {
  return (
    <div className="bg-white font-sans">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-10">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Key Expertise
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            We share our expertise for you to make it to the top charts.
          </p>
        </div>

        {/* --- HEADING FOR MOBILE --- */}
        {/* Visible only on mobile, placed above the reordered grid items */}
        <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-10 text-center md:hidden">
          NLP for Aspect-Based Sentiment Analysis
        </h3>

        {/* Content Section - Top margin is reduced on mobile as the heading above now has it */}
        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <div className="text-center md:text-left order-2 md:order-1">
            
            <h3 className="hidden md:block text-2xl font-bold text-gray-800 mb-4">
              NLP for Aspect-Based Sentiment Analysis
            </h3>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Want to learn what players like about your games most? Collect data from forums and social media channels and analyze it in a few clicks. Gain insights to readjust your game development plans and player retention strategies with automated player review analysis.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Classify players' reviews by topics such as interface, characters, game speed issues, music, etc. to understand the direction for further game development and improvements.
            </p>
            <button className="mt-8 px-8 py-3 border border-[#77bce8] text-base font-medium rounded-md text-black cursor-pointer bg-white hover:bg-[#77bce8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Contact Us
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

export default Game1;
