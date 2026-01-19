import type { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SolutionProvidersPageContent } from './components/SolutionProvidersPageContent';

export const metadata: Metadata = {
  title: 'Cybersecurity Partnership Opportunities - Sponsor CISO Community Events',
  description: 'Partner with Sentinel Nexus to reach 2,500+ verified CISOs and security leaders. Strategic sponsorship opportunities for cybersecurity solution providers.',
  keywords: 'cybersecurity sponsorship, CISO marketing, security vendor partnerships, cybersecurity events sponsorship, B2B cybersecurity marketing',
  openGraph: {
    title: 'Cybersecurity Partnership Opportunities - Sponsor CISO Community Events',
    description: 'Partner with Sentinel Nexus to reach 2,500+ verified CISOs and security leaders. Strategic sponsorship opportunities for cybersecurity solution providers.',
    url: 'https://sentinelnexus.org/solution-providers',
    siteName: 'Sentinel Nexus',
    images: [
      {
        url: '/SponsorOG.png',
        width: 1200,
        height: 630,
        alt: 'Cybersecurity Partnership Opportunities - Sponsor CISO Community',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cybersecurity Partnership Opportunities - Sponsor CISO Community Events',
    description: 'Partner with Sentinel Nexus to reach 2,500+ verified CISOs and security leaders. Strategic sponsorship opportunities.',
    images: ['/SponsorOG.png'],
  },
};

export default function SolutionProvidersPage() {
  return (
    <>
      <Navigation />
      <SolutionProvidersPageContent />
      <Footer />
    </>
  );
}