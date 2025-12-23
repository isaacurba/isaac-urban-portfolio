import React from 'react'

const AboutMe = () => {

  return (
    <section className='w-full bg-[#1a1a1a] px-4'>
        <div className="relative max-w-3xl mx-auto flex flex-col items-center p-12 overflow-hidden">

            <div className='flex items-center flex-col py-8'>
                <h1 className='text-white lg:text-5xl text-3xl font-bold'>
                    About Me
                </h1>

                <p
                className="lg:text-lg text-sm font-bold inline-block
                    bg-gradient-to-r from-[#56bdeb] to-[#ceeefd]
                    text-transparent bg-clip-text">
                    Get to know me
                </p>                
            </div>


            <div className='text-white flex flex-col gap-5 items-center'>
                <p className="text-center text-white lg:text-lg text-sm">
                Hi there! I’m a web developer who enjoys building modern, responsive web applications with a strong focus on clean design and reliable functionality across both frontend and backend.
                </p>

                <p className="text-center text-white lg:text-lg text-sm">
                I work with technologies like JavaScript, React, Node.js, and REST APIs to turn ideas into practical solutions. I enjoy learning new tools, improving my skills, and writing code that is easy to understand and maintain.
                </p>

                <p className="text-center text-white lg:text-lg text-sm">
                I’m passionate about creating user-friendly experiences, collaborating with others, and contributing to meaningful projects. I’m open to remote opportunities and excited to grow while building impactful digital products.
                </p>
            </div>

            <a 
            href="/Boluuwatife_Urban_Kpomassi_CV.pdf"
            download="isaac_Urban_CV.pdf"
            className="border border-[#4fc3f7] text-white px-4 py-3 rounded-full hover:bg-[#4fc3f7] hover:text-white transition transition-all duration-300 my-9 lg:text-xl text-sm">
                Download Resume
            </a>
            
        </div>
        
    </section>
  )
}

export default AboutMe