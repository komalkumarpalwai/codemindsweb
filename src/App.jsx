import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./pages/Home";
import ClientCarousel from "./pages/ClientCarousel";
import GraphicDesignPage from "./pages/GraphicDesignPage";
import DigitalMarketingPage from "./pages/DigitalMarketingPage";
import BrandsPage from "./pages/BrandsPage";
import FAQsPage from "./pages/FAQsPage";
import PricingPage from "./pages/Pricing";
import InternshipPage from "./pages/InternshipPage";
import ContactPage from "./pages/Contact"; // Assuming the path to ContactPage
import BookCallPage from "./pages/Bookacall"; // Assuming the path to BookCallPage

const App = () => {
  const location = useLocation();

  // Scroll to the top of the page on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const isPricing = location.pathname === '/pricing';
  const isInternship = location.pathname === '/internship';
  const isContact = location.pathname === '/contact';
  const isBookCall = location.pathname === '/bookacall';

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />

      {isPricing ? (
        <PricingPage />
      ) : isInternship ? (
        <InternshipPage />
      ) : isContact ? (
        <ContactPage />
      ) : isBookCall ? (
        <BookCallPage />
      ) : (
        <>
          <Home />
          <ClientCarousel />
          <GraphicDesignPage />
          <DigitalMarketingPage />
          <BrandsPage />
          <FAQsPage />
        </>
      )}

      <Footer />
    </div>
  );
};

export default App;
