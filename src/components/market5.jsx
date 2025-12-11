import React from 'react';

const Market5 = () => {

  const services = [
    {
      icon: <img src="/service1.svg" alt="Consulting Icon" className="w-16 h-16 mx-auto" />,
      title: 'Consulting',
      description: 'We are ready to consult you on the strategy for upgrading and enriching your business with AI focusing on your goals and values.'
    },
    {
      icon: <img src="/service3.svg" alt="AI Development Icon" className="w-16 h-16 mx-auto" />,
      title: 'AI-Powered Marketing Software Development',
      description: <>Experienced with marketing firms, our team targets your needs during the development of high-performing <span className="text-[#77bce8] cursor-pointer font-semibold">AI-based solutions.</span></>
    },
    {
      icon: <img src="/service4.svg" alt="Predictive Analytics Icon" className="w-16 h-16 mx-auto" />,
      title: 'Predictive Analytics Solutions for Marketing and Advertising Firms',
      description: 'Our team can assist you in developing accurate and state-of-the-art predictive analytics solutions catered to your business\' specifics and needs.'
    }
  ];

  const optimizationPoints = [
    'Centralized ad management',
    'Ad inventory audit: ad descriptors and metrics',
    'Campaign metrics and revenue forecasting',
    'Recommendations to increase campaign performance',
    'Automated ad generation',
    'Automated budget allocation across multiple channels',
    'Cross-channel ad performance tracking',
    'Automated bid adjustments',
    'Data-driven attribution modeling',
    'Customizable unified reporting'
  ];

  return (
    <div className="bg-white font-sans">
      
      {/* --- Section 1: Advertising Spend Optimization --- */}
      <section className="py-16 md:py-10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 px-4">
            <div>
              {/* <div className="absolute top-4 -left-4 w-full h-full bg-blue-100/70 rounded-2xl"></div> */}
              <img src="/market8.webp" alt="Advertising Spend Optimization" className="relative w-full lg:-mt-38"/>
            </div>

            {/* Text Content Column */}
            <div className="w-full md:w-7/12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Advertising Spend Optimization</h2>
              <p className="text-gray-600 mb-6">Impact your marketing and advertising spend by implementing smart data analytics solutions.</p>
              <ul className="space-y-2 mb-6">
                {optimizationPoints.map((point, index) => (
                  <li key={index} className="flex items-center">
                    <span className="flex-shrink-0 w-2.5 h-2.5 bg-[#77bce8] rounded-full mr-3"></span>
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 font-medium mb-6">What challenges do you face?</p>
              <button className="py-2 px-6 text-[#77bce8] font-semibold rounded-md transition-all duration-300 cursor-pointer ease-in-out border border-[#77bce8] hover:bg-[#77bce8] hover:text-white">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* --- Section 2: Our Services --- */}
      <section className="py-1 md:py-5">
        <div className="container mx-auto max-w-6xl px-4">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-gray-600 text-lg">
              Improve your customer journey with our AI custom solutions – big data analytics, predictive analytics, machine learning, computer vision, NLP – all at your fingerprints to create more effective customer touchpoints.
            </p>
          </div>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
            {services.map((service, index) => (
              <div key={index} className="text-center p-6">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          
          {/* Footer */}
          <div className="text-center">
            <p className="text-gray-700 font-medium text-lg mb-6">Want to make a breakthrough in marketing with our robust AI solutions?</p>
            <button className="py-2 px-6 text-[#77bce8] font-semibold rounded-md transition-all duration-300 ease-in-out border border-[#77bce8] hover:bg-[#77bce8] hover:text-white">
              Contact Us
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Market5;
