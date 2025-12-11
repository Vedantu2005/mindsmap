import React, { useState } from "react";

const faqItems = [
  {
    question: "What is BI implementation?",
    answer: `BI adoption is a process of transforming the business into a data-driven organization by integrating effective data processing, analytics, and visualization across the enterprise. It includes using information technology to transform raw data into useful information that can be used to make decisions and take action. Organizations that aim to implement a business intelligence solution have to consolidate multiple databases into one central repository that can be accessed by all employees, making it easier to manage the business and dig up insights.`,
  },
  {
    question: "How beneficial BI implementation for businesses is?",
    answer: `BI excellence helps companies organize and make sense of their assets so that they can be easily tracked and analyzed. Decision-makers can then drill down and get the input they need quickly, empowering them to act proactively.

Implementing an intelligent data solution also allows companies to accrue the following benefits:

Improved decision-making. The use of data mining, extraction, and analysis tools can help the business to make better decisions, spot trends and new business opportunities.
Reduced risk management costs. Businesses that implement BI systems tend to minimize their risk management costs because they can identify potential risks before they occur and act proactively.
Better customer experience. This can be achieved through enhanced customer relationship management systems that use data analytics techniques to improve sales and marketing strategies and using predictive analytics techniques to predict customer sentiment.`,
  },
  {
    question: "How much does a business intelligence implementation cost?",
    answer:
      `Power BI implementation cost depends on the project complexity, data quality, sources, deadlines, etc. Thus, if the company has a mature infrastructure with consistent data governance practices, the costs will be lower than developing the whole infrastructure from scratch.

Overall, the average cost of implementing business intelligence starts from $25,000 and can reach up to $70,000 and more.`,
  },
  {
    question: `What factors to consider choosing a BI implementation consulting services provider?`,
    answer:
      `With a choice so wide, it can be challenging for companies to land the right tech partner. The main selection criteria include:

Tech expertise – a diverse set of skills, credentials, and certifications in the field of data, artificial intelligence, and related technologies.
Projects in your or adjacent domain – a relevant portfolio with similar projects, preferably showcased on a provider’s website.
Future maintenance and support opportunities – post-production support to address any issues after deployment.
Strong employer brand – industry awards, positive testimonials, and unequivocal positioning.
Reliability & transparency – all terms and conditions are documented in a transparent agreement.
Communication & agility – direct client engagement in the project, regular communication via a single communication channel, and change-friendly project management.`,
  },
  {
    question: "What is a power BI server implementation?",
    answer:
      `A Power BI server implementation is a mature BI solution and a key component of the Microsoft BI stack. It can be used as a supplement to an on-premise infrastructure with modern Power BI reports for easier visualization. The main advantage of using a Power BI server is that it allows you to scale up your reporting infrastructure without having to worry about capacity issues if you need more data or users.

Why is the proper design and implementation of the ETL process crucial to a BI project?
Extract, transform, load (ETL) is a process used to collect data from various sources, transform it into a format that can be used for further analysis, and load it into a target database. ETL plays a key role in business intelligence as it is responsible for populating data warehouses with the input that will be used for reporting and analysis.

Without ETL, data would remain in silos, unable to be used for BI. By extracting data from multiple sources, transforming it into a consistent format, and loading it into a warehouse, businesses can gain insights that they would otherwise be unable to obtain.`,
  },
  {
    question: "How to get the most from a business intelligence application during the post implementation?",
    answer:
      `The post-implementation phase is crucial for the successful adoption of a business intelligence application.

First, it is important to ensure that all users are trained on how to use the application. This includes both the technical aspects of the application and how to interpret the data that is provided by the application. Second, an adopter should establish clear goals and KPIs for the application. This will help ensure that the application is being used to its full potential and that it is providing the most value to the business. Finally, regular maintenance and support activities help ensure low incident occurrence, proactive issue resolution, and reduced total cost of ownership.

Our experienced BI technology experts help organizations maintain BI applications and elevate existing BI solutions including analytics, reporting, ETL, and others. We are well-versed in a wide range of business intelligence platforms and databases to provide individual maintenance cadence for unique needs.`,
  },
  {
    question: "How is data security implemented in Power BI?",
    answer:
      `Power BI implements a wide range of security practices to keep users’ data secure, including user authentication, data and service security, and TLS version usage. Data security, in turn, comes on different levels. Row-level security limits a user’s ability to access certain data. It means that once you define filters within roles, these restrict access at the row level. Object-level security allows you to secure particular tables from report viewers. Moreover, you may select an isolation level that establishes the level of separation required between one data source and other sources.`,
  },
  {
    question: "How to implement Power BI in your organization?",
    answer: `Power BI adoption is a crucial step in your data analytics journey. It enables you to visualize, analyze and share insights from your data. You can use Power BI to get a better understanding of your business operations and make informed decisions faster.

The first step in the Power BI implementation process is defining your business requirements, objectives and scope. The team must agree on the key performance indicators (KPIs) that will be used to measure the success of the project. Once you get a clear vision of the value Power BI brings to the organization, it’ll be easier to get the buy-in of executives and stakeholders.

Once you have defined the objectives for the project, it is time to determine what input will be used in Power BI reports. For example, you can start your Power BI journey to unify cloud and on-premise data (ERP/CRM/TMS/WMS) and sync it with your business applications. Overall, this suite is applicable to almost every data source.

Securing a solid implementation team is another enabler of Power BI adoption. Therefore, you should identify a partner or vendor who can guide you in the Power BI journey. Choosing a vendor early on in the process will allow you more time to work with them on developing a roadmap that meets your needs and budget constraints.

The right vendor assesses your data maturity level and suggests the processes, tools, and architecture to address your needs. The final step in the PowerBI implementation process is developing an implementation plan`
  }
];

// Responsive FAQ Item
const FaqItem = ({ question, answer, isOpen, toggleOpen }) => {
  const blue = "#36A2EB";
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={toggleOpen}
        aria-expanded={isOpen}
        className="flex justify-between items-center w-full py-4 text-left font-semibold text-gray-800 focus:outline-none"
      >
        <span className="text-sm sm:text-base">{question}</span>
        <div
          className="p-1 text-blue-400 transition-transform duration-300"
          style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          <svg
            className="w-6 h-6"
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
          isOpen ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <div className="pb-4 text-gray-600 text-sm sm:text-base leading-relaxed pr-4 sm:pr-10">{answer}</div>
      </div>

      <div className="h-px w-full" style={{ backgroundColor: blue }}></div>
    </div>
  );
};

// FAQ Page
const Page11 = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleOpen = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="py-16 px-4 sm:px-8 lg:px-16 font-sans">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-medium text-center text-gray-800 mb-10">
          Frequently Asked Questions
        </h2>

        <div className="w-full">
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

export default Page11;
