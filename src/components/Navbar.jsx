import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full bg-[#1a1a1a]">
      <nav className="relative max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        
        {/* Logo */}
        <Link to="/"> 
          <div className="text-white font-bold cursive text-xl z-50
          cursor-pointer transition-all duration-500 hover:scale-125 
          hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.8)] animate-bounce">
            IU
          </div>        
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-15 text-md text-gray-300">
          {["Home", "About", "Projects", "Services", "Resume"].map(item => (
            <a
              key={item}
              onClick={() => setIsOpen(false)}
              href={item === "Resume" ? "/Isaac_Urban_CV.pdf" : `#${item.toLowerCase()}`}
              download={item === "Resume" ? "Isaac_Urban_CV.pdf" : undefined}
              className="hover:text-[#4fc3f7] cursor-pointer transition"
            >
              {item}
            </a>
          ))}
        </ul> 

        {/* Desktop Right Actions */}
        <div className="hidden lg:flex items-center space-x-15">
          <a 
          onClick={() => setIsOpen(false)}
          href={`#contact`}
          className="border border-[#4fc3f7] text-[#4fc3f7] px-4 py-1.5 rounded-sm text-sm hover:bg-[#4fc3f7] hover:text-white transition">
            Contact Me
          </a>
          {/* <span className="text-gray-300 cursor-pointer">☀️</span> */}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white hover:text-[#4fc3f7] z-50 "
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="fixed inset-0 bg-[#1a1a1a] z-40 flex flex-col items-center justify-center space-y-8 text-gray-300">
            {/* Mobile Links */}
            {["Home", "About", "Projects", "Services", "Resume"].map(item => (
            <a
              key={item}
              onClick={() => setIsOpen(false)}
              href={item === "Resume" ? "/Isaac_Urban_CV.pdf" : `#${item.toLowerCase()}`}
              download={item === "Resume" ? "Isaac_Urban_CV.pdf" : undefined}
              className="text-2xl hover:text-[#4fc3f7] cursor-pointer transition"
            >
                {item}
              </a>
            ))}

            {/* Mobile Actions */}
            <a
            onClick={() => setIsOpen(false)}
            href={`#contact`}
            className="mt-6 border border-[#4fc3f7] text-[#4fc3f7] px-6 py-2 rounded-sm hover:bg-[#4fc3f7] hover:text-white transition">
              Contact Me
            </a>

            {/* <span className="text-gray-300 cursor-pointer">☀️</span> */}
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
