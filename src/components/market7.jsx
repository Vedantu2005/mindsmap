import React from 'react';

const Market7 = () => {

  const reasonsToWorkWithUs = [
    {
      icon: <img src="/solution-provider.svg" alt="AI Solution Provider Icon" className="h-16 w-16 mx-auto mb-4 text-blue-500" />,
      title: 'Leading AI Solution Provider',
      description: 'Being a dominant AI solution provider, we strive for building state-of-the-art custom software to keep in line with your wishes and strategies.'
    },
    {
      icon: <img src="/marketing-experience.svg" alt="Marketing Experience Icon" className="h-16 w-16 mx-auto mb-4 text-blue-500" />,
      title: 'Experienced in Marketing',
      description: 'Our experts have hands-on experience in applying front-line AI advertising solutions in marketing that meet your specific requirements.'
    },
    {
      icon: <img src="/skilled-team.svg" alt="Skilled Tech Team Icon" className="h-16 w-16 mx-auto mb-4 text-blue-500" />,
      title: 'Skilled Tech Team',
      description: 'We are a strong AI software engineering team with years of experience in AI-driven custom solutions development.'
    },
    {
      icon: <img src="/quality-solutions.svg" alt="Quality Solutions Icon" className="h-16 w-16 mx-auto mb-4 text-blue-500" />,
      title: 'Quality Solutions',
      description: 'Our high-performing coherent AI technologies offer the advanced performance of business processes and ensure a more reliable decision-making process.'
    }
  ];

  return (
    <div className="bg-white font-sans py-10">
      <div className="container mx-auto max-w-7xl">
        
        {/* --- Header Section --- */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Work with Us?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            With our extensive expertise, custom solutions, and dedication to our client, we make it easy to boost your marketing campaigns and propel your business.
          </p>
        </div>

        {/* --- Features Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {reasonsToWorkWithUs.map((reason, index) => (
            <div 
              key={index} 
              className="text-center p-6"
            >
              <div>{reason.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Market7;
