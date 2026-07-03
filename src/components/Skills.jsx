import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Server, Cpu, Sigma, BookOpen, Globe, Plus, Minus } from 'lucide-react';
import { DATA } from '../data';

const IconMap = { Brain, Server, Cpu, Sigma };

const domainMeta = [
  { accent: '#C69C36' },
  { accent: '#D4AE52' },
  { accent: '#E8CC7A' },
  { accent: '#f59e0b' },
];

const CoursePill = ({ name }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontSize: 'clamp(0.85rem, 1.8vw, 1.05rem)',
        fontWeight: hovered ? 600 : 400,
        color: hovered ? '#C69C36' : 'rgba(255,255,255,0.45)',
        cursor: 'default',
        transition: 'color 0.2s, font-weight 0.15s',
        whiteSpace: 'nowrap',
      }}
    >
      {name}
    </span>
  );
};

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggle = (i) => setActiveIndex(prev => (prev === i ? null : i));

  return (
    <section id="skills" style={{ background: '#0f0f0f', padding: '110px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Gold background accents */}
      <div style={{ position: 'absolute', top: '5%', left: '-60px', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(198,156,54,0.07) 0%, transparent 70%)', filter: 'blur(55px)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '10%', right: '-60px', width: '280px', height: '280px', background: 'radial-gradient(circle, rgba(198,156,54,0.05) 0%, transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none', zIndex: 0 }} />
      <div className="container">

        {/* ── Header ── */}
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="overline" style={{ justifyContent: 'center', marginBottom: '0.8rem' }}>Technical Skills</div>
            <h2 className="section-heading">Engineering Competencies</h2>
            <p className="section-sub">A breakdown of my capabilities and theoretical foundations.</p>
          </motion.div>
        </div>

        {/* ── MARQUEE — UNTOUCHED ── */}
        <div className="row justify-content-center mb-5">
          <div className="col-12">
            <div className="py-2 h-100 d-flex flex-column justify-content-center">
              <div className="scroller w-100" style={{ maxWidth: '100%' }}>
                <div className="scroller__inner">
                  {[...DATA.skills.technical, ...DATA.skills.technical].map((skill, index) => (
                    <div
                      key={index}
                      className="d-flex flex-column align-items-center gap-2 text-secondary hover-teal transition-all"
                      style={{ minWidth: '80px' }}
                    >
                      <i className={`${skill.icon} fs-2`}></i>
                      <span className="small fw-medium" style={{ fontSize: '0.75rem' }}>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════
            FRESH DESIGN BELOW
        ══════════════════════════════════════ */}

        {/* ── Section label ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}
        >
          <span style={{
            fontFamily: 'monospace',
            fontSize: '0.62rem',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.25)',
          }}>
            Engineering Competencies
          </span>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.05)' }} />
        </motion.div>

        {/* ── 1. ACCORDION DOMAIN ROWS ── */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', marginBottom: '5rem' }}>
          {DATA.skills.domainExpertise.map((item, i) => {
            const IconComponent = IconMap[item.icon] || Brain;
            const meta = domainMeta[i];
            const isOpen = activeIndex === i;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
              >
                {/* Clickable row */}
                <div
                  onClick={() => toggle(i)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.5rem',
                    padding: '1.35rem 0',
                    cursor: 'pointer',
                    userSelect: 'none',
                  }}
                >
                  <span style={{
                    fontFamily: 'monospace',
                    fontSize: '0.68rem',
                    color: 'rgba(255,255,255,0.18)',
                    letterSpacing: '0.08em',
                    minWidth: '22px',
                  }}>
                    0{i + 1}
                  </span>

                  <span style={{
                    color: isOpen ? meta.accent : 'rgba(255,255,255,0.25)',
                    transition: 'color 0.25s',
                    display: 'flex',
                    alignItems: 'center',
                  }}>
                    <IconComponent size={19} />
                  </span>

                  <span style={{
                    fontSize: 'clamp(1.05rem, 2.8vw, 1.55rem)',
                    fontWeight: 700,
                    letterSpacing: '-0.025em',
                    color: isOpen ? '#fff' : 'rgba(255,255,255,0.6)',
                    transition: 'color 0.25s',
                    flex: 1,
                  }}>
                    {item.title}
                  </span>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    {/* Live tag preview when closed */}
                    {!isOpen && (
                      <span style={{
                        fontFamily: 'monospace',
                        fontSize: '0.68rem',
                        color: 'rgba(255,255,255,0.2)',
                        letterSpacing: '0.04em',
                        display: 'none',
                      }}
                        className="d-none d-md-inline"
                      >
                        {item.tags.slice(0, 2).join(' · ')}
                      </span>
                    )}
                    <span style={{
                      width: '7px', height: '7px', borderRadius: '50%',
                      background: isOpen ? meta.accent : 'rgba(255,255,255,0.1)',
                      transition: 'background 0.25s',
                      flexShrink: 0,
                    }} />
                    <span style={{ color: 'rgba(255,255,255,0.25)', display: 'flex' }}>
                      {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                    </span>
                  </div>
                </div>

                {/* Expandable panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{
                        paddingBottom: '1.75rem',
                        paddingLeft: 'clamp(2.5rem, 5vw, 4rem)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                      }}>
                        <p style={{
                          color: 'rgba(255,255,255,0.4)',
                          fontSize: '0.88rem',
                          lineHeight: 1.75,
                          margin: 0,
                          maxWidth: '520px',
                        }}>
                          {item.desc}
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                          {item.tags.map((tag, t) => (
                            <span key={t} style={{
                              fontSize: '0.72rem',
                              fontFamily: 'monospace',
                              padding: '4px 13px',
                              borderRadius: '100px',
                              border: `1px solid ${meta.accent}35`,
                              color: meta.accent,
                              letterSpacing: '0.04em',
                            }}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* ── 2. COURSEWORK — TYPOGRAPHIC RIVER ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '4.5rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <BookOpen size={14} style={{ color: '#C69C36' }} />
            <span style={{
              fontFamily: 'monospace',
              fontSize: '0.62rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.25)',
            }}>
              Academic Foundation
            </span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.05)' }} />
          </div>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'baseline',
            lineHeight: 2.1,
          }}>
            {DATA.skills.coursework.map((course, i) => (
              <React.Fragment key={i}>
                <CoursePill name={course} />
                {i < DATA.skills.coursework.length - 1 && (
                  <span style={{
                    color: 'rgba(255,255,255,0.1)',
                    fontSize: '1.1rem',
                    padding: '0 0.65rem',
                    userSelect: 'none',
                  }}>·</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* ── 3. LANGUAGES — BIG STAT STRIP ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <Globe size={14} style={{ color: '#D4AE52' }} />
            <span style={{
              fontFamily: 'monospace',
              fontSize: '0.62rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.25)',
            }}>
              Languages
            </span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.05)' }} />
          </div>

          <div style={{ display: 'flex', gap: 'clamp(2rem, 6vw, 5rem)', flexWrap: 'wrap', alignItems: 'flex-end' }}>
            {DATA.skills.languages.map((lang, i) => (
              <div key={i}>
                <div style={{
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                  color: i === 0 ? '#C69C36' : 'rgba(255,255,255,0.75)',
                  marginBottom: '0.4rem',
                }}>
                  {lang.name}
                </div>
                <div style={{
                  fontFamily: 'monospace',
                  fontSize: '0.65rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.25)',
                }}>
                  {lang.level}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;

