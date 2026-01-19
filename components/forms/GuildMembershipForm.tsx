"use client"

import React, { useEffect, useState, useRef } from 'react';
import { FormSuccessMessage } from '@/components/ui/FormSuccessMessage';

interface GuildMembershipFormProps {
  className?: string;
  onFormSubmitted?: () => void;
}

export function GuildMembershipForm({ className = '', onFormSubmitted }: GuildMembershipFormProps) {
  const [hubspotLoaded, setHubspotLoaded] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const onFormSubmittedRef = useRef(onFormSubmitted);

  useEffect(() => {
    onFormSubmittedRef.current = onFormSubmitted;
  }, [onFormSubmitted]);

  const injectFormStyles = () => {
    const styleId = 'guild-membership-form-styles';
    const existingStyle = document.getElementById(styleId);
    if (existingStyle) {
      existingStyle.remove();
    }

    const style = document.createElement('style');
    style.id = styleId;

    const css = [
      '#guild-membership-form { background-color: transparent !important; border: none !important; padding: 0 !important; min-height: 400px !important; }',
      '#guild-membership-form .hbspt-form, #guild-membership-form .hs-form { background-color: transparent !important; padding: 0 !important; margin: 0 !important; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important; }',
      '#guild-membership-form .hs-form-field { margin-bottom: 1.5rem !important; }',
      '#guild-membership-form label, #guild-membership-form legend { color: #e2e8f0 !important; font-weight: 600 !important; font-size: 0.875rem !important; margin-bottom: 0.5rem !important; text-transform: uppercase !important; letter-spacing: 0.05em !important; }',
      '#guild-membership-form input[type="text"], #guild-membership-form input[type="email"], #guild-membership-form input[type="tel"], #guild-membership-form select, #guild-membership-form textarea { background-color: #1e293b !important; border: 2px solid #475569 !important; color: #ffffff !important; border-radius: 8px !important; padding: 12px 16px !important; font-size: 16px !important; width: 100% !important; transition: all 0.3s ease !important; }',
      '#guild-membership-form input:focus, #guild-membership-form select:focus, #guild-membership-form textarea:focus { border-color: #14b8a6 !important; box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.25) !important; outline: none !important; }',
      '#guild-membership-form input::placeholder, #guild-membership-form textarea::placeholder { color: #94a3b8 !important; }',
      '#guild-membership-form select { background-image: url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3e%3cpath stroke=\'%2394a3b8\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'m6 8 4 4 4-4\'/%3e%3c/svg%3e") !important; background-position: right 0.5rem center !important; background-repeat: no-repeat !important; background-size: 1.5em 1.5em !important; padding-right: 2.5rem !important; appearance: none !important; }',
      '#guild-membership-form .hs-button, #guild-membership-form input[type="submit"] { background: linear-gradient(to right, #14b8a6, #22d3ee) !important; color: #ffffff !important; border: none !important; border-radius: 12px !important; padding: 16px 32px !important; font-size: 16px !important; font-weight: 700 !important; text-transform: uppercase !important; letter-spacing: 0.05em !important; cursor: pointer !important; width: 100% !important; margin-top: 24px !important; transition: all 0.3s ease !important; }',
      '#guild-membership-form .hs-button:hover, #guild-membership-form input[type="submit"]:hover { background: linear-gradient(to right, #0f766e, #06b6d4) !important; transform: scale(1.02) !important; box-shadow: 0 10px 25px -5px rgba(20, 184, 166, 0.4) !important; }',
      '#guild-membership-form .hs-error-msgs { color: #f87171 !important; background-color: rgba(239, 68, 68, 0.1) !important; border: 1px solid rgba(239, 68, 68, 0.3) !important; padding: 8px 12px !important; border-radius: 6px !important; margin-top: 8px !important; font-size: 14px !important; }',
      '#guild-membership-form .hs-form-required { color: #f87171 !important; }',
      '#guild-membership-form .legal-consent-container, #guild-membership-form .hs-richtext { color: #cbd5e1 !important; font-size: 13px !important; line-height: 1.5 !important; }',
      '#guild-membership-form a { color: #14b8a6 !important; text-decoration: underline !important; }',
      '#guild-membership-form input[type="checkbox"] { background-color: #1e293b !important; border: 2px solid #475569 !important; accent-color: #14b8a6 !important; width: 1.25rem !important; height: 1.25rem !important; }',
      '#guild-membership-form .submitted-message { background-color: rgba(34, 197, 94, 0.1) !important; color: #22c55e !important; border: 1px solid rgba(34, 197, 94, 0.3) !important; border-radius: 12px !important; padding: 24px !important; text-align: center !important; font-weight: 600 !important; }'
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
      const formContainer = document.getElementById('guild-membership-form');
      if (formContainer) {
        formContainer.innerHTML = '';
      }

      setTimeout(() => {
        if (window.hbspt && formContainer) {
          window.hbspt.forms.create({
            portalId: "45377644",
            formId: "cb3679cd-bf00-43d0-b67c-85f1a9bfdf6c",
            target: '#guild-membership-form',
            region: "na1",
            onFormReady: function() {
              injectFormStyles();
            },
            onFormSubmitted: function() {
              console.log('Guild membership form submitted successfully!');
              setIsSubmitted(true);
              if (onFormSubmittedRef.current) {
                setTimeout(() => {
                  onFormSubmittedRef.current?.();
                }, 3000);
              }
            }
          });
        }
      }, 100);
    }
  }, [hubspotLoaded]);

  if (isSubmitted) {
    return (
      <FormSuccessMessage
        title="Application Submitted!"
        message="Thank you for your interest in joining the Sentinel Guild. We'll review your application and reach out soon."
        className="py-8"
      />
    );
  }

  return (
    <div id="guild-membership-form" className={className}></div>
  );
}

export default GuildMembershipForm;
