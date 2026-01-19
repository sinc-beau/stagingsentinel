import type { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { PrivacyPageContent } from './components/PrivacyPageContent';

export const metadata: Metadata = {
  title: 'Privacy Policy - Sentinel Nexus',
  description: 'Privacy policy for the Sentinel Nexus cybersecurity leadership community platform.',
  keywords: 'privacy policy, sentinel nexus privacy, cybersecurity community privacy',
  openGraph: {
    title: 'Privacy Policy - Sentinel Nexus',
    description: 'Privacy policy for the Sentinel Nexus cybersecurity leadership community platform.',
    url: 'https://sentinelnexus.org/privacy',
    siteName: 'Sentinel Nexus',
    images: [
      {
        url: '/SentinelMainOG.png',
        width: 1200,
        height: 630,
        alt: 'Privacy Policy - Sentinel Nexus',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <PrivacyPageContent />
      <Footer />
    </>
  );
}