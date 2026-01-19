import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Defending Against Deepfakes with Identity-First Security | Sentinel Nexus',
  description: '<p>Deepfake technology is now a frontline threat, enabling impersonation attacks that can bypass traditional defenses and manipulate trust. From executive imper',
  keywords: 'cybersecurity event, CISO event, virtual event, Virtual Roundtable',
  openGraph: {
    title: 'Defending Against Deepfakes with Identity-First Security',
    description: '<p>Deepfake technology is now a frontline threat, enabling impersonation attacks that can bypass traditional defenses and manipulate trust. From executive imper',
    url: 'https://sentinelnexus.org/defending-against-deepfakes-vrt-ping-feb-2026',
    siteName: 'Sentinel Nexus',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Defending Against Deepfakes with Identity-First Security',
    description: '<p>Deepfake technology is now a frontline threat, enabling impersonation attacks that can bypass traditional defenses and manipulate trust. From executive imper',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
