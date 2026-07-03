import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// const NAV_LINKS = [
//   { label: 'About',    href: '#about' },
//   { label: 'Work',     href: '#projects' },
//   { label: 'Research', href: '#research' },
//   { label: 'Contact',  href: '#contact' },
// ];
const NAV_LINKS = [
  // { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Research', href: '#research' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' }
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'research', 'contact'];
      const offset = window.scrollY + 120;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && offset >= el.offsetTop && offset < el.offsetTop + el.offsetHeight) {
          setActive(`#${id}`);
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href) => {
    if (href === '#projects') return active === '#projects' || active === '#work';
    return active === href;
  };

  return (
    <>
      <style>{`
        .nav-root {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          transition: background 0.4s ease, box-shadow 0.4s ease;
        }
        .nav-root.scrolled {
          background: rgba(10, 10, 10, 0.88);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          box-shadow: 0 1px 0 rgba(255,255,255,0.06);
        }
        .nav-inner {
          max-width: 1600px;
          margin: 0 auto;
          padding: 0 2rem;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* Brand */
        .nav-brand {
          font-family: 'Playfair Display', serif;
          font-size: 1.15rem;
          font-weight: 700;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 2px;
          letter-spacing: -0.01em;
        }
        .brand-slash {
          color: #f59e0b;
          font-weight: 300;
          font-family: 'JetBrains Mono', monospace;
          font-size: 1.3rem;
          line-height: 1;
        }
        .brand-name {
          color: #fff;
          font-weight: 700;
        }

        /* Desktop links */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
          list-style: none;
        }
        .nav-link-item {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.08em;
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          position: relative;
          transition: color 0.2s;
          text-transform: lowercase;
        }
        .nav-link-item::after {
          content: '';
          position: absolute;
          bottom: -3px; left: 0;
          width: 0; height: 1.5px;
          background: #C69C36;
          transition: width 0.25s ease;
        }
        .nav-link-item:hover { color: #E8CC7A; }
        .nav-link-item:hover::after { width: 100%; }
        .nav-link-item.active { color: #E8CC7A; }
        .nav-link-item.active::after { width: 100%; }

        /* CTA Resume */
        .nav-resume {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11.5px;
          font-weight: 600;
          letter-spacing: 0.06em;
          color: #C69C36;
          border: 1px solid rgba(198,156,54,0.4);
          padding: 7px 18px;
          border-radius: 100px;
          text-decoration: none;
          transition: all 0.25s ease;
          text-transform: lowercase;
        }
        .nav-resume:hover {
          background: rgba(198,156,54,0.12);
          border-color: rgba(198,156,54,0.7);
          color: #D4AE52;
          transform: translateY(-1px);
        }

        /* Hamburger */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 6px;
          z-index: 1010;
        }
        .hamburger span {
          display: block;
          width: 22px; height: 2px;
          background: rgba(255,255,255,0.7);
          border-radius: 2px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* Mobile drawer */
        .mobile-drawer {
          position: fixed;
          top: 68px; left: 0; right: 0;
          background: rgba(10, 10, 10, 0.97);
          backdrop-filter: blur(30px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          z-index: 999;
          padding: 2rem;
        }
        .mobile-nav-link {
          display: block;
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 700;
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          padding: 0.75rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          transition: color 0.2s;
        }
        .mobile-nav-link:hover { color: #fff; }
        .mobile-nav-link.active { color: #E8CC7A; }
        .mobile-drawer-footer {
          padding-top: 1.5rem;
          display: flex;
          gap: 1rem;
        }

        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .hamburger   { display: flex; }
        }
        @media (max-width: 640px) {
          .nav-inner { padding: 0 1.25rem; }
        }
      `}</style>

      <motion.header
        className={`nav-root${scrolled ? ' scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="nav-inner">
          {/* Brand */}
          <a className="nav-brand" href="#home" onClick={() => setIsOpen(false)}>
            <span className="brand-slash">/</span>
            <span className="brand-name">Nilay Singh</span>
            <span className="brand-slash">/</span>
          </a>

          {/* Desktop Nav */}
          <nav className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <ul className="nav-links">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    className={`nav-link-item${isActive(href) ? ' active' : ''}`}
                    href={href}
                    onClick={() => setActive(href)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <a className="nav-resume" href="/resume.pdf" download="Nilay_Singh_Resume.pdf">
              resume.pdf ↓
            </a>
          </nav>

          {/* Hamburger */}
          <button
            className={`hamburger${isOpen ? ' open' : ''}`}
            onClick={() => setIsOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-drawer"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {NAV_LINKS.map(({ label, href }, i) => (
              <motion.a
                key={href}
                className={`mobile-nav-link${isActive(href) ? ' active' : ''}`}
                href={href}
                onClick={() => { setActive(href); setIsOpen(false); }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
              >
                {label}
              </motion.a>
            ))}
            <div className="mobile-drawer-footer">
              <a
                href="/resume.pdf"
                download="Nilay_Singh_Resume.pdf"
                className="nav-resume"
                onClick={() => setIsOpen(false)}
              >
                resume.pdf ↓
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
