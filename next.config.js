/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
  webpack: (config, { isServer }) => {
    // Use in-memory cache to avoid filesystem issues
    config.cache = {
      type: 'memory'
    };

    return config;
  },
  // Security headers configuration
  // Note: With output: 'export', headers() function cannot be used
  // Security headers are configured in public/_headers file for static hosting platforms
  // Alternatively, configure these headers on your hosting platform (Netlify, Vercel, Cloudflare Pages, etc.)
  //
  // Required headers:
  // - X-Frame-Options: SAMEORIGIN
  // - X-Content-Type-Options: nosniff
  // - X-XSS-Protection: 1; mode=block
  // - Referrer-Policy: strict-origin-when-cross-origin
  // - Permissions-Policy: camera=(), microphone=(), geolocation=()
  // - Content-Security-Policy: See public/_headers file for full CSP configuration
};

module.exports = nextConfig;
