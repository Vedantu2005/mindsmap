import React from 'react';

export default function Health9() {
  const values = [
    {
      title: 'Diagnosis Made Easy',
      description: 'A helping hand to analyze large volumes of medical data.',
      icon: (
        <svg className="w-20 h-20" viewBox="0 0 80 80" fill="none">
          <rect x="15" y="30" width="50" height="35" rx="3" fill="#A3D5FF" stroke="#4A9FE8" strokeWidth="2"/>
          <rect x="15" y="30" width="50" height="6" fill="#4A9FE8"/>
          <path d="M30 20 Q35 10 40 20" stroke="#4A9FE8" strokeWidth="3" strokeLinecap="round" fill="none"/>
          <path d="M40 20 Q45 10 50 20" stroke="#4A9FE8" strokeWidth="3" strokeLinecap="round" fill="none"/>
          <circle cx="35" cy="45" r="3" fill="#4A9FE8"/>
          <circle cx="45" cy="45" r="3" fill="#4A9FE8"/>
          <path d="M32 52 Q40 56 48 52" stroke="#4A9FE8" strokeWidth="2" strokeLinecap="round" fill="none"/>
        </svg>
      )
    },
    {
      title: 'Enhanced Patient Care',
      description: 'Patient-centric care and better patient outcomes.',
      icon: (
        <svg className="w-20 h-20" viewBox="0 0 80 80" fill="none">
          <path d="M25 50 Q25 35 40 30 Q55 35 55 50 Q55 60 40 65 Q25 60 25 50" fill="#1E3A5F" stroke="#1E3A5F" strokeWidth="2"/>
          <path d="M15 45 Q15 38 20 35 L20 55 Q15 52 15 45" fill="#A3D5FF" stroke="#4A9FE8" strokeWidth="1.5"/>
          <path d="M65 45 Q65 38 60 35 L60 55 Q65 52 65 45" fill="#A3D5FF" stroke="#4A9FE8" strokeWidth="1.5"/>
          <circle cx="40" cy="45" r="2" fill="white"/>
        </svg>
      )
    },
    {
      title: 'Data Privacy',
      description: 'Your data is safe with you. You process it locally.',
      icon: (
        <svg className="w-20 h-20" viewBox="0 0 80 80" fill="none">
          <rect x="20" y="25" width="35" height="25" rx="2" fill="#A3D5FF" stroke="#4A9FE8" strokeWidth="2"/>
          <rect x="25" y="30" width="10" height="2" fill="#4A9FE8"/>
          <rect x="25" y="35" width="10" height="2" fill="#4A9FE8"/>
          <rect x="25" y="40" width="10" height="2" fill="#4A9FE8"/>
          <rect x="40" y="30" width="10" height="2" fill="#4A9FE8"/>
          <rect x="40" y="35" width="10" height="2" fill="#4A9FE8"/>
          <rect x="40" y="40" width="10" height="2" fill="#4A9FE8"/>
          <rect x="48" y="35" width="18" height="22" rx="2" fill="#1E3A5F" stroke="#1E3A5F" strokeWidth="2"/>
          <circle cx="57" cy="46" r="4" fill="#A3D5FF" stroke="#4A9FE8" strokeWidth="1.5"/>
          <rect x="55" y="48" width="4" height="5" fill="#A3D5FF"/>
        </svg>
      )
    },
    {
      title: 'Simple-to-Use Solutions',
      description: 'Quick to adapt, easy to use for non-tech audiences.',
      icon: (
        <svg className="w-20 h-20" viewBox="0 0 80 80" fill="none">
          <rect x="35" y="15" width="25" height="18" rx="2" fill="#A3D5FF" stroke="#4A9FE8" strokeWidth="2"/>
          <rect x="38" y="19" width="6" height="1.5" fill="#4A9FE8"/>
          <rect x="38" y="23" width="6" height="1.5" fill="#4A9FE8"/>
          <rect x="38" y="27" width="6" height="1.5" fill="#4A9FE8"/>
          <rect x="47" y="19" width="6" height="1.5" fill="#4A9FE8"/>
          <rect x="47" y="23" width="6" height="1.5" fill="#4A9FE8"/>
          <rect x="47" y="27" width="6" height="1.5" fill="#4A9FE8"/>
          <line x1="35" y1="33" x2="30" y2="42" stroke="#4A9FE8" strokeWidth="2"/>
          <line x1="60" y1="33" x2="65" y2="42" stroke="#4A9FE8" strokeWidth="2"/>
          <rect x="20" y="42" width="12" height="15" rx="2" fill="#A3D5FF" stroke="#4A9FE8" strokeWidth="1.5"/>
          <rect x="63" y="42" width="12" height="15" rx="2" fill="#A3D5FF" stroke="#4A9FE8" strokeWidth="1.5"/>
          <rect x="23" y="46" width="6" height="1" fill="#4A9FE8"/>
          <rect x="23" y="49" width="6" height="1" fill="#4A9FE8"/>
          <rect x="66" y="46" width="6" height="1" fill="#4A9FE8"/>
          <rect x="66" y="49" width="6" height="1" fill="#4A9FE8"/>
        </svg>
      )
    },
    {
      title: 'Business Process Automation',
      description: 'Higher level of operational efficiency and reduced human error in the workplace.',
      icon: (
        <svg className="w-20 h-20" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="38" r="15" fill="#A3D5FF" stroke="#4A9FE8" strokeWidth="2"/>
          <circle cx="40" cy="38" r="8" fill="white" stroke="#4A9FE8" strokeWidth="2"/>
          <path d="M30 28 L35 33" stroke="#4A9FE8" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M50 28 L45 33" stroke="#4A9FE8" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M50 48 L45 43" stroke="#4A9FE8" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M30 48 L35 43" stroke="#4A9FE8" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M25 38 L30 38" stroke="#4A9FE8" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M55 38 L50 38" stroke="#4A9FE8" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M20 25 L25 30 L30 25" stroke="#1E3A5F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <path d="M60 25 L55 30 L50 25" stroke="#1E3A5F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      )
    },
    {
      title: 'Custom Solutions for Your Needs',
      description: 'Haven\'t found the right fit? Need a healthcare IT solution tailored to your specific needs?',
      link: 'Let\'s Talk',
      icon: (
        <svg className="w-20 h-20" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="40" r="20" fill="white" stroke="#4A9FE8" strokeWidth="2.5"/>
          <circle cx="40" cy="40" r="12" fill="#A3D5FF" stroke="#4A9FE8" strokeWidth="2"/>
          <circle cx="40" cy="40" r="5" fill="white" stroke="#4A9FE8" strokeWidth="1.5"/>
          <circle cx="60" cy="30" r="8" fill="white" stroke="#4A9FE8" strokeWidth="2"/>
          <line x1="62" y1="35" x2="68" y2="41" stroke="#4A9FE8" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="70" cy="43" r="3" fill="white" stroke="#4A9FE8" strokeWidth="2"/>
        </svg>
      )
    }
  ];

  return (
    <div className="bg-white">
    
      {/* Partner Section */}
      <div className="bg-white py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-3xl font-bold tracking-tight text-gray-900 text-center mb-5">
            Why Partner with Mindsmap AI?
          </h2>
          <p className="text-center  text-lg text-gray-500 max-w-2xl mx-auto mb-16">
            What makes us your perfect healthcare IT solutions provider? We have an excellent repute in implementing artificial intelligence in healthcare organizations and we're always ready to address your business challenges.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* 80+ Experts */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
              <img src="/p1.svg" alt="Industry Focused" className="w-20 h-20" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                80 + Experts
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our data scientists and engineers are shaping modern medical technologies. We're experienced in digital healthcare and MedTech solution development.
              </p>
            </div>

            {/* Industry-Focused */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
               <img src="/p2.svg" alt="Industry Focused" className="w-20 h-20" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Industry-Focused
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We stay on top of the industry trends. We understand the needs of our clients and aid them with <a href="#" className="text-[#2b7fff] hover:underline">AI-based solutions</a> that solve their problems.
              </p>
            </div>

            {/* Reliable */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <img src="/p3.svg" alt="Industry Focused" className="w-20 h-20" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Reliable
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We prioritize our clients. Our goal is to help them reach new heights by innovating their businesses with AI.
              </p>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}