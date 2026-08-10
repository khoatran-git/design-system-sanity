# Push Sanity Studio to GitHub

This guide explains how to push the `group-design-system` folder to GitHub.

## Option 1: Create New Repository on GitHub (Recommended)

### Step 1: Create Repository on GitHub

1. Go to https://github.com/new
2. Fill in:
   - **Repository name:** `group-design-system` (or your preferred name)
   - **Description:** "Sanity Studio for Group Design System"
   - **Visibility:** Public or Private (your choice)
3. Click **"Create repository"**
4. DO NOT initialize with README (we already have files)

### Step 2: Add Remote and Push

```bash
cd /Users/macbookpro/Documents/Git/group-design-system

# Add GitHub as remote
git remote add origin https://github.com/YOUR-USERNAME/group-design-system.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username.

### Step 3: Verify

Visit: `https://github.com/YOUR-USERNAME/group-design-system`

You should see all your files!

---

## Option 2: Push to Existing Repository

If you want to add this as a subfolder to an existing repo:

```bash
cd /Users/macbookpro/Documents/Git/group-design-system

# Add remote to your existing repo
git remote add origin https://github.com/YOUR-USERNAME/your-existing-repo.git

# Push this branch
git push origin main
```

---

## Option 3: Add to Your Main Design System Repo

To add this as part of the main `design-system` repo:

```bash
cd /Users/macbookpro/Documents/Git/group-design-system

# Add the main repo as remote
git remote add origin https://github.com/khoatran-git/design-system.git

# Push
git push origin main
```

---

## Quick Commands (Copy-Paste)

### For new repo (recommended):

```bash
cd /Users/macbookpro/Documents/Git/group-design-system
git remote add origin https://github.com/YOUR-USERNAME/group-design-system.git
git branch -M main
git push -u origin main
```

### For existing repo:

```bash
cd /Users/macbookpro/Documents/Git/group-design-system
git remote add origin https://github.com/YOUR-USERNAME/your-repo.git
git push origin main
```

---

## After Pushing to GitHub

### Option A: Deploy from GitHub to Vercel

1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Select your `group-design-system` repo
4. Add environment variables (see VERCEL_DEPLOYMENT.md)
5. Click "Deploy"

### Option B: Use GitHub Link in Vercel

If you already have a Vercel account:

1. Go to Vercel Dashboard
2. Click "Add New" → "Project"
3. Select your GitHub repo
4. Configure and deploy

---

## Troubleshooting

### "fatal: remote origin already exists"

```bash
# Remove existing remote
git remote remove origin

# Add the correct one
git remote add origin https://github.com/YOUR-USERNAME/group-design-system.git
```

### "Permission denied (publickey)"

You need SSH keys set up. Use HTTPS instead:

```bash
git remote set-url origin https://github.com/YOUR-USERNAME/group-design-system.git
```

### "Branch 'main' set up to track remote"

If you see this warning, that's normal! Your branch is now connected.

---

## What Gets Pushed

Your repository will include:
- ✅ Sanity Studio configuration
- ✅ Schema types (Component, Foundation, Resource)
- ✅ Package.json and dependencies
- ✅ Documentation files
- ✅ Vercel configuration
- ✅ Git history

**NOT included (ignored):**
- ❌ node_modules/
- ❌ .env.local (personal tokens)
- ❌ dist/
- ❌ .next

---

## Next Steps

1. Create GitHub repository (or use existing)
2. Run git commands from "Quick Commands" above
3. Verify repo on GitHub
4. Go to VERCEL_DEPLOYMENT.md to deploy

---

## Help

- GitHub Docs: https://docs.github.com
- Git Docs: https://git-scm.com/doc
