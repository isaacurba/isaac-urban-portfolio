import { useEffect, useState } from "react"
import { projects } from "./projects"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"


const Projects = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(projects)

  let filter = ["Frontend", "Backend", "Fullstack", "API", "Database"]
  let active = "bg-[#4fc3f7]/10 border border-[#4fc3f7] text-white scale-105"

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)){
      let filters = selectedFilters.filter((exclude) => exclude !== selectedCategory);
      setSelectedFilters(filters)
    }else {
      setSelectedFilters([...selectedFilters, selectedCategory])
    }
  }

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      const tempItems = projects.filter((item) => selectedFilters.includes(item.category));
      setFilteredItems(tempItems);
    } else {
      setFilteredItems(projects);
    }
  };

  useEffect(()=>{
    filterItems();
  }, [selectedFilters])



  return (
    <section className="w-full bg-[#1a1a1a] px-4">
      <div className="relative max-w-5xl mx-auto flex flex-col items-center p-12 overflow-hidden">
        
        {/* Header - Animates in from top */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex items-center flex-col py-8"
        >
          <h1 className="text-white lg:text-5xl text-3xl font-bold">
            Projects
          </h1>
          <p className="lg:text-lg text-sm font-bold inline-block bg-gradient-to-r from-[#56bdeb] to-[#ceeefd] text-transparent bg-clip-text">
            Some of my work
          </p>
        </motion.div>

        <div className="flex text-[#a9a9a9] text-sm gap-4 flex-wrap justify-center items-center">
          {filter.map((category, index) => (
            <p
              key={index}
              onClick={()=> handleFilterButtonClick(category)}
              className={
                `cursor-pointer
                border border-white/10
                text-xl 
                w-40 m-auto text-center
                rounded-full
                transition-all duration-300 ease-out
                hover:border-[#4fc3f7]
                hover:text-white
                hover:bg-[#4fc3f7]/10
                hover:scale-105 ${selectedFilters.includes(category) ? active : ""}`
              }
            >
              {category}
            </p>
          ))}
        </div>


        <div className="grid gap-6 mt-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
          {filteredItems.map((project, index) => (
            <motion.div
              key={project.id}
              // Animation Props
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }} 
              
              className="group relative bg-[#1a1a1a] rounded-xl border border-white/5 hover:border-[#4fc3f7]/40 hover:z-20 transition-all duration-300 max-w-sm mx-auto w-full"
            >
              {/* Image */}
              <div className="h-44 overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col h-full">
                <h3 className="text-white font-semibold mb-1 text-lg">
                  {project.name}
                </h3>

                {/* Description Wrapper */}
                <div className="relative group/tooltip inline-block max-w-full">
                  <p className="truncate text-gray-400 text-sm cursor-help">
                    {project.description}
                  </p>

                  {/* Tooltip */}
                  <div
                    className="
                      pointer-events-none
                      absolute bottom-full left-1/2 -translate-x-1/2 mb-2
                      opacity-0 group-hover/tooltip:opacity-100
                      transition-opacity duration-200
                      bg-white text-gray-900 text-xs font-medium
                      px-3 py-2 rounded-lg
                      shadow-xl
                      wrap-anywhere
                      w-64 whitespace-normal
                      z-50
                    "
                  >
                    {project.description}
                    <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white"></div>
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4 mt-2">
                  {project.techs.map((tech, index) => (
                    <span
                      key={index}
                      className="text-gray-400 text-[10px] uppercase tracking-wider border border-white/10 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Arrow Button */}
                <div className="absolute bottom-4 right-4 z-10">
                  <a 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#4fc3f7] hover:bg-[#3ba8d4] transition-colors rounded-full p-2 cursor-pointer shadow-lg shadow-[#4fc3f7]/20 block"
                  >
                    <ArrowUpRight className="text-white w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Button - Animates in last */}
        <motion.button 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center items-center text-white border border-[#484e53] hover:bg-[#4fc3f7] transition rounded-full w-52 h-12 m-10 cursor-pointer z-100"
        >
          <Link to="/projects">
            View All
          </Link>
        </motion.button>

      </div>
    </section>
  )
}

export default Projects