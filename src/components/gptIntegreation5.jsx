import React from 'react';

// --- Data for Cards and Logos ---
// Using arrays makes the component cleaner and easier to update.

const featureCards = [
  {
    icon: '/icon-five-stars.svg',
    title: 'Experience',
    description: 'Years of experience in delivering and implementing AI-powered solutions.',
  },
  {
    icon: '/icon-three-man-2-alt.svg',
    title: 'Pool of Experts',
    description: 'We have a team of AI experts with diverse backgrounds to match your project’s needs.',
  },
  {
    icon: '/icon-engine-head.svg',
    title: 'Broad Knowledge',
    description: 'Our consultants come from a variety of industries and are well-versed in industry specifics.',
  },
];

const techLogos = [
  { src: '/logo-gpt-4.svg', alt: 'GPT-4' },
  { src: '/logo-Whisper.svg', alt: 'Whisper' },
  { src: '/logo-DALLE.svg', alt: 'DALL-E' },
  { src: '/logo-llama-2.svg', alt: 'LLaMA 2' },
  { src: '/logo-MidJourney.svg', alt: 'Midjourney' },
  { src: '/logo-BERT.svg', alt: 'BERT' },
  { src: '/logo-stable-diffusion.svg', alt: 'Stable Diffusion' },
  { src: '/logo-stanza.webp', alt: 'Stanza' },
  { src: '/logo-flair.webp', alt: 'Flair' },
  { src: '/logo-spacy.svg', alt: 'spaCy' },
  { src: '/logo-styleGAN.svg', alt: 'StyleGAN' },
  // { src: '/logo-cyclegan.svg', alt: 'CycleGAN' },
  { src: '/logo-hugging-face.webp', alt: 'Hugging Face' },
];


const AIFeatures = () => {
  return (
    <div className="bg-white font-sans">
      <div className="container mx-auto px-4 py-16 sm:py-24">

        {/* ======================================================= */}
        {/* SECTION 1: WHY MINDMAPS AI?               */}
        {/* ======================================================= */}
        <section className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Why Mindsmaps AI?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We keep up with the latest AI technology and help you adapt your product where it truly matters.
          </p>
        </section>

        {/* Feature Cards Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureCards.map((card, index) => (
            <div
              key={index}
              className="group bg-white p-8 border border-gray-200 rounded-xl shadow-sm text-center transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
            >
              <div className="flex justify-center mb-6">
                <img src={card.icon} alt={`${card.title} icon`} className="h-20" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </section>

        {/* ======================================================= */}
        {/* SECTION 2: OUR STACK OF AI TOOLS              */}
        {/* ======================================================= */}
        <section className="text-center mt-24 sm:mt-32">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Stack of Generative AI Tools
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
            We create an AI adoption framework for your business based on the technology of your choice.
          </p>
        </section>

        {/* Technology Logos */}
        <section className="flex flex-wrap justify-center items-center gap-x-10 sm:gap-x-14 gap-y-8 max-w-5xl mx-auto">
          {techLogos.map((logo, index) => (
            <div key={index} className="transition-transform duration-300 ease-in-out hover:scale-110" title={logo.alt}>
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-15 sm:w-19 md:w-22"
              />
            </div>
          ))}
        </section>

      </div>
    </div>
  );
};

export default AIFeatures;