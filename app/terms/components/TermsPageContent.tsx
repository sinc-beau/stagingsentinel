import React from 'react';
import { Shield, FileText } from 'lucide-react';

export function TermsPageContent() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <FileText className="w-8 h-8 text-teal-400" />
              <h1 className="text-4xl font-black text-white tracking-wider">
                TERMS & CONDITIONS
              </h1>
            </div>
            <p className="text-slate-400">
              Last updated: January 1, 2025
            </p>
          </div>

          <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-slate-300 leading-relaxed">
                By accessing and using the Sentinel Nexus platform, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Permission is granted to temporarily access the materials on Sentinel Nexus for personal, non-commercial transitory viewing only.
              </p>
              <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                <li>This is the grant of a license, not a transfer of title</li>
                <li>This license shall automatically terminate if you violate any of these restrictions</li>
                <li>Upon terminating your viewing of these materials, you must destroy any downloaded materials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Disclaimer</h2>
              <p className="text-slate-300 leading-relaxed">
                The materials on Sentinel Nexus are provided on an 'as is' basis. Sentinel Nexus makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Limitations</h2>
              <p className="text-slate-300 leading-relaxed">
                In no event shall Sentinel Nexus or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Sentinel Nexus, even if Sentinel Nexus or a Sentinel Nexus authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Privacy Policy</h2>
              <p className="text-slate-300 leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the platform, to understand our practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Governing Law</h2>
              <p className="text-slate-300 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}