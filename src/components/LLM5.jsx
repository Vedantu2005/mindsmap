import React from 'react';

const revenueIcon = '/icon-dollar-increase.svg';
const costsIcon = '/icon-cost-2.svg';
const growthIcon = '/icon-accuracy-2.svg';
const techIcon = '/icon-engine.svg';

const benefitsData = [
  {
    icon: revenueIcon,
    title: 'Increase Revenue',
    description: (
      <>
        Make your customers feel heard and increase sales with the unlimited potential of LLMs.{' '}
        <span className="font-medium text-blue-600 cursor-pointer">Custom-built AI software</span> streamlines customer support, generates tailored recommendations, and analyzes your customers, while you can focus on growing your business.
      </>
    ),
  },
  {
    icon: costsIcon,
    title: 'Reduce Operational Costs',
    description: (
      <>
        Cut costs by automating tasks that require human labor. From{' '}
        <span className="font-medium text-blue-600 cursor-pointer">customer experience services</span> to admin tasks, our custom LLM solutions do the heavy lifting of business management and optimize your operations across sales, marketing, customer service, and more.
      </>
    ),
  },
  {
    icon: growthIcon,
    title: 'Find Growth Opportunities',
    description: (
      <>
        From <span className="font-medium text-blue-600 cursor-pointer">sentiment analysis</span> to upselling, a custom large language model unlocks novel use cases for your business based on real-time conversation data. LLMs cast their nets wide to customer data, external market trends, and social media data to power your decision-making.
      </>
    ),
  },
  {
    icon: techIcon,
    title: 'Strengthen Your Tech Core',
    description: (
      <>
        Embed Large Language Learning Models into your applications to ramp up their throughput and enable conversational search. With LLMs, you can request specific outputs from applications, make the most out of your data, and keep up with increasing workloads.
      </>
    ),
  },
];

const LLM5 = () => {
  return (
    <section className="bg-white py-10 px-4 sm:px-6 lg:px-8 -mt-10 lg:mt-0">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Seize the Distinctive Benefits of Large Language Learning Models
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          We help you get your arms around the value of LLMs in corporate settings.
        </p>
      </div>
      
      {/* Benefits Grid */}
      <div className="mx-auto mt-16 max-w-6xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefitsData.map((benefit, index) => (
            <div 
              key={index} 
              className="flex flex-col rounded-xl bg-white p-8 border border-[#77bce8] shadow-lg transition-shadow duration-300 hover:shadow-blue-200 text-left "
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-sky-100">
                <img src={benefit.icon} alt={`${benefit.title} icon`} className="h-9 w-9" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-gray-900">
                {benefit.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LLM5;