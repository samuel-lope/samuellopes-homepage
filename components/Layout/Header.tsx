import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../../constants';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-center border-b-2 border-border-dark bg-background-dark/80 backdrop-blur-sm">
      <nav className="flex w-full max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="size-8 text-primary flex items-center justify-center border-2 border-primary">
            <span className="text-xl font-black font-display">S</span>
          </div>
          <h2 className="text-xl font-black uppercase tracking-widest font-display">Samuel Lopes</h2>
        </div>

        {/* Desktop Nav */}
        <div className="hidden sm:flex items-center gap-6 font-mono text-sm">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="border-b-2 border-transparent hover:border-primary transition-colors text-text-dark"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="sm:hidden text-text-dark"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 border-b-2 border-border-dark bg-background-dark p-4 sm:hidden flex flex-col gap-4 font-mono">
             {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="block text-lg hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          </div>
        )}
      </nav>
    </header>
  );
};