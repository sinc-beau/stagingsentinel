import React from 'react';
import { Metadata } from 'next';
import { WatchtowerForumCanadaContent } from './components/WatchtowerForumCanadaContent';

export const metadata = {
  title: 'Watchtower CISO Forum Canada 2026 | August | Cybersecurity Executive Summit',
  description: 'Premier CISO and cybersecurity leaders forum in Canada. Join 70+ senior security executives for 48 hours of networking, threat intelligence briefings, and strategic discussions, August 2026.',
  keywords: 'CISO forum, cybersecurity conference Canada, security leaders summit, executive networking, threat intelligence, cybersecurity events 2026, Canada security conference',
  openGraph: {
    title: 'Watchtower CISO Forum Canada 2026 | Cybersecurity Leaders Summit',
    description: 'Join 70+ senior security leaders at the premier CISO forum in Canada. August 2026. Invitation-only executive event.',
    url: 'https://sentinelnexus.org/watchtower-ciso-forum-canada-august-2026',
    siteName: 'Sentinel Nexus',
    images: [
      {
        url: '/WatchtowerForumOG.png',
        width: 1200,
        height: 630,
        alt: 'Watchtower CISO Forum Canada 2026',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Watchtower CISO Forum Canada 2026 | Cybersecurity Leaders Summit',
    description: 'Join 70+ senior security leaders at the premier CISO forum in Canada. August 2026.',
    images: ['/WatchtowerForumOG.png'],
  },
};

export default function WatchtowerForumCanadaAugust2026Page() {
  const eventSchema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Watchtower CISO Forum Canada 2026',
    description: 'Premier CISO and cybersecurity leaders forum featuring 48 hours of networking, threat intelligence briefings, and strategic discussions for senior security executives.',
    startDate: '2026-08-01T14:00:00-05:00',
    endDate: '2026-08-31T13:00:00-05:00',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: 'Canada',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'CA',
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
      <WatchtowerForumCanadaContent />
    </>
  );
}
