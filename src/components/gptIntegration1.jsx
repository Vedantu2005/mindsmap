import React from 'react';
import Company from '../components/Company'
// A placeholder component for the service item video/icon
const ServiceMedia = ({ src, alt, isVideo = false }) => {
  if (isVideo) {
    // Assuming small, looping background videos for visual effect
    return (
      <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 flex justify-center items-center p-4">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-auto object-contain rounded-lg" // Adjust height/width as needed
          src={src}
          title={alt}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
  // Fallback or icon placeholder if not a video (e.g., for the benefits section which seemed to use icons/small images)
  return (
    <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
      <img
        src={src}
        alt={alt}
        className="h-16 w-16 object-contain text-blue-500 transition-transform duration-300 group-hover:scale-110"
      />
    </div>
  );
};

const ChatGPTIntegrationServicesPage = () => {

  // --- Data for the second section (Benefits) ---
  const benefitCards = [
    {
      icon: '/icon-implementing.svg',
      title: 'Automation',
      description:
        'Go next-level with workplace automation and offset the tedium of business minutia. From document management to ChatGPT customer service, integrating AI virtual assistant enables you to streamline repetitive tasks and increase business productivity.',
    },
    {
      icon: '/icon-finance-banking-alt.svg',
      title: 'Cost Optimization',
      description:
        'Leverage the disruptive new technology to eliminate cost bottlenecks inherent in low-value tasks. Our ChatGPT services allow you to strategically deploy NLP-driven models into labor-intensive processes across sales, customer service, and other critical areas.',
    },
    {
      icon: '/bi-icon-analysis.svg',
      title: 'Business Process Reinvention',
      description:
        'Accelerate the pace of business innovation and exponentially enhance productivity. With our ChatGPT development services, you can reinvent each aspect of your company to better manage business opportunities, prepare for the future, and stay ahead of the competition.',
    },
    {
      icon: '/icon-data-processing.svg',
      title: 'Personalization at-Scale',
      description:
        'Show up for your customers 24/7 by automating tailored response generation based on your customer data. ChatGPT takes personalization to new heights, offloads your human agents, and increases customer satisfaction thanks to always-on service.',
    },
  ];

  // --- Data for the third section (Services) ---
  const servicesData = [
    {
      title: 'Generative AI Consulting',
      description:
        'Equipped with extensive knowledge of NLP and AI, our experts help you navigate the transformative impacts of Generative AI and plan your solutions built on the leading foundation models.',
      listItems: ['Integration case analysis', 'Proof of Concept', 'Data analysis', 'Project estimation/planning'],
      media: { src: '/generative-ai-1.mp4', alt: 'Generative AI Consulting video' }, // Assuming a video file
      mediaLeft: false, // Text on left, video on right
    },
    {
      title: 'Model Fine-Tuning',
      description:
        'As a part of our business integration services, we customize generative AI tools to overcome their limitations and maximize their benefits for your specific business case through comprehensive model training.',
      listItems: [
        'Large language model fine-tuning',
        'API integration',
        'Data architecture modernization',
        'Cloud migration',
      ],
      media: { src: '/generative-ai-2.mp4', alt: 'Model Fine-Tuning video' },
      mediaLeft: true, // Video on left, text on right
    },
    {
      title: 'GPT Integrations into Existing Systems',
      description:
        'Our ChatGPT company helps you bring in the unmatched capabilities of GPT into your business application through GPT APIs. Enhance the functionality of your existing software with our seamless integration.',
      listItems: [
        'Feasibility analysis',
        'Integration planning/prototyping',
        'Integration and testing',
        'Maintenance and Improvement',
      ],
      media: { src: '/generative-ai-3.mp4', alt: 'GPT Integrations video' },
      mediaLeft: false,
    },
    {
      title: 'Custom Solution Development Based on GPT',
      description: (
        <>
          Our <span className="font-semibold text-blue-600">machine learning engineers</span> develop innovative services
          on top of ChatGPT for your custom enterprise AI applications. With{' '}
          <span className="font-semibold text-blue-600">generative AI</span> built-in, you get a powerful solution
          designed for complex data processing tasks.
        </>
      ),
      listItems: [
        'Custom GPT solutions development',
        'ChatGPT customer service',
        'NLP software development',
        'Business automation solutions',
      ],
      media: { src: '/generative-ai-4.mp4', alt: 'Custom Solution Development video' },
      mediaLeft: true,
    },
  ];

  // --- Service Card Component (for Services Section) ---
  const ServiceCard = ({ title, description, listItems, media, mediaLeft }) => {
    const content = (
      <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-center">
        {/* Media Block (Video) */}
        {mediaLeft && <ServiceMedia src={media.src} alt={media.alt} isVideo={true} />}

        {/* Text Block */}
        <div className={`w-full ${mediaLeft ? 'md:pl-0 md:pr-16' : 'md:pr-0 md:pl-16'}`}>
          <h3
            className={`text-2xl md:text-3xl font-bold mb-6 ${
              !mediaLeft ? 'text-right md:text-left' : 'text-left'
            }`}
          >
            {title}
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
          <ul className={`space-y-3 ${!mediaLeft ? 'text-right md:text-left' : 'text-left'}`}>
            {listItems.map((item, i) => (
              <li key={i} className="flex items-start text-gray-700 group cursor-pointer transition-all duration-300">
                <span className="text-blue-500 mr-3 text-lg transition-transform duration-300 group-hover:scale-125">
                  &bull;
                </span>
                <span className="group-hover:text-blue-600 transition-colors duration-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Media Block (Video) - for right side */}
        {!mediaLeft && <ServiceMedia src={media.src} alt={media.alt} isVideo={true} />}
      </div>
    );

    // Swap order on mobile to keep text first, then use flex for desktop
    return (
      <div className="py-12 md:py-16 border-b border-gray-100 last:border-b-0">
        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${
            !mediaLeft ? 'md:flex md:flex-row-reverse' : 'md:flex md:flex-row'
          } items-center`}
        >
          {/* Mobile layout: text then media */}
          <div className="block md:hidden">
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
          </div>
          <div className="block md:hidden mb-6">
            <ServiceMedia src={media.src} alt={media.alt} isVideo={true} />
          </div>
          <ul className="space-y-3 mb-8 block md:hidden">
            {listItems.map((item, i) => (
              <li key={i} className="flex items-start text-gray-700">
                <span className="text-blue-500 mr-3 text-lg">&bull;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Desktop layout: uses the complex content structure with conditional text/media order */}
          <div className="hidden md:block w-full">{content}</div>
        </div>
      </div>
    );
  };

  // --- Main Component Render ---
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* 1. Trusted by Innovative Companies Section */}
      <section className="py-18 text-center">
        <Company />
      </section>

      {/* 2. Benefits of ChatGPT Business Integration Services Section */}
      <section className="md:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Benefits of ChatGPT Business Integration Services
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Make generative AI part of your stack to introduce automation and reduce operational costs.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-12">
            {benefitCards.map((card, index) => (
              <div
                key={index}
                className="flex items-start p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 group"
              >
                <ServiceMedia src={card.icon} alt={card.title} isVideo={false} />
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Horizontal Line Separator --- */}
      <hr className="my-8 border-gray-100 max-w-6xl mx-auto" />

      {/* 3. Our ChatGPT Integration Services Section */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our ChatGPT Integration Services</h2>
        <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto px-4">
          We offer a full suite of ChatGPT development services that make Generative AI actionable for your business.
        </p>

        {servicesData.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </section>
    </div>
  );
};

export default ChatGPTIntegrationServicesPage;