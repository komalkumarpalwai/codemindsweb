import React, { useEffect, Suspense, lazy } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy load pages
const Homepage = lazy(() => import('./pages/Homepage'));
const PricingPage = lazy(() => import('./pages/Pricing'));
const InternshipPage = lazy(() => import('./pages/InternshipPage'));
const ContactPage = lazy(() => import('./pages/Contact'));
const BookCallPage = lazy(() => import('./pages/Bookacall'));
const WebDesignPage = lazy(() => import('./pages/WebDesignPage'));
const DigitalMarketingMainPage = lazy(() => import('./pages/DigitalMarketingMainPage'));
const DesignsPage = lazy(() => import('./pages/DesignsPage'));
const SignupPage = lazy(() => import('./pages/SignupPage'));
const EmployeeDashboard = lazy(() => import('./pages/Employeedashboard'));
const AdminDashboard = lazy(() => import('./pages/Admindashboard'));
const DigitalMarketingPage = lazy(() => import('./pages/DigitalMarketingPage'));
const BrandsPage = lazy(() => import('./pages/BrandsPage'));

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const hideLayoutPaths = ['/admin-dashboard', '/employee-dashboard', '/signup'];
  const shouldHideLayout = hideLayoutPaths.some(path =>
    location.pathname === path || location.pathname.startsWith(path + '/')
  );

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {!shouldHideLayout && <Navbar />}

      <main className="flex-grow">
        <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Homepage />} />
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
            <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="*" element={<div className="p-10 text-center">404: Page Not Found</div>} />
          </Routes>
        </Suspense>
      </main>

      {!shouldHideLayout && <Footer />}
    </div>
  );
};

export default App;
