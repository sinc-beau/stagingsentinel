'use client'

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { NewsletterForm } from '@/components/forms/NewsletterForm';

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [showNewsletterForm, setShowNewsletterForm] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          crossOrigin="anonymous"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://45377644.fs1.hubspotusercontent-na1.net/hubfs/45377644/Sentinel%20Nexus%20Site%20Assets/3141210-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="max-w-7xl mx-auto text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 sm:space-y-8 relative z-10"
        >
          <div className="flex items-center justify-center mb-6 sm:mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-wider">
              SENTINEL<span style={{ color: '#2dd4bf' }}>NEXUS</span>
            </h1>
          </div>

          <motion.h2
            className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-6 sm:mb-8 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            CONNECT. INSPIRE. TRANSFORM.
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Sentinel Nexus is a peer-to-peer ecosystem of digital and in-person experiences for Security leaders to learn from each other and push their careers forward.
          </motion.p>

          {/* SINC Logo */}
          <motion.div
            className="flex justify-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div className="flex items-center gap-2">
              <span className="text-slate-400 text-sm">POWERED BY:</span>
              <img
                src="/sinc-logo.svg"
                alt="SINC"
                className="h-8 opacity-60 hover:opacity-80 transition-opacity"
              />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto px-4">
            <motion.div
              className="mb-8 sm:mb-12 lg:mb-0 md:col-span-2 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              <button 
                onClick={() => setShowNewsletterForm(true)}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold text-base sm:text-lg rounded-xl hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-teal-500/20"
              >
                Join the Nexus
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Newsletter Form Modal */}
      <Dialog open={showNewsletterForm} onOpenChange={setShowNewsletterForm}>
        <DialogContent className="max-w-2xl w-[95vw] sm:w-full bg-slate-900/95 backdrop-blur-xl border border-teal-400/30 text-white">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
              Join the Nexus
            </DialogTitle>
            <DialogDescription className="text-sm sm:text-base text-slate-300">
              Connect with 500+ security leaders and access exclusive intelligence.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <NewsletterForm />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}