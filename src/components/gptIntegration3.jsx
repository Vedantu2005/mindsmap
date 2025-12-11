import React, { useState } from 'react';

const IntegrationApproach = () => {
  // Define the default image path
  const defaultImageSrc = '/hexagon-bg.webp'; // Assuming you have a default multi-colored image

  // Data for the "How We Integrate ChatGPT" section
  const integrationSteps = [
    {
      number: 1,
      title: 'Consume',
      description:
        'Employ the innovative language model right off the shelf through APIs and get instant value from the easy-to-access technology. Our developers help you adapt the model and harness it for your own use cases through prompt tuning and prefix learning.',
    },
    {
      number: 2,
      title: 'Customize',
      description:
        'Maximize the value of language models by fine-tuning them with curated enterprise data. Our engineers customize the model for your specific downstream tasks and harmonize it with your business semantics, knowledge, and methodologies.',
    },
  ];

  // Data for the "Beyond ChatGPT Integration" section
  const beyondIntegrationItems = [
    {
      title: 'Applications',
      description: 'Make generative AI accessible to your teams.',
      id: 'applications',
      // Correcting image path to be relative to the public directory
      imageSrc: '/hexagon-bg-blue.webp ',
    },
    {
      title: 'Fine-tuning',
      description: 'Adjust the language model to your workflows.',
      id: 'fine-tuning',
      imageSrc: '/hexagon-bg-green.webp',
    },
    {
      title: 'Data',
      description: 'Improve the maturity of your data lifecycle.',
      id: 'data',
      imageSrc: '/hexagon-bg-orange.webp',
    },
    {
      title: 'Infrastructure',
      description: 'Embrace the cloud to access generative AI.',
      id: 'infrastructure',
      imageSrc: '/hexagon-bg-pink.webp',
    },
  ];

  // Define the color cycle for the Beyond Integration items
  const hoverColors = [
    { active: 'border-l-blue-500', hover: 'hover:border-l-blue-300', text: 'text-blue-600' },      // Blue
    { active: 'border-l-green-500', hover: 'hover:border-l-green-300', text: 'text-green-600' },    // Green
    { active: 'border-l-yellow-500', hover: 'hover:border-l-yellow-300', text: 'text-yellow-600' }, // Yellow
    { active: 'border-l-pink-500', hover: 'hover:border-l-pink-300', text: 'text-pink-600' },      // Pink
  ];

  // State to manage which item is "active" (hovered). Set to null initially for the default image.
  const [activeItem, setActiveItem] = useState(null);

  // Helper to determine the image source: uses the active item's source, or the default source if null
  const visualElementSrc = activeItem
    ? beyondIntegrationItems.find(item => item.id === activeItem)?.imageSrc
    : defaultImageSrc;

  // Component for the Integration Steps Card
  const IntegrationCard = ({ number, title, description }) => (
    <div className="relative p-8 border border-gray-200 rounded-xl flex items-start space-x-6 h-full hover:shadow-lg transition-shadow duration-300 group">
      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center text-2xl font-bold text-white bg-blue-500 rounded-full group-hover:bg-blue-600 transition-colors duration-300 transform group-hover:scale-105">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );

  // Component for the Beyond Integration Item
  const BeyondIntegrationItem = ({ title, description, id, index }) => {
    const isActive = activeItem === id;
    const color = hoverColors[index % hoverColors.length]; // Cycle through the four colors

    return (
      <div
        className={`p-4 border-b border-gray-100 last:border-b-0 cursor-pointer transition-all duration-300 ease-in-out ${
          isActive
            ? `bg-white shadow-md border-l-4 ${color.active} transform scale-[1.02]`
            : `hover:bg-gray-50 hover:border-l-4 ${color.hover}`
        }`}
        // Set activeItem on hover, set back to null on mouse leave (for default image)
        onMouseEnter={() => setActiveItem(id)}
        onMouseLeave={() => setActiveItem(null)}
      >
        <h4
          className={`text-lg font-semibold mb-1 ${
            isActive ? color.text : 'text-gray-800'
          }`}
        >
          {title}
        </h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* 1. How We Integrate ChatGPT Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">How We Integrate ChatGPT</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Our developers select an optimal approach that fully covers your ChatGPT integration needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {integrationSteps.map((step) => (
              <IntegrationCard key={step.number} {...step} />
            ))}
          </div>
        </div>
      </section>

      ---

      {/* 2. Beyond ChatGPT Integration Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Beyond ChatGPT Integration</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Our developers offer full-on modernization of your digital infrastructure to gear it up for AI-enabled
            technologies.
          </p>

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            {/* Visual Element (Hexagon) - Dynamically swaps based on activeItem state */}
            <div className="w-full lg:w-1/2 flex justify-center p-4">
              <img
                key={visualElementSrc} // Key forces re-render/animation when src changes
                src={visualElementSrc}
                alt="Digital infrastructure visualization"
                // Added opacity transition for a fade effect during image swap
                className="max-w-full h-auto object-contain transition-opacity duration-500"
                style={{ maxHeight: '400px' }}
              />
            </div>

            {/* List of Beyond Integration Items */}
            <div className="w-full lg:w-1/2">
              {beyondIntegrationItems.map((item, index) => (
                <BeyondIntegrationItem key={item.id} index={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IntegrationApproach;