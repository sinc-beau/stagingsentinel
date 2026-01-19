import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Non-Human Identity Crisis: Why Your AI Agents Need \'First-Class Citizen\' Security Now | Sentinel Nexus',
  description: '<p>Agentic AI—autonomous agents that can plan, reason, and act on behalf of humans—is quickly becoming vital to business operations. As their use and numbers sc',
  keywords: 'cybersecurity event, CISO event, virtual event, Virtual Roundtable',
  openGraph: {
    title: 'The Non-Human Identity Crisis: Why Your AI Agents Need \'First-Class Citizen\' Security Now',
    description: '<p>Agentic AI—autonomous agents that can plan, reason, and act on behalf of humans—is quickly becoming vital to business operations. As their use and numbers sc',
    url: 'https://sentinelnexus.org/ai-agents-security-vrt-ping-jan-2026',
    siteName: 'Sentinel Nexus',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Non-Human Identity Crisis: Why Your AI Agents Need \'First-Class Citizen\' Security Now',
    description: '<p>Agentic AI—autonomous agents that can plan, reason, and act on behalf of humans—is quickly becoming vital to business operations. As their use and numbers sc',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
