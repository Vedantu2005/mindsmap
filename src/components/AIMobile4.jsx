import React, { useState, useEffect, useRef } from "react";

const platforms = [
  {
    title: "iOS Mobile App Development",
    description:
      "We can aid you with the full-cycle of iOS mobile app development, from design to maintenance. Using Swift and Objective C, we develop scalable AI-powered mobile apps that help you get ahead of your competitors.",
    iconImg: "/icon-apple.svg", // New: Using SVG image path
  },
  {
    title: "Android Mobile App Development",
    description:
      "Win over any audience with a custom-made app developed by us. Build customer loyalty by creating a new level of convenience in the app experience.",
    iconImg: "/icon-android.svg", // New: Using SVG image path
  },
  {
    title: "Cross-Platform App Development",
    description:
      "Turn your vision into an outstanding app that takes your business to the next level. Go cross-platform and publish your app on multiple platforms, driving traffic and maximizing ROI.",
    iconImg: "/icon-phones.svg", // New: Using SVG image path
  },
];


const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return [isVisible, domRef];
};


const PlatformCard = ({ platform, isVisible, index }) => {
  // Stagger the animation timing
  const delay = index * 100;

  const animationClass = isVisible
    ? `opacity-100 translate-y-0`
    : `opacity-0 translate-y-10`;

  // **NEW STYLING CLASSES**
  const cardStylingClasses = `
    bg-white rounded-2xl p-8 relative overflow-hidden 
    border border-[#77bce8] shadow-lg
    transition-all duration-500 ease-out 
    transform hover:scale-[1.03] hover:shadow-blue-200/90
    h-full flex flex-col
  `;

  return (
    <div
      className={`${cardStylingClasses} ${animationClass}`} // Combined new styling and scroll animation
      style={{ transitionDelay: `${delay}ms` }}>
      
      {/* Icon Wrapper: The icon position needs adjustment due to the p-8 padding */}
      <div className="absolute left-0 top-0 w-20 h-24 -translate-x-1/2 -translate-y-1/2" 
           style={{ top: "30px", left: "0px" }}>
        <img
          src={platform.iconImg}
          alt={`${platform.title} icon`}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Content Wrapper: Adjusted padding/margin for content not to overlap icon */}
      <div className="pl-6 pt-2 mb-4">
        <h3 className="text-xl font-bold text-gray-800">{platform.title}</h3>
      </div>

      <p className="text-gray-600 leading-relaxed flex-grow text-base">
        {platform.description}
      </p>
    </div>
  );
};


export const AIExpansion = () => {
  const [isVisible, domRef] = useScrollAnimation(0.2);

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#D7F5F5] pt-16 pb-12 overflow-hidden rounded-xl shadow-inner shadow-teal-200/50 max-w-4xl mx-auto">
          <div className="max-w-3xl mx-auto relative z-10 text-center px-4">
            {" "}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4 mt-2">
              Unlock the power of custom ChatGPT for your mobile app
            </h2>
            <p className="text-base text-gray-700 max-w-2xl mx-auto mb-6">
              Enhance user experience, optimize app performance and make
              personalized recommendations with custom GPT solutions.
            </p>
            <button className="px-8 py-2 text-white font-semibold text-base bg-[#00B9CE] rounded-xl shadow-lg hover:bg-[#0092A8] transition duration-300 transform hover:scale-[1.02] active:scale-95">
              Explore the Benefits
            </button>
          </div>

          <img
            src="/art-banner-gpt-before.svg"
            alt="GPT logo pattern"
            className="absolute bottom-0 left-0 w-36 h-auto opacity-70 translate-y-1/4 -translate-x-1/4 sm:w-48"
            style={{ width: "200px", height: "auto" }}
          />


          <img
            src="/art-banner-chat-after.svg"
            alt="Chat bubble with question mark"
            className="absolute bottom-0 right-0 w-24 h-auto opacity-90 translate-y-1/4 translate-x-1/4 sm:w-32"
          />
        </div>
      </div>

      <div className="pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Reaching Users on Any Platform
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            AI and deep learning mobile app development are made easy with
            Mindmap AI. Our data scientists and software engineers can help you
            create an app compatible with both iOS and Android and make the most
            of your presence on Google Play and the Apple Store.
          </p>
        </div>

        <div
          ref={domRef}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <PlatformCard
              key={platform.title}
              platform={platform}
              isVisible={isVisible}
              index={index}
            />
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="px-8 py-3 border border-[#1a66cc] text-[#1a66cc] rounded-md hover:bg-[#1a66cc] hover:text-white transition cursor-pointer">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIExpansion;