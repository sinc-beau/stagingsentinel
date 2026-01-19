import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: ' AI-Defined Load Balancing & App Security for Modern Infrastructure | Sentinel Nexus',
  description: '<p>As&nbsp;enterprises modernize their cloud infrastructure, costly, inflexible, legacy load balancers hinder rapid application on-boarding. In addition, emergi',
  keywords: 'cybersecurity event, CISO event, virtual event, Virtual Roundtable',
  openGraph: {
    title: ' AI-Defined Load Balancing & App Security for Modern Infrastructure',
    description: '<p>As&nbsp;enterprises modernize their cloud infrastructure, costly, inflexible, legacy load balancers hinder rapid application on-boarding. In addition, emergi',
    url: 'https://sentinelnexus.org/app-security-modern-infrastructure-broadcom-vrt-jan',
    siteName: 'Sentinel Nexus',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: ' AI-Defined Load Balancing & App Security for Modern Infrastructure',
    description: '<p>As&nbsp;enterprises modernize their cloud infrastructure, costly, inflexible, legacy load balancers hinder rapid application on-boarding. In addition, emergi',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
