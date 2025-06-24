"use client";

import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'tag' | 'tag-selected';
  style?: React.CSSProperties;
}

const buttonVariants = {
  primary: 'btn-primary bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors',
  secondary: 'btn-secondary bg-gray-200 text-gray-900 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors',
  tag: 'btn-tag rounded-full text-sm font-medium transition-colors hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2',
  'tag-selected': 'btn-tag-selected bg-blue-500 text-white rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
};

export const Button = ({ children, className = '', variant = 'primary', style = {}, ...props }: ButtonProps) => {
  const baseClasses = variant ? buttonVariants[variant] : '';
  const combinedClasses = `${baseClasses} ${className}`.trim();

  return (
    <button
      className={combinedClasses}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
};
