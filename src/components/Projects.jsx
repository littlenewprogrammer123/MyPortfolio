import React from 'react';
import portfolioPreview from '../assets/portfolio-preview.png';
import movieBookingImage from '../assets/image3.jpeg';
import medicalBillingImage from '../assets/medical-billing.png';
import todoAppImage from '../assets/images5.jpeg';
import weatherAppImage from '../assets/images6.jpeg';
import calculatorImage from '../assets/images7.jpeg';

// Projects component - Converted from original HTML projects section
// No visual or behavioral changes - pure mechanical migration
const Projects = () => {
  return (
    <section className="portfolio-section" id="projects">
      <h2>My Projects</h2>

      {/* Live Projects */}
      <h3 className="project-heading">Live Projects</h3>
      <div className="projects-grid">
        {/* Portfolio Website */}
        <div className="project-card">
          <span className="project-badge">Live</span>
          <img src={portfolioPreview} alt="Portfolio Website" />
          <h3>My Portfolio Website</h3>
          <p>The website you're currently viewing 🎉. A modern portfolio showcasing my skills, experience, and projects with responsive design and dark mode support.</p>
          <a href="https://littlenewprogrammer123.github.io/MyPortfolio/" target="_blank" rel="noopener noreferrer" className="btn-primary">🔗 Click to Visit</a>
        </div>

        {/* Movie Booking Website */}
        <div className="project-card">
          <span className="project-badge">Live</span>
          <img src={movieBookingImage} alt="Movie Booking App" />
          <h3>SunnyBooking - Movie Booking App</h3>
          <p>
            A realistic movie booking application built with React.js.
            Implements movie listings, booking flow with seat and date selection, and responsive UI.
            Designed using component-based architecture and client-side routing.
          </p>
          <a href="https://littlenewprogrammer123.github.io/moviebookingapp/" target="_blank" rel="noopener noreferrer" className="btn-primary">🔗 Click to Visit</a>
        </div>

        {/* Medical Billing Website */}
        <div className="project-card">
          <span className="project-badge freelance">Freelance • Live</span>
          <img src={medicalBillingImage} alt="Medical Billing Website" />
          <h3>Medical Billing Website</h3>
          <p>A live freelancing project for a healthcare client. Secure billing system with database integration, responsive UI, and seamless user experience.</p>
          <a href="https://capemedhealthcare.com/" target="_blank" rel="noopener noreferrer" className="btn-primary">🔗 Click to Visit</a>
        </div>
      </div>

      {/* Non-Live Projects */}
      <h3 className="project-heading">Non-Live Projects</h3>
      <div className="projects-grid">
        <div className="project-card">
          <img src={todoAppImage} alt="To-Do List App" />
          <h3>TaskMate - To-Do List App</h3>
          <p>An interactive to-do list manager with local storage support. Built using Vanilla JavaScript, HTML, and CSS.</p>
        </div>

        <div className="project-card">
          <img src={weatherAppImage} alt="Weather App" />
          <h3>WeatherNow - Live Weather App</h3>
          <p>Displays real-time weather data using a public API. Users can search any city and get instant updates. Built with Fetch API.</p>
        </div>

        <div className="project-card">
          <img src={calculatorImage} alt="Calculator App" />
          <h3>QuickCalc - Smart Calculator</h3>
          <p>A clean and responsive calculator app supporting all basic operations. Built with HTML, CSS, and JavaScript.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
