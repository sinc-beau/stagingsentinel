import type { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SolutionProviderProspectusContent } from './components/SolutionProviderProspectusContent';

export const metadata: Metadata = {
  title: 'Partnership Prospectus - Premium CISO Community Sponsorship Packages',
  description: 'Explore premium partnership tiers with Sentinel Nexus. Detailed sponsorship packages to connect with verified CISOs and security executives. Request access today.',
  keywords: 'cybersecurity sponsorship packages, CISO marketing opportunities, security vendor partnerships, cybersecurity event sponsorship, B2B security marketing',
  openGraph: {
    title: 'Partnership Prospectus - Premium CISO Community Sponsorship Packages',
    description: 'Explore premium partnership tiers with Sentinel Nexus. Detailed sponsorship packages to connect with verified CISOs and security executives.',
    url: 'https://sentinelnexus.org/solution-provider-prospectus',
    siteName: 'Sentinel Nexus',
    images: [
      {
        url: '/SentinelMainOG.png',
        width: 1200,
        height: 630,
        alt: 'Partnership Prospectus - Premium CISO Community Sponsorship',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Partnership Prospectus - Premium CISO Community Sponsorship Packages',
    description: 'Explore premium partnership tiers with Sentinel Nexus. Detailed sponsorship packages to connect with verified CISOs.',
    images: ['/SentinelMainOG.png'],
  },
};

export default function SolutionProviderProspectusPage() {
  return (
    <>
      <Navigation />
      <SolutionProviderProspectusContent />
      <Footer />
    </>
  );
}