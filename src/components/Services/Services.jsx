import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaChartLine,
  FaCloud,
  FaSyncAlt,
  FaMobileAlt,
  FaShieldAlt,
  FaMicrochip,
  FaLock,
} from "react-icons/fa";
import atom from "../../assets/atom.png";
import { HiCheckBadge } from "react-icons/hi2";
import { BiArrowToRight } from "react-icons/bi";


const services = [
  {
    title: "Custom Software Development",
    icon: FaCode,
    desc: "Tailored software solutions that streamline your workflows and drive scalable innovation.",
    features: ["Web Apps", "Enterprise Systems", "API Integrations", "Modernization"],
  },
  {
    title: "Data Analytics & BI",
    icon: FaChartLine,
    desc: "Gain actionable insights from data with powerful dashboards and predictive models.",
    features: ["Data Vizualization", "Dashboards", "Predictive Models", "Reporting"],
  },
  {
    title: "Cloud Services",
    icon: FaCloud,
    desc: "Scalable, secure, and optimized cloud infrastructure aligned with your business goals.",
    features: ["Migration", "Security", "Optimization", "Setup"],
  },
  {
    title: "Digital Transformation",
    icon: FaSyncAlt,
    desc: "Transform operations with strategy-driven automation and end-to-end digital enablement.",
    features: ["Automation", "Consulting", "Change Mgmt", "Strategy"],
  },
  {
    title: "Image display",
    icon: FaMobileAlt,
    desc: "Modern mobile apps crafted for exceptional performance and cross-platform compatibility.",
    features: ["iOS", "Android", "Cross-Platform", "Maintenance"],
  },
  {
    title: "Mobile App Development",
    icon: FaMobileAlt,
    desc: "Modern mobile apps crafted for exceptional performance and cross-platform compatibility.",
    features: ["iOS", "Android", "Cross-Platform", "Maintenance"],
  },
  {
    title: "AI & Machine Learning",
    icon: FaShieldAlt,
    desc: "Integrate smart solutions with AI/ML to automate, optimize, and intelligently adapt.",
    features: ["NLP", "Computer Vision", "Recommenders", "AutoML"],
  },
  {
    title: "Internet of Things (IoT)",
    icon: FaMicrochip,
    desc: "Connect and manage smart devices for real-time monitoring, automation, and data-driven control.",
    features: ["Sensor Integration", "Edge Computing", "Device Management", "IoT Analytics"],
  },
  {
    title: "Cybersecurity Solutions",
    icon: FaLock,
    desc: "Protect your digital assets with advanced security strategies, monitoring, and threat prevention.",
    features: ["Network Security", "Threat Detection", "Compliance", "Penetration Testing"],
  },
];

function Services() {
  const [supportsWebM, setSupportsWebM] = useState(true);

  useEffect(() => {
    const video = document.createElement("video");
    setSupportsWebM(!!video.canPlayType('video/webm; codecs="vp9"'));
  }, []);

  return (
    <section
      id="services"
      className="relative w-full bg-zinc-50 max-w-7xl mx-auto px-4 py-10 min-h-screen"
    >
      <div className="flex flex-col md:flex-row justify-between items-center w-full mb-12">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold leading-[1.2] font-poppins-bold text-gray-800">
          Explore Our Services
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative text-md mt-6 md:mt-0 py-4 w-full md:w-1/3 bg-blue-500 text-white p-2 rounded-xl flex flex-row justify-between">
          <HiCheckBadge className="text-white text-2xl absolute bottom-1 right-1" />
          <p className="text-md">
            Take a Look at our diverse range of services designed to empower your business with cutting-edge technology and innovative solutions.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => {
          if (index === 4) {
            // Render a separate box for index 4 with image overflowing on top
            return (
              <motion.div
                key={index}
                className="relative h-[280px] flex flex-col justify-end items-center bg-blue-500 border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                {/* Top Right Index */}
                <div className="absolute bottom-4 left-4 text-sm font-semibold text-white/60">
                  0{index + 1}
                </div>

                {/* Image floating out of the top */}
                <div className="absolute bottom-0 right-0 z-10 pointer-events-none">
                  <img
                    className="z-30 w-[500px] object-left-top h-[350px] object-cover rounded-b-2xl drop-shadow-xl"
                    src={atom}
                    alt=""
                  />
                </div>
              </motion.div>

            );
          }
          // Default card for other indexes
          return (
            <motion.div
              key={index}
              className="relative overflow-clip flex flex-col justify-between h-full bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl  hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              {/* Index in Top-Right */}
              <div className="absolute top-4 right-4 text-sm font-semibold text-gray-400">
                0{index + 1}
              </div>

              {/* Icon and Title */}
              <div className="relative z-20 bg-zinc-800 p-2 rounded-full text-white flex items-center mb-4 mr-6">
                <div className="bg-blue-600 rounded-full p-3">
                  <service.icon className="text-white text-2xl" />
                </div>
                <h3 className="ml-2 text-md font-semibold text-white w-full">
                  {service.title}
                </h3>
                <p>
                  <BiArrowToRight className="text-white text-2xl w-5" />
                </p>
              </div>
              {/* Bottom Line */}
              <div className="relative z-20 h-px bg-gray-200 mb-4" />

              {/* Description */}
              <p className="relative z-20 text-sm text-gray-700 mb-6 text-left">
                {service.desc}
              </p>

              {/* Feature Tags */}
              <div className="relative z-20 flex flex-wrap gap-2">
                {service.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full hover:bg-blue-200 transition"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
      <hr className="w-full border-t-2 border-black/10 my-6" />
    </section>
  );
}

export default Services;
