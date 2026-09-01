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
    <section className='w-full bg-[#1a1a1a] px-4 scroll-mt-10' id='about'>
      <div className="relative max-w-4xl mx-auto flex flex-col items-center px-2 py-12 sm:px-6 lg:px-12 overflow-hidden">
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
                  I’m a software developer focused on building reliable web applications and backend systems. I enjoy solving problems, writing clean and maintainable code, and understanding how different parts of an application work together.
                </motion.p>

                <motion.p variants={itemVariants} className="text-center text-white lg:text-lg text-sm">
                  I work with Java, Python, and JavaScript, using technologies such as FastAPI, Node.js, React, SQLAlchemy, and MySQL. I integrate testing into my projects using tools like JUnit and pytest to maintain reliable and well-tested applications.
                </motion.p>

                <motion.p variants={itemVariants} className="text-center text-white lg:text-lg text-sm">
                  I bring a practical, results-focused approach to software development, with experience building reliable applications and solving real-world technical problems. I’m open to opportunities where I can apply my skills, contribute effectively, and deliver high-quality software.
                </motion.p>
            </motion.div>

            {/* Button - Scale In */}
            <motion.a 
              href="/Boluwatife_Kpomassi.pdf"
              download="Boluwatife_Kpomassi.pdf"
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