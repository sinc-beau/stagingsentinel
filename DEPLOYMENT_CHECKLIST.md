# Deployment Checklist for Sentinel Nexus

## Pre-Deployment Verification

### 1. Build Test
- [x] Run `npm run build` successfully
- [x] Verify `out/` directory is created
- [x] Check that 19 HTML files are generated
- [x] Confirm `_next/` directory exists in `out/`
- [x] Verify total build size (~3.2MB)

### 2. Configuration Files
- [x] `netlify.toml` exists in root directory
- [x] `.nvmrc` specifies Node 18.17.0
- [x] `next.config.js` has `output: 'export'`
- [x] `public/_headers` security headers configured

### 3. Environment Variables
Ensure these are set in your Netlify/Vercel dashboard:
- [ ] `NEXT_PUBLIC_SUPABASE_URL`
- [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Netlify Deployment Steps

### Initial Setup
1. [ ] Push code to GitHub/GitLab/Bitbucket
2. [ ] Log into Netlify dashboard
3. [ ] Click "Add new site" → "Import an existing project"
4. [ ] Connect to your Git provider
5. [ ] Select the Sentinel Nexus repository

### Build Configuration
Netlify should auto-detect settings from `netlify.toml`, but verify:
- [ ] Build command: `npm run build`
- [ ] Publish directory: `out`
- [ ] Base directory: (leave empty)
- [ ] Node version: 18.17.0 (from .nvmrc)

### Environment Variables
Add these in Netlify's "Site settings" → "Environment variables":
1. [ ] `NEXT_PUBLIC_SUPABASE_URL` = your_supabase_url
2. [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY` = your_supabase_anon_key

### Deploy
- [ ] Click "Deploy site"
- [ ] Wait for build to complete (typically 2-5 minutes)
- [ ] Check build logs for any errors

## Post-Deployment Verification

### 1. Site Access
- [ ] Visit the Netlify-provided URL (e.g., random-name.netlify.app)
- [ ] Verify homepage loads correctly
- [ ] Check that navigation menu works
- [ ] Test mobile responsive design

### 2. Page Testing
Test all pages load without errors:
- [ ] Homepage: `/`
- [ ] Guild Membership: `/guild-membership`
- [ ] Forums: `/forums`
- [ ] Shield Sessions: `/shield-sessions`
- [ ] Briefings: `/briefings`
- [ ] Intelligence: `/intelligence`
- [ ] Solution Providers: `/solution-providers`
- [ ] Contact: `/contact`
- [ ] Privacy: `/privacy`
- [ ] Terms: `/terms`

### 3. Event Pages
- [ ] Austin March 2026: `/watchtower-ciso-forum-austin-march-2026`
- [ ] Las Vegas March 2026: `/watchtower-ciso-forum-las-vegas-march-2026`
- [ ] Miami May 2026: `/watchtower-ciso-forum-miami-may-2026`
- [ ] Canada August 2026: `/watchtower-ciso-forum-canada-august-2026`
- [ ] Austin September 2026: `/watchtower-ciso-forum-austin-september-2026`

### 4. Forms Testing
Test form submissions:
- [ ] Newsletter form on homepage
- [ ] Guild membership form
- [ ] Contact form
- [ ] Event registration forms

### 5. Security Headers
Check headers are properly set:
```bash
curl -I https://your-site.netlify.app
```

Verify these headers are present:
- [ ] X-Frame-Options: SAMEORIGIN
- [ ] X-Content-Type-Options: nosniff
- [ ] X-XSS-Protection: 1; mode=block
- [ ] Referrer-Policy: strict-origin-when-cross-origin
- [ ] Permissions-Policy
- [ ] Content-Security-Policy

### 6. Browser Console
- [ ] Open browser DevTools (F12)
- [ ] Check Console tab for JavaScript errors
- [ ] Verify no 404 errors for assets
- [ ] Confirm no CSP violations

### 7. Performance Testing
- [ ] Run Lighthouse audit (target: 90+ score)
- [ ] Check Core Web Vitals
- [ ] Verify images load correctly
- [ ] Test page load speed

### 8. Mobile Testing
- [ ] Test on iOS Safari
- [ ] Test on Android Chrome
- [ ] Verify responsive breakpoints work
- [ ] Check mobile menu functionality

## Custom Domain Setup (if applicable)

### 1. Domain Configuration
- [ ] Add custom domain in Netlify settings
- [ ] Configure DNS records:
  - [ ] A record or CNAME to Netlify
  - [ ] Wait for DNS propagation (up to 48 hours)

### 2. SSL Certificate
- [ ] Netlify auto-provisions Let's Encrypt SSL
- [ ] Verify HTTPS works
- [ ] Test forced HTTPS redirect

### 3. Final Domain Checks
- [ ] Access site via custom domain
- [ ] Verify SSL certificate is valid
- [ ] Check that www redirects to non-www (or vice versa)
- [ ] Test all pages load on custom domain

## Troubleshooting Common Issues

### Build Fails
- Check Node version matches .nvmrc (18.17.0)
- Verify all dependencies are in package.json
- Check build logs for specific error messages
- Try building locally first: `npm run build`

### 404 Errors After Deployment
- Verify netlify.toml is committed to repository
- Check publish directory is set to "out"
- Ensure build completed successfully
- Review Netlify deploy logs

### Forms Not Working
- Verify HubSpot API keys are correct
- Check CSP headers allow HubSpot domains
- Test form submissions in browser console
- Review Network tab for API errors

### Images Not Loading
- Confirm images are in public/ directory
- Check image paths don't include "/public"
- Verify images are committed to Git
- Test direct image URLs

### Supabase Connection Issues
- Verify environment variables are set correctly
- Check Supabase URL and anon key
- Test connection in browser console
- Review Network tab for API calls

## Support Contacts

- **Technical Issues**: Development team
- **Netlify Support**: https://support.netlify.com
- **Supabase Support**: https://supabase.com/support

## Additional Notes

- The site uses static site generation (SSG) for optimal performance
- All pages are pre-rendered at build time
- Forms submit directly to HubSpot API
- Supabase is used for newsletter subscriptions and data storage
- Security headers are configured for maximum protection

---

**Last Updated**: November 11, 2025
**Next Review**: Before each major deployment
