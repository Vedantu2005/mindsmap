import React from 'react';

// Data for the list items
const solutions = [
  {
    number: '1',
    text: 'Detect, recognize & identify objects from raw images of different quality',
  },
  {
    number: '2',
    text: 'Have a convolutional neural network algorithm under the hood',
  },
  {
    number: '3',
    text: 'Amplify security, sentiment analysis, object classification, diagnostics, etc.',
  },
];

const Img1 = () => {
  return (
    <div className="bg-white font-sans py-10 sm:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Introductory Text */}
        <div className="max-w-6xl mx-auto text-center text-gray-600 space-y-6 mb-16">
          <p>
            Mindswap AI has 7+ years of experience in computer vision under the belt. We cooperate with clients across multiple industries and assist them in levelling up their businesses by harnessing the power of Big Data.
          </p>
          <p>
            We have gained clients' trust across the globe by creating and delivering top-notch custom solutions for different industries. Our team of <a href="#" className="text-[#77bce8] hover:underline">machine learning (ML) experts</a> has extensive experience in on-demand computer vision and image recognition software development of any complexity.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left Column: Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              We Develop Custom Image Recognition and Analysis Solutions Focused on Your Business
            </h2>
            <p className="text-gray-500 mb-8">
              We can create bespoke solutions that:
            </p>
            
            {/* Numbered List */}
            <ul className="space-y-6">
              {solutions.map((item) => (
                <li key={item.number} className="flex items-start">
                  <span className="text-5xl font-bold text-[#77bce8] mr-4 mt-[-4px]">{item.number}</span>
                  <span className="text-gray-700 mt-2">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Image Composition */}
          <div className="w-full lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0">
            <div className="relative w-[450px] h-[350px] sm:w-[500px] sm:h-[400px]">
              {/* Decorative background shape with gradient */}
              
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Background Image */}
                <img 
                  src="/bottles-on-the-shelves.webp" // Replace with your image path
                  alt="Grocery store shelf with various products" 
                  className="absolute w-full top-0 left-0 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Img1;
