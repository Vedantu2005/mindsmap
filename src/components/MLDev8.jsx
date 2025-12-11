import React, { useState } from 'react';

const faqData = [
  {
    question: "What is machine learning development?",
    answer:
      "Machine learning (ML) is a direction of AI focused on the creation of systems that are trained and developed based on the data they receive. ML opens up new possibilities for computers to solve tasks previously performed by humans and trains a computer system to make accurate predictions when entering data.",
  },
  {
    question: "How is machine learning developed?",
    answer:
      "The ML model development involves data acquisition from multiple trusted sources, data processing to make it suitable for building the model, choosing algorithms to build the model, building the model, computing performance metrics, and choosing the best-performing model.",
  },
  {
    question: "What kind of machine learning development services do you offer?",
    answer:
      "Mindsmap AI offers machine learning consulting and development services. Our team of ML engineers has proven expertise in Big Data analytics and visualization, integrating natural language processing and ChatGPT, predictive analytics, and computer vision. We provide our clients with quality deep learning solutions development, custom web application development, and enterprise machine learning as a service (MLaaS) solutions to enhance their business efficiency and gain insights unseen before.",
  },
  {
    question: "What is AI and ML development?",
    answer:
      "Artificial intelligence and ML have become game-changing technologies in the digital era, enabling machines to learn from data, identify patterns, and make decisions based on the insights generated. AI and ML development consists of consulting, designing, and implementing AI and ML applications to enhance businesses’ operations and stay ahead of their competitors in the market.",
  },
  {
    question: "Which language is best for ML development?",
    answer:
      "The best-suited languages for developing a machine learning solution include Python, R, Julia, Java, JavaScript, and C++. Python simplifies the implementation of complex ML algorithms, R is best for data analysis and visualization, Julia allows for faster execution, Java offers robust scalability, while C++ provides unparalleled performance for computationally intensive tasks.",
  },
  {
    question: "What are the three types of machine learning?",
    answer:
      "Machine learning is subdivided into three major types – supervised, unsupervised, and reinforcement learning:\n\nSupervised learning: Uses labeled data for prediction and classification, e.g., spam filters or fraud detection.\n\nUnsupervised learning: Finds patterns in unlabeled, unstructured data, e.g., clustering large datasets.\n\nReinforcement learning: Algorithm learns by interacting with an environment to minimize errors and improve outcomes, e.g., autonomous robotics or game AI.",
  },
  {
    question: "What are the benefits of ML in business?",
    answer:
      "ML allows businesses to analyze huge amounts of unstructured data and act upon insights, provide personalized services, embrace automation, and save time and costs. It also helps companies stay ahead of competitors by anticipating trends and customer behavior.",
  },
  {
    question: "What is AI vs machine learning?",
    answer:
      "ML is a subset of artificial intelligence. Unlike traditional programs with manually coded rules, ML enables systems to learn patterns and make predictions independently. Therefore, ML always implies AI, but AI is not always ML.",
  },
  {
    question: "How much do you charge for a machine learning project?",
    answer:
      "The average cost to develop an AI or machine learning application ranges between $35,000 to $150,000 or more. The final cost depends on project requirements, functionalities, size, and complexity.",
  },
  {
    question: "What kind of industries can benefit from machine learning services?",
    answer:
      "ML has broad applications across industries: it can personalize marketing campaigns and forecast sales, predict and treat diseases in healthcare, optimize logistics, analyze market trends in fintech, and improve overall operational performance.",
  },
  {
    question: "How can machine learning services help businesses improve their operations?",
    answer:
      "ML-based automation reduces the human factor and allows employees to focus on complex tasks, improving efficiency. It anticipates future patterns, analyzes large datasets for better decision-making, and provides personalized experiences, enhancing customer service and increasing conversion rates.",
  },
];



const PlusMinusIcon = ({ isOpen }) => (
  <div className="relative w-4 h-4 transition-transform duration-300 transform">
    <div className="absolute top-1/2 left-0 h-0.5 w-full bg-[#1a66cc] transform -translate-y-1/2" />
    <div 
      className={`absolute top-0 left-1/2 w-0.5 h-full bg-[#1a66cc] transform -translate-x-1/2 transition-transform duration-300 ${
        isOpen ? 'rotate-90' : 'rotate-0'
      }`}
    />
  </div>
);

const FaqItem = ({ faq, index, isOpen, toggleFaq }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className={`flex justify-between items-start w-full py-5 text-left transition-colors duration-200 
          ${isOpen ? 'text-gray-800' : 'text-gray-700 hover:text-gray-900'}`}
        onClick={() => toggleFaq(index)}
        aria-expanded={isOpen}
      >
        <span className={`text-lg font-medium pr-4 ${isOpen ? 'text-[#1a66cc]' : 'text-gray-800'}`}>
          {faq.question}
        </span>
        <PlusMinusIcon isOpen={isOpen} />
      </button>

      <div 
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 text-gray-600 leading-relaxed text-base">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const MLDFaqs = () => {
  const [openIndex, setOpenIndex] = useState(0); 

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-2 bg-white font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <h2 className="text-3xl font-bold text-gray-900 mb-10 mt-8">
          FAQ
        </h2>

        <div className="w-full text-left">
          {faqData.map((faq, index) => (
            <FaqItem
              key={index}
              faq={faq}
              index={index}
              isOpen={index === openIndex}
              toggleFaq={toggleFaq}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MLDFaqs;
