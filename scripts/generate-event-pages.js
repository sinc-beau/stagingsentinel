const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.log('Supabase environment variables not found - skipping event page generation');
  console.log('Existing event pages will be used for the build');
  process.exit(0);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const forceMode = process.argv.includes('--force');

async function generateEventPages() {
  const startTime = Date.now();

  console.log('========================================');
  console.log('EVENT PAGE GENERATION');
  console.log('========================================');
  console.log(`Mode: ${forceMode ? 'FORCE REBUILD (all pages)' : 'INCREMENTAL (new pages only)'}`);
  console.log(`Started at: ${new Date().toLocaleString()}`);
  console.log('');

  console.log('Fetching live events from Supabase...');

  let events = [];
  let error = null;

  try {
    const result = await supabase
      .from('events')
      .select('*')
      .eq('islive', true)
      .order('date', { ascending: true });

    events = result.data;
    error = result.error;
  } catch (fetchError) {
    console.log('⚠️  Unable to connect to Supabase:', fetchError.message);
    console.log('📄 Using existing event pages for build');
    console.log('');
    process.exit(0);
  }

  if (error) {
    console.log('⚠️  Error fetching events from Supabase:', error.message);
    console.log('📄 Using existing event pages for build');
    console.log('');
    process.exit(0);
  }

  console.log(`Found ${events?.length || 0} live events`);
  console.log('');

  const appDir = path.join(process.cwd(), 'app');
  let createdCount = 0;
  let skippedCount = 0;
  let updatedCount = 0;

  for (const event of events || []) {
    const eventDir = path.join(appDir, event.slug);
    const pagePath = path.join(eventDir, 'page.tsx');
    const layoutPath = path.join(eventDir, 'layout.tsx');

    const pageExists = fs.existsSync(pagePath);
    const layoutExists = fs.existsSync(layoutPath);
    const bothExist = pageExists && layoutExists;

    if (bothExist && !forceMode) {
      console.log(`⏭️  SKIPPED: ${event.slug} (pages already exist)`);
      skippedCount++;
      continue;
    }

    if (!fs.existsSync(eventDir)) {
      fs.mkdirSync(eventDir, { recursive: true });
    }

    const isVirtualEvent = event.type === 'Virtual Roundtable' || !event.venue;
    const templateImport = isVirtualEvent
      ? `import { VirtualEventPage } from '@/app/event-template/VirtualEventPage';`
      : `import { EventPage } from '@/app/event-template/EventPage';`;
    const componentName = isVirtualEvent ? 'VirtualEventPage' : 'EventPage';

    const pageContent = `${templateImport}

export default function ${toPascalCase(event.slug)}Page() {
  return <${componentName} slug="${event.slug}" />;
}
`;

    const keywords = isVirtualEvent
      ? `cybersecurity event, CISO event, virtual event, ${event.type}`
      : `cybersecurity event, CISO event, ${event.city || ''}, ${event.type}`;

    const layoutContent = `import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${escapeQuotes(event.title)} | Sentinel Nexus',
  description: '${escapeQuotes(event.blurb.substring(0, 160))}',
  keywords: '${keywords}',
  openGraph: {
    title: '${escapeQuotes(event.title)}',
    description: '${escapeQuotes(event.blurb.substring(0, 160))}',
    url: 'https://sentinelnexus.org/${event.slug}',
    siteName: 'Sentinel Nexus',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '${escapeQuotes(event.title)}',
    description: '${escapeQuotes(event.blurb.substring(0, 160))}',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
`;

    fs.writeFileSync(pagePath, pageContent);
    fs.writeFileSync(layoutPath, layoutContent);

    const templateType = isVirtualEvent ? 'virtual event' : 'in-person event';

    if (bothExist) {
      console.log(`🔄 UPDATED: ${event.slug} (${templateType})`);
      updatedCount++;
    } else {
      console.log(`✅ CREATED: ${event.slug} (${templateType})`);
      createdCount++;
    }
  }

  const endTime = Date.now();
  const duration = ((endTime - startTime) / 1000).toFixed(2);

  console.log('');
  console.log('========================================');
  console.log('GENERATION SUMMARY');
  console.log('========================================');
  console.log(`Total events processed: ${events?.length || 0}`);
  console.log(`✅ Created: ${createdCount}`);
  console.log(`🔄 Updated: ${updatedCount}`);
  console.log(`⏭️  Skipped: ${skippedCount}`);
  console.log(`Duration: ${duration}s`);
  console.log(`Completed at: ${new Date().toLocaleString()}`);
  console.log('========================================');
}

function toPascalCase(str) {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

function escapeQuotes(str) {
  return str.replace(/'/g, "\\'").replace(/"/g, '\\"');
}

generateEventPages().catch(console.error);
