import React, { useState } from 'react';

// Data for each stage, combining titles and detailed points
const contentData = [
    {
      id: 0,
      title: "Biotech Digital Transformation Project",
      isImage: true, // Flag to show the image
      imageUrl: "/project.webp"
    },
    {
      id: 1,
      shortTitle: "Stage 1: Data Lake Creation",
      details: {
        title: "Stage 1 Details",
        points: [
          "Multiple diverse Data Sources",
          "Multiple subsidiaries (e.g. Data providers)",
          "Availability of Data in multiple geographies (US, Europe, Australia, etc.)",
          "Data Lake compliance with GDPR and HIPAA",
          "Availability of Data Lake for Data Analysts to work within first 4 weeks from the beginning of the project"
        ]
      }
    },
    {
      id: 2,
      shortTitle: "Stage 2: Ingestion and Data Quality Check",
      details: {
          title: "Stage 2 Details",
          points: [
              "All Data Sources are supported for processing",
              "All data (including raw data) is ingested into the pipeline for Data Quality and Validation",
              "All processed data is placed into the Data Lake available for immediate analysis",
              "Ingestion is implemented into the pipeline during the POC"
          ]
      }
    },
    {
        id: 3,
        shortTitle: "Stage 3: Processing, ML and Analysis",
        details: {
            title: "Stage 3 Details",
            points: [
                "Valid Data after the ingestion is processed by the Step Functions and AWS Glue",
                "All Processed Data is available in Data Lake for immediate analysis",
                "All Processed Data is uploaded into the Data Warehouse",
                "The whole pipeline is fully automated and built with multiple error retry mechanisms",
                "Logging and monitoring including notifications mechanism is implemented",
                "Architecture supports scalability to handle any load required",
                "Stage 3 is complete in 8 to 12 weeks after the POC"
            ]
        }
    },
    {
        id: 4,
        shortTitle: "Stage 4: Visualization and Reports",
        details: {
            title: "Stage 4 Details",
            points: [
                "All Processed Data is uploaded into Redshift for Analysis and Visualization",
                "Redshift access can be granted to any subsidiaries",
                "Visualization and Reports are built on top of Redshift tables with PowerBI",
                "Stage 4 is expected to be complete within 8 to 16 weeks after the POC"
            ]
        }
    }
];

const Health4 = () => {
    const [activeContentId, setActiveContentId] = useState(0);
    const activeContent = contentData.find(item => item.id === activeContentId);

    const handleAccordionClick = (id) => {
        setActiveContentId(prevId => (prevId === id ? null : id));
    };

    const getButtonClasses = (id, isActive) => {
        const baseClasses = "w-full flex items-center text-left font-bold py-4 px-6 cursor-pointer transition-colors duration-300";
        const borderRadius = isActive ? "rounded-t-lg" : "rounded-lg";

        if (isActive) {
            return `${baseClasses} ${borderRadius} bg-[#00b8d4] text-white shadow-lg`;
        }
        return `${baseClasses} ${borderRadius} bg-gray-100 text-gray-700 hover:bg-gray-200`;
    };

    return (
        <div className="bg-white font-sans antialiased">
            <div className="container max-w-6xl mx-auto px-4 py-12 md:py-20">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Biotech Digital Transformation
                    </h1>
                    <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-600">
                        We will lead a successful digital transformation of your business, so you'll easily meet new challenges and mitigate future risks.
                    </p>
                </div>

                {/* ## DESKTOP LAYOUT (Hidden on Mobile) ## */}
                <div className="hidden lg:grid grid-cols-2 gap-10 items-start">
                    <div className="flex flex-col space-y-4">
                        {contentData.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => setActiveContentId(item.id)}
                                className={getButtonClasses(item.id, activeContentId === item.id).replace('rounded-t-lg', 'rounded-lg') + ' h-18'}
                            >
                                {item.title || item.shortTitle}
                            </div>
                        ))}
                    </div>
                    <div className="w-full p-4 border border-gray-200 rounded-lg min-h-66 flex items-center justify-center">
                        {activeContent && (activeContent.isImage ? (
                            <img
                                src={activeContent.imageUrl}
                                alt="Biotech Digital Transformation Architecture"
                                className="w-full h-auto object-contain rounded-lg"
                            />
                        ) : (
                            <div className="p-3 w-full">
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    {activeContent.details.points.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ## MOBILE ACCORDION LAYOUT (Hidden on Desktop) ## */}
                <div className="block lg:hidden space-y-4">
                    {contentData.map((item) => {
                        const isActive = activeContentId === item.id;
                        return (
                            <div key={item.id}>
                                <div
                                    onClick={() => handleAccordionClick(item.id)}
                                    className={getButtonClasses(item.id, isActive) + ' h-18'}
                                >
                                    {item.title || item.shortTitle}
                                </div>

                                {/* ===== MODIFIED LOGIC IS HERE ===== */}
                                {isActive && (
                                    item.isImage ? (
                                        // If it's an image, show the image
                                        <div className="p-4 border border-t-0 border-gray-200 rounded-b-lg bg-white">
                                            <img
                                                src={item.imageUrl}
                                                alt={item.title}
                                                className="w-full h-auto object-contain rounded-lg"
                                            />
                                        </div>
                                    ) : (
                                        // Otherwise, show the text details
                                        <div className="p-4 border border-t-0 border-gray-200 rounded-b-lg bg-gray-50">
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                {item.details.points.map((point, i) => (
                                                    <li key={i}>{point}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Contact Us Button */}
                <div className="text-center mt-16">
                    <button className="px-10 py-3 border border-gray-400 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Health4;