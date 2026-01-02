import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Server, Code, Cpu, Sigma, BookOpen, Globe } from 'lucide-react';
import { DATA } from '../data';

const Skills = () => {
  
  // Icon mapping
  const IconMap = { Brain, Server, Code, Cpu, Sigma };

  return (
    <section id="skills" className="bg-dark-section overflow-hidden py-5">
      <div className="container">
        
        {/* --- Header --- */}
        <div className="text-center mb-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="fw-bold text-white">Skills</h2>
            <p className="text-secondary">A breakdown of my engineering capabilities and theoretical foundations.</p>
          </motion.div>
        </div>

        {/* --- 1. MARQUEE (Restored to Original "Icon Top" Style) --- */}
        <div className="row justify-content-center mb-5">
          <div className="col-12">
            {/* Transparent Container (Removed borders/backgrounds) */}
            <div className="py-2 h-100 d-flex flex-column justify-content-center">
              
              {/* Marquee Container */}
              <div className="scroller w-100" style={{maxWidth: '100%'}}>
                <div className="scroller__inner">
                  {[...DATA.skills.technical, ...DATA.skills.technical].map((skill, index) => (
                    <div 
                      key={index} 
                      // Restored original flex-column layout (Icon Top, Text Bottom)
                      className="d-flex flex-column align-items-center gap-2 text-secondary hover-teal transition-all" 
                      style={{minWidth: '80px'}}
                    >
                      {/* Restored larger icon size (fs-2) */}
                      <i className={`${skill.icon} fs-2`}></i> 
                      {/* Restored original font styling */}
                      <span className="small fw-medium" style={{fontSize: '0.75rem'}}>
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- 2. COMPETENCY GRID (Tall & Narrow Cards) --- */}
        <div className="row g-3 mb-5">
          {DATA.skills.domainExpertise.map((item, index) => {
            const IconComponent = IconMap[item.icon] || Code;
            
            return (
              <div key={index} className="col-md-6 col-lg-3">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="p-4 bg-dark-card rounded-4 border border-secondary border-opacity-10 h-100 hover-bg-darker transition-all group d-flex flex-column"
                  style={{ minHeight: '380px' }} 
                >
                  <div className="mb-4">
                    <div className="d-flex justify-content-between align-items-start mb-4">
                      <div className="p-3 rounded-3 bg-dark-lighter text-teal">
                        <IconComponent size={24} />
                      </div>
                      <span className="text-secondary text-opacity-25 fw-bold font-monospace" style={{fontSize: '1.5rem'}}>
                        0{index + 1}
                      </span>
                    </div>
                    <h5 className="text-white fw-bold mb-3">{item.title}</h5>
                    <p className="text-secondary small mb-0" style={{lineHeight: '1.6'}}>
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-auto pt-4 border-top border-secondary border-opacity-10">
                    <div className="d-flex flex-wrap gap-2">
                      {item.tags && item.tags.map((tag, i) => (
                        <span 
                          key={i} 
                          className="badge bg-transparent text-teal border border-teal border-opacity-25 rounded-1 fw-normal px-2 py-1 font-monospace"
                          style={{ fontSize: '0.7rem' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* --- 3. BOTTOM: Coursework & Languages --- */}
        <div className="row g-4">
          
          {/* Relevant Coursework */}
          <div className="col-md-8">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-4 bg-dark-card rounded-4 border border-secondary border-opacity-10 h-100"
            >
               <h5 className="text-white mb-4 d-flex align-items-center">
                <BookOpen className="text-teal me-2" size={20} /> 
                Academic Foundation
              </h5>
              <div className="d-flex flex-wrap gap-2">
                {DATA.skills.coursework.map((course, index) => (
                  <span 
                    key={index} 
                    className="badge bg-dark-lighter text-secondary border border-secondary border-opacity-10 rounded-pill px-3 py-2 fw-normal"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Languages */}
          <div className="col-md-4">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="p-4 bg-dark-card rounded-4 border border-secondary border-opacity-10 h-100"
            >
              <h5 className="text-white mb-4 d-flex align-items-center">
                <Globe className="text-primary me-2" size={20} /> 
                Languages
              </h5>
              <div className="d-flex flex-column gap-3">
                {DATA.skills.languages.map((lang, index) => (
                  <div key={index} className="d-flex align-items-center gap-3">
                     <div className="d-flex align-items-center justify-content-center rounded bg-secondary bg-opacity-10 text-white fw-bold border border-secondary border-opacity-25" style={{width: '35px', height: '35px', fontSize: '0.8rem'}}>
                       {lang.name.substring(0, 2).toUpperCase()}
                     </div>
                     <div>
                       <div className="text-white fw-bold small">{lang.name}</div>
                       <div className="text-secondary text-opacity-75" style={{fontSize: '0.75rem'}}>{lang.level}</div>
                     </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;