'use client'

import React, { useEffect, useState } from 'react';

interface HubSpotFormEmbedProps {
  portalId: string;
  formId: string;
  region?: string;
  containerId?: string;
  onFormSubmitted?: () => void;
  onFormReady?: () => void;
}

export function HubSpotFormEmbed({ 
  portalId, 
  formId, 
  region = "na1", 
  containerId,
  onFormSubmitted,
  onFormReady 
}: HubSpotFormEmbedProps) {
  const [hubspotLoaded, setHubspotLoaded] = useState(false);
  const [formContainerId] = useState(containerId || `hubspot-form-${formId}-${Date.now()}`);

  // Load HubSpot script
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

  // Load HubSpot form when script is ready
  useEffect(() => {
    if (hubspotLoaded && window.hbspt) {
      const formContainer = document.getElementById(formContainerId);
      if (formContainer) {
        formContainer.innerHTML = '';
      }
      
      setTimeout(() => {
        if (window.hbspt && formContainer) {
          window.hbspt.forms.create({
            portalId: portalId,
            formId: formId,
            target: `#${formContainerId}`,
            region: region,
            onFormReady: onFormReady,
            onFormSubmitted: onFormSubmitted
          });
        }
      }, 100);
    }
  }, [hubspotLoaded, portalId, formId, region, formContainerId, onFormReady, onFormSubmitted]);

  // Add bespoke dark theme styles for HubSpot form
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      #${formContainerId} {
        background-color: #0f172a !important;
        border-radius: 12px !important;
        padding: 24px !important;
        border: 1px solid rgba(20, 184, 166, 0.3) !important;
      }
      
      #${formContainerId} .hs-form {
        background-color: transparent !important;
        padding: 0 !important;
        margin: 0 !important;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
      }
      
      #${formContainerId} .hs-form *,
      #${formContainerId} .hs-form label,
      #${formContainerId} .hs-form .hs-form-field label,
      #${formContainerId} .hs-form .hs-fieldtype-text label,
      #${formContainerId} .hs-form .hs-fieldtype-select label,
      #${formContainerId} .hs-form .hs-fieldtype-textarea label,
      #${formContainerId} .hs-form .hs-fieldtype-email label,
      #${formContainerId} .hs-form .hs-fieldtype-phone label,
      #${formContainerId} .hs-form .hs-fieldtype-number label,
      #${formContainerId} .hs-form .hs-fieldtype-radio label,
      #${formContainerId} .hs-form .hs-fieldtype-checkbox label,
      #${formContainerId} .hs-form p,
      #${formContainerId} .hs-form span,
      #${formContainerId} .hs-form div {
        color: #ffffff !important;
        font-weight: 500 !important;
      }
      
      #${formContainerId} .hs-form .hs-form-field > label {
        color: #e2e8f0 !important;
        font-weight: 600 !important;
        font-size: 0.875rem !important;
        margin-bottom: 0.5rem !important;
        display: block !important;
        text-transform: uppercase !important;
        letter-spacing: 0.05em !important;
      }
      
      #${formContainerId} .hs-form input[type="text"],
      #${formContainerId} .hs-form input[type="email"],
      #${formContainerId} .hs-form input[type="tel"],
      #${formContainerId} .hs-form input[type="number"],
      #${formContainerId} .hs-form input[type="password"],
      #${formContainerId} .hs-form select,
      #${formContainerId} .hs-form textarea {
        background-color: rgba(30, 41, 59, 0.8) !important;
        border: 2px solid rgba(71, 85, 105, 0.5) !important;
        color: #ffffff !important;
        border-radius: 8px !important;
        padding: 12px 16px !important;
        font-size: 16px !important;
        width: 100% !important;
        transition: all 0.3s ease !important;
        font-family: inherit !important;
      }
      
      #${formContainerId} .hs-form input:focus,
      #${formContainerId} .hs-form select:focus,
      #${formContainerId} .hs-form textarea:focus {
        border-color: rgba(20, 184, 166, 0.8) !important;
        box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.2) !important;
        outline: none !important;
        background-color: rgba(30, 41, 59, 1) !important;
      }
      
      #${formContainerId} .hs-form input::placeholder,
      #${formContainerId} .hs-form textarea::placeholder {
        color: #94a3b8 !important;
        opacity: 1 !important;
      }
      
      #${formContainerId} .hs-form select {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%2394a3b8' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e") !important;
        background-position: right 0.5rem center !important;
        background-repeat: no-repeat !important;
        background-size: 1.5em 1.5em !important;
        padding-right: 2.5rem !important;
      }
      
      #${formContainerId} .hs-form .hs-button,
      #${formContainerId} .hs-form input[type="submit"] {
        background: linear-gradient(to right, #14b8a6, #22d3ee) !important;
        color: #ffffff !important;
        border: none !important;
        border-radius: 12px !important;
        padding: 16px 32px !important;
        font-size: 16px !important;
        font-weight: 700 !important;
        text-transform: uppercase !important;
        letter-spacing: 0.05em !important;
        cursor: pointer !important;
        width: 100% !important;
        margin-top: 24px !important;
        transition: all 0.3s ease !important;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) !important;
      }
      
      #${formContainerId} .hs-form .hs-button:hover,
      #${formContainerId} .hs-form input[type="submit"]:hover {
        background: linear-gradient(to right, #0f766e, #06b6d4) !important;
        transform: scale(1.02) !important;
        box-shadow: 0 10px 25px -5px rgba(20, 184, 166, 0.4) !important;
      }
      
      #${formContainerId} .hs-form .hs-error-msgs,
      #${formContainerId} .hs-form .hs-error-msg {
        color: #f87171 !important;
        background-color: rgba(239, 68, 68, 0.1) !important;
        border: 1px solid rgba(239, 68, 68, 0.3) !important;
        padding: 8px 12px !important;
        border-radius: 6px !important;
        margin-top: 8px !important;
        font-size: 14px !important;
      }
      
      #${formContainerId} .hs-form .hs-form-required {
        color: #f87171 !important;
      }
      
      #${formContainerId} .hs-form .legal-consent-container,
      #${formContainerId} .hs-form .legal-consent-container *,
      #${formContainerId} .hs-form .hs-richtext,
      #${formContainerId} .hs-form .hs-richtext * {
        color: #cbd5e1 !important;
        font-size: 13px !important;
        line-height: 1.5 !important;
      }
      
      #${formContainerId} .hs-form .hs-richtext a {
        color: #14b8a6 !important;
        text-decoration: underline !important;
      }
      
      #${formContainerId} .hs-form .hs-richtext a:hover {
        color: #0f766e !important;
      }
      
      #${formContainerId} .hs-form .inputs-list {
        list-style: none !important;
        padding: 0 !important;
        margin: 0 !important;
        display: flex !important;
        flex-direction: column !important;
        gap: 12px !important;
      }

      #${formContainerId} .hs-form .hs-form-radio,
      #${formContainerId} .hs-form .hs-form-booleancheckbox {
        margin: 0 !important;
        padding: 0 !important;
        display: block !important;
      }

      #${formContainerId} .hs-form .hs-form-radio-display,
      #${formContainerId} .hs-form .hs-form-booleancheckbox-display {
        display: flex !important;
        align-items: center !important;
        gap: 12px !important;
        padding: 12px 16px !important;
        background-color: rgba(30, 41, 59, 0.4) !important;
        border: 2px solid rgba(71, 85, 105, 0.3) !important;
        border-radius: 8px !important;
        cursor: pointer !important;
        transition: all 0.2s ease !important;
        color: #e2e8f0 !important;
        font-size: 15px !important;
        font-weight: 400 !important;
        line-height: 1.5 !important;
      }

      #${formContainerId} .hs-form .hs-form-radio-display:hover,
      #${formContainerId} .hs-form .hs-form-booleancheckbox-display:hover {
        background-color: rgba(30, 41, 59, 0.6) !important;
        border-color: rgba(20, 184, 166, 0.5) !important;
      }

      #${formContainerId} .hs-form input[type="radio"],
      #${formContainerId} .hs-form input[type="checkbox"] {
        appearance: none !important;
        -webkit-appearance: none !important;
        width: 20px !important;
        height: 20px !important;
        min-width: 20px !important;
        min-height: 20px !important;
        background-color: rgba(30, 41, 59, 0.8) !important;
        border: 2px solid #475569 !important;
        border-radius: 4px !important;
        margin: 0 !important;
        cursor: pointer !important;
        position: relative !important;
        transition: all 0.2s ease !important;
        flex-shrink: 0 !important;
      }

      #${formContainerId} .hs-form input[type="radio"] {
        border-radius: 50% !important;
      }

      #${formContainerId} .hs-form input[type="radio"]:checked,
      #${formContainerId} .hs-form input[type="checkbox"]:checked {
        background-color: #14b8a6 !important;
        border-color: #14b8a6 !important;
      }

      #${formContainerId} .hs-form input[type="radio"]:checked::after,
      #${formContainerId} .hs-form input[type="checkbox"]:checked::after {
        content: '' !important;
        position: absolute !important;
        display: block !important;
      }

      #${formContainerId} .hs-form input[type="checkbox"]:checked::after {
        left: 6px !important;
        top: 2px !important;
        width: 5px !important;
        height: 10px !important;
        border: solid white !important;
        border-width: 0 2px 2px 0 !important;
        transform: rotate(45deg) !important;
      }

      #${formContainerId} .hs-form input[type="radio"]:checked::after {
        top: 50% !important;
        left: 50% !important;
        width: 8px !important;
        height: 8px !important;
        border-radius: 50% !important;
        background-color: white !important;
        transform: translate(-50%, -50%) !important;
      }

      #${formContainerId} .hs-form input[type="radio"]:focus,
      #${formContainerId} .hs-form input[type="checkbox"]:focus {
        outline: none !important;
        box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.3) !important;
      }

      #${formContainerId} .hs-form .hs-form-radio-display span,
      #${formContainerId} .hs-form .hs-form-booleancheckbox-display span {
        flex: 1 !important;
        color: #e2e8f0 !important;
      }
      
      #${formContainerId} .submitted-message {
        background: linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(34, 197, 94, 0.05)) !important;
        color: #22c55e !important;
        border: 2px solid rgba(34, 197, 94, 0.4) !important;
        border-radius: 12px !important;
        padding: 32px 24px !important;
        text-align: center !important;
        font-weight: 700 !important;
        font-size: 18px !important;
        box-shadow: 0 4px 12px rgba(34, 197, 94, 0.2) !important;
      }

      #${formContainerId} .hs-loading {
        color: #14b8a6 !important;
        text-align: center !important;
        font-weight: 600 !important;
      }

      #${formContainerId} .hs-recaptcha {
        margin-top: 20px !important;
        margin-bottom: 20px !important;
        padding: 16px !important;
        background-color: rgba(30, 41, 59, 0.4) !important;
        border: 2px solid rgba(71, 85, 105, 0.3) !important;
        border-radius: 8px !important;
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
        min-height: 78px !important;
        z-index: 2147483647 !important;
        isolation: auto !important;
      }

      #${formContainerId} .hs-recaptcha > div {
        z-index: 2147483647 !important;
        pointer-events: auto !important;
        position: relative !important;
      }

      #${formContainerId} iframe[src*="recaptcha"],
      #${formContainerId} iframe[title="reCAPTCHA"] {
        z-index: 2147483647 !important;
        pointer-events: auto !important;
        position: relative !important;
        touch-action: auto !important;
        border-radius: 4px !important;
      }

      #${formContainerId} .grecaptcha-badge,
      #${formContainerId} .g-recaptcha {
        z-index: 2147483647 !important;
        pointer-events: auto !important;
        opacity: 1 !important;
      }

      #${formContainerId} {
        isolation: auto !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, [formContainerId]);

  return (
    <div id={formContainerId} className="min-h-[400px]">
      {!hubspotLoaded && (
        <div className="text-center py-12">
          <div className="w-8 h-8 border-2 border-teal-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-400">Loading registration form...</p>
        </div>
      )}
    </div>
  );
}