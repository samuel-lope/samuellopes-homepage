import React from 'react';
import { SectionHeading } from '../UI/SectionHeading';
import { PROJECTS } from '../../constants';

export const Projects: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-16" id="projetos">
      <SectionHeading>Projetos</SectionHeading>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <div 
            key={project.id}
            className="flex flex-col border-2 border-border-dark bg-background-dark transition-transform hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[4px_4px_0_0_#33A1FF]"
          >
            <img 
              className="h-48 w-full object-cover border-b-2 border-border-dark" 
              src={project.imageUrl} 
              alt={project.title}
            />
            <div className="flex flex-1 flex-col p-6">
              <h3 className="mb-2 text-2xl font-black font-display">{project.title}</h3>
              <p className="mb-4 flex-1 text-sm text-text-dark/80 font-display">{project.description}</p>
              <a className="font-mono text-sm font-bold text-primary hover:underline uppercase" href={project.link}>
                Ver Projeto &gt;&gt;
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};