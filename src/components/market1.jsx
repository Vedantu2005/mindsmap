// /src/components/market1.jsx

import React, { useState, useEffect } from 'react'; // Import useState and useEffect
// Import the icons you want to use
import { 
  FaApple, FaGoogle, FaAmazon, FaMicrosoft, FaFacebook, 
  FaShopify, FaSlack, FaSpotify, FaDropbox, FaPaypal, FaStripe 
} from 'react-icons/fa';

// Helper component for rendering each icon
const Logo = ({ icon }) => (
  <div className="flex-shrink-0 w-48 h-20 mx-8 flex items-center justify-center text-gray-500 text-5xl hover:text-black transition-colors duration-300">
    {icon}
  </div>
);

// Main Component
const Market1 = () => {
  // Array of 11 company icons
  const logos = [
    { id: 1, icon: <FaGoogle /> },
    { id: 2, icon: <FaApple /> },
    { id: 3, icon: <FaAmazon /> },
    { id: 4, icon: <FaMicrosoft /> },
    { id: 5, icon: <FaFacebook /> },
    { id: 6, icon: <FaShopify /> },
    { id: 7, icon: <FaSlack /> },
    { id: 8, icon: <FaSpotify /> },
    { id: 9, icon: <FaDropbox /> },
    { id: 10, icon: <FaPaypal /> },
    { id: 11, icon: <FaStripe /> }
  ];

  // --- NEW: State to hold the correct video source ---
  // A function to check window size and return the correct video path
  const getVideoSource = () => (window.innerWidth < 768 ? '/mobile.mp4' : '/market.mp4');
  
  // Set the initial video source when the component first renders
  const [videoSrc, setVideoSrc] = useState(getVideoSource());

  // --- NEW: Effect to listen for window resize events ---
  useEffect(() => {
    // This function will be called whenever the window is resized
    const handleResize = () => {
      setVideoSrc(getVideoSource());
    };

    // Add the event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component is removed
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // The empty array [] ensures this effect only runs once on mount

  return (
    <div className="font-sans">
      <div className="container mx-auto px-4 py-12 md:py-10">

        {/* ========== Trusted by Innovative Companies Section ========== */}
        <section className="text-center mb-16 md:mb-24">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-12">
            Trusted by Innovative Companies
          </h2>
          <div className="relative w-full overflow-hidden max-w-6xl mx-auto">
            <div className="flex animate-scroll ">
              {[...logos, ...logos].map((logo, index) => (
                <Logo key={index} icon={logo.icon} />
              ))}
            </div>
          </div>
        </section>

        {/* ========== Unified Data Analytics Solutions Section ========== */}
        <section className="text-center mb-16 md:mb-24 -mt-5">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Unified Data Analytics Solutions
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-base md:text-lg">
            Revolutionise your marketing & sales process by implementing AI-powered solutions for customer segmentation
            and analysis, content creation and optimization, personalized user experience and streamlined workflows.
          </p>
          <div className="w-full max-w-4xl mx-auto overflow-hidden mt-8">
            
            {/* --- UPDATED: Video with dynamic source --- */}
            <video
              key={videoSrc} // This key is crucial! It forces React to re-render the video element when the src changes.
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              {/* The src is now set dynamically from our state */}
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        {/* --- Contact Us Button Section --- */}
        <section className="flex justify-center -mt-10">
          <button 
            className="py-3 px-8 text-[#77bce8] font-semibold cursor-pointer rounded-md transition-all duration-300 ease-in-out border-[1px] border-[#77bce8] hover:bg-[#77bce8] hover:text-white hover:shadow-lg"
          >
            Contact Us
          </button>
        </section>

      </div>
    </div>
  );
};

export default Market1;