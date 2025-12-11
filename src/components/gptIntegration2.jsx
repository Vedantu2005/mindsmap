import React from 'react';

const IntegrationUseCases = () => {
  // Data for the Use Case cards
  const useCases = [
    {
      title: 'Content Creation',
      description:
        'Enhance your at-scale marketing copy generation, enable automated product descriptions, and expand your market reach with global translation. Embed tailored conversation experiences and deliver a tailored copy to win over your customers.',
      icon: '/icon-video-images-2.svg',
    },
    {
      title: 'Virtual Assistants',
      description: (
        <>
          Create <span className="font-semibold text-blue-600">intelligent chatbots</span> with human-like conversational
          capabilities for 24/7 customer experience, sales, and self-service website capabilities. Powered with ChatGPT,
          your online assistants deliver personalized client support, offloading your human agents.
        </>
      ),
      icon: '/icon-ai-call-center.svg',
    },
    {
      title: 'Analysis & Research',
      description:
        "Let language models take care of time-consuming research tasks and stay ahead of market disruptions. Whether it's market analysis or customer requests, GPT powered tools can comb through your data and summarize the key points from the text.",
      icon: '/icon-data-analysis-alt.svg',
    },
    {
      title: 'Document Management',
      description:
        'Make document management easy and minimize the burden of regulatory document analysis with our ChatGPT integration services. The integration allows for fast document summarization, document generation, and an overview of the key data.',
      icon: '/icon-analytics-2.svg',
    },
    {
      title: 'Sentiment Analysis',
      description: (
        <>
          Unlock accessible <span className="font-semibold text-blue-600">sentiment analysis</span> and take your customer
          service to the next level. Leverage the tool to identify the sentiment in controversial feedback, swiftly resolve
          customer complaints, and make your customers feel heard.
        </>
      ),
      icon: '/icon-list-check.svg',
    },
    {
      title: 'Business Process Automation',
      description:
        'Streamline your workflows and increase internal efficiency by automating key processes. Our developers train the model on your data, customize it to handle your unique business processes, and make it a full-time assistant for your company.',
      icon: '/icon-deep-learning-2.svg',
    },
  ];

  // Component for an individual use case card
  const UseCaseCard = ({ title, description, icon }) => (
    <div
      className="rounded-2xl p-8 relative overflow-hidden border border-[#77bce8] shadow-lg transition-shadow duration-300 hover:shadow-blue-200
                 h-full flex flex-col group"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        {/* small icon/illustration */}
        <img
          src={icon}
          alt={title}
          className="h-12 w-12 object-contain ml-4 transform transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <p className="text-sm text-gray-600 leading-relaxed flex-grow">{description}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* 1. Ready to start your AI project? (CTA Banner) */}
      <section>
        <div className="flex justify-center items-center p-4">
          <div
            className="relative overflow-hidden rounded-lg shadow-xl p-8 md:p-12 lg:p-16 text-center w-full max-w-6xl mx-auto"
            style={{
              backgroundImage: 'url(/netbanner.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="relative z-10">
              <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
                Are you in search of a trusted partner for AI product development?
              </h2>
              <p className="text-white text-base md:text-lg mb-8 max-w-2xl mx-auto ">
                Let's get into your requirements and turn a concept into a reality created according to your business needs.
              </p>
              <button
                className="bg-[#00B4D8] hover:bg-[#00B4D8] text-white font-bold py-3 px-10 rounded-md transition duration-300 ease-in-out shadow-lg"
              >
                Contact us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ChatGPT Integration Use Cases */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">ChatGPT Integration Use Cases</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our custom generative AI solutions bring intelligence to critical business processes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <UseCaseCard key={index} {...useCase} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default IntegrationUseCases;
