import { Metadata } from 'next';
import WatchtowerJuneMiamiRegistrationContent from './components/WatchtowerJuneMiamiRegistrationContent';

export const metadata: Metadata = {
  title: 'Watchtower CISO Forum - Miami June 2026 Registration | Sentinel Nexus',
  description: 'Complete your registration for the Watchtower CISO Forum in Miami, May 31 - June 2, 2026',
  openGraph: {
    title: 'Watchtower CISO Forum - Miami June 2026 Registration',
    description: 'Complete your registration for the Watchtower CISO Forum in Miami, May 31 - June 2, 2026',
    url: 'https://sentinelnexus.org/watchtower-june-miami-full-registration',
    siteName: 'Sentinel Nexus',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Watchtower CISO Forum - Miami June 2026 Registration',
    description: 'Complete your registration for the Watchtower CISO Forum in Miami, May 31 - June 2, 2026',
  },
};

export default function WatchtowerJuneMiamiRegistrationPage() {
  return <WatchtowerJuneMiamiRegistrationContent />;
}
