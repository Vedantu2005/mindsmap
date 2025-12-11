import React from 'react';

const About3 = () => {
  // Create an array of badge numbers from 1 to 16
  const badgeNumbers = Array.from({ length: 16 }, (_, i) => i + 1);

  return (
    <div className="bg-white font-sans w-full py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-3xl font-bold text-gray-800">
          Certificates
        </h2>
        <p className="mt-4 text-slate-600 text-lg max-w-3xl mx-auto">
          Mindsmap AI is a certified AWS Partner. We have certifications that qualify our skills, knowledge and expertise.
        </p>
        
        <div className="mt-12 grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-6 md:gap-8 items-center justify-center">
          {badgeNumbers.map((num) => (
            <div key={num} className="flex justify-center items-center">
              <img
                src={`/badge${num}.webp`}
                alt={`Certificate Badge ${num}`}
                className="w-28 h-auto object-contain"
                onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/112x112/FFFFFF/38bdf8?text=Badge+${num}`; }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About3;
