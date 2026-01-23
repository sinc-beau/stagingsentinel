import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Practical AI Strategies for Security Prioritization and Efficiency | Sentinel Nexus',
  description: '<p>Join a candid, peer-to-peer discussion focused on “how” AI is changing security. The conversation is designed to showcase how leading CISOs are moving past i',
  keywords: 'cybersecurity event, CISO event, virtual event, Dinner',
  openGraph: {
    title: 'Practical AI Strategies for Security Prioritization and Efficiency',
    description: '<p>Join a candid, peer-to-peer discussion focused on “how” AI is changing security. The conversation is designed to showcase how leading CISOs are moving past i',
    url: 'https://sentinelnexus.org/security-prioritization-efficiency-dinner-wiz-apr-2026',
    siteName: 'Sentinel Nexus',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Practical AI Strategies for Security Prioritization and Efficiency',
    description: '<p>Join a candid, peer-to-peer discussion focused on “how” AI is changing security. The conversation is designed to showcase how leading CISOs are moving past i',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
