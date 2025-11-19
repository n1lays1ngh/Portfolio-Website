import React from 'react';
import { MapPin } from 'lucide-react';
import { DATA } from '../data';

const Education = () => (
  <section id="education" className="bg-darker">
    <div className="container">
      <div className="text-center mb-5">
        <h2 className="fw-bold text-white">Education</h2>
        <p className="text-secondary">My academic journey and achievements.</p>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          {DATA.education.map((edu, index) => (
            <div key={index} className="card bg-dark-card border-0 mb-4 shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                  <div>
                    <h4 className="text-white mb-1">{edu.degree}</h4>
                    <p className="text-teal mb-0">{edu.field}</p>
                  </div>
                  <span className="badge bg-dark-section text-white border border-secondary py-2 px-3 mt-2 mt-md-0">CGPA: {edu.cgpa}</span>
                </div>
                <div className="text-secondary small mb-3">
                  <MapPin size={14} className="me-1" /> {edu.school} <br className="d-md-none"/>
                  <span className="mx-2 d-none d-md-inline">•</span> {edu.period}
                </div>
                <h6 className="text-white mt-4 mb-2">Achievements and Experience :</h6>
                <ul className="list-unstyled mb-0">
                  {edu.achievements.map((ach, i) => (
                    <li key={i} className="text-secondary mb-1 d-flex align-items-center">
                      <span className="text-teal me-2">▹</span> {ach}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Education;