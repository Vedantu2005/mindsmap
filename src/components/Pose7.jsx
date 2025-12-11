import React from 'react'

const models = [
  { name: 'OpenAI', src: '/logo-pytorch.svg' },
  { name: 'LLaMA 2', src: '/logo-keras.svg' },
  { name: 'INCITE (RedPajama)', src: '/logo-onnx.svg' },
  { name: 'StableLM', src: '/logo-tensorflow.svg' },
  { name: 'EleutherAI', src: '/logo-Core-ML.webp' },
  { name: 'Hugging Face', src: '/logo-tensorflowlite.svg' },
  { name: 'PaLM 2', src: '/logo-tensor-rt.webp' },
];

const Pose7 = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 md:text-3xl">
          Technologies We Use
        </h2>
        
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We use the latest technologies available on the market and go on enriching our tech stack.
        </p>

        <div className="mt-12">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-16">
            {models.map((model) => (
              <img
                key={model.name}
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
}

export default Pose7
