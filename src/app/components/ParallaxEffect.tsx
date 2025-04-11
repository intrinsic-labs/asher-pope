'use client';

import { useEffect } from 'react';

export default function ParallaxEffect() {
  useEffect(() => {
    const handleScroll = () => {
      const parallaxSections = document.querySelectorAll('.parallax-section');
      
      parallaxSections.forEach((section) => {
        const distance = window.scrollY;
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        
        // Only apply effect when section is in view
        if (distance > sectionTop - window.innerHeight && distance < sectionTop + sectionHeight) {
          // Calculate how far scrolled into the section
          const scrolledIntoSection = distance - sectionTop + window.innerHeight;
          const scrollPercentage = scrolledIntoSection / (window.innerHeight + sectionHeight);
          
          // Apply a subtle parallax effect to the background
          const yPos = scrollPercentage * 200; // 200px of total movement range
          
          // Apply the transform
          (section as HTMLElement).style.backgroundPosition = `center ${-yPos}px`;
        }
      });
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial call to position elements
    handleScroll();
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return null; // This component doesn't render anything
} 