import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { DATA } from '../data';

const STATS = [
    { num: '8.91', suffix: '/10', label: 'CGPA' },
    { num: '2804', suffix: 'AIR', label: 'GATE 2026 DA' },
    { num: '10', suffix: '+', label: 'Projects' },
    { num: '1', suffix: '+', label: 'Research Paper' },
];

// const TAGS = ['Python', 'Machine Learning', 'FastAPI', 'LangChain', 'RAG Systems', 'NLP', 'Deep Learning', 'PyTorch'];

const About = () => (
    <section id="about" style={{ background: '#0a0a0a', padding: '110px 0' }}>
        <style>{`
      .about-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 5rem;
        align-items: center;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
      }
      .about-stats {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1px;
        background: rgba(255,255,255,0.06);
        border: 1px solid rgba(255,255,255,0.06);
        border-radius: 14px;
        overflow: hidden;
        margin-bottom: 2.2rem;
      }
      .about-stat-cell {
        background: #111;
        padding: 18px 12px;
        text-align: center;
      }
      .about-img-wrap {
        position: relative;
        max-width: 420px;
        margin: 0 auto;
      }
      .about-img-ring-1 {
        position: absolute;
        top: 16px; left: 16px; right: -16px; bottom: -16px;
        border: 1px solid rgba(198,156,54,0.15);
        border-radius: 22px;
        z-index: 1;
        pointer-events: none;
      }
      .about-img-ring-2 {
        position: absolute;
        top: 32px; left: 32px; right: -32px; bottom: -32px;
        border: 1px solid rgba(245,158,11,0.08);
        border-radius: 22px;
        z-index: 0;
        pointer-events: none;
      }
      .about-img-frame {
        border-radius: 20px;
        overflow: hidden;
        aspect-ratio: 4 / 5;
        background: #141414;
        border: 1px solid rgba(255,255,255,0.08);
        position: relative;
        z-index: 2;
      }
      .about-float-card {
        position: absolute;
        z-index: 4;
        background: #161616;
        border: 1px solid rgba(255,255,255,0.09);
        border-radius: 14px;
        padding: 12px 16px;
        display: flex;
        align-items: center;
        gap: 12px;
        backdrop-filter: blur(12px);
        box-shadow: 0 8px 30px rgba(0,0,0,0.4);
      }
      .about-tag-row { display: flex; flex-wrap: wrap; gap: 7px; }
      @media (max-width: 900px) {
        .about-grid { grid-template-columns: 1fr; gap: 3rem; }
        .about-img-col { order: -1; }
        .about-stats { grid-template-columns: repeat(2, 1fr); }
      }
    `}</style>

        <div className="about-grid">
            {/* ─── LEFT: Text ─── */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="overline" style={{ marginBottom: '1.4rem' }}>About Me</div>

                <h2 className="section-heading" style={{ marginBottom: '1.4rem' }}>
                    Engineering the Future<br />
                    with{' '}
                    <span style={{
                        background: 'linear-gradient(135deg, #D4AE52, #C69C36)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}>
                        Code &amp; Data
                    </span>
                </h2>

                <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.45)',
                    lineHeight: 1.85,
                    marginBottom: '0.9rem',
                }}>
                    Pre-final year Computer Engineering undergraduate at{' '}
                    <strong style={{ color: 'rgba(255,255,255,0.75)', fontWeight: 600 }}>
                        Thapar Institute of Engineering and Technology, Patiala
                    </strong>{' '}
                    — driven by a passion for building things that actually matter.
                </p>
                <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.45)',
                    lineHeight: 1.85,
                    marginBottom: '2rem',
                }}>
                    I specialize in <strong style={{ color: 'rgba(255,255,255,0.7)' }}>machine learning, NLP,</strong> and{' '}
                    <strong style={{ color: 'rgba(255,255,255,0.7)' }}>backend development using FastAPI</strong>.
                    Experience is my best teacher — I learn from every challenge,
                    whether it's a breakthrough or a setback.
                </p>

                {/* Stats row */}
                <div className="about-stats">
                    {STATS.map((st, i) => (
                        <div key={i} className="about-stat-cell">
                            <div style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: '22px',
                                fontWeight: 700,
                                color: '#fff',
                                lineHeight: 1.1,
                                marginBottom: '3px',
                            }}>
                                {st.num}<span style={{ color: '#C69C36', fontSize: '14px' }}>{st.suffix}</span>
                            </div>
                            <div style={{
                                fontFamily: "'JetBrains Mono', monospace",
                                fontSize: '9px',
                                color: 'rgba(255,255,255,0.3)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                            }}>
                                {st.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Buttons */}
                <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '2rem' }}>
                    <a href="#contact" className="btn-purple" style={{ fontSize: '13px', padding: '11px 26px' }}>
                        Let's Talk <ArrowRight size={15} />
                    </a>
                    {/* <a
                        href="/resume.pdf"
                        download="Nilay_Singh_Resume.pdf"
                        className="btn-ghost"
                        style={{ fontSize: '13px', padding: '10px 26px' }}
                    >
                        <Download size={14} /> Download CV
                    </a> */}
                </div>

                {/* Skill tags
                <div className="about-tag-row">
                    {TAGS.map((tag, i) => (
                        <span key={i} className="tag-pill">{tag}</span>
                    ))}
                </div> */}
            </motion.div>

            {/* ─── RIGHT: Image ─── */}
            <motion.div
                className="about-img-col"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="about-img-wrap">
                    <div className="about-img-ring-1" />
                    <div className="about-img-ring-2" />

                    {/* Floating card — top left */}
                    <div className="about-float-card" style={{ top: '-18px', left: '-18px' }}>
                        <div style={{
                            width: '36px', height: '36px', borderRadius: '9px',
                            background: 'rgba(16,185,129,0.12)', color: '#10b981',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                        }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                            </svg>
                        </div>
                        <div>
                            <div style={{ fontSize: '12px', fontWeight: 700, color: '#fff', marginBottom: '2px' }}>
                                8.91 CGPA
                            </div>
                            <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)', fontFamily: "'JetBrains Mono', monospace" }}>
                                Thapar University
                            </div>
                        </div>
                    </div>

                    {/* Photo */}
                    <div className="about-img-frame">
                        <img
                            src={DATA.about.img}
                            alt="Nilay Singh"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        />
                    </div>

                    {/* Floating card — bottom right */}
                    <div className="about-float-card" style={{ bottom: '-18px', right: '-18px' }}>
                        <div style={{
                            width: '36px', height: '36px', borderRadius: '9px',
                            background: 'rgba(198,156,54,0.12)', color: '#C69C36',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                        }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                <polyline points="14 2 14 8 20 8" />
                            </svg>
                        </div>
                        <div>
                            <div style={{ fontSize: '12px', fontWeight: 700, color: '#fff', marginBottom: '2px' }}>
                                Research Paper
                            </div>
                            <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)', fontFamily: "'JetBrains Mono', monospace" }}>
                                Green AI · 2026
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
);

export default About;
