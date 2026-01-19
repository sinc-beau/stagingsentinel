import React from 'react';
import Link from 'next/link';
import { Shield } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-slate-800 bg-slate-900/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        {/* Our Proud Partners Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="text-teal-400 font-mono text-sm tracking-widest mb-4 uppercase">TRUSTED BY</div>
            <h3 className="text-3xl font-black text-white mb-6">OUR PROUD PARTNERS</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-items-center">
            <img
              src="/MicrosoftLogo.png"
              alt="Microsoft"
              className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 brightness-0 invert"
            />
            <img
              src="/Okta logo.png"
              alt="Okta"
              className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 brightness-0 invert"
            />
            <img
              src="/druva_logo_color.png"
              alt="Druva"
              className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 brightness-0 invert"
            />
            <img
              src="/Cyera_Logo.png"
              alt="Cyera"
              className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 brightness-0 invert"
            />
            <img
              src="/Acalvio-(AI-Powered)-EPS-vector-Logo-WHITE-RGB.png"
              alt="Acalvio"
              className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 brightness-0 invert"
            />
            <img
              src="/ibm-logo-white.png"
              alt="IBM"
              className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 brightness-0 invert"
            />
            <img
              src="/trendmicro.png"
              alt="Trend Micro"
              className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 brightness-0 invert"
            />
            <img
              src="/SentinelOne_Logo_RGB_1c_WHT.png"
              alt="SentinelOne"
              className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 brightness-0 invert"
            />
            <img
              src="/crowdstrike.png"
              alt="Crowdstrike"
              className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 brightness-0 invert"
            />
            <img
              src="/Dataminr_Logo_Full-Color_Reversed_RGB.png"
              alt="Dataminr"
              className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 brightness-0 invert"
            />
            <img
              src="/Fortinet-logo-cmyk-white.png"
              alt="Fortinet"
              className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 brightness-0 invert"
            />
            <img
              src="/Zscaler logo.png"
              alt="Zscaler"
              className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 brightness-0 invert"
            />
            <img
              src="/commvault.png"
              alt="Commvault"
              className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 brightness-0 invert"
            />
            <img
              src="/Logo_Varonis_White.png"
              alt="Varonis"
              className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 brightness-0 invert"
            />
            <img
              src="/threatlocker.png"
              alt="ThreatLocker"
              className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 brightness-0 invert"
            />
            <img
              src="/dux.png"
              alt="Dux Security"
              className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 brightness-0 invert"
            />
            <img
              src="/adaptivesecurity.png"
              alt="Adaptive Security"
              className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 brightness-0 invert"
            />
          </div>

          <div className="text-center mt-8">
            <p className="text-slate-400 text-sm italic">and many more</p>
          </div>
        </div>
        
        <div className="text-center space-y-8">
          <div className="flex items-center justify-center gap-3">
            <Shield className="w-8 h-8 text-teal-400" />
            <h3 className="text-2xl font-black text-white tracking-wider">
              SENTINEL<span className="text-teal-400">NEXUS</span>
            </h3>
          </div>
          
          <p className="text-xl text-slate-400 font-light">
            Where Leaders Guard Tomorrow's Digital Frontier
          </p>
          
          <div className="flex items-center justify-center gap-8 text-slate-500">
            <Link href="/contact" className="hover:text-teal-400 transition-colors">
              Contact Us
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-teal-400 transition-colors">
              Terms
            </Link>
            <span>•</span>
            <Link href="/privacy" className="hover:text-teal-400 transition-colors">
              Privacy
            </Link>
          </div>
          
          <div className="text-slate-600 text-sm">
            © 2024 Sentinel Nexus. All rights reserved.
          </div>
          
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="text-slate-600 text-xs">Powered by</span>
            <img
              src="/sinc-logo.svg"
              alt="SINC"
              className="h-4 opacity-60 hover:opacity-80 transition-opacity"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}