import React, { useEffect } from 'react';

// Footer component - Converted from original HTML footer section
// No visual or behavioral changes - pure mechanical migration
const Footer = () => {
  // Year update logic - converted from inline script
  useEffect(() => {
    const yearElement = document.getElementById("year");
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }, []);

  return (
    <footer>
      &copy; <span id="year"></span> Vibin V. All rights reserved.
    </footer>
  );
};

export default Footer;
