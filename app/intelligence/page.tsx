import type { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { IntelligencePageContent } from './components/IntelligencePageContent';

export const metadata: Metadata = {
  title: 'Content Intelligence - Cybersecurity Leadership Insights & Analytics',
  description: 'Access comprehensive cybersecurity content intelligence, leadership insights, and community analytics. Stay ahead with exclusive intelligence signals and early content previews.',
  keywords: 'cybersecurity intelligence, security analytics, cybersecurity insights, CISO intelligence, security leadership content, cybersecurity trends',
  openGraph: {
    title: 'Content Intelligence - Cybersecurity Leadership Insights & Analytics',
    description: 'Access comprehensive cybersecurity content intelligence, leadership insights, and community analytics. Stay ahead with exclusive intelligence signals.',
    url: 'https://sentinelnexus.org/intelligence',
    siteName: 'Sentinel Nexus',
    images: [
      {
        url: '/IngelligenceOG.png',
        width: 1200,
        height: 630,
        alt: 'Content Intelligence - Cybersecurity Leadership Insights',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Content Intelligence - Cybersecurity Leadership Insights & Analytics',
    description: 'Access comprehensive cybersecurity content intelligence, leadership insights, and community analytics.',
    images: ['/IngelligenceOG.png'],
  },
};

export default function IntelligencePage() {
  return (
    <>
      <Navigation />
      <IntelligencePageContent />
      <Footer />
    </>
  );
}