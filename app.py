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


# AI Bio Generator
@app.route('/api/generate-bio', methods=['POST'])
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


# AI Project Explainer
@app.route('/api/explain-project', methods=['POST'])
def explain_project():
    """Generate AI explanation for a project"""
    data = request.json
    project_title = data.get('project', '')
    description = data.get('description', '')
    technologies = data.get('technologies', [])
    
    # Find matching project
    project = next((p for p in PORTFOLIO_DATA['projects'] if p['title'] == project_title), None)
    
    if project:
        explanation = f"""
{project['title']} is an innovative {project['category']} project that demonstrates advanced capabilities in artificial intelligence and software engineering.

🎯 Project Overview:
{project['description']}. This project showcases practical problem-solving skills and deep understanding of {', '.join(technologies[:3])}.

💡 Technical Implementation:
The project leverages {technologies[0]} as the primary technology, integrated with {technologies[1] if len(technologies) > 1 else 'modern tools'} to achieve optimal performance. The architecture is designed for scalability, accuracy, and real-world applicability.

📊 Impact:
{project['impact']} - This demonstrates not just technical proficiency, but also the ability to deliver measurable results that matter.

🚀 Key Learnings:
Working on this project deepened my understanding of {project['category'].lower()}, enhanced my problem-solving abilities, and reinforced the importance of building solutions that create tangible value.

This project represents my commitment to using technology for meaningful purposes and my capability to tackle complex challenges with innovative AI-driven approaches.
        """.strip()
    else:
        explanation = f"""
{project_title} is a significant project showcasing expertise in {', '.join(technologies)}. 

This project demonstrates the ability to architect and implement complex systems, combining multiple technologies to solve real-world problems. The implementation focuses on code quality, performance optimization, and user experience.

Key technical achievements include effective use of {technologies[0]}, seamless integration of {technologies[1] if len(technologies) > 1 else 'modern frameworks'}, and deployment of a scalable solution.

This project reflects a deep understanding of software development principles and the ability to deliver production-ready applications.
        """.strip()
    
    return jsonify({
        'explanation': explanation,
        'generated_at': datetime.now().isoformat()
    })


# AI Project Recommender
@app.route('/api/recommend-projects', methods=['POST'])
def recommend_projects():
    """Recommend projects based on user query"""
    data = request.json
    query = data.get('query', '').lower()
    
    recommendations = []
    scores = []
    
    # Score each project based on relevance
    for project in PORTFOLIO_DATA['projects']:
        score = 0
        
        # Check query keywords against project data
        searchable_text = f"{project['title']} {project['description']} {project['category']} {' '.join(project['technologies'])}".lower()
        
        keywords = {
            'ai': 5, 'ml': 5, 'machine learning': 5, 'deep learning': 5,
            'web': 3, 'frontend': 3, 'react': 3,
            'cnn': 4, 'neural': 4, 'computer vision': 4,
            'predict': 4, 'regression': 4, 'classification': 4,
            'flask': 3, 'backend': 3, 'api': 3,
            'medical': 4, 'healthcare': 4, 'detection': 4
        }
        
        for keyword, weight in keywords.items():
            if keyword in query and keyword in searchable_text:
                score += weight
        
        if score > 0:
            scores.append((project, score))
    
    # Sort by score and get top recommendations
    scores.sort(key=lambda x: x[1], reverse=True)
    recommendations = [
        PORTFOLIO_DATA['projects'].index(proj) + 1 
        for proj, _ in scores[:3]
    ]
    
    # If no specific matches, recommend based on general query
    if not recommendations:
        if 'ai' in query or 'ml' in query:
            recommendations = [1, 3, 4]  # AI/ML projects
        elif 'web' in query:
            recommendations = [2]  # Web projects
        else:
            recommendations = [1, 2]  # Top projects
    
    return jsonify({
        'recommendations': recommendations,
        'query': query,
        'generated_at': datetime.now().isoformat()
    })


# AI Chatbot
@app.route('/api/chatbot', methods=['POST'])
def chatbot():
    """Handle chatbot queries about the portfolio"""
    data = request.json
    message = data.get('message', '').lower()
    
    response = ""
    
    # Skills queries
    if any(word in message for word in ['skill', 'technology', 'know', 'tech']):
        all_skills = []
        for category, skills in PORTFOLIO_DATA['skills'].items():
            all_skills.extend(skills)
        response = f"Harsh has expertise in multiple domains:\n\n🤖 AI/ML: {', '.join(PORTFOLIO_DATA['skills']['ai_ml'][:4])}\n\n💻 Programming: {', '.join(PORTFOLIO_DATA['skills']['programming'])}\n\n🌐 Web Dev: {', '.join(PORTFOLIO_DATA['skills']['web'][:4])}\n\nHe's proficient in building end-to-end AI solutions!"
    
    # Projects queries
    elif any(word in message for word in ['project', 'work', 'portfolio']):
        projects_list = '\n'.join([f"• {p['title']} - {p['impact']}" for p in PORTFOLIO_DATA['projects']])
        response = f"Here are Harsh's key projects:\n\n{projects_list}\n\nEach project showcases his ability to solve real-world problems with AI and technology!"
    
    # Education queries
    elif any(word in message for word in ['education', 'study', 'college', 'university', 'degree']):
        response = f"Harsh is currently pursuing {PORTFOLIO_DATA['education']}. He's actively involved in technical clubs and has participated in various hackathons and workshops."
    
    # Experience queries
    elif any(word in message for word in ['experience', 'certification', 'certificate']):
        certs = '\n'.join([f"✓ {cert}" for cert in PORTFOLIO_DATA['certifications']])
        response = f"Harsh has completed several certifications:\n\n{certs}\n\nHe's also been a technical event coordinator, demonstrating leadership skills!"
    
    # Contact queries
    elif any(word in message for word in ['contact', 'reach', 'email', 'hire', 'linkedin', 'github']):
        response = f"You can reach Harsh through:\n\n📧 {PORTFOLIO_DATA['contact']['email']}\n💼 {PORTFOLIO_DATA['contact']['linkedin']}\n🐙 {PORTFOLIO_DATA['contact']['github']}\n\nFeel free to connect!"
    
    # Availability
    elif any(word in message for word in ['available', 'looking', 'job', 'intern', 'opportunity']):
        response = "Harsh is actively seeking opportunities in AI, Data Science, and Web Development! He's open to internships and full-time positions. Reach out to discuss opportunities!"
    
    # Default
    else:
        response = "I can help you learn about:\n\n• Harsh's technical skills\n• His projects and experience\n• Education and certifications\n• Contact information\n\nWhat would you like to know?"
    
    return jsonify({
        'response': response,
        'timestamp': datetime.now().isoformat()
    })


# Contact form handler
@app.route('/api/contact', methods=['POST'])
def contact():
    """Handle contact form submissions"""
    data = request.json
    
    # In a real application, you would:
    # - Validate the data
    # - Send an email
    # - Store in database
    
    print(f"\n=== New Contact Form Submission ===")
    print(f"Name: {data.get('name')}")
    print(f"Email: {data.get('email')}")
    print(f"Subject: {data.get('subject')}")
    print(f"Message: {data.get('message')}")
    print(f"===================================\n")
    
    return jsonify({
        'success': True,
        'message': 'Thank you for reaching out! I will get back to you soon.'
    })


# Resume analyzer (mock AI feature)
@app.route('/api/analyze-resume', methods=['POST'])
def analyze_resume():
    """AI Resume Analyzer - suggests improvements"""
    suggestions = [
        {
            'category': 'Skills',
            'suggestion': 'Consider adding Docker and Kubernetes to showcase DevOps knowledge',
            'priority': 'medium'
        },
        {
            'category': 'Projects',
            'suggestion': 'Add metrics and KPIs to quantify project impact',
            'priority': 'high'
        },
        {
            'category': 'Experience',
            'suggestion': 'Consider contributing to open-source AI projects on GitHub',
            'priority': 'medium'
        },
        {
            'category': 'Certifications',
            'suggestion': 'TensorFlow Developer Certificate would strengthen ML credentials',
            'priority': 'high'
        }
    ]
    
    return jsonify({
        'suggestions': suggestions,
        'overall_score': 85,
        'strengths': ['Strong AI/ML foundation', 'Diverse project portfolio', 'Active learning'],
        'generated_at': datetime.now().isoformat()
    })


@app.route('/api/health', methods=['GET'])
def health():
    """Health check endpoint"""
    return jsonify({
        'status': 'healthy',
        'service': 'AI Portfolio Backend',
        'timestamp': datetime.now().isoformat()
    })


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
