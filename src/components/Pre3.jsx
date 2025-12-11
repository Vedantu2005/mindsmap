import React from 'react'

const Pre3 = () => {
    const sections = [
        {
            title: "Use Case",
            text: "We help choose the best ways of using predictive analytics and Big data in the client's field to ensure a more reliable decision-making process.",
            img: "/icon-three-arrows.svg",
        },
        {
            title: "Strategy",
            text: "With our predictive analytics services, you can add artificial intelligence-driven features to your business operations. Get valuable insights from your data, understand it better, enhance performance, prevent cost overruns, and adopt new, efficient strategies.",
            img: "/icon-target.svg",
        },
        {
            title: "Custom Solutions",
            text: "Keeping your requirements and unique use case in mind, our team tailors and customizes solutions to your specific business needs and the nature of your data.",
            img: "/icon-engine.svg",
        },
    ];

    return (
        <div className="px-4 sm:px-8 lg:px-20 py-10 text-center -mt-5">
            {/* Heading */}
            <div className="max-w-4xl mx-auto mb-12">
                <h1 className="text-2xl sm:text-3xl font-bold mb-4">
                    We Are a Predictive Analytics Company Which Enables You to Dive Into
                    Data-Driven Insights
                </h1>
                <p className="text-gray-600">
                    Our predictive analytics company comprises professionals in
                    cutting-edge data science and machine learning techniques and
                    approaches needed to solve any business issue.
                </p>
            </div>

            {/* Sections */}
            <div className="space-y-10">
                {sections.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col md:flex-row items-center lg:gap-24 max-w-4xl mx-auto lg:text-left"
                    >
                        {/* Image */}
                        <div className="flex-shrink-0">
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-20 h-20 object-contain"
                            />
                        </div>

                        {/* Text */}
                        <div className="md:flex-1">
                            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                            <p className="text-gray-700">{item.text}</p>
                        </div>
                    </div>
                ))}

            </div>
            <div className="flex flex-col justify-center items-center mt-10 text-center">
                <p className='text-lg text-gray-800'>Need consultation on our NLP services?</p>
                <div className="mt-5">
                    <button className="border border-[#77bce8] text-[#0b87d7] font-semibold px-6 py-3 rounded-lg cursor-pointer hover:bg-[#77bce8] hover:text-white transition duration-300">
                        Let's Connect
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Pre3
