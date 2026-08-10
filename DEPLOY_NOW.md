# Deploy Sanity Studio to Vercel - Quick Start

## 🎯 What You Need to Do

### Step 1: Create GitHub Repository (5 minutes)

1. Go to: https://github.com/new
2. Name it: `group-design-system`
3. Click "Create repository"
4. Copy the HTTPS URL (looks like `https://github.com/your-username/group-design-system.git`)

### Step 2: Push Code to GitHub (2 minutes)

```bash
cd /Users/macbookpro/Documents/Git/group-design-system

git remote add origin https://github.com/YOUR-USERNAME/group-design-system.git
git branch -M main
git push -u origin main
```

Replace `YOUR-USERNAME` with your actual GitHub username.

### Step 3: Deploy to Vercel (3 minutes)

1. Go to: https://vercel.com/new
2. Click "Import Git Repository"
3. Select your `group-design-system` repo
4. Before clicking Deploy, add these **Environment Variables**:
   ```
   SANITY_STUDIO_PROJECT_ID = q8ijpuq2
   SANITY_STUDIO_DATASET = production
   ```
5. Click "Deploy"
6. Wait for deployment to complete (usually 1-2 minutes)

### Step 4: Get Your Studio URL

After deployment:
1. Vercel shows your URL (e.g., `https://group-design-system.vercel.app`)
2. Copy this URL
3. Visit it - your studio should load!

---

## ⚡ Total Time: ~10 minutes

---

## 🆘 If You Get Stuck

| Problem | Solution |
|---------|----------|
| "fatal: remote origin already exists" | Run: `git remote remove origin` first |
| "Studio not found" on Vercel URL | Wait 2 minutes, then refresh the page |
| "Cannot authenticate" | Make sure Sanity project ID is correct: `q8ijpuq2` |

---

## 📍 Your Final Studio URL

Once deployed, you'll access Sanity at:
```
https://your-project-name.vercel.app
```

This replaces the old URL that wasn't working.

---

## 📚 Full Guides

- See `GITHUB_SETUP.md` for detailed GitHub instructions
- See `VERCEL_DEPLOYMENT.md` for detailed Vercel instructions
