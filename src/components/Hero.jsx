import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { DATA } from '../data';
import ParticleNetwork from './ParticleNetwork';

const Hero = () => {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: '#0a0a0a',
        padding: '120px 1.5rem 100px',
      }}
    >
      {/* Live particle network background */}
      <ParticleNetwork particleCount={55} maxDistance={140} speed={0.15} />

      {/* Dot grid */}
      <div className="dot-grid" />

      {/* Gold glow — top right */}
      <div className="glow-gold" style={{ top: '-120px', right: '-80px', opacity: 0.9 }} />
      {/* Gold glow — bottom left */}
      <div className="glow-gold-sm" style={{ bottom: '60px', left: '-40px', opacity: 0.7 }} />
      {/* Subtle centered gold halo behind name */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px', height: '420px',
        background: 'radial-gradient(ellipse, rgba(198,156,54,0.07) 0%, transparent 65%)',
        filter: 'blur(40px)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* Decorative thin horizontal gold line above name */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -200%)',
        width: '1px', height: '80px',
        background: 'linear-gradient(to bottom, transparent, rgba(198,156,54,0.4))',
        zIndex: 0,
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 1,
        maxWidth: '860px', width: '100%',
        textAlign: 'center', margin: '0 auto',
      }}>
        {/* Available for Work badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '2rem' }}
        >
          <span className="status-badge">
            <span className="pulse-dot" />
            Available for work
          </span>
        </motion.div>

        {/* Name — Playfair Display */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(3.2rem, 9vw, 7.5rem)',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            color: '#ffffff',
            marginBottom: '1.5rem',
          }}
        >
          {DATA.name}
        </motion.h1>

        {/* Gold accent underline */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: '72px', height: '2px',
            background: 'linear-gradient(90deg, #C69C36, rgba(198,156,54,0.2))',
            margin: '0 auto 1.8rem',
            borderRadius: '1px',
          }}
        />

        {/* Subtitle — JetBrains Mono with typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '2.5rem' }}
        >
          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 'clamp(0.82rem, 2vw, 1.05rem)',
            fontWeight: 400,
            color: 'rgba(255,255,255,0.4)',
            letterSpacing: '0.02em',
            lineHeight: 1.6,
          }}>
            {'// '}
            <span style={{ color: 'rgba(255,255,255,0.72)' }}>
              <Typewriter
                words={[
                  'Engineering the Future with Code & Data',
                  'I build Scalable Backend Systems & AI Models',
                  'Designing RAG Pipelines & LLM Applications',
                  'Transformer Architectures · FastAPI · NLP',
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={55}
                deleteSpeed={30}
                delaySpeed={1800}
              />
            </span>
          </p>
        </motion.div>

        {/* Descriptor */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.92rem',
            color: 'rgba(255,255,255,0.35)',
            maxWidth: '500px',
            margin: '0 auto 3rem',
            lineHeight: 1.85,
          }}
        >
          Pre-final year Computer Engineering at{' '}
          <span style={{ color: 'rgba(255,255,255,0.6)' }}>Thapar University</span>.
          Specializing in ML, NLP & backend systems that ship to production.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a href="#projects" className="btn-gold">
            View Projects <ArrowRight size={17} />
          </a>
          <a href="/resume.pdf" download="Nilay_Singh_Resume.pdf" className="btn-ghost">
            <Download size={16} /> Resume
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          style={{
            marginTop: '5rem',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
          }}
        >
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '9px', letterSpacing: '0.18em',
            textTransform: 'uppercase', color: 'rgba(255,255,255,0.18)',
          }}>scroll</span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              width: '1px', height: '28px',
              background: 'linear-gradient(to bottom, rgba(198,156,54,0.55), transparent)',
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;