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
    <footer className="relative py-12 px-6 border-t border-gray-800">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-bold gradient-text mb-4 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              &lt;HP /&gt;
            </motion.div>
            <p className="text-gray-400 mb-4">
              AI & Data Science Engineer passionate about building intelligent solutions 
              and innovative web applications.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-xl hover:text-primary transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Built With</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Flask'].map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs glass rounded-full font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-gray-400 mt-4 text-sm">
              This portfolio showcases AI-powered interactivity and modern web design principles.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Harsh Panchal. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center">
            Made with <FaHeart className="text-red-500 mx-2 animate-pulse" /> and AI
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
    </footer>
  )
}

export default Footer
