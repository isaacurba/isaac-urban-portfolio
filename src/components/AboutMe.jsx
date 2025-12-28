import React from 'react'
import { motion } from 'framer-motion'

const AboutMe = () => {

  // Animation variants to keep the code clean
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 // Delay between each child animation
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section className='w-full bg-[#1a1a1a] px-4'>
        <div className="relative max-w-3xl mx-auto flex flex-col items-center p-12 overflow-hidden">

            {/* Header - Slide Down */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='flex items-center flex-col py-8'
            >
                <h1 className='text-white lg:text-5xl text-3xl font-bold'>
                    About Me
                </h1>

                <p className="lg:text-lg text-sm font-bold inline-block
                    bg-gradient-to-r from-[#56bdeb] to-[#ceeefd]
                    text-transparent bg-clip-text">
                    Get to know me
                </p>                
            </motion.div>

            {/* Content Container - Staggers the paragraphs */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className='text-white flex flex-col gap-5 items-center'
            >
                <motion.p variants={itemVariants} className="text-center text-white lg:text-lg text-sm">
                Hi there! I’m a web developer who enjoys building modern, responsive web applications with a strong focus on clean design and reliable functionality across both frontend and backend.
                </motion.p>

                <motion.p variants={itemVariants} className="text-center text-white lg:text-lg text-sm">
                I work with technologies like JavaScript, React, Node.js, and REST APIs to turn ideas into practical solutions. I enjoy learning new tools, improving my skills, and writing code that is easy to understand and maintain.
                </motion.p>

                <motion.p variants={itemVariants} className="text-center text-white lg:text-lg text-sm">
                I’m passionate about creating user-friendly experiences, collaborating with others, and contributing to meaningful projects. I’m open to remote opportunities and excited to grow while building impactful digital products.
                </motion.p>
            </motion.div>

            {/* Button - Scale In */}
            <motion.a 
              href="/Boluuwatife_Urban_Kpomassi_CV.pdf"
              download="isaac_Urban_CV.pdf"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(79, 195, 247, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              viewport={{ once: true }}
              className="border border-[#4fc3f7] text-white px-4 py-3 rounded-full  hover:text-white transition-colors duration-300 my-9 lg:text-xl text-sm hover:bg-[#4fc3f7]"
            >
                Download Resume
            </motion.a>
            
        </div>
        
    </section>
  )
}

export default AboutMe