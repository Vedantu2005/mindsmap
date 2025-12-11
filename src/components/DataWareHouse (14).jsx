import React, { useState } from "react";

const faqItems = [
  {
    question: "What does a DWH consultant do?",
    answer:
      "Cloud data warehouse consulting services help companies audit, analyze, suggest, and plan game-changing improvements for their DWH adoption path. Be it migration, infrastructure enhancement, or from-scratch implementation, professional advice will give you a head start and equip you with actionable guidelines on enterprise DWH management, data quality management, and others.",
  },
  {
    question: "What is a data warehouse?",
    answer: `DWHs are an important part of the data management lifecycle because they provide a single, centralized source of information that can be used for reporting and analysis. Without a DWH infrastructure, businesses would have to use multiple silos. DWHs are typically used to store historical insights, such as contract details, client information, and others.`,
  },
  {
    question: "What are the three types of DWH?",
    answer: `These are enterprise data warehouses, marts, and operational stores.

An enterprise DWH is a central repository of all information from an organization. Data marts are small DWHs that focus on the output from specific business units or functions. Operational stores provide a snapshot of the latest transactions and other operational information.

Each type of DWH has its own strengths and weaknesses. Enterprise ones are the most comprehensive, but they can be expensive and difficult to maintain. Data marts are less comprehensive but can be easier to set up and manage. Operational data stores are the simplest but may not have all the features of the other types of DWHs.
`,
  },
  {
    question: `What are data warehousing services?`,
    answer: `DWH services cover a wide range of data management and BI activities, including advisory, deployment, support, migration, and visualizations to help companies benefit from cloud data warehouse engineering services and get measurable business results from their data.`,
  },
  {
    question: "What is ETL in a data warehouse?",
    answer: `ETL stands for extract, transform, and load. It is an essential process of moving data from its source, transforming it into an analysis-ready format. An ETL pipeline allows businesses to consolidate output from various systems into a single, all-in-one store house and prepare them for dashboards and analytics. This process can be performed manually or automatically, depending on the needs of the organization.`,
  },
  {
    question: "Who needs a data warehouse?",
    answer: `Unified storage can support all business lines across industries, including:

Decision makers who rely on vast amounts of information to create a consistent business strategy.
Users and business units who dive deep into complex processes to obtain information from multiple business systems (marketers, sales representatives, and others).
Teams that need user-specific dashboards and reports.
Teams that want to apply machine learning and analytics to their digital assets.
Companies that run a lot of complex queries regularly.
Anyone who is looking to leverage transaction data for analytical purposes and business reporting.`,
  },
  {
    question: "How beneficial DWH&BI implementation is for companies?",
    answer: `By implementing a data warehouse as a service, companies can accrue the following benefits:

Informed decision-making – all decision enablers are collected within a single interface.
Effective and consistent data management – unified storage facilitates standardized data processing.
Increased Return On Investment – a 360-degree analysis helps uncover improvement areas.
Accelerated speed and power of analytics – DWHs read large amounts of data to identify relationships and trends across the data.
Enhanced conformity and compliance – all-in-one storage allows for applying the same approaches to all input.`,
  },
  {
    question: "How much does a data warehouse solution cost?",
    answer: `When it comes to data warehouse solutions, there is no one-size-fits-all answer. The cost of the solution depends on a variety of factors, including the size of the architecture, the features and functionality required, the degree of customization, and the vendor you choose.

Other cost drivers include:

Data needs and challenges
Maturity of your DWH architecture
Implementation approach
ETL integration
Organization size, and others.
Overall, the average DWH implementation cost starts from $25,000 and can reach up to $70,000 and more.`,
  },
  {
    question: "What factors to consider choosing a BI and DWH services provider?",
    answer: `There are many factors to consider when choosing a business intelligence and DWH services provider. However, the first step is to understand your specific needs and requirements. Do you need a full-fledged BI and DWH platform, or would a simpler solution suffice? What kind of information do you need to collect and analyze? How much output do you need to store?

Once you have a good understanding of your needs, you can start to compare different BI and DWH providers. We recommend checking your tech partner across the following criteria:

tech and domain expertise
diverse provider portfolio
post-launch support and maintenance services
established provider brand
reliability & transparency
communication & agility`,
  },
  {
    question: "Is data warehousing still relevant?",
    answer: `With the ever-growing stream of business data, companies require an all-in-one solution for storing, analyzing, and sending those insights for reporting. While there are many emerging tools, DWHs are still an indispensable part of business management that can open a window into historical patterns. They serve as a central repository and provide powerful tools for analytics and query.`,
  },
];

// FAQ Item
const FaqItem = ({ question, answer, isOpen, toggleOpen }) => {
  const blue = "#36A2EB";
  return (
    <div className="border-b border-gray-200 w-full">
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
        <div className="pb-4 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed pr-2 sm:pr-6 md:pr-10">
          {answer}
        </div>
      </div>

      <div className="h-px w-full" style={{ backgroundColor: blue }}></div>
    </div>
  );
};

// FAQ Page
const Page13 = () => {
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

export default Page13;
