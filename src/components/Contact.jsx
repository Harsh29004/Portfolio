import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import axios from 'axios'
import toast from 'react-hot-toast'
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { supabase } from '../lib/supabase'

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate required fields
    if (!formData.name.trim()) {
      toast.error('Please enter your name')
      return
    }

    if (!formData.email.trim()) {
      toast.error('Please enter your email')
      return
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address')
      return
    }

    if (!formData.message.trim()) {
      toast.error('Please enter a message')
      return
    }

    setIsSubmitting(true)
    
    try {
      // Prepare data for insertion
      const messageData = {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        subject: formData.subject.trim() || 'No Subject',
        message: formData.message.trim()
      }

      // Insert into Supabase database
      const { error } = await supabase
        .from('contact_messages')
        .insert(messageData)

      if (error) {
        console.error('Database error:', error)
        throw new Error(error.message)
      }

      // Success
      toast.success('Message sent successfully! I\'ll get back to you soon.')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
    } catch (error) {
      console.error('Failed to send message:', error)
      toast.error('Failed to send message. Please try emailing me directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'harshpanchal2904@gmail.com',
      link: 'mailto:harshpanchal2904@gmail.com',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      value: 'harsh-panchal',
      link: 'https://linkedin.com/in/harsh-panchal-36a6a8250',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      value: 'Harsh29004',
      link: 'https://github.com/Harsh29004',
      color: 'from-gray-600 to-gray-800'
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'Surat, Gujarat, India',
      link: null,
      color: 'from-green-500 to-emerald-500'
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have a project in mind or want to discuss opportunities? Let's connect!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="glass-strong rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="text-gray-400 mb-8">
                  Feel free to reach out through any of these channels. I'm always open to 
                  discussing new projects, creative ideas, or opportunities.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-center"
                    >
                      {info.link ? (
                        <a
                          href={info.link}
                          target={info.link.startsWith('http') ? '_blank' : '_self'}
                          rel="noopener noreferrer"
                          className="flex items-center group w-full"
                        >
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${info.color} flex items-center justify-center text-xl mr-4 group-hover:scale-110 transition-transform`}>
                            {info.icon}
                          </div>
                          <div>
                            <p className="text-sm text-gray-400">{info.label}</p>
                            <p className="text-white font-medium group-hover:text-primary transition-colors">
                              {info.value}
                            </p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-center w-full">
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${info.color} flex items-center justify-center text-xl mr-4`}>
                            {info.icon}
                          </div>
                          <div>
                            <p className="text-sm text-gray-400">{info.label}</p>
                            <p className="text-white font-medium">{info.value}</p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-strong rounded-2xl p-8 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4">Looking to Collaborate?</h3>
                  <p className="text-gray-400 mb-6">
                    I'm always interested in hearing about new projects and opportunities 
                    in AI, Machine Learning, and Web Development.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/Harsh29004"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold text-center hover:scale-105 transition-transform"
                    >
                      View GitHub
                    </a>
                    <a
                      href="https://linkedin.com/in/harsh-panchal-36a6a8250"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-3 border border-primary text-primary rounded-lg font-semibold text-center hover:bg-primary hover:text-dark transition-all"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="glass-strong rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                
                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark/50 border border-gray-700 rounded-lg focus:border-primary focus:outline-none text-white transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark/50 border border-gray-700 rounded-lg focus:border-primary focus:outline-none text-white transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark/50 border border-gray-700 rounded-lg focus:border-primary focus:outline-none text-white transition-colors"
                      placeholder="Project Opportunity"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 bg-dark/50 border border-gray-700 rounded-lg focus:border-primary focus:outline-none text-white transition-colors resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-4 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
