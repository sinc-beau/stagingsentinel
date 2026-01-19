'use client'

import React, { useEffect, useRef } from 'react';
import { Loader as Loader2 } from 'lucide-react';

interface HubSpotFormProps {
  portalId: string;
  formId: string;
  region?: string;
  onFormReady?: () => void;
  onFormSubmit?: () => void;
  onFormSubmitted?: () => void;
}

export function HubSpotForm({
  portalId,
  formId,
  region = 'na1',
  onFormReady,
  onFormSubmit,
  onFormSubmitted
}: HubSpotFormProps) {
  const formRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  useEffect(() => {
    const loadHubSpotForm = async () => {
      try {
        // Check if HubSpot script is already loaded
        if (!window.hbspt) {
          // Load HubSpot script
          const script = document.createElement('script');
          script.src = 'https://js.hsforms.net/forms/embed/v2.js';
          script.charset = 'utf-8';
          script.type = 'text/javascript';
          
          await new Promise((resolve, reject) => {
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
          });
        }

        // Create the form
        if (window.hbspt && formRef.current) {
          window.hbspt.forms.create({
            portalId,
            formId,
            region,
            target: `#hubspot-form-${formId}`,
            onFormReady: () => {
              setIsLoading(false);
              onFormReady?.();
            },
            onFormSubmit: () => {
              onFormSubmit?.();
            },
            onFormSubmitted: () => {
              onFormSubmitted?.();
            }
          });
        }
      } catch (err) {
        console.error('Error loading HubSpot form:', err);
        setError('Failed to load form. Please try again later.');
        setIsLoading(false);
      }
    };

    loadHubSpotForm();
  }, [portalId, formId, region, onFormReady, onFormSubmit, onFormSubmitted]);

  if (error) {
    return (
      <div className="text-center py-8">
        <div className="text-red-400 mb-2">Form Error</div>
        <div className="text-slate-400 text-sm">{error}</div>
      </div>
    );
  }

  return (
    <div className="hubspot-form-container" style={{ isolation: 'auto', transform: 'none' }}>
      {isLoading && (
        <div className="flex items-center justify-center py-8">
          <Loader2 className="w-6 h-6 animate-spin text-teal-400 mr-2" />
          <span className="text-slate-300">Loading form...</span>
        </div>
      )}
      <div
        id={`hubspot-form-${formId}`}
        ref={formRef}
        className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}
        style={{ isolation: 'auto' }}
      />
      <style jsx>{`
        .hubspot-form-container iframe[src*="recaptcha"],
        .hubspot-form-container iframe[title="reCAPTCHA"] {
          z-index: 2147483647 !important;
          pointer-events: auto !important;
          position: relative !important;
          touch-action: auto !important;
        }
        .hubspot-form-container .grecaptcha-badge,
        .hubspot-form-container .g-recaptcha {
          z-index: 2147483647 !important;
          pointer-events: auto !important;
        }
      `}</style>
    </div>
  );
}