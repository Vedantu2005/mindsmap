import React, { useState, useEffect } from 'react';

const projectsData = [
  {
    title: "Anomaly Detection in Crash Simulation",
    description: "Our team of AI engineers implements anomaly detection algorithms to locate the undesired behavior in crash simulations. This AI automotive approach helps predict anomalous behaving simulations for design evaluation and certification.",
    image: "/project1.webp"
  },
  {
    title: "Unsupervised Low-Dimensional Representation",
    description: "We aid manufacturers in data-driven virtual product design. We help compute an unsupervised low-dimensional representation of crash simulations to visualize the crash behavior of different simulations. Using geometric deep learning algorithms, we achieve remarkable visualization accuracy.",
    image: "/project2.webp"
  },
  {
    title: "Self-Supervised Classification",
    description: "We help introduce self-supervised methods that classify deformation behavior in crash analysis. This model feeds on a few training sample simulations to detect anomalous behavior. The result is a sufficient number of 1-4 simulations per class.",
    image: "/project3.webp"
  },
  {
    title: "Geometry Optimisation Using RL",
    description: "Working with us, our clients get optimized geometry for enhanced crash behavior.We parametrize the model in consideration and use RL to optimize the geometry.This allows for increased energy absorption in crash analysis.",
    image: "/project4.webp"
  },
  {
    title: "Intelligent Finite Element",
    description: "Our team of AI developers builds a model to perform real-time structural simulation of a plate for a given load and BCs. The model captures Spatio-temporal patterns to predict stress for a simple component under boundary conditions over a set period.",
    image: "/project5.webp"
  }
];

const Auto4 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? projectsData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === projectsData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    // Set an interval to automatically advance to the next slide every 3 seconds
    const slideInterval = setInterval(goToNext, 3000);

    // Clear the interval when the component unmounts or when the user navigates manually
    return () => clearInterval(slideInterval);
  }, [currentIndex]); // The effect re-runs whenever currentIndex changes, resetting the timer

  return (
    <div className="bg-white font-sans py-5 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-3xl text-gray-800 font-bold mb-4">
            Our Projects In Crash Simulation
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            The use of AI in the automotive industry and simulation-driven design yields results and product efficiency in a shorter time without sacrificing accuracy.
          </p>
        </div>

        <div className="relative">
          {/* Slider viewport with overflow hidden */}
          <div className="relative overflow-hidden rounded-lg shadow-lg border border-gray-100">
            {/* Sliding track that contains all the slides */}
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {/* Map over the project data to render each slide */}
              {projectsData.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-gradient-to-r from-white to-cyan-50/50 p-8 md:p-12">
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                      <div className="lg:w-1/2 text-center lg:text-left">
                        <h2 className="text-2xl md:text-3xl font-medium text-gray-800 mb-4">{project.title}</h2>
                        <p
                          className="text-gray-600 leading-relaxed"
                          dangerouslySetInnerHTML={{
                            __html: project.description.replace('AI engineers', '<a href="#" class="text-cyan-600 hover:underline">AI engineers</a>')
                          }}
                        />
                      </div>
                      <div className="lg:w-1/2">
                        <img src={project.image} alt={project.title} className="rounded-lg object-cover w-full h-full" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button onClick={goToPrevious} className="absolute top-1/2 cursor-pointer left-0 md:-left-6 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
           <button onClick={goToNext} className="absolute top-1/2 cursor-pointer right-0 md:-right-6 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center mt-8">
          {projectsData.map((slide, slideIndex) => (
            <button
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`w-3 h-3 rounded-full mx-1.5 cursor-pointer transition-colors duration-300 ${currentIndex === slideIndex ? 'bg-[#92c9ec]' : 'bg-gray-300 hover:bg-gray-400'}`}
              aria-label={`Go to slide ${slideIndex + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Auto4;

