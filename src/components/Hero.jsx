import React from 'react';

const Hero = () => {
  return (
    <section className="bg-white font-sans">
      {/* Background with subtle dot pattern */}
      <div className="bg-[radial-gradient(#e0f2fe_1px,transparent_1px)] [background-size:24px_24px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side: Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
                Strategic Partnerships
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
                Grow your business with Mindsmap AI, a leading data science consulting and AI software development company.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                  <a href="/become-partner" className="bg-[#77bce8] text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                      Become a Partner
                  </a>
                  <a href="/contact" className="bg-white text-gray-800 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 border border-gray-300">
                      Contact Us
                  </a>
              </div>
            </div>

            {/* Right Side: Image */}
            <div className="flex justify-center items-center">
                <div className="relative w-full max-w-md">
                    <img 
                        src="https://assets-us-01.kc-usercontent.com/b1495851-c47d-0087-29c8-65e1780b1b3b/c9009e76-a432-4ba1-a560-f22f8bf65e06/AI%20Square.png" 
                        alt="Strategic Partnership" 
                        className="rounded-2xl shadow-2xl w-full h-auto object-cover border-8 border-white"
                    />
                </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

