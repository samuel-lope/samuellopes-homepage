import React from 'react';
import { SectionHeading } from '../UI/SectionHeading';
import { PUBLICATIONS } from '../../constants';

export const Publications: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-16" id="publicacoes">
      <SectionHeading>Publicações & Notícias</SectionHeading>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {PUBLICATIONS.map((pub) => (
          <div 
            key={pub.id}
            className={`flex flex-col border-2 border-border-dark bg-background-dark transition-transform hover:-translate-y-1 hover:-translate-x-1 hover:${pub.colorClass}`}
          >
            <img 
              className="h-48 w-full object-cover border-b-2 border-border-dark" 
              src={pub.imageUrl} 
              alt={pub.title}
            />
            <div className="flex flex-1 flex-col p-6">
              <span className={`mb-2 font-mono text-xs font-bold uppercase ${pub.tagColorClass}`}>
                [{pub.type}]
              </span>
              <h3 className="mb-2 text-2xl font-black font-display">{pub.title}</h3>
              <p className="mb-4 flex-1 text-sm text-text-dark/80 font-display">{pub.description}</p>
              <a className="font-mono text-sm font-bold text-primary hover:underline uppercase" href={pub.link}>
                Leia Mais &gt;&gt;
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};