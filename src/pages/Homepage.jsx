import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import Home from "./Home";
import ClientCarousel from "./ClientCarousel";
import GraphicDesignPage from "./GraphicDesignPage";
import DigitalMarketingPage from "./DigitalMarketingPage";
import BrandsPage from "./BrandsPage";
import FAQsPage from "./FAQsPage";

const HomepageContent = () => (
  <>
    <Home />
    <ClientCarousel />
    <GraphicDesignPage />
    <DigitalMarketingPage />
    <BrandsPage />
    <FAQsPage />
  </>
);

const Homepage = () => (
  <ErrorBoundary>
    <HomepageContent />
  </ErrorBoundary>
);

export default Homepage;
