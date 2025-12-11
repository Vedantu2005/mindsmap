import React from "react";

export default function Services() {
  const services = [
    { icon: "/icon-bag.svg", title: "E-Commerce" },
    { icon: "/icon-marketing-h.svg", title: "Marketing and Advertising" },
    { icon: "/icon-finance-banking.svg", title: "Banking and Finance" },
    { icon: "/icon-car.svg", title: "Logistics and Transportation" },
    { icon: "/icon-insurance-2.svg", title: "Healthcare" },
    { icon: "/icon-e-commerce.svg", title: "Retail" },
    { icon: "/icon-data-processing.svg", title: "Manufacturing" },
  ];

  return (
    <section className="w-full py-10 flex flex-col items-center bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12 max-w-2xl">
        We Bring Value to the Following Industries through Web Development Services
      </h2>

      <div className="flex flex-col items-center mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-center mb-12">
          {services.slice(0, 6).map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={service.icon}
                alt={service.title}
                className="w-14 h-14 mb-3"
              />
              <p className="text-gray-800 text-base font-medium">
                {service.title}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="flex flex-col items-center">
            <img
              src={services[6].icon}
              alt={services[6].title}
              className="w-14 h-14 mb-3"
            />
            <p className="text-gray-800 text-base font-medium">
              {services[6].title}
            </p>
          </div>
        </div>
      </div>

      <button
        className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all px-6 py-2 rounded-md cursor-pointer"
      >
        Get Started
      </button>
    </section>
  );
}
