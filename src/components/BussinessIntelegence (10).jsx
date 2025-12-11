import React from "react";

const technologies = [
  "/BussinessIntelegence/page9-1.svg",
  "/BussinessIntelegence/page9-2.svg",
  "/BussinessIntelegence/page9-3.svg",
  "/BussinessIntelegence/page9-4.svg",
  "/BussinessIntelegence/page9-5.svg",
  "/BussinessIntelegence/page9-6.svg",
];

const Page9 = () => {
  return (
    <div className="bg-white py-12 px-4 font-sans">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold mb-2">Technologies</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          We work with the latest tech to make your business successful and
          future-proof.
        </p>
      </div>

      {/* Technology Logos */}
      <div className="max-w-3xl mx-auto flex flex-wrap justify-center items-center gap-6 p-5">
        {technologies.map((tech, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={tech}
              alt={`tech-${index}`}
              className="h-10 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page9;
