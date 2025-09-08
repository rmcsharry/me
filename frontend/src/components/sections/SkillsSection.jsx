import React from 'react';
import './SkillsSection.css';

const SkillsSection = () => {
  const skills = [
    {
      title: "LEADERSHIP",
      description: "I have been in leadership roles almost my entire career. I love to mentor and lead people, and have managed the successful delivery of several $multi-million global projects.",
      icon: "👑"
    },
    {
      title: "ARCHITECTURE", 
      description: "I have a deep understanding of software architecture across several domains. I have built neural networks, simulations, games, AI bots, mobile apps and large global enterprise apps.",
      icon: "🏗️"
    },
    {
      title: "TYPESCRIPT",
      description: "I embraced Angular 2+ the day it launched and so learned TypeScript before most. Since then I have used it in React, NodeJS, Firebase, NextJs, Remix ... the list goes on!",
      icon: "📝"
    },
    {
      title: "RUBY ON RAILS",
      description: "Although I was a .Net and C# developer for many years, I switched to Ruby on Rails in 2013 and have used it to design and build several apps and API's.",
      icon: "💎"
    },
    {
      title: "AGILE",
      description: "I have been a Scrum Master and a leader of Scrum Masters but I'm not religious about it. I use what works to deliver results.",
      icon: "🔄"
    },
    {
      title: "CLOUD",
      description: "In 2013 I started working with AWS to manage and deploy a SaaS app with over 100 micro-services using docker containers. I am currently learning Kubernetes and Fission (serverless computing). I use Heroku daily.",
      icon: "☁️"
    }
  ];

  return (
    <section className="skills-section section">
      <div className="parallax-bg" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxtYXRyaXglMjBjb2RlfGVufDB8fHx8MTc1NzM0ODIxN3ww&ixlib=rb-4.1.0&q=85)'
      }}></div>
      <div className="matrix-overlay"></div>
      <div className="container">
        <div className="skills-content">
          <h2>A FEW OF MY SKILLS...</h2>
          <p className="skills-subtitle">I'm a code monkey experienced at leading other code monkeys ;)</p>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;