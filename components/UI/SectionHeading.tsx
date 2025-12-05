import React from 'react';

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ children, className = '' }) => {
  return (
    <h2 className={`text-5xl font-black tracking-tighter pb-6 uppercase ${className}`}>
      {children}
    </h2>
  );
};