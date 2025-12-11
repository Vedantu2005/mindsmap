import React from 'react';

// Data for the benefits section
const benefitsData = [
  {
    icon: '/icon-accuracy.svg', // Replace with your icon path
    title: 'Improved Accuracy',
    description: 'Tedious and repetitive manual processes may cause employee overload. With a view to prevent that, data input procedures should be automated to enhance the accuracy of information for further processing and to optimize workload.',
  },
  {
    icon: '/icon-accuracy-2.svg', // Replace with your icon path
    title: 'Improved Visibility',
    description: 'Data extraction and processing automation allows employees to have all business-critical data immediately available and accessible at any time.',
  },
  {
    icon: '/icon-productivity.svg', // Replace with your icon path
    title: 'Increased Productivity',
    description: 'Elimination of manual data entry minimizes input errors and increases employee productivity. Employees can focus on tasks requiring human involvement and allocate more time to activities that add value to an organization.',
  },
  {
    icon: '/icon-cost-2.svg', // Replace with your icon path
    title: 'Reduced Costs',
    description: 'Business owners are always looking for ways to make business processes more cost-efficient and invest in improved productivity. The automation of manual work can immediately yield the desired results.',
  },
  {
    icon: '/icon-time-saving.svg', // Replace with your icon path
    title: 'Time-Saving Approach',
    description: 'Time is of great value for business processes. To ensure a time-saving approach to manual task solving, employees can use data automation and extraction tools which free up time for intellectual work.',
  },
];

const Ocr5 = () => {
  return (
    <div className="bg-white font-sans py-10 sm:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Benefits
          </h2>
        </div>

        {/* Benefits List */}
        <div className="space-y-12">
          {benefitsData.map((benefit, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
              
              {/* Icon */}
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                 <img src={benefit.icon} alt={`${benefit.title} icon`} className="w-full h-full" />
              </div>
              
              {/* Text Content */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Ocr5;
