import React, { useState, useEffect, useRef } from 'react';

const aiFeatures = [
  {
    title: 'Prediction Engine',
    description: "Get the most out of AI to predict and interpret user behavior, preferences and buying intentions. Improve ROI by identifying user interactions within your app, offering customized recommendations and predicting their next moves.",
    image: '/ai-mobapp-prediction-engine.jpeg',
    imagePosition: 'right',
  },
  {
    title: 'Personalized Engine',
    description: "Empower your app with a personalized engine that prevents the overload of irrelevant information and curates only the type of content the user is interested in. By infusing personalization into your AI mobile app content, you save yourself an irreplaceable position in the world of apps and drive a great wellspring of income.",
    image: '/ai-mobapp-personalized-engine.jpeg',
    imagePosition: 'left',
  },
  {
    title: 'AI-Driven Visual Search',
    description: "If you want an app that scales, make a shift from text search to visual search, it's fast, convenient, and saves plenty of time. Machine learning eases the pain of visual searches in your mobile app. ML technology learns from your clients' queries and provides them with up-to-date search results that best match their needs. Integrating AI visual search enables you to focus on the user's intent and encourage faster and more accurate search results.",
    image: '/ai-mobapp-ai-driven-visual-search.jpeg',
    imagePosition: 'right',
  },
  {
    title: 'Image Recognition',
    description: "From healthcare and commerce to banking and entertainment, image recognition has revolutionized them all. Use image recognition to identify millions of products such as books, household items, groceries, and so on. Adapt image recognition to effectively examine patients and diagnose diseases, detect counterfeit goods, and battle against piracy. Consolidate facial recognition technology to create an app that keeps your children safe online and makes sure they aren't exposed to inappropriate content or unsuitable ads.",
    image: '/ai-mobapp-image-recognition.jpeg',
    imagePosition: 'left',
  },
  {
    title: 'Real-Time AI-Powered Video Analytics',
    description: "Reduce man-hours by deploying real-time, on-premise video analysis. Benefit from video analytics monitoring crowd behavior and preventing outbreaks of violence. Using the vast potential of object detection and pose estimation in surveillance systems, you save money for your business and ensure the highest level of security.",
    image: '/ai-mobapp-real-time-ai-powered-video-analytics.jpeg',
    imagePosition: 'right',
  },
  {
    title: 'Data Extraction',
    description: "Leverage artificial intelligence to derive valuable insights into your users so you can better tailor your services to their needs. Use this information to promote your app and increase your profit margins. Save time with automated data extraction from any scanned document or image and convert them into text.",
    image: '/ai-mobapp-data-extraction.jpeg', // Using the correct file name based on your selection
    imagePosition: 'left',
  },
];


const useScrollAnimation = (threshold = 0.5) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
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



const FeatureBlock = ({ feature, index }) => {
  const [isVisible, domRef] = useScrollAnimation(0.2); // Trigger when 20% of element is visible
  const isImageRight = feature.imagePosition === 'right';

  const fadeClass = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10';

  return (
    <div
      ref={domRef}
      className={`max-w-7xl mx-auto py-16 transition-all duration-1000 ease-out ${fadeClass}`}
    >
      <div className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 ${isImageRight ? '' : 'md:flex-row-reverse'}`}>

        <div className="w-full md:w-1/2 px-4 space-y-4">
          <h3 className="text-3xl font-bold text-gray-800">
            {feature.title}
          </h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            {feature.description}
          </p>
        </div>

        <div className="w-full md:w-1/2 relative flex justify-center md:justify-start lg:justify-center">
          <div className="relative p-2 rounded-[2rem] bg-white shadow-2xl shadow-blue-500/10 w-auto">
            <div className={`absolute -inset-4 z-0 ${isImageRight ? 'left-0' : 'right-0'} w-full h-full bg-blue-50/70 rounded-[3rem] filter blur-3xl opacity-50 hidden sm:block`} />
            
            <div className="relative z-10 rounded-[1.8rem] overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="max-w-full w-auto h-auto rounded-[1.8rem]"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/400x300/e0f2fe/0c4a6e?text=Image+Missing";
                  }}
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export const AIinMobileDev = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      
      {/* --- Header Section --- */}
      <div className="pt-20 pb-12 text-center bg-gray-50/50">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 max-w-4xl mx-auto px-4">
          Artificial Intelligence in Mobile App Development
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Let our skilled team use artificial intelligence to empower your app.
        </p>
      </div>

      <div className="divide-y divide-gray-100">
        {aiFeatures.map((feature, index) => (
          <FeatureBlock 
            key={feature.title} 
            feature={feature} 
            index={index} 
          />
        ))}
      </div>

      <div className="h-20"></div>
    </div>
  );
};

export default AIinMobileDev;
