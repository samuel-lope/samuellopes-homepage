import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  href?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  href, 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden h-12 px-6 text-base font-bold uppercase tracking-wider transition-colors border-2";
  
  const variants = {
    primary: "bg-primary text-background-dark border-primary hover:bg-text-dark hover:text-background-dark",
    secondary: "bg-secondary text-background-dark border-secondary hover:bg-white hover:text-background-dark",
    outline: "bg-transparent text-secondary border-secondary hover:bg-secondary hover:text-background-dark"
  };

  const widthClass = fullWidth ? "w-full" : "";
  const classes = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};