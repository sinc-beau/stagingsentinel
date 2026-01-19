'use client'

import React, { useState } from 'react';
import { Shield, Download, Palette, Type, Eye } from 'lucide-react';

export default function BrandAssetsContent() {
  const [darkBg, setDarkBg] = useState(true);

  const logos = [
    { src: '/sentinelmainlogo.png', name: 'Main Logo', description: 'Primary logo with full color' },
    { src: '/sentinelmaintransp.png', name: 'Main Logo (Transparent)', description: 'Primary logo with transparent background' },
    { src: '/sentinellogoblackwhite.png', name: 'Black & White', description: 'Monochrome version' },
    { src: '/sentinellogovar.png', name: 'Logo Variation 1', description: 'Alternative design variant' },
    { src: '/sentinellogovar2.png', name: 'Logo Variation 2', description: 'Alternative design variant' },
    { src: '/sentineltranspvar1.png', name: 'Transparent Variant 1', description: 'Transparent background variant' },
    { src: '/sentineltranspvar2.png', name: 'Transparent Variant 2', description: 'Transparent background variant' },
    { src: '/sentinentranspvar3.png', name: 'Transparent Variant 3', description: 'Transparent background variant' },
  ];

  const colors = [
    { name: 'Teal', hex: '#14b8a6', usage: 'Primary brand color' },
    { name: 'Cyan', hex: '#22d3ee', usage: 'Secondary accent' },
    { name: 'Black', hex: '#000000', usage: 'Base background' },
    { name: 'Slate 950', hex: '#020617', usage: 'Deep background' },
    { name: 'Slate 900', hex: '#0f172a', usage: 'Card backgrounds' },
    { name: 'Slate 400', hex: '#94a3b8', usage: 'Secondary text' },
    { name: 'Slate 300', hex: '#cbd5e1', usage: 'Body text' },
    { name: 'White', hex: '#ffffff', usage: 'Headlines' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-black to-slate-950">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(to_right,#14b8a6_1px,transparent_1px),linear-gradient(to_bottom,#14b8a6_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Shield className="w-12 h-12 text-teal-400" />
          </div>
          <h1 className="text-6xl font-black text-white mb-4">
            SENTINEL<span className="text-teal-400">NEXUS</span>
          </h1>
          <p className="text-xl text-slate-400">Brand Assets & Guidelines</p>
          <p className="text-sm text-slate-500 mt-2">Internal Use Only - Non-Indexed Page</p>
        </div>

        {/* Logo Variations Section */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Eye className="w-6 h-6 text-teal-400" />
              <h2 className="text-3xl font-black text-white">Logo Variations</h2>
            </div>
            <button
              onClick={() => setDarkBg(!darkBg)}
              className="flex items-center gap-2 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-300 hover:border-teal-500 transition-colors"
            >
              Toggle Background: {darkBg ? 'Dark' : 'Light'}
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="group relative bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl overflow-hidden hover:border-teal-500/50 transition-all"
              >
                <div
                  className={`aspect-square flex items-center justify-center p-8 transition-colors ${
                    darkBg ? 'bg-slate-950' : 'bg-white'
                  }`}
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="p-4 border-t border-slate-800">
                  <h3 className="text-sm font-bold text-white mb-1">{logo.name}</h3>
                  <p className="text-xs text-slate-400">{logo.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Color Palette Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Palette className="w-6 h-6 text-teal-400" />
            <h2 className="text-3xl font-black text-white">Color Palette</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {colors.map((color, index) => (
              <div
                key={index}
                className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl overflow-hidden hover:border-teal-500/50 transition-all"
              >
                <div
                  className="h-32"
                  style={{ backgroundColor: color.hex }}
                />
                <div className="p-4">
                  <h3 className="text-sm font-bold text-white mb-1">{color.name}</h3>
                  <p className="text-xs text-teal-400 font-mono mb-2">{color.hex}</p>
                  <p className="text-xs text-slate-400">{color.usage}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">Color Usage Guidelines</h3>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 rounded-full bg-teal-400 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-teal-400">Teal (#14b8a6)</span> - Primary CTAs, accents, interactive elements
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 rounded-full bg-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-cyan-400">Cyan (#22d3ee)</span> - Gradients, highlights, secondary accents
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 rounded-full bg-black border border-slate-600 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-white">Black (#000000)</span> - Primary backgrounds, overlays
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Typography Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Type className="w-6 h-6 text-teal-400" />
            <h2 className="text-3xl font-black text-white">Typography</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl p-8">
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-2">Primary Font</h3>
                <p className="text-base text-slate-300 mb-4">System Font Stack</p>
                <p className="text-xs text-slate-500 font-mono">-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif</p>
              </div>

              <div className="space-y-6 pt-6 border-t border-slate-800">
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Hero Headlines</p>
                  <p className="text-5xl font-black text-white">Bold & Impactful</p>
                  <p className="text-xs text-slate-400 mt-2">6xl-8xl, font-black (900), tight leading</p>
                </div>

                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Section Titles</p>
                  <p className="text-3xl font-black text-white">Strong Hierarchy</p>
                  <p className="text-xs text-slate-400 mt-2">4xl-5xl, font-black (900)</p>
                </div>

                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Subsection Titles</p>
                  <p className="text-xl font-bold text-white">Clear Structure</p>
                  <p className="text-xs text-slate-400 mt-2">2xl-3xl, font-bold (700)</p>
                </div>

                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Body Text</p>
                  <p className="text-base text-slate-300">Professional and easy to read. The body text maintains excellent readability across all devices with proper line height and spacing.</p>
                  <p className="text-xs text-slate-400 mt-2">base-xl, font-normal (400)</p>
                </div>

                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Labels & Tags</p>
                  <p className="text-xs font-semibold text-teal-400 uppercase tracking-wider">TECHNICAL LABEL</p>
                  <p className="text-xs text-slate-400 mt-2">xs-sm, font-semibold (600), uppercase, tracking-wider</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Monospace Font</h3>
              <p className="text-sm text-slate-300 mb-4">Used for technical labels, code snippets, and system information</p>
              <div className="bg-black/50 rounded-lg p-4 border border-slate-700">
                <p className="text-sm font-mono text-teal-400">const brandColor = '#14b8a6';</p>
                <p className="text-sm font-mono text-cyan-400">const accentColor = '#22d3ee';</p>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Guidelines */}
        <section>
          <div className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-500/30 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-teal-400" />
              <h2 className="text-2xl font-black text-white">Brand Usage Guidelines</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-300">
              <div>
                <h3 className="text-base font-bold text-white mb-3">Do's</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400 mt-1">✓</span>
                    <span>Maintain clear space around logos equal to the height of the letter "S"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400 mt-1">✓</span>
                    <span>Use high contrast with backgrounds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400 mt-1">✓</span>
                    <span>Display wordmark in uppercase</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400 mt-1">✓</span>
                    <span>Use gradient version for hero sections</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-3">Don'ts</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Never distort, rotate, or alter logo proportions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Don't use logos on busy backgrounds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Avoid using colors outside the brand palette</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Never recreate or redraw the logo</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-teal-500/30">
              <p className="text-sm text-slate-400 text-center">
                For questions about brand usage or to request additional assets, contact the Sentinel Nexus team.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
