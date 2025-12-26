import Gmail from "../assets/images/gmail.png";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
    const handleEmailClick = () => {
        const email = "kpomassiboluwatifeu@gmail.com";
        const subject = encodeURIComponent("Contact from Portfolio");
        const body = encodeURIComponent("Hello, I would like to...");
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    };

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const socialVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 120 } }
    };

    return (
        <footer className='w-full bg-[#1a1a1a] px-4 py-10 md:py-20 overflow-hidden'>
            <div className="max-w-6xl mx-auto">
                
                {/* --- Top Section: Heading & Email Button --- */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-0 mb-12">
                    
                    {/* Heading - Slide Up */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h1 className='text-4xl md:text-6xl font-semibold text-white leading-tight'>
                            Let’s <br />
                            Work Together -
                        </h1>
                    </motion.div>

                    {/* Email Button - Slide In from Right */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        onClick={handleEmailClick}
                        className="group border border-[#484e53] text-white px-6 py-3 md:px-8 md:py-4 lg:rounded-lg sm:rounded-full flex items-center gap-4 cursor-pointer hover:bg-white hover:text-black transition-all duration-300"
                    >
                        <img src={Gmail} alt="gmail icon" className="w-6 md:w-8" />
                        <span className="text-sm md:text-lg lg:text-xl">kpomassiboluwatifeu@gmail.com</span>
                    </motion.div>
                </div>

                {/* --- Divider Line - Expand Width --- */}
                <motion.div 
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="w-full h-[1px] bg-[#333333] mb-8 md:mb-12 origin-left"
                ></motion.div>

                {/* --- Bottom Section: Socials & Copyright --- */}
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-0">
                    
                    {/* Copyright - Fade In */}
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="text-[#888888] text-sm md:text-base"
                    >
                        &copy; {new Date().getFullYear()} All rights reserved.
                    </motion.p>

                    {/* Social Icons - Staggered Pop In */}
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex items-center gap-4"
                    >
                        <SocialIcon icon={<FaLinkedinIn />} variants={socialVariants} href="https://www.linkedin.com/in/boluwatife-kpomassi-472b202b7/" />
                        {/* <SocialIcon icon={<FaDribbble />} variants={socialVariants} href="" /> */}
                        <SocialIcon icon={<FaFacebookF />} variants={socialVariants} href="https://www.facebook.com/Isaacurban0" />
                        {/* <SocialIcon icon={<FaInstagram />} variants={socialVariants} href="" /> */}
                        <SocialIcon icon={<FaTwitter />} variants={socialVariants} href="https://x.com/TheIsaacUrban" />
                        <SocialIcon icon={<FaGithub />} variants={socialVariants} href="https://github.com/isaacurba" />
                    </motion.div>
                </div>

            </div>
        </footer>
    );
};

// Reusable Social Icon Component with Motion
// Note: We pass 'variants' down to it
const SocialIcon = ({ icon, variants, href }) => {
  const content = (
    <motion.div 
        variants={variants}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="w-10 h-10 md:w-12 md:h-12 border border-[#484e53] rounded-full flex items-center justify-center text-[#888888] hover:bg-white hover:text-black hover:border-white transition-colors duration-300 cursor-pointer"
    >
        {icon}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
};

export default Footer;