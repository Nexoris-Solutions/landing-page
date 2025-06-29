import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

const darkSections = [
  'about',
  'members',
  'footer',
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let foundDark = false;
      for (const id of darkSections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            foundDark = true;
            break;
          }
        }
      }
      setIsDark(foundDark);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full px-4 sm:px-6 md:px-10"
    >
      <div className={`w-full max-w-7xl mx-auto flex items-center justify-between bg-white/40 backdrop-blur-lg border border-blue-200/50 shadow-md rounded-full px-6 py-3 transition-colors duration-300 ${isDark ? 'bg-black/60 border-blue-900/50' : ''}`}>
        {/* Left Navbar: Brand */}
        <nav className="flex items-center">
          <p className={`font-montserratUnderline text-base sm:text-lg font-semibold tracking-wide transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-700'}`}>
            NEXORIS
          </p>
        </nav>

        {/* Right Navbar: Navigation Links */}
        <nav className="flex items-center">
          {/* Desktop Nav */}
          <motion.nav
            className="hidden md:flex gap-6 items-center"
            whileHover={{
              scale: 1.02,
              transition: { type: 'spring', stiffness: 180 },
            }}
          >
            {navItems.map(({ label, href }) => (
              <motion.a
                key={label}
                href={href}
                className={`text-sm font-semibold tracking-wide transition-colors duration-200 hover:text-blue-400 ${isDark ? 'text-white' : 'text-gray-800'}`}
                whileHover={{
                  scale: 1.05,
                  transition: { type: 'spring', stiffness: 250 },
                }}
              >
                {label}
              </motion.a>
            ))}
          </motion.nav>

          {/* Mobile Burger Icon */}
          <div className="md:hidden ml-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={24} className={isDark ? 'text-white' : 'text-gray-800'} /> : <FiMenu size={24} className={isDark ? 'text-white' : 'text-gray-800'} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`md:hidden mt-4 backdrop-blur-lg rounded-xl border shadow-md p-4 flex flex-col items-start gap-4 mx-auto transition-colors duration-300 ${isDark ? 'bg-black/80 border-blue-900/40' : 'bg-white/70 border-blue-200/40'}`}
          >
            {navItems.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className={`font-medium text-sm tracking-wide hover:text-blue-400 transition-colors duration-200 ${isDark ? 'text-white' : 'text-gray-800'}`}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
