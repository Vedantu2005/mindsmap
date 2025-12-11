import React from 'react'

const technologies = [
  "/logo-pytorch.svg",
  "/logo-tensorflow.svg",
  "/logo-gpt-4.svg",
  "/logo-claude-ai.svg",
  "/logo-langchain.webp",
  "/logo-open-ai.svg",
  "/logo-BERT.svg",
  "/logo-spacy.svg",
  "/logo-nltk.svg",
  "/logo-stanza.webp",
  "/logo-corenlp.webp",
  "/logo-aws.svg",
  "/logo-azure.svg",
];

const NLP12 = () => {
  return (
    <div className="bg-white py-8 px-4">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">NLP Technologies</h2>
        <p className="text-gray-600 ">
          We work with the latest tech to make your business successful and
          future-proof.
        </p>
      </div>

      {/* Technology Logos */}
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center items-center gap-6 p-5">
        {technologies.map((tech, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={tech}
              alt={`tech-${index}`}
              className="h-10 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default NLP12
