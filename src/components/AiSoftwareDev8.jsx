import React from 'react';

export default function AISoftwareCTA() {
  return (<>
  <section>
            <div className="flex justify-center items-center p-4 "> {/* Outer padding and centering */}
            <div
                className="relative overflow-hidden rounded-lg shadow-xl p-8 md:p-12 lg:p-16 text-center w-full max-w-6xl mx-auto"
                style={{
                    backgroundImage: 'url(/netbanner.webp)', // Adjust path if needed
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="relative z-10"> {/* Wrap content in relative div to ensure it's above background img */}

                    <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
                        Automate time-consuming tasks with Generative AI
                    </h2>
                    <p className="text-white text-base md:text-lg mb-8 max-w-2xl mx-auto ">
                        Leverage Generative AI to optimize your business and reduce operational costs.
                    </p>
                    <button
                        className="bg-[#00B4D8] hover:bg-[#00B4D8] text-white font-bold py-3 px-10 rounded-md transition duration-300 ease-in-out shadow-lg"
                    >
                        Read More
                    </button>
                </div>
            </div>
        </div>
        </section>
    <div className="relative bg-white py-20 px-6 overflow-hidden">
      
      {/* Decorative orange dots - bottom left */}
      <div 
        className="absolute bottom-32 left-48 w-32 h-32"
        style={{
          backgroundImage: 'radial-gradient(circle, #FF9F43 2px, transparent 2px)',
          backgroundSize: '12px 12px',
          opacity: 0.6
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Looking for a Reliable Provider of Custom AI Software Development Services?
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Drop us a line to start your project today! We are here to help your company with the development of custom AI solutions and applications from scratch.
            </p>
            
            <div>
              <button className="px-8 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-colors duration-300">
                Let's Work Together
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            {/* Background decorative circle */}
            <div className="absolute -bottom-8 -right-8 w-96 h-96 bg-blue-100 rounded-full opacity-50 -z-10"></div>
            
            {/* Image container - replace src with your image path */}
            <div className="relative z-10">
              <img 
                src="/ai-software-development.webp" 
                alt="Developer"
                className="w-full max-w-md mx-auto"
              />
              {/* Replace /api/placeholder/500/500 with your actual image path from public folder */}
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
}