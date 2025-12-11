import React from 'react';

// Image reference for 'icon-like.svg' - Years of Experience
const LikeIcon = () => (
  <img
    src="/icon-like.svg"
    alt="Years of Experience Icon"
    // Keeping some original styling for sizing/layout consistency
    className="w-12 h-12 p-2 rounded-full shadow-lg"
  />
);

// Image reference for 'icon-five-stars.svg' - Top-Notch Technology
const FiveStarsIcon = () => (
  <img
    src="/icon-five-stars.svg"
    alt="Top-Notch Technology Icon"
    className="w-12 h-12"
  />
);

// Image reference for 'icon-medal.svg' - Reliable Development Partner
const MedalIcon = () => (
  <img
    src="/icon-medal.svg"
    alt="Reliable Partner Icon"
    className="w-12 h-12"
  />
);

// Image reference for the large illustration (machine-learning-cube-people.svg)
const IllustrationImage = () => (
  <img
    src="/machine-learning-cube-people.svg"
    alt="Machine Learning Consulting Illustration"
    className="w-full h-auto max-w-lg mx-auto"
  />
);

const WhyMLConsulting = () => {
  const benefitItems = [
    {
      icon: <LikeIcon />,
      title: 'Years of Experience',
      description:
        'Since 2014, we’ve been developing ML-powered solutions helping businesses from various industries get digitized and grow.',
    },
    {
      icon: <FiveStarsIcon />,
      title: 'Top-Notch Technology',
      description:
        'Our team of data scientists and engineers use the latest technology for custom solution development.',
    },
    {
      icon: <MedalIcon />,
      title: 'Reliable Development Partner',
      description:
        'A leading machine learning development company you can place your trust in.',
    },
  ];

  return (
    <div className="font-sans bg-white py-4 md:py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Illustration and Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Illustration Column */}
          <div className="lg:order-1">
            <IllustrationImage /> {/* Updated component name */}
          </div>

          {/* Text Column */}
          <div className="lg:order-2">
            <h2 className="text-4xl font-semibold mb-6 text-gray-800">Why Work with Us?</h2>
            <p className="text-gray-600 leading-relaxed">
              As a machine learning consulting services provider, we dive into the clients' business problems and help them make machine-driven systems learn on their own to achieve outstanding performance. Our machine learning engineers focus on the development of profound self-learning solutions. Such systems are capable of performing well on unstructured data and giving a highly accurate output. Data-driven business success is what we offer to our clients.
            </p>
          </div>
        </div>

        {/* --- Separator matching the image layout --- */}
        <hr className="my-16 md:my-24 border-t-2 border-gray-100" />


        {/* Bottom Section: Three Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          {benefitItems.map((item) => (
            <div key={item.title} className="flex flex-col items-center">
              {/* Icon */}
              <div className="mb-4">{item.icon}</div>
              
              {/* Title */}
              <h3 className="text-xl font-medium mb-3 text-gray-800">{item.title}</h3>
              
              {/* Description */}
              <p className="text-sm text-gray-500 leading-normal max-w-xs">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyMLConsulting;
