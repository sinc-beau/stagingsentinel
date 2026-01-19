'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [forumsOpen, setForumsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  const forumEvents = [
    { name: 'National (March 1-3)', path: '/watchtower-ciso-forum-austin-march-2026' },
    { name: 'West (May 17-19)', path: '/watchtower-ciso-forum-las-vegas-march-2026' },
    { name: 'East (May 31-June 2)', path: '/watchtower-ciso-forum-miami-may-2026' },
    { name: 'Canada (August 2026)', path: '/watchtower-ciso-forum-canada-august-2026' },
    { name: 'National (Sept 20-22)', path: '/watchtower-ciso-forum-austin-september-2026' },
  ];

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (forumsOpen && !target.closest('.forums-dropdown')) {
        setForumsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [forumsOpen]);

  const navItems = [
    { name: 'Guild', path: '/guild-membership' },
    { name: 'Forums', path: '/forums' },
    { name: 'Shield Sessions', path: '/shield-sessions' },
    { name: 'Briefings', path: '/briefings' },
    { name: 'Intelligence', path: '/intelligence' },
    { name: 'Sponsors', path: '/solution-providers' },
    // { name: 'Sentinel SOC', path: '/command' },
    // { name: 'Access', path: '/access' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <Image
              src="/SENTINEL NEXUS.png"
              alt="Sentinel Nexus"
              width={300}
              height={60}
              className="h-12 w-auto group-hover:opacity-80 transition-opacity"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.name === 'Forums' ? (
                  <div className="relative forums-dropdown">
                    <button
                      onClick={() => setForumsOpen(!forumsOpen)}
                      className={`relative text-lg font-medium tracking-wide transition-all duration-300 group flex items-center gap-1 ${
                        pathname.includes('watchtower-ciso-forum')
                          ? 'text-teal-400'
                          : 'text-slate-300 hover:text-teal-400'
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                      {mounted && (
                        <motion.div
                          className="absolute -bottom-1 left-0 h-0.5 bg-teal-400"
                          initial={{ width: 0 }}
                          animate={{ width: pathname.includes('watchtower-ciso-forum') || forumsOpen ? '100%' : 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </button>
                    <AnimatePresence>
                      {forumsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-slate-900 border border-slate-700 rounded-lg shadow-2xl overflow-hidden z-50"
                        >
                          <div className="p-2">
                            {forumEvents.map((event) => (
                              <Link
                                key={event.path}
                                href={event.path}
                                className="block px-4 py-3 text-sm text-slate-300 hover:text-teal-400 hover:bg-slate-800 rounded transition-colors"
                              >
                                {event.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    className={`relative text-lg font-medium tracking-wide transition-all duration-300 group ${
                      pathname === item.path
                        ? 'text-teal-400'
                        : 'text-slate-300 hover:text-teal-400'
                    }`}
                  >
                    {item.name}
                    {mounted && (
                      <motion.div
                        className="absolute -bottom-1 left-0 h-0.5 bg-teal-400"
                        initial={{ width: 0 }}
                        animate={{ width: pathname === item.path ? '100%' : 0 }}
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-teal-400 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900/95 backdrop-blur-sm"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.name === 'Forums' ? (
                    <div>
                      <button
                        onClick={() => setForumsOpen(!forumsOpen)}
                        className={`flex items-center justify-between w-full text-lg font-medium tracking-wide transition-colors ${
                          pathname.includes('watchtower-ciso-forum')
                            ? 'text-teal-400'
                            : 'text-slate-300 hover:text-teal-400'
                        }`}
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform ${forumsOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {forumsOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-2 ml-4 space-y-2"
                          >
                            {forumEvents.map((event) => (
                              <Link
                                key={event.path}
                                href={event.path}
                                onClick={() => setIsOpen(false)}
                                className={`block py-2 text-sm font-medium tracking-wide transition-colors ${
                                  pathname === event.path
                                    ? 'text-teal-400'
                                    : 'text-slate-400 hover:text-teal-400'
                                }`}
                              >
                                {event.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block text-lg font-medium tracking-wide transition-colors ${
                        pathname === item.path
                          ? 'text-teal-400'
                          : 'text-slate-300 hover:text-teal-400'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}