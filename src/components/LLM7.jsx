import React from 'react';

const models = [
  { name: 'OpenAI', src: '/logo-open-ai.svg' },
  { name: 'LLaMA 2', src: '/logo-llama-2.svg' },
  { name: 'INCITE (RedPajama)', src: '/logo-incite-redpijama.webp' },
  { name: 'StableLM', src: '/logo-stablelm.webp' },
  { name: 'EleutherAI', src: '/logo-eleutherai.webp' },
  { name: 'Hugging Face', src: '/logo-hugging-face.webp' },
  { name: 'PaLM 2', src: '/logo-palm2.svg' },
  { name: 'Pythia', src: '/logo-pythia.webp' },
  { name: 'FLAN-T5', src: '/logo-flan-t5.svg' },
  { name: 'CPM-Ant', src: '/logo-crm-ant.webp' },
  { name: 'FLAN-UL2', src: '/logo-flan-ul2.svg' },
  { name: 'NVIDIA', src: '/logo-nvidia.webp' },
  { name: 'PanGu-α', src: '/logo-pangu.webp' },
];

const LLM7 = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 md:text-3xl">
          Our Stack of Large Language Learning Models
        </h2>
        
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We work with a variety of models to develop a robust solution your business needs.
        </p>

        <div className="mt-12">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-16">
            {models.map((model) => (
              <img
                key={model.name}
                // Adjust height as needed with classes like h-8, h-10, h-12
                className="h-10 w-auto object-contain"
                src={model.src}
                alt={model.name}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LLM7;