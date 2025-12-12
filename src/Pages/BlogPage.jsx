import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../config/firebase';
import { ArrowRight, Search } from 'lucide-react';

// Updated BlogCard to use the slug for the Link URL
const BlogCard = ({ post }) => (
    <div className="bg-white rounded-lg border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden text-left h-full flex flex-col group">
        <div className="overflow-hidden">
      {/* Change 1: Use the dynamic URL with slug */}
      <Link to={`/blog/${post.slug}`}>
       <img
         src={post.image}
          alt={post.title}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
         />
      </Link>
     </div>
     <div className="p-6 flex-grow flex flex-col">
       <p className="text-sm text-gray-500 uppercase tracking-wider">{post.date}</p>
      <h3 className="mt-2 text-xl font-bold text-gray-900 flex-grow leading-snug">
 {/* Change 2: Use the dynamic URL with slug */}
      <Link to={`/blog/${post.slug}`} className="hover:text-[#00B4D8] transition-colors">
       {post.title}
       </Link>
      </h3>
      <p className="mt-3 text-gray-600 text-base line-clamp-3">
 {post.description}
 </p>
 {/* Change 3: Use the dynamic URL with slug */}
 <Link to={`/blog/${post.slug}`} className="mt-4 text-[#00B4D8] font-semibold hover:text-cyan-700 self-start inline-flex items-center">
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
  const q = query(collection(db, 'blogs'), orderBy('createdAt', 'desc'));
  const unsubscribe = onSnapshot(q, (snapshot) => {
   const docs = snapshot.docs
 .map((s) => ({ id: s.id, ...s.data() }))
 .filter((d) => d.status === 'active');
 setBlogs(docs);
 setLoading(false);
 }, (err) => {
 console.error('Failed to load blogs:', err);
 setError('Unable to load public articles.');
 setLoading(false);
 });
 return () => unsubscribe();
 }, []);

     return (
      <div className="bg-gray-50 font-sans">
         <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
               <div className="text-center md:text-left">
                 <h1 className="text-4xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
                 Insights from the <span className="text-[#00B4D8]">AI Frontier</span>
                </h1>
                 <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
                  Stay ahead of the curve with our latest articles, tutorials, and discussions on artificial intelligence, machine learning, and data science.
               </p>
               {/* Search Bar (Visual Only) */}
                <div className="mt-8 relative max-w-md mx-auto md:mx-0">
                 <input 
                   type="text" 
                   placeholder="Search articles..."
                     className="w-full py-3 pl-4 pr-12 text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
                />
                <button className="absolute inset-y-0 right-0 flex items-center justify-center w-12 h-full text-gray-500 hover:text-[#00B4D8]">
                   <Search className="h-5 w-5" />
               </button>
              </div>
              </div>
             <div>
               <img 
                 src="https://miro.medium.com/1*HkiVLx2dlUwEGZUaEyOoCg.jpeg" 
                   alt="Abstract AI visualization" 
                   className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
               </div>
             </div>
             </div>
      </div>

     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {loading && <div className="col-span-full text-center py-12">Loading blogs...</div>}

           {!loading && blogs.map((post) => (
               <BlogCard key={post.id} post={{
               id: post.id, // ID is useful internally
               date: post.date || '',
              title: post.title || 'Untitled',
              description: (post.content || '').replace(/<[^>]*>/g, '').substring(0, 180),
               image: post.imageUrl || '/blog1.webp',
               slug: post.slug, // IMPORTANT: Assumes this field exists in your Firestore document
 }} />
))}
          </div>
         </div>
    </div>
    );
};

export default BlogPage;