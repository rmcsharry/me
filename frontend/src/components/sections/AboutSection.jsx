import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section section">
      <div className="parallax-bg" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1732384001962-c40cf507aef3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxzdG9ybXRyb29wZXIlMjBoZWxtZXR8ZW58MHx8fHwxNzU3MzUxODcwfDA&ixlib=rb-4.1.0&q=85)'
      }}></div>
      <div className="matrix-overlay"></div>
      <div className="container">
        <div className="about-content">
          <h2>Software Engineering Stormtrooper</h2>
          <div className="about-grid">
            <div className="about-text">
              <h3>Join the Dark Side!</h3>
              <p>Use my Coding Force to get your SaaS platform built to your specifications.</p>
              <p>Darth Vader was pleased with me, you will be too!</p>
              <p className="no-death-stars">No Death Stars (sorry, I don't know hardware)</p>
            </div>
            <div className="corporate-logos">
              <h3>SOME OF THE LARGE CORPORATES WHERE I HAVE WORKED MY FORCE MAGIC...</h3>
              <p className="subtitle">Now I mostly focus on startups and early-stage companies</p>
              <div className="logos-grid">
                <div className="logo-item">
                  <img src="https://images.pexels.com/photos/33798614/pexels-photo-33798614.jpeg" alt="UBS" />
                  <span>UBS</span>
                </div>
                <div className="logo-item">
                  <img src="https://images.unsplash.com/photo-1566803739329-908e2b57fc39?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxmdXR1cmlzdGljJTIwdGVjaHxlbnwwfHx8fDE3NTczNDgyMDZ8MA&ixlib=rb-4.1.0&q=85" alt="Microsoft" />
                  <span>Microsoft</span>
                </div>
                <div className="logo-item">
                  <img src="https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg" alt="ING" />
                  <span>ING</span>
                </div>
                <div className="logo-item">
                  <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxtYXRyaXglMjBjb2RlfGVufDB8fHx8MTc1NzM0ODIxN3ww&ixlib=rb-4.1.0&q=85" alt="Other Corp" />
                  <span>Enterprise</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;