import React from 'react';
import Company from '../components/Company'
// Data for the feature blocks
const assistantFeatures = [
  {
    icon: '/icon-data-science.svg',
    title: 'Provide Real-Time Responses',
    description: (
      <>
        With 10 years of experience, our AI chatbot developers are
        primed to build custom conversational assistants that show
        up for your customers 24/7. Enriched with customer data
        and leveraging the latest <span className="text-blue-600 font-medium">language models</span>, our chatbots
        guide your clients at every step of their buying journey.
      </>
    ),
  },
  {
    icon: '/icon-deep-learning.svg',
    title: 'Offer Competitive Experiences',
    description: (
      <>
        Our chatbots reconcile the best of conversational AI,
        machine learning, and <span className="text-blue-600 font-medium">NLP</span> to engage more customers,
        analyze their responses, and look into their intent. Whether
        it’s voice-based support or digital avatars, we develop AI
        chatbots that make your company a standout in the industry.
      </>
    ),
  },
  {
    icon: '/icon-implementing.svg',
    title: 'Support Core Business Operations',
    description: (
      <>
        Our <span className="text-blue-600 font-medium">artificial intelligence</span> & chatbot development company
        equips you with chatbots that do the heavy lifting of text
        generation, summarization, or large-scale analysis.
        Predicated on your data, our AI interfaces integrate easily
        with your internal systems and solve business challenges.
      </>
    ),
  },
  {
    icon: '/icon-cost-alt.svg',
    title: 'Grow Your Business',
    description: (
      <>
        Pre-trained and fine-tuned by our experts, our <span className="text-blue-600 font-medium">Generative AI</span>
        chatbots help you innovate fast and incorporate cutting-
        edge capabilities and branded voice into your workflows
        with the least effort. We also augment our chatbots with
        your data to make them apt for specific tasks.
      </>
    ),
  },
];

const TrustedCompanies = () => {
  return (
    <div className="bg-white font-sans text-gray-700">
      <div className="container mx-auto px-4 py-16 sm:py-24">

        {/* ======================================================= */}
        {/* SECTION 1: TRUSTED BY INNOVATIVE COMPANIES              */}
        {/* ======================================================= */}
        <section className="text-center">
          <Company/>
        </section>

        {/* ======================================================= */}
        {/* SECTION 2: VIRTUAL ASSISTANT DEVELOPMENT                */}
        {/* ======================================================= */}
        <section className="mt-10 sm:mt-18">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Virtual Assistant Development That Redefines Your Business
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Resort to our AI chatbot development services to build tailored experiences your customers love.
            </p>
          </div>

          {/* Assistant Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 max-w-6xl mx-auto">
            {assistantFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0 pt-1"> {/* pt-1 to align icon with text */}
                  <img src={feature.icon} alt="Feature Icon" className="h-18 w-18" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default TrustedCompanies;