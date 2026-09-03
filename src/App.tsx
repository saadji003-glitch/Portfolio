import React from 'react';
import { PhotoProvider } from './context/PhotoContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Certificates } from './components/Certificates';
import { Projects } from './components/Projects';
import { QuotesMarquee } from './components/QuotesMarquee';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <PhotoProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-cyan-500 selection:text-slate-950 scroll-smooth">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Education />
          <Skills />
          <Certificates />
          <Projects />
          <QuotesMarquee />
          <Contact />
        </main>
        <Footer />
      </div>
    </PhotoProvider>
  );
}
