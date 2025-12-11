import React, { useState } from 'react';
import { Shield, Settings, MessageSquare, FileText, Languages, Target, BarChart3, GraduationCap, PenTool } from 'lucide-react';

// NOTE: We'll assume the image paths are relative to your project's root 
// or folder, and the 'chatbot' image is now just the default for that specific use case.

const primaryBlue = 'rgb(11, 135, 215)';
const lightBlue = 'rgb(119, 188, 232)';

const Page2Wit = () => {
  const [activeUseCase, setActiveUseCase] = useState('chatbots');

  // UPDATED: Added an 'image' property to each use case object.
  // I'm using placeholder paths based on your previous 'chatbot' reference.
  const useCases = [
    { 
      id: 'chatbots', 
      icon: MessageSquare, 
      label: 'Chatbots and Virtual Assistants', 
      description: 'Move from generic bot interactions to personalized messaging, automate upselling, and create edgy, digital avatar experiences that guide your customers through the purchase.',
      image: '/chatbots_and_virtual_assistants.webp' // Assuming /chatbots.webp or similar
    },
    { 
      id: 'content', 
      icon: FileText, 
      label: 'Content Generation', 
      description: 'Generate high-quality content automatically for blogs, marketing materials, and documentation.',
      image: '/content_generation.webp' 
    },
    { 
      id: 'translation', 
      icon: Languages, 
      label: 'Translation and Language Services', 
      description: 'Expand your business reach to multiple geographies, translate and analyze large volumes of business documents, and operate in a global arena with confidence.',
      image: '/translation_and_language_services.webp' 
    },
    { 
      id: 'recommendations', 
      icon: Target, 
      label: 'Personalized Recommendations', 
      description: 'Increase sales and customer loyalty by creating a tailored shopping experience that meets the customer individual needs and iterates on customer data.',
      image: '/personalized_recommendations.webp' 
    },
    { 
      id: 'analysis', 
      icon: BarChart3, 
      label: 'Text Analysis', 
      description: 'Create fluent summaries, analyze large volumes of text data, identify hidden patterns and trends, and hit on business insights that could be useful for decision-making.',
      image: '/text_analysis.webp' 
    },
    { 
      id: 'education', 
      icon: GraduationCap, 
      label: 'Educational Tools', 
      description: 'Pave the way for interactive and engaging learning, automate the creation of learning materials, and analyze data on student performance at scale.',
      image: '/educational_tools.webp' 
    },
    { 
      id: 'script', 
      icon: PenTool, 
      label: 'Script Writing', 
      description: 'Use LLMs as a creative writing partner, generate starting points for creative concepts and new scripts, and iterate ideas with unmatched speed.',
      image: '/script_writing.webp' 
    }
  ];

  const activeCaseData = useCases.find(uc => uc.id === activeUseCase);
  const activeDescription = activeCaseData?.description;
  const activeImage = activeCaseData?.image;

  return (
    <div className="bg-white py-20 px-5 font-['Proxima_Nova',sans-serif]">
      <div className="max-w-7xl mx-auto">
        
        {/* Benefits Section */}
        <div className="mb-24">
          <div className="max-w-5xl mx-auto">
            <h1 className="font-medium text-2xl text-stone-900 text-center mb-5 leading-relaxed sm:text-[28px] md:text-3xl">
              Benefits of On-Premise and Private-Cloud LLM Models
            </h1>
            <p className="text-base font-light text-stone-900 text-center mb-10">
              We deploy language models locally to keep your proprietary data secure.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
              {/* Strong Security Card */}
              <div 
                className="bg-white p-6 rounded-lg relative overflow-hidden transition-all duration-300" 
                style={{ boxShadow: `0 0 2px ${primaryBlue}` }}
              >
                <Shield 
                  className="absolute bottom-0 right-0 w-24 h-24 opacity-20 text-blue-500" 
                  style={{ color: primaryBlue }}
                />
                <h3 className="text-xl font-medium text-stone-900 mb-4">
                  Strong Security
                </h3>
                <p className="text-sm text-stone-900 font-light leading-relaxed">
                  We help you keep a tight rein on your data storage and security by using our custom solutions built on language models that can be deployed on-premise and on private clouds exclusively.
                </p>
              </div>

              {/* Custom Functionality Card */}
              <div 
                className="bg-white p-6 rounded-lg relative overflow-hidden transition-all duration-300" 
                style={{ boxShadow: `0 0 2px ${primaryBlue}` }}
              >
                <Settings 
                  className="absolute bottom-0 right-0 w-24 h-24 opacity-20 text-blue-500" 
                  style={{ color: primaryBlue }}
                />
                <h3 className="text-xl font-medium text-stone-900 mb-4">
                  Custom Functionality
                </h3>
                <p className="text-sm text-stone-900 font-light leading-relaxed">
                  Our developers adjust foundational models to match your unique business and functional needs and improve the accuracy of outputs by training large language models on your custom dataset.
                </p>
              </div>
            </div>

            {/* Demo Button Wrapper */}
            <div className="text-center">
              <button 
                className="mt-8 px-5 py-2.5 text-lg font-medium rounded-md transition-all duration-600 ease-in-out border-2"
                style={{ borderColor: lightBlue, color: lightBlue, }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = primaryBlue; e.currentTarget.style.color = 'white'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0)'; e.currentTarget.style.color = lightBlue; }}
              >
                Request Demo
              </button>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------------------------------------------------------------------------- */}

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto">
          <h2 className="font-medium text-2xl text-stone-900 text-center mb-5 leading-relaxed sm:text-[28px] md:text-3xl">
            Large Language Models Use Cases
          </h2>
          <p className="text-base font-light text-stone-900 text-center mb-10">
            Gain a competitive advantage in the market by being AI-first.
          </p>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-14 lg:items-start">
            
            {/* Use Cases List */}
            <div className="flex flex-col gap-3">
              {useCases.map((useCase) => {
                const Icon = useCase.icon;
                const isActive = activeUseCase === useCase.id;

                return (
                  <div
                    key={useCase.id}
                    className={`
                      flex items-center gap-4 p-4 lg:p-6 rounded-xl border-2 cursor-pointer 
                      transition-all duration-300 text-sm lg:text-base font-medium text-gray-700
                      ${isActive 
                        ? 'border-blue-500 bg-gray-50' 
                        : 'border-transparent hover:border-gray-200 hover:bg-gray-50'
                      }
                    `}
                    style={isActive ? { borderColor: primaryBlue, backgroundColor: '#f5f5f5', color: 'rgb(20,20,20)' } : {}}
                    onClick={() => setActiveUseCase(useCase.id)}
                  >
                    <Icon className="w-6 h-6 flex-shrink-0" />
                    <span>{useCase.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Use Case Content */}
            <div 
              className="bg-white rounded-2xl overflow-hidden shadow-lg"
              style={{ boxShadow: `0 0 2px ${primaryBlue}` }}
            >
              {/* Image Display - Now dynamic */}
              <div 
                className="w-full h-80 sm:h-96 md:h-[400px] flex items-center justify-center relative overflow-hidden" 
                style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
              >
                <img 
                  src={activeImage} 
                  alt={activeCaseData?.label || "Use case illustration"} 
                  className="w-full h-full object-cover" 
                />
              </div>

              <div className="p-8">
                <p className="text-base text-gray-600 text-center italic mb-8">
                  {activeDescription}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Call to Action */}
          <div className="text-center mt-12">
            <p className="text-base font-light text-stone-900 mt-8">
              Enhance your business with top-notch technology!
            </p>
            <button 
              className="mt-8 px-5 py-2.5 text-lg font-medium rounded-md transition-all duration-600 ease-in-out border-2"
              style={{ borderColor: lightBlue, color: lightBlue, }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = primaryBlue; e.currentTarget.style.color = 'white'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0)'; e.currentTarget.style.color = lightBlue; }}
            >
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2Wit;