// GenerativeAIPage.jsx

import React from 'react';

// Data for Tech Logos
const techLogos = {
  'Data Science': [
    { src: '/logo-spacy.svg', alt: 'SpaCy' },
    { src: '/logo-gensim.webp', alt: 'Gensim' },
    { src: '/logo-tensorflow.svg', alt: 'TensorFlow' },
    { src: '/logo-theano.svg', alt: 'Theano' },
    { src: '/logo-xgboost.webp', alt: 'DMLC XGBoost' },
    { src: '/logo-keras.svg', alt: 'Keras' },
    { src: '/logo-open-ai.svg', alt: 'OpenAI' },
    { src: '/logo-pytorch.svg', alt: 'PyTorch' },
    { src: '/logo-hugging-face.webp', alt: 'Hugging Face' },
  ],
  'Amazon AWS': [
    { src: '/logo-amazon-sagemaker.webp', alt: 'Amazon SageMaker' },
    { src: '/logo-aws.svg', alt: 'AWS' },
  ],
  'Amazon Azure': [ // Note: The image shows "Amazon Azure" but the logo is "Azure Machine Learning". I'll use the logo name.
    { src: '/logo-azure-ml.webp', alt: 'Azure Machine Learning' },
  ],
};

const GenerativeAIPage = () => {
  return (
    <div className="bg-white font-sans text-gray-700">
      <main className="container mx-auto max-w-6xl px-4 py-10">

        {/* Top Banner Section */}
        <section className="bg-[#EBF7FF] rounded-3xl py-12 px-8 md:px-16 relative overflow-hidden mb-24">
          <img
            src="/illustration-gen-ai-bg.svg"
            alt=""
            className="absolute top-0 right-0 h-full w-auto opacity-70 hidden md:block"
          />
          <img
            src="/art-banner-chat-after.svg"
            alt="Chat Icon"
            className="absolute top-8 right-8 w-16 h-auto opacity-90 hidden md:block"
          />
          <img
            src="../../public/icon-implementing.svg"
            alt="Dots"
            className="absolute bottom-8 left-8 w-24 h-auto opacity-70 hidden md:block"
          />

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
              Looking for a trusted Generative AI and ChatGPT company?
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Drop us a line to start your project today\! As a leading AI firm, we will help you build a solution based on AI
              or breakthrough technologies like ChatGPT or LLMs.
            </p>
            <button className="bg-blue-500 text-white font-semibold py-3 px-8 rounded-lg 
                                hover:bg-blue-600 transition-all duration-300 ease-in-out text-lg shadow-md">
              Explore Gen AI
            </button>
          </div>
        </section>

        {/* Our Tech Expertise Matrix Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Tech Expertise Matrix
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed mb-12">
            To develop artificial intelligence solutions, we use the best technologies available on the market, and
            we continually enrich our tech stack.
          </p>

          {/* Tech Logos Grid */}
          <div className="max-w-6xl mx-auto px-4">
            {Object.entries(techLogos).map(([category, logos]) => (
              <div key={category} className="mb-10 text-left">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">{category}</h3>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-6 md:gap-x-12">
                  {logos.map((logo, index) => (
                    <div
                      key={index}
                      className="group flex justify-center items-center h-12 md:h-16 flex-shrink-0 
                                 relative cursor-pointer transition-transform duration-300 hover:scale-105"
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="max-h-full max-w-full object-contain"
                      />
                      {/* Optional: Tooltip on hover */}
                      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-md 
                                       opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        {logo.alt}
                      </span>
                    </div>
                  ))}
                </div>
                {/* Add a horizontal line separator for categories if desired */}
                {category !== Object.keys(techLogos)[Object.keys(techLogos).length - 1] && (
                  <hr className="border-gray-200 my-8" />
                )}
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
};

export default GenerativeAIPage;