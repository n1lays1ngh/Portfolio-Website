import React from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { DATA } from '../data';

const s = {
  section: { background: '#0a0a0a', padding: '80px 0', width: '100%' },
  container: { maxWidth: '1100px', margin: '0 auto', padding: '0 24px' },
  eyebrow: { fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C69C36', marginBottom: '6px', display: 'block' },
  title: { fontFamily: "'Playfair Display', serif", fontSize: '32px', fontWeight: 700, color: '#fff', marginBottom: '6px' },
  sub: { fontFamily: "'Inter', sans-serif", fontSize: '14px', color: 'rgba(255,255,255,0.3)', marginBottom: '40px' },
  timeline: { position: 'relative', paddingLeft: '36px' },
  timelineLine: { position: 'absolute', left: '10px', top: '10px', bottom: '10px', width: '1px', background: 'linear-gradient(to bottom, #C69C36 0%, #1e1e1e 100%)' },
  tlItem: { position: 'relative', marginBottom: '20px' },
  nodePrimary: { position: 'absolute', left: '-29px', top: '20px', width: '20px', height: '20px', borderRadius: '50%', background: '#0a0a0a', border: '2px solid #C69C36', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  nodeSecondary: { position: 'absolute', left: '-29px', top: '20px', width: '20px', height: '20px', borderRadius: '50%', background: '#0a0a0a', border: '2px solid #333', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  dotGreen: { width: '8px', height: '8px', borderRadius: '50%', background: '#C69C36' },
  dotGray: { width: '8px', height: '8px', borderRadius: '50%', background: '#333' },
  card: { background: '#141414', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '16px', overflow: 'hidden' },
  accentBar: { height: '3px', background: 'linear-gradient(90deg, #C69C36, #E8CC7A)' },
  cardBody: { padding: '24px' },
  topRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '4px', flexWrap: 'wrap' },
  degree: { fontFamily: "'Inter', sans-serif", fontSize: '16px', fontWeight: 700, color: '#fff' },
  cgpaGreen: { fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', fontWeight: 700, padding: '5px 12px', borderRadius: '20px', background: 'rgba(198,156,54,0.1)', color: '#D4AE52', border: '1px solid rgba(198,156,54,0.25)', flexShrink: 0, whiteSpace: 'nowrap' },
  cgpaGray: { fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', fontWeight: 700, padding: '5px 12px', borderRadius: '20px', background: '#1a1a1a', color: '#555', border: '1px solid #222', flexShrink: 0, whiteSpace: 'nowrap' },
  schoolGreen: { fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#C69C36', fontWeight: 600, marginBottom: '10px' },
  schoolGray: { fontSize: '13px', color: '#555', fontWeight: 600, marginBottom: '10px' },
  metaRow: { display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '16px' },
  metaText: { fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', gap: '5px' },
  metaSep: { width: '1px', height: '12px', background: '#2a2a2a' },
  liveBadge: { display: 'inline-flex', alignItems: 'center', gap: '5px', fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#10b981', fontWeight: 600, background: 'rgba(16,185,129,0.08)', padding: '3px 10px', borderRadius: '20px', border: '1px solid rgba(16,185,129,0.2)' },
  liveDot: { width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', display: 'inline-block' },
  divider: { height: '1px', background: '#1e1e1e', margin: '0 0 16px' },
  achLabel: { fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '10px', display: 'block' },
  pillsRow: { display: 'flex', flexWrap: 'wrap', gap: '6px' },
  pill: { fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', padding: '4px 10px', borderRadius: '20px', background: 'rgba(198,156,54,0.1)', color: '#D4AE52', border: '1px solid rgba(198,156,54,0.2)' },
};

const Education = () => (
  <section id="education" style={s.section}>
    <div style={s.container}>
      <span style={s.eyebrow}>Background</span>
      <h2 style={s.title}>Education</h2>
      <p style={s.sub}>Academic milestones and extracurricular highlights.</p>

      <div style={s.timeline}>
        <div style={s.timelineLine} />

        {DATA.education.map((edu, index) => (
          <div key={index} style={s.tlItem}>
            <div style={index === 0 ? s.nodePrimary : s.nodeSecondary}>
              <div style={index === 0 ? s.dotGreen : s.dotGray} />
            </div>
            <div style={s.card}>
              {index === 0 && <div style={s.accentBar} />}
              <div style={s.cardBody}>
                <div style={s.topRow}>
                  <div style={s.degree}>{edu.degree} — {edu.field}</div>
                  <span style={index === 0 ? s.cgpaGreen : s.cgpaGray}>{edu.cgpa}</span>
                </div>
                <div style={index === 0 ? s.schoolGreen : s.schoolGray}>{edu.school}</div>
                <div style={s.metaRow}>
                  <span style={s.metaText}><Calendar size={12} color="#555" /> {edu.period}</span>
                  <span style={s.metaSep} />
                  {index === 0
                    ? <span style={s.liveBadge}><span style={s.liveDot} /> In progress</span>
                    : <span style={{ fontSize: '11px', color: '#444' }}>Completed</span>
                  }
                </div>
                <div style={s.divider} />
                <span style={s.achLabel}>Roles &amp; highlights</span>
                <div style={s.pillsRow}>
                  {edu.achievements.map((ach, i) => (
                    <span key={i} style={s.pill}>{ach}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;