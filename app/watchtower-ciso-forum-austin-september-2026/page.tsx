import React from 'react';
import { Metadata } from 'next';
import { WatchtowerForumAustinSeptemberContent } from './components/WatchtowerForumAustinSeptemberContent';

export const metadata = {
  title: 'Watchtower CISO Forum Austin 2026 | Sept 20-22 | Cybersecurity Executive Summit',
  description: 'Premier CISO and cybersecurity leaders forum in Austin, Texas. Join 70+ senior security executives for 48 hours of networking, threat intelligence briefings, and strategic discussions at Hyatt Lost Pines, Sept 20-22, 2026.',
  keywords: 'CISO forum, cybersecurity conference Austin, security leaders summit, executive networking, threat intelligence, cybersecurity events 2026, Austin security conference',
  openGraph: {
    title: 'Watchtower CISO Forum Austin 2026 | Cybersecurity Leaders Summit',
    description: 'Join 70+ senior security leaders at the premier CISO forum in Austin, TX. Sept 20-22, 2026 at Hyatt Lost Pines. Invitation-only executive event.',
    url: 'https://sentinelnexus.org/watchtower-ciso-forum-austin-september-2026',
    siteName: 'Sentinel Nexus',
    images: [
      {
        url: '/WatchtowerForumOG.png',
        width: 1200,
        height: 630,
        alt: 'Watchtower CISO Forum Austin 2026',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Watchtower CISO Forum Austin 2026 | Cybersecurity Leaders Summit',
    description: 'Join 70+ senior security leaders at the premier CISO forum in Austin, TX. Sept 20-22, 2026.',
    images: ['/WatchtowerForumOG.png'],
  },
};

export default function WatchtowerForumAustinSeptember2026Page() {
  const eventSchema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Watchtower CISO Forum Austin 2026',
    description: 'Premier CISO and cybersecurity leaders forum featuring 48 hours of networking, threat intelligence briefings, and strategic discussions for senior security executives.',
    startDate: '2026-09-20T14:00:00-06:00',
    endDate: '2026-09-22T13:00:00-06:00',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: 'Hyatt Lost Pines',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Austin',
        addressRegion: 'TX',
        addressCountry: 'US',
      },
    },
    image: '/WatchtowerForumOG.png',
    organizer: {
      '@type': 'Organization',
      name: 'Sentinel Nexus',
      url: 'https://sentinelnexus.org',
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InvitationOnly',
      name: 'Invitation-Only Registration',
    },
    audience: {
      '@type': 'Audience',
      audienceType: 'CISO, Chief Information Security Officer, Cybersecurity Executive, VP Security',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      <WatchtowerForumAustinSeptemberContent />
    </>
  );
}
