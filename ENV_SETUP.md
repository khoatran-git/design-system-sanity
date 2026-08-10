# Sanity Studio Environment Variables Setup

This guide explains how to configure environment variables for the Sanity Studio.

## Quick Setup

### Step 1: Create .env.local

```bash
cp .env.local.example .env.local
```

### Step 2: Update Values (if needed)

The defaults should work. Only change if you have a different setup:

```bash
# Your Sanity project ID
SANITY_STUDIO_PROJECT_ID=q8ijpuq2

# Dataset name
SANITY_STUDIO_DATASET=production

# Studio URL (for reference)
SANITY_STUDIO_URL=https://q8ijpuq2.sanity.studio
```

### Step 3: Run Studio (Optional)

```bash
npm run dev
```

Opens at `http://localhost:3333`

---

## When You Need Environment Variables

### Development (Local Studio)
- Only needed if running `npm run dev`
- Defaults already configured in code
- Optional to override

### Web Studio (Cloud)
- No setup needed
- Access directly: https://q8ijpuq2.sanity.studio
- Automatically configured by Sanity

### Deployed Studio
- Set in deployment platform
- See platform-specific instructions

---

## Environment Variables Reference

### SANITY_STUDIO_PROJECT_ID
- **Description:** Your Sanity project ID
- **Value:** `q8ijpuq2`
- **Required:** No (has default)
- **When to change:** If using different project

### SANITY_STUDIO_DATASET
- **Description:** Sanity dataset name
- **Value:** `production`
- **Required:** No (has default)
- **When to change:** If using different dataset

### SANITY_STUDIO_URL
- **Description:** Studio base URL (informational)
- **Value:** `https://q8ijpuq2.sanity.studio`
- **Required:** No (informational only)
- **When to change:** If deployed to custom domain

---

## .env.local Template

```bash
# Sanity Studio Configuration
SANITY_STUDIO_PROJECT_ID=q8ijpuq2
SANITY_STUDIO_DATASET=production
SANITY_STUDIO_URL=https://q8ijpuq2.sanity.studio

# Optional: Enable debug logging
# SANITY_STUDIO_DEBUG=true
```

---

## File Structure

```
studio-group-design-system/
├── .env.example          ← Basic template
├── .env.local.example    ← Detailed template
├── .env.local           ← Your actual vars (DO NOT commit)
└── .gitignore           ← Ensures .env.local is ignored
```

---

## Running Studio

### Option 1: Cloud Studio (Recommended)

No setup needed! Just open:

```
https://q8ijpuq2.sanity.studio
```

Log in with your Sanity account.

### Option 2: Local Development

```bash
# Install dependencies
npm install

# Start local studio
npm run dev
```

Opens at http://localhost:3333

---

## Troubleshooting

### "Cannot find module '@sanity/cli'"

**Problem:** Dependencies not installed

**Solution:**
```bash
npm install
```

### "Failed to connect to project"

**Problem:** Project ID is incorrect or network issue

**Solutions:**
1. Check project ID: `q8ijpuq2`
2. Check internet connection
3. Verify Sanity status: https://status.sanity.io

### "Port 3333 already in use"

**Problem:** Another process using the port

**Solutions:**
```bash
# Kill process on port 3333
lsof -i :3333
kill -9 <PID>

# Or use different port
npm run dev -- --port 3334
```

---

## Development vs Production

### Development

Run locally for testing schema changes:

```bash
npm run dev
# Starts at http://localhost:3333
```

Changes are not persisted. Restart to reset.

### Production

Access cloud studio:

```
https://q8ijpuq2.sanity.studio
```

All changes saved automatically.

---

## Deployment

The studio is already deployed to Sanity cloud. To redeploy after schema changes:

```bash
npm run deploy
```

---

## Security Notes

- No sensitive tokens needed for studio
- Authentication handled by Sanity
- .env.local is optional (has safe defaults)
- Keep .env.local out of git

---

## Resources

- [Sanity Studio Documentation](https://www.sanity.io/docs/sanity-studio)
- [Environment Variables](https://www.sanity.io/docs/studio-environment-variables)
- [Studio Configuration](https://www.sanity.io/docs/studio-configuration)
