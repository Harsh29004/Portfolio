# 🔧 Helpful Commands Reference

## Development Commands

### Frontend

```powershell
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Clean install (if issues occur)
Remove-Item -Recurse -Force node_modules
npm install
```

### Backend

```powershell
# Create virtual environment
cd backend
python -m venv venv

# Activate virtual environment (Windows PowerShell)
.\venv\Scripts\Activate.ps1

# Activate virtual environment (Command Prompt)
venv\Scripts\activate.bat

# Install dependencies
pip install -r requirements.txt

# Run Flask server (http://localhost:5000)
python app.py

# Deactivate virtual environment
deactivate

# Update dependencies
pip freeze > requirements.txt

# Check Flask is working
curl http://localhost:5000/api/health
```

## Git Commands

```powershell
# Initialize repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: AI-powered portfolio"

# Create main branch
git branch -M main

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push to GitHub
git push -u origin main

# Check status
git status

# View commit history
git log --oneline

# Create new branch
git checkout -b feature/new-feature

# Switch branch
git checkout main

# Pull latest changes
git pull origin main
```

## Vercel Commands

```powershell
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod

# Check deployment status
vercel ls

# View logs
vercel logs

# Remove deployment
vercel remove PROJECT_NAME

# Link to existing project
vercel link

# Pull environment variables
vercel env pull

# Add environment variable
vercel env add VARIABLE_NAME
```

## Package Management

```powershell
# Update npm
npm install -g npm@latest

# Check for outdated packages
npm outdated

# Update all packages
npm update

# Update specific package
npm update package-name

# Install new package
npm install package-name

# Install as dev dependency
npm install --save-dev package-name

# Uninstall package
npm uninstall package-name

# Check package version
npm list package-name

# Clear npm cache
npm cache clean --force
```

## Python/pip Commands

```powershell
# Check Python version
python --version

# Check pip version
pip --version

# Upgrade pip
python -m pip install --upgrade pip

# Install specific version
pip install package-name==1.0.0

# Install from requirements
pip install -r requirements.txt

# List installed packages
pip list

# Show package details
pip show package-name

# Uninstall package
pip uninstall package-name

# Search for package
pip search package-name

# Create requirements file
pip freeze > requirements.txt
```

## Testing Commands

```powershell
# Test frontend build
npm run build
npm run preview

# Test backend
cd backend
python -c "from app import app; print('Backend OK')"

# Test API endpoints
# (with backend running)
curl http://localhost:5000/api/health
curl -X POST http://localhost:5000/api/generate-bio
curl -X POST http://localhost:5000/api/chatbot -H "Content-Type: application/json" -d '{\"message\":\"What are your skills?\"}'

# Check for broken links (install linkchecker)
pip install linkchecker
linkchecker http://localhost:3000
```

## Debugging Commands

```powershell
# Check Node version
node --version

# Check npm version
npm --version

# Check Python version
python --version

# Check if port is in use
netstat -ano | findstr :3000
netstat -ano | findstr :5000

# Kill process on port (replace PID)
Stop-Process -Id PID -Force

# View environment variables
Get-ChildItem Env:

# Clear VS Code cache
Remove-Item -Recurse -Force $env:APPDATA\Code\Cache
Remove-Item -Recurse -Force $env:APPDATA\Code\CachedData

# Restart VS Code with clean slate
code --disable-extensions
```

## Build & Optimization

```powershell
# Analyze bundle size
npm run build
npm install -g source-map-explorer
source-map-explorer dist/assets/*.js

# Check bundle
npm run build
ls -R dist

# Optimize images (if you add any)
npm install -g imagemin-cli
imagemin public/*.png --out-dir=public/optimized
```

## Linting & Formatting

```powershell
# Install ESLint
npm install --save-dev eslint

# Initialize ESLint
npx eslint --init

# Run ESLint
npx eslint src/**/*.jsx

# Install Prettier
npm install --save-dev prettier

# Format all files
npx prettier --write "src/**/*.{js,jsx,json,css}"

# Check Python code (install first: pip install pylint black)
pylint backend/app.py
black backend/app.py
```

## Performance Testing

```powershell
# Install Lighthouse CLI
npm install -g @lhci/cli

# Run Lighthouse audit
lhci autorun --collect.url=http://localhost:3000

# Check load time
curl -o /dev/null -s -w "Time: %{time_total}s\n" http://localhost:3000
```

## Database Commands (if you add one later)

```powershell
# SQLite
sqlite3 database.db

# MongoDB (if installed)
mongod --dbpath=./data
mongo

# PostgreSQL (if installed)
psql -U username -d database_name
```

## Docker Commands (if you containerize)

```powershell
# Build image
docker build -t portfolio .

# Run container
docker run -p 3000:3000 portfolio

# List containers
docker ps

# Stop container
docker stop CONTAINER_ID

# Remove container
docker rm CONTAINER_ID

# Remove image
docker rmi portfolio
```

## Useful One-Liners

```powershell
# Quick development start (both servers)
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd backend; .\venv\Scripts\Activate.ps1; python app.py"; npm run dev

# Check if dependencies are installed
if (Test-Path node_modules) { "Frontend OK" } else { "Run npm install" }
if (Test-Path backend/venv) { "Backend OK" } else { "Run setup script" }

# Quick deploy
git add .; git commit -m "Update"; git push; vercel --prod

# View all npm scripts
npm run

# Count lines of code
(Get-ChildItem -Recurse -Include *.jsx,*.js,*.py | Select-String .).Count

# Find TODO comments
Get-ChildItem -Recurse -Include *.jsx,*.js,*.py | Select-String "TODO"

# Check file sizes
Get-ChildItem dist -Recurse | Measure-Object -Property Length -Sum

# Create backup
$date = Get-Date -Format "yyyy-MM-dd"
Compress-Archive -Path . -DestinationPath "../portfolio-backup-$date.zip"
```

## Environment Variables

```powershell
# Set environment variable (current session)
$env:VARIABLE_NAME = "value"

# Set environment variable (permanent)
[System.Environment]::SetEnvironmentVariable("VARIABLE_NAME", "value", "User")

# View environment variable
echo $env:VARIABLE_NAME

# View all environment variables
Get-ChildItem Env:

# Remove environment variable
Remove-Item Env:\VARIABLE_NAME
```

## Troubleshooting Commands

```powershell
# Clear npm cache
npm cache clean --force

# Clear node modules and reinstall
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install

# Reset Git (careful!)
git reset --hard HEAD

# Check disk space
Get-PSDrive

# Check system info
systeminfo

# Network diagnostics
ipconfig /all
ping google.com
tracert google.com

# Test DNS
nslookup vercel.com

# Check firewall
Get-NetFirewallRule | Where-Object {$_.Enabled -eq 'True'}
```

## VS Code Commands

```powershell
# Open in VS Code
code .

# Install extensions from command line
code --install-extension dbaeumer.vscode-eslint
code --install-extension esbenp.prettier-vscode
code --install-extension bradlc.vscode-tailwindcss

# List installed extensions
code --list-extensions

# Disable all extensions
code --disable-extensions
```

## Quick Reference Scripts

### Start Everything (save as start-dev.ps1)
```powershell
# Start backend in new window
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd backend; .\venv\Scripts\Activate.ps1; python app.py"

# Wait a moment
Start-Sleep -Seconds 2

# Start frontend
npm run dev
```

### Deploy (save as deploy.ps1)
```powershell
Write-Host "Building project..." -ForegroundColor Cyan
npm run build

Write-Host "Deploying to Vercel..." -ForegroundColor Cyan
vercel --prod

Write-Host "Deployment complete!" -ForegroundColor Green
```

### Backup (save as backup.ps1)
```powershell
$date = Get-Date -Format "yyyy-MM-dd-HHmm"
$backupName = "portfolio-backup-$date.zip"

Write-Host "Creating backup: $backupName" -ForegroundColor Cyan
Compress-Archive -Path . -DestinationPath "../$backupName" -Force

Write-Host "Backup created successfully!" -ForegroundColor Green
```

---

## 📌 Quick Start Reminder

```powershell
# Terminal 1 - Backend
cd backend
.\venv\Scripts\Activate.ps1
python app.py

# Terminal 2 - Frontend
npm run dev

# Open browser: http://localhost:3000
```

## 🚀 Deploy Reminder

```powershell
vercel login
vercel --prod
```

---

**Save this file for quick reference! 📚**
