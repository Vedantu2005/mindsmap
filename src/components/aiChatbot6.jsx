import React from 'react';

// --- Data for Chatbot Features ---
const chatbotFeatures = [
  {
    title: 'Sentiment Analysis',
    description: 'Our conversational AI chatbot development services are steeped in emotional intelligence that enables our custom solutions to analyze the sentiment of conversations and deliver a deep understanding of your customers.',
    icon: '/icon-data-analysis-alt.svg',
    // The image has this feature on the left column, top position.
  },
  {
    title: 'Natural Language Processing',
    description: 'We perform the implementation of a chatbot system using AI and NLP to add multilingual support to your solutions, improve response accuracy, and enable conversational interfaces to understand users’ queries based on context.',
    icon: '/icon-aaa-alt.svg',
    // The image has this feature on the right column, top position.
  },
  {
    title: 'Omnichannel Support',
    description: 'Our customer support AI chatbot development services are focused on making your solution compatible with multiple touch points. Built once, our solutions can be deployed across channels, meeting your users wherever they are.',
    icon: '/icon-like-2.svg',
    // The image has this feature on the left column, bottom position.
  },
  {
    title: 'Speech Recognition',
    description: 'Our virtual personal assistant development is coupled with speech recognition to enable more human-like interactions, improve user experience, and provide more inclusive solutions to your customers.',
    icon: '/icon-ai-call-center.svg',
    // The image has this feature on the right column, bottom position.
  },
];

// --- Data for Tech Stack Logos (reusing structure from previous components) ---
const techLogos = [
  { src: '/logo-gpt-4.svg', alt: 'GPT-4' },
  { src: '/logo-Whisper.svg', alt: 'Whisper' },
  { src: '/logo-DALLE.svg', alt: 'DALL-E' },
  { src: '/logo-llama-2.svg', alt: 'LLaMA 2' },
  { src: '/logo-midjourney.svg', alt: 'Midjourney' },
  { src: '/logo-bert.svg', alt: 'BERT' },
  { src: '/logo-stable-diffusion.svg', alt: 'Stable Diffusion' },
  { src: '/logo-stanza.webp', alt: 'Stanza' },
  { src: '/logo-flair.webp', alt: 'Flair' },
  { src: '/logo-spacy.svg', alt: 'spaCy' },
  { src: '/logo-hugging-face.webp', alt: 'Hugging Face' },
];


const ChatbotExperiences = () => {
  return (
    <div className="bg-white font-sans text-gray-700">
      <div className="container mx-auto px-4 py-16 sm:py-20">

        {/* ======================================================= */}
        {/* SECTION 1: WE BRING CHATBOT EXPERIENCES TO ANOTHER LEVEL */}
        {/* ======================================================= */}
        <section className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            We Bring Chatbot Experiences To Another Level
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Our developers know how to develop an AI chatbot that delivers unmatched experiences based on AI, NLP, and machine learning.
          </p>
        </section>

        {/* Features Grid (Two Columns of Cards) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-24">
          {chatbotFeatures.map((feature, index) => (
            // Card Container
            <div 
              key={index} 
              className="group bg-white border border-gray-200 rounded-xl p-6 transition-shadow duration-300 ease-in-out hover:shadow-lg relative"
            >
              {/* Text Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base pr-20">
                {feature.description}
              </p>
              
              {/* Icon/Illustration positioning - positioned absolutely */}
              <div 
                className="absolute right-4 bottom-3 group-hover:opacity-100 transition-opacity duration-300"
                style={{ transform: 'translate(10px, 10px)' }} // Translate slightly out of the box
              >
                <img src={feature.icon} alt={`${feature.title} icon`} className="h-24 w-24 object-contain" />
              </div>
              
              {/* Highlight box border - styled to match the subtle blue border in the image */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 rounded-xl transition-colors duration-300 pointer-events-none"></div>
            </div>
          ))}
        </section>

        {/* ======================================================= */}
        {/* SECTION 2: OUR STACK OF CHATBOT TECHNOLOGIES            */}
        {/* ======================================================= */}
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Stack of Chatbot Technologies
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-16">
            Along with artificial intelligence, we base your chatbot interfaces on the leading language models with next-gen language processing algorithms.
          </p>

          {/* Tech Stack Logos */}
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 max-w-3xl mx-auto">
            {techLogos.map((logo, index) => (
              <div key={index} className="transition-transform duration-300 ease-in-out hover:scale-110" title={logo.alt}>
                <img src={logo.src} alt={logo.alt} className="w-15 md:w-20 object-contain" />
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default ChatbotExperiences;