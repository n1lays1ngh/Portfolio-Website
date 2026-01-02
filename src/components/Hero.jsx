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
              <div className="lead text-secondary mb-5 fs-5" style={{ maxWidth: '650px' }}>
                <p className="mb-0">
                  Pre-final year Computer Engineering student at <span className="text-white fw-semibold">Thapar University</span>. 
                  Specializing in transforming complex data into intelligent, user-centric applications.
                </p>
              </div>
              
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
              {/* Glassmorphism Card */}
              <div className="floating-card p-4 rounded-4 shadow-lg position-relative z-2 border border-secondary border-opacity-25" 
                   style={{ 
                     background: 'rgba(20, 20, 25, 0.7)', 
                     backdropFilter: 'blur(12px)' 
                   }}>
                
                {/* Window Controls */}
                <div className="d-flex gap-2 mb-4 opacity-50">
                  <div className="rounded-circle bg-danger" style={{width:12, height:12}}></div>
                  <div className="rounded-circle bg-warning" style={{width:12, height:12}}></div>
                  <div className="rounded-circle bg-success" style={{width:12, height:12}}></div>
                </div>
                
                {/* Python Code Snippet */}
                <div className="font-monospace small" style={{ color: '#a9b7c6' }}>
                  <div className="mb-1"><span style={{ color: '#cc7832' }}>class</span> <span style={{ color: '#ffc66d' }}>Engineer</span>:</div>
                  <div className="mb-1 ps-3"><span style={{ color: '#cc7832' }}>def</span> <span style={{ color: '#ffc66d' }}>__init__</span>(self):</div>
                  <div className="mb-1 ps-5">self.<span style={{ color: '#9876aa' }}>name</span> = <span style={{ color: '#6a8759' }}>'Nilay'</span></div>
                  <div className="mb-1 ps-5">self.<span style={{ color: '#9876aa' }}>stack</span> = [</div>
                  <div className="ps-5 ms-4" style={{ color: '#6a8759' }}>'FastAPI', 'React', 'GenAI'</div>
                  <div className="mb-1 ps-5">]</div>
                  <div className="mb-1 ps-3"><span style={{ color: '#cc7832' }}>def</span> <span style={{ color: '#ffc66d' }}>code</span>(self):</div>
                  <div className="mb-1 ps-5"><span style={{ color: '#cc7832' }}>return</span> <span style={{ color: '#6a8759' }}>"Building the future..."</span></div>
                </div>

                {/* Orbiting Icons */}
                <div className="position-absolute top-0 start-100 translate-middle floating-icon" style={{animationDelay: '0s'}}>
                  <div className="bg-dark-card p-3 rounded-circle border border-teal border-opacity-25 shadow-lg glow-teal">
                    <Code2 className="text-teal" size={28} />
                  </div>
                </div>
                
                <div className="position-absolute bottom-0 start-0 translate-middle floating-icon" style={{animationDelay: '1.5s'}}>
                  <div className="bg-dark-card p-3 rounded-circle border border-purple border-opacity-25 shadow-lg glow-purple">
                    <Cpu className="text-purple" size={28} />
                  </div>
                </div>

                 <div className="position-absolute top-0 start-0 translate-middle floating-icon" style={{animationDelay: '3s'}}>
                  <div className="bg-dark-card p-3 rounded-circle border border-warning border-opacity-25 shadow-lg">
                    <Terminal className="text-warning" size={24} />
                  </div>
                </div>
              </div>
              
              {/* Background Ring */}
              <div className="position-absolute top-50 start-50 translate-middle w-100 h-100 border border-teal opacity-10 rounded-circle" style={{zIndex: -1, transform: 'scale(1.2)'}}></div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;