import {
  RiHome2Line,
  RiInformationLine,
  RiServiceLine,
  RiTeamLine,
  RiPhoneLine,
  RiSuitcaseLine,
  RiCloseLine,
  RiMenu2Fill,
} from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { RiLinkedinFill, RiInstagramLine, RiTwitterXLine, RiPlayCircleFill, RiYoutubeFill } from "react-icons/ri";
import intro from "../../assets/mp3/intro.mp3";
import { text } from "framer-motion/client";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [playIntro, setPlayIntro] = useState(false);

  const handleClick = (label) => {
    const section = document.getElementById(label);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  }

  const handleSocialClick = (href) => {
    window.open(href, '_blank');
    setIsOpen(false);
  }

  const handlePlayintro = () => {
    let audio = document.getElementById("intro-audio");
    if (!audio) {
      audio = new Audio(intro);
      audio.id = "intro-audio";
      document.body.appendChild(audio);
    }
    if (audio) {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    }
    setPlayIntro(!playIntro);
  }

  const navItems = [
    { icon: <RiHome2Line size={22} />, label: "home", text: "To Home" },
    { icon: <RiInformationLine size={22} />, label: "about", text: "About Us" },
    { icon: <RiServiceLine size={22} />, label: "services", text: "Services" },
    { icon: <RiTeamLine size={22} />, label: "members", text: "Our Team" },
    { icon: <RiSuitcaseLine size={22} />, label: "careers", text: "Careers" },
    { icon: <RiPhoneLine size={22} />, label: "contact", text: "Contact" },
  ];

  const socialItems = [
    {
      icon: <RiLinkedinFill size={22} />,
      label: "linkedin",
      href: "https://www.linkedin.com/company/nexoris-solutions/posts/?feedView=all",
      text: "LinkedIn"
    },
    {
      icon: <RiInstagramLine size={22} />,
      label: "instagram",
      href: "https://www.instagram.com/nexoris_solutions/",
      text: "Instagram"
    },
    {
      icon: <RiYoutubeFill size={22} />,
      label: "youtube",
      href: "https://www.youtube.com/channel/UCC6T1_Vms4GpnmZiX_awXHA",
      text: "YouTube"
    },
    {
      icon: <RiTwitterXLine size={22} />,
      label: "twitter",
      href: "https://x.com/nexoris_solns",
      text: "Twitter"
    },
    {
      icon: <RiPlayCircleFill size={22} />,
      label: "intro",
      href: "#play-music",
      text: "Play Intro"
    },
  ];

  return (
    <>
      {/* Desktop Navbar - Vertical on right */}
      <nav className="hidden lg:flex fixed top-1/2 right-4 -translate-y-1/2 z-50 bg-zinc-900/90 rounded-2xl shadow-lg py-6 px-3 flex-col gap-6 items-center">
        {navItems.map((item) => (

          <button
            key={item.label}
            className="text-zinc-300 hover:text-white transition p-2 rounded-lg hover:bg-zinc-800"
            title={item.label}
            onClick={() => handleClick(item.label)}
          >
            {item.icon}
          </button>
        ))}
      </nav>

      {/* Desktop Navbar - Vertical on right */}
      <nav className="hidden lg:flex fixed top-1/2 left-4 -translate-y-1/2 z-50 bg-zinc-900/90 rounded-2xl shadow-lg py-6 px-3 flex-col gap-6 items-center">
        {socialItems.map((item) => (
          item.label !== "intro" ?
            (
              <button
                key={item.label}
                className="text-zinc-300 hover:text-white transition p-2 rounded-lg hover:bg-zinc-800"
                title={item.label}
                onClick={() => handleSocialClick(item.href)}
              >
                {item.icon}
              </button>
            ) : (
              <button
                key={item.label}
                className="text-zinc-300 hover:text-white transition p-2 rounded-lg hover:bg-zinc-800"
                title={item.label}
                onClick={handlePlayintro}
              >
                {item.icon}
              </button>
            )
        ))}
      </nav>

      {/* Trigger for mobile */}
      <div className="fixed top-4 right-4 z-50 lg:hidden">
        <motion.button
          onClick={() => setIsOpen(true)}
          className="p-3 rounded-full bg-zinc-800 text-white shadow-md hover:bg-zinc-700 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <RiMenu2Fill size={20} />
        </motion.button>
      </div>

      {/* Slide-In Panel for mobile */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />

            {/* Sidebar */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-auto bg-zinc-900 z-50 shadow-2xl flex flex-col items-center py-6"
            >
              {/* Vertical Label */}
              <div className="absolute -left-10 top-1/2 -translate-y-1/2 rotate-90 text-sm text-zinc-500 bg-zinc-900 rounded-2xl px-2 py-1 tracking-wider">
                Navigation
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="mb-8 p-2 text-zinc-400 hover:text-white transition border border-zinc-700 rounded-full"
              >
                <RiCloseLine size={20} />
              </button>

              {/* Nav Icons - Make scrollable */}
              <nav
                className="flex flex-col gap-6 mt-2 pl-2 z-10 overflow-y-auto custom-scrollbar"
                style={{
                  maxHeight: "calc(100vh - 120px)",
                }}
              >
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleClick(item.label)}
                    className="text-zinc-400 hover:text-white transition p-2 rounded-lg hover:bg-zinc-800 flex items-center gap-2"
                    title={item.label}
                  >
                    {item.icon} {item.text}
                  </motion.button>
                ))}
                <hr className="border-1 border-gray-200/30 w-20 mx-auto" />
                {socialItems.map((item, index) => (
                  item.label !== "intro" ?
                    (
                      <motion.button
                        key={item.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: (index + 5) * 0.1 }}
                        className="text-zinc-400 hover:text-white transition p-2 rounded-lg hover:bg-zinc-800  flex items-center gap-2"
                        title={item.label}
                        onClick={() => handleSocialClick(item.href)}
                      >
                        {item.icon} {item.text}
                      </motion.button>
                    ) : (
                      <motion.button
                        key={item.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: (index + 5) * 0.1 }}
                        className="text-zinc-400 hover:text-white transition p-2 rounded-lg hover:bg-zinc-800 flex items-center gap-2"
                        title={item.label}
                        onClick={handlePlayintro}
                      >
                        {item.icon} {item.text}
                      </motion.button>
                    )
                ))}
              </nav>
            </motion.aside>
            {/* Custom scrollbar styles */}
            <style>{`
              .custom-scrollbar::-webkit-scrollbar {
                width: 6px;
                background: #18181b;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb {
                background: #444;
                border-radius: 4px;
              }
              .custom-scrollbar {
                scrollbar-width: thin;
                scrollbar-color: #444 #18181b;
              }
            `}</style>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
