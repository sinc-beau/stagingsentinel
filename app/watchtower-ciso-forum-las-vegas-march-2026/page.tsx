import React from 'react';
import { Metadata } from 'next';
import { WatchtowerForumLasVegasContent } from './components/WatchtowerForumLasVegasContent';

export const metadata = {
  title: 'Watchtower CISO Forum Las Vegas 2026 | March 1-3 | Cybersecurity Executive Summit',
  description: 'Premier CISO and cybersecurity leaders forum in Las Vegas, Nevada. Join 70+ senior security executives for 48 hours of networking, threat intelligence briefings, and strategic discussions at the M Resort, March 1-3, 2026.',
  keywords: 'CISO forum, cybersecurity conference Las Vegas, security leaders summit, executive networking, threat intelligence, cybersecurity events 2026, Las Vegas security conference',
  openGraph: {
    title: 'Watchtower CISO Forum Las Vegas 2026 | Cybersecurity Leaders Summit',
    description: 'Join 70+ senior security leaders at the premier CISO forum in Las Vegas, NV. March 1-3, 2026 at the M Resort. Invitation-only executive event.',
    url: 'https://sentinelnexus.org/watchtower-ciso-forum-las-vegas-march-2026',
    siteName: 'Sentinel Nexus',
    images: [
      {
        url: '/WatchtowerForumOG.png',
        width: 1200,
        height: 630,
        alt: 'Watchtower CISO Forum Las Vegas 2026',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Watchtower CISO Forum Las Vegas 2026 | Cybersecurity Leaders Summit',
    description: 'Join 70+ senior security leaders at the premier CISO forum in Las Vegas, NV. March 1-3, 2026.',
    images: ['/WatchtowerForumOG.png'],
  },
};

export default function WatchtowerForumLasVegasMarch2026Page() {
  const eventSchema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Watchtower CISO Forum Las Vegas 2026',
    description: 'Premier CISO and cybersecurity leaders forum featuring 48 hours of networking, threat intelligence briefings, and strategic discussions for senior security executives.',
    startDate: '2026-03-01T14:00:00-08:00',
    endDate: '2026-03-03T13:00:00-08:00',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: 'M Resort',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Las Vegas',
        addressRegion: 'NV',
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
      <WatchtowerForumLasVegasContent />
    </>
  );
}
