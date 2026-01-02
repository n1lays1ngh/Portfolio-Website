import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { DATA } from '../data';

// Reduced icon size to match smaller card profile
const Github = ({ size = 18, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
);

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Machine Learning", "GenAI", "Backend", "Data Science"];

  const filteredProjects = DATA.projects.filter(proj => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Backend") {
      return proj.tags.some(tag => ["FastAPI", "Node", "Express", "Django", "Flask", "SQL", "DBMS"].includes(tag));
    }
    return proj.tags.includes(activeCategory);
  });

  return (
    <section id="projects" className="bg-dark-section">
      <style>
        {`
          /* --- Custom Button Styles --- */
          .filter-btn {
            border-radius: 12px;
            font-weight: 600;
            letter-spacing: 0.5px;
            padding: 12px 30px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
          }

          .filter-btn-inactive {
            background-color: rgba(255, 255, 255, 0.05);
            color: #9ca3af;
            border: 1px solid transparent; 
          }

          .filter-btn-inactive:hover {
            background-color: rgba(255, 255, 255, 0.1);
            color: #ffffff;
            border-color: rgba(255, 255, 255, 0.5);
            transform: translateY(-2px);
            box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.5);
          }

          .filter-btn-active {
            background-color: #ffffff;
            color: #000000;
            border: 1px solid #ffffff;
            transform: scale(1.05);
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
          }

          .filter-btn-active:hover {
            background-color: #ffffff !important;
            color: #000000 !important;
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
            transform: scale(1.05);
          }
        `}
      </style>

      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-white">Projects</h2>
          <p className="text-secondary">Demonstrating practical application of skills.</p>
        </div>

        {/* --- Filter Buttons --- */}
        <div className="d-flex flex-wrap justify-content-center gap-4 mb-5">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`btn filter-btn ${
                activeCategory === category
                  ? "filter-btn-active"
                  : "filter-btn-inactive"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* --- Projects Grid --- */}
        <div className="row g-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div 
                layout 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7, ease: "easeInOut" }} 
                key={proj.title} 
                className="col-md-6 col-lg-3"
              >
                <div className="card bg-dark-card border-0 h-100 shadow-sm hover-elevate">
                  {/* Image Container with Proper Fit Settings */}
                  <img 
                    src={proj.img} 
                    className="card-img-top" 
                    alt={proj.title} 
                    loading="lazy"
                    style={{ 
                      height: '160px',        // Slightly adjustable height
                      width: '100%',          // Ensures it spans full width
                      objectFit: 'cover',     // Prevents stretching/distortion
                      objectPosition: 'top'   // Focuses on the top of the screenshot (header)
                    }} 
                  />
                  
                  <div className="card-body p-3 d-flex flex-column">
                    <h6 className="text-white fw-bold mb-2">{proj.title}</h6>
                    <p className="text-secondary small mb-3" style={{ fontSize: '0.85rem', lineHeight: '1.4' }}>
                      {proj.description}
                    </p>
                    
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {proj.tags.map((tag, i) => (
                        <span key={i} className="badge bg-teal-light text-teal rounded-pill" style={{ fontSize: '0.7rem' }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mt-auto d-flex gap-2">
                      {proj.demoUrl && (
                        <a 
                          href={proj.demoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="btn btn-sm btn-outline-light rounded-pill flex-grow-1 d-flex align-items-center justify-content-center gap-1 text-decoration-none"
                          style={{ fontSize: '0.8rem' }}
                        >
                          <ExternalLink size={14}/> Demo
                        </a>
                      )}
                      
                      <a 
                        href={proj.repoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-sm btn-outline-light rounded-pill flex-grow-1 d-flex align-items-center justify-content-center gap-1 text-decoration-none"
                        style={{ fontSize: '0.8rem' }}
                      >
                        <Github size={14}/> Repo
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {filteredProjects.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 0.5 }}
              transition={{ duration: 0.7 }}
              className="text-center text-secondary py-5 w-100"
            >
              <p>No projects found in this category.</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;