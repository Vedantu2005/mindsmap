import React from 'react';

const Banner = () => {

  return (
    <section>
            <div className="flex justify-center items-center p-4 "> {/* Outer padding and centering */}
            <div
                className="relative overflow-hidden rounded-lg shadow-xl p-8 md:p-12 lg:p-16 text-center w-full max-w-6xl mx-auto"
                style={{
                    backgroundImage: 'url(/netbanner.webp)', // Adjust path if needed
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="relative z-10"> {/* Wrap content in relative div to ensure it's above background img */}

                    <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
                        Custom chatbot development for your needs
                    </h2>
                    <p className="text-white text-base md:text-lg mb-8 max-w-2xl mx-auto ">
                        Analyze the sentiment of conversations and get a deep understanding of your customers with the help of custom-build chatbot.
                    </p>
                    <button
                        className="bg-[#00B4D8] hover:bg-[#00B4D8] text-white font-bold py-3 px-10 rounded-md transition duration-300 ease-in-out shadow-lg"
                    >
                        Contact us
                    </button>
                </div>
            </div>
        </div>
        </section>
  );
};

export default Banner;

