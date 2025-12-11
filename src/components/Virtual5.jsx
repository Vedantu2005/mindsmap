import React from 'react'

const Virtual5 = () => {
    const certifications = [
        // AWS Certifications (Row 1)
        { src: "/badge-aws.webp", alt: "AWS Partner Select Tier" },
        { src: "/badge1.webp", alt: "AWS Certified Developer Associate" },
        { src: "/badge2.webp", alt: "AWS Certified Database Specialty" },
        { src: "/badge3.webp", alt: "AWS Certified Machine Learning" },
        { src: "/badge4.webp", alt: "AWS Certified Developer Associate" },
        { src: "/badge5.webp", alt: "AWS Certified Solutions Architect Associate" },
        { src: "/badge6.webp", alt: "AWS Certified Solutions Architect Professional" },
        { src: "/badge7.webp", alt: "AWS Certified Cloud Practitioner" },

        // Microsoft Azure Certifications (Row 2)
        { src: "/badge10.webp", alt: "Microsoft Certified Power BI Data Analyst" },
        { src: "/badge11.webp", alt: "Microsoft Certified Expert" },

        // Other Certifications (Row 3)
        { src: "/badge12.webp", alt: "CompTIA PenTest+" },
        { src: "/badge13.webp", alt: "Databricks Spark Developer" },
        { src: "/badge14.webp", alt: "IBM Blockchain Certified" },
        { src: "/badge15.webp", alt: "IBM Blockchain Certified" },
        { src: "/badge8.webp", alt: "IBM Blockchain Certified" },
        { src: "/badge9.webp", alt: "IBM Blockchain Certified" },
        { src: "/badge16.webp", alt: "IBM Blockchain Certified" },

    ];

    return (
        <section className="bg-white py-10 px-4">
            <div className="max-w-6xl mx-auto">

                {/* Header Section */}
                <header className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        Certifications
                    </h2>
                    <p className="text-gray-600">
                        We maintain a high level of knowledge and skill in what we do.
                    </p>
                </header>

                {/* Certifications Grid */}
                <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-6 md:gap-x-8 md:gap-y-10 mb-16">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="w-24 md:w-28 lg:w-32 h-auto flex items-center justify-center"
                        >
                            <img
                                src={cert.src}
                                alt={cert.alt}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    ))}
                </div>

                {/* Call-to-Action */}
                <div className="text-center mt-12">
                    <p className="text-gray-700 mb-6">
                        Ready to develop your conversational virtual assistant?
                    </p>
                    <button
                        className="border border-[#00B4D8] text-black hover:text-white cursor-pointer hover:bg-[#00B4D8] transition duration-300 py-3 px-8 rounded-lg font-medium"
                    >
                        Contact us today!
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Virtual5
