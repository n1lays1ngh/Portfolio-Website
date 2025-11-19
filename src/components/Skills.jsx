import React from 'react';
import { Zap, Globe, Cpu, BookOpen } from 'lucide-react';
import { DATA } from '../data';

const Skills = () => {
  return (
    <section id="skills" className="bg-dark-section overflow-hidden">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-white">Skills & Expertise</h2>
          <p className="text-secondary">My technical toolkit and academic foundation.</p>
        </div>

        {/* --- TOP: Technical Stack (Marquee) --- */}
        <div className="row justify-content-center mb-5">
          <div className="col-12">
            {/* Transparent Container for Tech Stack */}
            <div className="py-2 h-100 d-flex flex-column justify-content-center">
              <div className="d-flex justify-content-center align-items-center mb-4">
                {/* <div className="d-inline-flex align-items-center px-3 py-1 rounded-pill bg-dark-card border border-secondary border-opacity-25">
                   <Cpu className="text-teal me-2" size={16} /> 
                   <span className="text-white small fw-bold uppercase tracking-wide">Technical Stack</span>
                </div> */}
              </div>
              
              {/* Marquee Container */}
              <div className="scroller w-100" style={{maxWidth: '100%'}}>
                <div className="scroller__inner">
                  {[...DATA.skills.technical, ...DATA.skills.technical].map((skill, index) => (
                    <div key={index} className="d-flex flex-column align-items-center gap-2 text-secondary hover-teal transition-all" style={{minWidth: '80px'}}>
                      <i className={`${skill.icon} fs-2`}></i> {/* Reduced icon size */}
                      <span className="small fw-medium" style={{fontSize: '0.75rem'}}>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- BOTTOM: Details Grid --- */}
        <div className="row g-4">
          
          {/* Col 1: Soft Skills */}
          <div className="col-md-4">
            <div className="p-4 bg-dark-card rounded-4 border border-secondary border-opacity-10 h-100">
              <h5 className="text-white mb-4 d-flex align-items-center">
                <Zap className="text-warning me-2" size={20} /> 
                Soft Skills
              </h5>
              <div className="d-flex flex-wrap gap-2">
                {DATA.skills.soft.map((skill, index) => (
                  <div key={index} className="skill-badge">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2: Languages */}
          <div className="col-md-4">
            <div className="p-4 bg-dark-card rounded-4 border border-secondary border-opacity-10 h-100">
              <h5 className="text-white mb-4 d-flex align-items-center">
                <Globe className="text-primary me-2" size={20} /> 
                Languages
              </h5>
              <div className="d-flex flex-column gap-3">
                {DATA.skills.languages.map((lang, index) => (
                  <div key={index} className="d-flex align-items-center gap-3 p-2 rounded hover-bg-darker transition-all">
                     <div className="d-flex align-items-center justify-content-center rounded bg-secondary bg-opacity-10 text-white fw-bold border border-secondary border-opacity-25" style={{width: '40px', height: '40px'}}>
                       {lang.name.substring(0, 2).toUpperCase()}
                     </div>
                     <div>
                       <div className="text-white fw-bold small">{lang.name}</div>
                       <div className="text-secondary text-opacity-75" style={{fontSize: '11px'}}>{lang.level}</div>
                     </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Col 3: Relevant Coursework */}
          <div className="col-md-4">
            <div className="p-4 bg-dark-card rounded-4 border border-secondary border-opacity-10 h-100">
               <h5 className="text-white mb-4 d-flex align-items-center">
                <BookOpen className="text-teal me-2" size={20} /> 
                Coursework
              </h5>
              <ul className="list-unstyled mb-0">
                {DATA.skills.coursework.map((course, index) => (
                  <li key={index} className="d-flex align-items-start mb-2 text-secondary small">
                    <span className="text-teal me-2 mt-1">▹</span>
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;