import React from 'react';

// Data for the diagram's five pillars.
// The 'icon' property holds the filename string for the SVG asset.
const diagramData = [
    {
        title: "Scalable data lakes",
        icon: "icon-data-lake-arrow.svg",
        services: ["Amazon Simple Storage", "Service (Amazon S3)", "AWS Lake Formation"]
    },
    {
        title: "Purpose-built analytics services",
        icon: "icon-visualization.svg",
        services: ["Amazon Athena", "Amazon EMR", "Amazon Elasticsearch", "Amazon Kinesis", "Amazon Redshift"]
    },
    {
        title: "Seamless data movement",
        icon: "icon-separate.svg",
        services: ["AWS Glue", "AWS Glue Elastic Views"]
    },
    {
        title: "Unified governance",
        icon: "icon-retail-6.svg",
        services: ["Row-level security for", "AWS Lake Formation"]
    },
    {
        title: "Performance cost effectiveness",
        icon: "icon-dollar-alt.svg",
        services: ["Amazon EC2", "AWS Saving Plans"]
    },
];

// Component for a single pillar in the horizontal (desktop) diagram
const DiagramPillarDesktop = ({ data }) => {
    return (
        <div className="flex flex-col items-center w-full px-4 relative">
            {/* The connector lines are now managed by the mda-desktop.svg background image */}
            
            {/* Icon and Title */}
            <div className="relative z-10 mt-[70px] flex flex-col items-center text-center">
                <div className="p-4 bg-white rounded-xl shadow-lg border border-blue-100">
                    {/* Increased icon size to w-14 h-14 */}
                    <img 
                        src={`/${data.icon}`} 
                        alt={`${data.title} icon`} 
                        className="w-14 h-14" 
                    />
                </div>
                <h3 className="mt-4 font-semibold text-gray-800 text-base">{data.title}</h3>
            </div>

            {/* Services List */}
            <ul className="mt-4 space-y-1 text-sm text-gray-600 text-center min-h-[100px] w-full max-w-[200px]">
                {data.services.map((service, i) => (
                    <li key={i} className="leading-tight">{service}</li>
                ))}
            </ul>
        </div>
    );
};

// Component for a single pillar in the vertical (mobile) diagram
const DiagramPillarMobile = ({ data, isLast }) => {
    return (
        <div className="flex items-start mb-10 relative">
            {/* Vertical Connector Line (Orange) and Dot */}
            <div className="flex flex-col items-center mr-4">
                <div className="w-5 h-5 rounded-full bg-orange-500 flex-shrink-0"></div>
                {!isLast && <div className="w-[2px] bg-orange-500 flex-grow mt-[-5px] mb-[-5px]"></div>}
            </div>

            {/* Content */}
            <div className="flex flex-col">
                <div className="flex items-center space-x-4">
                    <div className="p-3 bg-white rounded-xl shadow-md border border-blue-100 flex-shrink-0">
                         {/* Increased icon size to w-12 h-12 */}
                        <img 
                            src={`/${data.icon}`} 
                            alt={`${data.title} icon`} 
                            className="w-12 h-12" 
                        />
                    </div>
                    <h3 className="font-bold text-lg text-gray-800">{data.title}</h3>
                </div>
                
                {/* Services List */}
                <ul className="mt-3 ml-16 space-y-1 text-base text-gray-600">
                    {data.services.map((service, i) => (
                        <li key={i} className="leading-tight">{service}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};


const ArchitectureWork = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center p-4 sm:p-8 font-['Inter']">
            {/* Header */}
            <header className="text-center mb-12 max-w-4xl">
                <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-2">
                    Modern Data Architecture: How Does It Work?
                </h1>
                <p className="text-lg text-gray-600">
                    Let modern data architecture consultants create unified data governance and easy data management for you.
                </p>
            </header>

            {/* --- DESKTOP VIEW (md breakpoint and up) --- */}
            <div className="hidden md:block w-full max-w-6xl pb-32">
                
                {/* Top Center Node (Modern Data Architecture on AWS) */}
                <div className="flex justify-center relative z-20">
                    <div className="bg-white p-6 rounded-xl shadow-xl border-t-4 border-blue-500 w-full max-w-xs text-center">
                        {/* Icon Structure - Increased icon size to w-8 h-8 */}
                        <div className="flex justify-center mb-3">
                            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center p-2">
                                <img 
                                    src="/icon-data-architecture.svg" 
                                    alt="Architecture Icon" 
                                    className="w-8 h-8" 
                                />
                            </div>
                        </div>
                        <p className="font-bold text-base text-gray-900">Modern Data Architecture on AWS</p>
                    </div>
                </div>

                {/* Primary Connector Image: mda-desktop.svg for Orange Flow Chart */}
                <div 
                    className="absolute left-0 right-0 top-[2900px] bg-no-repeat bg-contain"
                    // The background image connects the top node to the bottom pillars
                    style={{ 
                        backgroundImage: `url(/mda-desktop.svg)`,
                        height: '100px', // Adjusted height to accommodate the connection
                        backgroundPosition: 'top center',
                    }}
                ></div>
                
                {/* Main Pillars Container */}
                <div className="flex justify-between relative mt-0 pt-[140px] z-20">
                    {diagramData.map((data, index) => (
                        <DiagramPillarDesktop 
                            key={index} 
                            data={data} 
                            index={index} 
                            total={diagramData.length} 
                        />
                    ))}
                </div>

                {/* Bottom Subtitle */}
                <div className="absolute mt-10 left-0 right-0 text-center">
                    <p className="text-gray-600 text-sm italic max-w-md mx-auto">
                        Custom data warehouse solutions to ease up data management.
                    </p>
                </div>
            </div>


            {/* --- MOBILE VIEW (below md breakpoint) --- */}
            <div className="md:hidden w-full max-w-md mx-auto py-4">
                
                {/* Top Center Node (Modern Data Architecture on AWS) */}
                <div className="flex justify-start items-center mb-10 space-x-4">
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center p-2 flex-shrink-0">
                        <img 
                            src="/icon-data-architecture.svg" 
                            alt="Architecture Icon" 
                            className="w-8 h-8" 
                        />
                    </div>
                    <p className="font-bold text-xl text-gray-900">Modern Data Architecture on AWS</p>
                </div>
                
                {/* Main Vertical Flow Container */}
                <div className="pl-4 border-l-2 border-orange-500">
                    {diagramData.map((data, index) => (
                        <DiagramPillarMobile 
                            key={index} 
                            data={data} 
                            isLast={index === diagramData.length - 1} 
                        />
                    ))}
                </div>

                {/* Bottom Subtitle */}
                <div className="mt-8 text-center">
                    <p className="text-gray-600 text-sm italic max-w-md mx-auto">
                        Custom data warehouse solutions to ease up data management.
                    </p>
                </div>
            </div>


            {/* Contact Button (Shared) */}
            <div className="mt-0">
                <button className="px-8 py-3 border-2 border-blue-500 text-blue-600 font-semibold rounded-md hover:bg-blue-50 transition duration-300">
                    Contact us
                </button>
            </div>
        </div>
    );
};

export default ArchitectureWork;
