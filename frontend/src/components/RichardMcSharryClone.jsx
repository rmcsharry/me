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
      // Set better rendering properties for smoother animation
      gsap.set([".parallax-bg", ".matrix-bg"], { 
        force3D: true,
        transformOrigin: "center center",
        backfaceVisibility: "hidden",
        perspective: 1000
      });

      // Very subtle parallax effect for hero background
      gsap.to(".hero-bg", {
        y: "-3%",
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 3,
          invalidateOnRefresh: true
        }
      });

      // Section fade in animations
      gsap.utils.toArray('.section').forEach((section, i) => {
        gsap.fromTo(section, {
          opacity: 0,
          y: 20
        }, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true
          }
        });
      });

      // Minimal parallax for section backgrounds
      gsap.utils.toArray('.parallax-bg').forEach((bg) => {
        gsap.to(bg, {
          y: "-2%",
          ease: "none",
          scrollTrigger: {
            trigger: bg.closest('.section'),
            start: "top bottom",
            end: "bottom top",
            scrub: 3,
            invalidateOnRefresh: true
          }
        });
      });

      // Clean up on resize to prevent artifacts
      ScrollTrigger.addEventListener("refresh", () => {
        gsap.set([".parallax-bg", ".matrix-bg"], { 
          clearProps: "transform",
          force3D: true 
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