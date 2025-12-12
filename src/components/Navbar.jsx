import React, { useState, useEffect } from "react";
import { collection, query as firestoreQuery, orderBy as firestoreOrderBy, limit as firestoreLimit, onSnapshot as firestoreOnSnapshot, where as firestoreWhere } from 'firebase/firestore';
import { db } from '../config/firebase';
import {
  ChevronDown,
  Menu,
  X,
  Cog,
  BarChart,
  Cloud,
  Beaker,
  MessageSquare,
  FileText,
  Camera,
  Brain,
  Phone,
  Image,
  Languages,
  TrendingUp,
  PersonStanding,
  Smile,
  ThumbsUp,
  ScanLine,
  Heart,
  ShoppingCart,
  Gamepad2,
  CircleDollarSign,
  Tag,
  Zap,
  Truck,
  Megaphone,
  Box,
  BrainCircuit,
  Rocket,
  Code,
  BarChartBig,
  Network,
  Bot,
  Puzzle,
  BrainCog,
  Lightbulb,
  DatabaseZap,
  Workflow,
  PieChart,
  MonitorSmartphone,
  Smartphone,
  CloudCog,
  BotMessageSquare,
  ChartArea,
  DatabaseIcon,
  Warehouse,
  
} from "lucide-react";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeServiceCategory, setActiveServiceCategory] = useState("ai_ml");
  const [openMobileSubMenu, setOpenMobileSubMenu] = useState(null);
  const [menuTimeoutId, setMenuTimeoutId] = useState(null);

  const iconClass = "h-5 w-5 text-cyan-600";

  const aboutMenuContent = {
    links: [
      {
        text: "About Us",
        href: "/about-us",
      },
      {
        text: "Partnerships",
        href: "/partnerships",
      },
    ],
    featured: {
      title: "The Current State of Artificial Intelligence 2024",
      href: "",
      image: "/product.webp",
    },
  };
  const servicesMenuContent = {
    ai_ml: {
      subServices: [
        {
          text: "AI Consulting",
          icon: <BrainCircuit className={iconClass} />,
          href: "/ai-consulting",
        },
        {
          text: "AI Product Development",
          icon: <Rocket className={iconClass} />,
          href: "/ai-product-development",
        },
        {
          text: "AI Software Development",
          icon: <Code className={iconClass} />,
          href: "/ai-software-development",
        },
        {
          text: "Data Science Services",
          icon: <BarChartBig className={iconClass} />,
          href: "/data-science",
        },
        {
          text: "Machine Learning Consulting",
          icon: <Network className={iconClass} />,
          href: "/ml-consulting",
        },
        {
          text: "Machine Learning Development",
          icon: <Bot className={iconClass} />,
          href: "/ml-development",
        },
        {
          text: "Customer Experience Consulting",
          icon: <Smile className={iconClass} />,
          href: "/ce-consulting",
        },
      ],
      featured: [
        {
          title: "Marketing Campaign Performance Optimization",
          image: "/service2.png",
          href: "",
        },
      ],
    },
    gen_ai: {
      subServices: [
        {
          text: "Generative AI Consulting services",
          icon: <MessageSquare className={iconClass} />,
          href: "/generative-ai-consulting",
        },{
          text: "Generative AI Development",
          icon: <Bot className={iconClass} />,
          href: "/generative-ai-development",
        },
        {
          text: "GPT Integration",
          icon: <Puzzle className={iconClass} />,
          href: "/gpt-integration",
        },{
          text: "AI Chatbot Development",
          icon: <BotMessageSquare className={iconClass} />,
          href: "/ai-chatbot-development",
        },
        {
          text: "LLM Development",
          icon: <BrainCog className={iconClass} />,
          href: "/llm-benefits",
        },
        
      ],
      featured: [
        {
          title: "ChatGPT Prompt Engineering",
          image: "/service.png",
          href: "",
        },
        {
          title: "Enterprise AI Solutions",
          image: "/service2.png",
          href: "",
        },
      ],
    },
    big_data: {
      subServices: [
        {
          text: "Big Data Development",
          icon: <DatabaseZap className={iconClass} />,
          href: "/big-data-development",
        },
        {
          text: "Modern Data Architecture",
          icon: <Workflow className={iconClass} />,
          href: "/morden-data-arch",
        },
        {
          text: "Data Engineering Services",
          icon: <PieChart className={iconClass} />,
          href: "/big-data-engineering",
        },{
          text: "Big Data Analytics",
          icon: <ChartArea className={iconClass} />,
          href: "/big-data-analytics",
        },
        {
          text: "BI & Data Visualizations",
          icon: <ChartArea className={iconClass} />,
          href: "/bi-data-visualizations",
        },
        {
          text: "Cloud Services",
          icon: <Cloud className={iconClass} />,
          href: "/cloud-services",
        },
        {
          text: "Data Warehouse",
          icon: <Warehouse className={iconClass} />,
          href: "/data-warehousing",
        },
      ],
      featured: [
        {
          title: "Predictive Analytics",
          image: "/service2.png",
          href: "",
        },
        {
          title: "Data Insights",
          image: "/service.png",
          href: "",
        },
      ],
    },
    software_dev: {
      subServices: [
        {
          text: "Web App Development",
          icon: <MonitorSmartphone className={iconClass} />,
          href: "/web-development",
        },
        {
          text: "AI Mobile App Development",
          icon: <Smartphone className={iconClass} />,
          href: "/ai-mobile-development",
        },
      ],
      featured: [
        {
          title: "Scalable Software Architecture",
          image: "/service2.png",
          href: "/blog/scalable-architecture",
        },
        {
          title: "Modern Development",
          image: "/service.png",
          href: "/blog/scalable-architecture",
        },
      ],
    },
  };

  // Copy of menu content that may contain the latest blog in the featured lists
  const [menuContent, setMenuContent] = useState(servicesMenuContent);
  // About menu featured (single) - default to static featured value
  const [aboutFeatured, setAboutFeatured] = useState(aboutMenuContent.featured);

  // Listen to the latest blog post and inject it into each "featured" list so it shows up in the dropdowns
  useEffect(() => {
    const q = firestoreQuery(
      collection(db, 'blogs'),
      firestoreOrderBy('createdAt', 'desc'),
      firestoreLimit(3)
    );
    const unsubscribe = firestoreOnSnapshot(q, (snapshot) => {
      if (!snapshot || snapshot.empty) return;
      const docs = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      console.debug('Navbar: fetched latest docs count', docs.length);
      // Prefer only active posts, but fallback to any posts if none explicitly 'active'
      let latestPosts = docs.filter((d) => d.status === 'active');
      if (latestPosts.length === 0) latestPosts = docs;
      const latestItems = latestPosts.slice(0, 3).map((p) => ({ title: p.title, image: p.imageUrl || '/service2.png', href: `/blog/${p.id}`, id: p.id }));
      const newMenu = Object.keys(servicesMenuContent).reduce((acc, key) => {
        const cat = servicesMenuContent[key];
        const currentFeatured = Array.isArray(cat.featured) ? [...cat.featured] : [];
        // Replace featured array with latestItems if present, otherwise keep static featured entries
        const featuredToUse = latestItems.length > 0 ? latestItems : currentFeatured;
        acc[key] = { ...cat, featured: featuredToUse };
        return acc;
      }, {});
      setMenuContent(newMenu);
      // Update About menu: set first of latest items (if present) or keep static
      if (latestItems.length > 0) {
        setAboutFeatured({ title: latestItems[0].title, href: latestItems[0].href, image: latestItems[0].image });
      } else {
        setAboutFeatured(aboutMenuContent.featured);
      }
    }, (err) => {
      console.error('Navbar: Failed to subscribe to latest blog:', err);
    });
    return () => unsubscribe();
  }, []);

  // Content for the Solutions Dropdown Menu
  const solutionsMenuContent = [
    {
      text: "Virtual Assistant Tool",
      icon: <MessageSquare className={iconClass} />,
      href: "/virtual-assistant",
    },
    {
      text: "Text Analysis",
      icon: <FileText className={iconClass} />,
      href: "/text-analysis",
    },
    {
      text: "Computer Vision",
      icon: <Camera className={iconClass} />,
      href: "/computer-vision",
    },
    {
      text: "Custom Large Language Models",
      icon: <Brain className={iconClass} />,
      href: "/custom-llm",
    },
    {
      text: "AI Call Center Solutions",
      icon: <Phone className={iconClass} />,
      href: "/call-center",
    },
    {
      text: "Image Recognition",
      icon: <Image className={iconClass} />,
      href: "/image-recognition",
    },
    {
      text: "Natural Language Processing",
      icon: <Languages className={iconClass} />,
      href: "/nlp",
    },
    {
      text: "Predictive Analytics",
      icon: <TrendingUp className={iconClass} />,
      href: "/predictive-analytics",
    },
    {
      text: "Pose Estimation",
      icon: <PersonStanding className={iconClass} />,
      href: "/pose-estimation",
    },
    {
      text: "Consumer Sentiment Analysis",
      icon: <Smile className={iconClass} />,
      href: "/sentiment-analysis",
    },
    {
      text: "Recommendation Systems",
      icon: <ThumbsUp className={iconClass} />,
      href: "/recommendation-systems",
    },
    {
      text: "Data Capture & OCR",
      icon: <ScanLine className={iconClass} />,
      href: "/ocr",
    },
  ];

  // Content for the Industries Dropdown Menu
  const industriesMenuContent = [
    {
      text: "Healthcare & Pharma",
      icon: <Heart className={iconClass} />,
      href: "/health",
    },
    {
      text: "E-commerce",
      icon: <ShoppingCart className={iconClass} />,
      href: "/ecommerce",
    },
    {
      text: "Game & Entertainment",
      icon: <Gamepad2 className={iconClass} />,
      href: "/gaming",
    },
    {
      text: "FinTech",
      icon: <CircleDollarSign className={iconClass} />,
      href: "/fintech",
    },
    { text: "Retail", icon: <Tag className={iconClass} />, href: "/retail" },
    {
      text: "Sport & Wellness",
      icon: <Zap className={iconClass} />,
      href: "/sport",
    },
    {
      text: "Automotive",
      icon: <Truck className={iconClass} />,
      href: "/automotive",
    },
    {
      text: "MarTech",
      icon: <Megaphone className={iconClass} />,
      href: "/martech",
    },
    {
      text: "Logistics",
      icon: <Box className={iconClass} />,
      href: "/logistics",
    },
  ];

  // Categories for the Services menu tabbed interface
  const serviceCategories = [
    { key: "ai_ml", text: "Artificial Intelligence & ML" },
    { key: "gen_ai", text: "Generative AI & GPT" },
    { key: "big_data", text: "Big Data & Cloud" },
    { key: "software_dev", text: "Software Development" },
  ];

  // Main navigation links configuration
  const navLinks = [
    { text: "About", hasDropdown: true, menuKey: "about" },
    { text: "Services", hasDropdown: true, menuKey: "services" },
    { text: "Solutions", hasDropdown: true, menuKey: "solutions" },
    { text: "Industries", hasDropdown: true, menuKey: "industries" }, // Changed from Demo's
    { text: "Blog", hasDropdown: false, href: "/blog" },
  ];
  const handleMenuEnter = (menuKey) => {
    if (menuTimeoutId) clearTimeout(menuTimeoutId);

    if (menuKey) {
      setActiveMenu(menuKey);
      if (menuKey === "services") setActiveServiceCategory("ai_ml");
    }
  };

  const handleMenuLeave = () => {
    const timeoutId = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
    setMenuTimeoutId(timeoutId);
  };

  const handleMobileSubMenuToggle = (menuKey) => {
    setOpenMobileSubMenu(openMobileSubMenu === menuKey ? null : menuKey);
  };

  return (
    <div className="relative">
      <nav className="bg-[#0f172a] text-white font-sans w-full shadow-md z-50 relative">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <img
                  className="h-10 w-auto"
                  src="/logow.png"
                  alt="Mindsmap AI Services"
                />
              </a>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-8">
              {navLinks.map((link) => (
                <div
                  key={link.text}
                  className="relative"
                  onMouseEnter={() => handleMenuEnter(link.menuKey)}
                  onMouseLeave={handleMenuLeave}
                >
                  <a
                    href={link.href || "#"}
                    className={`py-2 px-1 text-slate-200 hover:text-white transition-colors duration-300 flex items-center border-b-2 ${
                      activeMenu === link.menuKey
                        ? "border-orange-500"
                        : "border-transparent"
                    }`}
                  >
                    {link.text}
                    {link.hasDropdown && (
                      <ChevronDown className="h-4 w-4 ml-1 inline-block transition-transform duration-300" />
                    )}
                  </a>
                </div>
              ))}
            </div>
            <div className="hidden md:block">
              <a
                href="/contact"
                className="bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </a>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${
          activeMenu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onMouseEnter={() => setActiveMenu(null)}
      />

      <div
        onMouseEnter={() => handleMenuEnter("about")}
        onMouseLeave={handleMenuLeave}
        className={`absolute left-0 w-full bg-white text-gray-800 shadow-lg transition-all duration-300 ease-in-out transform z-50 hidden md:block ${
          activeMenu === "about"
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-5 opacity-0 invisible"
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 space-y-4">
            {aboutMenuContent.links.map((link) => (
              <a
                key={link.text}
                href={link.href}
                className="block text-lg font-semibold text-slate-700 hover:text-cyan-600 hover:underline underline-offset-4 decoration-2 transition-colors"
              >
                {link.text}
              </a>
            ))}
          </div>
          <div className="md:col-span-2">
            <a
              href={aboutFeatured.href}
              className="flex items-center p-4 rounded-lg hover:bg-gray-50 transition-colors group"
            >
              <img
                src={aboutFeatured.image}
                alt={aboutFeatured.title}
                className="w-32 h-auto object-cover rounded-md shadow-md"
              />
              <p className="ml-6 text-lg font-semibold text-slate-800 group-hover:text-cyan-700">
                {aboutFeatured.title}
              </p>
            </a>
          </div>
        </div>
      </div>
      <div
        onMouseEnter={() => handleMenuEnter("services")}
        onMouseLeave={handleMenuLeave}
        className={`absolute left-0 w-full bg-white text-gray-800 shadow-lg transition-all duration-300 ease-in-out transform z-50 hidden md:block ${
          activeMenu === "services"
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-5 opacity-0 invisible"
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-12 gap-8">
          <div className="col-span-3">
            <ul className="space-y-2">
              {serviceCategories.map((cat) => (
                <li key={cat.key}>
                  <button
                    onMouseEnter={() => setActiveServiceCategory(cat.key)}
                    className={`w-full text-left px-4 py-3 text-lg font-semibold rounded-lg transition-colors flex justify-between items-center ${
                      activeServiceCategory === cat.key
                        ? "bg-cyan-50 text-cyan-600"
                        : "text-slate-700 hover:bg-gray-100"
                    }`}
                  >
                    {cat.text}
                    {activeServiceCategory === cat.key && (
                      <span className="text-cyan-500">→</span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-4 border-l border-gray-200 pl-8">
            <ul className="space-y-4">
              {servicesMenuContent[activeServiceCategory]?.subServices.map(
                (service) => (
                  <li key={service.text}>
                    <a href={service.href} className="flex items-center group">
                      {service.icon}
                      <span className="ml-4 text-slate-700 font-medium group-hover:text-cyan-600 transition-colors">
                        {service.text}
                      </span>
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="col-span-5 space-y-6">
            {menuContent[activeServiceCategory]?.featured.slice(0, 3).map(
              (item) => (
                <a
                  href={item.href}
                  key={item.title}
                  className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-20 object-cover rounded-md shadow-md flex-shrink-0"
                  />
                  <p className="ml-5 text-lg font-semibold text-slate-800 group-hover:text-cyan-700 flex items-center gap-2">
                    {item.title}
                    {item.href && item.href.startsWith('/blog/') && (
                      <span className="text-xs bg-cyan-50 text-cyan-600 px-2 py-0.5 rounded-full font-semibold">Latest</span>
                    )}
                  </p>
                </a>
              )
            )}
          </div>
        </div>
      </div>
      <div
        onMouseEnter={() => handleMenuEnter("solutions")}
        onMouseLeave={handleMenuLeave}
        className={`absolute left-0 w-full bg-white text-gray-800 shadow-lg transition-all duration-300 ease-in-out transform z-50 hidden md:block ${
          activeMenu === "solutions"
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-5 opacity-0 invisible"
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-3 gap-x-8 gap-y-6">
          {solutionsMenuContent.map((item) => (
            <a
              href={item.href}
              key={item.text}
              className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group"
            >
              {item.icon}
              <span className="ml-4 text-slate-700 font-medium group-hover:text-cyan-600 hover:underline underline-offset-4 decoration-1 transition-colors">
                {item.text}
              </span>
            </a>
          ))}
        </div>
      </div>
      <div
        onMouseEnter={() => handleMenuEnter("industries")}
        onMouseLeave={handleMenuLeave}
        className={`absolute left-0 w-full bg-white text-gray-800 shadow-lg transition-all duration-300 ease-in-out transform z-50 hidden md:block ${
          activeMenu === "industries"
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-5 opacity-0 invisible"
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-3 gap-x-8 gap-y-6">
          {industriesMenuContent.map((item) => (
            <a
              href={item.href}
              key={item.text}
              className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group"
            >
              {item.icon}
              <span className="ml-4 text-slate-700 font-medium group-hover:text-cyan-600 hover:underline underline-offset-4 decoration-1 transition-colors">
                {item.text}
              </span>
            </a>
          ))}
        </div>
      </div>

      <div
        className={`md:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        } bg-[#1e293b] absolute w-full z-50`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <div key={link.text}>
              {link.hasDropdown ? (
                <>
                  <button
                    onClick={() => handleMobileSubMenuToggle(link.menuKey)}
                    className="w-full flex justify-between items-center text-slate-200 hover:bg-slate-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                  >
                    <span>{link.text}</span>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${
                        openMobileSubMenu === link.menuKey ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openMobileSubMenu === link.menuKey && (
                    <div className="pl-4 mt-1 space-y-1">
                      {link.menuKey === "about" &&
                        aboutMenuContent.links.map((subLink) => (
                          <a
                            key={subLink.text}
                            href={subLink.href}
                            className="text-slate-300 hover:text-white block pl-3 pr-4 py-2 border-l-2 border-cyan-500 text-sm font-medium"
                          >
                            {subLink.text}
                          </a>
                        ))}
                      {link.menuKey === "services" &&
                        serviceCategories.map((cat) => (
                          <a
                            key={cat.key}
                            href={`/services#${cat.key}`}
                            className="text-slate-300 hover:text-white block pl-3 pr-4 py-2 border-l-2 border-cyan-500 text-sm font-medium"
                          >
                            {cat.text}
                          </a>
                        ))}
                      {link.menuKey === "solutions" &&
                        solutionsMenuContent.map((subLink) => (
                          <a
                            key={subLink.text}
                            href={subLink.href}
                            className="text-slate-300 hover:text-white block pl-3 pr-4 py-2 border-l-2 border-cyan-500 text-sm font-medium"
                          >
                            {subLink.text}
                          </a>
                        ))}
                      {link.menuKey === "industries" &&
                        industriesMenuContent.map((subLink) => (
                          <a
                            key={subLink.text}
                            href={subLink.href}
                            className="text-slate-300 hover:text-white block pl-3 pr-4 py-2 border-l-2 border-cyan-500 text-sm font-medium"
                          >
                            {subLink.text}
                          </a>
                        ))}
                    </div>
                  )}
                </>
              ) : (
                <a
                  href={link.href}
                  className="text-slate-200 hover:bg-slate-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  {link.text}
                </a>
              )}
            </div>
          ))}
          <a
            href="/contact"
            className="bg-cyan-500 text-white font-bold py-3 px-5 rounded-full hover:bg-cyan-600 transition-colors block text-center mt-4 mx-2"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;