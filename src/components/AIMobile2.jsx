import React, { useState, useEffect, useRef } from 'react';

const platforms = [
  {
    title: 'iOS Mobile App Development',
    description: "We can aid you with the full-cycle of iOS mobile app development, from design to maintenance. Using Swift and Objective C, we develop scalable AI-powered mobile apps that help you get ahead of your competitors.",
    iconImg: '/icon-apple.svg', // New: Using SVG image path
  },
  {
    title: 'Android Mobile App Development',
    description: "Win over any audience with a custom-made app developed by us. Build customer loyalty by creating a new level of convenience in the app experience.",
    iconImg: '/icon-android.svg', // New: Using SVG image path
  },
  {
    title: 'Cross-Platform App Development',
    description: "Turn your vision into an outstanding app that takes your business to the next level. Go cross-platform and publish your app on multiple platforms, driving traffic and maximizing ROI.",
    iconImg: '/icon-phones.svg', // New: Using SVG image path
  },
];

const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold });

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
  const delay = index * 100;

  const animationClass = isVisible 
    ? `opacity-100 translate-y-0` 
    : `opacity-0 translate-y-10`;

  return (
    <div 
      className={`bg-white py-8 px-6 rounded-xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out 
                  transform hover:scale-[1.02] ${animationClass} h-full flex flex-col relative overflow-hidden`} 
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start mb-4">
        <div 
          className="absolute left-0 top-0 w-20 h-24 -translate-x-1/2 -translate-y-1/2" 
          style={{ top: '30px', left: '0px' }} 
        >
          <img 
            src={platform.iconImg} 
            alt={`${platform.title} icon`} 
            className="w-full h-full object-contain"
          />
        </div>
        
        <div className="pl-6 pt-2">
           <h3 className="text-xl font-bold text-gray-800">{platform.title}</h3>
        </div>
      </div>
      
      <p className="text-gray-600 leading-relaxed flex-grow mt-2 text-base">
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
          <div className="max-w-3xl mx-auto relative z-10 text-center"> 
            <img 
              src="/art-banner-gpt-before.svg" 
              alt="GPT logo pattern" 
              className="absolute bottom-0 left-0 w-48 h-auto opacity-70 translate-y-1/4 -translate-x-1/4"
              style={{ width: '200px', height: 'auto' }}
            />

            <img 
              src="/art-banner-chat-after.svg" 
              alt="Chat bubble with question mark" 
              className="absolute top-4 right-4 w-28 h-auto opacity-90 sm:w-36 sm:top-2 sm:right-2"
            />

            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6 mt-4">
              Unlock the power of custom ChatGPT for your mobile app
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8"> {/* Further reduced description width */}
              Enhance user experience, optimize app performance and make personalized recommendations with custom GPT solutions.
            </p>
            
            <button className="px-10 py-3 text-white font-semibold text-lg bg-[#00B9CE] rounded-xl shadow-lg hover:bg-[#0092A8] transition duration-300 transform hover:scale-[1.02] active:scale-95"> {/* Adjusted button color */}
              Explore the Benefits
            </button>
          </div>
        </div>
      </div>
      
      <div className="pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Reaching Users on Any Platform
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            AI and deep learning mobile app development are made easy with Mindmap AI. Our data scientists and software engineers can help you create an app compatible with both iOS and Android and make the most of your presence on Google Play and the Apple Store.
          </p>
        </div>

        <div 
          ref={domRef}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        >
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
          <button className="px-8 py-3 text-lg border-2 border-[#D6D6D6] text-gray-700 font-medium rounded-xl hover:border-gray-400 hover:text-gray-900 transition duration-300">
            Contact Us
          </button>
        </div>
      </div>

    </div>
  );
};

const aiApplications = [
  {
    title: 'Interaction',
    position: 'top-left',
    description: "AI can take customer experience to the next level. The game-changing innovation improves customer satisfaction and the success of your business.",
  },
  {
    title: 'Reasoning',
    position: 'top-right',
    description: "Deep reasoning of AI enables seamless problem-solving. It streamlines the process of drawing valid conclusions and making predictions from the available data, text, and images.",
  },
  {
    title: 'Recommendation',
    position: 'bottom-right',
    description: "AI recommendation systems provide vivid insights into how to reshape business strategy and plan your next move. By introducing recommendations to your AI mobile app, you'll not only improve brand perception but sell more with less effort.",
  },
  {
    title: 'Learning',
    position: 'bottom-left',
    description: "AI streamlines the software development process, making it easier for you to write and review code, identify errors and manage software testing efficiently.",
  },
];


const DiagramNode = ({ title, description, position, isAnimated, index }) => {
  const isLeft = position.includes('left');
  const isTop = position.includes('top');
  
  const animationClasses = isAnimated 
    ? `opacity-100 translate-x-0 transition-all duration-700 ease-out`
    : `opacity-0 ${isLeft ? 'translate-x-[-50px]' : 'translate-x-[50px]'}`;

  const delay = 300 + index * 150;

  return (
    <div 
      className={`absolute w-[calc(50%-120px)] sm:w-[35%] lg:w-[30%] z-10 p-2 md:p-0 ${animationClasses} hidden sm:block`} /* Hide on small screens and use width calc */
      style={{ 
        [isTop ? 'top' : 'bottom']: isTop ? '15%' : '15%', 
        [isLeft ? 'left' : 'right']: isLeft ? '0' : '0',
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className={`flex flex-col ${isLeft ? 'text-right items-end' : 'text-left items-start'}`}>
        <h3 className={`text-lg font-bold text-gray-800 mb-1 ${isLeft ? 'mr-4 sm:mr-10' : 'ml-4 sm:ml-10'}`}>
          {title}
        </h3>
        <div className={`relative w-full h-[1px] my-2 hidden sm:block ${isLeft ? 'pr-4 sm:pr-10' : 'pl-4 sm:pl-10'}`}>
          <div className={`absolute top-0 w-full h-full bg-blue-400/50 ${isLeft ? 'right-0' : 'left-0'}`} />
          <div className={`absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-600 ${isLeft ? 'left-0' : 'right-0'}`} />
          <div className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-blue-400 ${isLeft ? 'right-0' : 'left-0'}`} />
        </div>
        <p className="text-sm sm:text-xs text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};


export const AIMobileUses = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="min-h-screen bg-white font-inter py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          AI to Develop Mobile Apps
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base">
          Machine learning, deep learning, and NLP are the three major technologies to implement artificial intelligence 
          into mobile apps. They interact, reason, learn and recommend.
        </p>
      </div>

      <div className="relative mx-auto max-w-6xl h-auto min-h-[550px] flex flex-col sm:flex-row sm:items-center sm:justify-center">
        
        {/* Mobile: Stacked view for small screens (centered on top) */}
        <div className="sm:hidden w-full mb-8 text-center">
            <h3 className="text-lg font-bold text-center text-gray-800 mb-4">Key Applications</h3>
            {aiApplications.map((app, index) => (
                <div key={app.title} className="p-4 border-l-4 border-blue-600 shadow-sm rounded-lg bg-gray-50 mb-4">
                    <h4 className="font-semibold text-gray-800 mb-1">{app.title}</h4>
                    <p className="text-sm text-gray-600">{app.description}</p>
                </div>
            ))}
        </div>

        <div 
          className={`relative w-48 h-48 sm:w-64 sm:h-64 transition-opacity duration-1000 ${isAnimated ? 'opacity-100' : 'opacity-0'} mx-auto sm:mx-0`}
          style={{ 
            animation: isAnimated ? 'pulse 2s infinite ease-in-out' : 'none'
          }}
        >
          <img 
            src="/ai-circle.svg" 
            alt="AI Core Diagram" 
            className="w-full h-full object-contain"
          />
          <style>
            {`
              @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.03); }
              }
            `}
          </style>
        </div>
        
        {aiApplications.map((app, index) => (
          <DiagramNode
            key={app.title}
            title={app.title}
            description={app.description}
            position={app.position}
            isAnimated={isAnimated}
            index={index}
          />
        ))}


      </div>

      <div className="max-w-4xl mx-auto text-center mt-16 space-y-6">
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
          Get powerful AI mobile applications that will rank high in the Apple Store and on Google Play.
        </p>
        <button className="px-6 py-2 sm:px-8 sm:py-3 border border-[#1a66cc] text-[#1a66cc] rounded-md hover:bg-[#1a66cc] hover:text-white transition cursor-pointer text-sm sm:text-base">
          Request a Quote
        </button>
      </div>

      <div className="h-16"></div>
    </div>
  );
};

export default AIMobileUses;
