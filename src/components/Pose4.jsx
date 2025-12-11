import React from 'react'

const BackgroundIcon = ({ src, className }) => (
    <div className={`absolute -bottom-4 right-0  ${className}`}>
        <img src={src} alt="" className="w-20 h-20" />
    </div>
);

const Pose4 = () => {
    return (
        <div className="bg-white flex items-center justify-center p-4">
            <div className="container mx-auto max-w-6xl text-center py-1 sm:py-10">

                {/* --- Header Section --- */}
                <h1 className="text-3xl sm:text-4xl  font-bold text-gray-800 tracking-tight">
                    Benefits for Your Business

                </h1>
                <p className="mt-4 max-w-6xl mx-auto text-base sm:text-lg text-gray-600">
                    Our innovative solutions help our clients gain competitive power on the market and achieve success. From small businesses to large ones, we develop AI-based solutions for everyone. No matter what your industry is, our team of professionals will work closely with you to harmonize your needs with bespoke software.
                </p>

                {/* --- Benefits Grid --- */}
                <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 text-left">

                    {/* --- Card 1: Strong Security --- */}
                    <div className="relative rounded-xl p-8 border border-[#77bce8] shadow-lg transition-shadow duration-300 hover:shadow-blue-200 overflow-hidden">
                        <BackgroundIcon src="/icon-dumbell.svg" />
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold text-gray-800">Fitness and Wellness</h3>
                            <p className="mt-4 text-gray-600">

                                By introducing human pose estimation and tracking technology to your fitness app, you help your users workout at home efficiently and safely. Working out in front of the phone camera, they get instant feedback on their movements in real-time and can prevent injury.
                                Get hugely increased downloads and boost revenue from your innovative activity-tracking app.
                            </p>
                        </div>
                    </div>

                    {/* --- Card 2: Custom Functionality --- */}
                    <div className="relative border border-[#77bce8] shadow-lg transition-shadow duration-300 hover:shadow-blue-200 rounded-xl p-8 overflow-hidden">
                        <BackgroundIcon src="/icon-heart.svg" />
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold text-gray-800">Healthcare </h3>
                            <p className="mt-4 text-gray-600">
                                Empower your physical therapy exercise tracker with human body analysis. The technology tracks the user’s movements, rates it, and provides useful tips on how to speed up recovery and achieve other health and wellness goals.
                                Win the hearts of your users and drive revenue by making physical therapy exercises efficient, interactive, and fun.
                            </p>
                        </div>
                    </div>

                    <div className="relative rounded-xl p-8 border border-[#77bce8] shadow-lg transition-shadow duration-300 hover:shadow-blue-200 overflow-hidden">
                        <BackgroundIcon src="/icon-shield.svg" />
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold text-gray-800">Surveillance</h3>
                            <p className="mt-4 text-gray-600">
                                Unleash the benefits of security automation with computer vision (CV).
                                Equip your stadium, venue, or any other crowded place with custom-made human activity recognition software to spot abnormal or violent behavior. Prevent violence with 24/7 effective monitoring and abnormal activity detection.
                            </p>
                        </div>
                    </div>

                    {/* --- Card 2: Custom Functionality --- */}
                    <div className="relative border border-[#77bce8] shadow-lg transition-shadow duration-300 hover:shadow-blue-200 rounded-xl p-8 overflow-hidden">
                        <BackgroundIcon src="/icon-entertainment-2-alt.svg" />
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold text-gray-800">Entertainment and Media </h3>
                            <p className="mt-4 text-gray-600">

                                Make your mobile app go viral with amazing AR motion tracking effects.
                                By introducing computer vision technology into your app, you allow your users to customize their looks from head to toe.
                                Retain your users by letting them enjoy real-time beautification and full-body tracking virtual makeovers in augmented reality.
                            </p>
                        </div>
                    </div>

                </div>

                {/* --- Action Button --- */}
                <div className="mt-12 sm:mt-16">
                    <p className='mb-5'>From another industry, but looking for a powerful human pose recognition solution?</p>
                    <button className="px-8 py-3 border text-[#77bce8] font-semibold rounded-lg cursor-pointer hover:bg-[#77bce8] hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                        Request Demo
                    </button>   
                </div>

            </div>
        </div>
    );
}

export default Pose4
