import React from 'react';

const reasons = [
  {
    icon: '/five-stars.svg',
    title: 'Best AI Company',
    description: 'Mindsmap AI has been recognized as the best artificial intelligence company in 2022.',
  },
  {
    icon: '/www.svg', // Assuming 'www.jsx' was a typo for 'www.svg'
    title: 'Customizable Solutions',
    description: 'We develop solutions to fit the unique needs of game developers and businesses related to the gamedev industry.',
  },
  {
    icon: '/three-man.svg',
    title: 'R&D Team',
    description: "We're a team of skilled data scientists and engineers with 8+ years of experience in AI software development.",
  },
];

const Game6 = () => {
  return (
    <div className="bg-white font-sans antialiased text-gray-800">
      <div className="container mx-auto px-4 py-16 sm:py-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-3xl font-bold tracking-tight text-gray-900">
            Why Mindsmap AI?
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            We bring AI to the gaming industry.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {reasons.map((reason) => (
            <div 
              key={reason.title} 
              className="text-center flex flex-col items-center"
            >
              <img 
                src={reason.icon} 
                alt={`${reason.title} icon`} 
                className="h-16 w-16 mb-6"
                // Adding a fallback style in case the SVG doesn't load
                onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.textContent = 'Icon failed to load'; }}
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Game6;
