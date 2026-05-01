import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = ['Home', 'About', 'Skills', 'Education', 'Experience', 'Research', 'Projects', 'Certificates'];

const SocialLinks = () => (
  <div className="social-links">
    <a href="https://github.com/n1lays1ngh" target="_blank" rel="noreferrer" aria-label="GitHub">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    </a>
    <a href="https://linkedin.com/in/n1lays1ngh" target="_blank" rel="noreferrer" aria-label="LinkedIn">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    </a>
    <a href="mailto:your-email@example.com" aria-label="Email">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    </a>
  </div>
);

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const navRef = useRef(null);
  const itemRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const scrollPos = window.scrollY + 120;
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.toLowerCase());
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveSection(item.toLowerCase());
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const activeRef = itemRefs.current[activeSection];
    const nav = navRef.current;
    if (activeRef && nav) {
      const navRect = nav.getBoundingClientRect();
      const itemRect = activeRef.getBoundingClientRect();
      setIndicatorStyle({
        left: itemRect.left - navRect.left,
        width: itemRect.width,
      });
    }
  }, [activeSection]);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsOpen(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        :root {
          --teal: #00d4aa;
          --teal-dim: rgba(0, 212, 170, 0.15);
          --teal-glow: rgba(0, 212, 170, 0.3);
          --glass-bg: rgba(8, 8, 12, 0.75);
          --border: rgba(255,255,255,0.06);
          --text-muted: rgba(255,255,255,0.45);
        }

        .nav-root {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          font-family: 'Inter', sans-serif;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nav-root.scrolled {
          background: var(--glass-bg);
          backdrop-filter: blur(20px) saturate(180%);
          border-bottom: 1px solid var(--border);
          box-shadow: 0 8px 40px rgba(0,0,0,0.4);
        }

        .nav-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* Brand */
        .nav-brand {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 1.1rem;
          color: #fff;
          text-decoration: none;
          letter-spacing: -0.03em;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .brand-slash { color: var(--teal); opacity: 0.7; font-weight: 300; }
        .brand-name {
          background: linear-gradient(135deg, #fff 30%, var(--teal));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Desktop nav list */
        .nav-list {
          display: flex;
          align-items: center;
          list-style: none;
          margin: 0; padding: 0;
          gap: 2px;
          position: relative;
        }

        .nav-indicator {
          position: absolute;
          bottom: -2px;
          height: 3px;
          background: linear-gradient(90deg, var(--teal), #00ffcc);
          border-radius: 2px;
          transition: left 0.35s cubic-bezier(0.16, 1, 0.3, 1), width 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 0 12px var(--teal-glow);
        }

        .nav-link {
          display: block;
          padding: 6px 12px;
          font-size: 0.9rem;
          font-weight: 400;
          letter-spacing: -0.01em;
          color: var(--text-muted);
          text-decoration: none;
          border-radius: 6px;
          transition: color 0.2s, background 0.2s;
          white-space: nowrap;
        }
        .nav-link:hover { color: rgba(255,255,255,0.85); background: rgba(255,255,255,0.04); }
        .nav-link.active { color: #fff; font-weight: 500; }

        /* CTA button */
        .nav-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 20px;
          background: var(--teal);
          color: #000;
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 0.82rem;
          letter-spacing: -0.01em;
          text-decoration: none;
          border-radius: 100px;
          transition: all 0.25s ease;
          margin-left: 12px;
        }
        .nav-cta:hover {
          background: #fff;
          color: #000;
          transform: translateY(-1px);
          box-shadow: 0 6px 24px var(--teal-glow);
        }
        .nav-cta .dot {
          width: 6px; height: 6px;
          background: #000;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.7); }
        }

        /* Hamburger */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 8px;
        }
        .hamburger span {
          display: block;
          width: 22px;
          height: 2px;
          background: #fff;
          border-radius: 2px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          transform-origin: center;
        }
        .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* Mobile drawer */
        .mobile-drawer {
          position: fixed;
          top: 72px; left: 0; right: 0;
          background: rgba(6, 6, 10, 0.97);
          backdrop-filter: blur(30px);
          border-bottom: 1px solid var(--border);
          z-index: 999;
          overflow: hidden;
        }
        .drawer-inner {
          padding: 1.5rem 2rem 2rem;
        }
        .drawer-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 0;
          color: var(--text-muted);
          text-decoration: none;
          font-family: 'Inter', sans-serif;
          font-size: 1.3rem;
          font-weight: 600;
          letter-spacing: -0.03em;
          border-bottom: 1px solid var(--border);
          transition: color 0.2s;
        }
        .drawer-link:last-of-type { border-bottom: none; }
        .drawer-link.active { color: var(--teal); }
        .drawer-link:hover { color: #fff; }
        .drawer-link .link-num {
          font-size: 0.65rem;
          font-weight: 400;
          color: var(--teal);
          opacity: 0.6;
          font-family: 'Inter', sans-serif;
          letter-spacing: 0.05em;
          min-width: 24px;
        }
        .drawer-footer {
          padding-top: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* Social links */
        .social-links {
          display: flex;
          gap: 16px;
        }
        .social-links a {
          color: var(--text-muted);
          transition: color 0.2s, transform 0.2s;
          display: flex;
        }
        .social-links a:hover {
          color: var(--teal);
          transform: translateY(-2px);
        }

        @media (max-width: 1024px) {
          .nav-desktop { display: none !important; }
          .hamburger { display: flex; }
        }
        @media (max-width: 640px) {
          .nav-inner { padding: 0 1.25rem; }
          .drawer-inner { padding: 1rem 1.25rem 1.5rem; }
        }
      `}</style>

      <motion.header
        className={`nav-root ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="nav-inner">

          {/* Brand */}
          <a className="nav-brand" href="#home" onClick={() => handleNavClick('home')}>
            <span className="brand-slash">/</span>
            <span className="brand-name">Nilay Singh</span>
            <span className="brand-slash">/</span>
          </a>

          {/* Desktop nav */}
          <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center' }}>
            <ul className="nav-list" ref={navRef}>
              <div className="nav-indicator" style={indicatorStyle} />
              {NAV_ITEMS.map((item) => (
                <li key={item}>
                  <a
                    ref={(el) => { itemRefs.current[item.toLowerCase()] = el; }}
                    className={`nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => handleNavClick(item.toLowerCase())}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <a className="nav-cta" href="#contact">
              <span className="dot" />
              Let's Talk
            </a>
          </div>

          {/* Hamburger */}
          <button
            className={`hamburger ${isOpen ? 'open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="drawer-inner">
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item}
                  className={`drawer-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => handleNavClick(item.toLowerCase())}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="link-num">{String(i + 1).padStart(2, '0')}</span>
                  {item}
                </motion.a>
              ))}
              <motion.div
                className="drawer-footer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: NAV_ITEMS.length * 0.04 + 0.1 }}
              >
                <SocialLinks />
                <a className="nav-cta" href="#contact" onClick={() => setIsOpen(false)}>
                  <span className="dot" />
                  Let's Talk
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;