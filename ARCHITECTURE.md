# 🏗️ Architecture Overview

## System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         USER BROWSER                             │
│                     http://localhost:3000                        │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                      REACT FRONTEND                              │
│                    (Vite Dev Server)                             │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │  Components Layer                                            │ │
│ │  ├── Navbar.jsx         (Navigation)                        │ │
│ │  ├── Hero.jsx           (Landing section)                   │ │
│ │  ├── About.jsx          (Personal info + AI Bio)            │ │
│ │  ├── Projects.jsx       (Portfolio + AI Explainer)          │ │
│ │  ├── Skills.jsx         (Tech stack display)                │ │
│ │  ├── Experience.jsx     (Timeline)                          │ │
│ │  ├── Contact.jsx        (Form + links)                      │ │
│ │  ├── AIChatbot.jsx      (Floating assistant)                │ │
│ │  ├── Footer.jsx         (Footer info)                       │ │
│ │  └── ParticleBackground.jsx (Animated BG)                   │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                             │                                    │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │  State Management (React Hooks)                             │ │
│ │  ├── useState - Local component state                       │ │
│ │  ├── useEffect - Side effects & lifecycle                   │ │
│ │  └── Custom hooks - Reusable logic                          │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                             │                                    │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │  Styling Layer                                              │ │
│ │  ├── Tailwind CSS - Utility classes                         │ │
│ │  ├── Custom CSS - Animations & effects                      │ │
│ │  └── Framer Motion - Advanced animations                    │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                             │                                    │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │  API Client (Axios)                                         │ │
│ │  └── HTTP requests to backend                               │ │
│ └─────────────────────────────────────────────────────────────┘ │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             │ HTTP/REST API
                             │ (Proxy: Vite Dev Server)
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                      FLASK BACKEND                               │
│                    http://localhost:5000                         │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │  API Endpoints                                              │ │
│ │  ├── POST /api/generate-bio      (AI bio generation)       │ │
│ │  ├── POST /api/explain-project   (Project explanation)     │ │
│ │  ├── POST /api/recommend-projects (Smart recommendations)  │ │
│ │  ├── POST /api/chatbot           (AI chat responses)       │ │
│ │  ├── POST /api/contact           (Contact form handler)    │ │
│ │  ├── POST /api/analyze-resume    (Resume suggestions)      │ │
│ │  └── GET  /api/health            (Health check)            │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                             │                                    │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │  Business Logic Layer                                       │ │
│ │  ├── Response generation                                    │ │
│ │  ├── Data processing                                        │ │
│ │  ├── Recommendation algorithms                              │ │
│ │  └── Fallback logic                                         │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                             │                                    │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │  Data Layer                                                 │ │
│ │  └── PORTFOLIO_DATA (In-memory)                             │ │
│ │      ├── Personal info                                      │ │
│ │      ├── Skills                                             │ │
│ │      ├── Projects                                           │ │
│ │      ├── Experience                                         │ │
│ │      └── Contact info                                       │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                             │                                    │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │  External AI Integration (Optional)                         │ │
│ │  ├── OpenAI API                                             │ │
│ │  ├── Google Gemini API                                      │ │
│ │  ├── Hugging Face                                           │ │
│ │  └── Anthropic Claude                                       │ │
│ └─────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

## Data Flow

### 1. Initial Page Load
```
User → Browser → React App → Renders Components → Display UI
                          ↓
                  Particle Background Starts
                          ↓
                  Animations Initialize
```

### 2. AI Chatbot Interaction
```
User Types Message
        ↓
AIChatbot Component
        ↓
axios.post('/api/chatbot', {message})
        ↓
Flask Backend (/api/chatbot)
        ↓
Process Message + Generate Response
        ↓
Return JSON Response
        ↓
Update Chat UI
        ↓
Display to User
```

### 3. AI Bio Generation
```
User Clicks "Generate Bio"
        ↓
About Component
        ↓
axios.post('/api/generate-bio')
        ↓
Flask Backend (/api/generate-bio)
        ↓
Select/Generate Bio
        ↓
Return Bio Text
        ↓
Animate Bio Display
        ↓
Show to User
```

### 4. Project Recommendation
```
User Enters Query
        ↓
Projects Component
        ↓
axios.post('/api/recommend-projects', {query})
        ↓
Flask Backend (/api/recommend-projects)
        ↓
Analyze Query + Score Projects
        ↓
Return Project IDs
        ↓
Highlight Recommended Projects
        ↓
Visual Feedback to User
```

### 5. Contact Form Submission
```
User Fills Form
        ↓
Contact Component
        ↓
Validate Input
        ↓
axios.post('/api/contact', formData)
        ↓
Flask Backend (/api/contact)
        ↓
Process Form Data
        ↓
Log/Send Email (optional)
        ↓
Return Success
        ↓
Show Toast Notification
        ↓
Clear Form
```

## Component Hierarchy

```
App.jsx
├── ParticleBackground.jsx (Background layer)
├── Navbar.jsx (Fixed header)
├── Hero.jsx (Section)
├── About.jsx (Section)
│   └── AI Bio Generator (Feature)
├── Projects.jsx (Section)
│   ├── Project Cards
│   ├── AI Recommender (Feature)
│   └── AI Explainer Modal (Feature)
├── Skills.jsx (Section)
│   └── Animated Progress Bars
├── Experience.jsx (Section)
│   └── Timeline Items
├── Contact.jsx (Section)
│   └── Contact Form
├── Footer.jsx (Footer)
└── AIChatbot.jsx (Floating widget)
    ├── Chat Messages
    ├── Quick Questions
    └── Input Field
```

## Technology Stack Map

```
┌─────────────────────────────────────────────────────────────┐
│                    FRONTEND STACK                            │
├─────────────────────────────────────────────────────────────┤
│ React 18.3          → Core UI library                       │
│ Vite 5.2            → Build tool & dev server               │
│ Tailwind CSS 3.4    → Utility-first CSS                     │
│ Framer Motion 11    → Animation library                     │
│ React Icons 5       → Icon components                       │
│ Axios 1.6           → HTTP client                           │
│ React Hot Toast 2.4 → Notifications                         │
│ React Helmet Async  → SEO meta tags                         │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    BACKEND STACK                             │
├─────────────────────────────────────────────────────────────┤
│ Flask 3.0           → Python web framework                  │
│ Flask-CORS 4.0      → Cross-origin requests                 │
│ Python 3.8+         → Backend language                      │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                  DEPLOYMENT STACK                            │
├─────────────────────────────────────────────────────────────┤
│ Vercel              → Hosting platform                      │
│ GitHub              → Version control                       │
│ Git                 → Source control                        │
└─────────────────────────────────────────────────────────────┘
```

## File Structure Visualization

```
Resume/
│
├── 📁 frontend/
│   ├── 📁 src/
│   │   ├── 📁 components/      (9 React components)
│   │   ├── 📄 App.jsx          (Main app component)
│   │   ├── 📄 main.jsx         (Entry point)
│   │   └── 📄 index.css        (Global styles)
│   │
│   ├── 📁 public/              (Static assets)
│   ├── 📄 index.html           (HTML template)
│   ├── 📄 package.json         (Dependencies)
│   ├── 📄 vite.config.js       (Vite config)
│   └── 📄 tailwind.config.js   (Tailwind config)
│
├── 📁 backend/
│   ├── 📄 app.py               (Flask server)
│   ├── 📄 requirements.txt     (Python deps)
│   └── 📄 .env.example         (Env template)
│
├── 📁 .vscode/
│   ├── 📄 settings.json        (Editor settings)
│   └── 📄 extensions.json      (Recommended extensions)
│
├── 📄 vercel.json              (Deployment config)
├── 📄 .gitignore               (Git ignore rules)
├── 📄 setup.ps1                (Setup script)
│
└── 📁 docs/                    (Documentation)
    ├── 📄 README.md
    ├── 📄 DEPLOYMENT.md
    ├── 📄 CUSTOMIZATION.md
    ├── 📄 AI_INTEGRATION.md
    ├── 📄 FEATURES.md
    ├── 📄 COMMANDS.md
    ├── 📄 ARCHITECTURE.md
    └── 📄 PROJECT_SUMMARY.md
```

## API Communication Flow

```
┌──────────────┐         ┌──────────────┐         ┌──────────────┐
│   Browser    │────────▶│ Vite Proxy   │────────▶│ Flask Server │
│  (Frontend)  │         │ :3000 → :5000│         │   (Backend)  │
│              │◀────────│              │◀────────│              │
└──────────────┘   JSON  └──────────────┘   JSON  └──────────────┘

Request Flow:
1. Component calls axios.post('/api/endpoint')
2. Vite proxy intercepts /api/* requests
3. Forwards to Flask backend (localhost:5000)
4. Flask processes request
5. Returns JSON response
6. Vite proxy forwards back
7. Component receives response
8. Updates UI
```

## State Management Flow

```
Component State (useState)
        ↓
User Interaction
        ↓
Event Handler
        ↓
State Update (setState)
        ↓
Re-render Component
        ↓
Update DOM
        ↓
User Sees Change

Example: Chatbot
messages (state) → User types → handleSend() → setMessages() → Re-render → Show new message
```

## Animation Pipeline

```
Component Mounts
        ↓
Framer Motion Detects
        ↓
Apply Initial Animation State
        ↓
Trigger Animation
        ↓
Interpolate Values
        ↓
Update CSS Properties
        ↓
Smooth Transition
        ↓
Final State Reached
```

## Build & Deploy Pipeline

```
Local Development
        ↓
git commit & push to GitHub
        ↓
Vercel detects new commit
        ↓
Vercel starts build
        ↓
Install dependencies (npm install)
        ↓
Build frontend (npm run build)
        ↓
Package backend
        ↓
Deploy to CDN
        ↓
Generate preview URL
        ↓
Run checks
        ↓
Promote to production
        ↓
Live at your-site.vercel.app
```

## Performance Optimization Strategy

```
┌─────────────────────────────────────────────────────────┐
│                CODE SPLITTING                            │
│  ├── Lazy load components                               │
│  ├── Dynamic imports                                    │
│  └── Route-based splitting                              │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│                ASSET OPTIMIZATION                        │
│  ├── Image compression                                  │
│  ├── WebP format                                        │
│  └── Lazy loading images                                │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│                CSS OPTIMIZATION                          │
│  ├── Tailwind purge unused                              │
│  ├── Critical CSS inline                                │
│  └── Minification                                       │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│                API OPTIMIZATION                          │
│  ├── Caching responses                                  │
│  ├── Debouncing requests                                │
│  └── Error handling with fallbacks                      │
└─────────────────────────────────────────────────────────┘
```

## Security Architecture

```
┌─────────────────────────────────────────────────────────┐
│                FRONTEND SECURITY                         │
│  ├── Input validation                                   │
│  ├── XSS prevention (React escapes by default)          │
│  ├── HTTPS only                                         │
│  └── Content Security Policy                            │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│                BACKEND SECURITY                          │
│  ├── CORS configuration                                 │
│  ├── Rate limiting (ready to add)                       │
│  ├── Input sanitization                                 │
│  ├── Environment variables for secrets                  │
│  └── Error handling (no info leakage)                   │
└─────────────────────────────────────────────────────────┘
```

---

This architecture provides:
- ✅ Scalability
- ✅ Maintainability
- ✅ Performance
- ✅ Security
- ✅ Developer experience
- ✅ User experience

**Clean, modern, and production-ready! 🚀**
