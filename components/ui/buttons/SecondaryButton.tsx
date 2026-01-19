import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface SecondaryButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  animate?: boolean;
}

export function SecondaryButton({ 
  href, 
  onClick, 
  children, 
  className = '', 
  disabled = false,
  type = 'button',
  animate = false
}: SecondaryButtonProps) {
  const baseClasses = `
    px-8 py-4 
    bg-transparent 
    border-2 border-teal-400 
    text-teal-400 font-bold text-lg 
    rounded-xl 
    hover:bg-teal-400 hover:text-black 
    transition-all duration-300 
    transform hover:scale-105
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