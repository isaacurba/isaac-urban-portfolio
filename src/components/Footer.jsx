import Gmail from "../assets/images/gmail.png";
import { FaLinkedinIn, FaDribbble, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    const handleEmailClick = () => {
        const email = "kpomassiboluwatifeu@gmail.com";
        const subject = encodeURIComponent("Contact from Portfolio");
        const body = encodeURIComponent("Hello, I would like to...");
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    };

    return (
        <footer className='w-full bg-[#1a1a1a] px-4 py-10 md:py-20'>
            <div className="max-w-6xl mx-auto">
                
                {/* --- Top Section: Heading & Email Button --- */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-0 mb-12">
                    
                    {/* Heading */}
                    <div>
                        <h1 className='text-4xl md:text-6xl font-semibold text-white leading-tight'>
                            Let’s <br />
                            Work Together -
                        </h1>
                    </div>

                    {/* Email Button */}
                    <div 
                        onClick={handleEmailClick}
                        className="group border border-[#484e53] text-white px-6 py-3 md:px-8 md:py-4 lg:rounded-lg sm:rounded-full flex items-center gap-4 cursor-pointer hover:bg-white hover:text-black transition-all duration-300"
                    >
                        <img src={Gmail} alt="gmail icon" className="w-6 md:w-8" />
                        <span className="text-sm md:text-lg lg:text-xl">kpomassiboluwatifeu@gmail.com</span>
                    </div>
                </div>

                {/* --- Divider Line --- */}
                <div className="w-full h-[1px] bg-[#333333] mb-8 md:mb-12"></div>

                {/* --- Bottom Section: Socials & Copyright --- */}
                {/* flex-col-reverse ensures Copyright is at bottom on mobile, but Left on desktop */}
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-0">
                    
                    {/* Copyright */}
                    <p className="text-[#888888] text-sm md:text-base">
                        &copy; {new Date().getFullYear()} all rights reserved.
                    </p>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4">
                        <SocialIcon icon={<FaLinkedinIn />} />
                        <SocialIcon icon={<FaDribbble />} />
                        <SocialIcon icon={<FaFacebookF />} />
                        <SocialIcon icon={<FaInstagram />} />
                        <SocialIcon icon={<FaTwitter />} />
                    </div>
                </div>

            </div>
        </footer>
    );
};

// Reusable Social Icon Component for cleaner code
const SocialIcon = ({ icon }) => {
  return (
    <div className="w-10 h-10 md:w-12 md:h-12 border border-[#484e53] rounded-full flex items-center justify-center text-[#888888] hover:bg-white hover:text-black hover:border-white transition-all duration-300 cursor-pointer">
        {icon}
    </div>
  );
};

export default Footer;