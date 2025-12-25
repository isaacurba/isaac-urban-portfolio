import { useState } from 'react'
import { LoaderCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const GetInTouch = () => {
  const [ loading, setLoadig ] = useState(false)
  const api = import.meta.env.VITE_PROFORMS_API_KEY;

  // Variants for staggering the form inputs
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1 // Delay between each input appearing
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 }, // Slide in from left slightly
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <section className='w-full bg-[#1a1a1a] px-4'>
      <div className="relative max-w-3xl mx-auto flex flex-col items-center p-2 md:p-12 overflow-hidden">

        {/* Header - Slide Down */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='flex items-center flex-col py-8'
        >
          <h1 className='text-white lg:text-5xl text-3xl font-bold'>
            Get In Touch
          </h1>

          <p
          className="lg:text-lg text-sm font-bold inline-block
            bg-gradient-to-r from-[#56bdeb] to-[#ceeefd]
            text-transparent bg-clip-text">
            Lets work together
          </p>                
        </motion.div>

        {/* FORM Container */}
        <div className="flex items-center justify-center p-0 md:p-4 w-full">
          <motion.form 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onSubmit={() => setLoadig(true)}
            action={`https://app.proforms.top/f/${api}`} 
            method="POST" 
            className="p-2 md:p-8 w-full flex flex-col gap-4"
          >
            {/* Name Input */}
            <motion.div variants={itemVariants}>
              <label htmlFor="name" className="block text-white text-sm font-bold mb-2">
                Name 
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="shadow appearance-none border rounded w-full py-5 px-3 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow duration-300"
                placeholder="Your Name"
              />
            </motion.div>

            {/* Email Input */}
            <motion.div variants={itemVariants}>
              <label htmlFor="email" className="block text-white text-sm font-bold mb-2">
                Email 
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="shadow appearance-none border rounded w-full py-5 px-3 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow duration-300"
                placeholder="your@example.com"
              />
            </motion.div>

            {/* Service Select */}
            <motion.div variants={itemVariants}>
              <label htmlFor="services" className="block text-white text-sm font-bold mb-2">
                Service 
              </label>
              <select
                id="services"
                name="services"
                className="shadow appearance-none border rounded w-full py-5 px-3 text-white bg-[#1a1a1a] leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow duration-300"
              >
                <option value="">Select a Service</option>
                <option value="web_development">Web Development</option>
                {/* <option value="mobile_app_development">Mobile App Development</option> */}
                {/* <option value="ui_ux_design">UI/UX Design</option> */}
                <option value="consulting">Consulting</option>
                <option value="other">Other</option>
              </select>
            </motion.div>

            {/* Message Textarea */}
            <motion.div variants={itemVariants}>
              <label htmlFor="message" className="block text-white text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="shadow appearance-none border rounded w-full py-5 px-3 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow duration-300"
                placeholder="How can we help you?"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div 
              variants={itemVariants} 
              className="flex items-center justify-between mt-2"
            >
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-[#1a1a1a] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full hover:bg-gray-100 transition-colors"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <LoaderCircle className='animate-spin'/> 
                  </span>
                ) : (
                  "Get in Touch"
                )}
              </motion.button>
            </motion.div>
          </motion.form>
        </div>

      </div>
    </section>
  )
}

export default GetInTouch