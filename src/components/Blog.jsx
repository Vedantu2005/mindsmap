import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, onSnapshot, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../config/firebase';

// Helper to strip HTML tags for the preview text
const stripHtml = (html) => {
  if (!html) return "";
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || "";
};

const Arrow = ({ direction, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`absolute top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 hover:bg-[#00B4D8] hover:text-white transition-all shadow-lg z-10 border border-gray-100 ${
      direction === 'left' ? '-left-4 lg:-left-12' : '-right-4 lg:-right-12'
    } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
    aria-label={direction === 'left' ? 'Previous post' : 'Next post'}
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      {direction === 'left' ? (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      )}
    </svg>
  </button>
);

const Blog = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Responsive: Show 1 card on mobile, 3 on desktop
  const itemsToShow = 3;

  useEffect(() => {
    setLoading(true);
    // Fetch latest 10 active blogs
    const q = query(
      collection(db, 'blogs'), 
      orderBy('createdAt', 'desc'), 
      limit(10)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedBlogs = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
            id: doc.id,
            ...data,
            description: stripHtml(data.content).substring(0, 120) + "..." 
        };
      });
      setBlogs(fetchedBlogs);
      setLoading(false);
    }, (err) => {
      console.error('Failed to fetch blog posts:', err);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? Math.max(0, blogs.length - itemsToShow) : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= blogs.length - itemsToShow ? 0 : prev + 1));
  };

  if (loading) return null; // Or a spinner
  if (blogs.length === 0) return null; // Hide section if no blogs

  return (
    <div className="bg-white font-sans w-full py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
        <p className="text-gray-500 mb-12 max-w-2xl mx-auto">Explore our latest thoughts on Artificial Intelligence, technology, and innovation.</p>
        
        <div className="relative">
          <div className="overflow-hidden w-full px-2">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
                width: `${(blogs.length / itemsToShow) * 100}%`
              }}
            >
              {blogs.map((post) => (
                <div 
                  key={post.id} 
                  className="w-full md:w-1/3 px-4"
                  style={{ width: `${100 / blogs.length}%` }} 
                >
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden text-left h-full flex flex-col group">
                    <div className="h-52 overflow-hidden relative">
                      <Link to={`/blog/${post.slug}`}>
                        {post.imageUrl ? (
                           <img
                            src={post.imageUrl}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-400">
                             No Image
                          </div>
                        )}
                      </Link>
                    </div>

                    <div className="p-6 flex-grow flex flex-col">
                      <div className="text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">
                        {post.date}
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#00B4D8] transition-colors">
                         <Link to={`/blog/${post.slug}`}>
                           {post.title}
                         </Link>
                      </h3>

                      <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow">
                        {post.description}
                      </p>

                      <Link 
                        to={`/blog/${post.slug}`}
                        className="mt-auto text-[#00B4D8] font-semibold text-sm hover:text-cyan-700 inline-flex items-center group/link"
                      >
                        Read Article
                        <span className="ml-1 transition-transform group-hover/link:translate-x-1">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Controls */}
          {blogs.length > 3 && (
            <>
              <Arrow direction="left" onClick={handlePrev} />
              <Arrow direction="right" onClick={handleNext} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;