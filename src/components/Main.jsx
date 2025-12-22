import boxBackground from "../assets/images/boxBackground.png"
import isaac from "../assets/images/bobo 1.jpg"
const Main = () => {
  return (
    <main className='w-full bg-[#1a1a1a] px-4'>
        <div className='relative max-w-3xl mx-auto flex flex-col items-center p-12 overflow-hidden'>
            <img 
              src={boxBackground} 
              alt="" 
              className="absolute inset-0 w-full h-full object-cover z-0"
            />

            <div className="z-10 flex flex-col items-center gap-3">
                <img src={isaac} alt="Isaac Urban" className="relative rounded-full w-50"/>
        
                <p className="text-5xl text-center text-white font-bold">
                    Isaac Urban  
                </p>
                <p
                className="text-lg font-extrabold inline-block
                 bg-gradient-to-r from-[#56bdeb] to-[#ceeefd]
                 text-transparent bg-clip-text">
                    Web Developer 💻
                </p>
                <p className="text-center text-white text-lg">
                    Web Developer with experience building full-stack web applications, from intuitive user interfaces to well-structured backend APIs. Comfortable collaborating remotely and delivering reliable solutions.
                </p>

                <button className="border text-xl border-[#4fc3f7] text-white px-4 py-1.5 rounded-full text-sm hover:bg-[#4fc3f7] hover:text-white transition">
                    Contact Me
                </button>
            </div>
        </div>
    </main>
  )
}

export default Main