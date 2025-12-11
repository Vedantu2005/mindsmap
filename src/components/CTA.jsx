import React from 'react';

const CTA = () => {
  return (
    <section className="bg-white font-sans py-10 ">
      <div className="">
        <div 
          className="rounded-2xl p-10 md:p-10 text-center text-white relative overflow-hidden"
          style={{ 
            backgroundImage: "url('/banner.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="relative">
            <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight drop-shadow-md">
              AI enterprise solution consulting and development
            </h2>
            <p className="mt-4 text-lg text-slate-200 max-w-2xl mx-auto">
              Book a consultation with our specialist to discuss the intricacies of enterprise software creation empowered with AI.
            </p>
            <a 
              href="/contact" 
              className="mt-8 inline-block bg-cyan-500 text-white font-bold py-3 px-10 rounded-full hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;