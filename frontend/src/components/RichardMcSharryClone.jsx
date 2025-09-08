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

      // Disable parallax background movement to prevent gaps
      // Hero background stays fixed
      gsap.set(".hero-bg", { y: 0 });

      // Section fade in animations only
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

      // Keep all backgrounds static to prevent bleeding
      gsap.set('.parallax-bg', { y: 0 });

      // Clean up on resize
      ScrollTrigger.addEventListener("refresh", () => {
        gsap.set([".parallax-bg", ".matrix-bg"], { 
          clearProps: "transform",
          force3D: true,
          y: 0
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