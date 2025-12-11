import React from 'react';

// Reusable component for each role
const RoleCard = ({ title, description }) => (
    <div>
        <h3 className="text-lg font-semibold text-[#77bce8] mb-1">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
);

const WhoWeAre = () => {
    const roles = [
        { title: 'Data Scientists', description: 'Who build machine learning pipelines and personalized data products.' },
        { title: 'Architects', description: 'With experience in large scale systems design and implementation.' },
        { title: 'Data Analysts', description: 'Ready to help you to get valuable insights from your data.' },
        { title: 'Engineers', description: 'Proficient in big data management technologies.' },
        { title: 'Consultants', description: 'Who are ready to help you with the right decision.' },
        { title: 'Designers', description: 'With years of experience in UI/UX design.' },
    ];

    return (
        <section className="bg-white font-sans py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                
                {/* Left Side: Image */}
                <div className="flex items-center justify-center">
                    <img 
                        src="/team.webp" 
                        alt="Our Team" 
                        className=" w-full max-w-lg h-auto object-cover"
                    />
                </div>

                {/* Right Side: Text Content */}
                <div className="lg:pl-8">
                    <h2 className="text-3xl md:text-3xl font-bold text-gray-800 mb-8">
                        Who We Are
                    </h2>
                    <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
                        {roles.map(role => (
                            <RoleCard key={role.title} title={role.title} description={role.description} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;

