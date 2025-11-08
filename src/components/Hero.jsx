import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  
  const mainRole = 'AI & Data Science Engineer'

  useEffect(() => {
    if (isTypingComplete) return
    
    let index = 0
    
    const type = () => {
      if (index <= mainRole.length) {
        setDisplayText(mainRole.substring(0, index))
        index++
        setTimeout(type, 100)
      } else {
        setIsTypingComplete(true)
      }
    }
    
    // Start typing after a short delay
    const timer = setTimeout(type, 500)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 pb-20 px-6 overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 grid-bg opacity-10"></div>
      
      {/* Soft gradient orbs - more subtle */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -right-32 w-96 h-96 bg-primary/15 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center md:justify-end order-2 md:order-1"
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-primary/50 to-transparent animate-pulse blur-xl"></div>
              
              {/* Profile image container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20">
                <img 
                  src="/images/profile.jpg" 
                  alt="Harsh Panchal" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <div className="order-1 md:order-2">
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <span className="text-primary font-medium">Hi there, I'm</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 text-white"
            >
              Harsh Panchal
            </motion.h1>

            {/* Animated Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6 h-12"
            >
              <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-400">
                {displayText}
                {!isTypingComplete && <span className="typing-cursor text-primary ml-1">|</span>}
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base md:text-lg text-gray-400 mb-8 leading-relaxed"
            >
              I'm a B.Tech student specializing in AI & Data Science at SCET Surat. 
              I build intelligent systems and web applications that solve real problems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <button
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-primary text-black font-semibold rounded-lg hover:bg-primary/90 transition-all duration-200"
              >
                View My Work
              </button>
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all duration-200"
              >
                Let's Talk
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-4"
            >
              <a
                href="https://github.com/Harsh29004"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 flex items-center justify-center text-xl text-gray-300 hover:text-primary transition-all duration-200"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/harsh-panchal-36a6a8250"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 flex items-center justify-center text-xl text-gray-300 hover:text-primary transition-all duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:harshpanchal2904@gmail.com"
                className="w-11 h-11 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 flex items-center justify-center text-xl text-gray-300 hover:text-primary transition-all duration-200"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
