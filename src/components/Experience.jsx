import React from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { DATA } from '../data';

const initials = (name) => name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

// Default stats fallback for SPICMACAY or general roles
const DEFAULT_STATS = [
  { num: '2+', label: 'Years active' },
  { num: '500+', label: 'Event attendees' },
  { num: '10+',  label: 'Events led' },
];

// Custom stats specifically for your BEL AI Internship
const BEL_STATS = [
  { num: '92.12%', label: 'Association Accuracy' },
  { num: '1.2M',   label: 'Model Parameters' },
  { num: '0',      label: 'Track Fragmentations' },
];

const s = {
  section: {
    background: '#0a0a0a',
    padding: '80px 0',
    width: '100%',
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 24px',
  },
  eyebrow: {
    fontSize: '11px',
    fontWeight: 700,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: '#00e5a0',
    marginBottom: '6px',
    display: 'block',
  },
  title: {
    fontSize: '32px',
    fontWeight: 700,
    color: '#ffffff',
    marginBottom: '6px',
  },
  sub: {
    fontSize: '14px',
    color: '#555',
    marginBottom: '40px',
  },
  card: {
    background: '#131313',
    border: '1px solid #232323',
    borderRadius: '16px',
    overflow: 'hidden',
    marginBottom: '20px',
  },
  header: {
    padding: '24px',
    borderBottom: '1px solid #1e1e1e',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
  },
  avatar: {
    width: '52px',
    height: '52px',
    borderRadius: '12px',
    background: '#1a1530',
    border: '1px solid #2e2060',
    display: 'flex',
    alignItems: 'center',
    justify: 'center',
    fontSize: '16px',
    fontWeight: 700,
    color: '#9d8fff',
    flexShrink: 0,
  },
  role: {
    fontSize: '18px',
    fontWeight: 700,
    color: '#fff',
    marginBottom: '3px',
  },
  company: {
    fontSize: '13px',
    color: '#7c6fff',
    fontWeight: 600,
    marginBottom: '10px',
  },
  metaRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    flexWrap: 'wrap',
  },
  metaText: {
    fontSize: '12px',
    color: '#555',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  },
  metaSep: {
    width: '1px',
    height: '12px',
    background: '#2a2a2a',
    display: 'inline-block',
  },
  liveBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
    fontSize: '11px',
    color: '#00e5a0',
    fontWeight: 600,
    background: 'rgba(0,229,160,0.08)',
    padding: '3px 10px',
    borderRadius: '20px',
    border: '1px solid rgba(0,229,160,0.2)',
  },
  liveDotStyle: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: '#00e5a0',
    display: 'inline-block',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    borderBottom: '1px solid #1e1e1e',
  },
  statBox: {
    padding: '20px 16px',
    textAlign: 'center',
    borderRight: '1px solid #1e1e1e',
    background: '#0f0f0f',
  },
  statNum: {
    fontSize: '24px',
    fontWeight: 700,
    color: '#fff',
    marginBottom: '4px',
  },
  statLabel: {
    fontSize: '10px',
    color: '#444',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
  },
  body: {
    padding: '24px',
  },
  sectionLabel: {
    fontSize: '10px',
    fontWeight: 700,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: '#444',
    marginBottom: '12px',
    display: 'block',
  },
  respList: {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 24px 0',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  respItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    fontSize: '13px',
    color: '#777',
    lineHeight: 1.7,
  },
  checkWrap: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    background: 'rgba(0,229,160,0.07)',
    border: '1px solid rgba(0,229,160,0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    marginTop: '2px',
  },
  tagsRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  tag: {
    fontSize: '12px',
    padding: '5px 12px',
    borderRadius: '20px',
    background: '#1a1530',
    color: '#9d8fff',
    border: '1px solid #2e2060',
    fontWeight: 500,
  },
};

const Experience = () => {
  return (
    <section id="experience" style={s.section}>
      <div style={s.container}>
        <span style={s.eyebrow}>Career</span>
        <h2 style={s.title}>Experience</h2>
        <p style={s.sub}>Roles and responsibilities held beyond the classroom.</p>

        {DATA.experience.map((exp, index) => {
          // Dynamically switch stats based on the company or custom property
          let currentStats = DEFAULT_STATS;
          if (exp.company && exp.company.toLowerCase().includes('bel')) {
            currentStats = BEL_STATS;
          } else if (exp.stats) {
            currentStats = exp.stats; // Alternatively allows loading directly from data.js
          }

          return (
            <div key={index} style={s.card}>

              {/* Header */}
              <div style={s.header}>
                <div style={s.avatar}>{initials(exp.company)}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={s.role}>{exp.role}</div>
                  <div style={s.company}>{exp.company}</div>
                  <div style={s.metaRow}>
                    <span style={s.metaText}>
                      <MapPin size={12} color="#555" /> {exp.location}
                    </span>
                    <span style={s.metaSep} />
                    <span style={s.metaText}>
                      <Calendar size={12} color="#555" /> {exp.period}
                    </span>
                    <span style={s.metaSep} />
                    <span style={s.liveBadge}>
                      <span style={s.liveDotStyle} /> Active
                    </span>
                  </div>
                </div>
              </div>

              {/* Stats Grid - Now uses dynamic context */}
              <div style={s.statsGrid}>
                {currentStats.map((stat, i) => (
                  <div key={i} style={{ ...s.statBox, ...(i === 2 ? { borderRight: 'none' } : {}) }}>
                    <div style={s.statNum}>{stat.num}</div>
                    <div style={s.statLabel}>{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Body */}
              <div style={s.body}>
                <span style={s.sectionLabel}>Key responsibilities</span>
                <ul style={s.respList}>
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} style={s.respItem}>
                      <span style={s.checkWrap}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <polyline points="1.5,5 4,7.5 8.5,2"
                            stroke="#00e5a0" strokeWidth="1.8"
                            strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {resp}
                    </li>
                  ))}
                </ul>

                <span style={s.sectionLabel}>Skills demonstrated</span>
                <div style={s.tagsRow}>
                  {exp.tags.map((tag, i) => (
                    <span key={i} style={s.tag}>{tag}</span>
                  ))}
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;