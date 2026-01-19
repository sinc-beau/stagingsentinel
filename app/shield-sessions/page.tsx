import type { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ShieldSessionsPageContent } from './components/ShieldSessionsPageContent';

export const metadata: Metadata = {
  title: 'Shield Sessions - Elite Cybersecurity Leadership Gatherings',
  description: 'Join exclusive Shield Sessions in major cities. Connect with 35-40 senior security leaders in experiential gatherings designed to build the future of cybersecurity.',
  keywords: 'cybersecurity leadership, security executive events, CISO gatherings, cybersecurity networking, security leadership development',
  openGraph: {
    title: 'Shield Sessions - Elite Cybersecurity Leadership Gatherings',
    description: 'Join exclusive Shield Sessions in major cities. Connect with 35-40 senior security leaders in experiential gatherings designed to build the future of cybersecurity.',
    url: 'https://sentinelnexus.org/shield-sessions',
    siteName: 'Sentinel Nexus',
    images: [
      {
        url: '/ShieldSessionsOG.png',
        width: 1200,
        height: 630,
        alt: 'Shield Sessions - Elite Cybersecurity Leadership Gatherings',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shield Sessions - Elite Cybersecurity Leadership Gatherings',
    description: 'Join exclusive Shield Sessions in major cities. Connect with 35-40 senior security leaders in experiential gatherings.',
    images: ['/ShieldSessionsOG.png'],
  },
};

export default function ShieldSessionsPage() {
  return (
    <>
      <Navigation />
      <ShieldSessionsPageContent />
      <Footer />
    </>
  );
}