import { FaRocket, FaInfoCircle } from "react-icons/fa";
import { motion } from "framer-motion";

function HeroContet() {
  return (
    <div className="w-full md:w-2/3 flex flex-col items-start justify-center px-4 sm:px-6 md:px-0 space-y-4 sm:space-y-5 lg:space-y-6 z-10 mt-12 sm:mt-18 md:mt-0">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0, backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{
          delay: 0.3,
          duration: 0.6,
          ease: "easeOut",
        }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-unbound font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500"
        style={{
          backgroundSize: "200% 200%",
        }}
      >
        Powering the Future of Business with Innovation
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-xl sm:max-w-2xl"
      >
        We craft bespoke digital ecosystems that empower modern enterprises to scale faster, innovate smarter, and lead confidently. From intelligent automation to cloud-native platforms and next-gen AI solutions,{" "}
        <br /><span className="text-white bg-gradient-to-r from-indigo-600 to-sky-500 px-2 py-0.5 rounded">
          your growth is our unwavering mission.
        </span>
      </motion.p>


      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-3 pt-3 sm:pt-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-sky-500 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-semibold shadow-lg hover:from-indigo-700 hover:to-sky-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400"
          aria-label="Get Started"
        >
          <FaRocket className="w-5 h-5" />
          Get Started
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 border border-indigo-200 text-sky-600 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-semibold shadow hover:bg-indigo-50 hover:text-sky-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-300"
          aria-label="Learn More"
        >
          <FaInfoCircle className="w-5 h-5" />
          Learn More
        </motion.button>
      </div>
    </div>
  );
}

export default HeroContet;
