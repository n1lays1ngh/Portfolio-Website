import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when a link is clicked
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top transition-all ${scrolled || isOpen ? 'bg-dark-nav shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container">
        <a className="navbar-brand fw-bold fs-4" href="#">
          <span className="text-gradient">/Nilay Singh/</span>
        </a>
        
        <button 
          className="navbar-toggler border-0 text-white" 
          type="button" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X className="text-teal" /> : <Menu className="text-teal" />}
        </button>

        <div className={`collapse navbar-collapse justify-content-end ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav align-items-center gap-1 bg-mobile-menu">
            {['Home', 'About', 'Skills' ,'Education', 'Experience', 'Projects','Certificates'].map((item) => (
              <li className="nav-item" key={item}>
                <a 
                  className="nav-link text-light px-3 py-1 rounded-pill nav-hover-effect" 
                  href={`#${item.toLowerCase()}`}
                  style={{ fontSize: '0.85rem', letterSpacing: '0.5px' }} // Smaller font size
                  onClick={handleLinkClick}
                >
                  {item}
                </a>
              </li>
            ))}
            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              <a className="btn btn-teal rounded-pill px-4 btn-sm fw-bold" href="#contact" onClick={handleLinkClick}>Contact Me</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;