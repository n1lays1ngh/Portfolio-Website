import React from 'react';
import { Download, ArrowRight } from 'lucide-react';
import { DATA } from '../data';

const About = () => (
  <section id="about" className="bg-dark-section py-6">
    <div className="container">
      <div className="row align-items-center gx-5">
        
        {/* LEFT: Text Content */}
        <div className="col-lg-6 mb-5 mb-lg-0 order-2 order-lg-1">
          <div className="d-inline-block mb-3">
            <span className="text-teal fw-bold text-uppercase tracking-wide small border-bottom border-teal pb-1">
              About Me
            </span>
          </div>
          
          <h2 className="display-5 fw-bold text-white mb-4">
            Engineering the Future with <br />
            <span className="text-gradient-purple-blue">Code & Data</span>
          </h2>
          
          <p className="text-secondary lead mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            I am a pre-final year Computer Engineering undergraduate at <strong className="text-white">Thapar Institute of Engineering and Technology</strong>, driven by a passion for solving complex problems and building impactful solutions.
          </p>
          
          <p className="text-secondary mb-5" style={{ lineHeight: '1.7' }}>
            With a solid foundation in Python, I specialize in machine learning, NLP, and backend development using FastAPI. I believe that experience is the best teacher, and I constantly strive to learn from every challenge—whether it's a success or a setback. Beyond academics, I actively explore emerging technologies to grow both personally and professionally.
          </p>
          
          <div className="d-flex gap-3">
            {/* <a 
              href="/resume.pdf" 
              download="Nilay_Singh_Resume.pdf"
              className="btn btn-teal rounded-pill px-4 py-2 d-inline-flex align-items-center gap-2"
            >
              Download CV <Download size={18} />
            </a> */}
            
            <a href="#contact" className="btn btn-link text-white text-decoration-none d-inline-flex align-items-center gap-2 group-hover-move">
              Let's Talk <ArrowRight size={18} className="transition-transform" />
            </a>
          </div>
        </div>

        {/* RIGHT: Image Content */}
        <div className="col-lg-6 order-1 order-lg-2 mb-5 mb-lg-0">
          <div className="position-relative mx-auto" style={{ maxWidth: '450px' }}>
            {/* Main Image */}
            <div className="ratio ratio-1x1 rounded-4 overflow-hidden shadow-lg position-relative z-2 border border-secondary border-opacity-10">
              <img 
                src={DATA.about.img} 
                alt="Nilay Singh" 
                className="object-fit-cover w-100 h-100 transition-transform hover-scale"
              />
            </div>
            
            {/* Decorative Background Elements */}
            <div className="position-absolute top-0 start-0 w-100 h-100 border border-teal rounded-4 z-1" 
                 style={{ transform: 'translate(20px, 20px)', opacity: 0.5 }}></div>
            
            {/* Floating Badge */}
            {/* <div className="position-absolute bottom-0 end-0 z-3 bg-dark-card p-3 rounded-3 shadow-lg border border-secondary border-opacity-25 mb-4 me-n4 d-none d-md-block">
              <div className="d-flex align-items-center gap-3">
                <div className="bg-teal-light p-2 rounded-circle text-teal">
                  <span className="fw-bold fs-4">2+</span>
                </div>
                <div className="text-white lh-1 text-start">
                  <div className="fw-bold">Years of</div>
                  <div className="small text-secondary">Experience</div>
                </div>
              </div>
            </div> */}
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default About;