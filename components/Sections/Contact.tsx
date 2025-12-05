import React, { FormEvent } from 'react';
import { Mail, Phone } from 'lucide-react';
import { Button } from '../UI/Button';

export const Contact: React.FC = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Obrigado pela mensagem! Entraremos em contato em breve.");
  };

  return (
    <section className="w-full py-12 md:py-16" id="contato">
      <div className="border-2 border-border-dark p-8 md:p-12 bg-background-dark">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h2 className="text-5xl font-black tracking-tighter uppercase font-display">Contato</h2>
            <p className="mt-2 text-base text-text-dark/80 font-display">
              Vamos colaborar em um novo projeto? Envie uma mensagem para iniciarmos a conversa.
            </p>
            <div className="mt-8 flex flex-col gap-4 font-mono">
              <a className="flex items-center gap-3 text-base hover:text-primary transition-colors group" href="mailto:contato@samuellopes.arq">
                <Mail className="group-hover:text-primary" size={24} />
                contato@sa.arq.br
              </a>
              <a className="flex items-center gap-3 text-base hover:text-primary transition-colors group" href="tel:+5511999998888">
                <Phone className="group-hover:text-primary" size={24} />
                +55 (61) 98313-9393
              </a>
            </div>
          </div>
          
          <form className="space-y-4 font-mono" onSubmit={handleSubmit}>
            <div>
              <label className="sr-only" htmlFor="name">Nome</label>
              <input 
                className="w-full border-2 border-border-dark bg-background-dark focus:border-primary focus:ring-0 p-3 placeholder:text-text-dark/50" 
                id="name" 
                placeholder="Seu nome" 
                type="text" 
                required
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="email">Email</label>
              <input 
                className="w-full border-2 border-border-dark bg-background-dark focus:border-primary focus:ring-0 p-3 placeholder:text-text-dark/50" 
                id="email" 
                placeholder="Seu email" 
                type="email" 
                required
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="message">Mensagem</label>
              <textarea 
                className="w-full border-2 border-border-dark bg-background-dark focus:border-primary focus:ring-0 p-3 placeholder:text-text-dark/50" 
                id="message" 
                placeholder="Sua mensagem" 
                rows={4}
                required
              ></textarea>
            </div>
            <Button type="submit" fullWidth>Enviar Mensagem</Button>
          </form>
        </div>
      </div>
    </section>
  );
};