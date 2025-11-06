import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/Harsh29004', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/harsh-panchal-36a6a8250', label: 'LinkedIn' },
    { icon: <FaEnvelope />, url: 'mailto:harshpanchal2904@gmail.com', label: 'Email' },
  ]

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="relative py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="container mx-auto max-w-7xl">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-10">
          {/* Brand Section */}
          <div className="text-center sm:text-left">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-3 sm:mb-4 cursor-pointer inline-block"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              &lt;HP /&gt;
            </motion.div>
            <p className="text-gray-400 mb-4 sm:mb-5 text-sm sm:text-base leading-relaxed max-w-md mx-auto sm:mx-0">
              AI & Data Science Engineer passionate about building intelligent solutions 
              and innovative web applications.
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.15, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full glass flex items-center justify-center text-lg sm:text-xl hover:text-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-2.5">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm sm:text-base inline-block hover:translate-x-1 transform"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Section */}
          <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">Built With</h3>
            <div className="flex flex-wrap gap-2 sm:gap-2.5 justify-center sm:justify-start">
              {['React', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Flask'].map((tech, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm glass rounded-full font-mono hover:bg-primary/10 transition-all duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
            <p className="text-gray-400 mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed max-w-md mx-auto sm:mx-0">
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left order-2 md:order-1">
            © {currentYear} Harsh Panchal. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs sm:text-sm flex items-center justify-center order-1 md:order-2">
            Made with <FaHeart className="text-red-500 mx-1.5 sm:mx-2 animate-pulse" />
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
    </footer>
  )
}

export default Footer
