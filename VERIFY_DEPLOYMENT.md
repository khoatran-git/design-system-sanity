# Verify Sanity Studio Deployment

This guide walks you through verifying that your Sanity Studio is successfully deployed and working on Vercel.

---

## 📋 Pre-Verification Checklist

Before verifying, confirm you've completed:
- [ ] Code pushed to GitHub
- [ ] Vercel deployment completed
- [ ] Environment variables set in Vercel
- [ ] CORS origins added in Sanity settings

---

## ✅ Verification Steps

### Step 1: Check Vercel Deployment Status

**In Vercel Dashboard:**

1. Go to: https://vercel.com/dashboard
2. Click your `group-design-system` project
3. Look for **Deployments** section
4. Find the latest deployment
5. Status should be **"Ready"** (green checkmark)

**What you're looking for:**
```
✓ Ready – Deployed to Production
Created 2 minutes ago
```

If status is "Building", wait a few minutes and refresh.

---

### Step 2: Get Your Studio URL

**In Vercel Project Page:**

1. At the top, you see the **Production URL**
2. It looks like: `https://group-design-system-abc123.vercel.app`
3. **Copy this URL** - you'll use it to access your studio

---

### Step 3: Visit Your Studio URL

**In your browser:**

1. Paste your Vercel URL
2. Hit Enter

**You should see:**
- Sanity Studio interface
- Login screen
- Or (if already logged in) the studio dashboard

**Example:** `https://group-design-system-abc123.vercel.app`

---

### Step 4: Log In to Studio

1. If you see a login screen, click **"Log in with Sanity"**
2. Enter your Sanity credentials (or SSO)
3. You should be logged in

**You should see:**
- Studio header with "Group Design System"
- Left sidebar with: Components, Foundations, Resources
- Main content area

---

### Step 5: Verify You Can Create Content

**Create a test component:**

1. Click **"Components"** in left sidebar
2. Click **"Create new"** button
3. Fill in:
   - **Name:** "Test Button"
   - **Slug:** (auto-fills as "test-button")
   - **Description:** "Test component"
4. Click **"Publish"** button
5. Confirm publish

**What happens:**
- Component saves to Sanity
- You see a success message
- Component appears in list

---

### Step 6: Verify API Access

**Test your Next.js API:**

1. Open terminal
2. Run this command:
   ```bash
   curl http://localhost:3000/api/components
   ```

**You should see:**
```json
{
  "data": [
    {
      "_id": "...",
      "name": "Test Button",
      "slug": { "current": "test-button" },
      ...
    }
  ],
  "status": "success",
  ...
}
```

If you see your "Test Button" component, **it works!** ✅

---

### Step 7: Clean Up Test Content

**Delete the test component:**

1. Go back to Studio
2. Click "Components"
3. Find "Test Button"
4. Click it to open
5. Click menu (three dots) → "Delete"
6. Confirm deletion

---

## 📊 Verification Checklist

| Check | Status | Notes |
|-------|--------|-------|
| Vercel deployment ready | ✅ | Green checkmark in Vercel |
| Studio URL accessible | ✅ | Loads without errors |
| Can log in | ✅ | Authenticated to Sanity |
| Can create content | ✅ | Component published |
| API returns content | ✅ | curl shows JSON |
| Test content deleted | ✅ | Cleaned up |

---

## 🎉 Success Indicators

Your deployment is **successful** if:

✅ Studio loads at your Vercel URL  
✅ You can log in with Sanity account  
✅ You can create and publish content  
✅ API endpoint returns your content  
✅ Content syncs between studio and API  

---

## 🆘 Troubleshooting

### Issue: "Studio not found" (404 error)

**Causes & Solutions:**
1. **Deployment still in progress**
   - Wait 2-3 minutes
   - Refresh page

2. **Wrong URL**
   - Copy from Vercel dashboard (not bookmarked)
   - URL changes with each deployment

3. **Environment variables missing**
   - Check Vercel: Settings → Environment Variables
   - Must have: `SANITY_STUDIO_PROJECT_ID` and `SANITY_STUDIO_DATASET`
   - If missing, redeploy

### Issue: "Cannot authenticate" or blank screen

**Causes & Solutions:**
1. **CORS not configured**
   - Go to Sanity: Manage → Settings → API → CORS origins
   - Add your Vercel URL
   - Enable "Allow credentials"

2. **Wrong project ID**
   - Check: `SANITY_STUDIO_PROJECT_ID=q8ijpuq2`
   - Go to Vercel environment variables
   - Verify value is exactly: `q8ijpuq2`

3. **Browser cache**
   - Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
   - Try incognito/private window

### Issue: API returns empty array

**Cause:** Content not published yet

**Solution:**
1. Create content in studio
2. Make sure **Status is "Published"**
3. Click "Publish" button
4. Wait 2 seconds
5. Test API again

### Issue: "Build failed" in Vercel

**Cause:** Build error during deployment

**Solution:**
1. Go to Vercel → Deployment → Logs
2. Scroll down to see error message
3. Common issues:
   - Missing Node modules: run `npm install` locally
   - Missing environment variables: add to Vercel settings
4. Fix the issue
5. Commit and push to redeploy

---

## 📝 Test Commands

### Test Studio Access
```bash
# Should return HTML (Sanity Studio interface)
curl https://your-project-name.vercel.app
```

### Test API Endpoint
```bash
# Should return JSON with components
curl http://localhost:3000/api/components
```

### Test Single Component
```bash
# Replace 'test-button' with actual component slug
curl http://localhost:3000/api/components/test-button
```

---

## 🔄 What to Do Next

### If Verification ✅ Passes:
1. **Share your studio URL** with your team
2. **Create real content** in studio
3. **Build UI components** in your Next.js app to display content
4. **Deploy your Next.js app** when ready

### If Verification ❌ Fails:
1. **Check troubleshooting** above
2. **Review environment variables**
3. **Check CORS settings** in Sanity
4. **Wait and refresh** (deployment takes time)
5. **Redeploy** if needed

---

## 📚 Your URLs

| Purpose | URL |
|---------|-----|
| **Studio** | `https://your-project-name.vercel.app` |
| **GitHub Repo** | `https://github.com/YOUR-USERNAME/group-design-system` |
| **Vercel Project** | `https://vercel.com/dashboard/your-project-name` |
| **Sanity Project** | `https://manage.sanity.io` |
| **Dev Next.js** | `http://localhost:3000` |
| **API Endpoint** | `http://localhost:3000/api/components` |

---

## ✨ Congratulations!

If your studio is accessible and working, you now have:

✅ **Professional Sanity Studio** deployed on Vercel  
✅ **Live content management** for your team  
✅ **API integration** with your Next.js app  
✅ **Production-ready** infrastructure  

Your Group Design System is now complete and ready for content creation!

---

## 📞 Support

- **Vercel Status:** https://status.vercel.com
- **Sanity Status:** https://status.sanity.io
- **Vercel Docs:** https://vercel.com/docs
- **Sanity Docs:** https://www.sanity.io/docs

---

**Your studio is live! 🚀**
