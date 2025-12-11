import React from 'react'

const Pre4 = () => {
    return (
        <section className="p-5 md:p-10 -mt-5">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-center text-3xl font-bold text-gray-800 mb-10">
                    How We Build Predictive Analytics Models
                </h2>

                {/* Desktop Image: Hidden on small screens, shown on large */}
                <div className="hidden lg:block mb-10">
                    <img
                        src="/pre.png"
                        alt="How We Build Recommendation Systems - Desktop View"
                        className="w-full h-auto object-contain"
                    />
                </div>

                {/* Mobile Image: Shown on small screens, hidden on large */}
                <div className="block lg:hidden mb-10">
                    <img
                        src="/pre1.png"
                        alt="How We Build Recommendation Systems - Mobile View"
                        className="w-full h-auto object-contain"
                    />
                </div>

                <p className='text-center text-lg text-[#a6a6a6] -mt-3'>
                    Note that integration of our ready-made models with its further customization to your requirements is possible.
                </p>

            </div>
        </section>
    );
}

export default Pre4
