import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check } from 'lucide-react';
import { DATA } from '../data';

// --- Custom Icons ---
const Github = ({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
);
const Linkedin = ({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
);
const Twitter = ({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
);
const Instagram = ({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
);
const LeetCode = ({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.156a5.3 5.3 0 0 0-.96-.088h-.002zm-2.99 7.976c-.25.014-.494.074-.721.187a1.368 1.368 0 0 0-.376 2.26l.006.006 4.622 4.579c.545.526 1.413.516 1.943-.029a1.377 1.377 0 0 0 .012-1.94L11.356 8.46a1.357 1.357 0 0 0-.863-.484zm7.333 2.563c-.432 0-.855.145-1.205.438a1.38 1.38 0 0 0-.24 1.941l1.983 2.444a3.033 3.033 0 0 1 .525 2.371 2.99 2.99 0 0 1-1.862 2.27 3.013 3.013 0 0 1-3.271-.869l-4.263-4.18a2.692 2.692 0 0 1-.681-1.169c-.021-.116-.035-.234-.041-.353a1.374 1.374 0 0 0-2.748.092c.021.414.092.822.215 1.215.235.749.62 1.43 1.125 1.996l4.262 4.18c2.198 2.155 5.864 2.23 8.154.17 2.29-2.059 2.347-5.592.132-7.727l-1.986-2.446a1.366 1.366 0 0 0-1.145-.533h-.169z" /></svg>
);

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(DATA.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-5 position-relative overflow-hidden" style={{ background: '#0a0a0a' }}>

      {/* --- Ambient Background --- */}
      <div className="position-absolute top-50 start-50 translate-middle w-100 h-100 opacity-20"
        style={{ background: 'radial-gradient(circle at center, rgba(198, 156, 54, 0.09) 0%, transparent 60%)' }}>
      </div>

      <div className="container position-relative z-1 text-center">

        {/* --- 1. HEADLINE --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-5"
        >
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-4" style={{ background: 'rgba(198,156,54,0.1)', border: '1px solid rgba(198,156,54,0.25)' }}>
            <div className="rounded-circle" style={{ width: '8px', height: '8px', background: '#C69C36', boxShadow: '0 0 10px rgba(198,156,54,0.5)', animation: 'live-pulse 1.5s ease-in-out infinite' }}></div>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#D4AE52' }}>Inbox Open</span>
          </div>

          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, color: '#fff', marginBottom: '1rem', lineHeight: 1.2 }}>
            Ready to create something{' '}
            <span style={{ background: 'linear-gradient(135deg, #D4AE52, #C69C36)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>extraordinary?</span>
          </h2>
          <p className="text-secondary fs-5" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Whether it's a new AI project, a freelance inquiry, or just a virtual coffee, I'm here for it.
          </p>
        </motion.div>

        {/* --- 2. THE HERO EMAIL --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="my-5"
        >
          <button
            onClick={handleCopy}
            className="group position-relative d-inline-block transition-all hover-scale"
            style={{
              background: 'transparent',
              border: 'none',
              padding: 0,
              outline: 'none',
              boxShadow: 'none',
              WebkitTapHighlightColor: 'transparent' // Prevents the grey tap-box on mobile
            }}
          >
            <h1 className="fw-bold transition-all text-break email-text"
              style={{
                fontSize: 'clamp(2rem, 5vw, 4.5rem)',
                letterSpacing: '-1px',
                color: '#e5e7eb', // Standard light gray
                lineHeight: 1.1,
                textShadow: '0 0 20px rgba(0,0,0,0.5)'
              }}
            >
              {DATA.contact.email}
            </h1>

            <div className="mt-3 d-flex align-items-center justify-content-center gap-2 text-secondary opacity-50 group-hover-opacity-100 transition-all">
              {copied ? <Check size={18} style={{ color: '#C69C36' }} /> : <Copy size={18} />}
              <span className="small text-uppercase tracking-widest fw-bold">
                {copied ? 'Copied to clipboard' : 'Click to copy'}
              </span>
            </div>
          </button>
        </motion.div>

        {/* --- 3. THE SOCIAL DOCK (No Resume Button) --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="d-flex justify-content-center"
        >
          <div className="d-flex align-items-center gap-2 p-2 rounded-pill border border-secondary border-opacity-25 bg-dark-card shadow-lg glass-dock-dark">

            {[
              { Icon: Mail, href: `mailto:${DATA.contact.email}`, label: "Email" },
              { Icon: Linkedin, href: DATA.socials.linkedin, label: "LinkedIn" },
              { Icon: Github, href: DATA.socials.github, label: "GitHub" },
              { Icon: LeetCode, href: DATA.socials.leetcode, label: "LeetCode" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-circle text-secondary position-relative group"
                title={social.label}
                style={{ color: 'rgba(255,255,255,0.35)', transition: 'color 0.2s, background 0.2s', borderRadius: '50%', textDecoration: 'none', display: 'flex' }}
                onMouseOver={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(198,156,54,0.15)'; }}
                onMouseOut={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.35)'; e.currentTarget.style.background = 'transparent'; }}
              >
                <social.Icon size={24} />
                <span className="position-absolute top-0 end-0 translate-middle p-1 bg-teal rounded-circle opacity-0 group-hover-opacity-100 transition-all" style={{ width: '6px', height: '6px' }}></span>
              </a>
            ))}

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;