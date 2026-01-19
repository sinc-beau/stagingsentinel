import type { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { TermsPageContent } from './components/TermsPageContent';

export const metadata: Metadata = {
  title: 'Terms and Conditions - Sentinel Nexus',
  description: 'Terms and conditions for using the Sentinel Nexus cybersecurity leadership community platform.',
  keywords: 'terms conditions, sentinel nexus terms, cybersecurity community terms',
  openGraph: {
    title: 'Terms and Conditions - Sentinel Nexus',
    description: 'Terms and conditions for using the Sentinel Nexus cybersecurity leadership community platform.',
    url: 'https://sentinelnexus.org/terms',
    siteName: 'Sentinel Nexus',
    images: [
      {
        url: '/SentinelMainOG.png',
        width: 1200,
        height: 630,
        alt: 'Terms and Conditions - Sentinel Nexus',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <TermsPageContent />
      <Footer />
    </>
  );
}