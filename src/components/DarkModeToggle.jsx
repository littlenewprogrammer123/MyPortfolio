import React, { useEffect, useState } from 'react';

// DarkModeToggle component - Converted from original HTML dark mode toggle
// No visual or behavioral changes - pure mechanical migration
const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Dark mode logic - converted from inline script
  useEffect(() => {
    const isDarkStored = localStorage.getItem('darkMode') === 'true';
    if (isDarkStored) {
      document.body.classList.add('dark-mode');
      setIsDarkMode(true);
    }
  }, []);

  const handleToggle = () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    setIsDarkMode(isDark);
    localStorage.setItem('darkMode', isDark);
  };

  return (
    <button 
      id="darkModeToggle" 
      aria-label="Toggle Dark Mode" 
      aria-pressed={isDarkMode}
      onClick={handleToggle}
    >
      <span className="icon sun">☀️</span>
      <span className="icon moon">🌙</span>
      <span className="toggle-circle"></span>
    </button>
  );
};

export default DarkModeToggle;
