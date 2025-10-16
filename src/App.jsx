import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AIChatbot from './components/AIChatbot'
import ParticleBackground from './components/ParticleBackground'

function App() {
  const [showChatbot, setShowChatbot] = useState(false)

  // Schema markup for SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Panchal Harshkumar Rajubhai",
    "url": "https://harshpanchal.dev",
    "image": "https://harshpanchal.dev/profile.jpg",
    "sameAs": [
      "https://github.com/Harsh29004",
      "https://linkedin.com/in/harsh-panchal-36a6a8250"
    ],
    "jobTitle": "AI & Data Science Engineer",
    "worksFor": {
      "@type": "Organization",
      "name": "SCET Surat"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Sarvajanik College of Engineering & Technology"
    },
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "Data Science",
      "Web Development",
      "Python",
      "React",
      "TensorFlow"
    ]
  }

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="relative min-h-screen animated-bg">
        <ParticleBackground />
        
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </main>
        
        <Footer />
        
        {/* AI Chatbot Toggle Button */}
        <button
          onClick={() => setShowChatbot(!showChatbot)}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary neon-cyan flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300"
          aria-label="Toggle AI Assistant"
        >
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
        
        {/* AI Chatbot */}
        {showChatbot && (
          <AIChatbot onClose={() => setShowChatbot(false)} />
        )}
      </div>
    </>
  )
}

export default App
