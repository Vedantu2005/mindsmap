import React from 'react';

const Llms = () => {
  const models = [
    { name: 'OpenAI', logo: '/logo-open-ai.svg' },
    { name: 'Llama 2', logo: '/logo-llama-2.svg' },
    { name: 'INCITE (RedPajama)', logo: '/logo-incite-redpijama.webp' },
    { name: 'StableLM', logo: '/logo-stablelm.webp' },
    { name: 'EleutherAI', logo: '/logo-eleutherai.webp' },
    { name: 'Hugging Face', logo: '/logo-hugging-face.webp' },
    { name: 'PaLM 2', logo: '/logo-palm2.svg' },
    { name: 'Pythia', logo: '/logo-pythia.webp' },
    { name: 'FLAN-T5', logo: '/logo-flan-t5.svg' },
    { name: 'CPM-Ant', logo: '/logo-crm-ant.webp' },
    { name: 'FLAN-UL2', logo: '/logo-flan-ul2.svg' },
    { name: 'NVIDIA', logo: '/logo-nvidia.webp' },
    { name: 'PanGu-&alpha;', logo: '/logo-pangu.webp' },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[70%] bg-white p-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Stack of Large Language Learning Models</h2>
      <p className="text-md text-gray-600 mb-12 text-center max-w-2xl">
        We work with a variety of models to develop a robust solution your business needs.
      </p>

      <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 max-w-5xl">
        {models.map((model) => (
          <div
            key={model.name}
            className="group flex flex-col items-center justify-center p-2 transform transition-transform duration-300 hover:scale-110 cursor-pointer"
          >
            <img
              src={model.logo}
              alt={model.name}
              className="h-10 object-contain transition-all duration-300 group-hover:grayscale-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Llms;