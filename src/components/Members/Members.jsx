import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUserSecret,
  FaBrain,
  FaCogs,
  FaNetworkWired,
  FaQuoteLeft,
} from "react-icons/fa";
import { HiCheckBadge } from "react-icons/hi2";
import { BiArrowToRight } from "react-icons/bi";

const leadershipData = [
  {
    name: "Mr. G. NARENDRAN",
    title: "Founder & CEO",
    subtitle: "Visionary Architect",
    description:
      "Transforming industries through strategic innovation and cutting-edge technology solutions. Leading with passion, building with purpose.",
    skills: ["Strategic Vision", "Market Growth", "Innovation Leadership"],
    icon: FaUserSecret,
    quote: "Innovation is not just about technology—it's about transforming lives.",
    achievements: "50+ Projects Served",
  },
  {
    name: "Harisudhan M",
    title: "Co-founder & CTO",
    subtitle: "DevOps Specialist",
    description:
      "Building scalable, resilient systems with modern DevOps practices. Bridging development and operations for seamless delivery.",
    skills: ["DevOps", "CI/CD Pipelines", "Cloud Infrastructure"],
    icon: FaBrain,
    quote: "Velocity without stability is chaos. DevOps brings balance.",
    achievements: "30+ Systems Deployed",
  },
  {
    name: "Arunmozhi Varman K",
    title: "Co-founder & CIO",
    subtitle: "Full Stack Technologist",
    description:
      "Engineering full-stack applications with robust backend logic and engaging user interfaces, while ensuring system integrity.",
    skills: ["Full Stack Development", "System Architecture", "Performance Optimization"],
    icon: FaNetworkWired,
    quote: "A great full-stack app blends logic, design, and speed seamlessly.",
    achievements: "30+ Satisfied Clients",
  },
  {
    name: "Anvin P Shibu",
    title: "Co-founder & COO",
    subtitle: "AI Engineer",
    description:
      "Designing and deploying intelligent AI-driven systems that automate operations and unlock new business opportunities.",
    skills: ["AI Engineering", "Automation", "Operational Scaling"],
    icon: FaCogs,
    quote: "AI is not the future—it's the new foundation of smart operations.",
    achievements: "50+ AI Solutions",
  },
];

export default function LeadershipTeam() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section
      id="members"
      className="relative max-w-7xl mx-auto min-h-screen bg-white py-16 px-4"
    >
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full mb-12">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold font-righteous text-gray-800">
          Brains Behind the Build
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative text-md w-full md:w-1/3 bg-blue-500 text-white p-2 rounded-xl flex flex-row justify-between">
          <HiCheckBadge className="text-white text-2xl absolute bottom-1 right-1" />
          <p className="text-md">
            The Brains Behind the Beta. From whiteboards to launchpads, this team codes the vision, engineers the future, and scales what matters.
          </p>
        </motion.div>
      </div>

      {/* Leadership Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {leadershipData.map((member, i) => {
          const Icon = member.icon;
          const isHovered = hoveredCard === i;

          return (
            <motion.div
              key={i}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onHoverStart={() => setHoveredCard(i)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <motion.div
                className="min-h-96 w-full bg-white rounded-lg shadow-lg hover:shadow-2xl overflow-hidden relative  hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer"
              >
                <div className="relative p-6 h-full flex flex-col">
                  {/* Icon & Achievement */}
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      className="bg-blue-500 p-3 rounded-xl shadow-lg"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="text-white text-2xl" />
                    </motion.div>
                    <div className="text-right">
                      <div className="text-xs text-blue-500/70 font-bold uppercase tracking-wider">
                        {member.achievements}
                      </div>
                    </div>
                  </div>

                  {/* Name & Title */}
                  <div className="mb-2">
                    <h3 className="text-xl font-righteous text-black/80 mb-1 leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-blue-500 font-semibold text-sm mb-1">
                      {member.title}
                    </p>
                    <p className="text-gray-500 text-xs font-medium uppercase tracking-wide">
                      {member.subtitle}
                    </p>
                  </div>

                  <hr className="w-full border-t-2 border-gray-200 mb-2" />

                  {/* Description */}
                  <div className="mb-4 flex-grow">
                    <p className="text-gray-700 text-md leading-relaxed">
                      {member.description}
                    </p>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-col gap-1 mt-auto group">
                    {member.skills.map((skill, idx) => (
                      <div
                        key={idx}
                        className="text-sm flex justify-between items-center p-2 px-4 bg-zinc-800 text-white rounded-md "
                      >
                        {skill} <BiArrowToRight className="text-white text-2xl w-5 relative group-hover:-rotate-45 transition-all duration-500 ease-out" />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Section Divider */}
      <hr className="w-full border-t-2 border-gray-200" />
    </section>
  );
}