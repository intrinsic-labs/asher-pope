'use client';

import { useEffect } from 'react';

export default function SmoothScroll() {
  useEffect(() => {
    // Get all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    // Add click event listener to each anchor link
    anchorLinks.forEach(link => {
      link.addEventListener('click', (e: Event) => {
        e.preventDefault();
        
        // Get the target element
        const anchorElement = link as HTMLAnchorElement;
        const targetId = anchorElement.getAttribute('href');
        if (!targetId) return;
        
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;
        
        // Calculate offset (accounting for fixed header)
        const headerHeight = document.querySelector('header')?.offsetHeight || 0;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
        
        // Scroll smoothly to the target
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      });
    });
  }, []);
  
  return null; // This component doesn't render anything
} 