import React from 'react';
import { Header } from './components/Layout/Header';
import { Hero } from './components/Sections/Hero';
import { About } from './components/Sections/About';
import { Publications } from './components/Sections/Publications';
import { Projects } from './components/Sections/Projects';
import { Contact } from './components/Sections/Contact';
import { Footer } from './components/Layout/Footer';

const App: React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col font-display bg-background-dark text-text-dark">
      <Header />
      <main className="flex flex-1 flex-col items-center">
        <div className="flex w-full max-w-5xl flex-col items-center px-4 sm:px-6 lg:px-8">
          <Hero />
          <About />
          <Publications />
          <Projects />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;