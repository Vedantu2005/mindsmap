import React from "react";

const Systems = () => {
  const systems = [
    {
      title: "Business Analytics",
      desc: "Get valuable insights based on your enterprise data to make your decision-making process more data-driven.",
    },
    {
      title: "Data Visualization",
      desc: "Visualize your data in a convenient and understandable way to gain a complete overview.",
    },
    {
      title: "Project Management",
      desc: "Enhance planning, projects & tasks monitoring, and interaction between your team members.",
    },
    {
      title: "Supply Chain Management",
      desc: "Optimize processes related to cooperation with your suppliers and customers.",
    },
    {
      title: "Customer Relationship Management",
      desc: "Improve interaction processes with your existing clients and potential customers to grow your business.",
    },
    {
      title: "Enterprise Resource Planning",
      desc: "Manage dozens of your business functions in a single system, streamline all your processes with ease.",
    },
    {
      title: "Content Recommendation Systems",
      desc: "Deliver relevant content and engage users with personalized recommendations (products, , etc) to improve user experience.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 text-center relative z-10">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
        Types of Systems We Can Build
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed">
        We create different kinds of custom web solutions and implement modern
        technologies such as Machine Learning,{" "}
        <span className="text-blue-600 hover:underline cursor-pointer">
          Artificial Intelligence
        </span>
        , Big Data Analytics and many others to help you transform your
        established working processes.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
        {systems.map((item, index) => (
          <div key={index} className="space-y-3">
            <div className="w-10 h-0.5 bg-orange-500"></div>
            <h3 className="font-semibold text-gray-800">{item.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 mb-10 relative z-20">
        <button className="px-8 py-3 border border-[#1a66cc] text-[#1a66cc] rounded-md hover:bg-[#1a66cc] hover:text-white transition cursor-pointer">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default Systems;
