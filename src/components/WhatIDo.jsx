import { Layout, Server, Database, Code, Cloud, Zap } from "lucide-react"
import { motion } from "framer-motion"

const WhatIDo = () => {

  const services = [
    {
      icon: <Layout />,
      title: "Frontend Development",
      desc: "Building responsive, accessible, and modern user interfaces using React and modern CSS frameworks."
    },
    {
      icon: <Server />,
      title: "Backend Development",
      desc: "Developing secure and scalable server-side applications and RESTful APIs."
    },
    {
      icon: <Database />,
      title: "Database Management",
      desc: "Designing and managing databases to ensure performance, reliability, and data integrity."
    },
    {
      icon: <Code />,
      title: "Full-Stack Solutions",
      desc: "Delivering complete web solutions from frontend interfaces to backend logic."
    },
    {
      icon: <Cloud />,
      title: "Deployment & Hosting",
      desc: "Deploying applications and managing environments for smooth production releases."
    },
    {
      icon: <Zap />,
      title: "Performance Optimization",
      desc: "Improving application speed, scalability, and overall user experience."
    }
  ]

  // Container variants for the stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15 // Time between each card appearing
      }
    }
  }

  // Card variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <section className='w-full bg-[#1a1a1a] px-4'>
        <div className="relative max-w-5xl mx-auto flex flex-col items-center p-12 overflow-hidden">

          {/* Header - Fade In Up */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='flex items-center flex-col py-8'
          >
              <h1 className='text-white lg:text-5xl text-3xl font-bold'>
                  What I do
              </h1>

              <p
              className="lg:text-lg text-sm font-bold inline-block
                  bg-gradient-to-r from-[#56bdeb] to-[#ceeefd]
                  text-transparent bg-clip-text">
                  My Services
              </p>                
          </motion.div>

          {/* Grid Container */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }} // Starts animating when 50px into view
            className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -5, borderColor: "rgba(255, 255, 255, 0.2)" }} // Subtle lift on hover
                className="bg-[#2c2c2c] rounded-xl p-6 border border-white/5 transition-colors"
              >
                {/* Icon */}
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#f5f8ff] text-[#1a1a1a] mb-4">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-white text-lg font-medium mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
    </section>
  )
}

export default WhatIDo