import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { DATA } from '../data';

const GithubIcon = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

// The 4 featured projects to show in zigzag
const ZIGZAG_TITLES = ['TADN — Transformer Radar Tracker', "Delhi Air Quality Prediction", "KHABRI — The All-In-One News Agent", 'SoulTune'];
const ALL_CATEGORIES = ['All', 'Machine Learning', 'GenAI', 'Web Apps', 'Data Science'];

/* ─── Floating dark mockup card for zigzag image slot ─── */
const ProjectMockup = ({ project }) => {
  const isEven = ZIGZAG_TITLES.indexOf(project.title) % 2 === 1;
  return (
    <div style={{ position: 'relative', padding: '1.5rem' }}>
      {/* Glow behind the card */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: isEven
          ? 'radial-gradient(circle at 60% 50%, rgba(198,156,54,0.16) 0%, transparent 65%)'
          : 'radial-gradient(circle at 40% 50%, rgba(198,156,54,0.16) 0%, transparent 65%)',
        filter: 'blur(30px)',
        pointerEvents: 'none',
      }} />

      {/* Main card */}
      <div style={{
        background: '#141414',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 24px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(198,156,54,0.12)',
        position: 'relative',
        zIndex: 2,
      }}>
        {/* Faux browser chrome */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '7px',
          padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.06)',
          background: '#111',
        }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e' }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28ca42' }} />
          <div style={{
            flex: 1, marginLeft: '8px',
            background: 'rgba(255,255,255,0.04)', borderRadius: '6px',
            padding: '4px 10px', fontSize: '11px',
            fontFamily: "'JetBrains Mono', monospace",
            color: 'rgba(255,255,255,0.2)',
          }}>
            {project.demoUrl ? project.demoUrl.replace('https://', '') : project.title.toLowerCase().replace(/\s/g, '-')}
          </div>
        </div>

        {/* Project screenshot */}
        <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
          <img
            src={project.img}
            alt={project.title}
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'top',
              display: 'block',
              transition: 'transform 0.5s ease',
            }}
            onMouseOver={e => e.target.style.transform = 'scale(1.04)'}
            onMouseOut={e => e.target.style.transform = 'scale(1)'}
          />
          {/* Purple overlay gradient */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, transparent 50%, rgba(20,20,20,0.9) 100%)',
          }} />
        </div>

        {/* Stats bar */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '12px',
          padding: '12px 16px', borderTop: '1px solid rgba(255,255,255,0.05)',
          background: '#0f0f0f',
        }}>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '11px', color: '#10b981',
            background: 'rgba(16,185,129,0.08)',
            border: '1px solid rgba(16,185,129,0.2)',
            padding: '3px 10px', borderRadius: '100px',
            display: 'flex', alignItems: 'center', gap: '6px',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
            Live
          </span>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '10px', color: 'rgba(255,255,255,0.25)',
          }}>
            {project.tags.slice(0, 3).join(' · ')}
          </span>
        </div>
      </div>

      {/* Floating accent chip */}
      <div style={{
        position: 'absolute',
        top: '8px', right: '8px',
        background: 'rgba(198,156,54,0.15)',
        border: '1px solid rgba(198,156,54,0.3)',
        borderRadius: '10px',
        padding: '8px 14px',
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '11px', fontWeight: 600, color: '#D4AE52',
        zIndex: 3,
        backdropFilter: 'blur(8px)',
      }}>
        ★ Featured
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const zigzagProjects = ZIGZAG_TITLES
    .map(title => DATA.projects.find(p => p.title === title))
    .filter(Boolean);

  const otherProjects = DATA.projects.filter(p => {
    if (ZIGZAG_TITLES.includes(p.title)) return false; // avoid duplicating featured projects
    if (activeCategory === 'All') return true;
    return p.category === activeCategory;
  });

  return (
    <section id="projects" style={{ background: '#0f0f0f', padding: '110px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '8%', right: '-70px', width: '380px', height: '380px', background: 'radial-gradient(circle, rgba(198,156,54,0.07) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '5%', left: '-50px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(198,156,54,0.05) 0%, transparent 70%)', filter: 'blur(55px)', pointerEvents: 'none' }} />
      <style>{`
        .projects-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Zigzag rows */
        .zz-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          margin-bottom: 6rem;
        }
        .zz-row.zz-reverse .zz-img  { order: 2; }
        .zz-row.zz-reverse .zz-text { order: 1; }

        /* Filter buttons */
        .filter-btn {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.06em;
          padding: 8px 18px;
          border-radius: 100px;
          cursor: pointer;
          transition: all 0.2s ease;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.04);
          color: rgba(255,255,255,0.45);
          text-transform: lowercase;
        }
        .filter-btn:hover {
          color: #fff;
          border-color: rgba(198,156,54,0.4);
          background: rgba(198,156,54,0.1);
        }
        .filter-btn.active {
          background: #C69C36;
          border-color: #C69C36;
          color: #fff;
          box-shadow: 0 4px 16px rgba(198,156,54,0.35);
        }

        /* Grid cards */
        .proj-grid-card {
          background: #141414;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          overflow: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
        }
        .proj-grid-card:hover {
          border-color: rgba(198,156,54,0.25);
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.4), 0 0 20px rgba(198,156,54,0.08);
        }
        .proj-grid-img {
          height: 150px;
          overflow: hidden;
        }
        .proj-grid-img img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: top;
          transition: transform 0.4s ease;
        }
        .proj-grid-card:hover .proj-grid-img img { transform: scale(1.05); }
        .proj-grid-body {
          padding: 18px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        /* Link button */
        .proj-link-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 500;
          color: rgba(255,255,255,0.4);
          text-decoration: none;
          border: 1px solid rgba(255,255,255,0.1);
          padding: 5px 12px;
          border-radius: 100px;
          transition: all 0.2s;
        }
        .proj-link-btn:hover {
          color: #fff;
          border-color: rgba(198,156,54,0.4);
          background: rgba(198,156,54,0.1);
        }

        /* Divider */
        .proj-divider {
          display: flex; align-items: center; gap: 1rem;
          margin: 5rem 0 3rem;
        }
        .proj-divider-line { flex: 1; height: 1px; background: rgba(255,255,255,0.06); }
        .proj-divider-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.2);
        }

        @media (max-width: 900px) {
          .zz-row { grid-template-columns: 1fr; gap: 2rem; }
          .zz-row.zz-reverse .zz-img  { order: 0; }
          .zz-row.zz-reverse .zz-text { order: 0; }
        }
      `}</style>

      <div className="projects-container">
        {/* Header */}
        <div style={{ marginBottom: '5rem' }}>
          <div className="overline" style={{ marginBottom: '1rem' }}>Work</div>
          <h2 className="section-heading">
            Selected Projects
          </h2>
          <p className="section-sub">A collection of things I've built — from AI models to full-stack products.</p>
        </div>

        {/* ══════ ZIGZAG FEATURED PROJECTS ══════ */}
        {zigzagProjects.map((proj, i) => (
          <motion.div
            key={proj.title}
            className={`zz-row${i % 2 === 1 ? ' zz-reverse' : ''}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Image slot */}
            <div className="zz-img">
              <ProjectMockup project={proj} />
            </div>

            {/* Text slot */}
            <div className="zz-text">
              {/* Index number */}
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '11px',
                color: 'rgba(255,255,255,0.2)',
                letterSpacing: '0.15em',
                marginBottom: '1rem',
              }}>
                {String(i + 1).padStart(2, '0')} / {String(zigzagProjects.length).padStart(2, '0')}
              </div>

              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                fontWeight: 700,
                color: '#fff',
                lineHeight: 1.2,
                marginBottom: '1rem',
              }}>
                {proj.title}
              </h3>

              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                color: 'rgba(255,255,255,0.45)',
                lineHeight: 1.8,
                marginBottom: '1.5rem',
              }}>
                {proj.description}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginBottom: '1.8rem' }}>
                {proj.tags.slice(0, 6).map((tag, j) => (
                  <span key={j} className="tag-pill">{tag}</span>
                ))}
              </div>

              {/* Links */}
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {proj.demoUrl && (
                  <a href={proj.demoUrl} target="_blank" rel="noopener noreferrer" className="proj-link-btn">
                    <ExternalLink size={12} /> Live Demo
                  </a>
                )}
                <a href={proj.repoUrl} target="_blank" rel="noopener noreferrer" className="proj-link-btn">
                  <GithubIcon size={12} /> View Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}

        {/* ══════ DIVIDER ══════ */}
        <div className="proj-divider">
          <div className="proj-divider-line" />
          <span className="proj-divider-label">More Projects</span>
          <div className="proj-divider-line" />
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', marginBottom: '2.5rem' }}>
          {ALL_CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`filter-btn${activeCategory === cat ? ' active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of other projects */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '1.25rem',
        }}>
          <AnimatePresence mode="popLayout">
            {otherProjects.map(proj => (
              <motion.div
                layout
                key={proj.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
              >
                <div className="proj-grid-card">
                  <div className="proj-grid-img">
                    <img src={proj.img} alt={proj.title} loading="lazy" />
                  </div>
                  <div className="proj-grid-body">
                    <h4 style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '14.5px', fontWeight: 700,
                      color: '#fff', marginBottom: '8px', lineHeight: 1.3,
                    }}>
                      {proj.title}
                    </h4>
                    <p style={{
                      fontSize: '12.5px', color: 'rgba(255,255,255,0.38)',
                      lineHeight: 1.65, marginBottom: '12px', flex: 1,
                    }}>
                      {proj.description.slice(0, 110)}
                      {proj.description.length > 110 ? '…' : ''}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '14px' }}>
                      {proj.tags.slice(0, 4).map((tag, i) => (
                        <span key={i} className="tag-pill" style={{ fontSize: '10px' }}>{tag}</span>
                      ))}
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      {proj.demoUrl && (
                        <a href={proj.demoUrl} target="_blank" rel="noopener noreferrer" className="proj-link-btn">
                          <ExternalLink size={11} /> Demo
                        </a>
                      )}
                      <a href={proj.repoUrl} target="_blank" rel="noopener noreferrer" className="proj-link-btn">
                        <GithubIcon size={11} /> Code
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {otherProjects.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              style={{
                gridColumn: '1 / -1', textAlign: 'center', paddingBlock: '3rem',
                fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', color: '#fff'
              }}
            >
              No projects in this category.
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;