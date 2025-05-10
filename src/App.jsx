import React, { useEffect } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Main sections (for homepage)
import Home from "./pages/Home";
import ClientCarousel from "./pages/ClientCarousel";
import GraphicDesignPage from "./pages/GraphicDesignPage";
import DigitalMarketingPage from "./pages/DigitalMarketingPage";
import BrandsPage from "./pages/BrandsPage";
import FAQsPage from "./pages/FAQsPage";

// Route-based pages
import PricingPage from "./pages/Pricing";
import InternshipPage from "./pages/InternshipPage";
import ContactPage from "./pages/Contact";
import BookCallPage from "./pages/Bookacall";
import WebDesignPage from "./pages/WebDesignPage";
import DigitalMarketingMainPage from "./pages/DigitalMarketingMainPage";
import DesignsPage from "./pages/DesignsPage";
import SignupPage from "./pages/SignupPage";

import EmployeeDashboard from "./pages/Employeedashboard";
import AdminDashboard from "./pages/Admindashboard";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Paths where navbar/footer should be hidden
  const hideLayout = ['/admin-dashboard', '/employee-dashboard', '/signup'];

  const shouldHideLayout = hideLayout.some(path =>
    location.pathname.startsWith(path)
  );

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {!shouldHideLayout && <Navbar />}

      <Routes>
        {/* Main pages with navbar and footer */}
        <Route path="/" element={
          <>
            <Home />
            <ClientCarousel />
            <GraphicDesignPage />
            <DigitalMarketingPage />
            <BrandsPage />
            <FAQsPage />
          </>
        } />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/internship" element={<InternshipPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/bookacall" element={<BookCallPage />} />
        <Route path="/webdesign" element={<WebDesignPage />} />
        <Route path="/digitalmarketing" element={<DigitalMarketingMainPage />} />
        <Route path="/designs" element={<DesignsPage />} />
        <Route path="/graphicdesign" element={<DesignsPage />} />
        <Route path="/digitalmarketingsection" element={<DigitalMarketingPage />} />
        <Route path="/brands" element={<BrandsPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Dashboard pages (without navbar/footer) */}
        <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>

      {!shouldHideLayout && <Footer />}
    </div>
  );
};

export default App;
