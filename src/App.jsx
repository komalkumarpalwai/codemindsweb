import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./pages/Home"
import ClientCarousel from "./pages/ClientCarousel"
import GraphicDesignPage  from "./pages/GraphicDesignPage"
import DigitalMarketingPage from "./pages/DigitalMarketingPage"
import BrandsPage from "./pages/BrandsPage"
import FAQsPage from "./pages/FAQsPage"
const App = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
    <Home/>
    <ClientCarousel />
    <GraphicDesignPage />
    <DigitalMarketingPage />
    <BrandsPage/>
    <FAQsPage />
      <Footer />
     
    </div>
  );
};

export default App;
