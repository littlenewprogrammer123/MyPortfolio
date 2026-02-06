import React from 'react';

// Testimonials component - Converted from original HTML testimonials section
// No visual or behavioral changes - pure mechanical migration
const Testimonials = () => {
  return (
    <section className="testimonials-section" id="testimonials">
      <h2>What Clients Say</h2>
      <div className="testimonials-grid">
        <div className="testimonial-card">
          <span className="quote-icon">❝</span>
          <p>Vibin delivered our medical billing system on time and exceeded expectations. 
          The site is secure, responsive, and easy to use. Highly recommended!</p>
          <h4>- CapeMed Healthcare</h4>
          <span className="quote-icon end">❞</span>
        </div>

        {/* Add more testimonials in future if needed */}
        {/* 
        <div className="testimonial-card">
          <p>"Vibin is dedicated, communicates clearly, and builds exactly what you need."</p>
          <h4>- Another Client</h4>
        </div>
        */}
      </div>
    </section>
  );
};

export default Testimonials;
