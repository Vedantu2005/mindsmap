import React from 'react';

const Partner1 = () => {
  return (
    <section className="bg-white font-sans overflow-hidden">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side: Image with decorative dots */}
          <div className="relative flex justify-center items-center p-8">
            <img
              src="/success.webp"
              alt="Team collaborating at a whiteboard"
              className="w-full max-w-md h-auto object-cover z-10"
            />
          </div>

          {/* Right Side: Text Content */}
          <div>
            <h2 className="text-3xl md:text-3xl font-bold text-gray-800 mb-6">
              The Recipe for Success Starts With the Best Ingredients
            </h2>
            <div className="text-gray-600 space-y-4 text-lg leading-relaxed">
              <p>
                At Mindsmap AI, we realize the importance of building successful strategic partnerships.
              </p>
              <p>
                From the stage of consulting on best practices to creating and delivering value-adding custom big data solutions, we’re always on the lookout for partners with whom to start mutually beneficial cooperation.
              </p>
            </div>
            <a href="/contact">
              <button className="mt-8 bg-white text-gray-700 font-semibold cursor-pointer py-3 px-8 rounded-lg border-2 border-[#77bce8] hover:bg-[#77bce8] hover:border-[#77bce8] transition-colors duration-300">
                Become a Partner
              </button>
            </a>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="max-w-4xl mx-auto text-center mt-12 relative">
          <h2 className="text-3xl md:text-3xl font-bold text-gray-800 mb-6">
            Success Starts With Collaboration
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We keep abreast of the latest technological trends in the field of artificial intelligence (AI) and machine learning. It gives us know-how and experience that we look forward to sharing with industry representatives. Whether you are a recognized brand name or a promising startup, we are here to aid you in promoting your business growth.
          </p>
          {/* <WavyLine /> */}
        </div>

      </div>
    </section>
  );
};

export default Partner1;