import React from "react";

const Page6 = () => {
  return (
    <div className=" bg-white flex flex-col items-center justify-center px-4 ">
      {/* Header Section */}
      <div className="text-center max-w-3xl mb-10">
        <h3 className="text-2xl sm:text-3xl  text-gray-900 mb-4">
          Technologies and Architecture Patterns We Work With
        </h3>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          As a cloud partner, we excel at using the right combination of tools,
          modules, and integrations to deliver a high-performing architecture.
        </p>
      </div>

      {/* Image Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center max-w-5xl w-full">
        <img
          src="/CloudService/page6-1.svg"
          alt=""
          className="w-36 sm:w-36 mx-auto"
        />
        <img
          src="/CloudService/page6-2.svg"
          alt=""
          className="w-48 sm:w-64 mx-auto"
        />
        <img
          src="/CloudService/page6-3.svg"
          alt=""
          className="w-48 sm:w-56 mx-auto"
        />
      </div>
    </div>
  );
};

export default Page6;
