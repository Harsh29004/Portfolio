import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const stats = [
    { label: 'Projects', value: '10+' },
    { label: 'Technologies', value: '15+' },
    { label: 'Certifications', value: '5' },
  ]

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div ref={ref}>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              About Me
            </h2>
            <div className="w-16 h-1 bg-primary"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: Stats & Quick Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/5 border border-white/10 rounded-lg p-4 text-center"
                  >
                    <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              {/* Quick Facts */}
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-4">
                <h3 className="text-lg font-semibold mb-4">Quick Facts</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="text-primary mt-1">▸</span>
                    <span className="text-gray-300">B.Tech in AI & Data Science at SCET Surat (2022-2026)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary mt-1">▸</span>
                    <span className="text-gray-300">Based in Surat, Gujarat, India</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary mt-1">▸</span>
                    <span className="text-gray-300">Fluent in English, Hindi & Gujarati</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary mt-1">▸</span>
                    <span className="text-gray-300">Focused on AI, ML & Web Development</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Bio & Description */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-6"
            >
              {/* Main Description */}
              <div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I'm currently pursuing my B.Tech in AI & Data Science at SCET Surat, where I'm learning 
                  to build systems that think, learn, and solve problems.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  My interests span across <span className="text-primary font-medium">machine learning</span>, 
                  <span className="text-primary font-medium"> deep learning</span>, and 
                  <span className="text-primary font-medium"> full-stack development</span>. I enjoy working 
                  on projects that have real-world impact—from detecting forest fires using satellite imagery 
                  to predicting diamond prices with ML models.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source, 
                  or learning something new in the ever-evolving world of AI.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
