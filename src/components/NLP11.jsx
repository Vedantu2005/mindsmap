import React from 'react';
import { useInView } from 'react-intersection-observer'; // To detect when the component is visible
import CountUp from 'react-countup'; // To animate the numbers

const quickFacts = [
  { value: '150+', label: 'projects delivered' },
  { value: '80+', label: 'senior-level engineers' },
  { value: '10', label: 'years of experience in AI' },
  { value: '4.9', label: 'rated on Clutch' },
  { value: '3', label: 'offices: Cyprus, Lithuania, USA' },
];

const industries = [
  { name: 'Marketing & Advertising', image: '/icon-marketing-h.svg' },
  { name: 'E-commerce', image: '/icon-ecommerce-alt.svg' },
  { name: 'Finance', image: '/icon-finance-banking-alt.svg' },
  { name: 'Supply Chain & Logistics', image: '/icon-car.svg' },
  { name: 'Game & Entertainment', image: '/icon-video-images-alt.svg' },
];

const mainBlue = '#00B4D8';

// --- MODIFIED FactItem COMPONENT ---
const FactItem = ({ value, label }) => {
  // This hook will tell us when the component is in the viewport
  const { ref, inView } = useInView({
    triggerOnce: true, // The animation will only trigger once
    threshold: 0.1,    // Trigger when 10% of the item is visible
  });

  // Logic to handle numbers, decimals, and suffixes like '+'
  const numericalValue = parseFloat(value);
  const suffix = value.toString().replace(numericalValue.toString(), '').trim();
  const decimals = (numericalValue.toString().split('.')[1] || '').length;

  return (
    <div ref={ref} className="flex flex-col items-center text-center p-2">
      <div className="text-5xl font-bold mb-1" style={{ color: mainBlue }}>
        {inView ? (
          <CountUp
            start={0}
            end={numericalValue}
            duration={2.5}
            separator=","
            decimals={decimals}
            suffix={suffix}
          />
        ) : (
          '0' // Display 0 until the animation starts
        )}
      </div>
      <p className="text-gray-700 max-w-[120px]">{label}</p>
    </div>
  );
};

const IndustryItem = ({ name, image }) => (
  <div className="flex flex-col items-center text-center p-4">
    <div className="mb-3 w-24 h-24 flex items-center justify-center rounded-lg">
      {image ? (
        <img src={image} alt={name} className="w-16 h-16 object-contain" />
      ) : (
        <span className="text-gray-400 text-sm">Image</span>
      )}
    </div>
    <p className="text-[#0b87d7] font-semibold hover:text-gray-900 transition duration-150">
      {name}
    </p>
  </div>
);

const NLP11 = () => {
  return (
    <div className="bg-white py-10 px-4 font-sans max-w-6xl mx-auto">
      {/* Quick Facts Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Quick Facts</h2>
        <p className=" text-gray-500 max-w-3xl mx-auto">
          Mindsmap AI has been at the forefront of technology since 2018. Here are some facts about us:
        </p>
        <div className="flex justify-center flex-wrap gap-x-8 gap-y-6 mt-10">
          {quickFacts.map((fact, i) => (
            <FactItem key={i} value={fact.value} label={fact.label} />
          ))}
        </div>
      </div>

      {/* Industries Section */}
      <div className="text-center pt-2">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Industries</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-6">
          {industries.map((industry, i) => (
            <IndustryItem key={i} name={industry.name} image={industry.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NLP11;