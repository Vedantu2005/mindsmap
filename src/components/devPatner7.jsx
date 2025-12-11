import React, { useState } from 'react';

const toolsStack = [
  { src: "/logo-gpt-4.svg", },
  { src: "/logo-Whisper.svg" },
  { src: "/logo-DALLE.svg", },
  { src: "/logo-llama-2.svg", },
  { src: "/logo-MidJourney.svg", },
  { src: "/logo-BERT.svg", },
  { src: "/logo-stable-diffusion.svg", },
  { src: "/logo-stanza.webp", },
  { src: "/logo-flair.webp", },
  { src: "/logo-spacy.svg", },
  { src: "/logo-styleGAN.svg", },
  { src: "/logo-hugging-face.webp", },
];

// =================================================================================================
// --- MAIN COMPONENT ---
// =================================================================================================
const MindmapAIComprehensive = () => {

  // --- Helper function to render tool logos (used for the stack section) ---
  const renderTools = (tools) => (
    <div className="flex justify-center flex-wrap gap-x-10 gap-y-6">
      {tools.map((tool, index) => (
        <div key={index} className="flex flex-col items-center justify-start text-center group w-20">
          <div className="w-32 md:w-26 md:h-26 flex items-center justify-center p-1">
            <img 
              src={tool.src} 
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </div>
      ))}
    </div>
  );


  return (
    <div className="font-sans antialiased text-gray-800 bg-white">
      <section className="md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Our Stack of Generative AI Tools
          </h2>
          <p className="text-md text-gray-600 mb-12">
            Delivering innovative solutions to tackle your biggest business challenges.
          </p>
          
          <div className="max-w-4xl mx-auto">
            {/* The single renderTools call will handle all logos in two visible rows */}
            {renderTools(toolsStack)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MindmapAIComprehensive;