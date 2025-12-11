import React from 'react';

const Mission = () => {
  return (
    <div 
      className="font-sans w-full"
      style={{
        background: 'linear-gradient(84.08deg, #92c9ec 4.41%, rgba(146, 201, 236, 0.25) 49.68%, #92c9ec 95.02%)'
      }}
    >
      <div className="flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Left side: Text content */}
          <div className="text-center md:text-left">
            <h1 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-6 leading-tight">
              Our Mission is to Bring the Power of AI to Every Business
            </h1>
            <p className="text-lg text-slate-700 mb-4">
              We are a data science and analytics consulting firm delivering AI-powered solutions to companies who want to leverage data and machine learning algorithms for business value.
            </p>
            <p className="text-lg text-slate-700">
              As an artificial intelligence company, we're focused on AI and Big data software development. We help businesses innovate with AI, enrich customer insights, automate processes & be more cost-efficient.
            </p>
          </div>

          {/* Right side: Image */}
          <div className="flex justify-center p-4">
            <img
              src="https://bpsme.com/wp-content/uploads/2023/12/Copilot-with-innovations.jpg"
              alt="AI and circuit board technology"
              className="rounded-2xl shadow-2xl w-full max-w-md object-cover transform transition-transform duration-500 hover:scale-105"
              onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/92c9ec/FFFFFF?text=Vision'; }}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Mission;

