import React from 'react';
import { SectionHeading } from '../UI/SectionHeading';

export const About: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-16" id="sobre">
      <SectionHeading>Sobre</SectionHeading>
      <div className="border-2 border-border-dark p-6 hover:bg-background-dark/50 transition-colors">
        <p className="text-base font-normal leading-relaxed text-text-dark/90 font-display">
          Um profissional com uma visão de mundo diferenciada, arquiteto e desenvolvedor, sempre pronto para descobrir e disposto a ensinar.
        </p>
      </div>
    </section>
  );
};