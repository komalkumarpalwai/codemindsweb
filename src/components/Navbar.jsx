import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const underlineVariants = {
  rest: { width: 0 },
  hover: {
    width: '100%',
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const borderVariants = {
  animate: {
    scaleX: [0, 1],
    transition: {
      duration: 2,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'mirror'
    }
  }
};

const PremiumNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { name: 'Website Design', href: '/webdesign' },
    { name: 'Graphic Design', href: '/graphicdesign' },
    { name: 'Digital Marketing', href: '/digitalmarketing' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Internship', href: '/internship' },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gradient-to-r from-gray-800 via-black to-gray-800 shadow-lg py-2'
          : 'bg-gradient-to-b from-black/90 to-black/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <RouterLink to="/">
          <img src={logo} alt="Logo" className="h-6 w-auto cursor-pointer" />
        </RouterLink>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          {navItems.map(({ name, href }) => (
            <motion.div
              key={name}
              className="relative text-sm font-medium uppercase tracking-wide text-white cursor-pointer"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <RouterLink to={href} className="block">
                {name}
              </RouterLink>
              <motion.span
                variants={underlineVariants}
                className="absolute bottom-0 left-0 h-[2px] bg-[#01C4C5] rounded"
              />
            </motion.div>
          ))}

          {/* Contact */}
          <motion.div
            initial={{ scale: 1, boxShadow: '0px 0px 0px rgba(1,196,197,0)' }}
            whileHover={{
              scale: 1.05,
              backgroundColor: '#01C4C5',
              color: '#000',
              boxShadow: '0 8px 20px rgba(1,196,197,0.5)'
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="ml-4 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-white border-2 border-white rounded-md cursor-pointer"
          >
            <RouterLink to="/contact">Contact</RouterLink>
          </motion.div>

          {/* Signup */}
          <motion.div
            initial={{ scale: 1, boxShadow: '0px 0px 0px rgba(1,196,197,0)' }}
            whileHover={{
              scale: 1.05,
              backgroundColor: '#fff',
              color: '#01C4C5',
              boxShadow: '0 8px 20px rgba(255,255,255,0.4)'
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="ml-2 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-[#01C4C5] bg-transparent border-2 border-[#01C4C5] rounded-md cursor-pointer"
          >
            <RouterLink to="/signup">Signup</RouterLink>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen((o) => !o)}
            className="text-white p-2 focus:outline-none"
          >
            {mobileMenuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gradient-to-b from-black/90 to-black/60 px-4 pt-4 pb-6 space-y-4"
          >
            {navItems.map(({ name, href }) => (
              <RouterLink
                key={name}
                to={href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 rounded-md text-base font-medium text-white hover:text-gray-300 text-center cursor-pointer"
              >
                {name}
              </RouterLink>
            ))}

            <RouterLink
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block mt-2 py-2 px-4 text-base font-semibold uppercase tracking-wide text-white border-2 border-white rounded-md text-center cursor-pointer"
            >
              Contact
            </RouterLink>

            <RouterLink
              to="/signup"
              onClick={() => setMobileMenuOpen(false)}
              className="block mt-2 py-2 px-4 text-base font-semibold uppercase tracking-wide text-[#01C4C5] border-2 border-[#01C4C5] rounded-md text-center cursor-pointer"
            >
              Signup
            </RouterLink>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animated Bottom Border */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-px origin-left bg-gradient-to-r from-white to-white"
        variants={borderVariants}
        animate="animate"
      />
    </motion.nav>
  );
};

export default PremiumNavbar;
