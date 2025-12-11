import React, { useState } from 'react';

// --- Icon Component ---
const Icon = ({ src }) => (
    <img src={src} alt="" className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
);

const Pose2 = () => {
    // --- Data for Use Cases ---
    const useCases = [
        {
            id: 1,
            title: 'Cloud, Mobile and Edge Devices',
            description: 'We deliver fast and accurate custom solutions that can run on iOS, Android, edge devices and high-load servers.',
            iconSrc: '/icon-accordion-mobile.svg',
            imageSrc: '/Cloud-Mobile-Edge-Devices.webp', // Example image for Chatbots
        },
        {
            id: 2,
            title: 'Extended Key Points Skeletons',
            description: 'A set of extended key points enables leading-edge analytics of human movement that will give you a competitive edge over other companies in the niche.',
            iconSrc: '/icon-accordion-points.svg',
            imageSrc: '/Extended-Key-Points-Skeletons.webp', // Example image for Content Generation
        },
        {
            id: 3,
            title: '2D and 3D Human Pose Estimation',
            description: 'Unleash valuable insights with 2D and 3D detailed motion analysis to transform your business.',
            iconSrc: '/icon-accordion-3D.svg',
            imageSrc: '/2D-3D-Human-Pose-Estimation.webp', // Example image for Translation
        },
        {
            id: 4,
            title: 'Single Person and Multiple Persons',
            description: 'Need to analyze a single person’s movement? Or maybe a group of people? We can provide you with both single-person and multiple-person custom human pose estimation and analysis developed according to your needs.',
            iconSrc: '/icon-accordion-persons.svg',
            imageSrc: '/Single-Person-Multiple-Persons.webp', // Example image for Recommendations
        },
        {
            id: 5,
            title: 'Single View and Multiple View',
            description: "Estimate the joint position of a person or an animal during various movements from one or multiple cameras depending on your camera's setting.",
            iconSrc: '/icon-accordion-view.svg',
            imageSrc: '/Single-View-Multiple-View.webp', // Example image for Text Analysis
        },
        {
            id: 6,
            title: 'Markerless and Sensorless',
            description: 'Our technologies are compatible with a wide range of cameras. You won’t need to buy extra sensors or attach markers.',
            iconSrc: '/icon-accordion-camera.svg',
            imageSrc: '/Markerless-Sensorless.webp', // Example image for Educational Tools
        },
        {
            id: 7,
            title: 'Human and Animal Pose Estimation',
            description: 'The technologies we develop can be utilized to estimate not only human but also animal movement.',
            iconSrc: '/icon-accordion-animal.svg',
            imageSrc: '/Human-Animal-Pose-Estimation.webp', // Example image for Script Writing
        },
        {
            id: 8,
            title: 'A Whole Range of Activities',
            description: 'We can deliver effective solutions to estimate plenty of activities from yoga and pilates, to somersaulting and bungee jumping.',
            iconSrc: '/icon-accordion-golf.svg',
            imageSrc: '/Whole-Range-Activities.webp', // Example image for Script Writing
        },
    ];

    // --- State to track the selected use case ---
    const [selectedUseCase, setSelectedUseCase] = useState(useCases[0]);

    return (
        <div className="items-center justify-center p-4">
            <div className="container mx-auto max-w-6xl py-10 lg:py-5">

                {/* --- Header Section --- */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
                        AI Pose Estimation Technology With Custom Features to Meet Your Needs
                    </h1>
                    <p className="mt-4 sm:text-lg text-gray-600">
                        We’ve been at the forefront of technology since 2018, and we know what it takes to make a business successful. Let our data scientists use disruptive technology to take your business to the next level.
                    </p>
                </div>

                {/* --- Main Content: Two-Column Layout --- */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-start">

                    {/* --- Left Column: Use Case List --- */}
                    <div className="w-full lg:w-1/3 space-y-2">
                        {useCases.map((useCase) => (
                            <div
                                key={useCase.id}
                                onClick={() => setSelectedUseCase(useCase)}
                                className={`p-4 rounded-lg cursor-pointer transition-all duration-300 group ${selectedUseCase.id === useCase.id
                                        ? 'bg-[#eef7fc] border-l-4 border-blue-500 shadow-sm'
                                        : 'border-l-4 border-transparent hover:bg-gray-100'
                                    }`}
                            >
                                <div className="flex items-center gap-4">
                                    <Icon src={useCase.iconSrc} />
                                    <h3 className={`font-semibold ${selectedUseCase.id === useCase.id ? 'text-blue-700' : 'text-gray-700'
                                        }`}>{useCase.title}</h3>
                                </div>
                                {selectedUseCase.id === useCase.id && (
                                    <p className="mt-2 ml-10 text-gray-600 text-sm">
                                        {useCase.description}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* --- Right Column: Dynamic Image --- */}
                    <div className="w-full lg:w-2/3 mt-8 lg:mt-0">
                        <img
                            src={selectedUseCase.imageSrc} // Dynamically set image source
                            alt={`Screenshot for ${selectedUseCase.title}`}
                            className="rounded-xl shadow-2xl object-cover w-full h-auto"
                        />
                    </div>
                </div>

                {/* --- Footer Section --- */}
                <div className="text-center mt-16">
                    <p className="text-gray-600 mb-6">We can empower your business with a pose estimation model that we will develop in accordance with your specific needs.</p>
                    <button className="px-8 py-3 border text-[#77bce8] font-semibold rounded-lg cursor-pointer hover:bg-[#77bce8] hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                        Request an Example
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Pose2
