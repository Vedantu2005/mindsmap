import React from 'react';

const LLM8 = () => {
  return (
    <section className="py-10 bg-white ">
      <div className="container mx-auto max-w-6xl px-6 -mt-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800  md:text-3xl">
            Our Broad Expertise Meets Your Needs at Scale
          </h2>
          <p className="mt-4 text-gray-600 ">
            Our cross-functional teams help you overcome the complexity of LLM development.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Machine Learning */}
          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
              <img src="/icon-circle-ml.svg" alt="Machine Learning icon" className="w-24 h-24 mx-auto md:mx-0" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 ">Machine Learning</h3>
              <p className="mt-2 text-gray-600 text-justify">
                Our developers push the boundaries of generative AI and create
                innovative solutions with <a href="#" className="text-[#0b87d7] hover:underline">machine learning</a>. Be it predictive analytics
                or model training, we supplement your models with all the AI features
                your business needs.
              </p>
            </div>
          </div>

          {/* Natural Language Processing */}
          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
              <img src="/icon-circle-nlp.svg" alt="Natural Language Processing icon" className="w-24 h-24 mx-auto md:mx-0" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 ">Natural Language Processing</h3>
              <p className="mt-2 text-gray-600 text-justify">
                Drawing on our decade years of experience, we help your applications
                mine data across formats and platforms to unearth hidden insights.
                Our developers adapt your sentiment analysis and <a href="#" className="text-[#0b87d7] hover:underline">customer analysis </a>
                applications where it truly matters.
              </p>
            </div>
          </div>

          {/* Cloud Computing */}
          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
              <img src="/icon-circle-cloud.svg" alt="Cloud Computing icon" className="w-24 h-24 mx-auto md:mx-0" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 ">Cloud Computing</h3>
              <p className="mt-2 text-gray-600 text-justify">
                Our <a href="#" className="text-[#0b87d7] hover:underline">cloud engineers</a> make sure you have the right tech infrastructure
                and operating model to embrace the benefits of language models
                and AI. When needed, we perform a full-scale cloud migration or
                optimize your existing cloud resources.
              </p>
            </div>
          </div>

          {/* Data Engineering */}
          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
              <img src="/icon-circle-data-engineering.svg" alt="Data Engineering icon" className="w-24 h-24 mx-auto md:mx-0" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 ">Data Engineering</h3>
              <p className="mt-2 text-gray-600 text-justify">
                We rethink your business model with data at its core and set the right 
                <a href="#" className="text-[#0b87d7] hover:underline"> data practices</a> in place to give you a long-term platform for AI innovation.
                Build the foundation for change and stay prepared for future
                transformations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LLM8;