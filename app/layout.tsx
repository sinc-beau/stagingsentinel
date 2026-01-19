import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://sentinelnexus.org'),
  title: 'Sentinel Nexus - Premier CISO Community & Cybersecurity Leadership Network',
  description: 'Join 2,500+ verified CISOs and security leaders. Access exclusive forums, intelligence briefings, and proven cybersecurity solutions. Where security leadership connects.',
  keywords: 'CISO community, cybersecurity leadership, security forum, CISO network, cybersecurity intelligence, security leaders',
  openGraph: {
    title: 'Sentinel Nexus - Premier CISO Community & Cybersecurity Leadership Network',
    description: 'Join 2,500+ verified CISOs and security leaders. Access exclusive forums, intelligence briefings, and proven cybersecurity solutions.',
    url: 'https://sentinelnexus.org',
    siteName: 'Sentinel Nexus',
    images: [
      {
        url: '/SentinelMainOG.png',
        width: 1200,
        height: 630,
        alt: 'Sentinel Nexus - Premier CISO Community',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sentinel Nexus - Premier CISO Community & Cybersecurity Leadership Network',
    description: 'Join 2,500+ verified CISOs and security leaders. Access exclusive forums, intelligence briefings, and proven cybersecurity solutions.',
    images: ['/SentinelMainOG.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
