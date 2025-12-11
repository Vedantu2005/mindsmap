import React from 'react'

const technologies = [
    "/technologies-webix.svg",
    "/technologies-dhx.webp",
    "/technologies-reactjs.svg",
    "/technologies-vue.webp",
    "/technologies-js.svg",
    "/technologies-nodejs.svg",
    "/technologies-php.svg",
    "/technologies-laravel.svg",
    "/technologies-net.svg",
];

const Web2 = () => {
    return (
        <div className="bg-white py-8 px-4">
            {/* Section Header */}
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-2">Tech We Use</h2>
            </div>

            {/* Technology Logos */}
            <div className="max-w-5xl mx-auto flex flex-wrap justify-center items-center gap-6 p-5">
                {technologies.map((tech, index) => (
                    <div key={index} className="flex justify-center items-center">
                        <img
                            src={tech}
                            alt={`tech-${index}`}
                            className="h-10 w-auto object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Web2
