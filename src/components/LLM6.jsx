import React from 'react';

// A simple arrow component to be placed between steps
const ArrowIcon = () => (
  <svg className="w-16 h-16 text-[#77bce8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
  </svg>
);


const LLM6 = () => {
  return (
    <section className="bg-white py-10">
      <div className="container max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 md:text-3xl">
            Integrating Large Language Learning Models, Friction-Free
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our developers seamlessly weave conversational AI into your infrastructure.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid lg:grid-cols-3 gap-x-12 gap-y-16">
          
          {/* Step 1 */}
          <div className="relative flex flex-col items-center p-8 border-2 border-dashed border-[#77bce8] rounded-xl h-full">
            <h3 className="text-sm font-semibold tracking-wider text-gray-500 uppercase">Step 1</h3>
            <p className="text-lg font-bold text-center text-gray-800 mt-1">DATA PREPARATION</p>
            <div className="mt-8 w-full space-y-4 flex flex-col items-center flex-grow">
              <div className="w-4/5 bg-[#77bce8] cursor-pointer text-white text-center py-3 px-5 rounded-lg shadow-md">
                Client dataset
              </div>
              <p className="text-gray-500 text-lg text-center">and/or</p>
              <div className="w-4/5 bg-[#77bce8] cursor-pointer text-center text-white py-3 px-5 rounded-lg shadow-md">
                Indexed documents
              </div>
              <p className="text-lg text-center text-gray-500 mt-auto pt-4">
                If the client does not have data, we can offer different solutions: for example, parsing or buying datasets
              </p>
            </div>
            {/* Arrow connecting to Step 2 */}
            <div className="absolute top-1/2 -right-14 transform -translate-y-1/2 hidden lg:block">
                <ArrowIcon />
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative flex flex-col items-center p-8 border-2 border-dashed border-[#77bce8] rounded-xl h-full">
            <h3 className="text-sm font-semibold tracking-wider text-gray-500 uppercase">Step 2</h3>
            <p className="text-lg font-bold text-center text-gray-800 mt-1">MODEL DEPLOYMENT AND TRAINING</p>
            <div className="mt-8 w-full space-y-4 flex flex-col items-center flex-grow">
              <div className="w-4/5 bg-[#77bce8] cursor-pointer text-center text-white py-3 px-5 rounded-lg shadow-md">
                Arbitration model
              </div>
              <p className="text-lg text-center text-gray-500 max-w-xs">
                Limits the functionality so that the client does not chat on any topics
              </p>
              <div className="w-4/5 bg-[#77bce8] cursor-pointer text-center text-white py-3 px-5 rounded-lg shadow-md mt-4">
                LLM Model
              </div>
              <p className="text-lg text-center text-gray-500 mt-auto pt-4">
                Ground of idea
              </p>
            </div>
             {/* Arrow connecting to Step 3 */}
            <div className="absolute top-1/2 -right-14 transform -translate-y-1/2 hidden lg:block">
                <ArrowIcon />
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative flex flex-col items-center p-8 border-2 border-dashed border-[#77bce8] rounded-xl h-full overflow-hidden">
            <h3 className="text-sm font-semibold tracking-wider text-gray-500 uppercase">Step 3</h3>
            <p className="text-lg text-center font-bold text-gray-800 mt-1">CONNECTING WITH ENVIRONMENT</p>
            <div className="mt-8 w-full space-y-4 flex flex-col items-center flex-grow">
              <div className="w-4/5 bg-[#77bce8] cursor-pointer text-center text-white py-3 px-5 rounded-lg shadow-md">
                I/O interfaces
              </div>
              <p className="text-lg text-center text-gray-500 max-w-xs mt-2">
                Where the user will interact with the model. This is usually a chat interface or API.
              </p>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default LLM6;