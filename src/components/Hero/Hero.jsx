import { BsRocketTakeoff, BsLightningCharge, BsGear } from "react-icons/bs";
import { RiArrowDropRightLine, RiStarSFill, RiShieldCheckFill } from "react-icons/ri";
import { HiSparkles, HiCube, HiLightBulb } from "react-icons/hi";
import { FiTarget, FiTrendingUp, FiZap, FiCpu, FiGlobe } from "react-icons/fi";
import { AiOutlineThunderbolt, AiFillFire } from "react-icons/ai";
import { motion } from "framer-motion";
import { BiTrophy } from "react-icons/bi";

function Hero() {
  return (
    <section className="max-w-7xl mx-auto min-h-screen h-full md:h-screen flex flex-col items-center justify-center px-2 py-4">
      {/* Bento Grid Container */}
      <div className="w-full h-auto grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4 auto-rows-fr">

        {/* THE DIGITAL - Large Typography Block */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="col-span-2 sm:col-span-2 lg:col-span-3 sm:row-span-2 h-32 sm:h-auto bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl flex items-center justify-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-6 right-6 text-3xl text-blue-500/30"
          >
            <FiCpu />
          </motion.div>
          <h1 className="font-righteous text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white relative z-10 text-center leading-tight">
            NEXORIS<br />THE DIGITAL
          </h1>
          <div className="absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="absolute bottom-6 left-6 flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                className="w-1 h-6 bg-blue-500/50 rounded-full"
              />
            ))}
          </div>
        </motion.div>

        {/* Info Card with Globe Animation */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="col-span-1 sm:col-span-2 lg:col-span-2 h-32 sm:h-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-3 sm:p-6 flex flex-col justify-between relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-4 right-4 text-2xl text-white/40"
          >
            <FiGlobe />
          </motion.div>

          <div className="relative z-10">
            <p className="text-xs md:text-sm font-mono text-white/80 mb-2">FUNCTION.INIT()</p>
            <p className="text-xs md:text-base  md:font-semibold text-white leading-tight">
              Empowering enterprises with cutting-edge technology solutions
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group/btn flex items-center justify-between p-1 md:px-4 md:py-2 px-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300 self-start"
          >
            <span className="text-xs md:text-sm font-semibold">CONNECT</span>
            <motion.div
              whileHover={{ x: 5 }}
              className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center ml-2 group-hover/btn:bg-white/40 transition duration-300"
            >
              <RiArrowDropRightLine className="text-lg text-white" />
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Metrics Card with Trending Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="col-span-1 sm:col-span-2 lg:col-span-1 h-32 sm:h-auto bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl p-2 sm:p-4 flex flex-col justify-between relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-tl from-zinc-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <span className="text-xs font-mono text-zinc-800/80 block mb-2">METRICS</span>
            <motion.h3
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-xl md:text-2xl font-bold text-zinc-800 mb-1"
            >
              25+
            </motion.h3>
            <p className="text-sm text-zinc-800/80">PROJECTS</p>
          </div>
          <motion.div
            whileHover={{ scale: 1.2, rotate: 15 }}
            className="absolute bottom-4 right-4 text-2xl text-zinc-800/60"
          >
            <FiTrendingUp />
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-4 right-4 text-lg text-zinc-800/40"
          >
            <FiTarget />
          </motion.div>
        </motion.div>

        {/* INNOVATION - Typography Block with Lightbulb */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="col-span-2 sm:col-span-2 lg:col-span-2 h-32 sm:h-auto bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl flex items-center justify-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-l from-orange-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-6 left-6 text-3xl text-orange-400/60"
          >
            <HiLightBulb />
          </motion.div>
          <h1 className="font-righteous text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white relative z-10 text-center">
            INNOVATION
          </h1>
          <div className="absolute bottom-4 left-4 w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
          <motion.div
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            className="absolute bottom-6 right-6 text-xl text-orange-400/40"
          >
            <AiFillFire />
          </motion.div>
        </motion.div>

        {/* Performance Card with Lightning */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="col-span-2 sm:col-span-2 lg:col-span-1 h-32 sm:h-auto bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-2 sm:p-4 flex flex-col justify-between relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-tl from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <span className="text-xs font-mono text-white/80 block mb-2">PERFORMANCE</span>
            <h3
              className="text-xl md:text-2xl font-bold text-white mb-1"
            >
              99.9%
            </h3>
            <p className="text-sm text-white/80">UPTIME</p>
          </div>
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-4 right-4 text-2xl text-white/70"
          >
            <BsLightningCharge />
          </motion.div>
        </motion.div>

        {/* Nexoris Feature Card with Enhanced Rocket */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="col-span-2 sm:col-span-3 lg:col-span-4 h-32 sm:h-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-3 sm:p-6 flex items-center justify-between relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-zinc-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <span className="text-xs font-mono text-white/80 block mb-2">NEXORIS.CORE</span>
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-2">UNLEASHING POTENTIAL</h3>
            <p className="text-sm md:text-base text-white/90 leading-tight">
              Technology innovation engineered from India
            </p>
          </div>
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-4xl md:text-5xl lg:text-6xl text-white/80 relative z-10"
          >
            <BsRocketTakeoff />
          </motion.div>
          <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          {/* Rocket Trail Effect */}
          <motion.div
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 right-12 w-8 h-2 bg-gradient-to-r from-orange-400 to-transparent rounded-full"
          />
        </motion.div>

        {/* Creative Solutions with Sparkles */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="col-span-1 sm:col-span-1 lg:col-span-2 h-32 sm:h-auto bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl p-2 sm:p-4 flex flex-col justify-between relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-3">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <HiSparkles className="text-2xl text-blue-500" />
              </motion.div>
              <span className="text-xs font-mono text-white/60">ACTIVE</span>
            </div>
            <h4 className="font-bold text-base md:text-lg text-white mb-1">CREATIVE</h4>
            <p className="text-sm text-white/80 leading-tight">
              Innovative solutions
            </p>
          </div>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="absolute bottom-4  text-lg text-blue-400/40"
          >
            <HiCube />
          </motion.div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-transparent to-blue-500 opacity-60"></div>
        </motion.div>

        {/* Rapid Deployment with Gear */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="col-span-1 sm:col-span-1 lg:col-span-1 h-32 sm:h-auto bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-2 sm:p-4 flex flex-col justify-between relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-800/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <span className="text-xs font-mono text-white/80 block mb-2">FAST</span>
            <h4 className="font-bold text-base md:text-lg text-white mb-1">DEPLOY</h4>
            <p className="text-xs text-white/80">
              Quality + Speed
            </p>
          </div>
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-4 right-4 text-2xl text-white/70"
          >
            <BsGear />
          </motion.div>
        </motion.div>

        {/* Status Card with Shield */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="col-span-1 sm:col-span-1 lg:col-span-1 h-32 sm:h-auto bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl p-2 sm:p-4 flex flex-col justify-between relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-3">
              <span className="text-xs font-mono text-white/60">STATUS</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <h4 className="font-bold text-base md:text-lg text-white mb-1">SECURE</h4>
            <p className="text-xs text-white/80">
              24/7 Protected
            </p>
          </div>
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute bottom-4 right-4 text-2xl text-green-500/70"
          >
            <RiShieldCheckFill />
          </motion.div>
        </motion.div>

        {/* TROPHY - Enhanced Typography Block */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="col-span-2 sm:col-span-2 lg:col-span-2 h-32 sm:h-auto bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl flex items-center justify-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <h1 className="font-righteous text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white relative z-10 text-center">
              SUCCESS
            </h1>
            <div className="absolute top-4 left-4 flex space-x-2">
              <motion.div
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-blue-500 rounded-full"
              />
              <motion.div
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="w-2 h-2 bg-orange-400 rounded-full"
              />
            </div>
            {/* Trophy Icon at Bottom Right */}
            <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 3, repeat: Infinity }}
              className="absolute bottom-4 right-4 text-3xl text-yellow-400/80"
            >
              <BiTrophy />
            </motion.div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-r-4 border-b-4 border-white/10 rounded-br-2xl"></div>
          </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="col-span-2 sm:col-span-2 lg:col-span-2 h-32 sm:h-auto bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl flex items-center justify-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-6 left-6 text-3xl text-white/40"
          >
            <AiOutlineThunderbolt />
          </motion.div>
          <h1 className="font-righteous text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white relative z-10 text-center">
            COMPANY
          </h1>
          <div className="absolute top-4 right-4 flex space-x-2">
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-white rounded-full"
            />
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
              className="w-2 h-2 bg-blue-400 rounded-full"
            />
          </div>
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute bottom-6 right-6 text-xl text-white/30"
          >
            <FiZap />
          </motion.div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-r-4 border-b-4 border-white/10 rounded-br-2xl"></div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;