# Deployment Notes - Corporate Security Filter Compliance

This document outlines the changes made to improve corporate security filter compatibility and additional steps required for deployment.

## Changes Implemented

### 1. Security Headers
- Added comprehensive security headers in `next.config.js` including:
  - Content Security Policy (CSP) with whitelisted domains
  - X-Frame-Options: SAMEORIGIN
  - X-Content-Type-Options: nosniff
  - X-XSS-Protection
  - Referrer-Policy
  - Permissions-Policy

- Created `public/_headers` file for static hosting platforms (Netlify, Cloudflare Pages, etc.)

### 2. Protocol-Relative URLs Fixed
- Updated all HubSpot script loading to use explicit HTTPS URLs
- Changed from `//js.hsforms.net` to `https://js.hsforms.net` in:
  - components/ui/HubSpotForm.tsx
  - components/ui/HubSpotFormEmbed.tsx
  - components/forms/NewsletterForm.tsx
  - components/forms/GuildMembershipForm.tsx
  - components/forms/PartnershipForm.tsx
  - components/forms/DynamicForumForm.tsx
  - components/forms/NationalForumForm.tsx
  - app/shield-sessions/components/ShieldSessionsPageContent.tsx

### 3. External Assets Migrated
- **SINC Logo**: Downloaded and hosted locally at `/public/sinc-logo.svg`
  - Updated in: app/(home)/components/HeroSection.tsx
  - Updated in: components/Footer.tsx

## Required Manual Steps

### Download Hero Video
The hero video is currently referenced but needs to be downloaded manually:

1. Download the video from:
   ```
   https://45377644.fs1.hubspotusercontent-na1.net/hubfs/45377644/Sentinel%20Nexus%20Site%20Assets/3141210-hd_1920_1080_25fps.mp4
   ```

2. Place the downloaded file in:
   ```
   /public/hero-video.mp4
   ```

3. The video is already referenced correctly in `app/(home)/components/HeroSection.tsx`

## Hosting Platform Configuration

### For Static Hosting (Netlify, Cloudflare Pages, Vercel)

The `public/_headers` file will automatically configure security headers. However, you should verify your platform supports this file format.

**Alternative: Configure headers in platform settings**

If your platform doesn't support `_headers` file, configure these headers in your platform's dashboard:

```
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.hsforms.net https://js.hs-scripts.com https://js.hs-analytics.net https://js.usemessages.com https://www.google.com https://www.gstatic.com https://www.recaptcha.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https: blob:; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https://api.hsforms.com https://forms.hsforms.com https://formspree.io https://*.supabase.co; frame-src 'self' https://www.google.com https://www.recaptcha.net; media-src 'self' blob: data:; worker-src 'self' blob:
```

## Known Limitations

### Cannot Be Fixed (Due to Static Export)
1. **API Proxy Routes**: Since the site uses `output: 'export'`, we cannot create server-side API routes to proxy form submissions. Forms still submit directly to HubSpot and Formspree.

2. **Google reCAPTCHA**: HubSpot forms load Google reCAPTCHA which may be blocked by some corporate filters. This is an unavoidable dependency of HubSpot forms.

### Recommendations
If corporate security filters continue to block the site due to HubSpot/reCAPTCHA:

1. **Consider switching from static export to server-side rendering** to enable API proxy routes
2. **Implement custom forms** without HubSpot dependency
3. **Use alternative CAPTCHA solutions** that are less likely to be blocked (e.g., hCaptcha, Cloudflare Turnstile)

## Testing Checklist

Before deploying to production, verify:

- [ ] Hero video file is downloaded and placed in `/public/hero-video.mp4`
- [ ] Security headers are properly configured on hosting platform
- [ ] All forms load correctly
- [ ] HubSpot forms can submit successfully
- [ ] SINC logo displays correctly on homepage and footer
- [ ] No mixed content warnings in browser console
- [ ] Site builds successfully with `npm run build`

## Contact Security Information

If users report the site is still being blocked, request the following information:

1. Which specific URL is being blocked
2. Error message shown by the security filter
3. Name of the security product/vendor blocking access
4. Whether specific domains are being blocked (HubSpot, Google, etc.)

This information will help diagnose and resolve any remaining security filter issues.
