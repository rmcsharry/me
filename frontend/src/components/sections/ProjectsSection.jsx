import React from 'react';
import './ProjectsSection.css';

const ProjectsSection = () => {
  const projects = [
    {
      title: "A revolutionary SaaS app for email marketing",
      image: "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg",
      description: "RealCampaign - Email marketing platform"
    },
    {
      title: "A web-based music app for a nightclub brand",
      image: "https://images.unsplash.com/photo-1701099153587-6f28b448ff0e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwyfHxtYXRyaXglMjBiaW5hcnklMjBjb2RlfGVufDB8fHx8MTc1NzM0ODE5OXww&ixlib=rb-4.1.0&q=85",
      description: "Decadence - Web music application"
    },
    {
      title: "A cross-platform Sales app for the German Auto industry",
      image: "https://images.unsplash.com/photo-1566803739329-908e2b57fc39?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxmdXR1cmlzdGljJTIwdGVjaHxlbnwwfHx8fDE3NTczNDgyMDZ8MA&ixlib=rb-4.1.0&q=85",
      description: "Compass - Sales application for automotive"
    },
    {
      title: "My own MS Partner company (now closed) for building apps",
      image: "https://images.pexels.com/photos/33798614/pexels-photo-33798614.jpeg",
      description: "ElectricScribes - Development company"
    },
    {
      title: "A touch POS kiosk app for a major UK tourist attraction",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxtYXRyaXglMjBjb2RlfGVufDB8fHx8MTc1NzM0ODIxN3ww&ixlib=rb-4.1.0&q=85",
      description: "Grand Pier - Tourism kiosk system"
    },
    {
      title: "A SaaS app for flooring retailers (my own company)",
      image: "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg",
      description: "FloorBook - Retail management system"
    }
  ];

  return (
    <section className="projects-section section">
      <div className="parallax-bg" style={{
        backgroundImage: 'url(https://images.pexels.com/photos/33798614/pexels-photo-33798614.jpeg)'
      }}></div>
      <div className="matrix-overlay"></div>
      <div className="container">
        <div className="projects-content">
          <h2>SOME THINGS I HAVE BUILT...</h2>
          <p className="projects-subtitle">From apps to companies</p>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.description} />
                  <div className="project-overlay">
                    <h4>{project.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="project-highlight">
            <h3>~ PROJECT HIGHLIGHT ~</h3>
            <div className="highlight-content">
              <div className="highlight-text">
                <p>My own dev team and I were hired to design and build the UI and UX experience for this cutting-edge secure email client and SaaS service. It was rated 4/5 by PC Magazine, using words such as 'slick' and 'intuitive' describing the UI/UX I had designed and built.</p>
                <p>Unfortunately it was later forced to shut down by the government's security services. Yes, it was too secure for their liking! :)</p>
                <a href="#" className="cta-button">LEARN MORE</a>
              </div>
              <div className="highlight-image">
                <img src="https://images.unsplash.com/photo-1566803739329-908e2b57fc39?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxmdXR1cmlzdGljJTIwdGVjaHxlbnwwfHx8fDE3NTczNDgyMDZ8MA&ixlib=rb-4.1.0&q=85" alt="PC Magazine Review" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;