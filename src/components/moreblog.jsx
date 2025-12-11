import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MoreBlog = () => {
  // Mock data for 9 blog posts
  const allBlogs = [
    {
      id: 1,
      image: 'blog1.webp',
      date: '1 AUGUST 2024',
      title: 'Most alarming AI ethical issues: How to develop ethical AI?',
      link: '/blog/enterprise-ai-solutions',
    },
    {
      id: 2,
      image: 'blog2.webp',
      date: '30 JULY 2024',
      title: 'Enterprise AI development solutions: The key to business transformation',
      link: '/blog/ai-agents-explained',
    },
    {
      id: 3,
      image: 'blog3.webp',
      date: '25 JULY 2024',
      title: 'AI agents: Examples, functions, applications, future trends',
      link: '/blog/automated-machine-learning',
    },
    {
      id: 4,
      image: 'blog4.webp',
      date: '20 JULY 2024',
      title: 'The Future of Machine Learning and Predictive Analytics',
      link: '/blog/iot-ai-analytics',
    },
    {
      id: 5,
      image: 'blog5.webp',
      date: '15 JULY 2024',
      title: 'How AI is Revolutionizing the Healthcare Industry',
      link: '/blog/companies-using-generative-ai',
    },
    {
      id: 6,
      image: 'blog6.webp',
      date: '10 JULY 2024',
      title: 'Cybersecurity in the Age of AI: Threats and Defenses',
      link: '/blog/ai-in-healthcare',
    },
    {
      id: 7,
      image: 'blog7.webp',
      date: '5 JULY 2024',
      title: 'Natural Language Processing: Bridging Humans and Computers',
      link: '/blog/ai-in-finance',
    },
    {
      id: 8,
      image: 'blog8.webp',
      date: '1 JULY 2024',
      title: 'The Impact of Big Data on Modern Business Strategies',
      link: '/blog/ai-ethics',
    },
    {
      id: 9,
      image: 'blog9.webp',
      date: '25 JUNE 2024',
      title: 'Getting Started with Computer Vision: A Beginner\'s Guide',
      link: '/blog/beginners-guide-nl',
    },
  ];

  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Effect to handle window resizing for a responsive carousel
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) { // Tailwind's 'sm' breakpoint
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) { // Tailwind's 'lg' breakpoint
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize(); // Set the initial value
    window.addEventListener('resize', handleResize);
    
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(allBlogs.length / itemsPerPage);

  // Reset index if it becomes out of bounds after resize
  useEffect(() => {
    if (currentIndex >= totalPages) {
      setCurrentIndex(0);
    }
  }, [totalPages, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalPages - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalPages - 1 ? 0 : prevIndex + 1));
  };
  
  const startIndex = currentIndex * itemsPerPage;
  const selectedBlogs = allBlogs.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="bg-white font-sans py-1">
      {/* Add horizontal padding for mobile */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
          Our Blog
        </h2>
        
        <div className="relative">
          {/* Left Arrow: Adjusted positioning for better mobile access */}
          <button 
            onClick={handlePrev} 
            className="absolute top-1/2 -translate-y-1/2 -left-2 md:-left-6 z-10 p-2 cursor-pointer bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous blog posts"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>

          {/* Blog Cards Grid: The grid columns are already responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {selectedBlogs.map((blog) => (
              <div key={blog.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-48 object-cover" 
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/e2e8f0/e2e8f0?text=Image'; }}
                />
                {/* Use flex-grow to ensure consistent card heights */}
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
                  {/* Changed fixed height to min-height to prevent text overflow */}
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 min-h-[5rem]">{blog.title}</h3>
                  {/* mt-auto pushes the link to the bottom */}
                  <a href={blog.link} className="text-[#77bce8] font-semibold hover:text-blue-800 transition-colors mt-auto">
                    Read More &gt;
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow: Adjusted positioning for better mobile access */}
          <button 
            onClick={handleNext}
            className="absolute top-1/2 -translate-y-1/2 -right-2 md:-right-6 z-10 p-2 cursor-pointer bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next blog posts"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoreBlog;