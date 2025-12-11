import React from 'react';

const Auto2 = () => {
  return (
    <div className="bg-white font-sans text-gray-800 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-3xl font-bold text-gray-800 mb-4">
            Our Expertise
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            We provide automotive AI services for car manufacturers that leverage 3D computer vision to make data-driven decisions at each manufacturing stage.
          </p>
        </div>

        {/* Geometry Optimisation Section */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold mb-6 lg:col-span-1">
            Geometry Optimisation for Quick Design Studies
          </h2>

          {/* Image Section */}
          {/* On desktop, this is moved to the 2nd column and spans 2 rows */}
          <div className="w-full my-6 lg:my-0 lg:col-start-2 lg:row-start-1 lg:row-span-2">
            <div className="">
              <img
                src="/geometry.webp"
                alt="Geometry Optimisation for Quick Design Studies"
                className="rounded-xl w-full object-cover"
              />
            </div>
          </div>

          {/* Text Content Section */}
          {/* On desktop, this flows under the heading in the 1st column */}
          <div className="w-full lg:col-span-1">
            <p className="mb-4">
              <span className="font-semibold">Problem:</span> Creating a high-performant geometry design is challenging and risk-prone. Simulations are widely used to aid manufacturers in building a robust design. Yet, they require much time and computational resources to solve complex load cases.
            </p>
            <p>
              <span className="font-semibold">Solution:</span> Amplify design of complex geometries with deep learning techniques. Geometry AI solutions for the automotive industry allow for a safe product design with real-time simulation while reducing costs and engineering effort.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Auto2;
