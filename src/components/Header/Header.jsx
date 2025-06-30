import { RiCloseLine, RiMenu2Fill } from "react-icons/ri";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = ["Home", "About", "Services", "Members", "Contact"];

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/20 backdrop-blur-md border-b border-black/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-2xl font-semibold text-black/80 font-montserratUnderline">
          NEXORIS
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <button
              key={index}
              className="text-black/70 hover:text-black transition duration-200"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded hover:bg-black/10 transition"
        >
          {isOpen ? (
            <RiCloseLine className="text-2xl text-black/70" />
          ) : (
            <RiMenu2Fill className="text-2xl text-black/70" />
          )}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden bg-white/90 backdrop-blur-md border-t border-black/10 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <nav className="flex flex-col p-4 space-y-2">
          {navItems.map((item, index) => (
            <button
              key={index}
              className="text-left w-full px-2 py-2 text-black/70 hover:bg-black/10 rounded transition"
              onClick={() => setIsOpen(false)} // optional: close on click
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
