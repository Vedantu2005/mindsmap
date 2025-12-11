import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore'; // Changed imports
import { db } from '../config/firebase';

const BlogDetailDynamic = () => {
  const { id } = useParams(); // Get 'id' instead of 'slug'
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchBlog() {
      setLoading(true);
      try {
        // Fetch document directly by ID
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

    if (id) fetchBlog();
  }, [id]);

  if (error) return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-red-600">{error}</div>;
  if (!blog) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-xl p-8 shadow">
        <div className="mb-4 text-sm text-slate-500">{blog.date} • {blog.author}</div>
        <h1 className="text-3xl font-bold mb-6">{blog.title}</h1>
        {blog.imageUrl && (
          <img src={blog.imageUrl} alt={blog.title} className="w-[400px] h-[300px] object-cover rounded-lg mb-6" />
        )}
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>
    </div>
  );
};

export default BlogDetailDynamic;