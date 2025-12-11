import { ArrowRight } from 'lucide-react';
import React from 'react'

const CallHero = () => {
    return (
        <div className="bg-gray-800 font-sans">
            <div className="container mx-auto px-4 py-20 lg:py-12">
                <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
                    {/* Left Text Content */}
                    <div className="text-center lg:text-left text-white">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">
                            AI-Driven Customer Care Analytics for Call Centers
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0">
                            Replace manual data analysis with AI-based customer care analytics
                        </p>
                        <div className="mt-10">
                            <button className="bg-cyan-500 hover:bg-cyan-600 cursor-pointer text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center w-full sm:w-auto mx-auto lg:mx-0">
                                Explore Solutions
                                <ArrowRight className="ml-2 h-6 w-6" />
                            </button>
                        </div>
                    </div>
                    {/* Right Image Content */}
                    <div className="relative flex justify-center p-8">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full blur-3xl opacity-30"></div>
                        <img
                            src="/car1.webp"
                            alt="AI for Sports and Wellness"
                            className="relative rounded-2xl shadow-2xl object-cover z-10"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CallHero
