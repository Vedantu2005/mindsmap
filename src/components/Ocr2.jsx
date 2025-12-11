import React from 'react';
import { ScanText, Shapes, Barcode, ImageIcon } from 'lucide-react';

// Reusable component for each service card
const ServiceCard = ({ icon, title, description }) => (
    <div className="bg-white p-6 border border-[#77bce8] shadow-lg transition-shadow duration-300 hover:shadow-blue-200 rounded-lg text-center flex flex-col items-center h-full">
        <div className="w-16 h-16 mb-4 flex items-center justify-center bg-blue-50 rounded-full">
            {icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
);

const Ocr2 = () => {
    // Data for the service cards using lucide-react icons
    const services = [
        {
            icon: <ScanText className="w-8 h-8 text-blue-600" strokeWidth={1.5} />,
            title: 'Character Recognition',
            description: 'Automated identification, data capture and character recognition of text in embedded images, image files, etc.',
        },
        {
            icon: <Shapes className="w-8 h-8 text-blue-600" strokeWidth={1.5} />,
            title: 'Feature Detection',
            description: 'Recognition of separate elements of each character, such as lines, strokes, angles, etc.',
        },
        {
            icon: <Barcode className="w-8 h-8 text-blue-600" strokeWidth={1.5} />,
            title: 'Optical Barcode Recognition (OBR)',
            description: 'Recognition of a product and its features by scanning a barcode.',
        },
        {
            icon: <ImageIcon className="w-8 h-8 text-blue-600" strokeWidth={1.5} />,
            title: 'Character Recognition on Raw Images',
            description: 'Data extraction from low-quality images with poor illumination, containing poorly printed characters, and more.',
        },
    ];

    return (
        <div className="bg-white py-10 sm:py-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Top Section: Introduction */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                        Robust Solutions to Get Rich Insights Into Data and Automate Business Processes
                    </h2>
                    <div className="text-gray-600 space-y-4 leading-relaxed">
                        <p>
                            The volume of data that businesses deal with on a daily basis is growing exponentially. Services such as data capture, retrieval, and extraction have become integral parts of an organization's workflows. These are the prerequisites for effectively managing large amounts of information stored in different formats and locations.
                        </p>
                        <p>
                            Mindswap AI is an automated data capture vendor that fosters data-driven businesses by providing them with efficient solutions. To manage your data and automate business processes, we offer OCR, data capture and extraction services.
                        </p>
                    </div>
                </div>

                {/* Middle Section: Services */}
                <div className="text-center mb-16">
                    <h3 className="text-3xl font-bold text-gray-900 mb-12">Data Capture Services We Offer</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}
                    </div>
                </div>

                {/* Bottom Section: Conclusion & CTA */}
                <div className="max-w-4xl mx-auto text-center">
                    <div className="text-gray-600 space-y-4 leading-relaxed mb-8">
                        <p>
                            We also assist with data extraction services such as developing web data extraction software from scratch to derive information not only from printed documents, but also from the web sources.
                        </p>
                        <p>
                            Explore web data extraction services with Mindswap AI!
                        </p>
                    </div>
                    <button className="px-8 py-3 border text-[#77bce8] font-semibold rounded-lg cursor-pointer hover:bg-[#77bce8] hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Ocr2;

