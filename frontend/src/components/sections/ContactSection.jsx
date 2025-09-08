import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact-section section">
      <div className="parallax-bg" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1566803739329-908e2b57fc39?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxmdXR1cmlzdGljJTIwdGVjaHxlbnwwfHx8fDE3NTczNDgyMDZ8MA&ixlib=rb-4.1.0&q=85)'
      }}></div>
      <div className="matrix-overlay"></div>
      <div className="container">
        <div className="contact-content">
          <div className="quote-section">
            <blockquote className="main-quote">
              "We are all in the gutter, but some of us are looking at the stars"
            </blockquote>
            <p className="quote-attribution">Oscar Wilde</p>
            <div className="quote-elaboration">
              <p>Although this is my favourite quote, my favourite writer is Isaac Asimov. His epic saga "The Foundation Series" changed my life.</p>
              <p>If you have not read it, you should. It will expand your consciousness like no other book I have ever read...and trust me, I have read quite a lot!</p>
            </div>
          </div>

          <div className="film-highlight">
            <div className="film-content">
              <div className="film-text">
                <h3>~ I LOVE TO PAY IT FORWARD AND AM ALSO A FILM NUT ~</h3>
                <p>The Arts are a vital part of a thriving culture, so when a young student I had previously taught needed help launching his film career I was only too glad to help produce his first short films. He now runs his own successful film company in London, UK.</p>
                <p>"Paying It Forward" is something I love to do (and is also one of my all-time favourite movies).</p>
                <a href="#" className="film-button">PARADOX HOUSE</a>
              </div>
              <div className="film-image">
                <img src="https://images.pexels.com/photos/33798614/pexels-photo-33798614.jpeg" alt="IMDB Screenshot" />
              </div>
            </div>
          </div>

          <div className="contact-info">
            <div className="avatar-section">
              <div className="avatar">
                <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxtYXRyaXglMjBjb2RlfGVufDB8fHx8MTc1NzM0ODIxN3ww&ixlib=rb-4.1.0&q=85" alt="Code Monkey Avatar" />
                <p className="avatar-title">Code Monkey</p>
              </div>
              <div className="contact-details">
                <div className="contact-item">
                  <h4>ADDRESS</h4>
                  <p>The Code Monkey</p>
                  <p>Platform 327,</p>
                  <p>Cloud City,</p>
                  <p>Bespin</p>
                </div>
                <div className="contact-item">
                  <h4>SKYPE ME</h4>
                  <p>rmcsharry</p>
                </div>
                <div className="contact-item">
                  <h4>LINKS</h4>
                  <a href="#" className="contact-link">Open my Resume</a>
                  <a href="#" className="contact-link">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;