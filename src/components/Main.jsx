import boxBackground from "../assets/images/boxBackground.png"
import isaac from "../assets/images/bobo 1.jpg"
const Main = () => {
  return (
    <main className='w-full bg-[#1a1a1a] py-20 px-4'>
        <div className='relative max-w-3xl mx-auto flex flex-col items-center p-12 overflow-hidden'>
            <img 
              src={boxBackground} 
              alt="" 
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <img src={isaac} alt="Isaac Urban" className="relative z-10 rounded-full w-50"/>
       
            <p className="text-lg text-center">
                Isaac Urban  
            </p>
        </div>
    </main>
  )
}

export default Main