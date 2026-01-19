"use client"

import React, { useRef } from 'react';
import type { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from './components/HeroSection';
import { EventsSection } from './components/EventsSection';
import { ContentSections } from './components/ContentSections';

// Note: This metadata would need to be moved to a parent layout or server component
// since this is a client component. For now, adding it here for reference.
const pageMetadata = {
  title: 'Watchtower Forums - Exclusive CISO Forums & Security Leadership Events',
  description: 'Join exclusive Watchtower Forums for CISOs and security leaders. Network with 75+ verified executives, access classified briefings, and shape cybersecurity strategy.',
  keywords: 'CISO forum, cybersecurity events, security leadership forum, CISO network, cybersecurity conference, security executive events',
  openGraph: {
    title: 'Watchtower Forums - Exclusive CISO Forums & Security Leadership Events',
    description: 'Join exclusive Watchtower Forums for CISOs and security leaders. Network with 75+ verified executives, access classified briefings, and shape cybersecurity strategy.',
    url: 'https://sentinelnexus.org/forums',
    siteName: 'Sentinel Nexus',
    images: [
      {
        url: '/WatchtowerForumOG.png',
        width: 1200,
        height: 630,
        alt: 'Watchtower Forums - Exclusive CISO Forums',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Watchtower Forums - Exclusive CISO Forums & Security Leadership Events',
    description: 'Join exclusive Watchtower Forums for CISOs and security leaders. Network with 75+ verified executives, access classified briefings.',
    images: ['/WatchtowerForumOG.png'],
  },
};

export default function ForumsPage() {
  const eventsRef = useRef<HTMLDivElement>(null);

  const handleRegisterClick = () => {
    eventsRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
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

      {/* Navigation */}
      <Navigation />
      
      {/* Content */}
      <div className="relative z-10 pt-16">
        <HeroSection onRegisterClick={handleRegisterClick} />
        <div ref={eventsRef}>
          <EventsSection />
        </div>
        <ContentSections onRegisterClick={handleRegisterClick} />
        <Footer />
      </div>
    </div>
  );
}