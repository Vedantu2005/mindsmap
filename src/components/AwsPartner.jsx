import React from 'react';

const AwsPartner = () => {
  return (
    <div className="bg-[#CAF0F8] font-sans w-full py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side: Text Content */}
        <div className="md:w-3/5 text-center md:text-left">
          <h2 className="text-3xl md:text-3xl font-bold text-gray-800">
            Mindsmap AI is a certified AWS Partner
          </h2>
          <p className="mt-6 text-slate-600 text-lg leading-relaxed">
            As a certified cloud development partner, we build and seamlessly scale our clients' cloud solutions within a diverse AWS ecosystem. We help solve data and analytics challenges using a broad portfolio of purpose-built analytics services, scalable data lakes, and warehouses.
          </p>
          <a href="/contact">
            <button className="mt-8 bg-[#00B4D8] cursor-pointer text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-cyan-600 transition-colors duration-300 shadow-lg shadow-cyan-500/20">
              Our Cloud Expertise
            </button>
          </a>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-2/5 flex justify-center">
          <img
            src="/badge-aws.webp"
            alt="AWS Partner Select Tier Services Badge"
            className="w-64 h-auto"
            onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/256x300/FFFFFF/38bdf8?text=AWS+Partner`; }}
          />
        </div>
      </div>
    </div>
  );
};

export default AwsPartner;
