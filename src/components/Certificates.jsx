import React from 'react';
import { Download, ExternalLink, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { DATA } from '../data';

const Certificates = () => (
  <section
    id="certificates"
    style={{ background: '#0a0a0a', padding: '110px 0', position: 'relative', overflow: 'hidden' }}
  >
    {/* Gold background glow accents */}
    <div style={{
      position: 'absolute', top: '-40px', right: '-80px',
      width: '400px', height: '400px',
      background: 'radial-gradient(circle, rgba(198,156,54,0.07) 0%, transparent 70%)',
      filter: 'blur(60px)', pointerEvents: 'none',
    }} />
    <div style={{
      position: 'absolute', bottom: '-20px', left: '-60px',
      width: '300px', height: '300px',
      background: 'radial-gradient(circle, rgba(198,156,54,0.05) 0%, transparent 70%)',
      filter: 'blur(55px)', pointerEvents: 'none',
    }} />

    <style>{`
      .cert-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
      }
      .cert-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 1.25rem;
      }
      .cert-card {
        background: #141414;
        border: 1px solid rgba(255,255,255,0.07);
        border-radius: 16px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        height: 100%;
        transition: all 0.3s ease;
        position: relative;
      }
      .cert-card::before {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0;
        height: 2px;
        background: linear-gradient(90deg, #C69C36, rgba(198,156,54,0));
        opacity: 0;
        transition: opacity 0.3s;
      }
      .cert-card:hover {
        border-color: rgba(198,156,54,0.3);
        transform: translateY(-4px);
        box-shadow: 0 16px 40px rgba(0,0,0,0.4), 0 0 20px rgba(198,156,54,0.07);
      }
      .cert-card:hover::before { opacity: 1; }

      .cert-icon-wrap {
        width: 44px; height: 44px;
        border-radius: 11px;
        background: rgba(198,156,54,0.1);
        border: 1px solid rgba(198,156,54,0.25);
        display: flex; align-items: center; justify-content: center;
        color: #C69C36;
        flex-shrink: 0;
      }

      .cert-btn {
        display: inline-flex; align-items: center; justify-content: center; gap: 5px;
        font-family: 'JetBrains Mono', monospace;
        font-size: 11px; font-weight: 500;
        color: rgba(255,255,255,0.4);
        text-decoration: none;
        border: 1px solid rgba(255,255,255,0.1);
        padding: 6px 14px; border-radius: 100px;
        transition: all 0.2s; flex: 1;
      }
      .cert-btn:hover { color: #E8CC7A; border-color: rgba(198,156,54,0.45); background: rgba(198,156,54,0.07); }

      @media (max-width: 600px) { .cert-grid { grid-template-columns: 1fr; } }
    `}</style>

    <div className="cert-container">
      {/* Header */}
      <div style={{ marginBottom: '3.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
          <div style={{
            width: '40px', height: '40px', borderRadius: '10px',
            background: 'rgba(198,156,54,0.1)', border: '1px solid rgba(198,156,54,0.25)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C69C36',
          }}>
            <Award size={18} />
          </div>
          <div className="overline">Certifications</div>
        </div>
        <h2 className="section-heading">Certificates</h2>
        <p className="section-sub">Professional certifications and verified achievements.</p>
      </div>

      {/* Grid */}
      <div className="cert-grid">
        {DATA.certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
            style={{ height: '100%' }}
          >
            <div className="cert-card">
              {/* Card body */}
              <div style={{ padding: '20px', display: 'flex', alignItems: 'flex-start', gap: '14px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="cert-icon-wrap">
                  <Award size={20} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h6 style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '13.5px', fontWeight: 700,
                    color: '#fff', marginBottom: '4px', lineHeight: 1.3,
                  }}>
                    {cert.title}
                  </h6>
                  <p style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '11px', color: '#C69C36',
                    fontWeight: 600, marginBottom: 0,
                  }}>
                    {cert.issuer}
                  </p>
                </div>
              </div>

              {/* Meta */}
              <div style={{ padding: '14px 20px', flex: 1 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <div style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '10.5px', color: 'rgba(255,255,255,0.28)',
                    display: 'flex', alignItems: 'center', gap: '6px',
                  }}>
                    <span style={{ color: 'rgba(198,156,54,0.5)' }}>issued</span> {cert.date}
                  </div>
                  {cert.id && (
                    <div style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '10px', color: 'rgba(255,255,255,0.2)',
                    }}>
                      ID: {cert.id}
                    </div>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div style={{ padding: '14px 20px', paddingTop: 0, display: 'flex', gap: '8px' }}>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-btn"
                >
                  <ExternalLink size={11} /> Verify
                </a>
                {cert.file && (
                  <a
                    href={cert.file}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-btn"
                  >
                    <Download size={11} /> Download
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Certificates;
