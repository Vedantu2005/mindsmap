import React from 'react';

const FinTech7 = () => {
  return (
    <div className="bg-white font-sans py-5 px-4 sm:px-6 lg:py-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Services for Your Needs
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            Make use of artificial intelligence in games to pull ahead of your competitors.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Card 1: Consulting */}
          <div className="relative p-6 bg-white rounded-lg border border-[#77bce8] shadow-lg shadow-[#77bce8]/40 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl overflow-hidden">
            {/* --- IMAGE IS NOW ABSOLUTELY POSITIONED --- */}
            <img 
              src="/consulting.svg" 
              alt="Consulting Icon" 
              className="absolute top-1/2 -translate-y-1/2 -left-14 w-32 h-32 " // Example classes for styling the SVG
            />
            {/* --- TEXT DIV HAS LEFT MARGIN --- */}
            <div className="ml-20">
              <h3 className="text-lg font-bold text-gray-900">Consulting</h3>
              <p className="mt-2 text-base text-gray-600">
                Want to use AI in your Fintech projects but don’t know where to start? Explain your project vision and get a detailed estimate from our AI consultants.
              </p>
            </div>
          </div>

          {/* Card 2: Financial Technology Solutions Development */}
          <div className="relative p-6 bg-white rounded-lg border border-[#77bce8] shadow-lg shadow-[#77bce8]/40 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl overflow-hidden">
            <img 
              src="/ai.svg" 
              alt="AI Icon" 
              className="absolute top-1/2 -translate-y-1/2 -left-14 w-32 h-32"
            />
            <div className="ml-20">
              <h3 className="text-lg font-bold text-gray-900">Financial Technology Solutions Development</h3>
              <p className="mt-2 text-base text-gray-600">
                Need a robust artificial intelligence fintech solution with a focus on quality and top industry trends? Get help from us.
              </p>
            </div>
          </div>

          {/* Card 3: Business-Relevant Analytics */}
          <div className="relative p-6 bg-white rounded-lg border border-[#77bce8] shadow-lg shadow-[#77bce8]/40 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl overflow-hidden">
            <img 
              src="/phones.svg" 
              alt="Mobile Icon" 
              className="absolute top-1/2 -translate-y-1/2 -left-14 w-32 h-32"
            />
            <div className="ml-20">
              <h3 className="text-lg font-bold text-gray-900">Business-Relevant Analytics</h3>
              <p className="mt-2 text-base text-gray-600">
                Get authentic insights that will move your business forward with our custom software built according to your requirements.
              </p>
            </div>
          </div>

        </div>
        
        {/* CTA Section */}
        <div className="mt-16 text-center">
            <p className="text-lg text-gray-600">
                Want to transform your bank’s capabilities with financial technology solutions?
            </p>
            <button className="mt-4 px-8 py-3 border border-[#77bce8] text-base cursor-pointer font-medium rounded-md text-gray-700 bg-white hover:bg-[#77bce8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Contact Us
            </button>
        </div>

      </div>
    </div>
  );
};

export default FinTech7;