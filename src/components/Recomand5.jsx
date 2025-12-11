import React from 'react';

const Recomand5 = () => {
  return (
    <section className="p-5 md:p-10">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-10">
          How We Build Recommendation Systems
        </h2>

        {/* Desktop Image: Hidden on small screens, shown on large */}
        <div className="hidden lg:block mb-10">
          <img
            src="/path.png" // Assuming path.png is in your public folder
            alt="How We Build Recommendation Systems - Desktop View"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Mobile Image: Shown on small screens, hidden on large */}
        <div className="block lg:hidden mb-10">
          <img
            src="/path1.png" // Assuming path1.png is in your public folder
            alt="How We Build Recommendation Systems - Mobile View"
            className="w-full h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Recomand5;