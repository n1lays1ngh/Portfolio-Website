import React from 'react';
import { Download, Code2, Terminal, Cpu } from 'lucide-react';
import { DATA } from '../data';

const Hero = () => (
  <section id="home" className="min-vh-100 d-flex align-items-center position-relative overflow-hidden bg-darker pt-5">
    {/* New Engineering Grid Background */}
    <div className="grid-bg"></div>
    
    {/* Ambient Glow Blob */}
    <div className="glow-blob" style={{ top: '20%', right: '10%' }}></div>

    <div className="container position-relative z-1">
      <div className="row align-items-center">
        
        {/* LEFT: Text Content */}
        <div className="col-lg-7 mb-5 mb-lg-0 text-center text-lg-start">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-teal-light text-teal mb-4 border border-teal-subtle">
            <span className="position-relative d-flex h-2 w-2">
              <span className="animate-ping position-absolute d-inline-flex h-100 w-100 rounded-circle bg-teal opacity-75"></span>
              <span className="position-relative d-inline-flex rounded-circle h-2 w-2 bg-teal" style={{width:'8px', height:'8px'}}></span>
            </span>
            <span className="small fw-bold tracking-wide">Available for work</span>
          </div>

          {/* Name */}
          <h1 className="display-1 fw-bold mb-3 text-white lh-1">
            <span className="text-gradient-purple-blue">{DATA.name}</span>
          </h1>
          
          {/* Subheadline */}
          <div className="lead text-secondary mb-5 fs-4" style={{ maxWidth: '650px' }}>
            <p className="mb-2">
              Pre-final year Computer Engineering student at <span className="text-white fw-semibold">Thapar University</span>, striving for excellence in building scalable software and intelligent systems.
            </p>
            {/* <p className="fs-5 text-white opacity-75">
              Building the future of digital experiences.
            </p> */}
          </div>
          
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
            <a href="#projects" className="btn btn-teal btn-lg px-5 rounded-pill d-flex align-items-center justify-content-center text-decoration-none">
              View Projects
            </a>
            
            <a 
               href="/resume1.pdf" 
               download="Nilay_Singh_Resume.pdf"
               className="btn btn-outline-light btn-lg px-5 rounded-pill d-flex align-items-center justify-content-center gap-2 text-decoration-none"
            >
              <Download size={20} /> Resume
            </a>
          </div>
        </div>

        {/* RIGHT: Visual Elements (Floating Card) */}
        <div className="col-lg-5 position-relative d-none d-lg-block">
          <div className="floating-card p-4 rounded-4 shadow-lg position-relative z-2">
            <div className="d-flex gap-2 mb-4 opacity-50">
              <div className="rounded-circle bg-danger" style={{width:12, height:12}}></div>
              <div className="rounded-circle bg-warning" style={{width:12, height:12}}></div>
              <div className="rounded-circle bg-success" style={{width:12, height:12}}></div>
            </div>
            
            {/* UPDATED: Python Code Snippet Mockup */}
            <div className="font-monospace small text-secondary">
              <div className="mb-1"><span className="text-purple">class</span> <span className="text-warning">Student</span>:</div>
              <div className="mb-1 ps-3"><span className="text-purple">def</span> <span className="text-blue">__init__</span>(self):</div>
              <div className="mb-1 ps-5">self.<span className="text-teal">name</span> = <span className="text-success">'Nilay'</span></div>
              <div className="mb-1 ps-5">self.<span className="text-teal">university</span> = <span className="text-success">'Thapar'</span></div>
              <div className="mb-1 ps-5">self.<span className="text-teal">passion</span> = [</div>
              <div className="ps-5 text-success ms-4">'Python', 'Backend', 'AI/ML'</div>
              <div className="mb-1 ps-5">]</div>
              <div className="mb-1 ps-3"><span className="text-secondary"># Ready to code 🚀</span></div>
            </div>

            {/* Floating Icons Orbiting the Card */}
            <div className="position-absolute top-0 start-100 translate-middle floating-icon" style={{animationDelay: '1s'}}>
              <div className="bg-dark-card p-3 rounded-3 border border-secondary border-opacity-25 shadow">
                <Code2 className="text-teal" size={32} />
              </div>
            </div>
            
            <div className="position-absolute top-100 start-0 translate-middle floating-icon" style={{animationDelay: '2s'}}>
              <div className="bg-dark-card p-3 rounded-3 border border-secondary border-opacity-25 shadow">
                <Cpu className="text-purple" size={32} />
              </div>
            </div>

             <div className="position-absolute top-0 start-0 translate-middle floating-icon" style={{animationDelay: '3s'}}>
              <div className="bg-dark-card p-3 rounded-3 border border-secondary border-opacity-25 shadow">
                <Terminal className="text-warning" size={24} />
              </div>
            </div>
          </div>
          
          <div className="position-absolute top-50 start-50 translate-middle w-100 h-100 border border-teal opacity-10 rounded-circle" style={{zIndex: 0}}></div>
        </div>

      </div>
    </div>
  </section>
);

export default Hero;