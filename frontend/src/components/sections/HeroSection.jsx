import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './HeroSection.css';

const HeroSection = () => {
  const heroRef = useRef();
  const titleRef = useRef();
  const subtitleRef = useRef();
  const quoteRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.fromTo(titleRef.current, {
        opacity: 0,
        y: 100,
        scale: 0.8
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 2,
        ease: "power4.out"
      })
      .fromTo(subtitleRef.current, {
        opacity: 0,
        x: -50
      }, {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power3.out"
      }, "-=1")
      .fromTo(quoteRef.current, {
        opacity: 0,
        y: 50
      }, {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out"
      }, "-=0.5");

      // Floating animation for hero elements
      gsap.to(".hero-portrait", {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="hero-section section">
      <div className="matrix-bg hero-bg" style={{
        backgroundImage: 'url(https://richardmcsharry.com/assets/images/mbr-1920x1200.jpg)'
      }}></div>
      <div className="matrix-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 ref={titleRef}>Welcome to my place in the matrix</h1>
            <div ref={subtitleRef} className="hero-subtitle">
              <h3>Richard McSharry</h3>
              <p>BSc (Hons), MA (Dist)</p>
            </div>
            <div ref={quoteRef} className="hero-quote">
              <p className="quote-text">
                "It is the supreme art of the teacher to awaken joy in creative expression and knowledge."
              </p>
              <p className="quote-author">Albert Einstein</p>
            </div>
          </div>
          <div className="hero-portraits">
            <div className="hero-portrait portrait-1">
              <img src="https://images.unsplash.com/photo-1706606999710-72658165a73d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMHdvbWFuJTIwZmFjZXxlbnwwfHx8fDE3NTczNTE4NTl8MA&ixlib=rb-4.1.0&q=85" alt="Robot Woman" />
            </div>
            <div className="hero-portrait portrait-2">
              <img src="https://images.unsplash.com/photo-1650171457588-dc7baef3ed22?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxZnxmdXR1cmlzdGljJTIwcm9ib3QlMjBtYW58ZW58MHx8fHwxNzU3MzUxODY1fDA&ixlib=rb-4.1.0&q=85" alt="Futuristic Robot Man" />
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;