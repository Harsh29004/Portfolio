# 🚀 Quick Deployment Guide

## Prerequisites
- Node.js installed
- Python 3.8+ installed
- Git installed
- Vercel account (free)

## Local Development

### Step 1: Install Dependencies

```powershell
# Install frontend dependencies
npm install

# Install backend dependencies
cd backend
python -m venv venv
.\venv\Scripts\activate
pip install -r requirements.txt
cd ..
```

### Step 2: Run Development Servers

**Terminal 1 - Backend:**
```powershell
cd backend
.\venv\Scripts\activate
python app.py
```

**Terminal 2 - Frontend:**
```powershell
npm run dev
```

Visit: http://localhost:3000

## Deploy to Vercel

### Method 1: Vercel CLI (Recommended)

```powershell
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Follow prompts and deploy!
```

### Method 2: GitHub + Vercel Dashboard

1. **Push to GitHub**
```powershell
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

2. **Connect to Vercel**
- Go to https://vercel.com
- Click "New Project"
- Import your GitHub repository
- Configure:
  - Framework Preset: Vite
  - Build Command: `npm run build`
  - Output Directory: `dist`
- Add Environment Variables (optional):
  - `FLASK_ENV=production`
- Click "Deploy"

3. **Done!** Your site will be live at `your-project.vercel.app`

## Customization Checklist

Before deploying, customize these files:

### 1. Personal Information
- [ ] Update name, email, links in all components
- [ ] Update `backend/app.py` PORTFOLIO_DATA
- [ ] Update meta tags in `index.html`

### 2. Projects
- [ ] Add your actual projects in `src/components/Projects.jsx`
- [ ] Update project data in `backend/app.py`

### 3. Skills
- [ ] Modify skills list in `src/components/Skills.jsx`

### 4. Experience
- [ ] Update certifications in `src/components/Experience.jsx`

### 5. SEO
- [ ] Update site title, description in `index.html`
- [ ] Update schema data in `src/App.jsx`

## Production Checklist

- [ ] Test all features locally
- [ ] Update all personal information
- [ ] Test contact form
- [ ] Test AI chatbot
- [ ] Check responsive design
- [ ] Test on different browsers
- [ ] Verify all links work
- [ ] Check loading performance
- [ ] Deploy!

## Environment Variables (Optional)

For enhanced AI features, add these in Vercel:

```
OPENAI_API_KEY=your_key_here
GOOGLE_GEMINI_API_KEY=your_key_here
```

## Post-Deployment

1. **Test your live site**
   - Check all sections load
   - Test AI features
   - Submit contact form
   - Test chatbot

2. **Share your portfolio**
   - Add link to resume
   - Share on LinkedIn
   - Add to GitHub profile

3. **Monitor analytics** (optional)
   - Add Google Analytics
   - Track visitor metrics

## Troubleshooting

### Frontend not loading
- Check Vercel build logs
- Verify `dist` folder is generated
- Check `vite.config.js`

### Backend API errors
- Vercel automatically handles Python
- Check `vercel.json` configuration
- Verify `backend/app.py` is correct

### Styling issues
- Run `npm run build` locally first
- Check Tailwind configuration
- Clear browser cache

## Support

Need help? Check:
- README.md for detailed docs
- GitHub Issues for common problems
- Vercel docs for deployment issues

---

**Ready to impress recruiters? Deploy now! 🚀**
