# Access Your Sanity Studio

## Direct Web Access (Recommended)

You don't need to run the local dev server. Access your studio directly:

**Studio URL:** https://q8ijpuq2.sanity.studio

Simply open this URL in your browser and log in with your Sanity account.

## Local Development (Optional)

If you want to run locally, you'll need to resolve the Node.js/Sanity CLI compatibility issues first.

For now, use the web URL above to start managing your content.

## What You Can Do in the Studio

1. **Create Components** - Document your UI components with detailed specs
2. **Add Foundations** - Typography, colors, motion, accessibility guidelines
3. **Manage Resources** - Links, guides, and documentation
4. **Publish Content** - Make content available via API to your Next.js website
5. **Collaborate** - Add team members to edit content

## Next Steps

1. Open https://q8ijpuq2.sanity.studio
2. Log in with your Sanity account
3. Create your first component or foundation
4. Publish it
5. Content will be available to your Next.js app via the API

## API Endpoints (Once Content is Published)

From your Next.js app:

- `GET /api/components` - All components
- `GET /api/components/[slug]` - Specific component
- `GET /api/foundations` - All foundations
- `GET /api/resources` - All resources

The Next.js app automatically fetches from Sanity!
