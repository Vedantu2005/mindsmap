import React, { useEffect, useState } from 'react';
// Changed imports: use `useParams` instead of `useLocation`
import { useParams, useNavigate } from 'react-router-dom'; 
// Updated Firestore imports for querying by slug field
import { collection, query, where, getDocs, limit } from 'firebase/firestore'; 
import { db } from '../config/firebase';

const BlogDetailDynamic = () => {
  // Use useParams to get the slug from the URL
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Redirect back to blog page if slug is missing from URL (e.g., accessed /blog/ directly)
    if (!slug) {
      navigate('/blog');
      return;
    }

    async function fetchBlog() {
      setLoading(true);
      try {
        // This requires your blog documents in Firestore to have a 'slug' field.
        
        const blogsCollection = collection(db, 'blogs');
        
        // Create the query to find the document by the 'slug' field
        const q = query(
          blogsCollection, 
          where('slug', '==', slug), // Find documents where slug matches URL parameter
          limit(1) // Only expect one result
        );
        
        const querySnapshot = await getDocs(q);
        
        if (!querySnapshot.empty) {
          // Get the first (and only) document
          const docSnap = querySnapshot.docs[0]; 
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
  }, [slug, navigate]); // Dependency changed from id to slug

  if (!slug || loading) return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">Loading...</div>;
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