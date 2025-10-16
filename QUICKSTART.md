# ⚡ Quick Start Guide - Get Running in 5 Minutes!

## 🎯 Goal
Get your AI-powered portfolio running locally in under 5 minutes.

## ✅ Prerequisites Check

Before starting, make sure you have:
- [ ] Node.js installed (v16+) - Check: `node --version`
- [ ] Python installed (v3.8+) - Check: `python --version`
- [ ] PowerShell or Command Prompt open

## 🚀 Step-by-Step Setup

### Step 1: Install Dependencies (2 minutes)

**Option A: Automated (Recommended)**
```powershell
.\setup.ps1
```

**Option B: Manual**
```powershell
# Frontend dependencies
npm install

# Backend dependencies
cd backend
python -m venv venv
.\venv\Scripts\Activate.ps1
pip install -r requirements.txt
cd ..
```

### Step 2: Start Servers (1 minute)

**Open TWO terminals:**

**Terminal 1 - Backend:**
```powershell
cd backend
.\venv\Scripts\Activate.ps1
python app.py
```
✅ Should see: `Running on http://127.0.0.1:5000`

**Terminal 2 - Frontend:**
```powershell
npm run dev
```
✅ Should see: `Local: http://localhost:3000`

### Step 3: Open Browser (5 seconds)

Navigate to: **http://localhost:3000**

🎉 **Done!** Your portfolio is running!

---

## 🎨 First Customizations (5 minutes)

### Update Your Name
📁 `src/components/Hero.jsx`
```jsx
// Line 62
<span className="gradient-text">Your Name Here</span>
```

### Update Email
📁 `src/components/Contact.jsx`
```jsx
// Line 14
value: 'your.email@example.com',
```

### Update GitHub
📁 `src/components/Hero.jsx`
```jsx
// Line 118
href="https://github.com/YOUR_USERNAME"
```

### Update Backend Data
📁 `backend/app.py`
```python
# Lines 7-50
PORTFOLIO_DATA = {
    'name': 'Your Name',
    'email': 'your.email@example.com',
    # ... update all fields
}
```

---

## 🧪 Test Features (2 minutes)

### Test 1: AI Chatbot
1. Click the chat button (bottom right)
2. Ask: "What are your skills?"
3. ✅ Should get an intelligent response

### Test 2: AI Bio Generator
1. Scroll to About section
2. Click "Generate Bio"
3. ✅ Should see a professional bio

### Test 3: Project Recommender
1. Scroll to Projects section
2. Type: "AI projects"
3. Click "Recommend"
4. ✅ Should highlight AI-related projects

### Test 4: Project Explainer
1. Click "Explain with AI" on any project
2. ✅ Should open a modal with detailed explanation

### Test 5: Contact Form
1. Scroll to Contact section
2. Fill out the form
3. Click "Send Message"
4. ✅ Should show success notification

---

## 🚀 Deploy to Vercel (3 minutes)

### Option 1: Vercel CLI
```powershell
npm install -g vercel
vercel login
vercel
```
Follow prompts → Done!

### Option 2: GitHub + Vercel Dashboard
1. Push to GitHub:
```powershell
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_REPO_URL
git push -u origin main
```

2. Go to https://vercel.com
3. Click "New Project"
4. Import your GitHub repo
5. Click "Deploy"
6. ✅ Live in 2 minutes!

---

## 🐛 Troubleshooting

### Issue: "npm install" fails
**Solution:**
```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

### Issue: Python venv not activating
**Solution:**
```powershell
# Run PowerShell as Administrator
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
# Then try again
.\venv\Scripts\Activate.ps1
```

### Issue: Port 3000 already in use
**Solution:**
```powershell
# Find process
netstat -ano | findstr :3000
# Kill process (replace PID)
Stop-Process -Id PID -Force
# Or use different port in vite.config.js
```

### Issue: Backend not responding
**Solution:**
```powershell
# Check if running
curl http://localhost:5000/api/health
# Restart backend
cd backend
python app.py
```

### Issue: Styling not working
**Solution:**
```powershell
# Rebuild
npm run build
npm run dev
```

---

## 📱 View on Mobile

1. On your computer, find IP address:
```powershell
ipconfig
# Look for IPv4 Address (e.g., 192.168.1.5)
```

2. Update `vite.config.js`:
```javascript
server: {
  host: '0.0.0.0',  // Add this line
  port: 3000,
  // ...
}
```

3. Restart frontend server

4. On mobile browser: `http://YOUR_IP:3000`

---

## 📊 Development Workflow

### Daily Development
```powershell
# Start backend (Terminal 1)
cd backend
.\venv\Scripts\Activate.ps1
python app.py

# Start frontend (Terminal 2)
npm run dev

# Make changes → Save → Auto-reload ✅
```

### Adding New Features
1. Create component in `src/components/`
2. Import in `src/App.jsx`
3. Add backend endpoint in `backend/app.py` (if needed)
4. Test locally
5. Commit and deploy

### Before Deploying
```powershell
# Test build
npm run build
npm run preview

# Test backend
cd backend
python app.py
# Test all endpoints

# All good? Deploy!
vercel --prod
```

---

## 🎯 Next Steps After Setup

### Immediate (Today)
- [ ] Update all personal information
- [ ] Test all features
- [ ] Customize colors if desired
- [ ] Add your profile picture
- [ ] Deploy to Vercel

### Soon (This Week)
- [ ] Add more projects
- [ ] Customize AI responses
- [ ] Add real project images
- [ ] Test on different devices
- [ ] Share with friends for feedback

### Later (Optional)
- [ ] Integrate real AI API (OpenAI/Gemini)
- [ ] Add Google Analytics
- [ ] Set up custom domain
- [ ] Add blog section
- [ ] Add downloadable resume PDF

---

## 📚 Documentation Reference

- **General Info**: README.md
- **Deployment**: DEPLOYMENT.md
- **Customization**: CUSTOMIZATION.md
- **AI Setup**: AI_INTEGRATION.md
- **All Features**: FEATURES.md
- **Commands**: COMMANDS.md
- **Architecture**: ARCHITECTURE.md

---

## 💡 Pro Tips

### Tip 1: Keep Terminals Open
Don't close backend terminal - keep both running while developing

### Tip 2: Use VS Code
Opens both terminals: `code .`

### Tip 3: Git Commit Often
```powershell
git add .
git commit -m "Description of changes"
```

### Tip 4: Test Before Deploy
Always run `npm run build` locally first

### Tip 5: Check Vercel Logs
If deployment fails: `vercel logs`

---

## ⏱️ Time Estimate Summary

| Task | Time |
|------|------|
| Install dependencies | 2 min |
| Start servers | 1 min |
| First customization | 5 min |
| Test features | 2 min |
| Deploy to Vercel | 3 min |
| **Total** | **~13 min** |

---

## ✅ Success Checklist

After following this guide, you should have:
- [x] Project running locally
- [x] Backend responding at :5000
- [x] Frontend running at :3000
- [x] All AI features working
- [x] Personal info updated
- [x] Deployed to Vercel (optional)

---

## 🎉 You're All Set!

Your AI-powered portfolio is now running!

**Questions?** Check the documentation files or the troubleshooting section above.

**Ready to show the world?** Deploy and share your link!

---

**Remember**: This portfolio showcases YOUR skills. Make it uniquely yours! 🚀

*Built with ❤️ and AI*
