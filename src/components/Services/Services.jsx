import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { FaCode, FaChartLine, FaCloud, FaSyncAlt, FaMobileAlt, FaShieldAlt } from 'react-icons/fa';
import star_top from "../../assets/star_top.webm";
import star_top_idle from "../../assets/star_top-idle.png";

const services = [
  {
    title: "Custom Software Development",
    icon: FaCode,
    desc: "Build bespoke software solutions tailored to your business needs, enabling streamlined operations and scalable growth.",
    features: ["Web Applications", "Enterprise Solutions", "API Integrations", "Legacy Modernization"]
  },
  {
    title: "Data Analytics & Business Intelligence",
    icon: FaChartLine,
    desc: "Turn raw data into powerful insights with interactive dashboards and predictive models that drive informed decision-making.",
    features: ["Predictive Analytics", "Data Visualization", "BI Dashboards", "Real-Time Reporting"]
  },
  {
    title: "Cloud Services",
    icon: FaCloud,
    desc: "Harness the power of the cloud with secure, cost-effective, and future-ready infrastructure tailored for your business.",
    features: ["Cloud Migration", "Infrastructure Setup", "Cloud Security", "Optimization & Scaling"]
  },
  {
    title: "Digital Transformation",
    icon: FaSyncAlt,
    desc: "Reimagine your business processes through end-to-end digital innovation, automation, and strategic change management.",
    features: ["Workflow Automation", "Digital Strategy", "Technology Consulting", "Change Enablement"]
  },
  {
    title: "Mobile App Development",
    icon: FaMobileAlt,
    desc: "Create high-performance mobile apps that deliver seamless user experiences across iOS, Android, and cross-platform devices.",
    features: ["iOS Development", "Android Development", "Cross-Platform Apps", "App Maintenance"]
  },
  {
    title: "AI & Machine Learning",
    icon: FaShieldAlt,
    desc: "Empower your business with intelligent systems that automate, predict, and adapt—driven by cutting-edge AI and ML technologies.",
    features: ["Natural Language Processing", "Computer Vision", "Recommender Systems", "AutoML Solutions"]
  }
]

function Services() {
  const [supportsWebM, setSupportsWebM] = useState(true);

  useEffect(() => {
    const video = document.createElement("video");
    const canPlay = video.canPlayType('video/webm; codecs="vp9"');
    setSupportsWebM(!!canPlay);
  }, []);
  return (
    <section id="services" className="relative w-full bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50 py-24 px-6 md:px-12 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="relative flex flex-row items-center justify-center">

            <motion.h2 initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0, backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{
                delay: 0.3,
                duration: 0.6,
                ease: "easeOut",
              }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-unbound font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500"
              style={{
                backgroundSize: "200% 200%",
              }}>
              Services We Offer
            </motion.h2>
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
          </div>
          <motion.div
            className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
          <p className="text-xl text-gray-700 mb-4 max-w-3xl mx-auto leading-relaxed">
            Crafted to empower your business with <span className="text-blue-600 font-semibold">cutting-edge technology</span> and <span className="text-indigo-600 font-semibold">innovation</span>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.02, y: -5, rotateX: 2, rotateY: 2 }}
                transition={{ delay: index * 0.1, duration: 0.6, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative h-full bg-white border border-blue-100 rounded-3xl p-6 shadow hover:shadow-xl transition-all duration-500">
                  <div className="relative z-10 flex items-center justify-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mask-image mask-squircle">
                      <Icon className="text-white w-6 h-6" />
                    </div>
                    <h3 className="text-xl text-left font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4 text-left">{service.desc}</p>
                  <div className="flex flex-wrap gap-2 text-sm text-blue-700">
                    {service.features.map((feature, i) => (
                      <p key={i} className="px-2 py-1 bg-blue-100 rounded-full border-2 border-blue-200">
                        {feature}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
