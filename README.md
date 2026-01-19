# Sentinel Nexus Website

A professional cybersecurity community platform built with Next.js 13.5.1, featuring static site generation for optimal performance and security.

## Project Overview

Sentinel Nexus is a premier CISO community and cybersecurity leadership network that provides:
- Exclusive forums and events
- Intelligence briefings
- Shield Sessions
- Solution provider partnerships
- Guild membership programs

## Technology Stack

- **Framework**: Next.js 13.5.1 (App Router)
- **Styling**: Tailwind CSS 3.3.3
- **UI Components**: Radix UI + shadcn/ui
- **Forms**: React Hook Form + Zod validation
- **Animations**: Framer Motion
- **Database**: Supabase
- **Deployment**: Static export for Netlify/Vercel/Cloudflare Pages

## Getting Started

### Prerequisites

- Node.js 18.17.0 or higher
- npm or yarn package manager

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

### Build

```bash
npm run build
```

This creates a static export in the `out/` directory ready for deployment.

## Deployment

### Netlify

The project includes a `netlify.toml` configuration file that automatically configures:

- Build command: `npm run build`
- Publish directory: `out`
- Security headers (CSP, X-Frame-Options, etc.)
- 404 redirects

#### Deploying to Netlify:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Connect your repository to Netlify
3. Netlify will automatically detect the configuration and deploy

**Important**: Make sure the following environment variables are configured in your Netlify dashboard:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Vercel

```bash
npm run build
```

Deploy the `out` directory to Vercel.

### Cloudflare Pages

```bash
npm run build
```

Deploy the `out` directory to Cloudflare Pages.

## Project Structure

```
/
├── app/                          # Next.js app router pages
│   ├── (home)/                  # Home page with components
│   ├── access/                  # Access page
│   ├── briefings/               # Briefings page
│   ├── contact/                 # Contact page
│   ├── forums/                  # Forums page
│   ├── guild-membership/        # Guild membership page
│   ├── intelligence/            # Intelligence page
│   ├── shield-sessions/         # Shield sessions page
│   ├── solution-providers/      # Solution providers page
│   ├── watchtower-ciso-forum-*/ # Event-specific pages
│   ├── layout.tsx               # Root layout
│   └── globals.css              # Global styles
├── components/                   # Reusable components
│   ├── forms/                   # Form components
│   ├── ui/                      # UI components (shadcn/ui)
│   ├── Footer.tsx
│   └── Navigation.tsx
├── lib/                         # Utility functions
├── public/                      # Static assets
├── netlify.toml                 # Netlify configuration
├── next.config.js               # Next.js configuration
└── package.json                 # Dependencies

```

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Features

### Security Headers

The site includes comprehensive security headers configured via `netlify.toml`:

- Content Security Policy (CSP)
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection
- Referrer-Policy
- Permissions-Policy

### Forms Integration

Forms are integrated with:
- HubSpot Forms API
- Custom form validation with Zod
- Loading states and error handling

### Responsive Design

- Mobile-first approach
- Breakpoints for tablet and desktop
- Optimized images and assets

### Performance Optimizations

- Static site generation
- Image optimization
- Code splitting
- Lazy loading

## Troubleshooting

### Build Issues

If you encounter build errors:

1. Clear the build cache:
   ```bash
   rm -rf .next out
   ```

2. Delete node_modules and reinstall:
   ```bash
   rm -rf node_modules
   npm install
   ```

3. Try building again:
   ```bash
   npm run build
   ```

### Deployment Issues

If the site shows 404 errors after deployment:

1. Verify `netlify.toml` is in the root directory
2. Check that the build command is set to `npm run build`
3. Confirm the publish directory is set to `out`
4. Ensure all environment variables are configured in your hosting dashboard

### Missing Images

If images don't appear:

1. Check that all image files are in the `public/` directory
2. Verify image paths don't include `/public` in the src attribute
3. Ensure images are committed to Git (they're not in `.gitignore`)

## License

Proprietary - Sentinel Nexus

## Support

For technical support, please contact the development team.
# sentinel
# stagingsentinel
