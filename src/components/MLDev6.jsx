import React from 'react';

const WorkMLD = () => {
  // Define the consistent accent color (Orange) as requested
  const accentColor = 'text-orange-500';
  
  const benefitPoints = [
    {
      title: 'Business-First Approach',
      content:
        'Your business needs are our top priority. That\'s why we put a particular focus on the planning and consulting stage. All the processes from research prototyping to testing and deployment are performed to help you reach your goals, not just for show.',
    },
    {
      title: 'Vetted Team of Professionals',
      content:
        'We are backed up by a strong team of ML experts who think outside the box and come up with innovative solutions for machine learning software development. You can stay assured that we will develop a high-quality machine learning application.',
    },
    {
      title: 'Trustworthy Partner',
      content:
        'Our proven track record underlines that any business domain can benefit from our customized AI and machine learning app development services. Your idea and data will stay safe, while our team will leverage the accrued expertise to your benefit.',
    },
    {
      title: 'Affordable & On-Time Delivery',
      content:
        'We understand the value of time and money for any business in a competitive business environment. That\'s why Mindmap AI strives to deliver outstanding services meeting all the deadlines and maximizing the pay-off you receive with a final ML product.',
    },
    {
      title: 'Client Participation',
      content:
        'Regardless of the development stage of your ML solution, you will never get left behind unaware of the current product status. We update our clients on the completed and ongoing tasks and are ready to implement changes if required.',
    },
    {
      title: 'Sophisticated Technology',
      content:
        'We keep up-to-date with cutting-edge tools and technologies to offer highly advanced solutions. Leverage our expertise and capabilities to better upgrade and reinforce your business models by developing high-end machine learning algorithms.',
    },
  ];

  return (
    // Updated background color to closely match the light cyan/mint in the image (bg-teal-50)
    <div className="bg-teal-50 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Work with Seasoned Machine Learning Developers
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Companies from different countries and industries choose Mindmap AI as an experienced and trusted ML
            development company that offers profound expertise combined with real-world vision.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {benefitPoints.map((point, index) => (
            <div key={index} className="flex flex-col">
              {/* Colored Separator / Accent Line: Using the shared accentColor (orange) */}
              <div className={`w-1/3 h-0.5 mb-5 bg-orange-500`}></div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {point.title}
              </h3>
              
              {/* Content */}
              <p className="text-sm text-gray-700 leading-relaxed">
                {point.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkMLD;
