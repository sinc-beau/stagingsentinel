"use client"

import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { FormSuccessMessage } from '@/components/ui/FormSuccessMessage';

interface DynamicForumFormProps {
  formId: string;
  portalId?: string;
  region?: string;
  className?: string;
}

export function DynamicForumForm({
  formId,
  portalId = "45377644",
  region = "na1",
  className = ''
}: DynamicForumFormProps) {
  const [hubspotLoaded, setHubspotLoaded] = useState(false);
  const [currentFormId, setCurrentFormId] = useState(formId);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const containerId = useMemo(() => `dynamic-forum-form-${formId.replace(/[^a-zA-Z0-9]/g, '-')}`, [formId]);
  const styleId = useMemo(() => `${containerId}-styles`, [containerId]);

  const injectFormStyles = useCallback(() => {
    const existingStyle = document.getElementById(styleId);
    if (existingStyle) {
      existingStyle.remove();
    }

    const style = document.createElement('style');
    style.id = styleId;

    const css = [
      `#${containerId} { background-color: transparent !important; border: none !important; padding: 0 !important; min-height: 400px !important; isolation: auto !important; transform: none !important; }`,
      `#${containerId} .hbspt-form, #${containerId} .hs-form { background-color: transparent !important; padding: 0 !important; margin: 0 !important; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important; }`,
      `#${containerId} .hs-form-field { margin-bottom: 1.5rem !important; }`,
      `#${containerId} label, #${containerId} legend, #${containerId} span, #${containerId} p, #${containerId} div { color: #ffffff !important; }`,
      `#${containerId} .hs-form-field > label { color: #e2e8f0 !important; font-weight: 600 !important; font-size: 0.875rem !important; margin-bottom: 0.5rem !important; text-transform: uppercase !important; letter-spacing: 0.05em !important; display: block !important; }`,
      `#${containerId} input[type="text"], #${containerId} input[type="email"], #${containerId} input[type="tel"], #${containerId} select, #${containerId} textarea { background-color: #1e293b !important; border: 2px solid #475569 !important; color: #ffffff !important; border-radius: 8px !important; padding: 12px 16px !important; font-size: 16px !important; width: 100% !important; transition: all 0.3s ease !important; }`,
      `#${containerId} input:focus, #${containerId} select:focus, #${containerId} textarea:focus { border-color: #14b8a6 !important; box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.25) !important; outline: none !important; }`,
      `#${containerId} input::placeholder, #${containerId} textarea::placeholder { color: #94a3b8 !important; }`,
      `#${containerId} select { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%2394a3b8' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e") !important; background-position: right 0.5rem center !important; background-repeat: no-repeat !important; background-size: 1.5em 1.5em !important; padding-right: 2.5rem !important; appearance: none !important; }`,
      `#${containerId} .hs-button, #${containerId} input[type="submit"] { background: linear-gradient(to right, #14b8a6, #22d3ee) !important; color: #000000 !important; border: none !important; border-radius: 12px !important; padding: 16px 32px !important; font-size: 16px !important; font-weight: 700 !important; text-transform: uppercase !important; letter-spacing: 0.05em !important; cursor: pointer !important; width: 100% !important; margin-top: 24px !important; transition: all 0.3s ease !important; pointer-events: auto !important; position: relative !important; z-index: 10 !important; }`,
      `#${containerId} .hs-button:hover, #${containerId} input[type="submit"]:hover { background: linear-gradient(to right, #0f766e, #06b6d4) !important; transform: scale(1.02) !important; box-shadow: 0 10px 25px -5px rgba(20, 184, 166, 0.4) !important; }`,
      `#${containerId} .hs-button:active, #${containerId} input[type="submit"]:active { transform: scale(0.98) !important; }`,
      `#${containerId} .hs-error-msgs { color: #f87171 !important; background-color: rgba(239, 68, 68, 0.1) !important; border: 1px solid rgba(239, 68, 68, 0.3) !important; padding: 8px 12px !important; border-radius: 6px !important; margin-top: 8px !important; font-size: 14px !important; }`,
      `#${containerId} .hs-form-required { color: #f87171 !important; }`,
      `#${containerId} .legal-consent-container, #${containerId} .legal-consent-container *, #${containerId} .hs-richtext, #${containerId} .hs-richtext * { color: #cbd5e1 !important; font-size: 13px !important; line-height: 1.5 !important; }`,
      `#${containerId} a { color: #14b8a6 !important; text-decoration: underline !important; }`,
      `#${containerId} .hs-form-checkbox, #${containerId} .hs-form-radio { display: flex !important; align-items: flex-start !important; gap: 0.75rem !important; margin-bottom: 0.75rem !important; }`,
      `#${containerId} .hs-form-checkbox input[type="checkbox"], #${containerId} .hs-form-radio input[type="radio"] { background-color: #1e293b !important; border: 2px solid #475569 !important; accent-color: #14b8a6 !important; width: 1.25rem !important; height: 1.25rem !important; min-width: 1.25rem !important; flex-shrink: 0 !important; margin: 0 !important; }`,
      `#${containerId} .hs-form-checkbox label, #${containerId} .hs-form-radio label { color: #ffffff !important; font-weight: 400 !important; text-transform: none !important; letter-spacing: normal !important; font-size: 14px !important; margin: 0 !important; flex: 1 !important; }`,
      `#${containerId} .hs-form-booleancheckbox-display { display: flex !important; align-items: flex-start !important; gap: 0.75rem !important; }`,
      `#${containerId} .hs-form-booleancheckbox-display input { order: -1 !important; }`,
      `#${containerId} .inputs-list { list-style: none !important; padding: 0 !important; margin: 0 !important; }`,
      `#${containerId} .inputs-list li { margin-bottom: 0.75rem !important; }`,
      `#${containerId} .submitted-message { background-color: rgba(34, 197, 94, 0.1) !important; color: #22c55e !important; border: 1px solid rgba(34, 197, 94, 0.3) !important; border-radius: 12px !important; padding: 24px !important; text-align: center !important; font-weight: 600 !important; }`,
      `#${containerId} iframe[src*="recaptcha"], #${containerId} iframe[title="reCAPTCHA"] { z-index: 2147483647 !important; pointer-events: auto !important; position: relative !important; touch-action: auto !important; }`,
      `#${containerId} .grecaptcha-badge, #${containerId} .g-recaptcha { z-index: 2147483647 !important; pointer-events: auto !important; }`
    ].join(' ');

    style.textContent = css;
    document.head.appendChild(style);
  }, [containerId, styleId]);


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
    if (formId !== currentFormId) {
      setCurrentFormId(formId);
    }
  }, [formId, currentFormId]);

  useEffect(() => {
    if (hubspotLoaded && window.hbspt && currentFormId) {
      const formContainer = document.getElementById(containerId);
      if (formContainer) {
        formContainer.innerHTML = '';
      }

      setTimeout(() => {
        if (window.hbspt && formContainer) {
          console.log('Creating HubSpot form with ID:', currentFormId);
          window.hbspt.forms.create({
            portalId: portalId,
            formId: currentFormId,
            target: `#${containerId}`,
            region: region,
            onFormReady: function() {
              console.log('Form ready, injecting styles');
              injectFormStyles();
            },
            onFormSubmitted: function() {
              console.log('Form submitted successfully via callback!');
              setIsSubmitted(true);
            }
          });
        }
      }, 100);
    }

    return () => {
      const formContainer = document.getElementById(containerId);
      if (formContainer) {
        formContainer.innerHTML = '';
      }

      const existingStyle = document.getElementById(styleId);
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, [hubspotLoaded, currentFormId, portalId, region, containerId, styleId, injectFormStyles]);

  if (isSubmitted) {
    return (
      <FormSuccessMessage
        title="Registration Submitted!"
        message="Thank you for your interest. We'll review your registration and be in touch soon with event details."
        className="py-12"
      />
    );
  }

  return (
    <div id={containerId} className={className}></div>
  );
}

export default DynamicForumForm;
