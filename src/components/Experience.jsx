import React from 'react';

// Experience component - Converted from original HTML experience section
// No visual or behavioral changes - pure mechanical migration
const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <h2>Experience</h2>
      <div className="experience-grid">
        <div className="experience-card">
          <h3>Freelance Full Stack Developer</h3>
          <div className="company">Self-employed</div>
          <div className="duration">Present</div>
          <p>
            Delivered client projects including a live medical billing system.
            Handled backend integration, frontend development, deployment on Linux servers, and domain configuration.
          </p>
        </div>

        <div className="experience-card">
          <h3>Java Software Developer Intern</h3>
          <div className="company">Networks system</div>
          <div className="duration">August 2025 - September 2025</div>
          <p>Contributing to full-stack development projects using Java, Spring Boot, and React. 
             Collaborating with the team to design, develop, and test scalable web applications.</p>
        </div>

        <div className="experience-card">
          <h3>Customer Support Associate</h3>
          <div className="company">Hewlett Packard</div>
          <div className="duration">September 2024 - May 2025</div>
          <p>Promoted and sold HP laptops and accessories, delivered product demos, booked service requests, and enhanced customer satisfaction.</p>
        </div>

        <div className="experience-card">
          <h3>Technical Support Engineer</h3>
          <div className="company">Derik Groups</div>
          <div className="duration">March 2024 - August 2024</div>
          <p>Provided troubleshooting, configured PCs, and managed network issues while delivering efficient technical support.</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
