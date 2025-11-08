import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import axios from 'axios'
import toast from 'react-hot-toast'

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [selectedProject, setSelectedProject] = useState(null)
  const [aiExplanation, setAiExplanation] = useState('')
  const [isLoadingExplanation, setIsLoadingExplanation] = useState(false)

  const projects = [
    {
      id: 1,
      title: 'Forest Fire Detection System',
      description: 'AI-powered system using satellite imagery to detect and predict forest fires in real-time.',
      technologies: ['Python', 'CNN', 'TensorFlow', 'OpenCV', 'Computer Vision'],
      category: 'Deep Learning',
      image: '🔥',
      impact: 'Early detection can save thousands of acres',
      github: 'https://github.com/Harsh29004',
      details: 'Developed a convolutional neural network model trained on satellite imagery datasets to identify fire patterns. Achieved 94% accuracy in fire detection with minimal false positives.'
    },
    {
      id: 2,
      title: 'Milky Music Bot Website',
      description: 'Modern, responsive website for a Discord music bot with 50K+ users.',
      technologies: ['React', 'Vite', 'JavaScript', 'HTML', 'CSS', 'UI/UX'],
      category: 'Web Development',
      image: '🎵',
      impact: 'Serving 50,000+ active users',
      github: 'https://github.com/Harsh29004',
      details: 'Built an interactive landing page with smooth animations, feature showcase, and dashboard interface. Implemented responsive design and optimized performance for fast loading.'
    },
    {
      id: 3,
      title: 'Diamond Price Predictor',
      description: 'ML-powered web application that predicts diamond prices based on characteristics.',
      technologies: ['Flask', 'XGBoost', 'JavaScript', 'HTML', 'CSS', 'Scikit-learn'],
      category: 'Machine Learning',
      image: '💎',
      impact: '92% prediction accuracy',
      github: 'https://github.com/Harsh29004',
      details: 'Created an XGBoost regression model trained on diamond characteristics (carat, cut, color, clarity). Deployed with Flask backend and interactive frontend for real-time predictions.'
    },
    {
      id: 4,
      title: 'Diabetic Retinopathy Prediction',
      description: 'Deep learning model for early detection of diabetic retinopathy from retinal images.',
      technologies: ['Python', 'TensorFlow', 'Keras', 'Medical AI', 'Image Processing'],
      category: 'Healthcare AI',
      image: '👁️',
      impact: 'Helping early diagnosis',
      github: 'https://github.com/Harsh29004',
      details: 'Ongoing project utilizing transfer learning with pre-trained models to classify severity levels of diabetic retinopathy. Focused on improving accessibility to eye disease screening.'
    },
  ]

  const explainWithAI = async (project) => {
    setSelectedProject(project)
    setIsLoadingExplanation(true)
    try {
      const response = await axios.post('/api/explain-project', {
        project: project.title,
        description: project.description,
        technologies: project.technologies
      })
      setAiExplanation(response.data.explanation)
    } catch (error) {
      // Fallback explanation
      const fallback = `${project.title} is an innovative ${project.category} project that leverages ${project.technologies.slice(0, 3).join(', ')}. ${project.details} This project demonstrates advanced capabilities in ${project.category.toLowerCase()} and showcases practical problem-solving skills. The implementation focuses on accuracy, scalability, and real-world applicability, making it a significant contribution to the field.`
      setAiExplanation(fallback)
    } finally {
      setIsLoadingExplanation(false)
    }
  }

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
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore my portfolio of AI-powered solutions and innovative applications
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="glass-strong rounded-2xl overflow-hidden transition-all duration-300"
              >
                {/* Project Icon */}
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-8xl animate-float">{project.image}</div>
                  <div className="absolute top-4 left-4 px-3 py-1 glass rounded-full text-xs font-semibold">
                    {project.category}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                  
                  {/* Impact Badge */}
                  <div className="mb-4 px-3 py-2 bg-primary/10 border border-primary/30 rounded-lg text-sm text-primary inline-block">
                    📊 {project.impact}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-mono glass rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => explainWithAI(project)}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold text-sm"
                    >
                      Explain with AI
                    </motion.button>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-primary text-primary rounded-lg font-semibold text-sm hover:bg-primary hover:text-dark transition-colors"
                    >
                      GitHub
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* AI Explanation Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold flex items-center">
                  <span className="text-4xl mr-3">{selectedProject.image}</span>
                  {selectedProject.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-8 h-8 rounded-full glass flex items-center justify-center hover:bg-red-500/20 transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="mb-6 p-4 bg-accent/10 border border-accent/30 rounded-lg">
                <div className="flex items-center mb-2">
                  <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-semibold text-accent">AI-Generated Explanation</span>
                </div>
                {isLoadingExplanation ? (
                  <div className="flex items-center justify-center py-8">
                    <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
                  </div>
                ) : (
                  <p className="text-gray-300 leading-relaxed">{aiExplanation}</p>
                )}
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 glass rounded-full text-sm font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-secondary">Project Impact:</h4>
                  <p className="text-gray-300">{selectedProject.impact}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
