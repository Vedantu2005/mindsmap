import React from 'react';

export default function Health7() {
    const services = [
        {
            title: 'Consulting',
            description: 'Have a business problem? Use our consulting services, strong tech expertise, and experience in the healthcare IT solutions market.',
            icon: "/s1.svg"
        },
        {
            title: 'Healthcare IT Solution Development',
            description: 'Not satisfied with packaged healthcare software available on the market? Let our tech team build web or mobile solutions specifically for your needs.',
            icon: "/s2.svg"
        },
        {
            title: 'Healthcare Analytics and Business Intelligence',
            description: 'Want to get insights into clinical care, administration and costs? Make use of analytics and BI tools to track KPIs and readjust your strategies.',
            icon: "/s3.svg"
        },
        {
            title: 'Testing and QA',
            description: 'Document processing systems, AI apps for mental health or physical therapy – we\'ll make sure your healthcare IT solution runs smoothly.',
            icon: "/s4.svg"
        }
    ];

    return (
        <div className="py-10 px-5">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-3xl font-bold tracking-tight text-gray-900 text-center mb-4">
                    Services We Provide
                </h2>
                <p className="text-center  text-lg text-gray-500 mb-12">
                    Artificial intelligence solutions in healthcare on demand.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-sm px-6 py-7 border border-[#77bce8] shadow-lg shadow-[#77bce8]/40 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl overflow-hidden"
                        >
                            <div className="flex items-start gap-6">
                                <div className="flex-shrink-0">
                                    <img src={service.icon} alt="service image" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xs lg:text-base font-semibold mb-1">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-800  text-xs lg:text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <button className="bg-white cursor-pointer border border-[#77bce8] hover:border-[#77bce8] hover:bg-[#77bce8] hover:text-white px-6 sm:px-8 py-2 sm:py-2 rounded-sm  text-base sm:text-lg shadow-md hover:shadow-lg transition-all">
                        Tell Us Your Challenge
                    </button>
                </div>
            </div>
        </div>
    );
}