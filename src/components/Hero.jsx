import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  
  const phrases = [
    'AI Engineer',
    'Data Scientist',
    'ML Enthusiast',
    'Web Developer',
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto text-center"
      >
        {/* AI Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center px-4 py-2 mb-8 glass rounded-full border border-primary/30"
        >
          <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></span>
          <span className="text-sm font-mono text-gray-300">Portfolio</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="gradient-text">Harsh Panchal</span>
        </motion.h1>

        {/* Animated Title */}
        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="text-2xl md:text-4xl font-semibold text-white mb-2">
            <span className="text-primary">{displayText}</span>
            <span className="typing-cursor text-secondary">|</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            B.Tech Student | Building intelligent solutions with AI, ML & Data Science
          </p>
        </motion.div>

        {/* AI Generated Tagline */}
        <motion.div
          variants={itemVariants}
          className="mb-12 p-6 glass rounded-2xl max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center mb-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mr-3">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <span className="text-sm font-mono text-primary">AI</span>
          </div>
          <p className="text-xl text-gray-200 font-light italic">
            "Transforming complex data into intelligent solutions, one algorithm at a time. 
            Passionate about bridging the gap between cutting-edge AI research and real-world applications."
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-6 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            View Projects
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="btn-outline"
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-6"
        >
          <motion.a
            whileHover={{ scale: 1.2, rotate: 360 }}
            href="https://github.com/Harsh29004"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full glass flex items-center justify-center text-2xl text-gray-300 hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: 360 }}
            href="https://linkedin.com/in/harsh-panchal-36a6a8250"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full glass flex items-center justify-center text-2xl text-gray-300 hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: 360 }}
            href="mailto:harshpanchal2904@gmail.com"
            className="w-12 h-12 rounded-full glass flex items-center justify-center text-2xl text-gray-300 hover:text-primary transition-colors"
            aria-label="Email"
          >
            <FaEnvelope />
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-2 bg-primary rounded-full"></motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
