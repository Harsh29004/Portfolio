import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import axios from 'axios'
import toast from 'react-hot-toast'

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [generatedBio, setGeneratedBio] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  const generateAIBio = async () => {
    setIsGenerating(true)
    try {
      const response = await axios.post('/api/generate-bio')
      setGeneratedBio(response.data.bio)
      toast.success('AI Bio generated successfully!')
    } catch (error) {
      // Fallback bio if API fails
      const fallbackBio = "As an AI and Data Science enthusiast, I specialize in developing intelligent systems that solve real-world problems. My expertise spans machine learning, deep learning, and full-stack web development. I'm passionate about leveraging cutting-edge technologies to create innovative solutions that make a meaningful impact. Currently pursuing B.Tech at SCET Surat, I continuously explore new frontiers in artificial intelligence and data-driven decision making."
      setGeneratedBio(fallbackBio)
      toast.success('Bio generated!')
    } finally {
      setIsGenerating(false)
    }
  }

  const stats = [
    { label: 'Projects Completed', value: '10+', icon: '🚀' },
    { label: 'Technologies', value: '15+', icon: '⚡' },
    { label: 'Certifications', value: '5+', icon: '🏆' },
    { label: 'Years Experience', value: '2+', icon: '📅' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Profile Image & Stats */}
            <motion.div variants={itemVariants}>
              <div className="relative">
                {/* Animated border */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl animate-gradient blur-xl opacity-50"></div>
                
                {/* Profile Card */}
                <div className="relative glass-strong rounded-3xl p-8">
                  <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary p-1">
                    <div className="w-full h-full rounded-full bg-dark flex items-center justify-center text-6xl">
                      👨‍💻
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-center mb-2">Harsh Panchal</h3>
                  <p className="text-gray-400 text-center mb-6">AI & Data Science Engineer</p>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="glass rounded-xl p-4 text-center"
                      >
                        <div className="text-3xl mb-2">{stat.icon}</div>
                        <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                        <div className="text-xs text-gray-400">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Bio & AI Generator */}
            <motion.div variants={itemVariants}>
              <div className="space-y-6">
                {/* Introduction */}
                <div className="glass-strong rounded-2xl p-6">
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <span className="w-2 h-8 bg-gradient-to-b from-primary to-secondary mr-3 rounded"></span>
                    Introduction
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    I'm a passionate <span className="text-primary font-semibold">AI & Data Science</span> student 
                    pursuing B.Tech at SCET Surat (2022-2026). I specialize in developing intelligent solutions 
                    using <span className="text-secondary font-semibold">Machine Learning</span>, 
                    <span className="text-accent font-semibold"> Deep Learning</span>, and 
                    <span className="text-primary font-semibold"> Full-Stack Development</span>.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    My passion lies in transforming complex problems into elegant AI-driven solutions. 
                    From forest fire detection systems to predictive analytics, I love building technology 
                    that makes a real-world impact.
                  </p>
                </div>

                {/* AI Bio Generator */}
                <div className="glass-strong rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold flex items-center">
                      <svg className="w-5 h-5 mr-2 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      AI-Generated Bio
                    </h4>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={generateAIBio}
                      disabled={isGenerating}
                      className="px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-lg text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isGenerating ? 'Generating...' : 'Generate Bio'}
                    </motion.button>
                  </div>
                  
                  {generatedBio ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-dark/50 rounded-lg border border-primary/30"
                    >
                      <p className="text-gray-300 leading-relaxed italic">{generatedBio}</p>
                    </motion.div>
                  ) : (
                    <div className="p-4 bg-dark/50 rounded-lg border border-gray-700 border-dashed">
                      <p className="text-gray-500 text-center text-sm">
                        Click "Generate Bio" to see an AI-crafted professional summary
                      </p>
                    </div>
                  )}
                </div>

                {/* Quick Facts */}
                <div className="glass-strong rounded-2xl p-6">
                  <h4 className="text-lg font-semibold mb-4">Quick Facts</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="text-primary mr-3">🎓</span>
                      <span className="text-gray-300">B.Tech in AI & Data Science, SCET Surat</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-secondary mr-3">📍</span>
                      <span className="text-gray-300">Surat, Gujarat, India</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-accent mr-3">💬</span>
                      <span className="text-gray-300">English, Hindi, Gujarati</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-primary mr-3">🎯</span>
                      <span className="text-gray-300">Focus: AI, ML, Web Development</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
