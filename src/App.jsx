import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DarkModeToggle from './components/DarkModeToggle';
import './styles/main.css';

// App component - Main application component
// No visual or behavioral changes - pure mechanical migration from original HTML
function App() {
  // AOS (Animate On Scroll) initialization - converted from inline script
  useEffect(() => {
    // Load AOS CSS if not already loaded
    if (!document.querySelector('link[href*="aos.css"]')) {
      const aosCSS = document.createElement('link');
      aosCSS.rel = 'stylesheet';
      aosCSS.href = 'https://unpkg.com/aos@2.3.4/dist/aos.css';
      document.head.appendChild(aosCSS);
    }

    // Load AOS JS if not already loaded
    if (!window.AOS) {
      const aosScript = document.createElement('script');
      aosScript.src = 'https://unpkg.com/aos@2.3.4/dist/aos.js';
      aosScript.async = true;
      aosScript.onload = () => {
        if (window.AOS) {
          window.AOS.init({ duration: 800, once: true });
        }
      };
      document.body.appendChild(aosScript);
    } else {
      window.AOS.init({ duration: 800, once: true });
    }

    // Load Font Awesome if not already loaded
    if (!document.querySelector('link[href*="font-awesome"]')) {
      const fontAwesome = document.createElement('link');
      fontAwesome.rel = 'stylesheet';
      fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css';
      document.head.appendChild(fontAwesome);
    }

    // Load Devicon if not already loaded
    if (!document.querySelector('link[href*="devicon"]')) {
      const devicon = document.createElement('link');
      devicon.rel = 'stylesheet';
      devicon.href = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css';
      document.head.appendChild(devicon);
    }

    // Load Google Fonts if not already loaded
    if (!document.querySelector('link[href*="fonts.googleapis.com"]')) {
      const googleFonts = document.createElement('link');
      googleFonts.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap';
      googleFonts.rel = 'stylesheet';
      document.head.appendChild(googleFonts);
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Testimonials />
      <Contact />
      <DarkModeToggle />
      <Footer />
    </div>
  );
}

export default App;
