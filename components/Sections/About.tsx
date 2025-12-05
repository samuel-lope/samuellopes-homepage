import React from 'react';
import { SectionHeading } from '../UI/SectionHeading';

export const About: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-16" id="sobre">
      <SectionHeading>Sobre</SectionHeading>
      <div className="border-2 border-border-dark p-6 hover:bg-background-dark/50 transition-colors">
        <p className="text-base font-normal leading-relaxed text-text-dark/90 font-display">
          Uma breve biografia destacando sua formação acadêmica, experiência profissional e áreas de especialização. 
          Samuel Lopes combina uma abordagem teórica rigorosa com uma prática inovadora para criar espaços que inspiram e funcionam. 
          Possui mestrado em Urbanismo pela Universidade de São Paulo e liderou diversos projetos de revitalização urbana e 
          design de edifícios comerciais e residenciais. Seu trabalho é reconhecido pela atenção aos detalhes, 
          sustentabilidade e integração harmoniosa com o ambiente.
        </p>
      </div>
    </section>
  );
};