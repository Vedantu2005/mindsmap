import React from 'react';
import { TbBulb, TbRocket } from "react-icons/tb";
import { VscBeaker } from "react-icons/vsc";
import { IoOptionsOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import { FiSmartphone } from "react-icons/fi";


const Help = () => {
  const services = [
    {
      icon: <TbBulb size={30} className="text-purple-600" />,
      bgColor: 'bg-purple-50',
      title: "AI/ML Strategy & Consulting",
      description: "Have a project idea and need help implementing it? We're here to consult you and share our knowledge to help you avoid all unnecessary pitfalls.",
    },
    {
      icon: <VscBeaker size={30} className="text-orange-600" />,
      bgColor: 'bg-orange-50',
      title: "PoC of AI-based Solution",
      description: "POC is an essential step before adopting any AI solution. If you have a project idea, our data science consultants will verify that your concept has potential.",
    },
    {
      icon: <TbRocket size={30} className="text-green-600" />,
      bgColor: 'bg-green-50',
      title: "MVP of AI-based Product",
      description: "Need a breakthrough AI product? We're ready to start with a version of just enough features to satisfy early customers and provide feedback for product development.",
    },
    {
      icon: <IoOptionsOutline size={30} className="text-teal-600" />,
      bgColor: 'bg-teal-50',
      title: "Custom Model Development",
      description: "We can build and train custom models for your business needs, or retrain your existing ones (open-source and proprietary) for better efficiency and scalability.",
    },
    {
      icon: <FaCode size={30} className="text-amber-600" />,
      bgColor: 'bg-amber-50',
      title: "AI Software Development",
      description: "If you need to develop an innovative web application from scratch, or empower the existing one with AI capabilities, let our experts help you.",
    },
    {
      icon: <FiSmartphone size={30} className="text-blue-600" />,
      bgColor: 'bg-blue-50',
      title: "AI-driven Mobile App Development",
      description: "Our experts are here to help you build your innovative mobile app from scratch and power it with AI capabilities that your users will love.",
    },
  ];

  return (
    <div className="bg-white font-sans w-full py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl md:text-3xl font-bold text-gray-800 mb-4">
          How We Can Help You
        </h1>
        <p className="max-w-3xl mx-auto text-slate-600 text-lg mb-16">
          We welcome opportunities to work alongside different teams over projects of any complexity. By working together, we will develop new systems, solutions, and products to separate you from your competition.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border-2 border-sky-100/80 rounded-2xl cursor-pointer p-8 text-left shadow-lg shadow-sky-100/50 transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-sky-200"
            >
              <div className={`inline-block p-4 rounded-xl mb-6 ${service.bgColor}`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <a href="/contact">
            <button className="bg-white text-sky-600 cursor-pointer font-semibold py-3 px-8 border-2 border-[#00B4D8] rounded-lg shadow-md transition-all duration-300 hover:bg-[#00B4D8] hover:text-white hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-75">
              I Need Free Consultation
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Help;
