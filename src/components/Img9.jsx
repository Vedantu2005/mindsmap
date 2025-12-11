import React from 'react'

const models = [
  { name: 'OpenAI', src: '/technologies-python.webp' },
  { name: 'LLaMA 2', src: '/technologies-tensorflow.webp' },
  { name: 'INCITE (RedPajama)', src: '/technologies-scikit-learn.webp' },
  { name: 'StableLM', src: '/technologies-spark.webp' },
  { name: 'EleutherAI', src: '/technologies-keras.webp' },
  { name: 'Hugging Face', src: '/technologies-apache.webp' },
  { name: 'PaLM 2', src: '/technologies-kafka.webp' },
  { name: 'PaLM 2', src: '/technologies-postgresql.webp' },
  { name: 'PaLM 2', src: '/technologies-elastic.webp' },

];

const Img9 = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 md:text-3xl">
          Technologies
        </h2>
        
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We use the best technologies available on the market, and we are continually expanding our tech stack.
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

export default Img9
