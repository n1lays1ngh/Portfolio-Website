import React from 'react';
import { MapPin } from 'lucide-react';
import { DATA } from '../data';

const Experience = () => (
  <section id="experience" className="bg-darker">
    <div className="container">
      <div className="text-center mb-5">
        <h2 className="fw-bold text-white">Professional Experience</h2>
        <p className="text-secondary">My journey through various roles.</p>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          {DATA.experience.map((exp, index) => (
            <div key={index} className="card bg-dark-card border-0 mb-4">
              <div className="card-body p-4">
                <h4 className="text-white">{exp.role}</h4>
                <p className="text-teal mb-1">{exp.company}</p>
                <p className="text-secondary small mb-3">
                  <MapPin size={14} className="me-1"/> {exp.location} | {exp.period}
                </p>
                <h6 className="text-white mt-3">Key Responsibilities</h6>
                <ul className="list-unstyled mb-3">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="text-secondary mb-1 d-flex align-items-start">
                      <span className="text-teal me-2 mt-1">✓</span> {resp}
                    </li>
                  ))}
                </ul>
                <div className="d-flex flex-wrap gap-2">
                  {exp.tags.map((tag, i) => (
                    <span key={i} className="badge bg-purple-light rounded-pill">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;