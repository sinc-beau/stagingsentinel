import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'From Zero Trust to 100% Trust – How This Changes Everything | Sentinel Nexus',
  description: '<p>Cybersecurity strategies have evolved from moats and keeps, to the practical breach reality of “not if, but when.” Indeed, the central tenet of the universal',
  keywords: 'cybersecurity event, CISO event, virtual event, Dinner',
  openGraph: {
    title: 'From Zero Trust to 100% Trust – How This Changes Everything',
    description: '<p>Cybersecurity strategies have evolved from moats and keeps, to the practical breach reality of “not if, but when.” Indeed, the central tenet of the universal',
    url: 'https://sentinelnexus.org/zero-trust-dinner-boston-feb-2026',
    siteName: 'Sentinel Nexus',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'From Zero Trust to 100% Trust – How This Changes Everything',
    description: '<p>Cybersecurity strategies have evolved from moats and keeps, to the practical breach reality of “not if, but when.” Indeed, the central tenet of the universal',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
