// src/pages/BlogPage.jsx

import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'; // Import Link
import { collection, onSnapshot, query, orderBy, where } from 'firebase/firestore';
import { db } from '../config/firebase';
import { ArrowRight, Search } from 'lucide-react';

// Reusable Blog Card Component - Now using <Link>
const BlogCard = ({ post }) => (
  <div className="bg-white rounded-lg border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden text-left h-full flex flex-col group">
    <div className="overflow-hidden">
      <Link to={post.href}>
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
        <Link to={post.href} className="hover:text-[#00B4D8] transition-colors">
          {post.title}
        </Link>
      </h3>
      <p className="mt-3 text-gray-600 text-base line-clamp-3">
        {post.description}
      </p>
      <Link to={post.href} className="mt-4 text-[#00B4D8] font-semibold hover:text-cyan-700 self-start inline-flex items-center">
        Read More
        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  </div>
);


const BlogPage = () => {
  // const {slug}=useParams();
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
  //   const blogPosts = [
  //   {
  //     date: '30 JULY 2024',
  //     title: 'Enterprise AI development solutions: The key to business transformation',
  //     description: 'Businesses of all domains and sizes can gain a competitive edge by leveraging automation in their processes and operations. Enterprise AI development solutions can help...',
  //     image: '/blog1.webp',
  //     href: '/blog/enterprise-ai-solutions' // Matches the Route path
  //   },
  //   {
  //     date: '25 JULY 2024',
  //     title: 'AI agents: Examples, functions, applications, future trends',
  //     description: 'Artificial intelligence solutions have become a dynamite that exploded loudly in the mass market and business realm. We can name countless AI agents examples that...',
  //     image: '/blog2.webp',
  //     href: '/blog/ai-agents-explained' // Matches the Route path
  //   },
  //   {
  //     date: '23 JULY 2024',
  //     title: 'Benefits of automated machine learning for your organization',
  //     description: 'Anecdotal evidence and several real-world case studies indicate automated machine learning benefits organizations in any industry and of any size. As artificial intelligence (AI) demand...',
  //     image: '/blog3.webp',
  //     href: '/blog/automated-machine-learning' // Matches the Route path
  //   },
  //   {
  //     date: '18 JULY 2024',
  //     title: 'IoT artificial intelligence analytics: Benefits, challenges, and trends',
  //     description: 'Exploring how the combination of IoT and AI is creating new opportunities for data analysis and business intelligence across various sectors.',
  //     image: '/blog4.webp',
  //     href: '/blog/iot-ai-analytics' // Matches the Route path
  //   },
  //   {
  //     date: '16 JULY 2024',
  //     title: '15 companies using generative AI for business efficiency',
  //     description: 'A look into how leading companies are implementing generative AI to streamline operations, enhance creativity, and drive growth.',
  //     image: '/blog5.webp',
  //     href: '/blog/companies-using-generative-ai' // Matches the Route path
  //   },
  //   {
  //     date: '10 JULY 2024',
  //     title: 'The Future of AI in Healthcare: A Deep Dive',
  //     description: 'From diagnostics to personalized medicine, we delve into the transformative impact AI is poised to have on the healthcare industry.',
  //     image: '/blog6.webp',
  //     href: '/blog/ai-in-healthcare' // Matches the Route path
  //   },
  //   {
  //     date: '05 JULY 2024',
  //     title: 'How AI is Revolutionizing the Finance Industry',
  //     description: 'AI algorithms are reshaping everything from fraud detection to algorithmic trading. Discover the key ways AI is changing finance.',
  //     image: '/blog7.webp',
  //     href: '/blog/ai-in-finance' // Matches the Route path
  //   },
  //   {
  //     date: '02 JULY 2024',
  //     title: 'Ethical Considerations in AI Development',
  //     description: 'As AI becomes more powerful, the ethical implications grow. We discuss the importance of fairness, accountability, and transparency in AI systems.',
  //     image: '/blog8.webp',
  //     href: '/blog/ai-ethics' // Matches the Route path
  //   },
  //   {
  //     date: '28 JUNE 2024',
  //     title: 'A Beginner\'s Guide to Natural Language Processing (NLP)',
  //     description: 'Breaking down the fundamentals of NLP, from sentiment analysis to language translation, and how it enables computers to understand human language.',
  //     image: '/blog9.webp',
  //     href: '/blog/beginners-guide-nlp' // Matches the Route path
  //   },
  // ];

  return (
    <div className="bg-gray-50 font-sans">
      {/* Hero Section */}
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

      {/* Blog Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {loading && (
            <div className="col-span-full text-center py-12 bg-white rounded-xl border border-dashed border-slate-300">
              <p className="text-slate-500">Loading blogs...</p>
            </div>
          )}

          {!loading && blogs.length === 0 && (
            <div className="col-span-full text-center py-12 bg-white rounded-xl border border-dashed border-slate-300">
              <p className="text-slate-500">No blogs found.</p>
            </div>
          )}

          {!loading && blogs.map((post) => (
            <BlogCard key={post.id} post={{
              date: post.date || '',
              title: post.title || 'Untitled',
              description: (post.content || '').replace(/<[^>]*>/g, '').substring(0, 180),
              image: post.imageUrl || '/blog1.webp',
              href: `/blog/${post.slug || post.id}`
            }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;