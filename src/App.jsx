import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import GalaxyBackground from './components/GalaxyBackground';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Optional: Prevent scrolling while loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  return (
    <div className="relative min-h-screen transition-colors duration-300 overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <GalaxyBackground />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
      </main>
    </div>
  );
}

export default App;
