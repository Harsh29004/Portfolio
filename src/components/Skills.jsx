import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  SiHtml5, SiCss3, SiJavascript, SiPython, SiCplusplus,
  SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiGit, 
  SiTensorflow, SiKeras, SiScikitlearn, SiOpencv, SiPandas,
  SiNumpy, SiJupyter, SiVisualstudiocode, SiFlask, SiMysql
} from 'react-icons/si'

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [positions, setPositions] = useState([])

  const skills = [
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'C++', icon: SiCplusplus, color: '#00599C' },
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Flask', icon: SiFlask, color: '#000000' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
    { name: 'Keras', icon: SiKeras, color: '#D00000' },
    { name: 'Scikit-learn', icon: SiScikitlearn, color: '#F7931E' },
    { name: 'OpenCV', icon: SiOpencv, color: '#5C3EE8' },
    { name: 'Pandas', icon: SiPandas, color: '#150458' },
    { name: 'NumPy', icon: SiNumpy, color: '#013243' },
    { name: 'Jupyter', icon: SiJupyter, color: '#F37626' },
    { name: 'VS Code', icon: SiVisualstudiocode, color: '#007ACC' },
  ]

  // Generate random positions for floating animation
  useEffect(() => {
    const generateRandomPosition = () => {
      return skills.map(() => ({
        x: Math.random() * 20 - 10,
        y: Math.random() * 20 - 10,
        duration: 3 + Math.random() * 2,
        delay: Math.random() * 2
      }))
    }
    setPositions(generateRandomPosition())
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, type: 'spring', stiffness: 100 }
    }
  }

  return (
    <section id="skills" className="py-20 px-6 relative overflow-hidden">
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
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Technologies I work with
            </p>
          </motion.div>

          {/* Floating Icons Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 max-w-5xl mx-auto"
          >
            {skills.map((skill, index) => {
              const Icon = skill.icon
              const pos = positions[index] || { x: 0, y: 0, duration: 3, delay: 0 }
              
              return (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="flex items-center justify-center"
                >
                  <motion.div
                    animate={{
                      x: [0, pos.x, -pos.x, 0],
                      y: [0, pos.y, -pos.y, 0],
                    }}
                    transition={{
                      duration: pos.duration,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      delay: pos.delay,
                      ease: 'easeInOut'
                    }}
                    whileHover={{ 
                      scale: 1.2,
                      filter: 'brightness(1.3)',
                      boxShadow: `0 0 25px ${skill.color}80`
                    }}
                    className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center cursor-pointer transition-all duration-300 group"
                    style={{
                      boxShadow: `0 4px 20px ${skill.color}20`
                    }}
                  >
                    <Icon 
                      className="w-10 h-10 md:w-12 md:h-12 transition-all duration-300" 
                      style={{ color: skill.color }}
                    />
                    
                    {/* Tooltip on hover */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <span className="text-xs font-medium text-gray-300 whitespace-nowrap bg-black/80 px-2 py-1 rounded">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Category Labels */}
          <motion.div 
            variants={itemVariants}
            className="mt-20 grid md:grid-cols-4 gap-6 text-center"
          >
            {[
              { title: 'Languages', icon: '�' },
              { title: 'Frameworks', icon: '⚛️' },
              { title: 'Databases', icon: '🗄️' },
              { title: 'Tools', icon: '🛠️' },
            ].map((category, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="glass-strong rounded-xl p-6"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-lg font-semibold text-primary">{category.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
