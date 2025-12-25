import boxBackground from "../assets/images/boxBackground.png"
import isaac from "../assets/images/bobo 1.jpg"
import { motion } from "framer-motion"

const Main = () => {
  return (
    <main className='w-full bg-[#1a1a1a] px-4 py-3'>
        <div className='relative max-w-3xl mx-auto flex flex-col items-center p-6 md:p-12 overflow-hidden'>
            {/* Background Image - Slight Fade In */}
            <motion.img 
              src={boxBackground} 
              alt="" 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="absolute inset-0 w-full h-full object-cover z-0"
            />

            <div className="z-10 flex flex-col items-center gap-3 w-full">
                
                {/* Profile Picture - Pop/Scale In */}
                <motion.img 
                    src={isaac} 
                    alt="Isaac Urban" 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                    viewport={{ once: true }}
                    className="relative rounded-full w-50 " 
                    loading="lazy"
                />
        
                {/* Name - Slide Up */}
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="lg:text-5xl text-3xl text-center text-white font-bold"
                >
                    Isaac Urban  
                </motion.p>

                {/* Role - Slide Up with delay */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="lg:text-lg text-sm font-extrabold inline-block 
                     bg-gradient-to-r from-[#56bdeb] to-[#ceeefd]
                     text-transparent bg-clip-text animate-pulse"
                >
                    Web Developer 💻
                </motion.p>

                {/* Description - Fade In */}
                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center text-white lg:text-lg"
                >
                    Web Developer with experience building full-stack web applications, from intuitive user interfaces to well-structured backend APIs. Comfortable collaborating remotely and delivering reliable solutions.
                </motion.p>

                {/* Button - Bounce In */}
                <motion.button 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="border lg:text-xl border-[#4fc3f7] text-white px-4 py-1.5 rounded-full text-sm hover:bg-[#4fc3f7] hover:text-white transition transition-all duration-300 my-5"
                >
                    Contact Me
                </motion.button>
            </div>
        </div>
    </main>
  )
}

export default Main