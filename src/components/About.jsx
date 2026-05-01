import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { DATA } from '../data';

const s = {
  section: { background: '#0a0a0a', padding: '100px 0', width: '100%' },
  container: { maxWidth: '1300px', margin: '0 auto', padding: '0 24px' },

  // Left
  eyebrow: { display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#00e5a0', marginBottom: '1.2rem' },
  eyebrowLine: { width: '28px', height: '1.5px', background: '#00e5a0', display: 'inline-block' },
  headline: { fontSize: '38px', fontWeight: 800, color: '#fff', lineHeight: 1.2, marginBottom: '1.4rem' },
  gradientSpan: { background: 'linear-gradient(90deg, #7c6fff, #00e5a0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' },
  bodyText: { fontSize: '14px', color: '#666', lineHeight: 1.85, marginBottom: '1rem' },
  strong: { color: '#aaa', fontWeight: 600 },
  divider: { width: '40px', height: '2px', background: '#1e1e1e', margin: '1.4rem 0' },

  // Stats
  statBox: { background: '#131313', border: '1px solid #1e1e1e', borderRadius: '12px', padding: '14px 10px', textAlign: 'center' },
  statNum: { fontSize: '22px', fontWeight: 800, color: '#fff', marginBottom: '3px' },
  statAccent: { fontSize: '14px', color: '#00e5a0' },
  statLabel: { fontSize: '10px', color: '#444', textTransform: 'uppercase', letterSpacing: '0.08em' },

  // Buttons
  btnRow: { display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '1.4rem' },
  btnPrimary: { display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#00e5a0', color: '#0a0a0a', fontSize: '13px', fontWeight: 700, padding: '11px 24px', borderRadius: '30px', textDecoration: 'none', border: 'none', cursor: 'pointer' },
  btnGhost: { display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#555', fontSize: '13px', fontWeight: 500, textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer' },

  // Skill tags
  tagRow: { display: 'flex', flexWrap: 'wrap', gap: '6px' },
  tag: { fontSize: '11px', padding: '4px 10px', borderRadius: '20px', background: '#131313', color: '#666', border: '1px solid #1e1e1e' },

  // Right / image
  imgWrap: { position: 'relative', maxWidth: '380px', margin: '0 auto' },
  imgDeco1: { position: 'absolute', top: '20px', left: '20px', right: '-20px', bottom: '-20px', border: '1px solid rgba(0,229,160,0.12)', borderRadius: '20px', zIndex: 1 },
  imgDeco2: { position: 'absolute', top: '40px', left: '40px', right: '-40px', bottom: '-40px', border: '1px solid rgba(124,111,255,0.08)', borderRadius: '20px', zIndex: 0 },
  imgFrame: { borderRadius: '20px', overflow: 'hidden', aspectRatio: '4/5', background: '#131313', border: '1px solid #1e1e1e', position: 'relative', zIndex: 2 },
  img: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' },

  // Floating cards
  floatCard: { position: 'absolute', zIndex: 4, background: '#131313', border: '1px solid #232323', borderRadius: '12px', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '10px' },
  floatTL: { top: '-18px', left: '-18px' },
  floatBR: { bottom: '-18px', right: '-18px' },
  fcIconGreen: { width: '34px', height: '34px', borderRadius: '8px', background: 'rgba(0,229,160,0.1)', color: '#00e5a0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  fcIconPurple: { width: '34px', height: '34px', borderRadius: '8px', background: 'rgba(124,111,255,0.1)', color: '#9d8fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  fcLabel: { fontSize: '11px', fontWeight: 700, color: '#fff', marginBottom: '2px' },
  fcSub: { fontSize: '10px', color: '#555' },
};

const STATS = [
  { num: '8.91', accent: '/10', label: 'CGPA' },
  { num: '2804', accent: ' AIR', label: 'GATE 2026 DA RANK' },
  { num: '9',    accent: '+',   label: 'Projects' },
  { num: '1',    accent: '+',   label: 'Research paper' },
];

const TAGS = ['Python', 'Machine Learning', 'FastAPI', 'LangChain', 'RAG Systems', 'NLP', 'Deep Learning'];

const About = () => (
  <section id="about" style={s.section}>
    <style>{`
      .about-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 5rem;
        align-items: center;
      }
      .about-stat-row {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
        margin-bottom: 1.8rem;
      }
      .about-img-col {
        display: block;
      }

      @media (max-width: 768px) {
        .about-grid {
          grid-template-columns: 1fr;
          gap: 3rem;
        }
        /* Show image ABOVE text on mobile */
        .about-img-col {
          order: -1;
        }
        .about-stat-row {
          grid-template-columns: repeat(2, 1fr);
        }
        #about {
          padding: 60px 0 !important;
        }
      }

      @media (max-width: 480px) {
        .about-stat-row {
          grid-template-columns: repeat(2, 1fr);
        }
      }
    `}</style>

    <div style={s.container}>
      <div className="about-grid">

        {/* ── LEFT ── */}
        <div>
          <div style={s.eyebrow}>
            <span style={s.eyebrowLine} />
            About Me
          </div>

          <h2 style={s.headline}>
            Engineering the Future<br />
            with <span style={s.gradientSpan}>Code &amp; Data</span>
          </h2>

          <p style={s.bodyText}>
            Pre-final year Computer Engineering undergraduate at{' '}
            <strong style={s.strong}>Thapar Institute of Engineering and Technology, Patiala</strong>{' '}
            — driven by a passion for building things that actually matter.
          </p>
          <p style={s.bodyText}>
            I specialize in machine learning, NLP, and backend development using FastAPI.
            Experience is my best teacher — I learn from every challenge, whether it's a
            breakthrough or a setback. I actively explore emerging technologies to grow
            both personally and professionally.
          </p>

          <div style={s.divider} />

          {/* Stats */}
          <div className="about-stat-row">
            {STATS.map((st, i) => (
              <div key={i} style={s.statBox}>
                <div style={s.statNum}>
                  {st.num}<span style={s.statAccent}>{st.accent}</span>
                </div>
                <div style={s.statLabel}>{st.label}</div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div style={s.btnRow}>
            <a href="#contact" style={s.btnPrimary}>
              Let's Talk <ArrowRight size={15} />
            </a>
            <a href="/resume.pdf" download="Nilay_Singh_Resume.pdf" style={s.btnGhost}>
              <Download size={14} /> Download CV
            </a>
          </div>

          {/* Tags */}
          <div style={s.tagRow}>
            {TAGS.map((tag, i) => (
              <span key={i} style={s.tag}>{tag}</span>
            ))}
          </div>
        </div>

        {/* ── RIGHT / IMAGE ── */}
        <div className="about-img-col">
          <div style={s.imgWrap}>
            <div style={s.imgDeco1} />
            <div style={s.imgDeco2} />

            {/* Top-left card */}
            <div style={{ ...s.floatCard, ...s.floatTL }}>
              <div style={s.fcIconGreen}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
              </div>
              <div>
                <div style={s.fcLabel}>8.91 CGPA</div>
                <div style={s.fcSub}>Thapar University</div>
              </div>
            </div>

            {/* Image */}
            <div style={s.imgFrame}>
              <img src={DATA.about.img} alt="Nilay Singh" style={s.img} />
            </div>

            {/* Bottom-right card */}
            <div style={{ ...s.floatCard, ...s.floatBR }}>
              <div style={s.fcIconPurple}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                </svg>
              </div>
              <div>
                <div style={s.fcLabel}>Research Paper</div>
                <div style={s.fcSub}>Green AI · In progress</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
);

export default About;