import React from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { DATA } from '../data';

const initials = (name) =>
  name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

const Experience = () => (
  <section id="experience" style={{ background: '#0a0a0a', padding: '110px 0', position: 'relative', overflow: 'hidden' }}>
    {/* Gold background accents */}
    <div style={{
      position: 'absolute', top: '10%', right: '-60px',
      width: '340px', height: '340px',
      background: 'radial-gradient(circle, rgba(198,156,54,0.07) 0%, transparent 70%)',
      filter: 'blur(50px)', pointerEvents: 'none',
    }} />
    <div style={{
      position: 'absolute', bottom: '15%', left: '-80px',
      width: '280px', height: '280px',
      background: 'radial-gradient(circle, rgba(198,156,54,0.05) 0%, transparent 70%)',
      filter: 'blur(50px)', pointerEvents: 'none',
    }} />

    <style>{`
      .exp-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
      }

      .exp-card {
        background: #141414;
        border: 1px solid rgba(255,255,255,0.07);
        border-radius: 18px;
        overflow: hidden;
        transition: border-color 0.35s ease, box-shadow 0.35s ease;
        margin-bottom: 1.75rem;
        position: relative;
      }
      .exp-card::before {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0;
        height: 2px;
        background: linear-gradient(90deg, #C69C36, rgba(198,156,54,0));
        opacity: 0;
        transition: opacity 0.35s ease;
      }
      .exp-card:hover { border-color: rgba(198,156,54,0.28); box-shadow: 0 16px 50px rgba(0,0,0,0.35), 0 0 30px rgba(198,156,54,0.06); }
      .exp-card:hover::before { opacity: 1; }

      .exp-card-header {
        padding: 22px 24px 18px;
        border-bottom: 1px solid rgba(255,255,255,0.05);
        display: flex;
        align-items: flex-start;
        gap: 16px;
      }

      .exp-avatar {
        width: 52px; height: 52px;
        border-radius: 12px;
        background: rgba(198,156,54,0.1);
        border: 1px solid rgba(198,156,54,0.28);
        display: flex; align-items: center; justify-content: center;
        font-family: 'Playfair Display', serif;
        font-size: 17px; font-weight: 700;
        color: #C69C36;
        flex-shrink: 0;
        overflow: hidden;
      }
      .exp-avatar img { width: 100%; height: 100%; object-fit: cover; border-radius: 11px; }

      .exp-role {
        font-family: 'Inter', sans-serif;
        font-size: 17px; font-weight: 700;
        color: #fff; margin-bottom: 3px;
      }
      .exp-company {
        font-family: 'JetBrains Mono', monospace;
        font-size: 12px; font-weight: 600;
        color: #C69C36; margin-bottom: 10px;
      }
      .exp-meta-row {
        display: flex; align-items: center; flex-wrap: wrap; gap: 10px;
      }
      .exp-meta-item {
        display: flex; align-items: center; gap: 5px;
        font-family: 'JetBrains Mono', monospace;
        font-size: 11px; color: rgba(255,255,255,0.3);
      }
      .exp-meta-sep { width: 1px; height: 10px; background: rgba(255,255,255,0.1); }
      .exp-live-badge {
        display: inline-flex; align-items: center; gap: 5px;
        font-family: 'JetBrains Mono', monospace;
        font-size: 10px; font-weight: 600; letter-spacing: 0.05em;
        color: #10b981;
        background: rgba(16,185,129,0.08);
        border: 1px solid rgba(16,185,129,0.2);
        padding: 3px 10px; border-radius: 100px;
      }
      .exp-live-dot {
        width: 6px; height: 6px; border-radius: 50%;
        background: #10b981;
        animation: livePulse 1.5s ease-in-out infinite;
      }
      @keyframes livePulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }

      /* Optional stats strip for non-BEL */
      .exp-stats-bar {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        border-bottom: 1px solid rgba(255,255,255,0.05);
        background: rgba(198,156,54,0.03);
      }
      .exp-stat-cell {
        padding: 16px; text-align: center;
        border-right: 1px solid rgba(255,255,255,0.05);
      }
      .exp-stat-cell:last-child { border-right: none; }
      .exp-stat-num {
        font-family: 'Playfair Display', serif;
        font-size: 20px; font-weight: 700; color: #C69C36;
        margin-bottom: 3px;
      }
      .exp-stat-label {
        font-family: 'JetBrains Mono', monospace;
        font-size: 9px; color: rgba(255,255,255,0.25);
        text-transform: uppercase; letter-spacing: 0.1em;
      }

      .exp-card-body { padding: 22px 24px; }
      .exp-section-label {
        font-family: 'JetBrains Mono', monospace;
        font-size: 10px; font-weight: 700;
        letter-spacing: 0.15em; text-transform: uppercase;
        color: rgba(255,255,255,0.22);
        margin-bottom: 14px; display: block;
      }
      .exp-resp-list {
        list-style: none; padding: 0; margin: 0 0 22px 0;
        display: flex; flex-direction: column; gap: 12px;
      }
      .exp-resp-item {
        display: flex; align-items: flex-start; gap: 12px;
        font-family: 'Inter', sans-serif;
        font-size: 13px; color: rgba(255,255,255,0.45); line-height: 1.72;
      }
      .exp-check {
        width: 20px; height: 20px; border-radius: 50%;
        background: rgba(198,156,54,0.08);
        border: 1px solid rgba(198,156,54,0.22);
        display: flex; align-items: center; justify-content: center;
        flex-shrink: 0; margin-top: 2px;
      }
      .exp-tags-row { display: flex; flex-wrap: wrap; gap: 7px; }
      .exp-tag {
        font-family: 'JetBrains Mono', monospace;
        font-size: 10.5px; font-weight: 500;
        padding: 4px 11px; border-radius: 100px;
        background: rgba(198,156,54,0.1);
        color: #D4AE52;
        border: 1px solid rgba(198,156,54,0.24);
      }
    `}</style>

    <div className="exp-container">
      {/* Header */}
      <div style={{ marginBottom: '3.5rem' }}>
        <div className="overline" style={{ marginBottom: '1rem' }}>Career</div>
        <h2 className="section-heading">Experience</h2>
        <p className="section-sub">Roles and responsibilities held beyond the classroom.</p>
      </div>

      {/* All experience entries — single card layout */}
      {DATA.experience.map((exp, i) => {
        const isBEL = exp.company.toLowerCase().includes('bel');
        return (
          <motion.div
            key={i}
            className="exp-card"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Header */}
            <div className="exp-card-header">
              <div className="exp-avatar">
                {exp.logo
                  ? <img src={exp.logo} alt={`${exp.company} logo`} />
                  : initials(exp.company)
                }
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="exp-role">{exp.role}</div>
                <div className="exp-company">{exp.company}</div>
                <div className="exp-meta-row">
                  <span className="exp-meta-item"><MapPin size={11} /> {exp.location}</span>
                  <span className="exp-meta-sep" />
                  <span className="exp-meta-item"><Calendar size={11} /> {exp.period}</span>
                  {isBEL && (
                    <>
                      <span className="exp-meta-sep" />
                      <span className="exp-live-badge">
                        <span className="exp-live-dot" /> Active
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Stats bar for non-BEL roles */}
            {!isBEL && (
              <div className="exp-stats-bar">
                {[
                  { num: '2+', label: 'Years Active' },
                  { num: '500+', label: 'Event Attendees' },
                  { num: '10+', label: 'Events Led' },
                ].map((st, j) => (
                  <div key={j} className="exp-stat-cell">
                    <div className="exp-stat-num">{st.num}</div>
                    <div className="exp-stat-label">{st.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* BEL metrics bar */}
            {isBEL && (
              <div className="exp-stats-bar">
                {[
                  { num: '92.12%', label: 'Data Association Accuracy' },
                  { num: '0', label: 'Track Fragmentations' },
                  { num: '~1.2M', label: 'TADN Model Params' },
                ].map((st, j) => (
                  <div key={j} className="exp-stat-cell">
                    <div className="exp-stat-num">{st.num}</div>
                    <div className="exp-stat-label">{st.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Body */}
            <div className="exp-card-body">
              <span className="exp-section-label">Responsibilities</span>
              <ul className="exp-resp-list">
                {exp.responsibilities.map((resp, j) => (
                  <li key={j} className="exp-resp-item">
                    <span className="exp-check">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <polyline points="1.5,5 4,7.5 8.5,2"
                          stroke="#C69C36" strokeWidth="1.8"
                          strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {resp}
                  </li>
                ))}
              </ul>
              {exp.tags && exp.tags.length > 0 && (
                <>
                  <span className="exp-section-label">Skills</span>
                  <div className="exp-tags-row">
                    {exp.tags.map((tag, j) => (
                      <span key={j} className="exp-tag">{tag}</span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  </section>
);

export default Experience;