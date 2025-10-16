from flask import Flask, request, jsonify
from flask_cors import CORS
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
    'contact': {
        'email': 'harshpanchal2904@gmail.com',
        'github': 'https://github.com/Harsh29004',
        'linkedin': 'https://linkedin.com/in/harsh-panchal-36a6a8250'
    }
}

@app.route('/api/generate-bio', methods=['POST', 'GET'])
def generate_bio():
    bios = [
        "As an AI and Data Science enthusiast, I specialize in developing intelligent systems that solve real-world problems. My expertise spans machine learning, deep learning, and full-stack web development.",
        "Driven by curiosity and powered by code, I transform complex datasets into actionable insights and build AI solutions that bridge the gap between technology and human needs.",
        "Passionate about the intersection of artificial intelligence and real-world applications, I build systems that learn, adapt, and deliver value."
    ]
    return jsonify({
        'bio': random.choice(bios),
        'generated_at': datetime.now().isoformat()
    })

@app.route('/api/explain-project', methods=['POST'])
def explain_project():
    data = request.json
    project_title = data.get('project', '')
    
    explanation = f"{project_title} demonstrates advanced capabilities in AI and software engineering, combining multiple technologies to solve real-world problems effectively."
    
    return jsonify({
        'explanation': explanation,
        'generated_at': datetime.now().isoformat()
    })

@app.route('/api/recommend-projects', methods=['POST'])
def recommend_projects():
    data = request.json
    query = data.get('query', '').lower()
    
    recommendations = []
    if 'ai' in query or 'ml' in query:
        recommendations = [1, 3, 4]
    elif 'web' in query:
        recommendations = [2]
    else:
        recommendations = [1, 2]
    
    return jsonify({
        'recommendations': recommendations,
        'query': query
    })

@app.route('/api/chatbot', methods=['POST'])
def chatbot():
    data = request.json
    message = data.get('message', '').lower()
    
    if 'skill' in message:
        response = "Harsh has expertise in AI/ML (Python, TensorFlow, Keras), Web Dev (React, Flask), and Data (SQL, MongoDB)!"
    elif 'project' in message:
        response = "Key projects: Forest Fire Detection, Music Bot Website, Diamond Price Predictor, and Diabetic Retinopathy Prediction!"
    elif 'contact' in message:
        response = f"Email: {PORTFOLIO_DATA['contact']['email']}, GitHub: {PORTFOLIO_DATA['contact']['github']}"
    else:
        response = "I can help you learn about Harsh's skills, projects, experience, and contact information!"
    
    return jsonify({
        'response': response,
        'timestamp': datetime.now().isoformat()
    })

@app.route('/api/contact', methods=['POST'])
def contact():
    return jsonify({
        'success': True,
        'message': 'Thank you for reaching out!'
    })

@app.route('/api/health', methods=['GET'])
def health():
    return jsonify({
        'status': 'healthy',
        'timestamp': datetime.now().isoformat()
    })

# Vercel serverless function handler
def handler(request):
    with app.request_context(request.environ):
        return app.full_dispatch_request()
