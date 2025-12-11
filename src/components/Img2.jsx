import React from 'react';

const Img2 = () => {
  return (
    <div className="bg-white font-sans py-10 sm:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-6">
          Your Project Development Roadmap
        </h2>

        {/* Introductory Text */}
        <div className="text-center text-gray-600 max-w-4xl mx-auto space-y-4 mb-12">
          <p>
            Visual content is a trend in information provision. It makes image identification and recognition and analysis solutions an integral part of many business workflows. Developed for the client’s business, they enable process automation and reduce labour costs.
          </p>
          <p>
            Businesses get in touch with Mindswap AI having different initial queries. We never take a one-size-fits-all approach but foster close cooperation with each client over a best-fit custom solution. Together, we map out development phases based on the available datasets.
          </p>
        </div>

        {/* Roadmap Image Section */}
        <div className="flex justify-center px-4 sm:px-0">
          {/* Desktop Image: Visible on medium screens and up */}
          <img 
            src="/img.png" 
            alt="Project development roadmap" 
            className="hidden md:block w-full h-auto object-contain"
          />

          {/* Mobile Images: Visible only on small screens, stacked vertically */}
          <div className="block md:hidden w-full space-y-6">
            {/* Replace these src paths with your two mobile images */}
            <img 
              src="/m1.png" 
              alt="Roadmap part 1 for mobile" 
              className="w-full h-auto object-contain"
            />
            <img 
              src="/m2.png" 
              alt="Roadmap part 2 for mobile" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Concluding Text */}
        <div className="text-center text-gray-600 max-w-4xl mx-auto mt-16">
          <p>
            The solution we offer is based on state-of-the-art technologies, and may include using different image recognition APIs developed by market leaders such as Amazon, Azure, Google, etc.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Img2;

