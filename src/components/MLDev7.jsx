import React from 'react';

const CallToActionMLD = () => {
  return (
    
    <div className="bg-[#13324c] text-white mt-4 py-6 md:py-8 lg:py-10 relative overflow-hidden rounded-xl shadow-2xl mx-auto max-w-6xl">
      
      {/* Background Brain Icon (left) - Adjusted opacity and placement for better match */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 opacity-[0.08] text-blue-300/30 hidden md:block">
        <svg
          className="w-48 h-48 lg:w-64 lg:h-64"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Using a simplified brain path for better visual coherence */}
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79l5.8-5.8c-1.12.9-1.89 2.1-2.14 3.48L5.05 15.54c.1.34.2.68.32 1.01l4.76-4.76c1.07.61 2.31.96 3.65.96.95 0 1.87-.22 2.68-.62L18.9 19.34c-1.57.94-3.37 1.48-5.26 1.48-.54 0-1.07-.05-1.57-.14zM12 4c.53 0 1.05.06 1.55.16L9.67 9.67c-.43-1.07-.46-2.28-.08-3.39L12 4zm5.95 2.05L16 7.9c.73 1.04 1.13 2.24 1.13 3.5v.01c0 .24-.01.48-.03.71l-1.92-1.92c-.12-.12-.25-.23-.39-.33l1.83-1.83zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm-2-7h4v2h-4v-2z" />
        </svg>
      </div>

      {/* Background Chat Icon (right) - Adjusted opacity and placement for better match */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-[0.08] text-blue-300/30 hidden md:block">
        <svg
          className="w-48 h-48 lg:w-64 lg:h-64"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
        </svg>
        {/* Question mark moved for better placement relative to the chat bubble */}
        <text x="18" y="8" font-family="Arial" font-size="6" fill="currentColor" className="opacity-70">?</text>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-orange-400 mb-6">
          Looking for custom ML algorithms?
        </h3>
        <p className="text-base md:text-lg text-white max-w-2xl mx-auto mb-8 leading-relaxed">
          Talk to us about how we can help you cut down time and money costs, automate
          operations, and enhance efficiency.
        </p>
        
        {/* Button with solid cyan color as seen in the image */}
        <button className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-3 px-8 rounded-md shadow-lg transition duration-300 ease-in-out">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default CallToActionMLD;
