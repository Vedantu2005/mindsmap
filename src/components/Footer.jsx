import React from 'react';

// Reusable component for footer links
const FooterLink = ({ href, children }) => (
  <li>
    <a href={href} className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">
      {children}
    </a>
  </li>
);

// Reusable component for address blocks
const AddressBlock = ({ lines }) => (
  <p className="text-slate-300">
    {lines.map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ))}
  </p>
);

const Footer = () => {
  const expertiseLinks = [
    { href: '/data-science', text: 'Data Science & AI' },
    { href: '/ml-consulting', text: 'Machine Learning consulting' },
    { href: '/ml-development', text: 'Machine Learning development' },
    { href: '/ai-software-development', text: 'AI Software Development' },
    { href: '/ai-mobile-development', text: 'AI Mobile Apps Development' },
    { href: '/nlp', text: 'Natural Language Processing' },
    { href: '/ocr', text: 'Data Capture & OCR' },
  ];

  const bigDataLinks = [
    { href: '/big-data-development', text: 'Big Data Development' },
    { href: '/morden-data-arch', text: 'Data Architecture Engineering' },
    { href: '/data-warehousing', text: 'Data Warehouse Engineering' },
    { href: '/bi-data-visualizations', text: 'BI & Data Visualizations' },
    { href: '/predictive-analytics', text: 'Predictive analytics' },
    { href: '/cloud-services', text: 'Cloud Services' },
  ];

  const aboutUsLinks = [
    { href: '/blog', text: 'Blog' },
    { href: '/about-us', text: 'About' },
  ];
  
  const addresses = [
    ['418, MRG, Mahalaxmi Nagar,', 'Indore, Madhya Pradesh,', 'India.'],
  ];

  return (
    <footer className="bg-[#0f172a] text-white font-sans w-full py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Expertise & Services */}
          <div>
            <h3 className="text-lg font-semibold text-white">Expertise & Services</h3>
            <ul className="mt-6 space-y-4">
              {expertiseLinks.map(link => <FooterLink key={link.text} href={link.href}>{link.text}</FooterLink>)}
            </ul>
          </div>

          {/* Big Data Solutions */}
          <div>
            <h3 className="text-lg font-semibold text-white">Big Data Solutions</h3>
            <ul className="mt-6 space-y-4">
              {bigDataLinks.map(link => <FooterLink key={link.text} href={link.href}>{link.text}</FooterLink>)}
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold text-white">About Us</h3>
            <ul className="mt-6 space-y-4">
              {aboutUsLinks.map(link => <FooterLink key={link.text} href={link.href}>{link.text}</FooterLink>)}
            </ul>
          </div>

          {/* Contact Info & Address */}
          <div className="space-y-6">
            <a href="https://www.linkedin.com/company/mindsmapai/" className="inline-block bg-slate-700 p-3 rounded-full hover:bg-cyan-500 transition-colors duration-300" aria-label="LinkedIn">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
            </a>
            {addresses.map((addr, index) => <AddressBlock key={index} lines={addr} />)}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-slate-400">&copy; Mindsmap AI 2025 </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
