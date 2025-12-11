import React from "react";

export default function Exper() {
  return (
    <div className="relative w-full bg-gradient-to-b from-white via-white to-[#e8f2fa] flex flex-col items-center pt-5 pb-0 overflow-hidden">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">
        Our Expertise
      </h2>
      <p className="text-gray-600 text-center mb-14">
        Our expertise to increase business efficiency with custom web solutions.
      </p>

      <div className="flex flex-col md:flex-row gap-8 max-w-6xl px-5 justify-center relative z-10">
        <div className="bg-white w-full md:w-[500px] shadow-md rounded-lg border border-[#dfe9f3] p-8 relative overflow-hidden">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Custom Web Application Development from Scratch
          </h3>
          <p className="text-gray-700 italic mb-4">
            Have a perfect idea for a web app that will reinvent your business
            processes and workflow?
          </p>
          <p className="text-gray-600 leading-relaxed">
            We are ready to help you at all phases of professional web
            development from requirements gathering and prototyping to final
            release and after-sale maintenance and support.
          </p>

          <img
            src="/icon-web-dev-2.svg"
            alt="Web Development Icon"
            className="absolute bottom-[-15px] right-[-15px] opacity-60 w-24 h-24 pointer-events-none select-none"
          />
        </div>

        <div className="bg-white w-full md:w-[500px] shadow-md rounded-lg border border-[#dfe9f3] p-8 relative overflow-hidden">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Web App Modernization and Reengineering
          </h3>
          <p className="text-gray-700 italic mb-4">
            Have a legacy system that doesn’t fit your fast growing business but
            loved by your users?
          </p>
          <p className="text-gray-600 leading-relaxed">
            We have solid experience in transforming client’s legacy software
            into robust working business solutions saving all the data and
            functionality.
          </p>

          <img
            src="/icon-engine-alt.svg"
            alt="Engineering Icon"
            className="absolute bottom-[-15px] right-[-15px] opacity-60 w-24 h-24 pointer-events-none select-none"
          />
        </div>
      </div>

      <div className="mt-12 mb-20 relative z-20">
        <button className="px-8 py-3 border border-[#1a66cc] text-[#1a66cc] rounded-md hover:bg-[#1a66cc] hover:text-white transition cursor-pointer">
          Let's Start
        </button>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-0 pointer-events-none">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[120px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,83.29c-70.27,0-125.09-42.94-210.52-42.94S634.9,83.29,555.34,83.29,413.8,40.35,328.37,40.35,188.1,83.29,102.67,83.29,0,40.35,0,40.35V120H1200V40.35s-70.27,42.94-214.34,42.94Z"
            fill="#e8f2fa"
          ></path>
        </svg>
      </div>
    </div>
  );
}
