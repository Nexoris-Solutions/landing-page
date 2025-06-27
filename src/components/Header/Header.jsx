import React from 'react'
import { motion } from 'framer-motion'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
    >
      <motion.nav
        className="bg-white/40 backdrop-blur-lg border border-blue-200/50 shadow-md rounded-full px-10 py-3 flex gap-8 items-center max-w-3xl mx-auto transition-all duration-300"
        whileHover={{
          scale: 1.02,
          transition: { type: 'spring', stiffness: 180 },
        }}
      >
        {navItems.map(({ label, href }) => (
          <motion.a
            key={label}
            href={href}
            className="text-gray-800 text-sm font-semibold tracking-wide transition-colors duration-200 hover:text-blue-600"
            whileHover={{
              scale: 1.05,
              transition: { type: 'spring', stiffness: 250 },
            }}
          >
            {label}
          </motion.a>
        ))}
      </motion.nav>
    </motion.div>
  )
}

export default Header
