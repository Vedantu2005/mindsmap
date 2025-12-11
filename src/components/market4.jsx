// /src/components/market4.jsx

import React from 'react';

// Reusable component for the image/video with the decorative background
const FeatureMedia = ({ src, alt, type = 'image' }) => (
  <div className="w-full md:w-1/2 flex items-center justify-center p-4">
    <div className="relative w-full max-w-lg">
      {/* Decorative background shape */}
      <div className="absolute top-4 -left-4 w-full h-full bg-blue-100/70 rounded-2xl"></div>
      
      {/* The actual media element */}
      {type === 'video' ? (
        <video
          src={src}
          className="relative w-full object-cover rounded-2xl shadow-lg"
          autoPlay
          loop
          muted
          playsInline
          alt={alt} // alt attribute for accessibility, though on video it's often better on parent or track
        >
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          src={src}
          alt={alt}
          className="relative w-full h-75 object-cover rounded-2xl shadow-lg"
        />
      )}
    </div>
  </div>
);

// Reusable component for the text content
const FeatureText = ({ title, children }) => (
  <div className="w-full md:w-1/2 flex items-center">
    <div className="p-4">
      <h3 className="text-3xl font-bold text-gray-800 mb-4">{title}</h3>
      <div className="text-gray-600 leading-relaxed space-y-4">
        {children}
      </div>
    </div>
  </div>
);


const Market4 = () => {
  return (
    <div className="bg-white font-sans py-16 md:py-10">
      <div className="container mx-auto max-w-6xl space-y-20 md:space-y-28">

        {/* --- Section 1: Lead Scoring (Now with Video) --- */}
        <section className="flex flex-col md:flex-row items-center gap-8">
          <FeatureMedia src="/market6.mp4" alt="Lead Scoring Analysis Video" type="video" />
          <FeatureText title="Lead Scoring: Identifying High-Value Leads for B2B Customers">
            <p>
              Optimise your marketing & sales efforts by targeting those potential
              clients who will bring your company most revenues. Define the <strong>right</strong> leads
              for yourself based on your business data and use it for lead quality
              prediction. It will allow you to be proactive, decreasing time to your
              targets and reducing marketing and advertising costs spent to less
              valuable for your business clients.
            </p>
          </FeatureText>
        </section>

        {/* --- Section 2: NLP for Sentiment Analysis (Image remains) --- */}
        <section className="flex flex-col md:flex-row items-center -mt-15 lg:-mt-5">
          <FeatureText title="NLP for Sentiment Analysis">
            <p>
              <span className="text-blue-600 font-semibold">AI-driven NLP services</span> open the door for your company to scale the
              sentiment tracking process on web pages and social media, which
              opens access to insights on huge amounts of information without delay.
              With this data and the use of artificial intelligence in marketing, you can
              track current trends and alter your services for high-rate and profitable
              advertising solutions.
            </p>
          </FeatureText>
          <FeatureMedia src="/market7.webp" alt="NLP Sentiment Analysis" type="image" />
        </section>

      </div>
    </div>
  );
};

export default Market4;