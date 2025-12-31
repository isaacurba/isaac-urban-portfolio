import React from 'react'

const Pagination = ({ projectsPerPage, totalProjects, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProjects / projectsPerPage); i++) {
    pageNumbers.push(i);
  }

  if (pageNumbers.length <= 1) return null;

  return (
    <div className="flex justify-center mt-12 pb-8 z-100">
        <ul className="flex gap-3 flex-wrap justify-center">
            {pageNumbers.map(number => (
                <li key={number}>
                    <button 
                        onClick={() => paginate(number)}
                        className={`
                            px-4 py-2 rounded-lg border transition-all duration-300 font-medium
                            ${currentPage === number 
                                ? 'bg-[#4fc3f7] text-[#1a1a1a] border-[#4fc3f7] shadow-[0_0_15px_rgba(79,195,247,0.3)] scale-105' 
                                : 'bg-white/5 text-gray-400 border-white/10 hover:border-[#4fc3f7]/50 hover:text-[#4fc3f7] hover:bg-[#4fc3f7]/10'}
                        `}
                    >
                        {number}
                    </button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Pagination