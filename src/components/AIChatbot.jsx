import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'

const AIChatbot = ({ onClose }) => {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hi! I\'m Harsh\'s AI assistant. I can answer questions about his skills, projects, experience, and more. What would you like to know?'
    }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const resumeData = {
    name: 'Harsh Panchal',
    title: 'AI & Data Science Engineer',
    education: 'B.Tech in AI & Data Science at SCET Surat (2022-2026)',
    skills: ['Python', 'JavaScript', 'React', 'TensorFlow', 'Machine Learning', 'Deep Learning', 'Flask', 'SQL', 'MongoDB'],
    projects: [
      'Forest Fire Detection System using CNN and satellite imagery',
      'Milky Music Bot Website with 50K+ users',
      'Diamond Price Predictor using XGBoost',
      'Diabetic Retinopathy Prediction (ongoing)'
    ],
    certifications: [
      'AWS APAC Solutions Architecture',
      'Tata Group Data Analytics (Forage)',
      'Python Development Workshop',
      'React Development Workshop'
    ],
    contact: 'harshpanchal2904@gmail.com',
    github: 'github.com/Harsh29004',
    linkedin: 'linkedin.com/in/harsh-panchal-36a6a8250'
  }

  const generateResponse = (userMessage) => {
    const msg = userMessage.toLowerCase()
    
    // Skills questions
    if (msg.includes('skill') || msg.includes('technology') || msg.includes('know')) {
      return `Harsh has expertise in multiple domains:\n\n🤖 AI/ML: ${resumeData.skills.filter(s => ['Python', 'TensorFlow', 'Machine Learning', 'Deep Learning'].includes(s)).join(', ')}\n\n💻 Web Dev: ${resumeData.skills.filter(s => ['JavaScript', 'React', 'Flask'].includes(s)).join(', ')}\n\n📊 Data: SQL, MongoDB, Data Analytics\n\nHe's proficient in building end-to-end AI solutions and modern web applications!`
    }
    
    // Projects questions
    if (msg.includes('project')) {
      return `Here are Harsh's key projects:\n\n🔥 ${resumeData.projects[0]}\n🎵 ${resumeData.projects[1]}\n💎 ${resumeData.projects[2]}\n👁️ ${resumeData.projects[3]}\n\nEach project showcases his ability to solve real-world problems with AI and web technologies. Would you like to know more about any specific project?`
    }
    
    // Education questions
    if (msg.includes('education') || msg.includes('study') || msg.includes('college') || msg.includes('university')) {
      return `Harsh is currently pursuing ${resumeData.education}. He's actively involved in technical clubs and has participated in various hackathons and workshops to enhance his practical skills.`
    }
    
    // Experience/Certification questions
    if (msg.includes('experience') || msg.includes('certification') || msg.includes('certificate')) {
      return `Harsh has completed several notable certifications:\n\n☁️ ${resumeData.certifications[0]}\n📊 ${resumeData.certifications[1]}\n🐍 ${resumeData.certifications[2]}\n⚛️ ${resumeData.certifications[3]}\n\nHe's also been a technical event coordinator at SCET, demonstrating leadership and organizational skills.`
    }
    
    // Contact questions
    if (msg.includes('contact') || msg.includes('reach') || msg.includes('email') || msg.includes('hire')) {
      return `You can reach Harsh through:\n\n📧 Email: ${resumeData.contact}\n💼 LinkedIn: ${resumeData.linkedin}\n🐙 GitHub: ${resumeData.github}\n\nFeel free to connect for project opportunities, collaborations, or just to chat about AI and tech!`
    }
    
    // AI/ML specific questions
    if (msg.includes('machine learning') || msg.includes('deep learning') || msg.includes('ai')) {
      return `Harsh specializes in AI and Machine Learning! He has hands-on experience with:\n\n• Deep Learning frameworks (TensorFlow, Keras)\n• Computer Vision (OpenCV, CNN)\n• Predictive Analytics (XGBoost, Scikit-learn)\n• Real-world AI applications\n\nHis projects demonstrate practical implementation of these technologies to solve complex problems.`
    }
    
    // Web development questions
    if (msg.includes('web') || msg.includes('react') || msg.includes('frontend') || msg.includes('backend')) {
      return `Harsh is also skilled in Full-Stack Web Development:\n\n🎨 Frontend: React, HTML, CSS, JavaScript, Tailwind CSS\n⚙️ Backend: Flask, RESTful APIs\n💾 Databases: MongoDB, MySQL\n\nHe can build modern, responsive web applications from scratch!`
    }
    
    // Availability questions
    if (msg.includes('available') || msg.includes('looking for') || msg.includes('job') || msg.includes('intern')) {
      return `Harsh is actively seeking opportunities in AI, Data Science, and Web Development! He's particularly interested in:\n\n• AI/ML Engineering roles\n• Data Science positions\n• Full-Stack Development opportunities\n• Research internships\n\nHe's open to both internships and full-time positions. Reach out at ${resumeData.contact} to discuss opportunities!`
    }
    
    // Default response
    return `Great question! I can help you learn about:\n\n• Harsh's technical skills and expertise\n• His AI/ML and web development projects\n• Educational background and certifications\n• Contact information and availability\n\nWhat specific area would you like to know more about?`
  }

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setIsTyping(true)

    // Simulate API delay
    setTimeout(() => {
      try {
        // Try to use backend if available
        axios.post('/api/chatbot', { message: userMessage })
          .then(response => {
            setMessages(prev => [...prev, { role: 'assistant', content: response.data.response }])
          })
          .catch(() => {
            // Fallback to local response generation
            const response = generateResponse(userMessage)
            setMessages(prev => [...prev, { role: 'assistant', content: response }])
          })
          .finally(() => {
            setIsTyping(false)
          })
      } catch (error) {
        const response = generateResponse(userMessage)
        setMessages(prev => [...prev, { role: 'assistant', content: response }])
        setIsTyping(false)
      }
    }, 500)
  }

  const quickQuestions = [
    'What are your skills?',
    'Tell me about your projects',
    'What certifications do you have?',
    'How can I contact you?'
  ]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      className="fixed bottom-24 right-6 w-96 h-[600px] glass-strong rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50"
    >
      {/* Header */}
      <div className="p-4 bg-gradient-to-r from-primary to-secondary flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3 text-xl">
            🤖
          </div>
          <div>
            <h3 className="font-bold">AI Assistant</h3>
            <p className="text-xs opacity-90">Ask me about Harsh</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
        >
          ✕
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                message.role === 'user'
                  ? 'bg-gradient-to-r from-primary to-secondary text-white'
                  : 'glass text-gray-200'
              }`}
            >
              <p className="text-sm whitespace-pre-line">{message.content}</p>
            </div>
          </motion.div>
        ))}
        
        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start"
          >
            <div className="glass px-4 py-3 rounded-2xl">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Questions */}
      {messages.length === 1 && (
        <div className="px-4 pb-2">
          <p className="text-xs text-gray-400 mb-2">Quick questions:</p>
          <div className="flex flex-wrap gap-2">
            {quickQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => {
                  setInput(question)
                  setTimeout(() => handleSend(), 100)
                }}
                className="px-3 py-1 text-xs glass rounded-full hover:bg-primary/20 transition-colors"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="p-4 border-t border-gray-700">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask me anything..."
            className="flex-1 px-4 py-2 bg-dark/50 border border-gray-700 rounded-lg focus:border-primary focus:outline-none text-white text-sm"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSend}
            disabled={!input.trim()}
            className="px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default AIChatbot
