import React, { useEffect } from 'react';
import resumeImage from '../assets/image2.jpg';
import resumePDF from '../assets/Vibin_V_Resume.pdf';

// Hero component - Converted from original HTML hero section
// No visual or behavioral changes - pure mechanical migration
const Hero = () => {
  // Typed.js initialization - converted from inline script
  useEffect(() => {
    // Load Typed.js from CDN if not already loaded
    if (!window.Typed) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/typed.js@2.0.12';
      script.async = true;
      script.onload = () => {
        initializeTyped();
      };
      document.body.appendChild(script);
    } else {
      initializeTyped();
    }

    function initializeTyped() {
      if (document.getElementById('typing')) {
        new window.Typed('#typing', {
          strings: [
            "Front-End Developer",
            "React Enthusiast", 
            "Java Full Stack Developer",
            "UI/UX Learner"
          ],
          typeSpeed: 60,
          backSpeed: 40,
          loop: true
        });
      }
    }
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hello, I'm <span>Vibin V</span></h1>
        <p className="intro-text">I am <span id="typing"></span></p>
        <br />
        <a href="#projects" className="btn-primary">View Projects</a>
        <a href={resumePDF} download className="btn-download" style={{ marginLeft: '15px' }}>
          <i className="fas fa-download"></i> Download Resume
        </a>
      </div>
      <div className="hero-image">
        <img src={resumeImage} alt="Vibin V - Front-End Developer" />
      </div>
    </section>
  );
};

export default Hero;
