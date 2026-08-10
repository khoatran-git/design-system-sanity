# Deploy Sanity Studio to Vercel

This guide walks you through deploying the Sanity Studio to Vercel.

## Prerequisites

- Sanity account (free at https://www.sanity.io)
- Vercel account (free at https://vercel.com)
- GitHub account with this repo pushed

## Step-by-Step Deployment

### Step 1: Push to GitHub

First, make sure the `group-design-system` folder is pushed to GitHub:

```bash
cd /Users/macbookpro/Documents/Git/group-design-system

# Initialize git if needed
git init

# Add remote (use your repo URL)
git remote add origin https://github.com/YOUR-USERNAME/group-design-system.git

# Push to GitHub
git add -A
git commit -m "Initial Sanity Studio setup"
git branch -M main
git push -u origin main
```

### Step 2: Create New Vercel Project

1. Go to https://vercel.com/dashboard
2. Click **"Add New"** → **"Project"**
3. Click **"Import Git Repository"**
4. Search for and select your `group-design-system` repo
5. Click **"Import"**

### Step 3: Configure Environment Variables

In the Vercel import screen, before clicking deploy:

1. Under **"Environment Variables"**, add:
   ```
   SANITY_STUDIO_PROJECT_ID = q8ijpuq2
   SANITY_STUDIO_DATASET = production
   ```

2. Click **"Deploy"**

Vercel will build and deploy your studio.

### Step 4: Get Your Studio URL

After deployment completes:

1. Go to your Vercel project dashboard
2. Copy the **Production URL** (e.g., `https://your-project.vercel.app`)
3. This is your new studio URL!

### Step 5: Configure Sanity Dashboard

Now tell Sanity about your custom studio URL:

1. Go to https://manage.sanity.io
2. Select project `q8ijpuq2`
3. Go to **Settings** → **API** → **CORS origins**
4. Add your Vercel URL:
   ```
   https://your-project.vercel.app
   ```
5. Click **"Save"**

### Step 6: Access Your Studio

Visit your new studio URL (from Step 4) and log in!

You should see the Sanity Studio interface with your:
- Components
- Foundations
- Resources

---

## Verify Deployment

1. Visit your studio URL
2. Log in with Sanity account
3. Click "Components"
4. Try creating a new component
5. Publish it

Then check your Next.js app API:
```bash
curl http://localhost:3000/api/components
```

You should see your component in the response!

---

## If Deployment Fails

### Issue: "Build failed"

Check the Vercel build logs:
1. Go to your Vercel project
2. Click on the failed deployment
3. Scroll down to see error messages

### Issue: "Studio not found"

This usually means:
- Sanity project ID is wrong
- Environment variables not set
- Deployment still in progress

**Solution:**
1. Wait 2-3 minutes for deployment to complete
2. Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
3. Check environment variables in Vercel settings

### Issue: "Cannot authenticate"

Make sure:
1. Your Sanity account is logged in
2. Project ID (q8ijpuq2) is correct
3. CORS origins added in Sanity settings

---

## Redeploy After Changes

If you modify the schema or config:

1. Commit changes:
   ```bash
   git add -A
   git commit -m "Update schema"
   git push origin main
   ```

2. Vercel automatically redeploys
3. Wait for build to complete
4. Your studio updates!

---

## Environment Variables Reference

| Variable | Value | Required |
|----------|-------|----------|
| SANITY_STUDIO_PROJECT_ID | q8ijpuq2 | ✅ Yes |
| SANITY_STUDIO_DATASET | production | ✅ Yes |

---

## Support

- **Vercel Docs:** https://vercel.com/docs
- **Sanity Docs:** https://www.sanity.io/docs
- **Deployment Guide:** https://www.sanity.io/docs/deployment

---

**Your studio URL will be:** `https://your-project-name.vercel.app`

Once deployed, share this URL with your team to start creating content!
