import { BsRocketTakeoff } from "react-icons/bs";
import { RiArrowDropRightLine } from "react-icons/ri";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      className="max-w-7xl mx-auto min-h-screen flex flex-col items-center justify-center"
    >
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full text-md md:text-xl lg:text-2xl font-semibold font-poppins">
        The Innovative company
      </motion.p>
      <div className="mx-auto w-full flex flex-wrap flex-row justify-across items-center">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-righteous text-6xl md:text-8xl lg:text-[7.5vw]  font-bold">
          THE DIGITAL
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-44 md:w-52 lg:w-52 text-sm md:text-md ml-6 font-semibold text-black/70">
          Empowering enterprises with cutting-edge technology solutions
        </motion.p>
        <motion.button
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="group flex items-center justify-between md:ml-2 lg:ml-6 p-2 rounded-full bg-zinc-800 text-white hover:bg-zinc-900 transition duration-300">
          <p className="text-lg font-semibold ml-2">
            Lets Talk
          </p>
          <div className="md:w-10 md:h-10 lg:h-14 lg:w-14 bg-blue-500 rounded-full flex items-center justify-center ml-2 group-hover:bg-blue-600 transition duration-300">
            <RiArrowDropRightLine className="text-3xl text-white" />
          </div>
        </motion.button>

        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-righteous text-6xl md:text-8xl lg:text-[7.5vw]  font-bold">
          INNOVATE SUCCESS
        </motion.h1>


        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:text-lg lg:text-xl lg:w-1/2 p-2 md:p-4 items-center flex justify-between text-left mr-4 bg-blue-500 h-24 rounded-xl text-white hover:bg-blue-600 transition duration-300">
          Unleashing boundless potential through <br /> technology from India. <BsRocketTakeoff className="md:text-4xl text-5xl mr-3" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-righteous text-6xl md:text-8xl lg:text-[7.5vw]  font-bold">
          COMPANY
        </motion.h1>

      </div>
      {/* <div className="w-full flex flex-row justify-start items-center">

      </div> */}
      {/* <div className="w-full">
        
      </div>
      <div className="w-full flex flex-row justify-between items-center">
        
      </div> */}
    </section>
  );
}

export default Hero;
