import React from 'react';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Research from './components/Research';

// /* Wraps any section with a fade-up entrance animation */
// const SectionReveal = ({ children, delay = 0 }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 40 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true, margin: '-60px' }}
//     transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
//   >
//     {children}
//   </motion.div>
// );

function App() {
  return (
    <div>
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Research />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;