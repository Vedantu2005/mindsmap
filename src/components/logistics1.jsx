// /src/components/market1.jsx

import React from 'react'; 
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
const Logistic1 = () => {
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

  
  return (
    <div className="font-sans">
      <div className="container mx-auto px-4 py-5 md:py-10">

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

      </div>
    </div>
  );
};

export default Logistic1;