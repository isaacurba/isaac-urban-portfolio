import { useState } from 'react'
import { LoaderCircle } from 'lucide-react'

const GetInTouch = () => {
  const [ loading, setLoadig ] = useState(false)
  const api = import.meta.env.VITE_PROFORMS_API_KEY;

  return (
    <section className='w-full bg-[#1a1a1a] px-4'>
      <div className="relative max-w-3xl mx-auto flex flex-col items-center p-6 md:p-12 overflow-hidden">

        <div className='flex items-center flex-col py-8'>
          <h1 className='text-white lg:text-5xl text-3xl font-bold'>
            Get In Touch
          </h1>

          <p
          className="lg:text-lg text-sm font-bold inline-block
            bg-gradient-to-r from-[#56bdeb] to-[#ceeefd]
            text-transparent bg-clip-text">
            Lets work together
          </p>                
        </div>

        {/* FORM */}
        <div className="flex items-center justify-center p-4 w-full">
          <form 
          onSubmit={() => setLoadig(true)}
          action={`https://app.proforms.top/f/${api}`} method="POST" className="p-8 w-full flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="block text-white text-sm font-bold mb-2">
                Name 
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="shadow appearance-none border rounded w-full py-5 px-3 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white text-sm font-bold mb-2">
                Email 
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="shadow appearance-none border rounded w-full py-5 px-3 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your@example.com"
              />
            </div>

            <div>
              <label htmlFor="services" className="block text-white text-sm font-bold mb-2">
                Service 
              </label>
              <select
                id="services"
                name="services"
                className="shadow appearance-none border rounded w-full py-5 px-3 text-white bg-[#1a1a1a] leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select a Service</option>
                <option value="web_development">Web Development</option>
                {/* <option value="mobile_app_development">Mobile App Development</option> */}
                {/* <option value="ui_ux_design">UI/UX Design</option> */}
                <option value="consulting">Consulting</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-white text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="shadow appearance-none border rounded w-full py-5 px-3 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="How can we help you?"
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-white text-[#1a1a1a] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <LoaderCircle className='animate-spin'/> 
                  </span>

                ) : (
                  "Get in Touch"
                )}
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  )
}

export default GetInTouch