import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Risk First, Noise Last: Practical Strategies to Prioritize Cybersecurity Threats and Minimize Alert Fatigue | Sentinel Nexus',
  description: 'With cyber threats increasing in volume and complexity, there is pressure to identify critical risks while cutting through operational noise. This roundtable wi',
  keywords: 'cybersecurity event, CISO event, virtual event, Dinner',
  openGraph: {
    title: 'Risk First, Noise Last: Practical Strategies to Prioritize Cybersecurity Threats and Minimize Alert Fatigue',
    description: 'With cyber threats increasing in volume and complexity, there is pressure to identify critical risks while cutting through operational noise. This roundtable wi',
    url: 'https://sentinelnexus.org/prioritize-cybersecurity-dinner-wiz-mar-2026',
    siteName: 'Sentinel Nexus',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Risk First, Noise Last: Practical Strategies to Prioritize Cybersecurity Threats and Minimize Alert Fatigue',
    description: 'With cyber threats increasing in volume and complexity, there is pressure to identify critical risks while cutting through operational noise. This roundtable wi',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
