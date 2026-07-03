import React from 'react';
import { DATA } from '../data';

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);
const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
  </svg>
);

const socials = [
  { href: DATA.socials.github, Icon: GithubIcon, label: 'GitHub' },
  { href: DATA.socials.linkedin, Icon: LinkedinIcon, label: 'LinkedIn' },
  { href: DATA.socials.twitter, Icon: TwitterIcon, label: 'Twitter / X' },
];

const NAV_COL_1 = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Research', href: '#research' },
];
const NAV_COL_2 = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
  { label: 'Resume', href: '/resume.pdf' },
];

const Footer = () => (
  <footer style={{ background: '#080808', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '70px 0 40px' }}>
    <style>{`
      .footer-inner {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
      }
      .footer-grid {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
        gap: 3rem;
        margin-bottom: 4rem;
      }
      .footer-link {
        font-family: 'Inter', sans-serif;
        font-size: 13px;
        color: rgba(255,255,255,0.3);
        text-decoration: none;
        display: block;
        margin-bottom: 10px;
        transition: color 0.2s;
      }
      .footer-link:hover { color: rgba(255,255,255,0.85); }
      .footer-social {
        display: flex;
        gap: 14px;
        margin-top: 1.5rem;
      }
      .footer-social-link {
        color: rgba(255,255,255,0.3);
        text-decoration: none;
        transition: color 0.2s, transform 0.2s;
        display: flex;
      }
      .footer-social-link:hover {
        color: #8b5cf6;
        transform: translateY(-2px);
      }
      .footer-bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 2rem;
        border-top: 1px solid rgba(255,255,255,0.05);
        flex-wrap: wrap;
        gap: 1rem;
      }
      @media (max-width: 768px) {
        .footer-grid { grid-template-columns: 1fr; gap: 2rem; }
        .footer-bottom { flex-direction: column; text-align: center; }
      }
    `}</style>

    <div className="footer-inner">
      <div className="footer-grid">
        {/* Brand column */}
        <div>
          <a
            href="#home"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.4rem',
              fontWeight: 700,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '2px',
              marginBottom: '1rem',
            }}
          >
            <span style={{
              color: '#f59e0b',
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 300,
              fontSize: '1.5rem',
            }}>/</span>
            <span style={{ color: '#fff' }}>Nilay Singh</span>
            <span style={{
              color: '#f59e0b',
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 300,
              fontSize: '1.5rem',
            }}>/</span>
          </a>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '13px',
            color: 'rgba(255,255,255,0.3)',
            lineHeight: 1.8,
            maxWidth: '300px',
            marginBottom: '0.5rem',
          }}>
            AI & Backend Engineer. Building scalable systems,
            intelligent models, and things that matter.
          </p>
          <a
            href={`mailto:${DATA.contact.email}`}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '12px',
              color: 'rgba(124,58,237,0.7)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseOver={e => e.target.style.color = '#a78bfa'}
            onMouseOut={e => e.target.style.color = 'rgba(124,58,237,0.7)'}
          >
            {DATA.contact.email}
          </a>

          <div className="footer-social">
            {socials.map(({ href, Icon, label }) => (
              <a key={label} href={href} className="footer-social-link" target="_blank" rel="noreferrer" aria-label={label}>
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Nav col 1 */}
        <div>
          <h6 style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '10px', fontWeight: 700,
            letterSpacing: '0.15em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.2)', marginBottom: '1.2rem',
          }}>
            Explore
          </h6>
          {NAV_COL_1.map(({ label, href }) => (
            <a key={href} href={href} className="footer-link">{label}</a>
          ))}
        </div>

        {/* Nav col 2 */}
        <div>
          <h6 style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '10px', fontWeight: 700,
            letterSpacing: '0.15em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.2)', marginBottom: '1.2rem',
          }}>
            Work
          </h6>
          {NAV_COL_2.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="footer-link"
              {...(href === '/resume.pdf' ? { download: 'Nilay_Singh_Resume.pdf' } : {})}
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '11px',
          color: 'rgba(255,255,255,0.2)',
        }}>
          © 2026 /Nilay Singh/. All rights reserved.
        </span>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '11px',
          color: 'rgba(255,255,255,0.15)',
        }}>
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;