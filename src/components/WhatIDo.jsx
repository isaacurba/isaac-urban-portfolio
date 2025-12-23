import { Layout, Server, Database, Code, Cloud, Zap } from "lucide-react"

const WhatIDo = () => {

  const services = [
    {
      icon: <Layout />,
      title: "Frontend Development",
      desc: "Building responsive, accessible, and modern user interfaces using React and modern CSS frameworks."
    },
    {
      icon: <Server />,
      title: "Backend Development",
      desc: "Developing secure and scalable server-side applications and RESTful APIs."
    },
    {
      icon: <Database />,
      title: "Database Management",
      desc: "Designing and managing databases to ensure performance, reliability, and data integrity."
    },
    {
      icon: <Code />,
      title: "Full-Stack Solutions",
      desc: "Delivering complete web solutions from frontend interfaces to backend logic."
    },
    {
      icon: <Cloud />,
      title: "Deployment & Hosting",
      desc: "Deploying applications and managing environments for smooth production releases."
    },
    {
      icon: <Zap />,
      title: "Performance Optimization",
      desc: "Improving application speed, scalability, and overall user experience."
    }
  ]

  return (
    <section className='w-full bg-[#1a1a1a] px-4'>
        <div className="relative max-w-5xl mx-auto flex flex-col items-center p-12 overflow-hidden">

          <div className='flex items-center flex-col py-8'>
              <h1 className='text-white lg:text-5xl text-3xl font-bold'>
                  What I do
              </h1>

              <p
              className="lg:text-lg text-sm font-bold inline-block
                  bg-gradient-to-r from-[#56bdeb] to-[#ceeefd]
                  text-transparent bg-clip-text">
                  My Services
              </p>                
          </div>

          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#2c2c2c] rounded-xl p-6 border border-white/5"
              >
                {/* Icon */}
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#f5f8ff] text-[#1a1a1a] mb-4">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-white text-lg font-medium mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}

          </div>


        </div>
    </section>
  )
}

export default WhatIDo