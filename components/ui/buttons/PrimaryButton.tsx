import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface PrimaryButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  animate?: boolean;
}

export function PrimaryButton({ 
  href, 
  onClick, 
  children, 
  className = '', 
  disabled = false,
  type = 'button',
  animate = false
}: PrimaryButtonProps) {
  const baseClasses = `
    px-8 py-4 
    bg-gradient-to-r from-teal-500 to-cyan-500 
    text-white font-bold text-lg 
    rounded-xl 
    hover:from-teal-600 hover:to-cyan-600 
    transition-all duration-300 
    transform hover:scale-105 
    shadow-lg hover:shadow-xl hover:shadow-teal-500/20
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
    ${className}
  `;

  const ButtonContent = () => (
    <button 
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );

  if (href && !disabled) {
    return (
      <Link href={href}>
        {animate ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ButtonContent />
          </motion.div>
        ) : (
          <ButtonContent />
        )}
      </Link>
    );
  }

  return animate ? (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <ButtonContent />
    </motion.div>
  ) : (
    <ButtonContent />
  );
}