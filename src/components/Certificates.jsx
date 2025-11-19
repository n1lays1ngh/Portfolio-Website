import React from 'react';
import { Download, ExternalLink } from 'lucide-react';
import { DATA } from '../data';

const Certificates = () => (
  <section id="certificates" className="bg-darker">
    <div className="container">
      <div className="text-center mb-5">
        <h2 className="fw-bold text-white">Certificates</h2>
        <p className="text-secondary">Professional certifications and achievements.</p>
      </div>
      <div className="row g-4">
        {DATA.certificates.map((cert, index) => (
          <div key={index} className="col-md-4">
            <div className="card bg-dark-card border-0 p-4 h-100">
              <div className="d-flex align-items-center mb-3">
                <div className="icon-box bg-teal-light text-teal p-2 rounded-3 me-3">
                  <Download size={24}/>
                </div>
                <div>
                   <h6 className="text-white mb-0">{cert.title}</h6>
                   <small className="text-secondary">{cert.issuer}</small>
                </div>
              </div>
              <div className="text-secondary small mb-3">
                <div className="mb-1">Issued: {cert.date}</div>
                <div>ID: {cert.id}</div>
              </div>
              <div className="d-flex gap-2 mt-auto">
                {/* Verify Link - Opens external URL */}
                <a 
                  href={cert.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-outline-light rounded-1 flex-grow-1 d-flex align-items-center justify-content-center gap-1 text-decoration-none"
                >
                    <ExternalLink size={12}/> Verify
                </a>
                
                {/* Download Link - Assumes files are in public folder */}
                {/* If you don't have specific files yet, this will just try to download from the URL provided */}
                <a 
                  href={cert.file} 
                  download 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-outline-light rounded-1 flex-grow-1 d-flex align-items-center justify-content-center gap-1 text-decoration-none"
                >
                    <Download size={12}/> Download
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Certificates;