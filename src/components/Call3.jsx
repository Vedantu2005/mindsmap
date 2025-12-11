import React from 'react'

const Call3 = () => {
  return (
    <div className="py-10 sm:py-10 -mt-5 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Why Integrate Amazon Connect for Call Center?
          </h2>
        </div>

        {/* Features Section */}
        <div className="space-y-8">
          {/* Feature 1 */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
            <img src="/page3-1.svg" alt="" className="w-16 h-16 md:w-24 md:h-24" />
            <div className="text-left">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Telephony, omnichannel, automation
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                Contact center automation: trusted telephony providers, high-quality audio, web and mobile chats, omnichannel outbound campaigns and simplified task management in one place.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
            <img src="/page3-2.svg" alt="" className="w-16 h-16 md:w-24 md:h-24" />
            <div className="text-left">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Agent experience</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Agent capabilities rolled into one: task management, skill-based routing, customer data and workforce schedules. Efficient case management for customer issues tracking and handling with care.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
            <img src="/page3-3.svg" alt="" className="w-16 h-16 md:w-24 md:h-24" />
            <div className="text-left">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">AI & Machine Learning</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Real time customer troubleshooting with relevant content recommendations, caller authentication and fraud risk detection, and sentiment analysis. Detailed call summarization and follow-up thoughts.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
            <img src="/page3-4.svg" alt="" className="w-16 h-16 md:w-24 md:h-24" />
            <div className="text-left">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Forecasting, capacity planning & agent scheduling
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                Accurate short and long term contact forecasting for better operational efficiency optimization and smart resource planning. Meeting scheduling and insights on agent staffing and capacity.
              </p>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
            <img src="/page3-5.svg" alt="" className="w-16 h-16 md:w-24 md:h-24" />
            <div className="text-left">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Setup, administration & reporting</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Self-service and flow builder for automated customer experiences, real-time and historical analytics for faster decision-making and better agent productivity. Call recording for employees performance review.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10">
          <p className="text-base sm:text-lg mb-4">
            Want to improve customer satisfaction in your call center? Develop best-of-breed AI call center solutions.
          </p>
          <button className="border border-[#00B4D8] px-6 py-3 rounded-lg text-sm sm:text-base hover:bg-[#00B4D8] cursor-pointer hover:text-white transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Call3
