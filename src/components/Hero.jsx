import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  
  const phrases = [
    'AI Engineer',
    'Data Scientist',
    'ML Enthusiast',
    'Full-Stack Developer',
    'Problem Solver'
  ]

  useEffect(() => {
    const phrase = phrases[currentPhraseIndex]
    let index = 0
    let isDeleting = false
    
    const type = () => {
      if (!isDeleting && index <= phrase.length) {
        setDisplayText(phrase.substring(0, index))
        index++
      } else if (isDeleting && index >= 0) {
        setDisplayText(phrase.substring(0, index))
        index--
      }
      
      if (index === phrase.length + 1) {
        setTimeout(() => { isDeleting = true }, 2000)
      }
      
      if (isDeleting && index === 0) {
        isDeleting = false
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length)
      }
      
      const speed = isDeleting ? 50 : 100
      setTimeout(type, speed)
    }
    
    type()
  }, [currentPhraseIndex])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 pb-20 px-6 overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 grid-bg opacity-10"></div>
      
      {/* Soft gradient orbs - more subtle */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -right-32 w-96 h-96 bg-primary/15 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
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
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-3 text-white"
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
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-400">
            {displayText}
            <span className="typing-cursor text-primary ml-1">|</span>
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base md:text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed"
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

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-500 uppercase tracking-wider">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <FaArrowDown className="text-primary text-sm" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
