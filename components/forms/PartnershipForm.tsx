"use client"

import React, { useEffect, useState } from 'react';

interface PartnershipFormProps {
  className?: string;
}

export function PartnershipForm({ className = '' }: PartnershipFormProps) {
  const [hubspotLoaded, setHubspotLoaded] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const injectFormStyles = () => {
    const styleId = 'partnership-form-styles';
    const existingStyle = document.getElementById(styleId);
    if (existingStyle) {
      existingStyle.remove();
    }
    
    const style = document.createElement('style');
    style.id = styleId;
    
    const css = [
      '#partnership-form { background-color: transparent !important; border: none !important; padding: 0 !important; min-height: 400px !important; isolation: auto !important; transform: none !important; }',
      '#partnership-form .hbspt-form, #partnership-form .hs-form { background-color: transparent !important; padding: 0 !important; margin: 0 !important; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important; }',
      '#partnership-form .hs-form-field { margin-bottom: 1.5rem !important; }',
      '#partnership-form label, #partnership-form legend { color: #e2e8f0 !important; font-weight: 600 !important; font-size: 0.875rem !important; margin-bottom: 0.5rem !important; text-transform: uppercase !important; letter-spacing: 0.05em !important; }',
      '#partnership-form input[type="text"], #partnership-form input[type="email"], #partnership-form input[type="tel"], #partnership-form select, #partnership-form textarea { background-color: #1e293b !important; border: 2px solid #475569 !important; color: #ffffff !important; border-radius: 8px !important; padding: 12px 16px !important; font-size: 16px !important; width: 100% !important; transition: all 0.3s ease !important; }',
      '#partnership-form input:focus, #partnership-form select:focus, #partnership-form textarea:focus { border-color: #14b8a6 !important; box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.25) !important; outline: none !important; }',
      '#partnership-form input::placeholder, #partnership-form textarea::placeholder { color: #94a3b8 !important; }',
      '#partnership-form select { background-image: url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3e%3cpath stroke=\'%2394a3b8\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'m6 8 4 4 4-4\'/%3e%3c/svg%3e") !important; background-position: right 0.5rem center !important; background-repeat: no-repeat !important; background-size: 1.5em 1.5em !important; padding-right: 2.5rem !important; appearance: none !important; }',
      '#partnership-form .hs-button, #partnership-form input[type="submit"] { background: linear-gradient(to right, #14b8a6, #22d3ee) !important; color: #ffffff !important; border: none !important; border-radius: 12px !important; padding: 16px 32px !important; font-size: 16px !important; font-weight: 700 !important; text-transform: uppercase !important; letter-spacing: 0.05em !important; cursor: pointer !important; width: 100% !important; margin-top: 24px !important; transition: all 0.3s ease !important; }',
      '#partnership-form .hs-button:hover, #partnership-form input[type="submit"]:hover { background: linear-gradient(to right, #0f766e, #06b6d4) !important; transform: scale(1.02) !important; box-shadow: 0 10px 25px -5px rgba(20, 184, 166, 0.4) !important; }',
      '#partnership-form .hs-error-msgs { color: #f87171 !important; background-color: rgba(239, 68, 68, 0.1) !important; border: 1px solid rgba(239, 68, 68, 0.3) !important; padding: 8px 12px !important; border-radius: 6px !important; margin-top: 8px !important; font-size: 14px !important; }',
      '#partnership-form .hs-form-required { color: #f87171 !important; }',
      '#partnership-form .legal-consent-container, #partnership-form .hs-richtext { color: #cbd5e1 !important; font-size: 13px !important; line-height: 1.5 !important; }',
      '#partnership-form a { color: #14b8a6 !important; text-decoration: underline !important; }',
      '#partnership-form input[type="checkbox"] { background-color: #1e293b !important; border: 2px solid #475569 !important; accent-color: #14b8a6 !important; width: 1.25rem !important; height: 1.25rem !important; }',
      '#partnership-form .submitted-message { background-color: rgba(34, 197, 94, 0.1) !important; color: #22c55e !important; border: 1px solid rgba(34, 197, 94, 0.3) !important; border-radius: 12px !important; padding: 24px !important; text-align: center !important; font-weight: 600 !important; }',
      '#partnership-form iframe[src*="recaptcha"], #partnership-form iframe[title="reCAPTCHA"] { z-index: 2147483647 !important; pointer-events: auto !important; position: relative !important; touch-action: auto !important; }',
      '#partnership-form .grecaptcha-badge, #partnership-form .g-recaptcha { z-index: 2147483647 !important; pointer-events: auto !important; }'
    ].join(' ');
    
    style.textContent = css;
    document.head.appendChild(style);
  };

  useEffect(() => {
    if (!hubspotLoaded) {
      const script = document.createElement('script');
      script.src = 'https://js.hsforms.net/forms/embed/v2.js';
      script.charset = 'utf-8';
      script.type = 'text/javascript';
      script.onload = () => setHubspotLoaded(true);
      document.head.appendChild(script);
    }
  }, [hubspotLoaded]);

  useEffect(() => {
    if (hubspotLoaded && window.hbspt) {
      const formContainer = document.getElementById('partnership-form');
      if (formContainer) {
        formContainer.innerHTML = '';
      }
      
      setTimeout(() => {
        if (window.hbspt && formContainer) {
          window.hbspt.forms.create({
            portalId: "45377644",
            formId: "bd17030b-44b8-45b9-ad3d-d6d6fa2a8874",
            target: '#partnership-form',
            region: "na1",
            onFormReady: function() {
              injectFormStyles();
            },
            onFormSubmitted: function() {
              console.log('Partnership form submitted successfully!');
              setIsSubmitted(true);
            }
          });
        }
      }, 100);
    }
  }, [hubspotLoaded]);

  return (
    <div className="relative">
      {isSubmitted && (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-6">
            <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
          <p className="text-lg text-slate-300">Your submission was successful!</p>
        </div>
      )}
      <div id="partnership-form" className={`${className} ${isSubmitted ? 'hidden' : ''}`}></div>
    </div>
  );
}

export default PartnershipForm;