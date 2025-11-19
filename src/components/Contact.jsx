import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { DATA } from '../data';

// --- Custom Social Icons (SVG) ---
const Github = ({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
);
const Linkedin = ({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
);
const Twitter = ({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
);
const Instagram = ({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
);
const LeetCode = ({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.156a5.3 5.3 0 0 0-.96-.088h-.002zm-2.99 7.976c-.25.014-.494.074-.721.187a1.368 1.368 0 0 0-.376 2.26l.006.006 4.622 4.579c.545.526 1.413.516 1.943-.029a1.377 1.377 0 0 0 .012-1.94L11.356 8.46a1.357 1.357 0 0 0-.863-.484zm7.333 2.563c-.432 0-.855.145-1.205.438a1.38 1.38 0 0 0-.24 1.941l1.983 2.444a3.033 3.033 0 0 1 .525 2.371 2.99 2.99 0 0 1-1.862 2.27 3.013 3.013 0 0 1-3.271-.869l-4.263-4.18a2.692 2.692 0 0 1-.681-1.169c-.021-.116-.035-.234-.041-.353a1.374 1.374 0 0 0-2.748.092c.021.414.092.822.215 1.215.235.749.62 1.43 1.125 1.996l4.262 4.18c2.198 2.155 5.864 2.23 8.154.17 2.29-2.059 2.347-5.592.132-7.727l-1.986-2.446a1.366 1.366 0 0 0-1.145-.533h-.169z"/></svg>
);

const Contact = () => (
  <section id="contact" className="py-6 bg-dark-section">
    <div className="container">
      <div className="text-center mb-5">
        <h2 className="fw-bold text-white">Get in Touch</h2>
        <p className="text-secondary">Have a question? Feel free to reach out!</p>
      </div>
      
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          
          {/* REDESIGNED: Smaller, compact contact box */}
          <div className="d-inline-flex flex-wrap justify-content-center gap-3 gap-md-4 mb-5">
             <a href={`mailto:${DATA.contact.email}`} className="d-flex align-items-center gap-2 text-decoration-none px-4 py-2 bg-dark-card border border-secondary border-opacity-25 rounded-pill hover-bg-darker transition-all">
                <Mail size={18} className="text-teal" />
                <span className="text-white small fw-medium">{DATA.contact.email}</span>
             </a>
             
             {/* <a href={`tel:${DATA.contact.phone}`} className="d-flex align-items-center gap-2 text-decoration-none px-4 py-2 bg-dark-card border border-secondary border-opacity-25 rounded-pill hover-bg-darker transition-all">
                <Phone size={18} className="text-teal" />
                <span className="text-white small fw-medium">{DATA.contact.phone}</span>
             </a> */}
          </div>

          {/* Social Icons */}
          <h6 className="text-white mb-4 small text-uppercase tracking-wide opacity-75">Connect on Socials</h6>
          <div className="d-flex justify-content-center gap-4">
             {[
               { Icon: Github, link: DATA.socials.github, color: "hover:text-white" },
               { Icon: Linkedin, link: DATA.socials.linkedin, color: "hover:text-blue-400" },
               { Icon: Twitter, link: DATA.socials.twitter, color: "hover:text-sky-400" },
               { Icon: Instagram, link: DATA.socials.instagram, color: "hover:text-pink-500" },
               { Icon: LeetCode, link: DATA.socials.leetcode, color: "hover:text-warning" },
             ].map((item, index) => (
               <a 
                 key={index} 
                 href={item.link} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className={`text-secondary transition-transform hover-scale ${item.color}`}
                 style={{ transition: '0.3s' }}
               >
                 <item.Icon size={28} />
               </a>
             ))}
          </div>

        </div>
      </div>
    </div>
  </section>
);

export default Contact;