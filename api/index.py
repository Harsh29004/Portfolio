from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from datetime import datetime
import random

app = Flask(__name__)
CORS(app)

# Portfolio data
PORTFOLIO_DATA = {
    'name': 'Panchal Harshkumar Rajubhai',
    'title': 'AI & Data Science Engineer',
    'education': 'B.Tech in AI & Data Science at SCET Surat (2022-2026)',
    'skills': {
        'programming': ['Python', 'JavaScript', 'C', 'SQL'],
        'ai_ml': ['TensorFlow', 'Keras', 'Scikit-learn', 'XGBoost', 'OpenCV'],
        'web': ['React', 'Flask', 'HTML', 'CSS', 'Vite', 'Tailwind CSS'],
        'databases': ['MongoDB', 'MySQL'],
        'tools': ['Git', 'GitHub', 'VS Code', 'Jupyter']
    },
    'projects': [
        {
            'title': 'Forest Fire Detection System',
            'description': 'AI-powered system using satellite imagery and CNN',
            'technologies': ['Python', 'CNN', 'TensorFlow', 'OpenCV'],
            'category': 'Deep Learning',
            'impact': '94% accuracy in fire detection'
        },
        {
            'title': 'Milky Music Bot Website',
            'description': 'Modern website for Discord music bot',
            'technologies': ['React', 'Vite', 'JavaScript'],
            'category': 'Web Development',
            'impact': '50,000+ active users'
        },
        {
            'title': 'Diamond Price Predictor',
            'description': 'ML model for diamond price prediction',
            'technologies': ['Flask', 'XGBoost', 'Scikit-learn'],
            'category': 'Machine Learning',
            'impact': '92% prediction accuracy'
        },
        {
            'title': 'Diabetic Retinopathy Prediction',
            'description': 'Deep learning for eye disease detection',
            'technologies': ['TensorFlow', 'Keras', 'Medical AI'],
            'category': 'Healthcare AI',
            'impact': 'Ongoing research project'
        }
    ],
    'certifications': [
        'AWS APAC Solutions Architecture Virtual Experience',
        'Tata Group Data Analytics Job Simulation (Forage)',
        'Python Development Workshop (MLSA, GDSC)',
        'React Development Workshop (Devtown)'
    ],
    'languages': ['English', 'Hindi', 'Gujarati'],
    'contact': {
        'email': 'harshpanchal2904@gmail.com',
        'github': 'https://github.com/Harsh29004',
        'linkedin': 'https://linkedin.com/in/harsh-panchal-36a6a8250'
    }
}


@app.route('/api/generate-bio', methods=['POST', 'GET'])
def generate_bio():
    """Generate an AI-crafted professional bio"""
    bios = [
        "As an AI and Data Science enthusiast, I specialize in developing intelligent systems that solve real-world problems. My expertise spans machine learning, deep learning, and full-stack web development. I'm passionate about leveraging cutting-edge technologies to create innovative solutions that make a meaningful impact.",
        
        "Driven by curiosity and powered by code, I transform complex datasets into actionable insights and build AI solutions that bridge the gap between technology and human needs. With a strong foundation in both theoretical concepts and practical implementation, I bring ideas to life through elegant, scalable systems.",
        
        "I'm an AI engineer who believes in the transformative power of data and machine learning. From computer vision projects detecting forest fires to predictive analytics systems, I create intelligent applications that solve tangible problems. My journey combines rigorous academic learning with hands-on project experience.",
        
        "Passionate about the intersection of artificial intelligence and real-world applications, I build systems that learn, adapt, and deliver value. Whether it's developing neural networks for image classification or creating interactive web applications, I focus on solutions that are both technically sound and user-centric."
    ]
    
    selected_bio = random.choice(bios)
    
    return jsonify({
        'bio': selected_bio,
        'generated_at': datetime.now().isoformat()
    })


@app.route('/api/chatbot', methods=['POST'])
def chatbot():
    """Handle chatbot queries"""
    data = request.json
    message = data.get('message', '').lower()
    
    response = ""
    
    if any(word in message for word in ['skill', 'technology', 'know', 'tech']):
        response = f"Harsh has expertise in multiple domains:\n\n🤖 AI/ML: {', '.join(PORTFOLIO_DATA['skills']['ai_ml'][:4])}\n\n💻 Programming: {', '.join(PORTFOLIO_DATA['skills']['programming'])}\n\n🌐 Web Dev: {', '.join(PORTFOLIO_DATA['skills']['web'][:4])}\n\nHe's proficient in building end-to-end AI solutions!"
    
    elif any(word in message for word in ['project', 'work', 'portfolio']):
        projects_list = '\n'.join([f"• {p['title']} - {p['impact']}" for p in PORTFOLIO_DATA['projects']])
        response = f"Here are Harsh's key projects:\n\n{projects_list}\n\nEach project showcases his ability to solve real-world problems with AI and technology!"
    
    elif any(word in message for word in ['contact', 'reach', 'email', 'hire', 'linkedin', 'github']):
        response = f"You can reach Harsh through:\n\n📧 {PORTFOLIO_DATA['contact']['email']}\n💼 {PORTFOLIO_DATA['contact']['linkedin']}\n🐙 {PORTFOLIO_DATA['contact']['github']}\n\nFeel free to connect!"
    
    else:
        response = "I can help you learn about:\n\n• Harsh's technical skills\n• His projects and experience\n• Education and certifications\n• Contact information\n\nWhat would you like to know?"
    
    return jsonify({
        'response': response,
        'timestamp': datetime.now().isoformat()
    })


@app.route('/api/health', methods=['GET'])
def health():
    """Health check"""
    return jsonify({
        'status': 'healthy',
        'service': 'AI Portfolio Backend',
        'timestamp': datetime.now().isoformat()
    })


# Vercel serverless function handler
def handler(request):
    return app(request.environ, lambda *args: None)
