import React, { useState } from 'react';
import Testimonial from './Testimonial';
const MindmapAIComponent = () => {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const [isFading, setIsFading] = useState(false); // State to trigger the fade animation

  // Dummy data for testimonials
  const testimonials = [
    {
      name: "Pavel Numinskiy",
      title: "Head of Machine Learning at Creative Research, Wargaming",
      quote: "If you want to have a stable and efficient product, I recommend working with Mindmap AI. They created an anti-fraud solution for our company, implemented and improved algorithms, and collaborated to deliver a working product. Mindmap AI' work helped us save a significant percentage of our marketing budget. Clients can expect a partner who excels at delivering products.",
      avatar: "/main-pavel-nurminskiy.webp",
    },
    {
      name: "Sergey Komissarov",
      title: "CTO at Tech Innovators Corp",
      quote: "Mindmap AI significantly boosted our operational efficiency. Their team is highly skilled and delivers exceptional results, providing deep expertise in GenAI consultation and implementation. A truly reliable partner.",
      avatar: "/main-ivan-akulovich.webp", // Replace with your actual path
    },
    {
      name: "Elena Petrova",
      title: "VP of Product Development, FinTech Solutions",
      quote: "The personalized approach and dedication from the Mindmap AI team were outstanding. We saw an immediate ROI after implementing their AI-driven solutions. Their consultants are top-tier.",
      avatar: "/main-vishal-gurbuxani.webp", // Replace with your actual path
    },
  ];

  const currentTestimonial = testimonials[activeTestimonialIndex];

  // Logic to handle the transition (fade)
  const handleTestimonialChange = (newIndex) => {
    if (newIndex === activeTestimonialIndex) return;

    // 1. Start fade-out
    setIsFading(true);

    // 2. Change content after fade-out completes (300ms)
    setTimeout(() => {
      setActiveTestimonialIndex(newIndex);
      // 3. Start fade-in immediately after content change
      setIsFading(false);
    }, 300); // Should match the transition duration (duration-300)
  };

  const handleNextTestimonial = () => {
    const newIndex = (activeTestimonialIndex + 1) % testimonials.length;
    handleTestimonialChange(newIndex);
  };

  const handlePrevTestimonial = () => {
    const newIndex = (activeTestimonialIndex - 1 + testimonials.length) % testimonials.length;
    handleTestimonialChange(newIndex);
  };

  return (
    <div className="font-sans antialiased text-gray-800 bg-white">
      {/* Why Hire Section (Unchanged) */}
      <section className="pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            Why Hire AI Generative Consultants from Mindmap AI?
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Our commitment to innovation ensures that your business benefits from our cooperation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Card 1: 10 Years on the Market */}
            <div className="flex flex-col items-center p-6 rounded-lg shadow-md bg-blue-50 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <img src="/icon-badge-quality.svg" alt="10 Years" className="w-18 h-18" />
              </div>
              <h3 className="text-xl font-semibold mb-2">10 Years on the Market</h3>
              <p className="text-gray-600 text-sm">
                We are at the forefront of innovation and technology <span className="text-blue-600 font-medium">since 2018.</span>
              </p>
            </div>

            {/* Card 2: Strong AI Expertise */}
            <div className="flex flex-col items-center p-6 rounded-lg shadow-md bg-blue-50 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <img src="/icon-implementing.svg" alt="Strong AI Expertise" className="w-18 h-18" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Strong AI Expertise</h3>
              <p className="text-gray-600 text-sm">
                Guidance on tools & strategies in GenAI consulting.
              </p>
            </div>

            {/* Card 3: 150 Successful Projects Made */}
            <div className="flex flex-col items-center p-6 rounded-lg shadow-md bg-blue-50 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <img src="/icon-vip (1).svg" alt="150 Projects" className="w-18 h-18" />
              </div>
              <h3 className="text-xl font-semibold mb-2">150 Successful Projects Made</h3>
              <p className="text-gray-600 text-sm">
                A team with a strong track record of AI projects for various industries.
              </p>
            </div>

            {/* Card 4: 100+ People on Board */}
            <div className="flex flex-col items-center p-6 rounded-lg shadow-md bg-blue-50 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <img src="/icon-three-man-2.svg" alt="100+ People" className="w-18 h-18" />
              </div>
              <h3 className="text-xl font-semibold mb-2">100+ People on Board</h3>
              <p className="text-gray-600 text-sm">
                A fast-growing firm of generative AI consultants & engineers.
              </p>
            </div>

            {/* Card 5: Global Recognition */}
            <div className="flex flex-col items-center p-6 rounded-lg shadow-md bg-blue-50 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <img src="/icon-global.svg" alt="Global Recognition" className="w-18 h-18" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Recognition</h3>
              <p className="text-gray-600 text-sm">
                A renowned leader in AI and data science software development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Our Clients Say Section */}
      <section className="">
        <Testimonial/>
      </section>
    </div>
  );
};

export default MindmapAIComponent;