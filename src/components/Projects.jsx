import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { DATA } from '../data';

const Github = ({ size = 18, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

// --- Data Partitioning ---
// Featured: top 3 projects by impact/impressiveness
const FEATURED_TITLES = ["SkillEval.ai", "KHABRI-The all in one news agent","Delhi Air Quality Prediction"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Machine Learning", "GenAI", "Backend", "Data Science"];

  const featuredProjects = DATA.projects.filter(p => FEATURED_TITLES.includes(p.title));

  const otherProjects = DATA.projects.filter(p => {
    // if (FEATURED_TITLES.includes(p.title)) return false;
    if (activeCategory === "All") return true;
    if (activeCategory === "Backend") {
      return p.tags.some(tag => ["FastAPI", "Node", "Express", "Django", "Flask", "SQL", "DBMS", "Backend"].includes(tag));
    }
    return p.tags.includes(activeCategory);
  });

  return (
    <section id="projects" className="bg-dark-section">
      <style>{`
        /* ---- Featured Cards ---- */
        .featured-card {
          background: linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }
        .featured-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 16px;
          padding: 1px;
          background: linear-gradient(135deg, rgba(0,210,180,0.3), transparent 60%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.35s ease;
          pointer-events: none;
        }
        .featured-card:hover::before { opacity: 1; }
        .featured-card:hover {
          transform: translateY(-5px);
          border-color: rgba(0,210,180,0.2);
          box-shadow: 0 20px 40px -15px rgba(0,0,0,0.5), 0 0 30px -10px rgba(0,210,180,0.1);
        }
        .featured-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          background: rgba(0,210,180,0.15);
          border: 1px solid rgba(0,210,180,0.4);
          color: #00d2b4;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 20px;
          backdrop-filter: blur(4px);
          z-index: 2;
        }
        .featured-img-wrap {
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        .featured-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          transition: transform 0.5s ease;
        }
        .featured-card:hover .featured-img-wrap img { transform: scale(1.04); }
        .featured-img-overlay {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 60px;
          background: linear-gradient(to bottom, transparent, #111);
        }
        .featured-body { padding: 20px; }
        .featured-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 8px;
        }
        .featured-desc {
          font-size: 0.87rem;
          color: #9ca3af;
          line-height: 1.55;
          margin-bottom: 14px;
        }

        /* ---- Other Projects Cards ---- */
        .other-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
          height: 100%;
        }
        .other-card:hover {
          background: rgba(255,255,255,0.05);
          border-color: rgba(255,255,255,0.15);
          transform: translateY(-3px);
          box-shadow: 0 10px 25px -10px rgba(0,0,0,0.4);
        }

        /* ---- Section Divider ---- */
        .section-divider {
          display: flex;
          align-items: center;
          gap: 16px;
          margin: 48px 0 28px;
        }
        .section-divider-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(to right, rgba(255,255,255,0.08), transparent);
        }
        .section-divider-label {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #6b7280;
        }

        /* ---- Filter Buttons ---- */
        .filter-btn {
          border-radius: 10px;
          font-weight: 600;
          font-size: 0.82rem;
          letter-spacing: 0.4px;
          padding: 9px 22px;
          transition: all 0.25s ease;
        }
        .filter-btn-inactive {
          background-color: rgba(255,255,255,0.04);
          color: #9ca3af;
          border: 1px solid rgba(255,255,255,0.08);
        }
        .filter-btn-inactive:hover {
          background-color: rgba(255,255,255,0.08);
          color: #fff;
          border-color: rgba(255,255,255,0.2);
        }
        .filter-btn-active {
          background-color: #fff;
          color: #000;
          border: 1px solid #fff;
        }

        /* ---- Tags ---- */
        .tag-pill {
          font-size: 0.68rem;
          padding: 3px 9px;
          border-radius: 20px;
          background: rgba(0,210,180,0.1);
          color: #00d2b4;
          border: 1px solid rgba(0,210,180,0.2);
        }

        /* ---- Buttons ---- */
        .card-btn {
          font-size: 0.78rem;
          padding: 6px 14px;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.2);
          color: #fff;
          background: transparent;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .card-btn:hover {
          background: rgba(255,255,255,0.1);
          color: #fff;
          border-color: rgba(255,255,255,0.4);
        }
      `}</style>

      <div className="container">
        {/* ---- Header ---- */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-white">Projects</h2>
          <p className="text-secondary">Demonstrating practical application of skills.</p>
        </div>

        {/* ======== TIER 1: FEATURED ======== */}
        <div className="row g-4">
          {featuredProjects.map((proj, idx) => (
            <motion.div
              key={proj.title}
              className="col-md-6 col-lg-4"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="featured-card h-100">
                <div className="featured-img-wrap">
                  <span className="featured-badge">★ Featured</span>
                  <img src={proj.img} alt={proj.title} loading="lazy" />
                  <div className="featured-img-overlay" />
                </div>
                <div className="featured-body d-flex flex-column h-100">
                  <div className="featured-title">{proj.title}</div>
                  <div className="featured-desc">{proj.description}</div>
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {proj.tags.slice(0, 5).map((tag, i) => (
                      <span key={i} className="tag-pill">{tag}</span>
                    ))}
                  </div>
                  <div className="mt-auto d-flex gap-2">
                    {proj.demoUrl && (
                      <a href={proj.demoUrl} target="_blank" rel="noopener noreferrer" className="card-btn">
                        <ExternalLink size={13} /> Demo
                      </a>
                    )}
                    <a href={proj.repoUrl} target="_blank" rel="noopener noreferrer" className="card-btn">
                      <Github size={13} /> Repo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ======== TIER 2: OTHER PROJECTS ======== */}
        <div className="section-divider">
          <div className="section-divider-line" />
          <span className="section-divider-label">More Projects</span>
          <div className="section-divider-line" style={{ background: 'linear-gradient(to left, rgba(255,255,255,0.08), transparent)' }} />
        </div>

        {/* Filter Buttons */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`btn filter-btn ${activeCategory === cat ? 'filter-btn-active' : 'filter-btn-inactive'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="row g-3">
          <AnimatePresence mode="popLayout">
            {otherProjects.map((proj) => (
              <motion.div
                layout
                key={proj.title}
                className="col-md-6 col-lg-3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <div className="other-card">
                  <img
                    src={proj.img}
                    alt={proj.title}
                    loading="lazy"
                    style={{ height: '140px', width: '100%', objectFit: 'cover', objectPosition: 'top' }}
                  />
                  <div className="p-3 d-flex flex-column" style={{ minHeight: '200px' }}>
                    <h6 className="text-white fw-bold mb-2" style={{ fontSize: '0.9rem' }}>{proj.title}</h6>
                    <p className="text-secondary mb-3" style={{ fontSize: '0.82rem', lineHeight: '1.45' }}>
                      {proj.description}
                    </p>
                    <div className="d-flex flex-wrap gap-1 mb-3">
                      {proj.tags.slice(0, 4).map((tag, i) => (
                        <span key={i} className="tag-pill">{tag}</span>
                      ))}
                    </div>
                    <div className="mt-auto d-flex gap-2">
                      {proj.demoUrl && (
                        <a href={proj.demoUrl} target="_blank" rel="noopener noreferrer" className="card-btn">
                          <ExternalLink size={12} /> Demo
                        </a>
                      )}
                      <a href={proj.repoUrl} target="_blank" rel="noopener noreferrer" className="card-btn">
                        <Github size={12} /> Repo
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {otherProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
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

