import React from 'react';

// --- Data Definitions ---

const logos = [
  "bdc1.svg",
  "bdc2.svg",
  "bdc3.svg",
  "bdc4.svg",
  "bdc5.svg",
  "bdc6.svg",
  "bdc7.svg",
  "bdc8.svg",
  "bdc9.svg",
  "bdc10.svg",
];

// Data structure for the use case cards
const useCases = [
  {
    icon: "/icon-data-analysis-2.svg",
    title: "Big Data Analytics",
    content: (
      <>
        We can provide operational analytics and visualization for business decisions to <span className="text-blue-500 font-medium">accelerate time to insights</span> and let your employees shuffle off the burden of manual monitoring and analyzing numerical data.
      </>
    ),
  },
  {
    icon: "/icon-generative-ai.svg",
    title: "GenAI & NLP",
    content: (
      <>
        Integrate <span className="text-blue-500 font-medium">ChatGPT</span> and NLP solutions to derive momentum data insights, boost customer engagement, and maximize your performance.
      </>
    ),
  },
  {
    icon: "/icon-visualization.svg", 
    title: "Predictive Analytics",
    content: (
      <>
        Mindsmap AI helps build custom <span className="text-blue-500 font-medium">predictive analytics models</span> that let you forecast trends, customer behavior, and ROI and accelerate your organization past your competitors.
      </>
    ),
  },
  {
    icon: "/icon-vision.svg",
    title: "Computer Vision",
    content: (
      <>
        Leverage the power of <span className="text-blue-500 font-medium">computer vision</span> to amplify process efficiency and automate business by extracting real-time data from videos and images.
      </>
    ),
  },
];

// Helper Component for the use case item layout (Icon on left, text on right)
const UseCaseItem = ({ icon, title, content }) => (
  <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 p-4">
    <div className="flex-shrink-0 w-16 h-16 mt-1"> {/* Added mt-1 to align icon better with title */}
      <img 
        src={icon} 
        alt={`${title} icon`} 
        className="w-full h-full object-contain text-blue-500"
        onError={(e) => {
          e.target.onerror = null; 
          e.target.src = "https://placehold.co/64x64/E0F2FE/1D4ED8?text=ML"; // Placeholder on error
        }}
      />
    </div>
    <div className="flex-grow text-left">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{content}</p>
    </div>
  </div>
);

// Main Component
const MachineLearningUseCase = () => {
  // Split use cases into two columns for the desired layout
  const col1 = useCases.filter((_, i) => i % 2 === 0); // 0, 2 (Left Column)
  const col2 = useCases.filter((_, i) => i % 2 !== 0); // 1, 3 (Right Column)

  return (
    <div className="bg-white font-sans">
        {/* CSS for Logo Scrolling Animation */}
        <style>
        {`
            @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
            }
        `}
        </style>

        {/* --- Logo Carousel Section (Re-inserted) --- */}
        <section className="py-12 w-full px-4 bg-[#FFFFFF]">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-8">
                    Trusted by Innovative Companies
                </h2>

                <div className="overflow-hidden w-full relative">
                    <div
                        className="flex gap-10 w-max"
                        style={{
                            animation: "scroll 25s linear infinite",
                        }}
                    >
                        {/* Concatenate the logos array to ensure seamless looping */}
                        {logos.concat(logos).map((logo, index) => (
                            <img
                                key={index}
                                src={`/${logo}`}
                                alt={`logo-${index}`}
                                className="h-10 md:h-12 object-contain opacity-80 hover:opacity-100 transition duration-300"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://placehold.co/150x48/CCCCCC/333333?text=Logo";
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>


        {/* --- ML Use Case Content Section --- */}
        <section className="bg-white py-16 w-full">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                
                {/* Title and Subtitle Section */}
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Power up Your Business with the Right ML Use Case
                </h2>
                <p className="text-base text-gray-600 max-w-4xl mx-auto mb-2">
                    Turn your ideas into high-quality software solutions with our expert machine learning development services.
                </p>
                <p className="text-base font-semibold text-gray-700 max-w-4xl mx-auto mb-16">
                    Unlock your business potential with:
                </p>

                {/* 2-Column Grid of Use Case Items */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10 mb-16">
                    <div className="space-y-10">
                        {col1.map((item, index) => (
                            <UseCaseItem key={index} {...item} />
                        ))}
                    </div>
                    <div className="space-y-10">
                        {col2.map((item, index) => (
                            <UseCaseItem key={index} {...item} />
                        ))}
                    </div>
                </div>

                {/* Bottom CTA Section */}
                <div className="mt-12">
                    <p className="text-lg font-medium text-gray-800 mb-2">
                        Thinking of AI adoption?
                    </p>
                    <p className="text-lg text-gray-600 mb-6">
                        Let's talk your vision through
                    </p>
                    <button className="px-10 py-3 text-blue-600 font-semibold text-base border-2 border-blue-600 rounded-md shadow-sm bg-white hover:bg-blue-50 transition duration-150 transform hover:scale-[1.02] active:scale-95">
                        Contact us
                    </button>
                </div>
            </div>
        </section>
    </div>
  );
};

export default MachineLearningUseCase;
