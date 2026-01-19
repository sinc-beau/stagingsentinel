import type { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SentinelGuildSection } from './components/SentinelGuildSection';

export const metadata: Metadata = {
  title: 'Sentinel Guild - Elite CISO Council & Security Leadership Circle',
  description: 'Join the invitation-only Sentinel Guild. Connect with senior CISOs, shape cybersecurity strategy, and lead the future of security leadership. Apply for exclusive access.',
  keywords: 'CISO council, security council, cybersecurity leadership, CISO guild, security leadership circle, executive security network',
  openGraph: {
    title: 'Sentinel Guild - Elite CISO Council & Security Leadership Circle',
    description: 'Join the invitation-only Sentinel Guild. Connect with senior CISOs, shape cybersecurity strategy, and lead the future of security leadership.',
    url: 'https://sentinelnexus.org/guild-membership',
    siteName: 'Sentinel Nexus',
    images: [
      {
        url: '/GuildOG.png',
        width: 1200,
        height: 630,
        alt: 'Sentinel Guild - Elite CISO Council',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sentinel Guild - Elite CISO Council & Security Leadership Circle',
    description: 'Join the invitation-only Sentinel Guild. Connect with senior CISOs, shape cybersecurity strategy, and lead the future of security leadership.',
    images: ['/GuildOG.png'],
  },
};

export default function GuildMembershipPage() {
  return (
    <>
      <Navigation />
      <div className="relative min-h-screen bg-black">
        {/* Background */}
        <div className="fixed inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
          
          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-teal-400/40 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 pt-16">
          <SentinelGuildSection />
          <Footer />
        </div>
      </div>
    </>
  );
}