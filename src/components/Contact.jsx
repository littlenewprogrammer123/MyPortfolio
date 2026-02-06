import React from 'react';
import resumePDF from '../assets/Vibin_V_Resume.pdf';

// Contact component - Converted from original HTML contact section
// No visual or behavioral changes - pure mechanical migration
const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2>Contact Me</h2>
      <p>Feel free to reach out through any of the platforms below!</p>
      <div className="contact-icons">
        <a href="mailto:vibinworkmail@gmail.com" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-envelope"></i>Email
        </a>
        <a href="https://github.com/littlenewprogrammer123" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>GitHub
        </a>
        <a href="https://www.linkedin.com/in/vibinvlinkin" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>LinkedIn
        </a>
        <a href={resumePDF} target="_blank" rel="noopener noreferrer" title="Resume">
          <i className="fas fa-file-alt"></i>Resume
        </a>
      </div>
    </section>
  );
};

export default Contact;
