import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Updated imports
import { doc, getDoc } from 'firebase/firestore'; 
import { db } from '../config/firebase';

const BlogDetailDynamic = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // 1. Get the ID from the state passed via the Link component
  const id = location.state?.id;

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // 2. Redirect back to blog page if someone refreshes and state is lost
    if (!id) {
      navigate('/blog');
      return;
    }

    async function fetchBlog() {
      setLoading(true);
      try {
        const docRef = doc(db, 'blogs', id);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setBlog({ id: docSnap.id, ...docSnap.data() });
        } else {
          setError('Blog not found.');
        }
      } catch (err) {
        console.error('Failed to load blog:', err);
        setError('Unable to load blog.');
      } finally {
        setLoading(false);
      }
    }

    fetchBlog();
  }, [id, navigate]);

  if (!id) return null; // Prevent flash before redirect
  if (error) return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-red-600">{error}</div>;
  if (!blog) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-xl p-8 shadow-sm">
        
        {/* Header Info */}
        <div className="mb-6 border-b pb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">{blog.title}</h1>
            <div className="text-sm text-slate-500 font-medium">
                {blog.date} • <span className="text-blue-600">{blog.author}</span>
            </div>
        </div>

        {/* Large Attractive Feature Image */}
        {blog.imageUrl && (
          <div className="w-full mb-8 relative group">
             <img 
                src={blog.imageUrl} 
                alt={blog.title} 
                className="w-full h-64 md:h-[500px] object-cover rounded-2xl shadow-lg transition-transform duration-500 hover:shadow-xl" 
             />
          </div>
        )}

        {/* Blog Content */}
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: blog.content }} />
      
      </div>
    </div>
  );
};

export default BlogDetailDynamic;