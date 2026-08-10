# Deploy to Vercel - Complete Step-by-Step Guide

Follow these exact steps to deploy your Sanity Studio to Vercel.

---

## 📋 Prerequisites

Before you start, you should have:
- ✅ GitHub account (free at https://github.com)
- ✅ Vercel account (free at https://vercel.com)
- ✅ This repository pushed to GitHub

---

## 🚀 Deployment Steps

### STEP 1: Push to GitHub

**In your terminal:**

```bash
cd /Users/macbookpro/Documents/Git/group-design-system

# Add GitHub remote
git remote add origin https://github.com/YOUR-USERNAME/group-design-system.git

# Set branch name
git branch -M main

# Push to GitHub
git push -u origin main
```

**Replace `YOUR-USERNAME`** with your actual GitHub username.

**What to expect:**
- Files upload to GitHub (takes a few seconds)
- You see: `Branch 'main' set up to track remote origin/main`

**Verify:** Visit `https://github.com/YOUR-USERNAME/group-design-system` and confirm your files are there.

---

### STEP 2: Create Vercel Project

**In your browser:**

1. Go to: https://vercel.com/dashboard
2. Log in (or create account if needed)
3. Click **"Add New"** → **"Project"**
   
   ![Click Add New](step-1.png)

4. Click **"Import Git Repository"**
   
   ![Click Import](step-2.png)

5. You'll see a text field to search for repos
6. Type: `group-design-system`
7. Select your repo from the list
8. Click **"Import"** button

---

### STEP 3: Configure Environment Variables

**IMPORTANT: Before clicking Deploy, add environment variables!**

On the import screen, you should see **"Environment Variables"** section:

1. Click on the Environment Variables field
2. Add these two variables:

```
SANITY_STUDIO_PROJECT_ID = q8ijpuq2
SANITY_STUDIO_DATASET = production
```

**Exactly as shown - copy & paste these values**

Your screen should look like:
```
Name: SANITY_STUDIO_PROJECT_ID
Value: q8ijpuq2

Name: SANITY_STUDIO_DATASET
Value: production
```

3. Click **"Add"** if there's an add button, or they auto-add

---

### STEP 4: Deploy

1. After adding environment variables, scroll down
2. Click the **"Deploy"** button
3. Wait for deployment to complete (usually 1-2 minutes)
4. You'll see a success message: **"Congratulations! Your project has been successfully deployed"**

---

### STEP 5: Get Your Studio URL

**After deployment completes:**

1. Vercel shows your project page
2. At the top, you see your production URL
3. It looks like: `https://group-design-system-abc123.vercel.app`
4. **Copy this URL** - this is your new studio URL!

---

### STEP 6: Configure Sanity CORS

Now tell Sanity about your new studio:

1. Go to: https://manage.sanity.io
2. Select project: `q8ijpuq2`
3. Click **"Settings"** (gear icon)
4. Click **"API"** in sidebar
5. Scroll to **"CORS origins"**
6. Click **"Add CORS origin"**
7. Paste your Vercel URL:
   ```
   https://your-project-name.vercel.app
   ```
8. Set **"Allow credentials"** to ✅ **ON**
9. Click **"Save"**

---

### STEP 7: Access Your Studio

**Visit your new studio URL:**

```
https://your-project-name.vercel.app
```

You should see the Sanity Studio login screen!

Log in with your Sanity account and you're ready to create content.

---

## ✅ Verify It Works

### Test 1: Studio Loads
- [ ] Visit your Vercel URL
- [ ] Sanity Studio interface appears
- [ ] You can log in

### Test 2: Create Content
- [ ] Click "Components" in sidebar
- [ ] Click "Create new"
- [ ] Add a test component
- [ ] Click "Publish"

### Test 3: Content Appears in API
- [ ] Open terminal
- [ ] Run: `curl http://localhost:3000/api/components`
- [ ] Should return JSON with your component

### Test 4: Multiple Content Types
- [ ] Create a Foundation
- [ ] Create a Resource
- [ ] Visit APIs to verify

---

## 🎉 Success!

If all tests pass:
- ✅ Your Sanity Studio is live
- ✅ Your Next.js app can fetch content
- ✅ You can create/edit/publish content
- ✅ Your team can use it too

---

## 🆘 Troubleshooting

### Issue: "Studio not found" on Vercel URL

**Cause:** Deployment still in progress or environment variables missing

**Solution:**
1. Wait 2 minutes
2. Refresh page: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
3. Check environment variables in Vercel project settings
4. If missing, redeploy with variables

### Issue: "Cannot authenticate" in Studio

**Cause:** CORS not configured or wrong project ID

**Solution:**
1. Check Sanity settings → API → CORS origins
2. Verify your Vercel URL is added
3. Verify it has `Allow credentials` enabled
4. Check project ID is `q8ijpuq2`

### Issue: Studio loads but no content appears

**Cause:** Content not created yet

**Solution:**
1. Create a component in studio
2. Publish it
3. Test API: `curl http://localhost:3000/api/components`

### Issue: Build failed on Vercel

**Cause:** Environment variables or dependencies

**Solution:**
1. Go to Vercel project
2. Click failed deployment
3. Scroll to see error logs
4. Add missing environment variables if needed
5. Click "Redeploy"

### Issue: "git remote already exists"

**Cause:** You ran git remote add twice

**Solution:**
```bash
git remote remove origin
git remote add origin https://github.com/YOUR-USERNAME/group-design-system.git
git push -u origin main
```

---

## 📝 Your Studio URLs

| URL Type | URL |
|----------|-----|
| **Studio** | `https://your-project-name.vercel.app` |
| **GitHub** | `https://github.com/YOUR-USERNAME/group-design-system` |
| **Vercel Dashboard** | `https://vercel.com/dashboard` |
| **Sanity Project** | `https://manage.sanity.io` |
| **Dev Server** | `http://localhost:3000` |
| **API** | `http://localhost:3000/api/components` |

---

## 🔄 Redeploy After Changes

If you modify schema or code:

1. **Commit changes:**
   ```bash
   git add -A
   git commit -m "Your message"
   git push origin main
   ```

2. **Vercel auto-redeploys** when you push to main

3. **Wait 1-2 minutes** for deployment

4. **Your changes are live!**

---

## 📚 Quick Reference

| Action | Command/URL |
|--------|-------------|
| Push to GitHub | `git push origin main` |
| View Vercel Dashboard | https://vercel.com/dashboard |
| Redeploy | Click "Redeploy" in Vercel project settings |
| View Logs | Click deployment → Scroll down for logs |
| Add Env Vars | Project Settings → Environment Variables |

---

## ✨ You're Done!

Your Sanity Studio is now deployed and ready for:
- ✅ Content creation
- ✅ Team collaboration
- ✅ API access from your Next.js app
- ✅ Production use

**Share your studio URL** with your team and they can start creating content immediately!

---

## 📞 Support

- **Vercel Docs:** https://vercel.com/docs
- **Sanity Docs:** https://www.sanity.io/docs
- **GitHub Docs:** https://docs.github.com

---

**Your studio is live at:**
```
https://your-project-name.vercel.app
```

Have fun creating content! 🚀
