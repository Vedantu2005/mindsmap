import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../config/firebase';

// Arrow component for navigation
const Arrow = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white transition-colors shadow-lg z-10 ${
      direction === 'left' ? '-left-12' : '-right-12'
    } hidden md:block`}
    aria-label={direction === 'left' ? 'Previous post' : 'Next post'}
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      {direction === 'left' ? (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      )}
    </svg>
  </button>
);

const Blog = () => {
  const fallbackBlogPosts = [
    {
      date: '23 JULY 2024',
      title: 'Benefits of automated machine learning for your organization',
      image: '/blog1.webp',
      // Added dummy IDs for fallback posts so links don't crash, though they won't load real data
      id: 'fallback-1', 
      href: '/blog/automated-machine-learning',
    },
    {
      date: '18 JULY 2024',
      title: 'IoT artificial intelligence analytics: Benefits, challenges, and trends',
      image: '/blog2.webp',
      id: 'fallback-2',
      href: '/blog/iot-ai-analytics',
    },
    {
      date: '16 JULY 2024',
      title: '15 companies using generative AI for business efficiency',
      image: '/blog3.webp',
      id: 'fallback-3',
      href: '/blog/companies-using-generative-ai',
    },
     {
      date: '1 AUGUST 2024',
      title: 'Most alarming AI ethical issues: How to develop ethical AI?',
      image: '/blog4.webp',
      id: 'fallback-4',
      href: '/blog/ai-ethics',
    },
    {
      date: '30 JULY 2024',
      title: 'Enterprise AI development solutions: The key to business transformation',
      image: '/blog5.webp',
      id: 'fallback-5',
      href: '/blog/enterprise-ai-solutions',
    },
    {
      date: '25 JULY 2024',
      title: 'AI agents: Examples, functions, applications, future trends',
      image: '/blog6.webp',
      id: 'fallback-6',
      href: '/blog/ai-agents-explained',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Number of items to show at once on desktop
  const itemsToShow = 3;

  useEffect(() => {
    setLoading(true);
    const q = query(collection(db, 'blogs'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const docs = snapshot.docs.map((s) => ({ id: s.id, ...s.data() }));
      // Use only active posts
      const active = docs.filter((d) => d.status === 'active');
      setBlogs(active);
      setLoading(false);
      // reset index if array length decreased
      setCurrentIndex(0);
    }, (err) => {
      console.error('Failed to fetch blog posts:', err);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);
  
  const handlePrev = () => {
    const posts = blogs.length > 0 ? blogs : fallbackBlogPosts;
    const maxIndex = Math.max(0, posts.length - itemsToShow);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1));
  };

  const handleNext = () => {
    const posts = blogs.length > 0 ? blogs : fallbackBlogPosts;
    const maxIndex = Math.max(0, posts.length - itemsToShow);
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  return (
    <div className="bg-white font-sans w-full py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-3xl font-bold text-gray-800">Our Blog</h2>
        <div className="relative mt-12">
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${(currentIndex * 100) / itemsToShow}%)` }}
            >
              {(blogs.length > 0 ? blogs : fallbackBlogPosts).map((post, index) => (
                <div key={post.id || index} className="shrink-0 w-full md:w-1/3 px-3">
                  <div className="bg-white rounded-xl border border-gray-200/80 shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden text-left h-full flex flex-col group">
                    
                    {/* UPDATED: Wrapped Image in Link */}
                    <div className="overflow-hidden">
                      <Link to="/blogdetailspage" state={{ id: post.id }}>
                        <img
                          src={post.imageUrl || post.image}
                          alt={post.title}
                          className="w-full h-58 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                        />
                      </Link>
                    </div>

                    <div className="p-6 grow flex flex-col">
                      <p className="text-sm text-gray-500 uppercase tracking-wider">{post.date}</p>
                      
                      {/* UPDATED: Wrapped Title in Link */}
                      <h3 className="mt-2 text-lg font-semibold text-gray-900 grow leading-snug">
                         <Link to="/blogdetailspage" state={{ id: post.id }} className="hover:text-cyan-600 transition-colors">
                           {post.title}
                         </Link>
                      </h3>

                      {/* UPDATED: Read More Link Logic */}
                      <Link 
                        to="/blogdetailspage" 
                        state={{ id: post.id }} 
                        className="mt-4 text-cyan-600 font-semibold hover:text-cyan-700 self-start inline-flex items-center group"
                      >
                        Read More
                        <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Navigation Arrows */}
          <Arrow direction="left" onClick={handlePrev} />
          <Arrow direction="right" onClick={handleNext} />
        </div>
      </div>
    </div>
  );
};

export default Blog;