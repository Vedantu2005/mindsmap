// OurCompetencesSection.js

import React from 'react';

// Array for image-based sections to simplify rendering
const deepLearningFrameworks = [
  { src: '/logo-tensorflow.svg', alt: 'TensorFlow' },
  { src: '/logo-keras.svg', alt: 'Keras' },
  { src: '/logo-pytorch.svg', alt: 'PyTorch' },
];

const deploymentToolkits = [
  { src: '/logo-Core-ML.webp', alt: 'CoreML' },
  { src: '/logo-onnx.svg', alt: 'ONNX' },
  { src: '/logo-tensorflowlite.svg', alt: 'TensorFlow Lite' },
  { src: '/logo-tensor-rt.webp', alt: 'TensorRT' },
];

const otherAITools = [
  { src: '/logo_catalyst.svg', alt: 'Catalyst' },
  { src: '/technologies-scikit-learn.webp', alt: 'Learn' }, // Assuming the orange logo is "Learn" or similar
  { src: '/logo_mlflow.svg', alt: 'mlflow' },
  { src: '/logo_dali-nvjpeg.webp', alt: 'DALI' },
  { src: '/logo_weight-and-biases.webp', alt: 'Weights & Biases' },
  { src: '/logo-open-ai.svg', alt: 'OpenAI', isLarge: true },
];

const OurCompetencesSection = () => {
  // A helper component for rendering logo rows
  const LogoRow = ({ items }) => (
    <div className="flex flex-wrap items-center justify-start py-6 space-x-8 md:space-x-12">
      {items.map((item, index) => (
        <div key={index} className={`flex items-center justify-center p-2 ${item.isLarge ? 'w-full sm:w-auto' : 'w-auto'}`}>
          <img
            src={item.src}
            alt={item.alt}
            // Tailwind classes to control logo size based on the image in the screenshot
            className={`${
              item.isLarge ? 'h-10 sm:h-12 w-auto' : 'h-8 sm:h-10 w-auto'
            } object-contain`}
          />
        </div>
      ))}
    </div>
  );

  // A helper component for rendering text sections
  const TextSection = ({ title, content }) => (
    <div className="py-8">
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed max-w-4xl">{content}</p>
    </div>
  );

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Our Competences
        </h2>

        {/* Concepts Section */}
        <TextSection
          title="Concepts"
          content="Supervised, unsupervised and reinforcement learning, metric learning, fine-tuning, temporal and efficient neural networks, representation learning"
        />
        <hr className="border-gray-200" />

        {/* Neural Networks Section */}
        <TextSection
          title="Neural Networks"
          content="Convolutional and recurrent neural networks, generative adversarial networks, deep bayesian neural networks, siamese networks"
        />
        <hr className="border-gray-200" />

        {/* Deep Learning Frameworks Section */}
        <div className="py-8">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Deep Learning Frameworks</h3>
          <LogoRow items={deepLearningFrameworks} />
        </div>
        <hr className="border-gray-200" />

        {/* Deployment Toolkits Section */}
        <div className="py-8">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Deployment Toolkits</h3>
          <LogoRow items={deploymentToolkits} />
        </div>
        <hr className="border-gray-200" />

        {/* Other AI Tools Section */}
        <div className="py-8">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Other AI Tools</h3>
          <LogoRow items={otherAITools} />
        </div>
      </div>
    </section>
  );
};

export default OurCompetencesSection;