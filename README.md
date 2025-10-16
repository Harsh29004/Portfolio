# 🚀 AI-Powered Portfolio Website - Harsh Panchal

<div align="center">

![Portfolio Banner](https://img.shields.io/badge/AI-Powered-00f5ff?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css)
![Flask](https://img.shields.io/badge/Flask-3.0.0-000000?style=for-the-badge&logo=flask)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**A futuristic, AI-integrated portfolio showcasing AI & Data Science expertise**

[Live Demo](#) | [Features](#features) | [Quick Start](#quick-start) | [Deployment](#deployment)

</div>

---

## 🎯 Overview

This is a modern, AI-powered portfolio website built for **Harsh Panchal**, an AI & Data Science Engineer. The site features cutting-edge web technologies, stunning animations, and interactive AI elements that make it stand out from traditional portfolios.

### ✨ Key Highlights

- 🤖 **AI Chatbot** - Intelligent assistant that answers questions about skills, projects, and experience
- 🎨 **Futuristic Design** - Glass-morphism, neon gradients, and smooth animations
- 🚀 **AI Features** - Bio generator, project explainer, and smart recommendations
- 📱 **Fully Responsive** - Perfect experience on all devices
- ⚡ **Optimized Performance** - Fast loading and smooth interactions
- 🔍 **SEO Optimized** - Schema markup and meta tags for better discoverability

---

## 🛠️ Tech Stack

### Frontend
- **React 18.3** - Modern UI library
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready animation library
- **React Icons** - Popular icon library
- **Axios** - Promise-based HTTP client
- **React Hot Toast** - Beautiful notifications

### Backend
- **Flask** - Lightweight Python web framework
- **Flask-CORS** - Cross-Origin Resource Sharing

### Deployment
- **Vercel** - Optimal for React + Flask deployment
- **GitHub** - Version control and CI/CD

---

## 🎨 Features

### 🏠 Hero Section
- Animated typing effect with multiple roles
- AI-generated professional tagline
- Smooth scroll indicators
- Social media integration

### 👨‍💻 About Me
- Interactive profile card with stats
- **AI Bio Generator** - Creates personalized professional summaries
- Quick facts and introduction
- Animated statistics display

### 💼 Projects Showcase
- **AI Project Recommender** - Suggests relevant projects based on user queries
- **AI Explainer** - Detailed AI-generated explanations for each project
- Technology tags and impact metrics
- GitHub integration

### 🛠️ Skills
- Categorized skill display
- Animated progress bars
- Core competencies showcase
- Technology proficiency levels

### 🎓 Experience & Certifications
- Timeline layout
- Certifications and workshops
- Educational background
- Language proficiency

### 📧 Contact
- Working contact form
- Social media links
- Location information
- Email integration

### 💬 AI Chatbot
- Floating chat widget
- Context-aware responses
- Quick question suggestions
- Smooth animations

---

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have:
- **Node.js** (v16 or higher)
- **Python** (v3.8 or higher)
- **npm** or **yarn**
- **Git**

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Harsh29004/ai-portfolio.git
cd ai-portfolio
```

2. **Install frontend dependencies**
```bash
npm install
```

3. **Install backend dependencies**
```bash
cd backend
python -m venv venv

# On Windows
venv\Scripts\activate

# On macOS/Linux
source venv/bin/activate

pip install -r requirements.txt
cd ..
```

4. **Set up environment variables**
```bash
# Copy the example environment file
cp backend/.env.example backend/.env

# Edit backend/.env with your configuration (optional for basic features)
```

### Running Locally

1. **Start the backend server** (Terminal 1)
```bash
cd backend
python app.py
```
Backend will run on `http://localhost:5000`

2. **Start the frontend development server** (Terminal 2)
```bash
npm run dev
```
Frontend will run on `http://localhost:3000`

3. **Open your browser**
Navigate to `http://localhost:3000`

---

## 🎨 Customization

### Update Personal Information

Edit the portfolio data in:
- **Frontend**: `src/components/*.jsx` files
- **Backend**: `backend/app.py` - `PORTFOLIO_DATA` dictionary

### Customize Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#00f5ff',    // Cyan
  secondary: '#ff00ff',  // Magenta
  accent: '#00ff88',     // Green
}
```

### Add/Remove Sections

Modify `src/App.jsx` to add or remove sections as needed.

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy**
```bash
vercel
```

4. **Follow the prompts**
- Link to existing project or create new
- Configure project settings
- Deploy!

### Environment Variables on Vercel

Add these in your Vercel project settings:
- `FLASK_ENV=production`
- Add any API keys if using external AI services

### Alternative: Deploy Frontend and Backend Separately

**Frontend (Vercel/Netlify)**
```bash
npm run build
# Upload dist/ folder
```

**Backend (Heroku/Railway/PythonAnywhere)**
```bash
# Push backend/ directory to your chosen platform
```

---

## 🤖 AI Integration Options

The portfolio comes with fallback AI responses, but you can enhance it with real AI APIs:

### Option 1: OpenAI API
```python
# In backend/app.py
import openai

openai.api_key = os.getenv('OPENAI_API_KEY')

# Use in chatbot function
response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[{"role": "user", "content": message}]
)
```

### Option 2: Google Gemini API
```python
# Install: pip install google-generativeai
import google.generativeai as genai

genai.configure(api_key=os.getenv('GOOGLE_GEMINI_API_KEY'))
model = genai.GenerativeModel('gemini-pro')
```

### Option 3: Hugging Face
```python
# Install: pip install transformers
from transformers import pipeline

chatbot = pipeline("conversational", model="microsoft/DialoGPT-medium")
```

---

## 📁 Project Structure

```
ai-portfolio/
├── backend/
│   ├── app.py                 # Flask server with AI endpoints
│   ├── requirements.txt       # Python dependencies
│   └── .env.example          # Environment variables template
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   ├── AIChatbot.jsx
│   │   ├── Footer.jsx
│   │   └── ParticleBackground.jsx
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── public/                   # Static assets
├── package.json              # Node dependencies
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind configuration
├── vercel.json              # Vercel deployment config
└── README.md                # This file
```

---

## 🎯 Features Checklist

- ✅ Responsive design
- ✅ Dark theme with neon accents
- ✅ Smooth scroll navigation
- ✅ Animated components
- ✅ AI chatbot
- ✅ AI bio generator
- ✅ AI project explainer
- ✅ Project recommender
- ✅ Contact form
- ✅ SEO optimization
- ✅ Schema markup
- ✅ Social media integration
- ✅ Performance optimized
- ✅ Accessibility features

---

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

---

## 🐛 Troubleshooting

### Issue: Backend not connecting

**Solution**: Check if Flask is running on port 5000
```bash
cd backend
python app.py
```

### Issue: Vite proxy errors

**Solution**: Update `vite.config.js` proxy settings to match your backend URL

### Issue: Styling not applied

**Solution**: Rebuild Tailwind CSS
```bash
npm run build
```

### Issue: AI features not working

**Solution**: Backend fallbacks are built-in. AI features work without external APIs!

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Harsh Panchal**
- 🌐 GitHub: [@Harsh29004](https://github.com/Harsh29004)
- 💼 LinkedIn: [harsh-panchal](https://linkedin.com/in/harsh-panchal-36a6a8250)
- 📧 Email: harshpanchal2904@gmail.com

---

## 🙏 Acknowledgments

- Design inspiration from modern AI interfaces
- Icons from React Icons
- Animations powered by Framer Motion
- Built with ❤️ and AI

---

## 📸 Screenshots

### Hero Section
![Hero Section](docs/hero.png)

### AI Chatbot
![AI Chatbot](docs/chatbot.png)

### Projects
![Projects](docs/projects.png)

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ and AI by [Harsh Panchal](https://github.com/Harsh29004)

</div>
