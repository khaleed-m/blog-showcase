# Deployment Guide

This guide provides step-by-step instructions for deploying the Tech Domain Blog & Project Showcase application.

## Prerequisites

- Node.js 18+ installed
- Git repository set up
- Account on deployment platform (Netlify, Vercel, etc.)

## Quick Deployment Options

### Option 1: Netlify (Recommended)

#### Method A: Drag & Drop Deployment
1. Build the application:
```bash
npm run build
```

2. Go to [Netlify](https://netlify.com) and drag the `.next` folder to deploy

#### Method B: Git Integration
1. Push your code to GitHub/GitLab
2. Connect your repository to Netlify
3. Set build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18+

#### Method C: Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify init
netlify deploy --prod
```

### Option 2: Vercel

#### Method A: Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

#### Method B: GitHub Integration
1. Push code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy automatically

### Option 3: Manual Static Deployment

For static hosting providers (GitHub Pages, etc.):

```bash
# Build and export
npm run build
npm run export

# Upload the 'out' folder to your hosting provider
```

## Environment Configuration

### Required Environment Variables

Create `.env.local` for local development:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

For production, set:
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Build Configuration

The application uses these build settings:
- **Framework**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Node Version**: 18+

## Troubleshooting Deployment

### Common Issues

1. **Build Failures**
   - Check Node.js version (18+ required)
   - Ensure all dependencies are in package.json
   - Run `npm run build` locally first

2. **Missing Dependencies**
   ```bash
   npm install --production=false
   ```

3. **TypeScript Errors**
   ```bash
   npm run type-check
   ```

4. **Image Optimization Issues**
   - Ensure images are in `public/` directory
   - Check image paths in components

### Performance Optimization

1. **Enable Compression**
   - Most platforms enable this by default
   - Verify gzip/brotli compression is active

2. **CDN Configuration**
   - Static assets are automatically optimized
   - Images use Next.js Image component

3. **Caching Headers**
   - Configured automatically by Next.js
   - Static assets cached for 1 year

## Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All pages are accessible
- [ ] Dark mode toggle works
- [ ] Mobile navigation functions
- [ ] Search and filtering work
- [ ] Images load properly
- [ ] Links work correctly
- [ ] SEO meta tags are present

## Custom Domain Setup

### Netlify
1. Go to Site Settings > Domain Management
2. Add custom domain
3. Configure DNS records

### Vercel
1. Go to Project Settings > Domains
2. Add domain
3. Configure DNS

## Monitoring and Analytics

### Adding Analytics
1. Get tracking ID from your analytics provider
2. Add to environment variables
3. Update layout.tsx with tracking code

### Performance Monitoring
- Use Lighthouse for performance audits
- Monitor Core Web Vitals
- Check loading speeds regularly

## Backup and Recovery

### Database Backup
- Static data is in JSON files
- Backup repository regularly
- Consider automated backups

### Rollback Strategy
- Use Git tags for releases
- Keep previous deployments
- Test rollback procedures

## Security Considerations

- Keep dependencies updated
- Use HTTPS (enabled by default)
- Implement CSP headers if needed
- Regular security audits

## Support

For deployment issues:
1. Check platform documentation
2. Review build logs
3. Test locally first
4. Contact platform support if needed
