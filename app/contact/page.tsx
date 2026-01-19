import type { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ContactPageContent } from './components/ContactPageContent';

export const metadata: Metadata = {
  title: 'Contact Us - Sentinel Nexus',
  description: 'Get in touch with the Sentinel Nexus team. We\'re here to help with questions about our cybersecurity leadership community.',
  keywords: 'contact sentinel nexus, cybersecurity community contact, CISO network support',
  openGraph: {
    title: 'Contact Us - Sentinel Nexus',
    description: 'Get in touch with the Sentinel Nexus team. We\'re here to help with questions about our cybersecurity leadership community.',
    url: 'https://sentinelnexus.org/contact',
    siteName: 'Sentinel Nexus',
    images: [
      {
        url: '/SentinelMainOG.png',
        width: 1200,
        height: 630,
        alt: 'Contact Us - Sentinel Nexus',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - Sentinel Nexus',
    description: 'Get in touch with the Sentinel Nexus team.',
    images: ['/SentinelMainOG.png'],
  },
};

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <ContactPageContent />
      <Footer />
    </>
  );
}