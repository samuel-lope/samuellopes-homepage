import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 w-full border-t-2 border-border-dark">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <p className="font-mono text-sm text-text-dark/70 text-center sm:text-left">
          © {new Date().getFullYear()} SAMUEL LOPES. TODOS OS DIREITOS RESERVADOS.
        </p>
        <div className="flex items-center gap-4">
          {/* <a aria-label="LinkedIn" className="text-text-dark/70 hover:text-primary transition-colors" href="#">
            <Linkedin size={24} />
          </a> */}
          <a aria-label="Instagram" className="text-text-dark/70 hover:text-primary transition-colors" href="https://www.instagram.com/samuellopes">
            <Instagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};