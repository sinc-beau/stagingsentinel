import { Metadata } from 'next';
import WatchtowerMarchAustinRegistrationContent from './components/WatchtowerMarchAustinRegistrationContent';

export const metadata: Metadata = {
  title: 'Watchtower CISO Forum - Austin March 2026 Registration | Sentinel Nexus',
  description: 'Complete your registration for the Watchtower CISO Forum in Austin, March 1-3, 2026',
  openGraph: {
    title: 'Watchtower CISO Forum - Austin March 2026 Registration',
    description: 'Complete your registration for the Watchtower CISO Forum in Austin, March 1-3, 2026',
    url: 'https://sentinelnexus.org/watchtower-march-austin-full-registration',
    siteName: 'Sentinel Nexus',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Watchtower CISO Forum - Austin March 2026 Registration',
    description: 'Complete your registration for the Watchtower CISO Forum in Austin, March 1-3, 2026',
  },
};

export default function WatchtowerMarchAustinRegistrationPage() {
  return <WatchtowerMarchAustinRegistrationContent />;
}
