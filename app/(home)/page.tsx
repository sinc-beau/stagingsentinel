import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { CouncilSection } from '@/components/CouncilSection';
import { HomePageBackground, HeroSection, CommunitySection, SentinelEventsSection, SentinelUpcomingEventsSection, HowItWorksSection, WhatWeCoverSection, VendorParticipationSection, DigitalContentSection, WhoItsForSection, GuildMembershipSection, GetInvolvedSection } from './components';

export default function HomePage() {
  return (
    <>
      <Navigation />
      <HomePageBackground />
      <div className="relative min-h-screen">
        <HeroSection />
        <CommunitySection />
        <SentinelEventsSection />
        <SentinelUpcomingEventsSection />
        <CouncilSection />
        <HowItWorksSection />
        <WhatWeCoverSection />
        <VendorParticipationSection />
        <DigitalContentSection />
        <WhoItsForSection />
        <GuildMembershipSection />
        <GetInvolvedSection />
        <Footer />
      </div>
    </>
  );
}