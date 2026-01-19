import type { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { BriefingsPageContent } from './components/BriefingsPageContent';

export const metadata: Metadata = {
  title: 'Sentinel Briefings - Tactical Cybersecurity Intelligence & Executive Dinners',
  description: 'Access classified cybersecurity briefings, tactical workshops, and executive dinners. Get intelligence you can deploy immediately from security operators who\'ve done it.',
  keywords: 'cybersecurity briefings, security intelligence, tactical cybersecurity, CISO briefings, cybersecurity workshops, security executive dinners',
  openGraph: {
    title: 'Sentinel Briefings - Tactical Cybersecurity Intelligence & Executive Dinners',
    description: 'Access classified cybersecurity briefings, tactical workshops, and executive dinners. Get intelligence you can deploy immediately from security operators.',
    url: 'https://sentinelnexus.org/briefings',
    siteName: 'Sentinel Nexus',
    images: [
      {
        url: '/BriefingsOG.png',
        width: 1200,
        height: 630,
        alt: 'Sentinel Briefings - Tactical Cybersecurity Intelligence',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sentinel Briefings - Tactical Cybersecurity Intelligence & Executive Dinners',
    description: 'Access classified cybersecurity briefings, tactical workshops, and executive dinners. Get intelligence you can deploy immediately.',
    images: ['/BriefingsOG.png'],
  },
};

export default function BriefingsPage() {
  return (
    <>
      <Navigation />
      <BriefingsPageContent />
    </>
  );
}