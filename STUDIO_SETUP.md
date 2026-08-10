# Sanity Studio Setup - Group Design System

This folder contains the Sanity Studio configuration for the Group Design System knowledge base.

## Project Details

- **Project ID:** `q8ijpuq2`
- **Dataset:** `production`
- **Type:** Standalone Studio (separate from Next.js app)
- **Studio URL:** https://q8ijpuq2.sanity.studio

## Quick Start

### 1. Install Dependencies

```bash
cd studio-group-design-system
npm install
```

### 2. Set Environment Variables

Copy `.env.local.example` to `.env.local`:

```bash
cp .env.local.example .env.local
```

The defaults should work, but you can customize them if needed.

### 3. Run Studio Locally (Optional)

```bash
npm run dev
```

Studio will open at `http://localhost:3333`

### 4. Access Studio Online

You can also access the studio directly online:

**URL:** https://q8ijpuq2.sanity.studio

Log in with your Sanity account. No local setup required!

## File Structure

```
studio-group-design-system/
├── sanity.config.js          # Main Sanity configuration
├── schemaTypes/
│   ├── component.js          # Component document type
│   ├── foundation.js         # Foundation document type
│   ├── resource.js           # Resource document type
│   ├── types.ts              # TypeScript type definitions
│   └── index.js              # Schema types export
├── .env.example              # Environment variables template
├── .env.local.example        # Local development template
├── package.json              # Dependencies
└── README.md                 # This file
```

## Content Types

### Components
Store UI component documentation with:
- Overview content
- Specifications
- Props documentation
- Usage examples
- Related components
- Publication status

### Foundations
Store design system guidelines:
- Principles & Governance
- Design Tokens
- Typography
- Colours/Colors
- Elevation
- Motion
- Usability
- Accessibility
- UX Writing

### Resources
External resources and links:
- Tools
- Guides
- Documents
- Learning resources

## Best Practices

### 1. Publishing Strategy
- **Draft:** Work in progress, not visible to app
- **Published:** Live on website via API
- Always publish when ready to share

### 2. Slug Management
- Auto-generated from title/name
- Keep lowercase with hyphens
- Never edit after publishing (breaks links)

### 3. Content Organization
- Use categories wisely
- Link related documents
- Maintain consistent formatting
- Add rich media where helpful

### 4. API Token Management
- Generate from Sanity dashboard
- Use "Editor" permissions only
- Keep secret - never commit tokens
- Rotate regularly

## Connecting to Next.js App

The `shadcn-showcase` Next.js app is configured to fetch from this studio:

1. Studio creates/publishes content here
2. Next.js app fetches via API
3. Website displays content beautifully

See `../shadcn-showcase/SANITY_SETUP.md` for Next.js integration details.

## Deployment

### Deploy Studio to Sanity

```bash
npm run deploy
```

This publishes your studio to the cloud. Already done for this project!

### Redeploy After Schema Changes

If you modify schema types in `schemaTypes/`, redeploy:

```bash
npm run deploy
```

## Environment Variables Reference

| Variable | Purpose | Example |
|----------|---------|---------|
| `SANITY_STUDIO_PROJECT_ID` | Your Sanity project | `q8ijpuq2` |
| `SANITY_STUDIO_DATASET` | Dataset name | `production` |
| `SANITY_STUDIO_URL` | Studio base URL | `https://q8ijpuq2.sanity.studio` |

## Troubleshooting

### Port 3333 Already in Use

```bash
# Kill process on port 3333
lsof -i :3333
kill -9 <PID>

# Or use different port
npm run dev -- --port 3334
```

### Login Issues

- Ensure you're logged into Sanity: `sanity login`
- Check project exists in Sanity dashboard
- Verify project ID is correct

### Schema Errors

- Run `npm run validate` to check schema
- Review error messages carefully
- Ensure all required fields are defined

## Next Steps

1. ✅ Studio is configured and ready
2. 👉 Access https://q8ijpuq2.sanity.studio
3. Log in with Sanity account
4. Create your first Component
5. Publish it
6. See it appear on the Next.js website

## Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [Structure Tool Guide](https://www.sanity.io/docs/structure-builder-reference)
- [Portable Text](https://www.sanity.io/docs/portable-text)
- [Vision Tool](https://www.sanity.io/docs/the-vision-plugin)

## Support

For issues or questions:
1. Check Sanity Docs: https://www.sanity.io/docs
2. Community Help: https://slack.sanity.io
3. Dashboard: https://manage.sanity.io
