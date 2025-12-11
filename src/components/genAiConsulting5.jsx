import React from 'react';

const GlobalRecognitionAndStack = () => {
  // --- Data for the Recognition Badges ---
  const awsBadges = [
    { src: "/badge-aws.webp", alt: "AWS Partner" },
    { src: "/aws-data-analytics.webp", alt: "AWS Data Analytics Specialty" },
    { src: "/aws-data-analytics.webp", alt: "AWS Database Specialty" },
    { src: "/aws-data-analytics.webp", alt: "AWS Machine Learning Specialty" },
    { src: "/AWS-Developer-Associate.webp", alt: "AWS Developer Associate" },
    { src: "/AWS-Developer-Associate.webp", alt: "AWS Solutions Architect Associate" },
    { src: "/aws-solution-architect.webp", alt: "AWS Solutions Architect Professional" },
    { src: "/logo-aws-certified-cloud-practitioner.webp", alt: "AWS Cloud Practitioner" },
  ];

  const microsoftBadges = [
    { src: "/microsoft-certified-expert.webp", alt: "Microsoft Expert" },
    { src: "/power-bi-data-analyst.webp", alt: "Microsoft Data Analyst Associate" },
    { src: "/power-bi-data-analyst.webp", alt: "Microsoft Data Engineer Associate" },
    { src: "/power-bi-data-analyst.webp", alt: "Microsoft AI Engineer Associate" },
    { src: "/microsoft-certified-azure.webp", alt: "Microsoft Security Administrator Associate" },
    { src: "/microsoft-certified-azure.webp", alt: "Microsoft Fundamentals" },
  ];

  const otherBadges = [
    { src: "/confluent-apache-kafka.webp", alt: "Other Certification 1" },
    { src: "/data-bricks-spark.webp", alt: "Other Certification 2" },
    { src: "/confluent-apache-kafka.webp", alt: "Other Certification 3" },
  ];

  // --- Data for the Generative AI Tools Stack ---
  const genAIToolsTopRow = [
    { src: "/logo-gpt-4.svg", alt: "GPT-4" },
    { src: "/logo-gpt-4.svg", alt: "Whisper" },
    { src: "/logo-gpt-4.svg", alt: "DALL-E 2", },
    { src: "/logo-llama-2.svg", alt: "LLaMA 2" },
    { src: "/logo-MidJourney.svg", alt: "MidJourney"},
    { src: "/logo-BERT.svg", alt: "BERT" },
  ];

  const genAIToolsBottomRow = [
    { src: "/logo-stanza.webp", alt: "Stanza", },
    { src: "/logo-flair.webp", alt: "Flair", },
    { src: "/logo-spacy.svg", alt: "spaCy", },
    { src: "/logo-hugging-face.webp", alt: "Hugging Face"},
  ];

  const renderBadges = (badges) => (
    <div className="flex justify-center items-center flex-wrap gap-4 md:gap-6 mt-6">
      {badges.map((badge, index) => (
        <div 
          key={index} 
          className="w-20 md:w-24 h-auto transition-transform duration-300 hover:scale-105 hover:shadow-lg rounded-lg"
          title={badge.alt}
        >
          {/* Ensure the image paths are correct for your public folder */}
          <img src={badge.src} alt={badge.alt} className="w-full h-auto object-contain" />
        </div>
      ))}
    </div>
  );

  const renderTools = (tools) => (
    <div className="flex justify-center flex-wrap gap-x-10 gap-y-6">
      {tools.map((tool, index) => (
        <div key={index} className="flex flex-col items-center justify-start text-center group">
          <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center p-2">
            <img 
              src={tool.src} 
              alt={tool.alt} 
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <p className="text-sm text-gray-800 whitespace-pre-line mt-2 font-medium">
            {tool.label}
          </p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="font-sans antialiased text-gray-800 bg-white">
      {/* ========================================================================= */}
      {/* Global Recognition Section */}
      {/* ========================================================================= */}
      <section className="md:py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            Global Recognition of Mindmap AI
          </h1>
          <p className="text-md text-gray-600 mb-6 max-w-3xl mx-auto">
            A team of skilled data scientists, machine learning engineers, and AI specialists ready to provide generative AI consultancy and develop advanced solutions.
          </p>

          <div className="space-y-6">
            {/* Row 1: AWS Badges */}
            {renderBadges(awsBadges)}

            {/* Row 2: Microsoft Badges */}
            {renderBadges(microsoftBadges)}

            {/* Row 3: Other Badges */}
            {renderBadges(otherBadges)}
          </div>
        </div>
      </section>

      <hr className="my-8 border-gray-100 max-w-4xl mx-auto" />

      {/* ========================================================================= */}
      {/* Our Stack of Generative AI Tools Section */}
      {/* ========================================================================= */}
      <section className="px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Our Stack of Generative AI Tools
          </h2>
          <p className="text-md text-gray-600 mb-6">
            Delivering innovative solutions to tackle your biggest business challenges.
          </p>

          <div className="space-y-1">
            {/* Top Row of Tools */}
            {renderTools(genAIToolsTopRow)}

            {/* Bottom Row of Tools */}
            {renderTools(genAIToolsBottomRow)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GlobalRecognitionAndStack;