import React, { useState } from 'react';
import { ExternalLink, BookOpen, FlaskConical, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { DATA } from '../data';

const Research = () => {
  const [expandedIdx, setExpandedIdx] = useState(null);

  const statusColors = {
    "In Progress":  { bg: "rgba(251,191,36,0.12)",  border: "rgba(251,191,36,0.35)",  text: "#fbbf24" },
    "Submitted":    { bg: "rgba(96,165,250,0.12)",   border: "rgba(96,165,250,0.35)",  text: "#60a5fa" },
    "Published":    { bg: "rgba(0,210,180,0.12)",    border: "rgba(0,210,180,0.35)",   text: "#00d2b4" },
  };

  return (
    <section id="research" className="bg-dark-section">
      <style>{`
        /* ---- Research Card ---- */
        .research-card {
          background: linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 18px;
          overflow: hidden;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }
        .research-card:hover {
          border-color: rgba(0,210,180,0.2);
          box-shadow: 0 20px 40px -15px rgba(0,0,0,0.5), 0 0 30px -10px rgba(0,210,180,0.08);
        }

        /* ---- Accent top-bar ---- */
        .research-card-accent {
          height: 3px;
          background: linear-gradient(90deg, #00d2b4, rgba(0,210,180,0.0));
          width: 0;
          transition: width 0.5s ease;
        }
        .research-card:hover .research-card-accent { width: 100%; }

        /* ---- Status badge ---- */
        .status-badge {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: 20px;
        }

        /* ---- Number ---- */
        .research-number {
          font-size: 3.5rem;
          font-weight: 800;
          color: rgba(255,255,255,0.04);
          line-height: 1;
          user-select: none;
          position: absolute;
          top: 20px;
          right: 24px;
          font-family: monospace;
        }

        /* ---- Tags ---- */
        .research-tag {
          font-size: 0.68rem;
          padding: 3px 9px;
          border-radius: 20px;
          background: rgba(0,210,180,0.08);
          color: #00d2b4;
          border: 1px solid rgba(0,210,180,0.18);
        }

        /* ---- Expand toggle ---- */
        .expand-btn {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          color: #9ca3af;
          font-size: 0.78rem;
          padding: 6px 14px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s ease;
        }
        .expand-btn:hover {
          background: rgba(255,255,255,0.1);
          color: #fff;
          border-color: rgba(255,255,255,0.2);
        }

        /* ---- Link button ---- */
        .research-link-btn {
          font-size: 0.78rem;
          padding: 6px 16px;
          border-radius: 20px;
          border: 1px solid rgba(0,210,180,0.3);
          color: #00d2b4;
          background: rgba(0,210,180,0.06);
          display: inline-flex;
          align-items: center;
          gap: 5px;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .research-link-btn:hover {
          background: rgba(0,210,180,0.14);
          color: #00d2b4;
          border-color: rgba(0,210,180,0.5);
        }

        /* ---- Contribution list ---- */
        .contribution-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.85rem;
          color: #d1d5db;
          margin-bottom: 8px;
        }
        .contribution-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #00d2b4;
          margin-top: 6px;
          flex-shrink: 0;
        }

        /* ---- Section Icon ---- */
        .research-section-icon {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: rgba(0,210,180,0.1);
          border: 1px solid rgba(0,210,180,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #00d2b4;
        }

        /* ---- Venue chip ---- */
        .venue-chip {
          font-size: 0.72rem;
          color: #9ca3af;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 6px;
          padding: 3px 10px;
          display: inline-block;
        }
      `}</style>

      <div className="container">
        {/* ---- Header ---- */}
        <div className="text-center mb-5">
          <div className="d-flex align-items-center justify-content-center gap-3 mb-3">
            <div className="research-section-icon">
              <FlaskConical size={20} />
            </div>
          </div>
          <h2 className="fw-bold text-white">Research</h2>
          <p className="text-secondary">Original contributions to the field of AI and sustainable computing.</p>
        </div>

        {/* ---- Research Cards ---- */}
        <div className="d-flex flex-column gap-4">
          {DATA.research.map((paper, idx) => {
            const sc = statusColors[paper.status] || statusColors["In Progress"];
            const isExpanded = expandedIdx === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
              >
                <div className="research-card">
                  <div className="research-card-accent" />

                  <div className="p-4 p-md-5 position-relative">
                    <span className="research-number">{String(idx + 1).padStart(2, '0')}</span>

                    {/* ---- Top Row ---- */}
                    <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
                      <span
                        className="status-badge"
                        style={{ background: sc.bg, border: `1px solid ${sc.border}`, color: sc.text }}
                      >
                        {paper.status}
                      </span>
                      {paper.venue && (
                        <span className="venue-chip">
                          <BookOpen size={11} style={{ marginRight: 4, verticalAlign: 'middle' }} />
                          {paper.venue}
                        </span>
                      )}
                      {paper.year && (
                        <span className="venue-chip">{paper.year}</span>
                      )}
                    </div>

                    {/* ---- Title ---- */}
                    <h4 className="text-white fw-bold mb-2" style={{ fontSize: '1.15rem', lineHeight: 1.4, maxWidth: '85%' }}>
                      {paper.title}
                    </h4>

                    {/* ---- Authors ---- */}
                    <p className="mb-3" style={{ fontSize: '0.82rem', color: '#6b7280' }}>
                      {paper.authors.map((author, i) => (
                        <span key={i}>
                          {author === "Nilay Singh"
                            ? <strong style={{ color: '#9ca3af' }}>{author}</strong>
                            : author}
                          {i < paper.authors.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </p>

                    {/* ---- Abstract ---- */}
                    <p style={{ fontSize: '0.88rem', color: '#9ca3af', lineHeight: 1.65, maxWidth: '80%' }}>
                      {paper.abstract}
                    </p>

                    {/* ---- Tags ---- */}
                    <div className="d-flex flex-wrap gap-2 mt-3 mb-4">
                      {paper.tags.map((tag, i) => (
                        <span key={i} className="research-tag">{tag}</span>
                      ))}
                    </div>

                    {/* ---- Expandable: Contributions ---- */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          key="contributions"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          style={{ overflow: 'hidden' }}
                        >
                          <div
                            className="mb-4 p-3 rounded-3"
                            style={{ background: 'rgba(0,210,180,0.04)', border: '1px solid rgba(0,210,180,0.1)' }}
                          >
                            <p className="mb-3" style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#00d2b4' }}>
                              My Contributions
                            </p>
                            {paper.contributions.map((c, i) => (
                              <div key={i} className="contribution-item">
                                <div className="contribution-dot" />
                                <span>{c}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* ---- Actions ---- */}
                    <div className="d-flex flex-wrap align-items-center gap-3">
                      <button
                        className="expand-btn"
                        onClick={() => setExpandedIdx(isExpanded ? null : idx)}
                      >
                        {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                        {isExpanded ? 'Hide' : 'My Contributions'}
                      </button>

                      {paper.paperUrl && (
                        <a href={paper.paperUrl} target="_blank" rel="noopener noreferrer" className="research-link-btn">
                          <ExternalLink size={13} /> View Paper
                        </a>
                      )}

                      {paper.repoUrl && (
                        <a href={paper.repoUrl} target="_blank" rel="noopener noreferrer" className="research-link-btn" style={{ borderColor: 'rgba(255,255,255,0.15)', color: '#d1d5db', background: 'rgba(255,255,255,0.04)' }}>
                          <ArrowRight size={13} /> Codebase
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