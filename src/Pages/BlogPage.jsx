import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../config/firebase'; // Ensure this path matches your folder structure
import { ArrowRight, Search } from 'lucide-react';

// Helper to strip HTML tags for the preview text
const stripHtml = (html) => {
  if (!html) return "";
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || "";
};

const BlogCard = ({ post }) => (
  <div className="bg-white rounded-lg border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden text-left h-full flex flex-col group">
    <div className="overflow-hidden h-56 relative">
      <Link to={`/blog/${post.slug}`}>
        {post.image ? (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
             No Image
          </div>
        )}
      </Link>
    </div>
    <div className="p-6 flex-grow flex flex-col">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
            {post.date}
        </span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 flex-grow leading-snug mb-3">
        <Link to={`/blog/${post.slug}`} className="hover:text-[#00B4D8] transition-colors line-clamp-2">
          {post.title}
        </Link>
      </h3>
      <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow">
        {post.description}
      </p>
      
      <Link 
        to={`/blog/${post.slug}`} 
        className="text-[#00B4D8] font-semibold hover:text-cyan-700 self-start inline-flex items-center mt-auto"
      >
        Read More
        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  </div>
);

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    // Fetch blogs sorted by creation date (newest first)
    const q = query(collection(db, 'blogs'), orderBy('createdAt', 'desc'));
    
    const unsubscribe = onSnapshot(
      q, 
      (snapshot) => {
        const docs = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            ...data,
            // Create a clean plain-text snippet from the rich HTML content
            description: stripHtml(data.content).substring(0, 150) + "..." 
          };
        });
        setBlogs(docs);
        setLoading(false);
      }, 
      (err) => {
        console.error('Failed to load blogs:', err);
        setError('Unable to load public articles.');
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <div className="bg-gray-50 font-sans min-h-screen">
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                Insights from the <span className="text-[#00B4D8]">AI Frontier</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
                Stay ahead of the curve with our latest articles, tutorials, and discussions on artificial intelligence, machine learning, and data science.
              </p>
              
              {/* Search Bar */}
              <div className="mt-8 relative max-w-md mx-auto md:mx-0">
                <input 
                  type="text" 
                  placeholder="Search articles..."
                  className="w-full py-3 pl-4 pr-12 text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00B4D8] shadow-sm"
                />
                <button className="absolute inset-y-0 right-0 flex items-center justify-center w-12 h-full text-gray-400 hover:text-[#00B4D8]">
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://miro.medium.com/1*HkiVLx2dlUwEGZUaEyOoCg.jpeg" 
                alt="AI Visualization" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover transform rotate-2 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {loading && (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00B4D8]"></div>
          </div>
        )}

        {!loading && !error && blogs.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No blog posts found. Check back soon!
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {!loading && blogs.map((post) => (
            <BlogCard 
              key={post.id} 
              post={{
                id: post.id,
                slug: post.slug,
                title: post.title,
                date: post.date,
                image: post.imageUrl,
                description: post.description,
              }} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;