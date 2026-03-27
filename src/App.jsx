import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Loader from './components/layout/Loader';
import CustomCursor from './components/layout/CustomCursor';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Volunteer from './components/sections/Volunteer';
import Certifications from './components/sections/Certifications';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" setLoading={setLoading} />
        ) : (
          <div className="min-h-screen" key="main">
            <Navbar />
            <main>
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Volunteer />
              <Certifications />
              <Projects />
              <Contact />
            </main>
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;