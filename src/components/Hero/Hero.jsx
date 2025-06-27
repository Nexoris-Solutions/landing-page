import { motion } from 'framer-motion';
import astronaut from '../../assets/astronaut.png';

function Hero() {
  return (
    <section className="w-screen h-screen flex flex-col md:flex-row items-center justify-center bg-white overflow-hidden relative px-6 md:px-12">
      {/* Left: Text Content */}
      <div className="w-full md:w-1/2 flex flex-col items-start justify-center h-full space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight">
          Transforming Business Through Digital Innovation
        </h1>
        <p className="text-lg md:text-2xl text-gray-700">
          Empowering enterprises with cutting-edge technology solutions
        </p>
        <div className="flex flex-wrap gap-4">
          <motion.button
            className="bg-black text-white border-white border-2 px-6 py-2 rounded-full hover:bg-white hover:text-black hover:border-black transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Get Started
          </motion.button>
          <motion.button
            className="bg-white text-black border-2 border-black px-6 py-2 rounded-full hover:bg-black hover:text-white hover:border-white transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Learn More
          </motion.button>
        </div>
      </div>

      {/* Right: Animated Visuals */}
      <div className="w-full md:w-1/2 h-5/6 flex items-center justify-center relative select-none">
        {/* Rings */}
        <motion.div
          className="absolute w-[520px] h-[520px] rounded-full border border-purple-400/50"
          animate={{ rotate: 360, scale: [1, 1.05, 1] }}
          transition={{
            rotate: { duration: 30, repeat: Infinity, ease: 'linear' },
            scale: { duration: 6, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' },
          }}
        />
        <motion.div
          className="absolute w-[440px] h-[440px] rounded-full border border-purple-400/30"
          animate={{ rotate: -360, scale: [1, 1.08, 1] }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
            scale: { duration: 5, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' },
          }}
        />
        <motion.div
          className="absolute w-[360px] h-[360px] rounded-full border border-purple-400/20"
          animate={{ rotate: 360, scale: [1, 0.92, 1] }}
          transition={{
            rotate: { duration: 40, repeat: Infinity, ease: 'linear' },
            scale: { duration: 7, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' },
          }}
        />

        {/* Glow Background */}
        <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-purple-400 opacity-40 blur-3xl z-0" />

        {/* Grid Particles */}
        <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:8px_8px] opacity-5 pointer-events-none z-0" />

        {/* HUD Brackets */}
        <div className="absolute top-16 left-16 w-6 h-6 border-t-2 border-l-2 border-purple-500 opacity-50" />
        <div className="absolute top-16 right-16 w-6 h-6 border-t-2 border-r-2 border-purple-500 opacity-50" />
        <div className="absolute bottom-16 left-16 w-6 h-6 border-b-2 border-l-2 border-purple-500 opacity-50" />
        <div className="absolute bottom-16 right-16 w-6 h-6 border-b-2 border-r-2 border-purple-500 opacity-50" />

        {/* Floating Astronaut */}
        <motion.img
          src={astronaut}
          alt="Futuristic Astronaut"
          className="h-[80%] w-auto object-contain relative z-10 scale-x-[-1]"
          style={{
            transform: 'perspective(1000px) rotateY(6deg) rotateX(2deg)',
            filter: 'drop-shadow(0px 10px 20px rgba(128, 90, 213, 0.2))',
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
