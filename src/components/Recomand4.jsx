import React from 'react'

const Recomand4 = () => {
    return (
        <div className="text-center px-4 sm:px-6 py-10 -mt-5">
            {/* Heading */}
            <div className="mb-10">
                <h1 className="text-2xl sm:text-3xl font-bold">
                    Benefits of Bespoke Recommendation Systems
                </h1>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

                {/* Card 1 */}
                <div className="flex flex-col items-center">
                    <img src="/real-time.svg" alt="Real-time" className="w-28 h-28 mb-4" />
                    <h2 className="text-lg font-semibold">Real-time Recommendations</h2>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col items-center">
                    <img src="/personalization.svg" alt="Personalization" className="w-28 h-28 mb-4" />
                    <h2 className="text-lg font-semibold">Multiple Personalization Strategies</h2>
                    <p className="text-lg font-semibold">Based on Your Business Objectives</p>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col items-center">
                    <img src="/customized.svg" alt="Customized" className="w-28 h-28 mb-4" />
                    <h2 className="text-lg font-bold">Customized for Your Project</h2>
                </div>
            </div>
        </div>
    )
}

export default Recomand4
