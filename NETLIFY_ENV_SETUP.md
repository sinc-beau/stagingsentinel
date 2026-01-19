# Netlify Environment Variables Setup

## Status: Build Fixed ✅

The deployment build errors have been resolved. The site will now build successfully on Netlify even without environment variables. However, to display live event data from your Supabase database, you must add the environment variables below.

## Required Action

You need to add these environment variables to your Netlify site:

1. Go to your Netlify dashboard
2. Select your site
3. Go to **Site settings** > **Environment variables**
4. Add the following environment variables:

### Environment Variables to Add:

**NEXT_PUBLIC_SUPABASE_URL**
```
https://mftrlkfegbfnkukyszoj.supabase.co
```

**NEXT_PUBLIC_SUPABASE_ANON_KEY**
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1mdHJsa2ZlZ2Jmbmt1a3lzem9qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA0MjcxNTcsImV4cCI6MjA3NjAwMzE1N30.Oqdl4PRCSl5OTbgb_Y52A39sE1TxTKjSMnLeyOzMK_w
```

## After Adding Variables

1. Save the environment variables
2. Trigger a new deployment by either:
   - Going to **Deploys** > **Trigger deploy** > **Deploy site**
   - Or pushing a new commit to your repository

## Why This is Needed

With Next.js static export (`output: 'export'`), environment variables prefixed with `NEXT_PUBLIC_` are embedded into the JavaScript at build time. The `.env` file in your repository is only used for local development and is not available during the Netlify build process.

## Verification

After the new deployment completes:
- The events should load on the homepage
- The briefings page should display events
- Browser console should no longer show requests to `placeholder.supabase.co`
