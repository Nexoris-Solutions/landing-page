import { motion } from 'framer-motion';
import astronaut from '../../assets/astronaut.png';
import { FaRocket, FaInfoCircle } from 'react-icons/fa';

function Hero() {
  return (
    <section className="w-screen h-screen flex flex-col md:flex-row items-center justify-center bg-white overflow-hidden relative px-6 md:px-12">
      <div className="w-full md:w-1/2 flex flex-col items-start justify-center h-full space-y-4">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 tracking-tight"
        >
          Powering the Future of Business with Innovation
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-base md:text-lg text-gray-700 max-w-2xl"
        >
          We engineer tailored digital solutions to help modern enterprises scale, innovate, and lead with confidence. From intelligent automation to cloud-native platforms—your growth is our mission.
        </motion.p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 pt-2">
          <motion.button
            className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-sky-500 text-white px-7 py-3 rounded-full shadow-lg font-semibold hover:from-indigo-700 hover:to-sky-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            whileHover={{ scale: 1.06 }}
          >
            <FaRocket className="w-5 h-5" />
            Get Started
          </motion.button>
          <motion.button
            className="flex items-center gap-2 bg-white text-indigo-600 border border-indigo-200 px-7 py-3 rounded-full font-semibold shadow hover:bg-indigo-50 hover:text-sky-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-300"
            whileHover={{ scale: 1.06 }}
          >
            <FaInfoCircle className="w-5 h-5" />
            Learn More
          </motion.button>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-5/6 flex items-center justify-center relative select-none">
        <motion.div
          className="absolute w-[520px] h-[520px] rounded-full border border-indigo-300/50"
          animate={{ rotate: 360, scale: [1, 1.05, 1] }}
          transition={{
            rotate: { duration: 30, repeat: Infinity, ease: 'linear' },
            scale: { duration: 6, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' },
          }}
        />
        <motion.div
          className="absolute w-[440px] h-[440px] rounded-full border border-sky-400/30"
          animate={{ rotate: -360, scale: [1, 1.08, 1] }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
            scale: { duration: 5, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' },
          }}
        />
        <motion.div
          className="absolute w-[360px] h-[360px] rounded-full border border-indigo-300/20"
          animate={{ rotate: 360, scale: [1, 0.92, 1] }}
          transition={{
            rotate: { duration: 40, repeat: Infinity, ease: 'linear' },
            scale: { duration: 7, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' },
          }}
        />

        {/* Glow Background */}
        <div
          className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full z-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, #6366f1 0%, #38bdf8 100%)',
            opacity: 0.7,
            filter: 'blur(48px)',
          }}
        />

        {/* Grid Particles */}
        <div className="absolute inset-0 bg-[radial-gradient(black_1px,transparent_1px)] bg-[size:8px_8px] opacity-5 pointer-events-none z-0" />

        {/* HUD Brackets */}
        <div className="absolute top-16 left-16 w-6 h-6 border-t-2 border-l-2 border-indigo-600 opacity-50" />
        <div className="absolute top-16 right-16 w-6 h-6 border-t-2 border-r-2 border-sky-400 opacity-50" />
        <div className="absolute bottom-16 left-16 w-6 h-6 border-b-2 border-l-2 border-sky-400 opacity-50" />
        <div className="absolute bottom-16 right-16 w-6 h-6 border-b-2 border-r-2 border-indigo-600 opacity-50" />

        {/* Floating Astronaut */}
        <motion.img
          src={astronaut}
          alt="Futuristic Astronaut"
          className="h-[80%] w-auto object-contain relative z-10 scale-x-[-1]"
          style={{
            transform: 'perspective(1000px) rotateY(6deg) rotateX(2deg)',
            filter: 'drop-shadow(0px 10px 20px rgba(99, 102, 241, 0.2))',
          }}
          animate={{
            y: [0, -15, 0],
            scaleY: [1, 1.015, 1],
          }}
          transition={{
            y: {
              duration: 4,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            },
            scaleY: {
              duration: 6,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
            },
          }}
        />

      </div>
    </section>
  );
}

export default Hero;
