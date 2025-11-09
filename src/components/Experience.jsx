import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const experiences = [
    {
      type: 'certification',
      title: 'AWS APAC Solutions Architecture',
      organization: 'Amazon Web Services',
      period: '2024',
      description: 'Virtual experience program covering cloud architecture, scalability, and AWS services.',
      icon: '☁️',
      color: 'from-orange-500 to-yellow-500',
      skills: ['Cloud Architecture', 'AWS', 'Scalability', 'System Design']
    },
    {
      type: 'certification',
      title: 'Data Analytics Job Simulation',
      organization: 'Tata Group (Forage)',
      period: '2024',
      description: 'Comprehensive simulation involving data visualization, analysis, and business insights.',
      icon: '📊',
      color: 'from-blue-500 to-cyan-500',
      skills: ['Data Visualization', 'Business Analytics', 'Python', 'Storytelling']
    },
    {
      type: 'workshop',
      title: 'Python Development Workshop',
      organization: 'MLSA & GDSC',
      period: '2023',
      description: 'Hands-on workshop on Python programming, data structures, and best practices.',
      icon: '🐍',
      color: 'from-blue-400 to-blue-600',
      skills: ['Python', 'Data Structures', 'Algorithms', 'Best Practices']
    },
    {
      type: 'workshop',
      title: 'React & Web Development',
      organization: 'Devtown',
      period: '2023',
      description: 'Intensive workshop covering React fundamentals, hooks, and modern web development.',
      icon: '⚛️',
      color: 'from-cyan-400 to-cyan-600',
      skills: ['React', 'JavaScript', 'Frontend', 'UI/UX']
    },
    {
      type: 'volunteer',
      title: 'Technical Event Coordinator',
      organization: 'SCET College Events',
      period: '2022-2024',
      description: 'Organized and coordinated technical and cultural events, led student teams.',
      icon: '🎯',
      color: 'from-purple-500 to-pink-500',
      skills: ['Leadership', 'Event Management', 'Team Coordination', 'Communication']
    },
  ]

  const education = {
    degree: 'B.Tech in AI & Data Science',
    institution: 'Sarvajanik College of Engineering & Technology',
    location: 'Surat, Gujarat',
    period: '2022 - 2026',
    icon: '🎓',
    highlights: [
      'Specialized in Artificial Intelligence and Data Science',
      'Active member of GDSC and technical clubs',
      'Participated in multiple hackathons and competitions',
      'Maintained strong academic performance'
    ]
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
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
    <section id="experience" className="py-20 px-6 relative">
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
              Experience & <span className="gradient-text">Certifications</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              My journey through certifications, workshops, and hands-on experience
            </p>
          </motion.div>

          {/* Education Card */}
          <motion.div
            variants={itemVariants}
            className="mb-12 glass-strong rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="flex items-start">
                <div className="text-6xl mr-6">{education.icon}</div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-2">{education.degree}</h3>
                  <p className="text-xl text-primary mb-2">{education.institution}</p>
                  <p className="text-gray-400 mb-4">
                    {education.location} | {education.period}
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {education.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start">
                        <span className="text-accent mr-2">▸</span>
                        <span className="text-gray-300 text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-secondary to-accent"></div>

            {/* Experience Items */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col`}
                >
                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="glass-strong rounded-2xl p-6 relative"
                    >
                      {/* Badge */}
                      <div className={`absolute -top-3 ${index % 2 === 0 ? 'right-6' : 'left-6'} px-3 py-1 bg-gradient-to-r ${exp.color} rounded-full text-xs font-semibold uppercase`}>
                        {exp.type}
                      </div>

                      <div className="flex items-start mb-4">
                        <div className="text-4xl mr-4">{exp.icon}</div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                          <p className="text-primary font-semibold mb-1">{exp.organization}</p>
                          <p className="text-sm text-gray-400">{exp.period}</p>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-4">{exp.description}</p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 text-xs font-mono glass rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:flex w-2/12 justify-center my-4">
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${exp.color} ring-4 ring-dark`}></div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <motion.div
            variants={itemVariants}
            className="mt-12 glass-strong rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">
              <span className="gradient-text">Languages</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { lang: 'English', flag: '🇬🇧', level: 'Fluent' },
                { lang: 'Hindi', flag: '🇮🇳', level: 'Native' },
                { lang: 'Gujarati', flag: '🇮🇳', level: 'Native' },
              ].map((language, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="glass rounded-xl p-6 text-center min-w-[140px]"
                >
                  <div className="text-4xl mb-2">{language.flag}</div>
                  <h4 className="font-semibold text-lg mb-1">{language.lang}</h4>
                  <p className="text-sm text-gray-400">{language.level}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
