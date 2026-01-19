# Event Page Generation System

## Overview

This document explains the automated event page generation system used in the Sentinel Nexus project. The system dynamically creates Next.js pages for events stored in a Supabase database, providing both incremental and force rebuild capabilities.

## Architecture

### Components

1. **Generation Script** (`scripts/generate-event-pages.js`)
   - Fetches live events from Supabase database
   - Generates page.tsx and layout.tsx files for each event
   - Supports incremental and force rebuild modes
   - Provides detailed logging and statistics

2. **Event Templates** (`app/event-template/`)
   - `EventPage.tsx` - Template for in-person events with venue information
   - `VirtualEventPage.tsx` - Template for virtual roundtable events

3. **Database Integration**
   - Connects to Supabase using environment variables
   - Queries the `events` table for live events (`islive = true`)
   - Automatically determines event type based on venue presence

## Build Modes

### Incremental Mode (Default)

The default build mode only generates pages for events that don't already have both `page.tsx` and `layout.tsx` files. This is the fastest option for regular builds.

**When to use:**
- Regular development builds
- Production deployments when only new events have been added
- CI/CD pipelines for standard updates

**Command:**
```bash
npm run build
```

**Behavior:**
- ✅ Creates missing event pages
- ⏭️ Skips existing event pages
- ⚡ Fast build times for incremental changes

### Force Rebuild Mode

Force rebuild mode regenerates all event pages regardless of whether they already exist. Use this when you've modified the event templates or need to ensure all pages are up-to-date.

**When to use:**
- After modifying EventPage.tsx or VirtualEventPage.tsx templates
- After changing the page generation logic
- When you need to ensure all pages reflect the latest template changes
- When event metadata in the database has been updated

**Commands:**
```bash
# Generate all pages and build the project
npm run rebuild-pages

# Only regenerate pages without building
npm run generate-pages-force
```

**Behavior:**
- ✅ Creates missing event pages
- 🔄 Updates all existing event pages
- 🔨 Complete regeneration of all event routes

## Available NPM Scripts

### `npm run build`
Standard production build with incremental page generation.
- Runs `prebuild` hook (incremental generation)
- Builds the Next.js application
- Best for: Regular deployments

### `npm run rebuild-pages`
Force regenerates all event pages and builds the project.
- Runs generation script with `--force` flag
- Rebuilds the entire Next.js application
- Best for: Template updates, major changes

### `npm run generate-pages`
Manually generates event pages (incremental mode) without building.
- Useful for: Testing page generation, development
- Does not build the Next.js app

### `npm run generate-pages-force`
Manually regenerates all event pages (force mode) without building.
- Useful for: Testing template changes without full build
- Does not build the Next.js app

### `npm run dev`
Starts development server (does not regenerate pages).
- Best for: Local development
- Uses existing generated pages

## How It Works

### 1. Database Query

The script queries the Supabase `events` table:

```javascript
const { data: events, error } = await supabase
  .from('events')
  .select('*')
  .eq('islive', true)
  .order('date', { ascending: true });
```

### 2. Event Type Detection

Events are automatically classified as either virtual or in-person:

```javascript
const isVirtualEvent = event.type === 'Virtual Roundtable' || !event.venue;
```

- **Virtual events**: Use `VirtualEventPage` template
- **In-person events**: Use `EventPage` template

### 3. Page Generation

For each event, the script generates two files:

#### page.tsx
```tsx
import { EventPage } from '@/app/event-template/EventPage';

export default function EventNamePage() {
  return <EventPage slug="event-slug" />;
}
```

#### layout.tsx
Contains SEO metadata including:
- Page title
- Meta description
- Keywords
- OpenGraph tags
- Twitter card metadata

### 4. File System Management

**Incremental Mode:**
- Checks if both `page.tsx` and `layout.tsx` exist
- Skips generation if both files are present
- Creates missing files if either is absent

**Force Mode:**
- Overwrites all files regardless of existence
- Ensures all pages reflect latest template changes

## Environment Variables

The generation system requires these Supabase environment variables:

```bash
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

**Graceful Fallback:**
If environment variables are not found, the script:
1. Logs a warning message
2. Exits successfully (exit code 0)
3. Uses existing event pages for the build

This ensures builds don't fail in environments where Supabase isn't configured.

## Generated Page Structure

Each event generates a directory under `/app/` with this structure:

```
app/
├── event-slug-name/
│   ├── page.tsx       # Event page component
│   └── layout.tsx     # SEO metadata and layout
```

## Console Output

The generation script provides detailed, color-coded output:

### Incremental Mode Output
```
========================================
EVENT PAGE GENERATION
========================================
Mode: INCREMENTAL (new pages only)
Started at: 12/15/2025, 3:45:30 PM

Fetching live events from Supabase...
Found 15 live events

✅ CREATED: new-event-slug (in-person event)
⏭️  SKIPPED: existing-event-1 (pages already exist)
⏭️  SKIPPED: existing-event-2 (pages already exist)

========================================
GENERATION SUMMARY
========================================
Total events processed: 15
✅ Created: 1
🔄 Updated: 0
⏭️  Skipped: 14
Duration: 2.34s
Completed at: 12/15/2025, 3:45:32 PM
========================================
```

### Force Mode Output
```
========================================
EVENT PAGE GENERATION
========================================
Mode: FORCE REBUILD (all pages)
Started at: 12/15/2025, 3:45:30 PM

Fetching live events from Supabase...
Found 15 live events

✅ CREATED: new-event-slug (virtual event)
🔄 UPDATED: existing-event-1 (in-person event)
🔄 UPDATED: existing-event-2 (in-person event)

========================================
GENERATION SUMMARY
========================================
Total events processed: 15
✅ Created: 1
🔄 Updated: 14
⏭️  Skipped: 0
Duration: 3.21s
Completed at: 12/15/2025, 3:45:33 PM
========================================
```

### Output Legend
- ✅ **CREATED**: New event page was generated
- 🔄 **UPDATED**: Existing event page was regenerated (force mode only)
- ⏭️ **SKIPPED**: Existing event page was left unchanged (incremental mode only)

## Workflow Examples

### Adding a New Event

1. Add event to Supabase `events` table with `islive = true`
2. Run `npm run build` (or let CI/CD run it)
3. The new event page is automatically created
4. Existing pages are not touched (fast build)

### Updating Event Templates

1. Modify `app/event-template/EventPage.tsx` or `VirtualEventPage.tsx`
2. Run `npm run rebuild-pages`
3. All event pages are regenerated with the new template
4. Full Next.js build is performed

### Testing Page Generation

```bash
# Test incremental generation
npm run generate-pages

# Test force regeneration
npm run generate-pages-force

# Then manually inspect the generated files
```

### Local Development

```bash
# Start dev server (uses existing pages)
npm run dev

# If you need to regenerate specific pages
npm run generate-pages

# Refresh your browser
```

## Troubleshooting

### Pages not generating

**Issue:** Script completes but no pages are created

**Solutions:**
1. Check Supabase environment variables are set correctly
2. Verify events in database have `islive = true`
3. Check console output for error messages
4. Manually run: `npm run generate-pages` to see detailed output

### Outdated content in generated pages

**Issue:** Event pages don't reflect latest database changes

**Solutions:**
1. Use force rebuild: `npm run rebuild-pages`
2. Delete the event directory manually and run `npm run generate-pages`
3. Verify the database query is returning expected data

### Build fails after generation

**Issue:** Pages generate successfully but Next.js build fails

**Solutions:**
1. Check for TypeScript errors in generated files
2. Verify template components are properly exported
3. Ensure all imports in templates are correct
4. Run `npm run lint` to check for issues

### Template changes not reflected

**Issue:** Modified templates but event pages unchanged

**Solution:**
- Always use `npm run rebuild-pages` after template modifications
- Incremental mode (`npm run build`) won't update existing pages

## Best Practices

### For Development
1. Use `npm run dev` for local development
2. Only regenerate pages when needed with `npm run generate-pages`
3. Test template changes with `npm run generate-pages-force` before committing

### For Production
1. Use `npm run build` for standard deployments (fastest)
2. Use `npm run rebuild-pages` after template updates (ensures consistency)
3. Monitor build logs to verify page generation statistics

### For CI/CD
1. Set up environment variables in your CI/CD platform
2. Use `npm run build` in deployment pipeline (incremental mode)
3. Add a manual `npm run rebuild-pages` job for template updates
4. Cache `node_modules` and generated pages between builds

## Database Schema

The script expects events in the `events` table with these fields:

```typescript
interface Event {
  slug: string;          // URL-friendly identifier
  title: string;         // Event title
  blurb: string;         // Short description (first 160 chars used for SEO)
  type: string;          // Event type (e.g., "Virtual Roundtable")
  city?: string;         // City location (optional, for in-person events)
  venue?: string;        // Venue name (optional, determines virtual vs in-person)
  date: string;          // Event date
  islive: boolean;       // Whether to generate page (must be true)
}
```

## Performance Considerations

### Incremental Mode Performance
- Only processes new events
- Typical build time: 2-5 seconds for generation
- Scales well with large event databases
- Recommended for 99% of builds

### Force Mode Performance
- Processes all events regardless of state
- Typical build time: 3-10 seconds for generation
- Time scales linearly with number of events
- Only use when necessary (template updates)

### Optimization Tips
1. Keep event slugs consistent (avoid changing them)
2. Mark old events as `islive = false` to exclude them
3. Use incremental mode whenever possible
4. Consider archiving old event directories if not needed

## Integration with Next.js

### Static Generation

Generated pages use Next.js App Router with:
- Server Components (default)
- Static metadata in layout.tsx
- Dynamic data fetching in template components

### Route Structure

Events are generated as top-level routes:
```
https://sentinelnexus.org/event-slug-name
```

### Metadata

SEO metadata is statically generated in `layout.tsx`:
- Optimized for search engines
- Social media preview cards (OpenGraph, Twitter)
- Keyword optimization based on event type

## Future Enhancements

Potential improvements to consider:

1. **Incremental Static Regeneration (ISR)**
   - Auto-update pages without rebuilding
   - Better for frequently changing event data

2. **Delete Detection**
   - Remove pages for events marked as `islive = false`
   - Cleanup old event directories

3. **Template Versioning**
   - Track template versions in generated files
   - Auto-detect when regeneration is needed

4. **Parallel Generation**
   - Generate multiple pages concurrently
   - Faster for large event databases

5. **Preview Mode**
   - Generate draft pages for `islive = false` events
   - Allow previewing before publishing

---

**Last Updated:** December 15, 2025
**Script Version:** 2.0 (Incremental + Force Rebuild)
**Maintained By:** Sentinel Nexus Development Team
