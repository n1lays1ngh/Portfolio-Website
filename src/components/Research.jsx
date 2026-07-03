import React, { useState } from 'react';
import { ExternalLink, BookOpen, FlaskConical, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { DATA } from '../data';

const Research = () => {
  const [expandedIdx, setExpandedIdx] = useState(null);

  const statusColors = {
    'In Progress': { bg: 'rgba(198,156,54,0.12)', border: 'rgba(198,156,54,0.35)', text: '#D4AE52' },
    'Accepted to CVIP': { bg: 'rgba(198,156,54,0.08)', border: 'rgba(198,156,54,0.22)', text: '#C69C36' },
    'Published': { bg: 'rgba(16,185,129,0.10)', border: 'rgba(16,185,129,0.30)', text: '#10b981' },
  };

  return (
    <section id="research" style={{ background: '#0d0d0d', padding: '110px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Gold background glow */}
      <div style={{
        position: 'absolute', top: '20%', right: '-60px',
        width: '360px', height: '360px',
        background: 'radial-gradient(circle, rgba(198,156,54,0.07) 0%, transparent 70%)',
        filter: 'blur(55px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', left: '-50px',
        width: '280px', height: '280px',
        background: 'radial-gradient(circle, rgba(198,156,54,0.05) 0%, transparent 70%)',
        filter: 'blur(50px)', pointerEvents: 'none',
      }} />

      <style>{`
        /* Card */
        .rs-card {
          background: #141414;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 18px;
          overflow: hidden;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }
        .rs-card:hover {
          border-color: rgba(198,156,54,0.28);
          box-shadow: 0 20px 50px -15px rgba(0,0,0,0.5), 0 0 30px rgba(198,156,54,0.07);
        }

        /* Gold top accent bar */
        .rs-accent-bar {
          height: 2px;
          background: linear-gradient(90deg, #C69C36, rgba(198,156,54,0));
          width: 0;
          transition: width 0.5s ease;
        }
        .rs-card:hover .rs-accent-bar { width: 100%; }

        /* Status badge */
        .rs-status {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: 100px;
        }

        /* Faint bg index number */
        .rs-num {
          font-size: 4rem;
          font-weight: 800;
          color: rgba(255,255,255,0.03);
          line-height: 1;
          user-select: none;
          position: absolute;
          top: 18px; right: 22px;
          font-family: 'Playfair Display', serif;
          pointer-events: none;
        }

        /* Tags */
        .rs-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          padding: 3px 10px;
          border-radius: 100px;
          background: rgba(198,156,54,0.09);
          color: #D4AE52;
          border: 1px solid rgba(198,156,54,0.22);
        }

        /* Venue chip */
        .rs-venue {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          color: rgba(255,255,255,0.35);
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 6px;
          padding: 3px 10px;
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }

        /* Expand toggle */
        .rs-expand-btn {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          background: rgba(198,156,54,0.07);
          border: 1px solid rgba(198,156,54,0.2);
          border-radius: 8px;
          color: #C69C36;
          padding: 7px 16px;
          cursor: pointer;
          display: inline-flex; align-items: center; gap: 6px;
          transition: all 0.2s;
        }
        .rs-expand-btn:hover { background: rgba(198,156,54,0.14); border-color: rgba(198,156,54,0.4); }

        /* Link button */
        .rs-link-btn {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          padding: 7px 16px;
          border-radius: 100px;
          border: 1px solid rgba(198,156,54,0.28);
          color: #C69C36;
          background: rgba(198,156,54,0.06);
          display: inline-flex; align-items: center; gap: 5px;
          text-decoration: none;
          transition: all 0.2s;
        }
        .rs-link-btn:hover { background: rgba(198,156,54,0.15); border-color: rgba(198,156,54,0.5); color: #E8CC7A; }

        .rs-link-btn-ghost {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          padding: 7px 16px;
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.4);
          background: rgba(255,255,255,0.03);
          display: inline-flex; align-items: center; gap: 5px;
          text-decoration: none;
          transition: all 0.2s;
        }
        .rs-link-btn-ghost:hover { border-color: rgba(255,255,255,0.2); color: #fff; }

        /* Contribution panel */
        .rs-contrib-panel {
          background: rgba(198,156,54,0.04);
          border: 1px solid rgba(198,156,54,0.12);
          border-radius: 12px;
          padding: 18px;
          margin-bottom: 20px;
        }
        .rs-contrib-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9.5px; font-weight: 700;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: #C69C36; margin-bottom: 12px;
        }
        .rs-contrib-item {
          display: flex; align-items: flex-start; gap: 10px;
          font-family: 'Inter', sans-serif;
          font-size: 13px; color: rgba(255,255,255,0.5); margin-bottom: 9px; line-height: 1.65;
        }
        .rs-contrib-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: #C69C36; margin-top: 7px; flex-shrink: 0;
        }
      `}</style>

      <div className="container" style={{ maxWidth: '1200px' }}>
        {/* Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
            <div style={{
              width: '40px', height: '40px', borderRadius: '10px',
              background: 'rgba(198,156,54,0.1)', border: '1px solid rgba(198,156,54,0.25)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C69C36',
            }}>
              <FlaskConical size={18} />
            </div>
            <div className="overline">Research</div>
          </div>
          <h2 className="section-heading">Research Work</h2>
          <p className="section-sub">Original contributions to the field of AI and Computer Science.</p>
        </div>

        {/* Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {DATA.research.map((paper, idx) => {
            const sc = statusColors[paper.status] || statusColors['In Progress'];
            const isExpanded = expandedIdx === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="rs-card">
                  <div className="rs-accent-bar" />
                  <div style={{ padding: '28px 30px', position: 'relative' }}>
                    <span className="rs-num">{String(idx + 1).padStart(2, '0')}</span>

                    {/* Top row: status + venue + year */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                      <span className="rs-status" style={{ background: sc.bg, border: `1px solid ${sc.border}`, color: sc.text }}>
                        {paper.status}
                      </span>
                      {paper.venue && (
                        <span className="rs-venue">
                          <BookOpen size={10} /> {paper.venue}
                        </span>
                      )}
                      {paper.year && <span className="rs-venue">{paper.year}</span>}
                    </div>

                    {/* Title */}
                    <h3 style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
                      fontWeight: 700, color: '#fff',
                      lineHeight: 1.35, marginBottom: '10px',
                      maxWidth: '80%',
                    }}>
                      {paper.title}
                    </h3>

                    {/* Authors */}
                    <p style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.35)', marginBottom: '14px', fontFamily: "'Inter', sans-serif" }}>
                      {paper.authors.map((author, i) => (
                        <span key={i}>
                          {author === 'Nilay Singh'
                            ? <strong style={{ color: '#C69C36', fontWeight: 600 }}>{author}</strong>
                            : author}
                          {i < paper.authors.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </p>

                    {/* Abstract */}
                    <p style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '13.5px', color: 'rgba(255,255,255,0.42)',
                      lineHeight: 1.72, marginBottom: '18px', maxWidth: '78%',
                    }}>
                      {paper.abstract}
                    </p>

                    {/* Tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                      {paper.tags.map((tag, i) => (
                        <span key={i} className="rs-tag">{tag}</span>
                      ))}
                    </div>

                    {/* Expandable contributions */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          key="contrib"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          style={{ overflow: 'hidden' }}
                        >
                          <div className="rs-contrib-panel">
                            <div className="rs-contrib-label">My Contributions</div>
                            {paper.contributions.map((c, i) => (
                              <div key={i} className="rs-contrib-item">
                                <div className="rs-contrib-dot" />
                                <span>{c}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Actions */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px' }}>
                      <button
                        className="rs-expand-btn"
                        onClick={() => setExpandedIdx(isExpanded ? null : idx)}
                      >
                        {isExpanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                        {isExpanded ? 'Hide' : 'My Contributions'}
                      </button>

                      {paper.paperUrl && (
                        <a href={paper.paperUrl} target="_blank" rel="noopener noreferrer" className="rs-link-btn">
                          <ExternalLink size={12} /> View Paper
                        </a>
                      )}

                      {paper.repoUrl && (
                        <a href={paper.repoUrl} target="_blank" rel="noopener noreferrer" className="rs-link-btn-ghost">
                          <ArrowRight size={12} /> Codebase
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Research;
