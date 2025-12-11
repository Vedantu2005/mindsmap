import React from 'react';

// This is a reusable component for each service card.
// It takes icon, title, and description as props.
const ServiceCard = ({ icon, title, description, children }) => (
    <div className=" p-6 md:p-4 flex items-start space-x-4 h-full bg-white rounded-lg border border-[#77bce8] shadow-lg transition-shadow duration-300 hover:shadow-blue-200">
        <img src={icon} alt={`${title} icon`} className="w-24 h-24" />
        <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600 leading-relaxed">
                {description}
                {children}
            </p>
        </div>
    </div>
);

const Img6 = () => {
    // Data for the service cards to keep the JSX clean.
    const services = [
        {
            icon: '/icon-media.svg',
            title: 'Media & Entertainment',
            description: 'Get a solid bespoke solution developed for your needs to analyze visual content, provide your consumers with highly accurate and diverse recommendations, foster user engagement, and reach new audiences.',
        },
        {
            icon: '/icon-digital-health-3.svg',
            title: 'Digital Health',
            description: 'Facilitate analysis of medical images, enable computer-aided diagnostics, allow predictive analytics and therapy, enhance mobile healthcare apps with ',
            linkText: 'custom computer vision software development.',
            linkHref: '#',
        },
        {
            icon: '/icon-retail-2.svg',
            title: 'Retail',
            description: 'Improve search experience by developing image recognition and analysis software solutions to please your customers with intelligent search by photo and help them find merchandise easily.',
        },
        {
            icon: '/icon-robotics.svg',
            title: 'Robotics',
            description: 'Enable machines to efficiently perform a variety of repetitive tasks, such as object and target recognition, navigation, manufacturing & assembly, assisting physically challenged people with image processing techniques, etc.',
        },
    ];

    return (
        <div className="p-4 sm:p-8 md:p-12">
            <div className="max-w-6xl mx-auto">

                {/* Top Section: Intro and Logistics Card */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {/* Introduction Text */}
                    <div className="flex flex-col justify-center">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We have gained clients’ trust across the globe by creating top-notch custom solutions for different industries. Our team of{' '}
                            <a href="#" className="text-[#77bce8] hover:underline">
                                machine learning (ML) experts
                            </a>{' '}
                            is experienced in on-demand computer vision and image recognition software development. We tailor solutions to clients’ industry-specific queries. We serve such industries as logistics, retail, media & entertainment, healthcare, etc.
                        </p>
                    </div>

                    {/* Logistics Card (special placement) */}
                    <ServiceCard
                        icon="/icon-logistics.svg"
                        title="Logistics"
                        description="Analyze, plan, design, and control transferring processes, cargo locations, routes, etc.; monitor delivery status in real time by using ML algorithms for image processing."
                    />
                </div>

                {/* Bottom Section: Grid of other service cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description}>
                            {service.linkText && (
                                <a href={service.linkHref} className="text-[#77bce8] hover:underline">
                                    {service.linkText}
                                </a>
                            )}
                        </ServiceCard>
                    ))}
                </div>

                {/* "Request a Free Quote" Button */}
                <div className="text-center mt-12">
                    <button className="px-8 py-3 border text-[#77bce8] font-semibold rounded-lg cursor-pointer hover:bg-[#77bce8] hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                        Request a Free Quote

                    </button>
                </div>

            </div>
        </div>
    );
};

export default Img6;
