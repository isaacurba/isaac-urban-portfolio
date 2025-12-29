import { useState } from "react"
import boxBackground from "../assets/images/boxBackground.png"
import isaac from "../assets/images/original.jpeg"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin } from "lucide-react"
import { FaGithub, FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa"

const Main = () => {
  const [isHovered, setIsHovered] = useState(false)

  // Animation variants for the social container
  const socialVariants = {
    hidden: { 
      opacity: 0, 
      x: -20, 
      width: 0,
      transition: { duration: 0.3 }
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      width: "auto",
      transition: { duration: 0.3, staggerChildren: 0.1 }
    }
  }

  return (
    <main className='w-full bg-[#1a1a1a] px-4 py-8'>
        <div className='relative max-w-4xl mx-auto flex flex-col items-center p-6 md:p-12 overflow-hidden'>
            {/* Background Image */}
            <motion.img 
              src={boxBackground} 
              alt="" 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
            />

            <div className="z-10 flex flex-col items-center gap-6 w-full">
                
                {/* Profile Picture */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <img 
                        src={isaac} 
                        alt="Isaac Urban" 
                        className="rounded-full w-40 h-40 md:w-52 md:h-52 object-cover border-4 border-[#4fc3f7]/30 shadow-2xl" 
                        loading="lazy"
                    />
                </motion.div>
        
                {/* Text Content */}
                <div className="flex flex-col items-center gap-2 text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold text-white tracking-tight"
                    >
                        Isaac Urban
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center gap-3"
                    >
                        <span className="text-lg md:text-2xl font-semibold bg-gradient-to-r from-[#56bdeb] to-[#ceeefd] text-transparent bg-clip-text">
                            Full Stack Web Developer
                        </span>
                        
                        <div className="flex items-center gap-1.5 text-gray-400 text-sm md:text-base bg-white/5 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
                            <MapPin className="w-4 h-4 text-[#4fc3f7]" />
                            <span>Lagos, Nigeria</span>
                        </div>
                    </motion.div>
                </div>

                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center text-gray-300 text-base md:text-lg max-w-2xl leading-relaxed"
                >
                    I craft scalable, high-performance web applications with a focus on intuitive user experiences and robust backend architecture. Dedicated to delivering reliable, modern solutions for clients globally.
                </motion.p>

                {/* --- INTERACTIVE SECTION --- */}
                <div 
                    className="flex items-center justify-center gap-4 mt-4 h-16"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Button */}
                    <motion.button 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.3, delay: 0.7 }}
                        viewport={{ once: true }}
                        className={`
                            border border-[#4fc3f7] px-8 py-3 rounded-full text-base font-medium 
                            transition-all duration-300 shadow-lg shadow-[#4fc3f7]/10 min-w-[170px]
                            ${isHovered ? "bg-[#4fc3f7] text-white" : "text-[#4fc3f7] hover:bg-[#4fc3f7] hover:text-white"}
                        `}
                    >
                        {isHovered ? "These are my socials" : "Contact Me"}
                    </motion.button>

                    {/* Social Icons - Now with your correct links */}
                    <AnimatePresence>
                        {isHovered && (
                            <motion.div 
                                variants={socialVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                className="flex gap-4 overflow-hidden items-center"
                            >
                                {/* GitHub */}
                                <a href="https://github.com/isaacurba" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#4fc3f7] transition-colors duration-300">
                                    <FaGithub size={24} />
                                </a>
                                
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/boluwatife-kpomassi-472b202b7/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#4fc3f7] transition-colors duration-300">
                                    <FaLinkedinIn size={24} />
                                </a>
                                
                                {/* Twitter / X */}
                                <a href="https://x.com/TheIsaacUrban" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#4fc3f7] transition-colors duration-300">
                                    <FaTwitter size={24} />
                                </a>
                                
                                {/* Facebook */}
                                <a href="https://www.facebook.com/Isaacurban0" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#4fc3f7] transition-colors duration-300">
                                    <FaFacebookF size={24} />
                                </a>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

            </div>
        </div>
    </main>
  )
}

export default Main