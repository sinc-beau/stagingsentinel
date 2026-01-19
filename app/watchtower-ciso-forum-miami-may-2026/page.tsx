import React from 'react';
import { Metadata } from 'next';
import { WatchtowerForumMiamiContent } from './components/WatchtowerForumMiamiContent';

export const metadata = {
  title: 'Watchtower CISO Forum Miami 2026 | May 31 - June 2 | Cybersecurity Executive Summit',
  description: 'Premier CISO and cybersecurity leaders forum in Miami, Florida. Join 70+ senior security executives for 48 hours of networking, threat intelligence briefings, and strategic discussions at Trump Doral, May 31 - June 2, 2026.',
  keywords: 'CISO forum, cybersecurity conference Miami, security leaders summit, executive networking, threat intelligence, cybersecurity events 2026, Miami security conference',
  openGraph: {
    title: 'Watchtower CISO Forum Miami 2026 | Cybersecurity Leaders Summit',
    description: 'Join 70+ senior security leaders at the premier CISO forum in Miami, FL. May 31 - June 2, 2026 at Trump Doral. Invitation-only executive event.',
    url: 'https://sentinelnexus.org/watchtower-ciso-forum-miami-may-2026',
    siteName: 'Sentinel Nexus',
    images: [
      {
        url: '/WatchtowerForumOG.png',
        width: 1200,
        height: 630,
        alt: 'Watchtower CISO Forum Miami 2026',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Watchtower CISO Forum Miami 2026 | Cybersecurity Leaders Summit',
    description: 'Join 70+ senior security leaders at the premier CISO forum in Miami, FL. May 31 - June 2, 2026.',
    images: ['/WatchtowerForumOG.png'],
  },
};

export default function WatchtowerForumMiamiMay2026Page() {
  const eventSchema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Watchtower CISO Forum Miami 2026',
    description: 'Premier CISO and cybersecurity leaders forum featuring 48 hours of networking, threat intelligence briefings, and strategic discussions for senior security executives.',
    startDate: '2026-05-31T14:00:00-05:00',
    endDate: '2026-06-02T13:00:00-05:00',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: 'Trump Doral',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Miami',
        addressRegion: 'FL',
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
      <WatchtowerForumMiamiContent />
    </>
  );
}
