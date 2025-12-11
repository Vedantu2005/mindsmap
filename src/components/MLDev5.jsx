import React from 'react';

// The list of assets uses the exact paths provided by the user.
// Note: Items 3 and 6 use repeated paths as specified in the request,
// even though the screenshot suggests different logos (PyTorch and the Feather logo).
const techAssets = [
  // Row 1 (6 items)
  { src: '/technologies-python.webp', alt: 'Python' },
  { src: '/logo-open-ai.svg', alt: 'OpenAI' },
  { src: '/logo-pytorch.svg', alt: 'PyTorch Placeholder (User Path)' },
  { src: '/logo-tensorflow.svg', alt: 'TensorFlow' },
  { src: '/technologies-spark.webp', alt: 'Apache Spark' },
  { src: '/technologies-spark maven.webp', alt: 'Feather/Dask Placeholder (User Path)' },
  // Row 2 (5 items)
  { src: '/technologies-scikit-learn.webp', alt: 'Scikit-learn' },
  { src: '/technologies-postgresql.webp', alt: 'PostgreSQL' },
  { src: '/technologies-elastic.webp', alt: 'Elastic' },
  { src: '/logo-azure-ml.svg', alt: 'Azure Machine Learning' },
  { src: '/logo-aws-sagemaker.svg', alt: 'AWS SageMaker' },
];

const MLTechs = () => {
  return (
    <div className="min-h-screen bg-white pt-8 sm:pt-12 pb-16 sm:pb-24 font-inter">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Header Section */}
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Best Tech Stack to Develop Machine Learning Algorithms
        </h1>
        <p className="max-w-4xl mx-auto text-lg text-gray-600 mb-16 leading-relaxed">
          We harness the latest developments in machine learning and relevant programming languages to build solutions
          for our clients. We apply the right stack to develop a machine-learning model that is future-proof and solid.
        </p>

        {/* Technologies Grid */}
        <div className="mb-16">
          <div className="grid grid-cols-2 gap-y-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:gap-x-12 lg:gap-y-16">
            {techAssets.map((tech, index) => (
              <div key={index} className="flex justify-center items-center p-4">
                {/* The image size is controlled by Tailwind classes (max-h-16 or max-w-full) 
                  to ensure they fit well in the grid cells while maintaining aspect ratio.
                  The onerror handler provides a fallback in case a path is incorrect.
                */}
                <img
                  src={tech.src}
                  alt={tech.alt}
                  className="max-h-16 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                  // Simple fallback for broken images
                  onError={(e) => {
                    e.target.onerror = null; // Prevent infinite loop
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<span class="text-xs text-red-500">${tech.alt} Load Error</span>`;
                  }}
                />
              </div>
            ))}
          </div>

          {/* This empty div is used to ensure the 11 items align visually in 6 + 5 on desktop */}
          <div className="hidden lg:block">
            {/* 6 + 5 = 11. The 12th slot is visually empty on the second row */}
          </div>
        </div>

        {/* Call to Action Section */}
        <p className="text-base text-gray-700 mt-10 mb-6">
          Not sure what technologies you need?
        </p>
        <p className="text-base text-gray-700 mb-8">
          Contact us, and we will help you to make the right choice!
        </p>

        {/* Button */}
        <button
          className="inline-flex items-center justify-center px-8 py-3 border border-blue-500 text-base font-medium 
                     rounded-lg text-blue-500 bg-white hover:bg-blue-50 transition duration-300 shadow-md 
                     hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onClick={() => console.log('Get in Touch clicked')}
        >
          Get in Touch
        </button>

      </div>
    </div>
  );
};

export default MLTechs;
