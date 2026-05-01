import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = ['Home', 'About', 'Skills', 'Education', 'Experience',"Research", 'Projects', 'Certificates'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navItems.map(item => item.toLowerCase());
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to handle smooth scroll & state update
  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsOpen(false); // Close mobile menu if open
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`navbar navbar-expand-lg fixed-top transition-all ${
          scrolled || isOpen ? 'py-2 shadow-lg' : 'bg-transparent py-4'
        }`}
        style={{ 
          backgroundColor: scrolled || isOpen ? 'rgba(10, 10, 10, 0.85)' : 'transparent',
          backdropFilter: scrolled || isOpen ? 'blur(10px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none'
        }}
      >
        <div className="container">
          
          {/* --- BRAND LOGO (Updated) --- */}
          <a 
            className="navbar-brand fw-bold fs-4 d-flex align-items-center gap-2" 
            href="#home"
            onClick={() => handleNavClick('home')} // Updates state to 'home'
          >
             <span className="text-gradient">/Nilay Singh/</span>
          </a>
          
          <button 
            className="navbar-toggler border-0 text-white p-0" 
            type="button" 
            onClick={() => setIsOpen(!isOpen)}
            style={{ boxShadow: 'none' }}
          >
            {isOpen ? <X className="text-teal" size={28} /> : <Menu className="text-teal" size={28} />}
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav align-items-center gap-2">
              {navItems.map((item) => (
                <li className="nav-item" key={item}>
                  <a 
                    className={`nav-link px-3 py-2 rounded-pill transition-all position-relative ${
                      activeSection === item.toLowerCase() ? 'text-white' : 'text-secondary hover-text-white'
                    }`}
                    href={`#${item.toLowerCase()}`}
                    style={{ fontSize: '0.85rem', fontWeight: activeSection === item.toLowerCase() ? '600' : '400' }}
                    onClick={() => handleNavClick(item.toLowerCase())}
                  >
                    {item}
                    {activeSection === item.toLowerCase() && (
                      <motion.div 
                        layoutId="active-nav"
                        className="position-absolute bottom-0 start-50 translate-middle-x bg-teal rounded-circle"
                        style={{ width: '4px', height: '4px', marginBottom: '4px' }}
                      />
                    )}
                  </a>
                </li>
              ))}
              
              <li className="nav-item ms-3">
                <a 
                  className="btn btn-teal rounded-pill px-4 btn-sm fw-bold hover-elevate" 
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                >
                  Let's Talk
                </a>
              </li>
            </ul>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed-top bg-dark-section border-bottom border-secondary border-opacity-10 d-lg-none overflow-hidden"
            style={{ top: '60px', zIndex: 1020 }}
          >
            <div className="container py-4">
              <div className="d-flex flex-column gap-3">
                {navItems.map((item) => (
                  <a 
                    key={item}
                    className={`nav-link fs-5 fw-bold ${
                      activeSection === item.toLowerCase() ? 'text-teal' : 'text-secondary'
                    }`}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => handleNavClick(item.toLowerCase())}
                  >
                    {item}
                  </a>
                ))}
                <hr className="border-secondary border-opacity-25 my-2" />
                <div className="d-flex gap-4 justify-content-start">
                  <a href="https://github.com/n1lays1ngh" target="_blank" rel="noreferrer" className="text-secondary hover-text-white"><Github size={20} /></a>
                  <a href="https://linkedin.com/in/n1lays1ngh" target="_blank" rel="noreferrer" className="text-secondary hover-text-white"><Linkedin size={20} /></a>
                  <a href="mailto:your-email@example.com" className="text-secondary hover-text-white"><Mail size={20} /></a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;