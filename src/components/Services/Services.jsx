import { motion } from 'framer-motion'
import {
  FaCode, FaChartLine, FaCloud, FaShieldAlt,
  FaSyncAlt, FaMobileAlt, FaRobot
} from 'react-icons/fa'

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
  return (
    <section className="w-full bg-gradient-to-b from-white to-indigo-50 py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 tracking-tight">
          🚀 Our Services
        </h2>
        <p className="text-lg text-gray-700 mb-16 max-w-2xl mx-auto">
          Crafted to empower your business with cutting-edge technology and innovation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s, index) => {
            const Icon = s.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative p-6 bg-white bg-opacity-90 backdrop-blur-lg border border-indigo-200 rounded-3xl shadow-md hover:shadow-2xl hover:border-sky-400 transition-all duration-300"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-sky-100 via-transparent to-indigo-100 opacity-0 group-hover:opacity-100 blur-2xl transition duration-500 pointer-events-none" />

                {/* Icon with animated ring */}
                <div className="relative z-10 mb-5">
                  <div className="w-16 h-16 mx-auto rounded-full bg-indigo-100 flex items-center justify-center shadow-lg group-hover:shadow-sky-500/50 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="text-indigo-600 text-3xl group-hover:text-indigo-800 transition" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-xl font-semibold text-black group-hover:text-indigo-800 mb-2 transition">
                  {s.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-sm text-gray-700 group-hover:text-black mb-4 transition">
                  {s.desc}
                </p>

                {/* Feature badges */}
                <div className="relative z-10 flex flex-wrap justify-center gap-2">
                  {s.features.map((f, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-sky-100 text-indigo-600 text-xs font-medium border border-indigo-200 hover:bg-sky-400 hover:text-white hover:border-sky-500 transition"
                    >
                      {f}
                    </span>
                  ))}
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
