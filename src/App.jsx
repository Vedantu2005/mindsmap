import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import BlogPage from "./Pages/BlogPage";
// Removed static BlogDetail imports to use the dynamic one exclusively
import BlogDetailDynamic from './Pages/BlogDetailDynamic';

import AdminLogin from "./Pages/admin/Login";
import ProtectedRoute from "./Pages/admin/ProtectedRoute";
import BlogManager from "./Pages/admin/Blog";
import About from "./Pages/About";
import Partner from "./Pages/Partner";
import Contact from "./Pages/Contact";
import Market from "./Pages/Market";
import Game from "./Pages/Game";
import Sport from "./Pages/Sport";
import Logistics from "./Pages/Logistics";
import FinTech from "./Pages/FinTech";
import Ecom from "./Pages/Ecom";
import Automotive from "./Pages/Automotive";
import Health from "./Pages/Health";
import Virtual from "./Pages/Virtual";
import Sentiment from "./Pages/Sentiment";
import Recomand from "./Pages/Recomand";
import NLP from "./Pages/NLP";
import Predictive from "./Pages/Predictive";
import Call from "./Pages/Call";
import LLM from "./Pages/LLM";
import Text from "./Pages/Text";
import CV from "./Pages/CV";
import Pose from "./Pages/Pose";
import Image from "./Pages/Image";
import OCR from "./Pages/OCR";
import AICounsult from "./Pages/AICounsult";
import AIProduct from "./Pages/AIProduct";
import Web from "./Pages/Web";
import GptIntegration from "./Pages/GptIntegration";
import AiChatbotDevelopment from "./Pages/AiChatbot";
import GenAiConsulting from "./Pages/GenAiConsulting";
import GenAiDevPatner from "./Pages/GenAiDevPatner";
import BigDataDevelopment from "./Pages/BigDataDevelopment";
import AiMobileApps from "./Pages/AiMobileApps";
import WebDevelopment from "./Pages/WebDevelopment";
import CustomerExperienceConsulting from "./Pages/CustomerExperienceConsulting";
import MachineLearningConsult from "./Pages/MachineLearningConsulting";
import MachineLearningDev from "./Pages/MachineLearningDevelopment";
import DataScienceServices from "./Pages/DataScienceServices";
import ModernDataArchitectureConsultants from "./Pages/ModernDataArchitectureConsultants";
import AiSoftwareDev from "./Pages/AiSoftwareDev";
import BussinessInteligence from "./Pages/BussinessInteligence";
import CloudServices from "./Pages/CloudServices";
import DataWareHouse from "./Pages/DataWareHouse";
import LLMBenifits from "./Pages/LLMBenifitsPage";
import BigDataEngPage from "./Pages/BigDataEngPage";
import BigDataAnlytics from "./Pages/BigDataAnalytics";

const App = () => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(() => {
    // Restore admin login state from localStorage token if present
    try {
      return !!localStorage.getItem('adminToken');
    } catch (err) {
      return false;
    }
  });
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");
  return (
    <>
      <div className="flex flex-col min-h-screen">
        {!isAdminRoute && <Navbar />}
        <main className="flex-grow">
          <Routes>
            {/* Main page routes */}
            <Route path="/" element={<Home />} />

            <Route path="/blog" element={<BlogPage />} />
            
            {/* This DYNAMIC route now handles ALL blog posts. 
              It matches any URL like /blog/some-title 
              and passes "some-title" as the slug to BlogDetailDynamic 
            */}
            <Route path="/blog/:id" element={<BlogDetailDynamic />} />
            
            <Route path="/about-us" element={<About />} />
            <Route path="/partnerships" element={<Partner />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/martech" element={<Market />} />
            <Route path="/gaming" element={<Game />} />
            <Route path="/sport" element={<Sport />} />
            <Route path="/logistics" element={<Logistics />} />
            <Route path="/fintech" element={<FinTech />} />
            <Route path="/retail" element={<FinTech />} />
            <Route path="/ecommerce" element={<Ecom />} />
            <Route path="/automotive" element={<Automotive />} />
            <Route path="/health" element={<Health />} />
            <Route path="/virtual-assistant" element={<Virtual />} />
            <Route path="/sentiment-analysis" element={<Sentiment />} />
            <Route path="/nlp" element={<NLP />} />
            <Route path="/recommendation-systems" element={<Recomand />} />
            <Route path="/predictive-analytics" element={<Predictive />} />
            <Route path="/call-center" element={<Call />} />
            <Route path="/custom-llm" element={<LLM />} />
            <Route path="/text-analysis" element={<Text />} />
            <Route path="/computer-vision" element={<CV />} />
            <Route path="/pose-estimation" element={<Pose />} />
            <Route path="/image-recognition" element={<Image />} />
            <Route path="/ocr" element={<OCR />} />
            <Route path="/ai-consulting" element={<AICounsult />} />
            <Route path="/ai-product-development" element={<AIProduct />} />
            <Route path="/web-development" element={<Web />} />
            <Route path="/gpt-integration" element={<GptIntegration />} />
            <Route
              path="/ai-chatbot-development"
              element={<AiChatbotDevelopment />}
            />
            <Route
              path="/generative-ai-consulting"
              element={<GenAiConsulting />}
            />
            <Route
              path="/generative-ai-development"
              element={<GenAiDevPatner />}
            />
            <Route
              path="/big-data-development"
              element={<BigDataDevelopment />}
            />
            <Route path="/ai-mobile-development" element={<AiMobileApps />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route
              path="/ce-consulting"
              element={<CustomerExperienceConsulting />}
            />
            <Route path="/ml-consulting" element={<MachineLearningConsult />} />
            <Route path="/ml-development" element={<MachineLearningDev />} />
            <Route path="/data-science" element={<DataScienceServices />} />
            <Route
              path="/morden-data-arch"
              element={<ModernDataArchitectureConsultants />}
            />
            <Route
              path="/ai-software-development"
              element={<AiSoftwareDev />}
            />
            <Route
              path="/bi-data-visualizations"
              element={<BussinessInteligence />}
            />
            <Route path="/cloud-services" element={<CloudServices />} />
            <Route path="/data-warehousing" element={<DataWareHouse />} />
            <Route path="/llm-benefits" element={<LLMBenifits />} />
            <Route path="/big-data-engineering" element={<BigDataEngPage />} />
            <Route path="/big-data-analytics" element={<BigDataAnlytics />} />

            {/* Admin Routes */}
            <Route
              path="/admin"
              element={<AdminLogin setIsAdminLoggedIn={setIsAdminLoggedIn} />}
            />
            <Route
              path="/admin/blog"
              element={
                <ProtectedRoute isLoggedIn={isAdminLoggedIn}>
                  <BlogManager setIsAdminLoggedIn={setIsAdminLoggedIn} />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
        {!isAdminRoute && <Footer />}
      </div>
    </>
  );
};

export default App;