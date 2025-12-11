import React from 'react';

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block ml-1 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

const Industries = () => {
  const industryData = [
    {
      title: 'Advertising',
      description: 'Improve your advertising capabilities through AI and advanced customer behavior analytics.',
    },
    {
      title: 'FinTech',
      description: 'Optimize your processes and improve safety and security through custom AI solutions.',
    },
    {
      title: 'Retail & E-commerce',
      description: 'The entire industry is using AI to make strategic decisions. Don’t left behind! Let our data scientists help you!',
    },
    {
      title: 'Entertainment',
      description: 'Reduce customer churn and analyze enormous amounts of data to become more productive and provide outstanding services.',
    },
    {
      title: 'Logistics & Supply Chain',
      description: 'Enable greater operational efficiency by introducing disruptive logistic solutions that solve your business challenges.',
    },
    {
      title: 'Your Industry',
      description: 'From a different industry? Contact us for data science consulting to learn how our AI company can add value to your business.',
    },
  ];

  return (
    <div className="bg-white font-sans w-full lg:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side: Content Box */}
        <div className="lg:w-3/5 w-full">
          <div className="bg-cyan-50/50 border border-cyan-200/50 p-8 sm:p-12 rounded-3xl">
            <h2 className="text-3xl md:text-3xl font-bold text-gray-800">
              Industries We Are Transforming
            </h2>
            <p className="mt-4 text-slate-600 text-lg">
              Take a look at examples of our work and learn how our clients from different industries have benefited from our <a href="#" className="text-cyan-600 font-medium hover:underline">data science consulting services</a>.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
              {industryData.map((item, index) => (
                <div key={index}>
                  <a href="#" className="group text-xl font-bold text-gray-800 hover:text-cyan-600 transition-colors inline-flex items-center">
                    {item.title}
                    <ArrowIcon />
                  </a>
                  <p className="mt-2 text-slate-600 text-base">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="lg:w-2/5 w-full mt-0 lg:mt-0">
          <img 
            src="https://imageio.forbes.com/specials-images/imageserve/5d9231058b5ffa0006556d13/Digital-transformation-technology-strategy--digitization-and-digitalization-of/960x0.jpg?format=jpg&width=960" 
            alt="Abstract visualization of data transforming industries" 
            className="rounded-3xl shadow-xl w-full h-auto object-cover"
            onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/600x700/e0f2fe/0891b2?text=Industry+Transformation`; }}
          />
        </div>
      </div>
    </div>
  );
};

export default Industries;
