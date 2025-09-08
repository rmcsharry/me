import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import EducationSection from './sections/EducationSection';
import TestimonialsSection from './sections/TestimonialsSection';
import ContactSection from './sections/ContactSection';
import './RichardMcSharryClone.css';

gsap.registerPlugin(ScrollTrigger);

const RichardMcSharryClone = () => {
  const mainRef = useRef();

  useEffect(() => {
    // Initialize parallax animations
    const ctx = gsap.context(() => {
      // Hero parallax effect
      gsap.to(".hero-bg", {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      // Section fade in animations
      gsap.utils.toArray('.section').forEach((section, i) => {
        gsap.fromTo(section, {
          opacity: 0,
          y: 100
        }, {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        });
      });

      // Parallax backgrounds for sections
      gsap.utils.toArray('.parallax-bg').forEach((bg) => {
        gsap.to(bg, {
          yPercent: -30,
          ease: "none",
          scrollTrigger: {
            trigger: bg.closest('.section'),
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });

    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="richard-mcsharry-clone">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
};

export default RichardMcSharryClone;