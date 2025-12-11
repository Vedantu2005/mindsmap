import React from 'react';

const strategyImg = '/1624460125127.png';
const llmDevImg = '/llm-development-services.jpg';
const fineTuningImg = '/1683161636197.jpeg';
const useCasesImg = '/2bafb41a2f7d47daa950025568befe0218893c90-2880x1440.png';

const LLM4 = () => {
  return (
    <section className="bg-white py-10 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="mx-auto max-w-6xl text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Our Expertise in Large Language Model Development
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          We provide a broad spectrum of LLM Large Language Model services that meet your needs at scale.
        </p>
      </div>

      {/* --- Strategy and Consulting Section (Text Left, Image Right on Desktop) --- */}
      <div className="mx-auto max-w-6xl mb-10 lg:mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6 items-center text-center lg:text-left">
          {/* Col 1 / Row 1 (Desktop) */}
          <h3 className="text-2xl font-bold text-gray-900 lg:col-start-1 lg:row-start-1">
            Strategy and Consulting
          </h3>

          {/* This is now the 2nd item on mobile */}
          {/* Col 2 / Row 1 & 2 (Desktop) */}
          <div className="flex justify-center lg:justify-end lg:col-start-2 lg:row-start-1 lg:row-span-2">
            <img src={strategyImg} alt="Strategy and Consulting" className="max-w-xs md:max-w-sm lg:max-w-md" />
          </div>

          {/* This is now the 3rd item on mobile */}
          {/* Col 1 / Row 2 (Desktop) */}
          <div className="lg:col-start-1 lg:row-start-2">
            <p className="text-gray-600 leading-relaxed mb-6">
              We help you get a better handle on your business vision and chalk out a step-by-step strategy for the adoption of language models. Our experts define a use case, assess your proprietary data, and provide actionable recommendations on the tech infrastructure.
            </p>
            <ul className="text-gray-600 text-left space-y-3 list-disc list-outside marker:text-[#0b87d7] pl-5">
              <li>Business case analysis</li>
              <li>Proof of Concept</li>
              <li>Overview of proprietary data</li>
              <li>Project estimation and roadmap</li>
            </ul>
          </div>
        </div>
      </div>

      {/* --- LLM Development Section (Image Left, Text Right on Desktop) --- */}
      <div className="mx-auto max-w-6xl mb-10 lg:mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6 items-center text-center lg:text-left">
          {/* Col 2 / Row 1 (Desktop) */}
          <h3 className="text-2xl font-bold text-gray-900 lg:col-start-2 lg:row-start-1">
            LLM Development
          </h3>
          
          {/* Col 1 / Row 1 & 2 (Desktop) */}
          <div className="flex justify-center lg:justify-start lg:col-start-1 lg:row-start-1 lg:row-span-2">
            <img src={llmDevImg} alt="LLM Development" className="max-w-xs md:max-w-sm lg:max-w-md" />
          </div>

          {/* Col 2 / Row 2 (Desktop) */}
          <div className="lg:col-start-2 lg:row-start-2">
            <p className="text-gray-600 leading-relaxed mb-6">
              Our engineers build custom LLM models on top of GPT, DALL·E 2, and other foundation models and make them a native part of your tech ecosystem. Our NLP, machine learning, and data science experts help tailor the model to your specific business needs.
            </p>
            <ul className="text-gray-600 text-left space-y-3 list-disc list-outside marker:text-[#0b87d7] pl-5">
              <li>User workflow development</li>
              <li>Custom solutions development</li>
              <li>Dataset preparation</li>
              <li>LLM integration</li>
            </ul>
          </div>
        </div>
      </div>

      {/* --- Fine-Tuning Section (Text Left, Image Right on Desktop) --- */}
      <div className="mx-auto max-w-6xl mb-10 lg:mb-12">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6 items-center text-center lg:text-left">
          {/* Col 1 / Row 1 (Desktop) */}
          <h3 className="text-2xl font-bold text-gray-900 lg:col-start-1 lg:row-start-1">
            Fine-Tuning
          </h3>

          {/* Col 2 / Row 1 & 2 (Desktop) */}
          <div className="flex justify-center lg:justify-end lg:col-start-2 lg:row-start-1 lg:row-span-2">
            <img src={fineTuningImg} alt="Fine-Tuning" className="max-w-xs md:max-w-sm lg:max-w-md" />
          </div>

          {/* Col 1 / Row 2 (Desktop) */}
          <div className="lg:col-start-1 lg:row-start-2">
            <p className="text-gray-600 leading-relaxed mb-6">
              We customize off-the-shelf LLM language models with your data to maximize the value of base models for your business. Our <span className="font-medium text-[#0b87d7] cursor-pointer">machine learning engineers</span> fine-tune them to your unique business needs, improve accuracy rates, and make the model more efficient.
            </p>
            <ul className="text-gray-600 text-left space-y-3 list-disc list-outside marker:text-[#0b87d7] pl-5">
              <li>Large language model fine-tuning</li>
              <li>API integration</li>
              <li>Data architecture modernization</li>
              <li>Large language model automation</li>
            </ul>
          </div>
        </div>
      </div>

      {/* --- Custom Use Cases Section (Image Left, Text Right on Desktop) --- */}
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6 items-center text-center lg:text-left">
          {/* Col 2 / Row 1 (Desktop) */}
          <h3 className="text-2xl font-bold text-gray-900 lg:col-start-2 lg:row-start-1">
            Custom Use Cases
          </h3>

          {/* Col 1 / Row 1 & 2 (Desktop) */}
          <div className="flex justify-center lg:justify-start lg:col-start-1 lg:row-start-1 lg:row-span-2">
            <img src={useCasesImg} alt="Custom Use Cases" className="max-w-xs md:max-w-sm lg:max-w-md" />
          </div>

          {/* Col 2 / Row 2 (Desktop) */}
          <div className="lg:col-start-2 lg:row-start-2">
            <p className="text-gray-600 leading-relaxed mb-6">
              Leverage LLMs for highly specialized applications tailored to your industry. From automating content generation to advanced data analysis, our experts identify and implement bespoke solutions that drive innovation and efficiency within your organization.
            </p>
            <ul className="text-gray-600 text-left space-y-3 list-disc list-outside marker:text-[#0b87d7] pl-5">
              <li>Industry-specific content generation</li>
              <li>Advanced data extraction and summarization</li>
              <li>Automated customer interaction workflows</li>
              <li>Predictive analytics with natural language</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LLM4;