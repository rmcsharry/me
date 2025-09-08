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
      <div className="matrix-bg hero-bg"></div>
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
              <img src="https://images.unsplash.com/photo-1566803739329-908e2b57fc39?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxmdXR1cmlzdGljJTIwdGVjaHxlbnwwfHx8fDE3NTczNDgyMDZ8MA&ixlib=rb-4.1.0&q=85" alt="Futuristic Tech" />
            </div>
            <div className="hero-portrait portrait-2">
              <img src="https://images.pexels.com/photos/33798614/pexels-photo-33798614.jpeg" alt="Circuit Board" />
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