import React, { useState } from "react";

const faqItems = [
  {
    question: "What are cloud-based services?",
    answer:
      `These are infrastructures, platforms, or software hosted by external providers and made available to users through the internet. Leading providers such as AWS and Microsoft Azure offer a range of cloud making services, including compute, analytics, storage, and others.

Companies can select a unique combination of resources to accommodate their unique needs, build a distributed database, analyze vast amounts of information, and more. Also, cloud service offerings enable companies to store, share, and process data without spending resources on in-house servers.`
  },
  {
    question: "Who are the big 3 cloud providers?",
    answer: `Amazon Web Service (AWS), Microsoft Azure, and Google Cloud Platform are among the leading market players that provide services in the cloud. Mindsmap AI holds deep expertise in these cloud ecosystems proven by certifications and hands-on experience.`,
  },
  {
    question: "Which cloud service is best?",
    answer: `AWS is one of the most popular cloud service examples on the market, and for good reason. It offers a wide range of services and features, and it’s compatible with a variety of platforms. AWS also has an immense collection of tools, each designed to amplify the data processing capabilities of a distributed infrastructure.

Azure is also a popular choice, especially for businesses that use Microsoft products. And Google platform is a good option for businesses that want to use Google products or services.

So, which cloud service is best for your business? The answer depends on your specific needs and requirements.

We rely on the following criteria to identify the best cloud service business for your company:

Your current architecture
Cost of Ownership
Data security and compliance
Tools and features
Business compatibility.`,
  },
  {
    question: `Why do we need the cloud?`,
    answer: `As the amount and complexity of Big data development grows, companies struggle to put all insights to good use. The cloud services enable convenient, on-demand network access to a shared pool of configurable computing resources. This translates into faster data processing, elastic infrastructure, and all-in-one analytics. Organizations opt for services in the cloud to save on costs, increase efficiency and improve the security and compliance.

Other benefits of this distributed ecosystem:

Reduced costs
Easier maintenance & updates
Increased flexibility
Better accessibility
Easier storage and backup
Uptime and availability guarantees`,
  },
  {
    question: "How does the cloud work?",
    answer: `Big data processing and analytics are the keys to unlocking the value of cloud services. When we set up a distributed infrastructure, we connect all data into one, coherent body for easier processing and analysis. This configuration typically offers automation tools for resource management, backup, scaling, and other governance options for hassle-free data management.

Data processing takes place within the distributed infrastructure with further analysis and visualization – all within one architecture. This way, you eliminate data silos and aggregate all data in one place. It also provides a lot of processing power and storage capacity, which can be used for data analysis and machine learning.`,
  },
  
];

// FAQ Item
const FaqItem = ({ question, answer, isOpen, toggleOpen }) => {
  const blue = "#36A2EB";
  return (
    <div className="w-full">
      <button
        onClick={toggleOpen}
        aria-expanded={isOpen}
        className="flex justify-between items-center w-full py-4 text-left font-semibold text-gray-800 focus:outline-none"
      >
        <span className="text-sm sm:text-base md:text-lg">{question}</span>
        <div
          className="p-1 text-blue-400 transition-transform duration-300"
          style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[1200px]" : "max-h-0"
        }`}
      >
        <div className="pb-4 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed pr-2 sm:pr-6 md:pr-10 whitespace-pre-wrap">
          {answer}
        </div>
      </div>

      <div className="h-px w-full" style={{ backgroundColor: blue }}></div>
    </div>
  );
};

// FAQ Page
const Page7 = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleOpen = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="py-12 sm:py-16 px-3 sm:px-8 lg:px-20 font-sans bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-8 sm:mb-10">
          Frequently Asked Questions
        </h2>

        <div className="w-full bg-white rounded-lg shadow-sm p-2 sm:p-4">
          {faqItems.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleOpen(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page7;
