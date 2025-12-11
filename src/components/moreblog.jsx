import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { collection, query, orderBy, limit, getDocs, where } from 'firebase/firestore';
import { db } from '../config/firebase';

const MoreBlog = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // 1. Fetch Blogs from Firebase
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Fetch the 9 most recent active blogs
        const q = query(
          collection(db, 'blogs'),
          // where('status', '==', 'active'), // Uncomment if you use a status field
          orderBy('createdAt', 'desc'),
          limit(9)
        );
        
        const querySnapshot = await getDocs(q);
        const fetchedBlogs = querySnapshot.docs.map(doc => {
  const data = doc.data();
  return {
    id: doc.id,
    image: data.imageUrl || '/blog1.webp',
    date: data.date || '',
    title: data.title || 'Untitled',
    // CHANGE THIS LINE: Use doc.id exclusively
    link: `/blog/${doc.id}`, 
  };
});

        setAllBlogs(fetchedBlogs);
      } catch (error) {
        console.error("Error fetching blogs for MoreBlog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // 2. Window Resize Handler
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(allBlogs.length / itemsPerPage);

  // Reset index if out of bounds
  useEffect(() => {
    if (currentIndex >= totalPages && totalPages > 0) {
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

  if (loading) {
    return <div className="text-center py-10">Loading recommended blogs...</div>;
  }

  if (allBlogs.length === 0) {
    return null; // Hide section if no blogs found
  }

  return (
    <div className="bg-white font-sans py-1">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
          Our Blog
        </h2>
        
        <div className="relative">
          {/* Left Arrow */}
          <button 
            onClick={handlePrev} 
            className="absolute top-1/2 -translate-y-1/2 -left-2 md:-left-6 z-10 p-2 cursor-pointer bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous blog posts"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {selectedBlogs.map((blog) => (
              <div key={blog.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-48 object-cover" 
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/e2e8f0/e2e8f0?text=Image'; }}
                />
                
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 min-h-[5rem]">
                    {/* Make title clickable too */}
                    <Link to={blog.link} className="hover:text-[#77bce8] transition-colors">
                      {blog.title}
                    </Link>
                  </h3>
                  
                  {/* Read More Link */}
                  <Link 
                    to={blog.link} 
                    className="text-[#77bce8] font-semibold hover:text-blue-800 transition-colors mt-auto block"
                  >
                    Read More &gt;
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
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