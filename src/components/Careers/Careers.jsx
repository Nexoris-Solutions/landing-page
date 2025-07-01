import React from 'react';
import { motion } from 'framer-motion';
import atom from '../../assets/atom.png';
import { HiCheckBadge } from "react-icons/hi2";
import { RiStarFill, RiTeamLine } from 'react-icons/ri';
import { TbHandClick } from "react-icons/tb";
import { FaArrowTrendUp } from "react-icons/fa6";


function Careers() {
  const openings = [
    "Backend Developer",
    "Full Stack Developer",
    "DevOps Engineer",
    "AI developer",
    "Rust Developer"
  ];

  const perks = [
    "Remote-first, flexible work environment",
    "Opportunities for professional growth",
    "Inclusive, diverse, and supportive team",
    "Cutting-edge technology projects",
    "Collaborative and innovative culture",
  ];


  return (
    <section id="careers" className="max-w-7xl w-full mx-auto h-full flex flex-col items-center justify-center px-4 py-10">
      {/* Top Divider */}
      <hr className="w-full border-t-2 border-black/10 my-6" />

      <div className="flex flex-col md:flex-row justify-between items-center w-full mb-12">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold font-poppins-bold text-gray-800">
          Join Us and build the Future
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative text-md w-full md:w-1/3 mt-6 md:mt-0 font-poppins py-4 bg-blue-500 text-white p-2 rounded-xl flex flex-row items-center gap-3">
          <HiCheckBadge className="text-white text-2xl flex-shrink-0" />
          <p className="text-md">
            We’re always looking for passionate, creative minds to join our team. Explore open roles and help us shape the next era of digital innovation.
          </p>
        </motion.div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
        <div className='relative h-[450px] w-full flex flex-col items-start justify-end bg-zinc-800 rounded-xl text-white p-3 md:p-8'>
          {/* atom image */}
          <img
            className="absolute bottom-0 z-10 w-full h-[450px] object-contain object-bottom-right -translate-x-3 sm:-translate-x-5 md:-translate-x-8 rounded-br-xl drop-shadow-[0_0_20px_rgba(0,0,0,0.5)]"
            src={atom}
            alt="atom"
          />

          <div className="relative z-20 w-full">
            {/* Focused Apply Now Button */}
            <div className="w-full flex justify-start mb-4">
              <a
                href="https://careers.nexoris.in"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-8 py-3 rounded-xl bg-blue-500 shadow-lg shadow-blue-500/30 text-white font-bold font-poppins text-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 hover:scale-105 hover:bg-blue-700"
                tabIndex={0}
              >
                <TbHandClick className="text-white text-2xl animate-pulse" />
                <p>
                  Apply Now on {" "}<span className='hidden md:inline'>our</span>{" "}Careers Page
                </p>
              </a>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold font-poppins-bold text-white flex flex-row gap-3"
            >
              Jobs on demand <FaArrowTrendUp className='hidden md:inline' />
            </motion.div>
            <div className='flex flex-wrap flex-row justify-start gap-2 mt-4'>
              {
                openings.map((item, index) => (
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    key={index} className="relative flex gap-2 items-center bg-purple-600 hover:bg-purple-700 px-2 py-1 md:px-4 md:py-2 tet-xs md:text-sm rounded-xl text-md font-semibold font-poppins transition-all ease-in-out duration-300">
                    {item} <RiStarFill className='animate-spin hidden md:inline' />
                  </motion.p>
                ))
              }
            </div>

          </div>
        </div>
        <div className="relative w-full flex flex-col items-start justify-center bg-zinc-800 rounded-xl text-white p-8">
          <p className="text-md font-poppins flex items-center gap-2">
            <span className='inline text-white text-4xl'>
              <RiTeamLine />
            </span>
            At Nexoris, we believe in empowering our people to grow, learn, and make an impact. We foster a culture of collaboration, creativity, and continuous improvement.
          </p>
          <hr className="w-full border-t-2 border-white/10 my-2" />
          <div className='relative grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4'>
            {
              perks.map((item, index) => (
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  key={index} className="relative bg-gradient-to-br from-orange-500 to-orange-600 py-2 px-4 pr-7 text-sm rounded-xl text-md font-poppins flex items-center gap-2 transition-all ease-in-out duration-500">
                  {item}
                  <div className='inline text-white text-xl absolute top-2 right-2'>
                    <HiCheckBadge />
                  </div>
                </motion.p>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
}

export default Careers;