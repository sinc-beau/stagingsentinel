import { Metadata } from 'next';
import WatchtowerMayLasVegasRegistrationContent from './components/WatchtowerMayLasVegasRegistrationContent';

export const metadata: Metadata = {
  title: 'Watchtower CISO Forum - Las Vegas May 2026 Registration | Sentinel Nexus',
  description: 'Complete your registration for the Watchtower CISO Forum in Las Vegas, May 2026',
  openGraph: {
    title: 'Watchtower CISO Forum - Las Vegas May 2026 Registration',
    description: 'Complete your registration for the Watchtower CISO Forum in Las Vegas, May 2026',
    url: 'https://sentinelnexus.org/watchtower-may-las-vegas-full-registration',
    siteName: 'Sentinel Nexus',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Watchtower CISO Forum - Las Vegas May 2026 Registration',
    description: 'Complete your registration for the Watchtower CISO Forum in Las Vegas, May 2026',
  },
};

export default function WatchtowerMayLasVegasRegistrationPage() {
  return <WatchtowerMayLasVegasRegistrationContent />;
}
