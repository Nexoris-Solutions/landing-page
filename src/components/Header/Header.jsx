import React from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <motion.nav
        className="bg-black/90 backdrop-blur-md shadow-lg rounded-full px-8 py-3 flex gap-8 items-center max-w-2xl mx-auto"
        whileHover={{
          scale: 1.03,
          transition: { type: 'spring', stiffness: 200 },
        }}
      >
        {navItems.map(({ label, href }) => (
          <motion.a
            key={label}
            href={href}
            className="text-white font-semibold transition-colors duration-75"
            whileHover={{
              scale: 1.2,
              transition: { type: 'spring', stiffness: 200 },
              color: '#c084fc'
            }}
          >
            {label}
          </motion.a>
        ))}
      </motion.nav>
    </div>
  );
};

export default Header;
