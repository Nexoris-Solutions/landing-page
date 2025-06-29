import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaUserSecret, FaBrain, FaCogs, FaNetworkWired } from "react-icons/fa";
import flower from "../../assets/flower.webm";
import flower_idle from "../../assets/flower-idle.png";
import star_top from "../../assets/star_top.webm";
import star_top_idle from "../../assets/star_top-idle.png";

const leadershipData = [
  {
    name: "Mr. G. NARENDRAN",
    title: "Founder & CEO",
    description:
      "Visionary leader with 15+ years of experience in technology and business transformation.",
    skills: ["Strategy", "Growth", "Innovation"],
    icon: FaUserSecret,
  },
  {
    name: "Harisudhan M",
    title: "Co-founder & CTO",
    description: "Tech innovator with expertise in AI, ML, and enterprise architecture.",
    skills: ["AI", "Cloud", "Tech"],
    icon: FaBrain,
  },
  {
    name: "Arunmozhi Varman K",
    title: "Co-founder & CIO",
    description: "Technical architect with deep expertise in enterprise solutions.",
    skills: ["Architecture", "Systems", "Leadership"],
    icon: FaNetworkWired,
  },
  {
    name: "Anvin P Shibu",
    title: "Co-founder & COO",
    description:
      "Operations expert focused on scaling businesses and process optimization.",
    skills: ["Ops", "Scaling", "Teams"],
    icon: FaCogs,
  },
];


const Members = () => {
  const [supportsWebM, setSupportsWebM] = useState(true);

  useEffect(() => {
    const video = document.createElement("video");
    const canPlay = video.canPlayType("video/webm; codecs=\"vp9\"");
    setSupportsWebM(!!canPlay);
  }, []);

  return (
    <section id="members" className="relative w-full h-screen min-h-screen bg-gradient-to-br from-indigo-950 via-blue-950 to-black py-20 px-6 overflow-hidden">
      {/* Header */}
      <motion.div className="text-center mb-20 max-w-7xl mx-auto">
        <div className="relative flex flex-row items-center justify-center">
          <div className="">
            {supportsWebM ? (
              <video
                src={star_top}
                className="w-16 sm:w-18 md:w-20 object-contain"
                autoPlay
                loop
                muted
                playsInline
                aria-label="Animated top star"
              />
            ) : (
              <img
                src={star_top_idle}
                alt="Star Top"
                className="w-16 sm:w-18 md:w-20 object-contain"
              />
            )}
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
            Leadership Team
          </h2>
        </div>
        <div className="h-1 w-32 bg-gradient-to-r from-indigo-400 to-blue-400 mx-auto mt-4 mb-6 rounded-full" />
        <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
          Meet the minds behind Nexoris,  driving the future of innovation.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto relative z-10">
        {leadershipData.map((member, index) => (
          <motion.div
            key={index}
            className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 text-white shadow-lg hover:shadow-blue-500/30 transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 shadow-inner">
              <member.icon className="text-white text-3xl" />
            </div>
            <h3 className="text-xl font-bold text-center mb-1">
              {member.name}
            </h3>
            <p className="text-blue-300 text-sm mb-3 text-center">{member.title}</p>
            <p className="text-blue-100 text-sm leading-relaxed mb-4">
              {member.description}
            </p>
            <div className="flex flex-wrap gap-1 justify-start w-full">
              {member.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-blue-900/30 border border-blue-400/20 text-xs text-blue-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Giant Flower - right edge */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/3 z-0 opacity-70">
        {supportsWebM ? (
          <video
            src={flower}
            className="h-[700px] object-contain"
            autoPlay
            loop
            muted
            playsInline
            aria-label="Animated flower"
          />
        ) : (
          <img
            src={flower_idle}
            alt="Flower Idle"
            className="h-[700px] object-contain"
          />
        )}
      </div>
    </section>
  );
};

export default Members;
