import React from 'react';
import { Download, Code2, Terminal, Cpu, ArrowRight } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { DATA } from '../data';



const Hero = () => {
  return (
    <section id="home" className="min-vh-100 d-flex align-items-center position-relative overflow-hidden bg-darker pt-5">
      
      {/* --- Background Effects --- */}
      <div className="grid-bg position-absolute w-100 h-100 top-0 start-0 opacity-10"></div>
      <div className="position-absolute top-20 end-10 bg-teal opacity-20 rounded-circle blur-3xl" style={{ width: '400px', height: '400px', filter: 'blur(120px)' }}></div>
      <div className="position-absolute bottom-0 start-0 bg-purple opacity-20 rounded-circle blur-3xl" style={{ width: '300px', height: '300px', filter: 'blur(100px)' }}></div>

      <div className="container position-relative z-1">
        <div className="row align-items-center">
          
          {/* LEFT: Text Content */}
          <div className="col-lg-7 mb-5 mb-lg-0 text-center text-lg-start">
            
            {/* Animated Entry for Text */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Status Badge */}
              <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-teal-light text-teal mb-4 border border-teal-subtle">
                <span className="position-relative d-flex h-2 w-2">
                  <span className="animate-ping position-absolute d-inline-flex h-100 w-100 rounded-circle bg-teal opacity-75"></span>
                  <span className="position-relative d-inline-flex rounded-circle h-2 w-2 bg-teal" style={{width:'8px', height:'8px'}}></span>
                </span>
                <span className="small fw-bold tracking-wide">Available for work</span>
              </div>

              {/* Name & Typewriter */}
              <h1 className="display-1 fw-bold mb-3 text-white lh-1">
                <span className="text-gradient-purple-blue">{DATA.name}</span>
              </h1>
              
              <h2 className="fs-2 text-secondary fw-light mb-4 h-min-50">
                I build{' '}
                <span className="text-white fw-bold">
                  <Typewriter
                    words={['Scalable Backends.', 'AI Agents.', 'Predictive Models.', 'RAG Pipelines.','ML models']}
                    loop={0}
                    cursor
                    cursorStyle='_'
                    typeSpeed={80}
                    deleteSpeed={90}
                    delaySpeed={750}
                  />
                </span>
              </h2>
              
              {/* Bio */}
              {/* <div className="lead text-secondary mb-5 fs-5" style={{ maxWidth: '650px' }}>
                <p className="mb-0">
                  Pre-final year Computer Engineering student at <span className="text-white fw-semibold">Thapar University</span>. 
                  Specializing in transforming complex data into intelligent, user-centric applications.
                </p>
              </div> */}
              
              {/* Buttons */}
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                <a href="#projects" className="btn btn-teal btn-lg px-5 rounded-pill d-flex align-items-center justify-content-center gap-2 hover-elevate">
                  View Projects <ArrowRight size={20} />
                </a>
                
                <a 
                   href="/resume.pdf" 
                   download="Nilay_Singh_Resume.pdf" // Ensure this file exists in public folder
                   className="btn btn-outline-light btn-lg px-5 rounded-pill d-flex align-items-center justify-content-center gap-2 hover-elevate"
                >
                  <Download size={20} /> Resume
                </a>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Visual Elements (Floating Card) */}
          <div className="col-lg-5 position-relative d-none d-lg-block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div style={{ position: 'relative' }}>

                {/* Rings */}
                <div style={{ position: 'absolute', width: '320px', height: '320px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '50%', border: '1px solid rgba(0,229,160,0.06)', zIndex: 1, pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', width: '440px', height: '440px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '50%', border: '1px solid rgba(124,111,255,0.04)', zIndex: 1, pointerEvents: 'none' }} />

                {/* Chip — top left */}
                <div style={{ position: 'absolute', top: '-16px', left: '-16px', zIndex: 3, background: '#0e0e0e', border: '1px solid #1e1e1e', borderRadius: '10px', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '7px', background: 'rgba(0,229,160,0.1)', color: '#00e5a0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#ccc' }}>ML Engineer</div>
                    <div style={{ fontSize: '10px', color: '#444' }}>FastAPI · LangChain</div>
                  </div>
                </div>

                {/* Chip — right middle */}
                <div style={{ position: 'absolute', top: '50%', right: '-52px', transform: 'translateY(-80px)', zIndex: 3, background: '#0e0e0e', border: '1px solid #1e1e1e', borderRadius: '10px', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '7px', background: 'rgba(239,159,39,0.1)', color: '#ef9f27', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#ccc' }}>Research</div>
                    <div style={{ fontSize: '10px', color: '#444' }}>Green AI · 2026</div>
                  </div>
                </div>

                {/* Chip — bottom right */}
                <div style={{ position: 'absolute', bottom: '-16px', right: '-16px', zIndex: 3, background: '#0e0e0e', border: '1px solid #1e1e1e', borderRadius: '10px', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '7px', background: 'rgba(124,111,255,0.1)', color: '#9d8fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#ccc' }}>Open to Intern</div>
                    <div style={{ fontSize: '10px', color: '#444' }}>Remote · On-site</div>
                  </div>
                </div>

                {/* Code Card */}
                <div style={{ background: '#0e0e0e', border: '1px solid #1e1e1e', borderRadius: '16px', overflow: 'hidden', position: 'relative', zIndex: 2 }}>

                  {/* Title bar */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 16px', borderBottom: '1px solid #1a1a1a', background: '#111' }}>
                    <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ff5f57' }} />
                    <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ffbd2e' }} />
                    <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#28ca42' }} />
                    <span style={{ fontSize: '11px', color: '#333', marginLeft: 'auto', fontFamily: 'monospace' }}>engineer.py</span>
                  </div>

                  {/* Code body */}
                  <div style={{ padding: '18px 20px 8px', fontFamily: "'Fira Code', 'Cascadia Code', monospace", fontSize: '12.5px', lineHeight: 1.9 }}>
                    {[
                      <><span style={{color:'#c792ea'}}>class</span> <span style={{color:'#82aaff'}}>Engineer</span>:</>,
                      <><span style={{color:'#546e7a',fontStyle:'italic'}}>  # Nilay Singh · 2026</span></>,
                      <>  <span style={{color:'#c792ea'}}>def</span> <span style={{color:'#82aaff'}}>__init__</span>(<span style={{color:'#f78c6c'}}>self</span>):</>,
                      <>    <span style={{color:'#f78c6c'}}>self</span>.<span style={{color:'#ffcb6b'}}>name</span>  = <span style={{color:'#c3e88d'}}>'Nilay Singh'</span></>,
                      <>    <span style={{color:'#f78c6c'}}>self</span>.<span style={{color:'#ffcb6b'}}>stack</span> = [<span style={{color:'#c3e88d'}}>'FastAPI'</span>, <span style={{color:'#c3e88d'}}>'GenAI'</span>, <span style={{color:'#c3e88d'}}>'RAG'</span>]</>,
                      <>    <span style={{color:'#f78c6c'}}>self</span>.<span style={{color:'#ffcb6b'}}>cgpa</span>  = <span style={{color:'#c3e88d'}}>8.91</span></>,
                      <>&nbsp;</>,
                      <>  <span style={{color:'#c792ea'}}>def</span> <span style={{color:'#82aaff'}}>build</span>(<span style={{color:'#f78c6c'}}>self</span>, problem):</>,
                      <>    <span style={{color:'#c792ea'}}>return</span> <span style={{color:'#82aaff'}}>solve</span>(problem, <span style={{color:'#ffcb6b'}}>tools</span>=<span style={{color:'#f78c6c'}}>self</span>.<span style={{color:'#ffcb6b'}}>stack</span>)</>,
                      <>&nbsp;</>,
                      <>me = <span style={{color:'#82aaff'}}>Engineer</span>()</>,
                      <>me.<span style={{color:'#82aaff'}}>build</span>(<span style={{color:'#c3e88d'}}>'the future'</span>) <span style={{color:'#546e7a',fontStyle:'italic'}}># 🚀</span></>,
                    ].map((line, i) => (
                      <div key={i} style={{ display: 'flex', gap: '14px' }}>
                        <span style={{ color: '#252525', minWidth: '18px', textAlign: 'right', fontSize: '11px', userSelect: 'none' }}>{i + 1}</span>
                        <span>{line}</span>
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div style={{ padding: '10px 16px 14px', borderTop: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#00e5a0', background: 'rgba(0,229,160,0.08)', border: '1px solid rgba(0,229,160,0.2)', borderRadius: '6px', padding: '4px 12px', cursor: 'pointer' }}>▶ Run</span>
                    <span style={{ fontSize: '11px', color: '#333', fontFamily: 'monospace' }}>→ <span style={{ color: '#00e5a0' }}>"Building the future..."</span></span>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;