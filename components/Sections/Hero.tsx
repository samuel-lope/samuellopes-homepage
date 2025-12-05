import React from 'react';
import { Button } from '../UI/Button';
import { PROFILE_IMAGE } from '../../constants';

export const Hero: React.FC = () => {
  return (
    <section className="flex w-full flex-col gap-8 py-16 text-center md:flex-row md:py-24 md:text-left">
      <div className="flex flex-col gap-6 md:w-1/2 md:justify-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-6xl font-black tracking-tighter sm:text-7xl font-display">
            SAMUEL <br className="hidden sm:block" />LOPES
          </h1>
          <h2 className="font-mono text-lg text-primary sm:text-xl font-bold">
            // ARQUITETO | URBANISTA | PROFESSOR
          </h2>
        </div>
        <p className="text-base leading-relaxed text-text-dark/90 font-display max-w-lg mx-auto md:mx-0">
          No futuro, não muito distante, quem não conseguir transformar ideias em ação em questão de minutos SERÁ ENGOLIDO.
        </p>
        <div className="flex justify-center gap-4 md:justify-start">
          <Button href="#projetos">Ver Projetos</Button>
          <Button variant="outline" href="#contato">Contato</Button>
        </div>
      </div>
      
      <div className="md:w-1/2">
        <div className="aspect-square w-full border-2 border-border-dark p-2">
          <div 
            className="h-full w-full bg-cover bg-center bg-no-repeat grayscale hover:grayscale-0 transition-all duration-500" 
            style={{ backgroundImage: `url('${PROFILE_IMAGE}')` }}
            role="img"
            aria-label="Foto profissional de Samuel Lopes"
          />
        </div>
      </div>
    </section>
  );
};