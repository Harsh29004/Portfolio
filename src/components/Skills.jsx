import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: '💻',
      skills: [
        { name: 'Python', level: 90, color: 'from-blue-500 to-blue-600' },
        { name: 'JavaScript', level: 85, color: 'from-yellow-500 to-yellow-600' },
        { name: 'C/C++', level: 75, color: 'from-purple-500 to-purple-600' },
        { name: 'SQL', level: 80, color: 'from-orange-500 to-orange-600' },
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: '🤖',
      skills: [
        { name: 'TensorFlow', level: 85, color: 'from-orange-500 to-red-500' },
        { name: 'Keras', level: 80, color: 'from-red-500 to-pink-500' },
        { name: 'Scikit-learn', level: 90, color: 'from-blue-500 to-cyan-500' },
        { name: 'OpenCV', level: 75, color: 'from-green-500 to-emerald-500' },
        { name: 'XGBoost', level: 80, color: 'from-yellow-500 to-orange-500' },
      ]
    },
    {
      title: 'Web Development',
      icon: '🌐',
      skills: [
        { name: 'React', level: 88, color: 'from-cyan-500 to-blue-500' },
        { name: 'HTML/CSS', level: 90, color: 'from-orange-500 to-red-500' },
        { name: 'Flask', level: 82, color: 'from-gray-500 to-gray-700' },
        { name: 'Vite', level: 85, color: 'from-purple-500 to-pink-500' },
        { name: 'Tailwind CSS', level: 87, color: 'from-cyan-400 to-blue-500' },
      ]
    },
    {
      title: 'Tools & Databases',
      icon: '🛠️',
      skills: [
        { name: 'Git/GitHub', level: 85, color: 'from-gray-600 to-gray-800' },
        { name: 'MongoDB', level: 75, color: 'from-green-500 to-green-600' },
        { name: 'MySQL', level: 80, color: 'from-blue-500 to-blue-600' },
        { name: 'VS Code', level: 90, color: 'from-blue-500 to-cyan-500' },
        { name: 'Jupyter', level: 85, color: 'from-orange-500 to-orange-600' },
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="skills" className="py-20 px-6 relative">
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
              Comprehensive skill set spanning AI, Machine Learning, and Full-Stack Development
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="glass-strong rounded-2xl p-6"
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">{category.icon}</span>
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-gray-300">{skill.name}</span>
                        <span className="text-primary font-semibold">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-dark rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div
            variants={itemVariants}
            className="mt-12 glass-strong rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">
              Core <span className="gradient-text">Competencies</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: '🧠', title: 'Deep Learning', desc: 'CNN, RNN, Transfer Learning' },
                { icon: '📊', title: 'Data Analysis', desc: 'Pandas, NumPy, Matplotlib' },
                { icon: '🎯', title: 'Model Optimization', desc: 'Hyperparameter Tuning' },
                { icon: '🔍', title: 'Computer Vision', desc: 'Image Processing, Detection' },
                { icon: '📈', title: 'Predictive Analytics', desc: 'Regression, Classification' },
                { icon: '🚀', title: 'Deployment', desc: 'Flask, Docker, Cloud Services' },
              ].map((competency, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="glass rounded-xl p-6 text-center"
                >
                  <div className="text-4xl mb-3">{competency.icon}</div>
                  <h4 className="font-semibold text-lg mb-2 text-primary">{competency.title}</h4>
                  <p className="text-sm text-gray-400">{competency.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
