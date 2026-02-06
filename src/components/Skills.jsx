import React from 'react';

// Skills component - Converted from original HTML skills section
// No visual or behavioral changes - pure mechanical migration
const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="skill-category" data-aos="fade-up" data-aos-delay="100">
          <h3>Languages</h3>
          <ul className="skill-list">
            <li><i className="fab fa-html5"></i> HTML5</li>
            <li><i className="fab fa-css3-alt"></i> CSS3</li>
            <li><i className="fab fa-js-square"></i> JavaScript</li>
            <li><i className="fab fa-java"></i> Java</li>
          </ul>
        </div>
        <div className="skill-category" data-aos="fade-up" data-aos-delay="200">
          <h3>Frameworks & Libraries</h3>
          <ul className="skill-list">
            <li><i className="devicon-react-original colored"></i> React.js</li>
            <li><i className="fab fa-bootstrap"></i> Bootstrap</li>
            <li><i className="devicon-nodejs-plain colored"></i> Node.js</li>
            <li><i className="devicon-jquery-plain colored"></i> jQuery</li>
          </ul>
        </div>
        <div className="skill-category" data-aos="fade-up" data-aos-delay="300">
          <h3>Tools & Platforms</h3>
          <ul className="skill-list">
            <li><i className="fab fa-git-alt"></i> Git & GitHub</li>
            <li><i className="devicon-vscode-plain colored"></i> VS Code</li>
            <li><i className="fas fa-envelope-open-text"></i> Postman</li>
            <li><i className="devicon-npm-original-wordmark colored"></i> npm</li>
          </ul>
        </div>
        <div className="skill-category" data-aos="fade-up" data-aos-delay="400">
          <h3>Database & APIs</h3>
          <ul className="skill-list">
            <li><i className="devicon-mysql-plain colored"></i> MySQL</li>
            <li><i className="devicon-mongodb-plain colored"></i> MongoDB</li>
            <li><i className="fas fa-plug"></i> REST APIs</li>
          </ul>
        </div>
        <div className="skill-category" data-aos="fade-up" data-aos-delay="350">
          <h3>Backend</h3>
          <ul className="skill-list">
            <li><i className="fab fa-java backend-icon"></i> Spring Boot</li>
            <li><i className="fas fa-plug backend-icon"></i> REST APIs</li>
            <li><i className="fas fa-project-diagram backend-icon"></i> WebSockets</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
