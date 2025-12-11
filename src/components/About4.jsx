import React from 'react';

const About4 = () => {
  return (
    <section 
      className="relative bg-cover bg-center text-white py-10 px-4 sm:px-6 lg:px-8 font-sans" 
      style={{ backgroundImage: "url('/about-our-mission-bg.webp')" }}
    >
      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-blue-900/80"></div> */}

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-left z-10">
        <h2 className="text-3xl md:text-3xl font-bold mb-6">
          Our Mission
        </h2>
        <div className="text-lg text-slate-200 space-y-6">
          <p>
            Mindsmap AI's mission is to help our Clients rocket their competitiveness and get brilliant results of their work unseen before. We strive to reach those goals applying innovative and proprietary development technologies, providing exceptional services, and using excellent professional expertise.
          </p>
          <p>
            Since 2022, our company helps businesses of all sizes all over the world to get valuable insights into data, automate repetitive tasks, enhance performance, add AI-driven features, and prevent cost overruns.
          </p>
          <p>
            For these 6 years, we have built a sustainable business based on trust, latest innovation, state-of-the-art technologies, and experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About4;
