import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { collection, query, where, getDocs, limit } from 'firebase/firestore';
import { db } from '../config/firebase';

const BlogDetailDynamic = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!slug) {
      navigate('/blog');
      return;
    }

    async function fetchBlog() {
      setLoading(true);
      try {
        const blogsCollection = collection(db, 'blogs');
        const q = query(
          blogsCollection, 
          where('slug', '==', slug), 
          limit(1) 
        );
        
        const querySnapshot = await getDocs(q);
        
        if (!querySnapshot.empty) {
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
  }, [slug, navigate]); 

  if (!slug || loading) return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">Loading...</div>;
  if (error) return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-red-600">{error}</div>;
  if (!blog) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-xl p-8 shadow-sm">
        
        {/* Header Info - KEPT AS IS */}
        <div className="mb-6 border-b pb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">{blog.title}</h1>
            <div className="text-sm text-slate-500 font-medium">
                {blog.date} • <span className="text-blue-600">{blog.author}</span>
            </div>
        </div>

        {/* Large Attractive Feature Image - KEPT AS IS */}
        {blog.imageUrl && (
          <div className="w-full mb-8 relative group">
             <img 
                src={blog.imageUrl} 
                alt={blog.title} 
                className="w-full h-64 md:h-[500px] object-cover rounded-2xl shadow-lg transition-transform duration-500 hover:shadow-xl" 
             />
          </div>
        )}

        {/* Blog Content - UPDATED WITH STYLING CLASSES */}
        {/* I added the specific [&_h1], [&_ul] classes here. 
            This forces the HTML inside to render with the correct sizes and styles. 
        */}
        <div 
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed
                [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:text-gray-900 [&_h1]:mb-6 [&_h1]:mt-10
                [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mb-4 [&_h2]:mt-8
                [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-gray-900 [&_h3]:mb-3 [&_h3]:mt-6
                [&_h4]:text-xl [&_h4]:font-bold [&_h4]:text-gray-900 [&_h4]:mb-2
                [&_p]:mb-6 [&_p]:text-lg [&_p]:leading-8
                [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6
                [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6
                [&_li]:mb-2
                [&_a]:text-blue-600 [&_a]:underline [&_a]:font-medium
                [&_blockquote]:border-l-4 [&_blockquote]:border-blue-500 [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:bg-gray-50 [&_blockquote]:py-4 [&_blockquote]:pr-4 [&_blockquote]:rounded-r-lg [&_blockquote]:my-8
                [&_img]:rounded-xl [&_img]:shadow-lg [&_img]:my-8 [&_img]:w-full"
            dangerouslySetInnerHTML={{ __html: blog.content }} 
        />
      
      </div>
    </div>
  );
};

export default BlogDetailDynamic;